import { createContext, useState } from 'react';
import app from './index.js'
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword
} from "firebase/auth";

export const AuthContext=createContext({})

export default function AuthProvider({children}){

const auth = getAuth(app)

const [user, setUser]= useState(null)

async function signIn(email,password) {
  // await signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  //   console.log('entrou com: ', user);
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
  // console.log('foi');
  console.log('signIn');
}

async function signUp(email,password,nome) {
  // await createUserWithEmailAndPassword(auth, email, password, nome)
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });
  console.log('signUp');
}

async function signOut(params) {
  console.log('signOut');
}

return (
  <AuthContext.Provider value={{signed:!!user ,user,signUp,signIn,signOut}} >
    {children}
  </AuthContext.Provider>
)
}