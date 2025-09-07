import {FC, SVGProps} from "react";

interface ExperienceCardProps {
    dataIcon: string;
    IconComponent: FC<SVGProps<SVGElement>>;
    iconSize?: number;
    className?: string;
    cardTitle : string;
    cardInfo: string;
}
export default function ExperienceCard ({dataIcon, IconComponent, cardTitle, cardInfo } : ExperienceCardProps)
{
    return (
        <>
            <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-white" data-icon={dataIcon} data-size="24px" data-weight="regular">
                    <IconComponent/>
                </div>
                <div className="w-[1.5px] bg-[#3d5245] h-2 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">{cardTitle}</p>
                <p className="text-[#9eb7a8] text-base font-normal leading-normal">{cardInfo}</p>
            </div>
        </>
    )
}
