import { useEffect, useState } from "react"

import riverSensor from "../assets/river_sensor_data.json"; 
import { DecodedRiverSensorData, RiverSensorData } from "./types";
import { decodeData } from "../helpers";

const RIVER_SENSOR_DATA = riverSensor as RiverSensorData[];

interface GetRiverSensorData {
    riverSensorData: DecodedRiverSensorData[];
    riverSensorDataError: boolean;
    riverSensorDataLoading: boolean;
}

interface GetRiverSensorDataSettings {
    page: number;
    pageAmount?: number
    search?: string;
}

export const GetRiverSensorData = ({ page, pageAmount = 10 }: GetRiverSensorDataSettings): GetRiverSensorData => {
    const [riverSensorDataLoading, setRiverSensorDataLoading] = useState(false);
    const [riverSensorDataError] = useState(false);
    const [riverSensorData, setRiverSensorData] = useState<RiverSensorData[]>([]);

    // Replicating how the data would usually be fetched
    useEffect(() => {
        setRiverSensorDataLoading(true);

        setTimeout(() => {
            const paginatedRiverSensor = RIVER_SENSOR_DATA.slice(page * pageAmount - pageAmount, page * pageAmount)

            setRiverSensorData(paginatedRiverSensor)
            setRiverSensorDataLoading(false);
        }, 1000);
    }, [page])

    return {
        riverSensorData: riverSensorData.length > 0
            ? riverSensorData.map(data => ({
                ...data,
                payload: decodeData(data.payload),
            })) 
            : [],
        riverSensorDataError,
        riverSensorDataLoading
    }
}
