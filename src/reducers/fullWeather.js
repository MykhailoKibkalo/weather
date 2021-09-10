import {NEW_FULL_WEATHER} from "../types";

const initState = {
    data: ''
}

export default function setFullWeather(state = initState, {type, data}) {
    switch (type) {
        case NEW_FULL_WEATHER: {
            return {
                data: data,
            };
        }

        default:
            return state
    }
}

export const getFullWeather = (state) => state.fullWeather.data;
