import { ILocationInfo } from "./ILocationInfo";
import { getLocationsMatthijs } from './Locations.Matthijs';
import { getLocationsSijmen } from './Locations.Sijmen';

export namespace Locations {
    export function getLocations(): ILocationInfo[] {
        var xResult = getLocationsMatthijs().concat(getLocationsSijmen());

        xResult.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });

        return xResult;
    }
}