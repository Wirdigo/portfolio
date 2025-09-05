import {FC, SVGProps} from "react";

export default interface skill{
    cardId: number;
    dataIcon: string;
    IconComponent: FC<SVGProps<SVGElement>>;
    iconSize?: number;
    className?: string;
    cardTitle : string;
    cardInfo: string;
}