import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ProjectFooter from "./ProjectFooter"
import { villaData } from "@/data/villaData"


type ProjectCardProp = {
    heading: string,
    description: string,
    alt: string,
  image: string,
    bedRoom: number,
        bathRoom: number,
        area: number,

}

function ProjectCard({heading, alt, image, description, bedRoom, bathRoom, area}: ProjectCardProp) {
  return (
    <Card className=" pt-0! rounded-l-lg! py-0!">
       
  <CardContent className="p-0! flex gap-3">
     <img src={image} alt={alt} className="rounded-tl-lg! rounded-bl-lg! w-[60%] h-[140px]" />
      <ProjectFooter heading={heading} bedRoom={bedRoom} bathRoom={bathRoom} area={area} />
  </CardContent>
</Card>
  )
}

export default ProjectCard