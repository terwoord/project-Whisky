export interface ILocationInfo {
    title: string;
    description?: string;
    kind: "Activiteit" | "SightSeeing";
    coordinate: google.maps.LatLng;
    image: string;
    url: string;
    // in euro: 
    approxCosts?: number | string;
}