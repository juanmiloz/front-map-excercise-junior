const getUserLocation = async ():Promise<number[]> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) =>{
                resolve([coords.latitude, coords.longitude])
            }, (err) => {
                alert('No se pudo obtener la geolocalización')
                console.log(err)
                reject();
            }
        )
    })
}

export default getUserLocation;