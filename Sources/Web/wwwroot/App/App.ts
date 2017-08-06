import { Locations } from './Locations'

export namespace App {
    export var map: google.maps.Map;

    export function initialize() {
        map = new google.maps.Map(document.getElementById('content'),
            {
                center: { lat: 57.63712860378047, lng: -4.570843749999991 },
                zoom: 8
            });


        buildLocationList();
    }

    function buildLocationList() {
        var xLocations = Locations.getLocations();

        var xContainer = $('#menu');
        for (var xLocation of xLocations) {
            xContainer.append(`
<div class="locatie ${xLocation.kind}">
<span class="SoortLocatie${xLocation.kind}"></span>
<span>${xLocation.title}</span>
</div>
`);
        }
    }
}