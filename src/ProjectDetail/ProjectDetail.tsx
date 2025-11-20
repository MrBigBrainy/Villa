import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { villaData } from "@/data/villaData";
import { Bed, Bath, Grid2x2 } from "lucide-react"
import { Link } from "react-router";
import { motion } from "motion/react";
// import bgVillaCard from "../Projects/svg.png"

function ProjectDetail() {
  const { projectName } = useParams();
  const [villa, setVilla] = useState(null);

  useEffect(() => {
    if (!projectName) return;

    const found = villaData.find(
      (item) =>
        item.heading.toLowerCase().replaceAll(" ", "-") ===
        projectName.toLowerCase()
    );

    setVilla(found || null);
  }, [projectName]);

  if (!villa) return <div>Loading...</div>;

    return (
       <motion.div initial={{ x: 100 }} animate={{ x: 0, transition: { duration: 0.3 } }} className="w-screen h-screen   bg-[length:auto_50%] bg-bottom bg-no-repeat items-center">
      <img src={villa.image} alt={villa.alt} className="w-[90%] mx-auto rounded-md" />
          <div className="flex w-[90%] mx-auto mt-3">
              <img src={villaData[2].image} alt={villa.alt} className="w-[25%] rounded-l-md h-auto" />
              <img src={villaData[3].image} alt={villa.alt} className="w-[25%] h-auto" />
              <img src={villaData[4].image} alt={villa.alt} className="w-[25%] h-auto" />
              <img src={villaData[5].image} alt={villa.alt} className="w-[25%] rounded-r-md h-auto" />
      </div>
      <h1 className="text-[20px] text-yellow-950 font-bold text-center mt-15">{villa.heading}</h1>
          <p className="mx-[10%] text-[14px] font-medium text-yellow-950 mt-2">{villa.description}</p>
          
          <div className="flex items-center justify-center gap-10 mt-10">
              
              <div className="flex flex-col justify-center items-center p-3 rounded-md bg-[#fffcf9] gap-3">
                  <Bed />
                  <p className="text-[14px] font-medium text-yellow-950">2 Bed room</p>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#fffcf9] p-3 rounded-md gap-3">
                  <Bath />
                  <p className="text-[14px] font-medium text-yellow-950">2 Bath room</p>
              </div>
              <div className="flex flex-col justify-center items-center  bg-[#fffcf9] p-3 rounded-md gap-3">
                  <Grid2x2 />
                  <p className="text-[14px] font-medium text-yellow-950">100 SQ FT</p>
              </div>
          </div>

          <div className="w-[90%] my-10 mx-auto aspect-video rounded-md">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495785.0591728169!2d99.80545788906252!3d13.879758100000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28f0a5b406c71%3A0x44daa9a700bfd3a9!2z4Lib4Li04LmK4LiB4Lib4Li04LmK4LiBIOC4geC5i-C4p-C4ouC5gOC4leC4teC5i-C4ouC4p-C4leC5ieC4oeC4ouC4sw!5e0!3m2!1sth!2sth!4v1763665268684!5m2!1sth!2sth"
    className="w-full h-full rounded-md"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
          </div>
          
          <div className="flex justify-center items-center">
          <Link to="/reservation" className="w-[90%] text-center mx-auto bg-amber-900 font-semibold text-[14px] rounded-md mb-10 text-white p-3">Reservation</Link>
          </div>
              

            </motion.div>
  );
}

export default ProjectDetail;
