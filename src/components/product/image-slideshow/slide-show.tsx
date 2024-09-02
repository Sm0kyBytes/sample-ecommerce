"use client";
import React from "react";

// Improt Components
import ImageFade from "./image-fade";
import PhotoSelecter from "./photo-selecter";
import ModalSlideShow from "./modal-slide-show";

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

  return (
    <div>
      {/* Slideshow container */}
      <div className="slideshow-container pb-2 flex flex-col items-center gap-2">
        {/* Full-width images with number and caption text */}
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
      {/* Modal show product images */}
      <ModalSlideShow images={images} />
    </div>
  );
};

export default SlideShow;
