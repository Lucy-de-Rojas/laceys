// calculate distance between 2 points based on long and lat coords:
function getDistance(lat1, lat2, lon1, lon2) {

        lat1 = parseFloat(lat1);
        lat1 = parseFloat(lat2);

        lon1 = parseFloat(lon1);
        lon2 = parseFloat(lon2);


        const R = 6371e3; // metres

        const φ1 = lat1 * Math.PI/180; // φ, λ in radians
        const φ2 = lat2 * Math.PI/180;

        const Δφ = (lat2-lat1) * Math.PI/180;
        const Δλ = (lon2-lon1) * Math.PI/180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        const d = R * c; // in metres

        console.log('distance is: >>>',d);
        return d;


}


let homeLong = -0.777035;
let homeLat = 51.641233;


let murcoLong = -0.792772;
let murcoLat = 51.643649;





getDistance(homeLat, murcoLat, homeLong, murcoLong);