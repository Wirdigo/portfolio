import {FC, SVGProps} from "react";

interface SkillCardProps {
    dataIcon: string;
    IconComponent: FC<SVGProps<SVGElement>>;
    iconSize?: number;
    className?: string;
    cardTitle : string;
    cardInfo: string;
}
export default function SkillCard ({dataIcon, IconComponent, cardTitle, cardInfo } : SkillCardProps)
{
    return (
        <div className="flex flex-1 gap-3 rounded-lg border border-[#3d5245] bg-[#1c2620] p-4 flex-col">
            <div className="text-white" data-icon={dataIcon} data-size="24px" data-weight="regular">
                <IconComponent/>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">{cardTitle}</h2>
                <p className="text-[#9eb7a8] text-sm font-normal leading-normal">{cardInfo}</p>
            </div>
        </div>
    )
}
