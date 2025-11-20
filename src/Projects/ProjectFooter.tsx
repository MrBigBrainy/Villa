import { Bed, Bath, Grid2x2 } from "lucide-react"
import { Link } from "react-router";


type ProjectFooterProp = {
    heading: string,
    bedRoom: number,
    bathRoom: number,
    area: number,
}

function ProjectFooter({heading, bedRoom, bathRoom, area}: ProjectFooterProp) {
    return (
        <div className="flex flex-col! justify-around">
            <p className="font-medium text-[14px] text-yellow-950">{heading}</p>
            <div className="flex flex-col">

            <div className="flex gap-1 items-center">
                    <Bed strokeWidth={1} color="oklch(55.6% 0 0)" size={12}/>
                    <p className="text-[12px] text-neutral-400">{bedRoom} Bed Room </p>
                </div>
                
            <div className="flex gap-1 items-center">
                    <Bath strokeWidth={1} color="oklch(55.6% 0 0)" size={12} />
                    <p className="text-[12px] text-neutral-400">{bathRoom} Bed Room </p>
                </div>
                
                <div className="flex gap-1 items-center">
                    <Grid2x2 strokeWidth={1} color="oklch(55.6% 0 0)" size={12}/>
                    <p className="text-[12px] text-neutral-400">{area} SQ FT </p>
                </div>
            </div>
                <Link to={`/project/${heading}`} className="mb-2 p-1 w-full text-[12px] bg-[#8D6238] text-white rounded-sm px-5 font-medium">More Details</Link>
        </div>
    )
}

export default ProjectFooter
