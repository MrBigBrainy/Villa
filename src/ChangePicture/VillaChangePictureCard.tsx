import { SwiperSlide } from "swiper/react";

type VillaChangePictureCardProp = {
    image: string,
    heading: string,
    description: string,
    alt: string
}

function VillaChangePictureCard({ image, heading, description, alt }: VillaChangePictureCardProp) {
  return (
    <>
      <img
        src={image}
        alt={alt}
        className="max-h-[300px] w-full object-cover max-w-[420px] h-[270px] md:max-h-[335px] sm:max-w-[480px]  md:max-w-[560px] xl:max-w-[1000px] lg:max-w-[650px] lg:max-h-[500px]  mx-auto rounded-2xl "
      />
      {/* <div className=" py-3 px-5 rounded-b-2xl  max-w-[420px] sm:max-w-[480px]  md:max-w-[560px] lg:max-w-[650px] xl:max-w-[800px] mx-auto">
        <h4 className="font-semibold  text-[20px] md:text-[22px] xl:text-[25px]">
          {heading}
        </h4>
        <p className="text-[16px] md:text-[18px] xl:text-[20px]">
          {description}
        </p>
      </div> */}
    </>
  );
}

export default VillaChangePictureCard;
