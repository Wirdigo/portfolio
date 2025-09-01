export default function SkillCard({data_icon, svg_image, card_title, card_info } : {data_icon: string, svg_image: string, card_title : string, card_info: string})
{
    return (
        <div className="flex flex-1 gap-3 rounded-lg border border-[#3d5245] bg-[#1c2620] p-4 flex-col">
            <div className="text-white" data-icon={data_icon} data-size="24px" data-weight="regular">
                {svg_image}
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">{card_title}</h2>
                <p className="text-[#9eb7a8] text-sm font-normal leading-normal">{card_info}</p>
            </div>
        </div>
    )
}
