import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DecodedRiverSensorData } from "../hooks/types";
  
interface RiverSensorTableProps {
    riverSensorData: DecodedRiverSensorData[]
}

const RiverSensorTable = ({
    riverSensorData
}: RiverSensorTableProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {/* <TableHead className="w-[100px]">ID</TableHead> */}
                    <TableHead>ID</TableHead>
                    <TableHead>Direction</TableHead>
                    <TableHead>Long</TableHead>
                    <TableHead>Lat</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {riverSensorData.map(data => (
                    <TableRow key={data.id}>
                        <TableCell className="font-medium">{data.id}</TableCell>
                        <TableCell>{data.direction}</TableCell>
                        <TableCell>{data.longitude}</TableCell>
                        <TableCell>{data.latitude}</TableCell>
                        <TableCell>{data.transmittedAt.iso}</TableCell>
                        <TableCell className="text-right"><button>test</button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default RiverSensorTable;