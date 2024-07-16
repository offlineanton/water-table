
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
// import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MarkerLocation } from "@/App";

const DEFAULT_LONG = -3.44448;
const DEFAULT_LAT = 52.293647;

const Map = ({ markerLocation } : { markerLocation?: MarkerLocation }) => {
    // const [viewport] = useState({
    //     latitude: markerLocation?.lat ?? DEFAULT_LAT,
    //     longitude: markerLocation?.long ?? DEFAULT_LONG,
    //     zoom: 10,
    //     width: "100%",
    //     height: "100%",
    // });

    console.log("markerLocation", markerLocation);

    const token = import.meta.env.VITE_MAPBOX_TOKEN;
    return (
        <>
            <ReactMapGL
                longitude={markerLocation?.long ?? DEFAULT_LONG}
                latitude={markerLocation?.lat ?? DEFAULT_LAT}
                mapboxAccessToken={token}
                zoom={15}
                style={{width: "100%", height: "100%"}}
                mapStyle="mapbox://styles/mapbox/outdoors-v12"
            >
                {markerLocation?.lat && markerLocation?.long &&
                    <Marker 
                        latitude={markerLocation?.lat}
                        longitude={markerLocation?.long + 0.005}
                    />
                }

            </ReactMapGL>
        </>
    )
};

export default Map;