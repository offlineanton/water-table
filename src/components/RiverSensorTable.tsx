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
  import { Button } from "@/components/ui/button";
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
                        {/* <TableHead>Direction</TableHead> */}
                        <TableHead>Long</TableHead>
                        <TableHead>Lat</TableHead>
                        <TableHead>Transmitted At</TableHead>
                        <TableHead />
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {riverSensorData.map(data => (
                        <TableRow key={data.id}>
                            {/* <TableCell className="font-medium">{data.id}</TableCell> */}
                            {/* <TableCell>{data.direction}</TableCell> */}
                            <TableCell className="p-2">{data.longitude}</TableCell>
                            <TableCell className="p-2">{data.latitude}</TableCell>
                            <TableCell className="p-2">{new Date(data.transmittedAt.iso).toLocaleString("en-GB")}</TableCell>
                            <TableCell className="p-2">
                                {data.payload.alarm && 
                                    <div className="p-1 bg-red-500 text-white rounded-lg text-xs text-center">
                                        Alarm active
                                    </div>
                                }
                            </TableCell>
                            <TableCell className="text-right p-2">
                                <Button 
                                    onClick={() => setCurrentRiverSensorID(data.id)}
                                    variant="link" 
                                    size="sm"
                                >
                                    View Sensor Data
                                </Button>
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