
export interface RiverSensorData {
    bytes: number;
    direction: string;
    id: string;
    latitude: string;
    longitude: string;
    payload: string;
    sensorId: string;
    transmittedAt: {
        unix: number;
        iso: string
    };
}

type State = "Rising" | "Constant" | "Falling";

interface DecodedPayload {
    temperature: {
            value: number,
            unit: string,
        },
    height: {
        value: string,
        unit: string
    },
    speed: {
        value: string,
        unit: string,
    },
    battery: {
        value: number,
        unit: string,
    },
    alarm: boolean,
    state: State,
    oxygen: {
        value: number,
        unit: string,
    },
}

export interface DecodedRiverSensorData extends Omit<RiverSensorData, "payload"> {
    payload: DecodedPayload;
}
