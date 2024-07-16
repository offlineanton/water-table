import { DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { DialogHeader } from "./ui/dialog";
import { DecodedRiverSensorData } from "../hooks/types";
import InfoBox from "./InfoBox";
import { getBatteryColour, getSecondaryBatteryColour, getSpeedIcon, getStateIcon, getTempColour } from "../helpers";

interface RiverSensorInfoProps {
    riverSensorData: DecodedRiverSensorData
} 

const RiverSensorInfo = ({
    riverSensorData
}: RiverSensorInfoProps) => {
    return (
        <>
            <DialogContent className="max-w-[600px]"> 
                <DialogHeader>
                    <DialogTitle>River Sensor Info</DialogTitle>
                    <DialogDescription>
                        ID: {riverSensorData.id}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-4 gap-2.5">
                    <InfoBox 
                        title="Temp"
                        background={getTempColour(riverSensorData.payload.temperature.value)}
                        value={`${riverSensorData.payload.temperature.value} ${riverSensorData.payload.temperature.unit}`}
                    />
                    <InfoBox 
                        title="Height"
                        value={`${riverSensorData.payload.height.value} ${riverSensorData.payload.height.unit}`}
                    />
                    <InfoBox 
                        title="Speed"
                        Icon={getSpeedIcon(Number(riverSensorData.payload.speed.value))}
                        value={`${riverSensorData.payload.speed.value} ${riverSensorData.payload.speed.unit}`}
                    />
                    <InfoBox 
                        title="Battery"
                        background={getBatteryColour(riverSensorData.payload.battery.value)}
                        value={`${riverSensorData.payload.battery.value} ${riverSensorData.payload.battery.unit}`}
                    >
                        <div 
                            style={{ height: `${riverSensorData.payload.battery.value}%` }}
                            className={`
                                absolute 
                                bottom-0 
                                w-full
                                opacity-10
                                ${getSecondaryBatteryColour(riverSensorData.payload.battery.value)} 
                            `}
                        />
                    </InfoBox>
                    <InfoBox 
                        title="State"
                        Icon={getStateIcon(riverSensorData.payload.state)}
                        value={`${riverSensorData.payload.state}`}
                    />
                    <InfoBox 
                        title="Oxygen"
                        value={`${riverSensorData.payload.oxygen.value} ${riverSensorData.payload.oxygen.unit}`}
                    />
                </div>
            </DialogContent>
        </>
    )
}

export default RiverSensorInfo;