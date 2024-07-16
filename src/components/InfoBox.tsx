import { IconProps } from '@radix-ui/react-icons/dist/types';

interface InfoBoxProps {
    title: string;
    value: string;
    background?: string;
    Icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    children?: React.ReactNode;
}

const InfoBox = ({
    title,
    value,
    background = "bg-[#dfebec]",
    Icon,
    children
}: InfoBoxProps) => {
    return (
        <div className={`w-[120px] h-[120px] ${background} rounded-[5px] flex flex-col items-center justify-center relative overflow-hidden`}>
            {Icon && <Icon width="110px" height="110px"  className="absolute opacity-5" />}

            <p className="font-bold z-10 relative">{title}</p>
            <p className="z-10 relative">{value}</p>
            
            {children}
        </div>
    )
}

export default InfoBox;