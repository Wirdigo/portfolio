import BriefcaseIcon from "@/icons/BriefcaseIcon";
import ExperienceItem from "@/types/ExperienceItem";
const EXPERIENCE: ExperienceItem[] = [
    { title: "Full-Stack Developer at Tech Solutions Inc.", period: "2020 - Present" },
    { title: "Software Engineer Intern at Innovate Systems", period: "Summer 2019" },
    { title: "Freelance Web Developer", period: "2018 - 2020" },
];

function TimelineConnector({ grow = false }: { grow?: boolean }) {
    return <div className={`w-[1.5px] bg-[#3d5245] h-2 ${grow ? "grow" : ""}`} aria-hidden="true" />;
}


function TimelineMarker({ showTop, showBottom }: { showTop: boolean; showBottom: boolean }) {
    return (
        <div className={`flex flex-col items-center gap-1 ${showTop ? "" : "pt-3"} ${showBottom ? "" : "pb-3"}`}>
            {showTop && <TimelineConnector />}
            <BriefcaseIcon />
            {showBottom && <TimelineConnector grow />}
        </div>
    );
}

export default function ExperienceTimeline() {
    return (
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
            {EXPERIENCE.map((item, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === EXPERIENCE.length - 1;
                return (
                    <div key={`${item.title}-${item.period}`} className="contents">
                        <TimelineMarker showTop={!isFirst} showBottom={!isLast} />
                        <article className="flex flex-1 flex-col py-3">
                            <h3 className="text-white text-base font-medium leading-normal">{item.title}</h3>
                            <time className="text-[#9eb7a8] text-base font-normal leading-normal">{item.period}</time>
                        </article>
                    </div>
                );
            })}
        </div>
    );
}
