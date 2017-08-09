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
        },
        {   
            title: "Glenfinnan Viaduct",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(56.8763083, -5.4340482),
            image: '/Content/GlenfinnanViaduct.jpg',
            url: "https://www.visitscotland.com/info/towns-villages/glenfinnan-p236571"
        },
        {
            title: "Duncansby Stacks",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(58.6385305, -3.0271775),
            image: '/Content/DuncansbyStacks.jpg',
            url: "https://www.google.de/maps/place/Duncansby+Stacks/@58.6385305,-3.0271775,1957m/data=!3m1!1e3!4m12!1m6!3m5!1s0x489adf6ff753414f:0x491f6424d0f52cfb!2sDuncansby+Head+Lighthouse!8m2!3d58.6439217!4d-3.0251272!3m4!1s0x0:0x6e9f032b64720516!8m2!3d58.6309458!4d-3.0347693"
        },
        {
            title: "Eilean Donan Castle",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(57.2711268, -5.5217303),
            image: '/Content/EileanDonanCastle.jpg',
            url: "https://www.google.de/maps/place/Eilean+Donan+Castle/@57.2732359,-5.5213515,14.92z/data=!4m5!3m4!1s0x488e9119ab2d938d:0xb3238d97fcbf65d3!8m2!3d57.2738957!4d-5.5161585"
        },
        {
            title: "Fairy pools, Isle of Skye",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(57.2465557, -6.2236556),
            image: '/Content/FairyPools.jpg',
            url: "https://www.isleofskye.com/skye-guide/top-ten-skye-walks/fairy-pools"
        },
        {
            title: "Old Man of Storr",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(57.5072623, -6.1760996),
            image: '/Content/OldManOfStorr.jpg',
            url: "https://www.google.de/maps/place/Old+Man+of+Storr/@57.5072623,-6.1760996,17.25z/data=!4m5!3m4!1s0x0:0xd877501151c83d77!8m2!3d57.5072983!4d-6.1745471"
        },
        {
            title: "Portree, Isley of Skye",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(57.4033201, -6.2103968),
            image: '/Content/PortreeIsleOfSkye.jpg',
            url: "https://www.google.de/maps/place/Portree,+Verenigd+Koninkrijk/@57.4141661,-6.2177431,14z/data=!3m1!4b1!4m5!3m4!1s0x488c2fe19bd3071d:0x101d0b7a22386915!8m2!3d57.412474!4d-6.196023"
        },
        {
            title: "Tobermory",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(56.622787, -6.0792433),
            image: '/Content/ToberMory.jpg',
            url: "https://www.google.de/maps/place/Tobermory,+Isle+of+Mull,+Verenigd+Koninkrijk/@56.622787,-6.0792433,15z/data=!3m1!4b1!4m5!3m4!1s0x488b8d510730b925:0xf70ea9b257f84dca!8m2!3d56.6227813!4d-6.0723004"
        },
        
    ];//Loch Avon, Cairngorms
}