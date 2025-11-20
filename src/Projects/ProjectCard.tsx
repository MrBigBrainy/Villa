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
import { motion, useInView } from "motion/react"
import { useRef } from "react"

const MotionCard = motion(Card);
const defaultInitial = { opacity: 0, y: -50 };
const defaultAnimate = { opacity: 1, y: 0, transition: { type: "tween" } };

type ProjectCardProp = {
    heading: string,
    description: string,
    alt: string,
  image: string,
    bedRoom: number,
        bathRoom: number,
        area: number,

}

function ProjectCard({ heading, alt, image, bedRoom, bathRoom, area }: ProjectCardProp) {
  const projectCardRef = useRef(null);
   const isInView = useInView(projectCardRef, { amount: 0.8, once: true });
  return (
    <MotionCard className=" pt-0! rounded-l-lg! py-0!" ref={projectCardRef} initial={defaultInitial} animate={isInView ? { opacity: 1, y: 0, transition: { type: "tween", duration: 0.3 } } : { opacity: 0, y: -50, transition: { type: "tween", duration: 0.3 } }}>
       
  <CardContent className="p-0! flex gap-3">
     <img src={image} alt={alt} className="rounded-tl-lg! rounded-bl-lg! w-[60%] h-[140px]" />
      <ProjectFooter heading={heading} bedRoom={bedRoom} bathRoom={bathRoom} area={area} />
  </CardContent>
</MotionCard>
  )
}

export default ProjectCard