"use client";
import React from "react";
import Image from "next/image";

// Improt Components
import ImageFade from "./image-fade";
import PhotoSelecter from "./photo-selecter";

interface ModalSlideShowProps {
  images: string[];
}

const ModalSlideShow: React.FC<ModalSlideShowProps> = ({ images }) => {
  const [currentModalImageIndex, setCurrentModalImageIndex] = React.useState(0);
  const [modalSelectIndex, setModalSelectIndex] = React.useState(-1);
  const handleNext = () => {
    const newIndex = (modalSelectIndex + 1) % images.length;
    setModalSelectIndex(newIndex);
  };
  const handlePrev = () => {
    if (modalSelectIndex === 0) {
      const newIndex = images.length - 1;
      setModalSelectIndex(newIndex);
    } else {
      const newIndex = modalSelectIndex - 1;
      setModalSelectIndex(newIndex);
    }
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-inherit flex flex-col justify-center items-center shadow-none">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-[11%] top-2">
            <Image
              src="/images/icon-close.svg"
              width={14}
              height={15}
              alt="close button"
            />
          </button>
        </form>
        <div className="mySlides p-4 relative flex justify-center items-center">
          <ImageFade
            images={images}
            currentImageIndex={currentModalImageIndex}
            setCurrentImageIndex={setCurrentModalImageIndex}
            selectIndex={modalSelectIndex}
            setSelectIndex={setModalSelectIndex}
            autoTransition={false}
          />
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
        <PhotoSelecter
          images={images}
          currentImageIndex={currentModalImageIndex}
          setSelectIndex={setModalSelectIndex}
        />
      </div>
    </dialog>
  );
};
export default ModalSlideShow;
