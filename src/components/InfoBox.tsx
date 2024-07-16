import { IconProps } from '@radix-ui/react-icons/dist/types';

interface InfoBoxProps {
    title: string;
    value: string;
    background?: string;
    Icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

const InfoBox = ({
    title,
    value,
    background = "bg-[#dfebec]",
    Icon
}: InfoBoxProps) => {
    return (
        <div className={`w-[120px] h-[120px] ${background} rounded-[5px] flex flex-col items-center justify-center`}>
            {Icon && <Icon width="110px" height="110px"  className="absolute opacity-5" />}

            <p className="font-bold">{title}</p>
            <p>{value}</p>
        </div>
    )
}

export default InfoBox;