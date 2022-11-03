import { ADD_MARKER } from "../_constants/constants";

const addMarkerAction = (coords) => {
    return {
        type: ADD_MARKER,
        payload: coords
    }
}

export default addMarkerAction