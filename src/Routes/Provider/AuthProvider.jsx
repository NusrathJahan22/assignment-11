/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../Config/Firebase.Config";




const auth = getAuth(app);

export const AuthContext =createContext(null);
const googleProvider = new GoogleAuthProvider(); 

const AuthProvider = ({children}) => {
    const[user,setUser] =useState()

//   GOOGLE LOGIN
const googleLogin=()=>{
return signInWithPopup(auth,googleProvider)
}

const signUp=(email,password)=>{
  return  createUserWithEmailAndPassword(auth, email, password)
}

const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

useEffect(() =>{
const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
    console.log('stae')
    setUser(currentUser)
});
return() =>{
    return unsubscribe();
}
},[])
const logout=() =>{
    return signOut(auth);
}

 const authentication={
    googleLogin,
    signUp,
    signIn,
    logout,
    user
 }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;