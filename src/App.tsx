import { useState } from "react";
import { GetRiverSensorData } from "./hooks/useGetRiverSensorData";
import Sidebar from "./components/Sidebar";
import RiverSensor from "./components/RiverSensor";

function App() {
  const [page] = useState(1);

  const { riverSensorData } = GetRiverSensorData({ page });

  console.log("riverSensorData", riverSensorData);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <RiverSensor riverSensorData={riverSensorData}/>
      </div>
    </>
  )
}

export default App
