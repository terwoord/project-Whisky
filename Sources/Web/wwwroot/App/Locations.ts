import { ILocationInfo } from "./ILocationInfo";
import { getLocationsMatthijs } from './Locations.Matthijs';
import { getLocationsSijmen } from './Locations.Sijmen';

export namespace Locations {
    export function getLocations(): ILocationInfo[] {
        return getLocationsMatthijs().concat(getLocationsSijmen());
    }
}