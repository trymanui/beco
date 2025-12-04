import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";

export default function Short() {
  const location = useLocation();

  // Auto sound ON if user clicked shorts button
  const autoSound = location.state?.autoSound || false;

  const [lang, setLang] = useState("English");

  const reels = [
    { url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/English-1.mp4", lang: "English" },
     { url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/English-2.mp4", lang: "English" },
      { url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/English-3.mp4", lang: "English" },
       { url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/English-4.mp4", lang: "English" },
        { url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/English-5.mp4", lang: "English" },
    { url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/Hindi-1.mp4", lang: "Hindi" },
    { url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/Hindi-2.mp4", lang: "Hindi" },
    { url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/Hindi-3.mp4", lang: "Hindi" },
    { url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/Hindi-4.mp4", lang: "Hindi" },
    { url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/Hindi-5.mp4", lang: "Hindi" },
{ url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/Telugu-1.mp4", lang: "Telugu" },
  
{ url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/Telugu-2.mp4", lang: "Telugu" },

{ url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/Telugu-3.mp4", lang: "Telugu" },
{ url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/Telugu-4.mp4", lang: "Telugu" },
{ url: "https://res.cloudinary.com/dllrfmjff/video/upload/v1764830084/Telugu-5.mp4", lang: "Telugu" },
  ];

  const filtered = reels.filter((v) => v.lang === lang);

  const [index, setIndex] = useState(0);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // If autoSound=true -> muted=false
  const [muted] = useState(!autoSound);

  // Swipe logic
  const startY = useRef(0);
  const endY = useRef(0);
  const minSwipe = 50;

  const onTouchStart = (e) => {
    endY.current = 0;
    startY.current = e.targetTouches[0].clientY;
  };

  const onTouchMove = (e) => {
    endY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = () => {
    const distance = startY.current - endY.current;

    if (distance > minSwipe && index < filtered.length - 1) {
      setIndex(index + 1);
    } else if (distance < -minSwipe && index > 0) {
      setIndex(index - 1);
    }
  };

  // Load new video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [index,lang]);

  // Tap to pause/play
  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 bg-black bg-opacity-20 fixed top-0 left-0 w-full z-50">
        <Link to='/home'>
        <i className="fa-solid fa-arrow-left text-xl"></i>
        </Link> 

        <span className="text-white font-bold text-lg">Language</span>

        <div className="flex items-center gap-2">
          <select
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              setIndex(0);
            }}
            className="bg-transparent text-white text-lg outline-none cursor-pointer border-none font-bold"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
          </select>
        </div>
      </div>

      {/* FULLSCREEN VIDEO + SWIPE */}
      <div
        className="h-screen flex items-center justify-center relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted={muted}
          loop
          onClick={togglePlayPause}
        >
          <source src={filtered[index]?.url} type="video/mp4" />
        </video>

        {/* Play Icon When Paused */}
        {!isPlaying && (
          <i className="fa-solid fa-play text-white text-4xl absolute opacity-60"></i>
        )}
      </div>
    </div>
  );
}