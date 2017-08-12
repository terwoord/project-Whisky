import { Locations } from './Locations'
import {ILocationInfo} from "./ILocationInfo";


export namespace App {
    export var map: google.maps.Map;

    var xInfoWindow: google.maps.InfoWindow;

    export function initialize() {
        map = new google.maps.Map(document.getElementById('content'),
            {
                center: { lat: 57.63712860378047, lng: -4.570843749999991 },
                zoom: 8
            });

        xInfoWindow = new google.maps.InfoWindow();

        var xLocations = Locations.getLocations();
        buildLocationList(xLocations);
        addLocationsToGoogle(xLocations);
    }

    function buildLocationList(locations: ILocationInfo[]) {
        var xContainer = $('#menu');
        for (var i = 0; i < locations.length; i++) {
            let xLocation = locations[i];
            
            xContainer.append(`
<div class="locatie ${xLocation.kind}" onclick="OurApp.highlightMarker(${i})">
<span class="SoortLocatie${xLocation.kind}"></span>
<span>${xLocation.title}</span>
</div>
`);
        }
    }

    var mMarkers: google.maps.Marker[] = [];

    export function highlightMarker(markerIndex: number) {
        mMarkers[markerIndex].setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(() => {
                mMarkers[markerIndex].setAnimation(null);
            },
            2000);
    }

    function addLocationsToGoogle(locations: ILocationInfo[]) {
        for (var i = 0; i < locations.length; i++) {
            let xLocation = locations[i];
        
            var xIcon: string;
            if (xLocation.kind === "SightSeeing") {
                xIcon = "/Markers/darkgreen_MarkerS.png";
            } else {
                xIcon = "/Markers/brown_MarkerA.png";
            }
            let xMarker = new google.maps.Marker({
                position: xLocation.coordinate,
                map: map,
                icon: xIcon
            });

            mMarkers[i] = xMarker;

            xMarker.addListener('click',
                () => {
                    var xTitle: string;
                    if (xLocation.url) {
                        xTitle = `<a id="title" href="${xLocation.url}" target="_blank">${xLocation.title}</a>`;
                    } else {
                        xTitle = `<span id="title">${xLocation.title}</span>`;
                    }

                    xInfoWindow.setContent(`<div id="infoContent">
${xTitle}<br>
<img src="${xLocation.image}"><br>
<span id="infoContentDescription">${xLocation.description || ""}</span>
</div>`);
                    xInfoWindow.close();
                    xInfoWindow.open(map, xMarker);
                });
        }
    }
}