import {NEW_CITY} from "../types";

const initState = {
    data: ''
}

export default function setCity(state = initState, {type, data}) {
    switch (type) {
        case NEW_CITY: {
            return {
                data: data,
            };
        }

        default:
            return state
    }
}

export const getCity = (state) => state.city.data;
