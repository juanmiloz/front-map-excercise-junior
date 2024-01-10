import {Marker, Popup} from "react-leaflet";
import React from "react";

interface Props {
    lat: number,
    long: number,
    time: Date
}

const Markers: React.FC<Props> = ({lat, long, time}) => {
    return (
        <Marker position={[lat, long]}>
            <Popup>
                {time.toString()}
            </Popup>
        </Marker>
    );
};

export default Markers;
