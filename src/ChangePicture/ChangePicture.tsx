import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper/modules";
import { motion } from "motion/react"
import VillaChangePictureCard from "./VillaChangePictureCard";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { villaData } from "@/data/villaData";

function ChangePicture() {
  
  return (
    <motion.div initial={{x: 100}} animate={{x:0, transition: {type: "tween", duration: 0.3}}}>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        slidesPerView={"auto"}
        className="w-[90%] max-w-[1200px] mx-auto"
      >
        {villaData.map((obj) => (
          <SwiperSlide  key={obj.alt} className="flex items-center justify-center w-full  drop-shadow-xl mb-10">
              <VillaChangePictureCard {...obj} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default ChangePicture