export interface UserLocation {
    lat: number,
    long: number,
}

export interface LocationInterface extends UserLocation{
    _id: string,
    time: Date,
}