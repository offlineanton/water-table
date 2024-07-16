import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { DecodedRiverSensorData } from "../hooks/types";
import RiverSensorInfo from "./RiverSensorInfo";
import { useMemo, useState } from "react";
  
interface RiverSensorTableProps {
    riverSensorData: DecodedRiverSensorData[]
}

const RiverSensorTable = ({
    riverSensorData
}: RiverSensorTableProps) => {
    const [currentRiverSensorID, setCurrentRiverSensorID] = useState<string | undefined>();

    const currentRiverSensorData = useMemo(() => 
        riverSensorData.find(data => data.id === currentRiverSensorID)
    , [riverSensorData, currentRiverSensorID])

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        {/* <TableHead className="w-[100px]">ID</TableHead> */}
                        {/* <TableHead>ID</TableHead> */}
                        <TableHead>Direction</TableHead>
                        <TableHead>Long</TableHead>
                        <TableHead>Lat</TableHead>
                        <TableHead>Transmitted At</TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {riverSensorData.map(data => (
                        <TableRow key={data.id}>
                            {/* <TableCell className="font-medium">{data.id}</TableCell> */}
                            <TableCell>{data.direction}</TableCell>
                            <TableCell>{data.longitude}</TableCell>
                            <TableCell>{data.latitude}</TableCell>
                            <TableCell>{new Date(data.transmittedAt.iso).toLocaleString("en-GB")}</TableCell>
                            <TableCell className="text-right">
                                <button onClick={() => setCurrentRiverSensorID(data.id)}>View Sensor Data</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog open={!!currentRiverSensorID} onOpenChange={() => setCurrentRiverSensorID(undefined)}>
                {currentRiverSensorData && 
                    <RiverSensorInfo riverSensorData={currentRiverSensorData} />
                }
            </Dialog>
        </>
    );
};

export default RiverSensorTable;