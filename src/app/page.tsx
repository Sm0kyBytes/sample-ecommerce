import ResponsiveAppBar from "@/components/navbar/appbar";
import SlideShow from "@/components/product/image-slideshow/slide-show";
export default function Home() {
  // mock data
  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <SlideShow images={images} />
    </>
  );
}
