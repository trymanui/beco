import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import {getAuth, updateProfile} from 'firebase/auth'
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { updateDoc,doc, collection, query, where,  getDocs } from 'firebase/firestore';
import ListingItem from '../component/ListingItem';

function Profile() {
  const auth=getAuth();
  const [changeDetail,setChangeDetail]=useState(false);
  const [listings,setListings]=useState(null);
  const [loading,setLoading]=useState(true);
  const [formData,setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });

  const { name, email } = formData;
function onChange(e){
setFormData((prev)=>({
  ...prev,
  [e.target.id]:e.target.value,
}))
}

async function onsubmit(){
  try {
    if(auth.currentUser.displayName!==name){
      //update display name in firebase
      await updateProfile(auth.currentUser,{
        displayName:name,
      })
//update in firestore
const docRef=doc(db,"users",auth.currentUser.uid)
await updateDoc(docRef,{name,

});
    }
    toast.success("profile details updated");
  } catch (error) {
    toast.error("Could not update the profile details")
  }
}

useEffect(()=>{

async function fetchUserListings(){
const listingRef=collection(db,"listings");
const q=query (listingRef, where('userRef',"==",auth.currentUser.uid));
const querySnap=await getDocs(q)
let listings=[];
querySnap.forEach((doc)=>{
  return listings.push({
    id:doc.id,
    data:doc.data()
  });
});
setListings(listings);
setLoading(false);
}
fetchUserListings();
},[auth.currentUser.uid])
  return (
    <>
      {/* HEADER */}
      <div className="sticky top-0 bg-[#0B6E4F] z-40 px-4 py-4 shadow-sm -mt-2 rounded-b-3xl flex items-center">
        <Link to="/home">
          <i className="fa-solid fa-arrow-left text-white text-xl"></i>
        </Link>
        <h1 className="text-2xl font-bold text-white ml-4">My Profile</h1>
      </div>

      {/* PROFILE CARD */}
      <div className="mx-3 mt-6 p-4 rounded-3xl border border-white bg-white text-black flex gap-6 items-start shadow">

        {/* LEFT SIDE - ICON + EDIT */}
        <div className="relative flex flex-col items-center">
          {/* Profile Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-user text-green-800 text-4xl"></i>
          </div>

          {/* EDIT TAG */}
          <span onClick={()=>{
            changeDetail&& onsubmit();
            setChangeDetail((prev)=>!prev)}} className="mt-2 bg-green-800 text-white text-xs px-3 py-1 rounded font-extrabold transition ease-in-out cursor-pointer">
            {changeDetail?'Update':"Edit"}
          </span>
        </div>

        {/* RIGHT SIDE - INPUTS */}
        <div className="w-60">
          <form>

            {/* Name */}
            <input
              type="text"
              value={name}
              id="name"
              disabled={!changeDetail}
              onChange={onChange}
              className={` w-full bg-transparent border-0 border-b border-gray-500 py-2 mb-3
                         text-black focus:ring-0 focus:outline-none
                         disabled:opacity-100 ${changeDetail&& "border-red-200 focus:border-green-700"}`}
              style={{ borderBottomWidth: "1px" }}
            />

            {/* Email */}
            <input
              type="email"
              value={email}
              disabled
              className="w-full bg-transparent border-0 border-b border-gray-500 py-2
                         text-black focus:ring-0 focus:outline-none
                         disabled:opacity-100"
              style={{ borderBottomWidth: "1px" }}
            />

          </form>
        </div>

      </div>
         <div className="max-w-6xl px-2 mt-4 mx-auto mb-12">
        {!loading && listings.length > 0 && (
          <>
            <h2 className="text-xl text-center font-semibold mb-4">
              My Listings
            </h2>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-2 ">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default Profile;