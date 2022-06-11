import { createContext } from 'react';
import app from './index.js'
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword
} from "firebase/auth";

export const AuthContext=createContext({})

const auth = getAuth(app)

export default async function AuthProvider({Children}){

  const [user, setUser]= useState(null)

  const [loading,setLoading]=useState(true)
  const [loadingAuth,setLoadingAuth]=useState(false)
  
  async function singIn(email,password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log('entrou com: ', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    console.log('foi');
  }
  
  async function singUp(email,password,nome) {
    createUserWithEmailAndPassword(auth, email, password, nome)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  
  async function singOut(params) {
    
  }

  return(
    <AuthContext.Provider value={{signed:!!user ,user,singIn,singUp,singOut}}>
      {Children}
    </AuthContext.Provider>
  )
  
}