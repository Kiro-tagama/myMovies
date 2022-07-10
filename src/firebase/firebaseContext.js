import React, { createContext, useState, useEffect } from 'react';
import app from './index' //firebase config
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import {
  getDatabase,
  ref,
  onValue,
  set
} from 'firebase/database'

export const FirebaseContext=createContext({})

export default function AuthProvider({children}){
  
  const auth = getAuth(app)
  const db = getDatabase(app)
  
  const [user, setUser]= useState(null)


useEffect(()=>{
  async function loadStorage() {
    const storageUser= await AsyncStorage.getItem('Auth_user')

    if(storageUser){
      setUser(JSON.parse(storageUser))
    }

  }
  loadStorage()
},[])

async function signIn(email,password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((cred)=>{
      let user=cred.user

      onValue(ref(db,user.uid),(snap)=>{
        const dataUser = snap.val()
        setUser(dataUser)
      }) 
      storageUser(user)

      // ??????
      
      // await firebase.database().ref('users').child(uid).once('value', (snapshot)=> {
      //   let data={
      //     uid:uid,
      //     nome: snapshot.val().nome,
      //     email:value.user.email
      //   }
      //   setUser(data)
      //   storageUser(data)
      //   setLoadingAuth(false)
      // })
      //

    })
    .catch((err)=>{
      console.log(err);
    })
  console.log('signIn');
}

async function signUp(email,password,nome) {
  await createUserWithEmailAndPassword(auth, email, password, nome)
  .then((cred)=>{
    let user=cred.user
    // star save db user
    console.log('user:'+ user);
    set(ref(db,user.uid),{
      fav:{},
      nome:nome,
    }).then(()=>{
      onValue(ref(db,user.uid),(snap)=>{
        const dataUser = snap.val()
        setUser(dataUser)
      }) 
      storageUser(user)
    })

    // end save db user
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('err: '+errorCode+'\n'+errorMessage);
    //..
  });
}

async function storageUser(data){
  // save user
  await AsyncStorage.setItem('Auth_user',JSON.stringify(data))
}

async function deslog() {
  //deslog
  await signOut(auth)
  
  await AsyncStorage.clear()
  .then(()=>{
    setUser(null)
  })
  .catch(err=>console.log(err))
  
  console.log('saiu');
  return
}

async function includeInDb(type,code){
  // include user's favorite movie/series
  // include favorite movie/series of user

  /*
    id - user - fav - type[code]
  */
    set(ref(db,user.uid+'fav/'+type),{
      code
    })
}

async function removeForDb(type,code){
  // remove user's favorite movie/series
  // remove favorite movie/series of user

  /*
    id - user - Fav - type[code] // del code
  */
}


// data to child -> login and home (pages)
return (
  <FirebaseContext.Provider value={{signed:!!user ,user,signUp,signIn,deslog,includeInDb,removeForDb}} >
    {children}
  </FirebaseContext.Provider>
)
}