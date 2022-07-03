import React, { createContext, useState, useEffect } from 'react';
import app from './index'
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword
} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext=createContext({})

export default function AuthProvider({children}){

const auth = getAuth(app)

const [user, setUser]= useState(null)

useEffect(()=>{
  async function loadStorage() {
    const storageUser= await AsyncStorage.getItem('Auth_user')

    if(storageUser){
      setUser(JSON.parse(storageUser))
      setLoading(false)
    }
    setLoading(false)

  }
  loadStorage()
},[])

async function signIn(email,password) {
  await firebase.auth().signInWithEmailAndPassword(email,password)
    .then(async(value)=>{
      let uid=value.user.uid
      await firebase.database().ref('users').child(uid).once('value', (snapshot)=> {
        let data={
          uid:uid,
          nome: snapshot.val().nome,
          email:value.user.email
        }
        setUser(data)
        storageUser(data)
        setLoadingAuth(false)
      })
    })
    .catch((error)=>{
      alert(error.code)
      setLoadingAuth(false)
    })
  console.log('signIn');
}

async function signUp(email,password,nome) {
  await createUserWithEmailAndPassword(auth, email, password)
  .then(async(value)=>{
    let uid=value.user.uid
    await firebase.database().ref('users').child(uid).set({
      saldo:0,
      nome: nome
    })
    .then(()=>{
      let data={
        uid:uid,
        nome:nome,
        email: value.user.email
      }
      setUser(data)
      storageUser(data)
      setLoadingAuth(false)

    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //..
  });
  console.log('signUp '+ nome);
}

async function signOut(params) {
  console.log('signOut');
}

async function storageUser(data){
  await AsyncStorage.setItem('Auth_user',JSON.stringify(data))
  Asyn
}

return (
  <AuthContext.Provider value={{signed:!!user ,user,signUp,signIn,signOut}} >
    {children}
  </AuthContext.Provider>
)
}