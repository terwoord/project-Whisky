import { Locations } from './Locations'
import {ILocationInfo} from "./ILocationInfo";


export namespace App {
    export var map: google.maps.Map;

    export function initialize() {
        map = new google.maps.Map(document.getElementById('content'),
            {
                center: { lat: 57.63712860378047, lng: -4.570843749999991 },
                zoom: 8
            });

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
        for (var xLocation of locations) {
            var xMarker = new google.maps.Marker({
                position: xLocation.coordinate,
                label: xLocation.kind[0],
                map: map,

            });
        }
    }
}