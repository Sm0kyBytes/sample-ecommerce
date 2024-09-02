"use client";
import React from "react";
import Image from "next/image";

// Import CSS
import "./ImageFade.css";

interface SlideShowProps {
  images: string[];
}

interface ImageFadeProps {
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
}
// Image fade component
const ImageFade: React.FC<ImageFadeProps> = ({
  images,
  currentImageIndex,
  setCurrentImageIndex,
}) => {
  const [fadeProp, setFadeProp] = React.useState({ fade: "fade-in" });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFadeProp({ fade: "fade-out" });

      setTimeout(() => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
        setFadeProp({ fade: "fade-in" });
      }, 1000); // Duration of fade-out
    }, 8000); // Duration between image changes

    return () => clearInterval(interval);
  }, [currentImageIndex, setCurrentImageIndex]);

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

// SlideShow component
const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleChangeImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      {/* Slideshow container */}
      <div className="slideshow-container pb-2 flex flex-col items-center gap-2">
        {/* Full-width images with number and caption text */}
        <div className="mySlides p-4 sw">
          <ImageFade
            images={images}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
        <ul className="w-[375px] flex gap-6 overflow-hidden">
          {images.map((image, index) => (
            <li key={index} className="menu-image">
              <div
                className="min-w-[75px] rounded-xl hover:border-2 hover:border-orange-300 active:hover:border-orange-500 cursor-pointer"
                onClick={() => handleChangeImage(index)}
              >
                <Image
                  src={image}
                  height={75}
                  width={75}
                  alt="product image"
                  className="rounded-lg hover:opacity-50 active:opacity-30"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SlideShow;
