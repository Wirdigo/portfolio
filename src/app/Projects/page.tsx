import ProjectCard from "@/ui/ProjectCard";
import ProjectItem from "@/types/ProjectItem";
export default function Projects() {
    const ProjectsList : ProjectItem[] = [
        {
            cardTitle: "Music Platform",
            cardInfo: "Platform union a music player with social media format",
            imageSrc: "https://placehold.co/600x400",
            imageAlt: "SonarLogo"
        },

    ]
    return (
        <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-white tracking-light text-[32px] font-bold leading-tight">My Projects</p>
                        <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                            Explore a selection of my recent projects, showcasing my skills in full-stack development.
                            Each project includes a brief overview, technologies used, and links to
                            live demos and source code.
                        </p>
                    </div>
                </div>
                {/*<ProjectsFilter/>*/}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    {ProjectsList.map((items)=>
                        (<ProjectCard cardInfo={items.cardInfo} cardTitle={items.cardTitle} imageAlt={items.imageAlt} imageSrc={items.imageSrc}/>))
                    }
                </div>
            </div>
        </div>
    )
}