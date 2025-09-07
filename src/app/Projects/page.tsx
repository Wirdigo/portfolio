export default function Projects() {
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
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIOePhZ716nGBQ87gQSQXQgkDzO39MNt00J4-8bBcWXcZTi07QvednJ1Lcl9B9iQkaQfQPOf6UULWoCc1xizLUW8vhYht--uoS9o4QqNz-TL763oQwph3KXflpk521cDnL4JRVXJGWo4fMcbuyok1hhLbX883Qa5lxNdPMkfj2z0MoSIzUzxY_ofV4eMSR_xTQ0hpBP8JdGOZ5Bhk4wQf0LUr3yYEoEso-MMW-DKihDyTfy_X94zUzqHS_6ijS6LOcLzhPRzUjPh3O");'
                        ></div>
                        <div>
                            <p className="text-white text-base font-medium leading-normal">E-commerce Platform</p>
                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                                A full-featured e-commerce platform with user authentication, product management, and
                                payment integration.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCE_kAGJiGamsk8rRcOOGo_eAT_9MkzzVlf8NVJ2yRstOZ_LB0d3DD6BX7a8aiIXzyXeJsEweJmrdblrZUjyNxwVBfDuTTF1P5VYNdyx6XHdiQR4uy1zPNdGGu0csejXCN9s0RsSsBtCaeslZUMCm50QisHIEQqcvGubCNZZX4DpTJfXV8YUxB-lx00cWUe-UYctobAMq7SnuD73LkDJqduMd7QOiwB8rM5mtxs7ABjUXVlrW13i-NRwOo0KFVLjFcOwJlL8K0TVme");'
                        ></div>
                        <div>
                            <p className="text-white text-base font-medium leading-normal">Social Media App</p>
                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal">A social media application
                                with user profiles, posts, and real-time updates.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCod4CFKfCnNKJz6EG0srFzT3A6NS9-2qYdz89te87LlUpQNnzi42sp2VUJGa_y8v4_hPgMrUL9MKuN4d7ZcpUCjJmh-k64TD1TxN91Uk8PT6kwC2F7NNMXfiX7lSn0BaSauq-x4gIIxlx-_qT8P96hplrT8wNAsV6-P2IR2B2UvjoyUcNKYmM14-R3pKd1C6gjio0tUXwlsynRCAHiHL3CzG_jVEmdqp0rK0N6tt5rwXxqA1h5ft_jtOCXbJnSbyMEOMmaR3QY_7E-");'
                        ></div>
                        <div>
                            <p className="text-white text-base font-medium leading-normal">Task Management System</p>
                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal">A task management system
                                with user roles, project assignments, and progress tracking.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB94amM1yuDB6eb_vcIllsf4TMs7rmz00GgDWw6wVAmzYpcDdehZ5EkHNjTPZeT89fBRRRRtUqdK94im0Vt-5BVKZvgTaattan4Agj4nliNE-lpbZi7PIv9XtwNpBT2tjF-RQi1i4Zlf1IgfSYAkCRQGwF_gagB__fIuizdntb_dZ5dpkGW8r6VYjAYuWFhZj0iaF74ozEHA6aBvxV_NXS1cwbj-Jgw_vayoM08ROD3Fkz-MBWlcZ2QlhfftNok-9tF7hHPhhN_1fCu");'
                        ></div>
                        <div>
                            <p className="text-white text-base font-medium leading-normal">Blog Website</p>
                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal">A blog website with user
                                authentication, content creation, and comment sections.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}