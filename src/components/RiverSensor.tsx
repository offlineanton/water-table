import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import RiverSensorTable from "./RiverSensorTable";
import { DecodedRiverSensorData } from "../hooks/types";
import { Button } from "./ui/button";

interface RiverSensorProps {
    riverSensorData: DecodedRiverSensorData[];
    handleSetMarkerLocation: (long: number, lat: number) => void;
    handleChangePage: (page: number) => void;
    page: number;
    loading: boolean;
}

const RiverSensor = ({
    riverSensorData,
    handleSetMarkerLocation,
    page,
    handleChangePage,
    loading,
}: RiverSensorProps) => {
    return (
        <div className="absolute top-1/2 transform -translate-y-1/2 z-20 ml-10">
            <Card>
                <CardHeader>
                    <CardTitle>River Sensor Data</CardTitle>
                    <CardDescription>View the river sensor data below</CardDescription>
                </CardHeader>
                <CardContent>
                    {loading ? 
                        <div className="flex justify-center items-center pb-5">  
                            <img src="/river.gif" width="80px" height="80px" />
                        </div>
                    :
                        <>
                            <RiverSensorTable riverSensorData={riverSensorData} handleSetMarkerLocation={handleSetMarkerLocation} />
                            <div className={page === 1 ? `flex justify-end` : `flex justify-between`}>
                                {page !== 1 &&
                                    <Button 
                                        variant="link"
                                        size="sm"
                                        onClick={() => handleChangePage(page - 1)}
                                    >
                                        Previous page
                                    </Button>
                                }

                                <Button 
                                    variant="link"
                                    size="sm"
                                        onClick={() => handleChangePage(page + 1)}
                                >
                                    Next page
                                </Button>
                            </div>
                        </>
                    }
                </CardContent>
            </Card>
        </div>
    )
};

export default RiverSensor;