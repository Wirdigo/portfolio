import Image from "next/image";
export default function About() {
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
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Skills</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#3d5245] bg-[#1c2620] p-4 flex-col">
                      <div className="text-white" data-icon="Code" data-size="24px" data-weight="regular">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                               viewBox="0 0 256 256">
                              <path
                                  d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                              ></path>
                          </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                          <h2 className="text-white text-base font-bold leading-tight">Front-End Development</h2>
                          <p className="text-[#9eb7a8] text-sm font-normal leading-normal">HTML, CSS, JavaScript, React,
                              Angular</p>
                      </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#3d5245] bg-[#1c2620] p-4 flex-col">
                      <div className="text-white" data-icon="Database" data-size="24px" data-weight="regular">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                               viewBox="0 0 256 256">
                              <path
                                  d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"
                              ></path>
                          </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                          <h2 className="text-white text-base font-bold leading-tight">Back-End Development</h2>
                          <p className="text-[#9eb7a8] text-sm font-normal leading-normal">Node.js, Python, Java, Spring
                              Boot</p>
                      </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#3d5245] bg-[#1c2620] p-4 flex-col">
                      <div className="text-white" data-icon="Database" data-size="24px" data-weight="regular">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                               viewBox="0 0 256 256">
                              <path
                                  d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"
                              ></path>
                          </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                          <h2 className="text-white text-base font-bold leading-tight">Database Management</h2>
                          <p className="text-[#9eb7a8] text-sm font-normal leading-normal">MySQL, PostgreSQL,
                              MongoDB</p>
                      </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#3d5245] bg-[#1c2620] p-4 flex-col">
                      <div className="text-white" data-icon="GitCommit" data-size="24px" data-weight="regular">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                               viewBox="0 0 256 256">
                              <path
                                  d="M248,120H183.42a56,56,0,0,0-110.84,0H8a8,8,0,0,0,0,16H72.58a56,56,0,0,0,110.84,0H248a8,8,0,0,0,0-16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                              ></path>
                          </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                          <h2 className="text-white text-base font-bold leading-tight">Version Control</h2>
                          <p className="text-[#9eb7a8] text-sm font-normal leading-normal">Git, GitHub, GitLab</p>
                      </div>
                  </div>
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
