import Image from "next/image";
import SkillCard from "@/ui/SkillCard";
import Code from "@/icons/Code";
import Database from "@/icons/Database";
import GitCommit from "@/icons/GitCommit";
export default function About() {
    const skills = {}
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
                  <SkillCard IconComponent={Code} cardInfo={"HTML, CSS, JavaScript, React, Angular"} cardTitle={"Front-End Development"} dataIcon={"Code"}/>
                  <SkillCard IconComponent={Database} cardInfo={"MySQL, PostgreSQL,MongoDB"} cardTitle={"Database Management"} dataIcon={"Database"}/>
                  <SkillCard IconComponent={Code} cardInfo={"Node.js, Python, Java,"} cardTitle={"Back-End Development"} dataIcon={"Code"}/>
                  <SkillCard IconComponent={GitCommit} cardInfo={"Git, GitHub, GitLab"} cardTitle={"Version Control"} dataIcon={"Code"}/>
              </div>
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Experience</h3>
              <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                  <div className="flex flex-col items-center gap-1 pt-3">
                      <div className="text-white" data-icon="Briefcase" data-size="24px" data-weight="regular">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                               viewBox="0 0 256 256">
                              <path
                                  d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                              ></path>
                          </svg>
                      </div>
                      <div className="w-[1.5px] bg-[#3d5245] h-2 grow"></div>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                      <p className="text-white text-base font-medium leading-normal">Full-Stack Developer at Tech
                          Solutions Inc.</p>
                      <p className="text-[#9eb7a8] text-base font-normal leading-normal">2020 - Present</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                      <div className="w-[1.5px] bg-[#3d5245] h-2"></div>
                      <div className="text-white" data-icon="Briefcase" data-size="24px" data-weight="regular">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                               viewBox="0 0 256 256">
                              <path
                                  d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                              ></path>
                          </svg>
                      </div>
                      <div className="w-[1.5px] bg-[#3d5245] h-2 grow"></div>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                      <p className="text-white text-base font-medium leading-normal">Software Engineer Intern at
                          Innovate Systems</p>
                      <p className="text-[#9eb7a8] text-base font-normal leading-normal">Summer 2019</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 pb-3">
                      <div className="w-[1.5px] bg-[#3d5245] h-2"></div>
                      <div className="text-white" data-icon="Briefcase" data-size="24px" data-weight="regular">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                               viewBox="0 0 256 256">
                              <path
                                  d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                              ></path>
                          </svg>
                      </div>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                      <p className="text-white text-base font-medium leading-normal">Freelance Web Developer</p>
                      <p className="text-[#9eb7a8] text-base font-normal leading-normal">2018 - 2020</p>
                  </div>
              </div>
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
