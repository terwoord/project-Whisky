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
        for (var xLocation of locations) {
            xContainer.append(`
<div class="locatie ${xLocation.kind}">
<span class="SoortLocatie${xLocation.kind}"></span>
<span>${xLocation.title}</span>
</div>
`);
        }
    }

    function addLocationsToGoogle(locations: ILocationInfo[]) {
        for (let xLocation of locations) {
            let xMarker = new google.maps.Marker({
                position: xLocation.coordinate,
                label: xLocation.kind[0],
                map: map
            });

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