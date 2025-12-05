import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth'
import { toast } from 'react-toastify'
import { doc, getDoc, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router';

function OAuth() {
const navigate = useNavigate();

 async function onGoogleClick(){
 try {
  const auth=getAuth();
  const provider=new GoogleAuthProvider();
  const result=await signInWithPopup(auth,provider);
  const user=result.user;
  //check for the user

  const docRef=doc(db,'users',user.uid);
  const docSnap=await getDoc(docRef);

  if(!docSnap.exists()){
    await setDoc(docRef,{
      name:user.displayName,
      email:user.email,
      timestamp: serverTimestamp(),
      coins:100
    });
  }
 navigate("/home");
 } catch (error) {
  console.log(error);
  toast.error("Could not Authorized with Google")
 }
  }


  return (
    <button type='button' onClick={onGoogleClick} className='w-full border text-align  border-gray-500 py-2 bg-white text-black shadow-md uppercase text-sm font-medium active:bg-gray-500 active:shadow-lg transition duration-50 ease-in-out rounded'><i className='text-xl mr-2 fa-brands fa-google'></i>Continue with google </button>
  )
}

export default OAuth
