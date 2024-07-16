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
  const [page, setPage] = useState(1);
  const handleChangePage = (page: number) => {
    setPage(page);
  }
  
  const [markerLocation, setMarkerLocation] = useState<MarkerLocation | undefined>(undefined);
  const handleSetMarkerLocation = (long: number, lat: number) => {
    setMarkerLocation({ long, lat });
  }

  const { riverSensorData, riverSensorDataLoading } = GetRiverSensorData({ page });

  return (
    <>
      <div className="h-screen w-screen">
        <RiverSensor 
          riverSensorData={riverSensorData}
          handleSetMarkerLocation={handleSetMarkerLocation}
          page={page}
          handleChangePage={handleChangePage} 
          loading={riverSensorDataLoading}
        />

        <Map markerLocation={markerLocation} />
      </div>
    </>
  )
}

export default App
