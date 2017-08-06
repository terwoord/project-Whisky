import { ILocationInfo } from "./ILocationInfo";

export function getLocationsMatthijs(): ILocationInfo[] {
    return [
        {
            title: "Speedboat op Loch Ness",
            kind: "Activiteit",
            url: "https://www.cruiselochness.com/rib-trips",
            coordinate: new google.maps.LatLng(57.1440003, -4.6800079),
            approxCosts: 40,
            image: '/Content/LochNess.jpg',
        },
        {
            title: "Lealt Falls",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(57.5643633, -6.1522248),
            image: '/Content/LealtFalls.jpg',
            url: "https://www.google.de/maps/place/Lealt+Falls/@57.5651507,-6.1539658,17.29z/data=!4m5!3m4!1s0x0:0x9608936e71c3b877!8m2!3d57.5650023!4d-6.1551929"
        }
    ];
}