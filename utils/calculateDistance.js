
// Bolter End Farm, Finings Rd, Lane End, High Wycombe HP14 3LP

// calculate distance between 2 points based on long and lat coords:
export function getDistanceFromLaceys(lat, long) {
        

        const laceysLat =  51.621306;
        const laceysLong = -0.845643;


        lat = parseFloat(lat);
        long = parseFloat(long);


        const R = 6371e3; // metres

        const φ1 = laceyLat * Math.PI/180; // φ, λ in radians
        const φ2 = lat * Math.PI/180;

        const Δφ = (lat-laceyLat) * Math.PI/180;
        const Δλ = (long-laceyLong) * Math.PI/180;



        
        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        const d = R * c; // in metres

        console.log('distance to Laceys is: >>>',d);
        return d;


}







/*
let homeLong = -0.777035;
let homeLat = 51.641233;


let murcoLong = -0.792772;
let murcoLat = 51.643649;





getDistance(homeLat, murcoLat, homeLong, murcoLong);

*/