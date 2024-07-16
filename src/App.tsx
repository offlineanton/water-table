import { useState } from "react";
import { GetRiverSensorData } from "./hooks/useGetRiverSensorData";
import Sidebar from "./components/Sidebar";
import RiverSensor from "./components/RiverSensor";
import Map from "./components/Map";

export type MarkerLocation = {
  long: number;
  lat: number;
}

function App() {
  const [page] = useState(1);

  const { riverSensorData } = GetRiverSensorData({ page });

  const [markerLocation, setMarkerLocation] = useState<MarkerLocation | undefined>(undefined);

  const handleSetMarkerLocation = (long: number, lat: number) => {
    setMarkerLocation({ long, lat });
  }

  console.log("riverSensorData", riverSensorData);

  return (
    <>
      <div className="h-screen w-screen">
        <RiverSensor riverSensorData={riverSensorData} handleSetMarkerLocation={handleSetMarkerLocation} />
        <div className="w-full h-full absolute overflow-hidden">
          <Map markerLocation={markerLocation} />
        </div>
      </div>
    </>
  )
}

export default App
