"use client";
import React from "react";
import Image from "next/image";

// Import CSS
import "./style/image-fade.css";

interface ImageFadeProps {
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  selectIndex: number;
  setSelectIndex: (index: number) => void;
  autoTransition: boolean;
}

// Image fade component
const ImageFade: React.FC<ImageFadeProps> = ({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  selectIndex,
  setSelectIndex,
  autoTransition,
}) => {
  const [fadeProp, setFadeProp] = React.useState({ fade: "fade-in" });

  React.useEffect(() => {
    if (autoTransition) {
      if (selectIndex !== -1) {
        const interval = setInterval(() => {
          setFadeProp({ fade: "fade-out" });
          const timeout = setTimeout(() => {
            setCurrentImageIndex(selectIndex);
            setFadeProp({ fade: "fade-in" });
          }, 700); // Duration of fade-out
          setSelectIndex(-1);
        }, 700); // Duration between image changes
        return () => clearInterval(interval);
      } else {
        const interval = setInterval(() => {
          setFadeProp({ fade: "fade-out" });
          setTimeout(() => {
            const newIndex = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(newIndex);
            setFadeProp({ fade: "fade-in" });
          }, 700); // Duration of fade-out
        }, 8000); // Duration between image changes
        return () => clearInterval(interval);
      }
    } else {
      if (selectIndex !== -1) {
        setFadeProp({ fade: "fade-out" });

        const timeout = setTimeout(() => {
          setCurrentImageIndex(selectIndex);
          setFadeProp({ fade: "fade-in" });
        }, 700); // Duration of fade-out

        return () => clearTimeout(timeout);
      }
    }
  }, [selectIndex, currentImageIndex, setCurrentImageIndex]);

  return (
    <div className={`image-container ${fadeProp.fade}`}>
      <Image
        src={images[currentImageIndex]}
        height={375}
        width={375}
        alt="product highlight image"
        className="w-full max-w-[375px] rounded-xl"
      />
    </div>
  );
};
export default ImageFade;
