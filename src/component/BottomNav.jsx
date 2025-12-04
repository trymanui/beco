import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";   // ← use NavLink instead of Link

function BottomNav() {
  const [showNav, setShowNav] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > lastY && y > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastY(y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg
      transition-transform duration-300
      ${showNav ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex justify-around py-3">

        {/* HOME */}
        <NavLink
          to="/home"
          className="flex flex-col items-center text-sm"
        >
          {({ isActive }) => (
            <>
              <i
                className={`fa-solid fa-house text-[22px] ${
                  isActive ? "text-[#0B6E4F]" : "text-gray-500"
                }`}
              ></i>
              <span
                className={`text-[12px] mt-1 ${
                  isActive ? "text-[#0B6E4F] font-extrabold" : "text-gray-700"
                }`}
              >
                Home
              </span>
            </>
          )}
        </NavLink>

        {/* ADD LISTING */}
        <NavLink to="/own" className="flex flex-col items-center text-sm">
          {({ isActive }) => (
            <>
              <i
                className={`fa-solid fa-circle-plus text-[22px] ${
                  isActive ? "text-[#0B6E4F]" : "text-gray-500"
                }`}
              ></i>
              <span
                className={`text-[12px] mt-1 ${
                  isActive ? "text-[#0B6E4F] font-extrabold" : "text-gray-700"
                }`}
              >
                Add
              </span>
            </>
          )}
        </NavLink>

        {/* SHORTS */}
        <NavLink to="/short" state={{autoSound:true}} className="flex flex-col items-center text-sm">
          {({ isActive }) => (
            <>
              <i
                className={`fa-solid fa-play text-[22px] ${
                  isActive ? "text-[#0B6E4F]" : "text-gray-500"
                }`}
              ></i>
              <span
                className={`text-[12px] mt-1 ${
                  isActive ? "text-[#0B6E4F] font-extrabold" : "text-gray-700"
                }`}
              >
                Shorts
              </span>
            </>
          )}
        </NavLink>

      </div>
    </div>
  );
}

export default BottomNav;
