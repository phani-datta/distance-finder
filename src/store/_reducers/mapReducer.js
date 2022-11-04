import { ADD_MARKER } from "../_constants/constants";
import { point, distance } from '@turf/turf'

const initialState = {markerCoordinates: []}

const mapReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MARKER:
            let coords = action.payload
            const options = {units: 'meters'}

            if(state.markerCoordinates.length === 1) {
                let from = point([state.markerCoordinates[0].lng, state.markerCoordinates[0].lat])
                let to = point([coords.lng, coords.lat])
                let distanceResult = distance(from, to, options).toFixed([2])
                coords.distance = distanceResult
            } else if(state.markerCoordinates.length !== 0) {
                let from = point([state.markerCoordinates[state.markerCoordinates.length - 1].lng, state.markerCoordinates[state.markerCoordinates.length - 1].lat])
                let to = point([coords.lng, coords.lat])
                let distanceResult = distance(from, to, options).toFixed([2])
                coords.distance = distanceResult
            }
            return {
                ...state,
                markerCoordinates: [
                    ...state.markerCoordinates,
                    coords
                ]
            }

        default:
            return state
    }
}

export default mapReducer