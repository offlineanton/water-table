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
    riverSensorData: DecodedRiverSensorData[]
}

const RiverSensor = ({
    riverSensorData
}: RiverSensorProps) => {
    return (
        <div className="flex-1 flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>River Sensor Data</CardTitle>
                    <CardDescription>View the river sensor data below</CardDescription>
                </CardHeader>
                <CardContent>
                    <RiverSensorTable riverSensorData={riverSensorData} />
                </CardContent>
            </Card>
        </div>
    )
};

export default RiverSensor;