import ProjectCard from "./ProjectCard"
import { villaData } from "@/data/villaData"
import bgVillaCard from "./svg.png"

function Projects() {
  return (
    <div className="w-full pb-10  bg-bottom bg-no-repeat" style={{ backgroundImage: `url(${bgVillaCard})` }}>
      <h3 className="text-yellow-950 font-semibold w-[90%] mx-auto mt-10 mb-3 text-[16px]">Projects</h3>
     <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative"  >
        {villaData.map((card) => <ProjectCard {...card} />)}
        <div className="w-screen! bg-cover bg-center bg-no-repeat" >
        </div>
       
    {/* <ProjectCard/> */}
    </div>
    </div>
   
  )
}

export default Projects