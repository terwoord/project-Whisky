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
        }
    ];
}