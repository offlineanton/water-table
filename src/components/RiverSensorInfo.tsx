import { DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { DialogHeader } from "./ui/dialog";
import { DecodedRiverSensorData } from "../hooks/types";

interface RiverSensorInfoProps {
    riverSensorData: DecodedRiverSensorData
} 

const RiverSensorInfo = ({
    riverSensorData
}: RiverSensorInfoProps) => {
    console.log("riverSensorData", riverSensorData);

    return (
        <>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>River Sensor Info</DialogTitle>
                    <DialogDescription>
                        {riverSensorData.id}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </>
    )
}

export default RiverSensorInfo;