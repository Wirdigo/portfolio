import Image from "next/image";
import SkillCard from "@/ui/SkillCard";
import CodeIcon from "@/icons/CodeIcon";
import DatabaseIcon from "@/icons/DatabaseIcon";
import GitCommitIcon from "@/icons/GitCommitIcon";
import SkillItem from "@/types/SkillItem";
import ExperienceTimeline from "@/ui/ExperienceTimeline";
export default function About() {
    const skills : SkillItem[] = [
        {cardId: 1, IconComponent: CodeIcon, cardInfo: "HTML, CSS, JavaScript, TypeScript, React", cardTitle: "Front-End Development", dataIcon: "CodeIcon"},
        {cardId: 2, IconComponent: DatabaseIcon, cardInfo: "Azure Blob Storage, MS SQL, Postgre", cardTitle: "DatabaseIcon Management", dataIcon: "DatabaseIcon"},
        {cardId: 3, IconComponent: CodeIcon, cardInfo: "C# .Net", cardTitle: "Back-End Development", dataIcon: "CodeIcon"},
        {cardId: 4, IconComponent: GitCommitIcon, cardInfo: "Git, GitHub", cardTitle: "Version Control", dataIcon: "GitCommitIcon"}]
    return (
      <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                  <div className="flex min-w-72 flex-col gap-3">
                      <p className="text-white tracking-light text-[32px] font-bold leading-tight">About Me</p>
                      <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                          I'm a full-stack developer with a passion for creating innovative and user-friendly web
                          applications. With a strong foundation in both front-end and back-end
                          technologies, I enjoy tackling complex challenges and delivering high-quality solutions.
                      </p>
                  </div>
              </div>
              {/*SKILLS*/}
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Skills</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                  {skills.map((skill:SkillItem)=>
                      (<SkillCard key={skill.cardId} dataIcon={skill.dataIcon} IconComponent={skill.IconComponent} cardTitle={skill.cardTitle} cardInfo={skill.cardInfo}/>))
                  }
              </div>
              {/*Experience*/}
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Experience</h3>
              <ExperienceTimeline/>
              {/*Personal Statement*/}
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Personal
                  Statement</h3>
              <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                  I believe in continuous learning and staying updated with the latest industry trends. My goal is to
                  leverage my technical skills and creativity to build impactful and
                  scalable applications that meet the needs of users and businesses. I'm always open to new
                  opportunities and collaborations that allow me to grow and contribute to
                  exciting projects.
              </p>
          </div>
      </div>
  );
}
