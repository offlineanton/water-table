import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { DEFAULT_PAGE_AMOUNT } from "../hooks/useGetRiverSensorData";
import RiverSensorTable from "./RiverSensorTable";
import { DecodedRiverSensorData } from "../hooks/types";
import { Button } from "./ui/button";
import { useState } from "react";
import RiverSensorPagination from "./RiverSensorPagination";

interface RiverSensorProps {
    riverSensorData: DecodedRiverSensorData[];
    handleSetMarkerLocation: (long: number, lat: number) => void;
    handleChangePage: (page: number) => void;
    page: number;
    loading: boolean;
    handleSearch: (value: string) => void;
    total: number;
}

const RiverSensor = ({
    riverSensorData,
    handleSetMarkerLocation,
    page,
    handleChangePage,
    loading,
    handleSearch,
    total
}: RiverSensorProps) => {
    const [search, setSearch] = useState("");

    const getRiverSensorStyles = window.innerWidth >= 850 
        ? `absolute top-1/2 transform -translate-y-1/2 z-20 ml-10` 
        : `w-full h-full m-0`

    const getCardStyles = window.innerWidth >= 850 
        ? ""
        : "border-none shadow-none bg-transparent"

    return (
        <div className={getRiverSensorStyles}>
            <Card className={getCardStyles}>
                <CardHeader>
                    <div>
                        <CardTitle>River Sensor Data</CardTitle>
                        <CardDescription className="mb-5">View the river sensor data below</CardDescription>
                    </div>
                    <div className="flex gap-5">
                        <Input 
                            placeholder="Seach by ID..." 
                            value={search}
                            onChange={(value) => setSearch(value.currentTarget.value)}
                        />
                        <Button onClick={() => handleSearch(search)}>Search</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    {loading ? 
                        <div className="flex justify-center items-center pb-5">  
                            <img src="/river.gif" width="80px" height="80px" />
                        </div>
                    :
                        <>
                            {riverSensorData.length > 0 
                            ?
                                <RiverSensorTable 
                                    riverSensorData={riverSensorData} 
                                    handleSetMarkerLocation={handleSetMarkerLocation} 
                                />
                            :
                                <p>No results</p>
                            }

                            {total > DEFAULT_PAGE_AMOUNT &&
                                <RiverSensorPagination 
                                    page={page}
                                    handleChangePage={handleChangePage}
                                    total={total}
                                />
                            }
                        </>
                    }
                </CardContent>
            </Card>
        </div>
    )
};

export default RiverSensor;