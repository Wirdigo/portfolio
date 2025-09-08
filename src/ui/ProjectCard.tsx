import Image from "next/image";
import ProjectItem from "@/types/ProjectItem";

export default function ProjectCard({cardTitle, cardInfo, imageSrc,imageAlt} : ProjectItem) {
    return(
        <div className="flex flex-col gap-3 pb-3">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl">
                <Image src={imageSrc} width={600} height={400} alt={imageAlt}/>
            </div>
            <div>
                <p className="text-white text-base font-medium leading-normal">{cardTitle}</p>
                <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                    {cardInfo}
                </p>
            </div>
        </div>
    )
}
