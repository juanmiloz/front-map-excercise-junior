import React from 'react';
import {LocationInterface} from "../interfaces/location.interface.ts";


interface Props {
    locations: LocationInterface[],
    map: any
}
const LocationsViewer: React.FC<Props> = ({locations, map}) => {

    const visitLocation = (destination: number[]) =>{
        map.setView(destination, 13)
    }

    return (
        <div className={'grid grid-cols-4 gap-4 p-4'}>
            {locations.map((location, i)=>
                <div className="card card-compact w-80 bg-base-200 shadow-xl" key={location._id}>
                    <div className="card-body">
                        <h2 className="card-title m-0">Location {i}</h2>
                        <p><span className={'font-semibold'}>Latitude: </span> {location.lat}</p>
                        <p><span className={'font-semibold'}>Logitude:</span> {location.long}</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-green-400 btn-sm" onClick={() => {visitLocation([location.lat, location.long])}}>GO NOW!</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocationsViewer;
