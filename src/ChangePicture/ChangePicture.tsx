import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper/modules";
import { motion } from "motion/react"
import villa1 from "/1.jpg"
import villa2 from "/2.jpg"
import villa3 from "/3.jpg"
import villa4 from "/4.jpg"
import villa5 from "/5.jpg"
import villa6 from "/6.jpg"
import villa7 from "/7.jpg"
import villa8 from "/8.jpg"
import villa9 from "/9.jpg"
import villa10 from "/10.jpg"
import VillaChangePictureCard from "./VillaChangePictureCard";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ChangePicture() {
  const villaData = [
  {
    heading: "คลื่นกระแทก (Shockwave)",
    description:
      "เน้นคลายกล้ามเนื้อและลดปวดในผู้ที่มีอาการปวดเรื้อรัง คลายได้ดีมาก เหมาะสำหรับชาวออฟฟิศซินโดรม",
    image: villa1,
    alt: "shockwave",
  },

  {
    heading: "อัลตร้าซาวด์ (Ultrasound)",
    description:
      "คลายกล้ามเนื้อ ลดปวด ลดอักเสบแบบเน้นจุด สามารถลงลึกได้ถึง 3-5 ซม. มั่นใจว่าลงลึกถึงต้นตอจุดปวด",
    image: villa2,
    alt: "ultrasound",
  },
  {
    heading: "อัลตร้าซาวด์ร่วมกับกระตุ้นไฟฟ้า (Ultrasound Combined)",
    description:
      "คลายกล้ามเนื้อ ลดปวด ลดอักเสบแบบเน้นจุด สามารถลงได้ลึกและเข้มข้นกว่าอัลตร้าซาวด์ปกติ เหมาะสำหรับผู้ที่มีอาการปวดเรื้อรัง",
    image: villa3,
    alt: "ultrasound-combined",
  },

  {
    heading: "กระตุ้นไฟฟ้า (Electrical Stimulation)",
    description:
      "เน้นลดอาการปวด ลดอักเสบ เพิ่มการไหลเวียนเลือด นอนเพลินๆ แต่คลายปวด",
    image: villa4,
    alt: "electrical-stimulation",
  },
  {
    heading: "การรักษาด้วยมือ (Manual Therapy)",
    description:
      "รูปแบบที่เป็นเอกลักษณ์เฉพาะตัวของทางคลินิก  ตรงจุด แม่นยำ ด้วยประสบการณ์เฉพาะตัว",
    image: villa5,
    alt: "manual-therapy",
  },
  {
    heading: "ให้คำแนะนำ/ท่าบริหาร (Home Program)",
    description:
      "คำแนะนำ ท่าออกกำลังกายที่สามารถนำกลับไปทำที่บ้านได้เพื่อเพิ่มประสิทธิภาพและผลการรักษาที่ยั่งยืน",
    image: villa6,
    alt: "home-program",
  },
];
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        slidesPerView={"auto"}
       className="w-full max-w-[1400px] mx-auto"
      >
        {villaData.map((obj) => (
          <SwiperSlide  key={obj.alt} className="flex items-center justify-center w-full  drop-shadow-xl mb-10">
              <VillaChangePictureCard {...obj} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ChangePicture