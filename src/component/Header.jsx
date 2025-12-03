import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router';

function Header() {
  
   const [showBtn, setShowBtn] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      if (y > 300 && y < lastY) setShowBtn(true);
      else setShowBtn(false);

      setLastY(y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  // smooth fade like bigbasket
  const fade = Math.max(0, 1 - scrollY / 120);
  const scale = Math.max(0.85, 1 - scrollY / 300);



  return (
  <>
      {/* HEADER */}
      <div
        className="bg-[#0B6E4F] text-white px-4 pt-5 pb-6 shadow-sm"
      >
        <div className="flex items-start justify-between">
          
          {/* TEXT BLOCK EXACTLY LIKE PHOTO */}
          <div className="flex flex-col -mt-1"
            style={{
              transform: `scale(${scale})`,
              opacity: fade,
              transition: "transform 0.2s linear, opacity 0.2s linear",
            }}
          >
            <h1 className="text-[20px] leading-tight font-semibold">
              Beco: <span className="font-normal">Gov. E-Waste Collection</span>
            </h1>
            <p className="text-[13px] text-green-100 mt-1">
              Safe Disposal for a Greener Future.
            </p>
          </div>

          {/* PROFILE ICON EXACTLY LIKE PHOTO */}
          <div
            className="relative"
            style={{
              transform: `scale(${scale})`,
              opacity: fade,
              transition: "transform 0.2s linear, opacity 0.2s linear",
            }}
          >
            <div className="w-11 h-11 bg-white rounded-full shadow flex items-center justify-center">
              <Link to="/profile">
              <i className="fa-solid fa-user text-gray-800 text-2xl"></i>
              </Link>
            </div>
            {/* green dot badge */}
            <div className="w-3 h-3 bg-green-600 rounded-full absolute top-0 right-0 border-[2px] border-white"></div>
          </div>

        </div>
      </div>

      {/* STICKY SEARCH BAR */}
      <div className="sticky top-0 bg-[#0B6E4F] z-40 px-4 pb-3 pt-3 shadow-sm -mt-2 rounded-b-3xl">
        <div className="w-full flex items-center bg-white rounded-full px-4 py-3 shadow">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

         <input
  type="text"
  placeholder="Search for e-waste items to donate."
  className="
    flex-1
    text-sm text-gray-700
    bg-white
    rounded-full
    px-4 py-2
    border border-white
    focus:outline-white
    focus:ring-1
    placeholder:text-base
    placeholder-gray-400
  "
/>



        </div>
      </div>

      {/* BACK TO TOP (unchanged) */}
      {showBtn && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-24 right-4 bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Back to top
        </button>
      )}
     
    </>
  );
}


export default Header


