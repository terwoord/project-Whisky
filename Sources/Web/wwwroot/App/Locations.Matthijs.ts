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
            url: "https://www.visitscotland.com/see-do/landscapes-nature/iconic-scottish-views/",
            description: "Voor wandel instructies, zie stap 7 van link"
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
        {
            title: "CairnGorm Mountain",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(57.1171281, -3.6394352),
            image: '/Content/CairngormMountain.jpg',
            url: "https://www.google.de/maps/@57.1171281,-3.6394352,3a,75y,92.71h,68.22t/data=!3m8!1e1!3m6!1sAF1QipNs_DF5Vl0ynFpGwHW6KYhWprLLhaSSQ_jhL_sn!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNs_DF5Vl0ynFpGwHW6KYhWprLLhaSSQ_jhL_sn%3Dw203-h100-k-no-pi-3.045456-ya165.5-ro0-fo100!7i4608!8i2032"
        },
        {
            title: "Cromarty",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(57.6837268, -4.0369002),
            image: '/Content/Cromarty.jpg',
            url: "http://www.undiscoveredscotland.co.uk/cromarty/ferry/index.html"
        },
        {
            title: "Loch Maree",
            kind: "SightSeeing",
            coordinate: new google.maps.LatLng(57.580287, -5.2414855),
            image: '/Content/LochMaree.jpg',
            url: "https://www.google.de/maps/place/Loch+Maree/@57.580287,-5.2414855,15.22z/data=!4m5!3m4!1s0x488e67954024c5bb:0x925b1d200800b86c!8m2!3d57.7104618!4d-5.5306467"
        },
        {
            title: "Zee Kayakken, Isle of Skye",
            kind: "Activiteit",
            coordinate: new google.maps.LatLng(57.2431991, -5.8809379),
            image: '/Content/KayakSkye.jpeg',
            url: "http://www.skyakadventures.com/",
            approxCosts: "?"
        },
   
   //     http://www.huffingtonpost.com/viator/10-of-the-most-beautiful_b_3714626.html
   //     http://metro.co.uk/2015/06/20/20-incredible-places-to-visit-in-scotland-before-you-die-5250540/
   //     http://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/scotland/articles/Top-10-cities-and-places-to-visit-in-Scotland/
   //     http://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/scotland/articles/Scotlands-best-scenic-drives/
   //         https://www.tripadvisor.co.uk/Attractions-g186535-Activities-Scottish_Highlands_Scotland.html
			//http://www.independent.co.uk/life-style/snowdonia-scottish-highlands-loch-ness-uk-20-best-views-britain-stonehenge-chedder-gorge-buttermere-a7678046.html
    ];//Loch Avon, Cairngorms
	
}