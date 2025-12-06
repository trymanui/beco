import { doc, getDoc,deleteDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router';
import { db } from '../firebase';
import Spinner from '../component/Spinner';
import Contact from '../component/Contact';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { getAuth} from "firebase/auth";

export default function Listing() {
  const auth=getAuth();
  const params = useParams();
  const navigate=useNavigate();
const allowedEditors = [
  "s3965641@gmail.com",
  "passsamsung2025@gmail.com",
  "unethcal365@gmail.com"
];

  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState(null);
const [contactLandlord,setContactLandlord]=useState(false);
  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, 'listings', params.listingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
           setListing({ id: docSnap.id, ...docSnap.data() }); // include ID here
      setLoading(false);
      }
    }
    fetchListing();
  }, [params.listingId]);



async function onDelete(listingID, userEmail) {
  if (!allowedEditors.includes(userEmail)) {
    toast.error("You are not authorized to delete this listing");
    return;
  }

  if (window.confirm("Are you sure you want to delete this listing?")) {
    await deleteDoc(doc(db, "listings", listingID));
    toast.success("Listing deleted successfully");
    navigate("/"); // redirect after deletion
  }
}
{/*}
function onEdit(listingID, userEmail) {
  if (!allowedEditors.includes(userEmail)) {
    toast.error("You are not authorized to edit this listing");
    return;
  }

  navigate(`/edit-listing/${listingID}`);
}*/}



  if (loading) return <Spinner />;

  return (
    <main>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        autoplay={{ delay: 3000 }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
      >
        {listing.images.map((url, index) => (
          <SwiperSlide key={index}>
            <div
            className="relative w-full overflow-hidden h-[50vh]"
              style={{
                background: `url(${url}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
            
   <div className="m-4 flex flex-col md:flex-row max-w-6xl lg:mx-auto p-4 rounded-lg shadow-lg bg-white lg:space-x-5">
  <div className="w-full flex flex-col space-y-4">
    {/* Name & Coins */}
    <p className="text-xl sm:text-xl font-bold text-[#0B6E4F] flex items-center flex-wrap">
      {listing.name} - 
      <i className="fa-solid fa-coins text-base mx-1"></i>
      {listing.coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </p>

    {/* Address */}
 <div className="flex items-start space-x-2 text-base text-gray-700">
  <i className="fa-solid fa-location-dot text-[#0B6E4F] mt-1"></i>
  <span className="break-words">{listing.address}</span>
</div>


    {/* Type & Category */}
    <div className="flex flex-wrap gap-2">
  <p className="bg-[#0B6E4F] rounded-md px-3 py-1 text-white text-center font-semibold shadow-md text-base min-w-max whitespace-nowrap">
    {listing.type}
  </p>
  <p className="bg-[#0B6E4F] rounded-md px-3 py-1 text-white text-center font-semibold shadow-md text-base min-w-max whitespace-nowrap">
    {listing.category}
  </p>
</div>


    {/* Description */}
    <p className="text-base sm:text-base text-gray-800 whitespace-pre-wrap">
      <span className="font-semibold">Description - </span>
      {listing.description}
    </p>
  {/* SHOW phone + edit/delete only for allowed emails */}
       {allowedEditors.includes(auth.currentUser?.email) && (
  <div className="flex items-center space-x-4 py-2">
    {/* PHONE NUMBER */}
    <span className="text-gray-800">{listing.phone}</span>

    {/* EDIT BUTTON 
    <button
      onClick={() => onEdit(listing.id, auth.currentUser?.email)}
      className="text-white border-none bg-[#0B6E4F]
      rounded-md px-3 py-1  text-center font-semibold shadow-md text-base min-w-max whitespace-nowrap
      hover:bg-green-900"
    >
      Edit
    </button>

    {/* DELETE BUTTON */}
    <button
      onClick={() => onDelete(listing.id, auth.currentUser?.email)}
      className="bg-red-800 text-white border-none
    ] rounded-md px-3 py-1 text-center font-semibold shadow-md text-base min-w-max whitespace-nowrap
      hover:bg-red-700"
    >
      Delete
    </button>
  </div>
)}

          
          {listing.userRef !== auth.currentUser?.uid && !contactLandlord && (
            <div className="mt-6">
              <button
                onClick={() => setContactLandlord(true)}
                className="px-7 py-3 bg-[#0B6E4F] text-white font-bold text-sm uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-800 focus:shadow-lg w-full text-center transition duration-150 ease-in-out "
              >
                Connect Agent
              </button>
            </div>
          )}
          {contactLandlord && (
            <Contact userRef={listing.userRef} listing={listing} />
          )}
        </div>
      </div>
   

    </main>
  );
}
