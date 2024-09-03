"use client";
import React from "react";
import Image from "next/image";

// Import CSS
import "./style/image-slide.css";

interface MobileSlideShowProps {
  images: string[];
}

const MobileSlideShow: React.FC<MobileSlideShowProps> = ({ images }) => {
  const [currentMobileImageIndex, setCurrentMobileImageIndex] =
    React.useState(0);
  const [handleIndex, setHandleIndex] = React.useState(0);
  const [handleState, setHandleState] = React.useState("");
  const handleNext = () => {
    setHandleState("next");
    const newIndex = (currentMobileImageIndex + 1) % images.length;
    setHandleIndex(newIndex);
  };
  const handlePrev = () => {
    setHandleState("prev");
    if (currentMobileImageIndex === 0) {
      const newIndex = images.length - 1;
      setHandleIndex(newIndex);
    } else {
      const newIndex = currentMobileImageIndex - 1;
      setHandleIndex(newIndex);
    }
  };
  const [slideProp, setSlideProp] = React.useState({ slide: "slide-in" });

  React.useEffect(() => {
    const state = handleState;
    setSlideProp({ slide: `slide-${state}-out` });

    const timeout = setTimeout(() => {
      setCurrentMobileImageIndex(handleIndex);
      setSlideProp({ slide: `slide-${state}-in` });
    }, 600); // Duration of slide-out

    return () => clearTimeout(timeout);
  }, [handleIndex, setHandleIndex]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative flex justify-center items-center">
        <div className={`image-container flex-grow ${slideProp.slide}`}>
          <Image
            src={images[currentMobileImageIndex]}
            height={375}
            width={375}
            alt="product highlight image"
          />
        </div>
        <button
          onClick={handleNext}
          className="btn btn-sm btn-circle btn-ghost bg-white  hover:bg-white hover:text-orange-500 absolute right-[0%] top-[50%]"
        >
          &#10095;
        </button>
        <button
          onClick={handlePrev}
          className="btn btn-sm btn-circle btn-ghost bg-white hover:bg-white hover:text-orange-500  absolute  left-[0%] top-[50%]"
        >
          &#10094;
        </button>
      </div>
    </div>
  );
};
export default MobileSlideShow;
