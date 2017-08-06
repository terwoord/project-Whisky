System.register("ILocationInfo", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Locations.Matthijs", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function getLocationsMatthijs() {
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
    exports_2("getLocationsMatthijs", getLocationsMatthijs);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Locations.Sijmen", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function getLocationsSijmen() {
        return [];
    }
    exports_3("getLocationsSijmen", getLocationsSijmen);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Locations", ["Locations.Matthijs", "Locations.Sijmen"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Locations_Matthijs_1, Locations_Sijmen_1, Locations;
    return {
        setters: [
            function (Locations_Matthijs_1_1) {
                Locations_Matthijs_1 = Locations_Matthijs_1_1;
            },
            function (Locations_Sijmen_1_1) {
                Locations_Sijmen_1 = Locations_Sijmen_1_1;
            }
        ],
        execute: function () {
            (function (Locations) {
                function getLocations() {
                    var xResult = Locations_Matthijs_1.getLocationsMatthijs().concat(Locations_Sijmen_1.getLocationsSijmen());
                    xResult.sort((a, b) => {
                        return a.title.localeCompare(b.title);
                    });
                    return xResult;
                }
                Locations.getLocations = getLocations;
            })(Locations || (Locations = {}));
            exports_4("Locations", Locations);
        }
    };
});
System.register("App", ["Locations"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var Locations_1, App;
    return {
        setters: [
            function (Locations_1_1) {
                Locations_1 = Locations_1_1;
            }
        ],
        execute: function () {
            (function (App) {
                function initialize() {
                    App.map = new google.maps.Map(document.getElementById('content'), {
                        center: { lat: 57.63712860378047, lng: -4.570843749999991 },
                        zoom: 8
                    });
                    var xLocations = Locations_1.Locations.getLocations();
                    buildLocationList(xLocations);
                    addLocationsToGoogle(xLocations);
                }
                App.initialize = initialize;
                function buildLocationList(locations) {
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
                function addLocationsToGoogle(locations) {
                    for (var xLocation of locations) {
                        var xMarker = new google.maps.Marker({
                            position: xLocation.coordinate,
                            label: xLocation.kind[0],
                            map: App.map,
                        });
                    }
                }
            })(App || (App = {}));
            exports_5("App", App);
        }
    };
});
//# sourceMappingURL=App.js.map