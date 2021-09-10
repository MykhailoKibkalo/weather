import {NEW_GEO} from "../types";

const initState = {
    data: ''
}

export default function setGeo(state = initState, {type, data}) {
    switch (type) {
        case NEW_GEO: {
            return {
                data: data,
            };
        }

        default:
            return state
    }
}

export const getGeo = (state) => state.geo.data;
