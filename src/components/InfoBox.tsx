interface InfoBoxProps {
    title: string;
    value: string;
}

const InfoBox = ({
    title,
    value,
}: InfoBoxProps) => {
    return (
        <div className="w-[120px] h-[120px] bg-[#dfebec] rounded-[5px] flex flex-col items-center justify-center">
            <p className="font-bold">{title}</p>
            <p>{value}</p>
        </div>
    )
}

export default InfoBox;