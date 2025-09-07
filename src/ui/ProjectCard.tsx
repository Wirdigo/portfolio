
interface ProjectCardProps {
    cardTitle : string;
    cardInfo: string;
}
export default function ProjectCard({cardTitle, cardInfo } : ProjectCardProps) {
    return(
        <div className="flex flex-col gap-3 pb-3">
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIOePhZ716nGBQ87gQSQXQgkDzO39MNt00J4-8bBcWXcZTi07QvednJ1Lcl9B9iQkaQfQPOf6UULWoCc1xizLUW8vhYht--uoS9o4QqNz-TL763oQwph3KXflpk521cDnL4JRVXJGWo4fMcbuyok1hhLbX883Qa5lxNdPMkfj2z0MoSIzUzxY_ofV4eMSR_xTQ0hpBP8JdGOZ5Bhk4wQf0LUr3yYEoEso-MMW-DKihDyTfy_X94zUzqHS_6ijS6LOcLzhPRzUjPh3O");'
            ></div>
            <div>
                <p className="text-white text-base font-medium leading-normal">{cardTitle}</p>
                <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                    {cardInfo}
                </p>
            </div>
        </div>
    )
}
