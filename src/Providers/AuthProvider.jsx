import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext=createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('')
    let [theme, setTheme] = useState("light");
    console.log(user);

    const createUser=(email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const userLogin=(email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const updatedProfile=(userName, url)=>{
        return updateProfile(auth.currentUser, {
            displayName: userName, photoURL: url
          })
    }

    const updateUserEmail=(email)=>{
        return updateEmail(auth.currentUser,email);
    }

    const emailVerification=()=>{
        return sendEmailVerification(auth.currentUser);
    }

    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider)
    }

    const userSignOut=()=>{
        return signOut(auth)
    }

    const passwordReset=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
                console.log(loading)
            }else{
                setUser(null);
            }
            setLoading(false);
        })
        return ()=>
            unsubscribe();
    },[])

    const authInfo={
        user,
        googleSignIn,
        userSignOut,
        createUser,
        userLogin,
        loading,
        email,
        setEmail,
        passwordReset,
        updatedProfile,
        updateUserEmail,
        emailVerification,
        setTheme,
        theme
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;