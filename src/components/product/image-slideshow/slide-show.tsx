"use client";
import React from "react";

// Improt Components
import ImageFade from "./image-fade";
import PhotoSelecter from "./photo-selecter";
import ModalSlideShow from "./modal-slide-show";
import MobileSlideShow from "./slide-show-mobile";

interface SlideShowProps {
  images: string[];
}

// SlideShow component
const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [selectIndex, setSelectIndex] = React.useState(-1);
  const handleOpenModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    modal.showModal();
  };
  const handleNext = () => {
    const newIndex = (selectIndex + 1) % images.length;
    setSelectIndex(newIndex);
  };
  const handlePrev = () => {
    if (currentImageIndex === 0) {
      const newIndex = images.length - 1;
      setSelectIndex(newIndex);
    } else {
      const newIndex = selectIndex - 1;
      setSelectIndex(newIndex);
    }
  };
  return (
    <>
      <div className="max-sm:hidden">
        <div className="slideshow-container pb-2 flex flex-col items-center gap-2">
          <div className="mySlides p-4 sw" onClick={handleOpenModal}>
            <ImageFade
              images={images}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
              selectIndex={selectIndex}
              setSelectIndex={setSelectIndex}
              autoTransition={true}
            />
          </div>
          <PhotoSelecter
            images={images}
            currentImageIndex={currentImageIndex}
            setSelectIndex={setSelectIndex}
          />
        </div>
        <ModalSlideShow images={images} />
      </div>
      <div className="sm:hidden">
        <MobileSlideShow images={images} />
      </div>
    </>
  );
};

export default SlideShow;
