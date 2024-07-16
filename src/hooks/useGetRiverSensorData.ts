import { useEffect, useState } from "react"

import riverSensor from "../assets/river_sensor_data.json"; 
import { DecodedRiverSensorData, RiverSensorData } from "./types";
import { decodeData } from "../helpers";

const RIVER_SENSOR_DATA = riverSensor as RiverSensorData[];

interface GetRiverSensorData {
    riverSensorData: DecodedRiverSensorData[];
    riverSensorDataError: boolean;
    riverSensorDataLoading: boolean;
    total: number;
}

interface GetRiverSensorDataSettings {
    page: number;
    pageAmount?: number
    search?: string;
}

export const DEFAULT_PAGE_AMOUNT = 7;

export const GetRiverSensorData = ({ 
    page, 
    pageAmount = DEFAULT_PAGE_AMOUNT, 
    search 
}: GetRiverSensorDataSettings): GetRiverSensorData => {
    const [riverSensorDataLoading, setRiverSensorDataLoading] = useState(false);
    const [riverSensorDataError] = useState(false);
    const [riverSensorData, setRiverSensorData] = useState<RiverSensorData[]>([]);
    const [total, setTotal] = useState(0);

    // Replicating how the data would usually be fetched
    useEffect(() => {
        setRiverSensorDataLoading(true);

        setTimeout(() => {
            let filteredRiverSensorData = RIVER_SENSOR_DATA;

            if (search) {
                filteredRiverSensorData = filteredRiverSensorData.filter(data => (data.id.includes(search)));
            }

            setTotal(filteredRiverSensorData.length);

            const paginatedRiverSensor = filteredRiverSensorData.slice(page * pageAmount - pageAmount, page * pageAmount)

            setRiverSensorData(paginatedRiverSensor)
            setRiverSensorDataLoading(false);
        }, 1000);
    }, [page, search])

    return {
        riverSensorData: riverSensorData.length > 0
            ? riverSensorData.map(data => ({
                ...data,
                payload: decodeData(data.payload),
            })) 
            : [],
        riverSensorDataError,
        riverSensorDataLoading,
        total
    }
}
