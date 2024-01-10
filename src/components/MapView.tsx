import {MapContainer, TileLayer, useMapEvent} from "react-leaflet";
import "leaflet/dist/leaflet.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {LocationInterface} from "../interfaces/location.interface.ts";
import getUserLocation from "../functions/getUserLocation.ts";
import Markers from "./Markers.tsx";
import LocationsViewer from "./LocationsViewer.tsx";

function MyComponent() {
    const map = useMapEvent('click', () => {
        map.flyTo([50.5, 30.5], map.getZoom())
    })
    return null
}

const MapView: React.FC = () => {

    const [locations, setLocations] = useState<LocationInterface[]>([])
    const [userLocation, setUserLocation] = useState<number[]>([0, 0]);
    const [map, setMap] = useState(null);

    useEffect(() => {
        loadLocations();
    }, []);

    useEffect(() => {
        if(map!==null){
            map.setView(userLocation, 16)
        }
    }, [userLocation]);


    const loadLocations = () => {
        getUserLocation().then((res)=>{
            setUserLocation(res)
        })
        axios.get('http://localhost:3000/location').then((res) => {
            setLocations(res.data)
        });
    }


    return (
        <div className={'w-screen h-screen'}>
            <div className={'h-2/6 w-full overflow-auto'}>
                <h1 className={'font-bold text-xl m-3'}>Locations </h1>
                <LocationsViewer locations={locations} map={map}/>
            </div>
            <MapContainer center={userLocation} zoom={15} className={'w-full h-4/6'} ref={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {locations.map((location)=>{
                    return <Markers key={location._id} lat={location.lat} long={location.long} time={location.time}/>
                })}
            </MapContainer>
        </div>

    );
};

export default MapView;
