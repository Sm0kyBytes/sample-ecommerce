import * as React from "react";
import Image from "next/image";

interface PhotoSelecterProps {
  images: string[];
  currentImageIndex: number;
  setSelectIndex: (index: number) => void;
}

const PhotoSelecter: React.FC<PhotoSelecterProps> = ({
  images,
  currentImageIndex,
  setSelectIndex,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <ul className="menu menu-horizontal rounded-box gap-4">
        {images.map((image, index) => (
          <li key={index}>
            {currentImageIndex === index ? (
              <div
                className="min-w-[75px] p-0 rounded-xl border-2 border-orange-500 cursor-pointer"
                onClick={() => {
                  setSelectIndex(index);
                }}
              >
                <Image
                  src={image}
                  height={75}
                  width={75}
                  alt="product image"
                  className="rounded-lg hover:opacity-50 opacity-30"
                />
              </div>
            ) : (
              <div
                className="min-w-[75px] p-0 rounded-xl active:border-2 active:border-orange-500 cursor-pointer"
                onClick={() => {
                  setSelectIndex(index);
                }}
              >
                <Image
                  src={image}
                  height={75}
                  width={75}
                  alt="product image"
                  className="rounded-lg hover:opacity-50 active:opacity-30"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoSelecter;
