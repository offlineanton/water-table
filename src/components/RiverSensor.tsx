import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import RiverSensorTable from "./RiverSensorTable";
import { DecodedRiverSensorData } from "../hooks/types";

interface RiverSensorProps {
    riverSensorData: DecodedRiverSensorData[];
    handleSetMarkerLocation: (long: number, lat: number) => void;
}

const RiverSensor = ({
    riverSensorData,
    handleSetMarkerLocation
}: RiverSensorProps) => {
    return (
        <div className="absolute top-1/2 transform -translate-y-1/2 z-20 ml-10">
            <Card>
                <CardHeader>
                    <CardTitle>River Sensor Data</CardTitle>
                    <CardDescription>View the river sensor data below</CardDescription>
                </CardHeader>
                <CardContent>
                    <RiverSensorTable riverSensorData={riverSensorData} handleSetMarkerLocation={handleSetMarkerLocation} />
                </CardContent>
            </Card>
        </div>
    )
};

export default RiverSensor;