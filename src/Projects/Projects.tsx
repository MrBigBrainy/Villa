import ProjectCard from "./ProjectCard"
import { villaData } from "@/data/villaData"

function Projects() {
  return (
    <>
      <h3 className="text-yellow-950 font-semibold w-[90%] mx-auto mt-10 mb-3 text-[16px]">Projects</h3>
     <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      {villaData.map((card) => <ProjectCard {...card}  />)}
    {/* <ProjectCard/> */}
    </div>
    </>
   
  )
}

export default Projects