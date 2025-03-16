import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../CSS/Carousal.css'
const Carousal = () => {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* This comment out section below has darker bg */}
        {/* <div className="h-full w-full flex items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/slider-2.webp')] bg-cover bg-center">
                <div className="banner-details text-center text-white h-fit">
                    <h3 className="text-xl font-bold">✨ Fresh Styles, Just In!</h3>
                    <p className="text-base opacity-90 font-semibold">Stay ahead of the trends with our latest collection. Shop now and redefine your wardrobe.</p>
                </div>
          </div> */}
        <div className="min-h-screen w-full flex items-center justify-center bg-[url('/slider-2.webp')] bg-cover bg-center">
          <div className="banner-details text-center text-white space-y-3">
            <h3 className="text-xl font-bold">✨ Fresh Styles, Just In!</h3>
            <p className="text-base opacity-90 font-semibold">
              Stay ahead of the trends with our latest collection. Shop now and
              redefine your wardrobe.
            </p>
            <a
              href="#_"
              class="px-5 py-2.5 relative btn rounded-none group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
            >
              {/* Background Overlay (Moves from Bottom to Top) */}
              <span class="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-full bg-purple-600 group-hover:h-full group-hover:translate-y-0 opacity-90"></span>

              {/* Button Text */}
              <span class="relative group-hover:text-white">Shop now</span>
            </a>
          </div>
        </div>
        <div className="min-h-screen w-full flex items-center justify-center bg-[url('/slider1.webp')] bg-cover bg-center">
          <div className="banner-details text-center text-white h-fit space-y-3">
            <h3 className="text-xl font-bold">❄️ Cozy Up & Save Big!</h3>
            <p className="text-base opacity-90 font-semibold">
              Enjoy up to 50% OFF on winter essentials. Limited stock—shop now
              before it's gone!
            </p>
            <a
              href="#_"
              class="btn px-5 py-2.5 relative rounded-none group overflow-hidden font-medium bg-purple-50 text-black inline-block"
            >
              {/* Background Overlay (Moves from Bottom to Top) */}
              <span class="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-full bg-red-600 group-hover:h-full group-hover:translate-y-0 opacity-90"></span>

              {/* Button Text */}
              <span class="relative group-hover:text-white">Shop Now</span>
            </a>
          </div>
        </div>
        <div className="min-h-screen w-full flex items-center justify-center bg-[url('/slider3.webp')] bg-cover bg-center">
          <div className="banner-details text-center text-white h-fit space-y-3">
            <h3 className="text-xl font-bold">☀️ Beat the Heat in Style!</h3>
            <p className="text-base opacity-90 font-semibold">
              Enjoy up to 50% OFF on winter essentials. Limited stock—shop now
              before it's gone!
            </p>
            <a
              href="#_"
              class="btn px-5 py-2.5 relative rounded-none group overflow-hidden font-medium bg-purple-50 text-black inline-block"
            >
              {/* Background Overlay (Moves from Bottom to Top) */}
              <span class="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-full bg-amber-500 group-hover:h-full group-hover:translate-y-0 opacity-90"></span>

              {/* Button Text */}
              <span class="relative group-hover:text-white">Shop Now</span>
            </a>
          </div>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default Carousal;
