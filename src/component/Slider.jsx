import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner21 from "../assets/banner21.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";

const Slider = () => {
  const slides = [
    { image: banner1, link: "https://www.youtube.com/live/zSMWdc4ZGSA?si=ALNN_cA7A6-whaQH" },
    { image: banner2, link: "https://youtu.be/AZ2muSgJOdU?si=8z9BpHZ2aj5CQFjh" },
    { image: banner21, link: "https://youtu.be/4GtWGHvX-rk?si=pFUcKR2ywQZtM6Hy" },
    { image: banner3, link: "https://youtu.be/1HFsOfz3cYw?si=1K_Bt_eF5znIyQxW" },
    { image: banner4, link: "https://youtu.be/Ey-qPao1Wms?si=vHyux8nq2panxcRn" },
    { image: banner5, link: "https://youtu.be/5aXnEt-JGWg?si=CVVdJhy_gJidrn42" },
  ];

  return (
    <div style={{ width: "100%", padding: "0 12px", marginTop: "12px" }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        spaceBetween={12} // space between slides
        slidesPerView={1}
        style={{ borderRadius: "12px" }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => window.open(item.link, "_blank")}
              className="slider-slide"
            >
              <img
                src={item.image}
                alt="banner"
                className="slider-img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Styles */}
      <style>{`
        .slider-slide {
          width: 100%;
          aspect-ratio: 16/9; /* responsive height */
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          margin-bottom: 20px; /* extra space below image for bullets */
        }

        .slider-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 12px;
          transition: transform 0.4s ease;
        }

        .slider-img:hover {
          transform: scale(1.03);
        }

        /* Pagination bullets below image */
        .swiper-pagination {
          bottom: 0px !important; /* push bullets below the image */
          margin-top: 8px;
        }

        .swiper-pagination-bullet {
          background: #d2d2d2 !important;
          opacity: 1 !important;
          margin: 0 4px !important;
        }

        .swiper-pagination-bullet-active {
          background: #0B6E4F !important;
          width: 22px !important;
          border-radius: 10px !important;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .slider-slide {
            aspect-ratio: 16/9;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
