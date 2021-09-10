import {NEW_WEATHER} from "../types";

const initState = {
    data: {}
}

export default function setWeather(state = initState, {type, data}) {
    switch (type) {
        case NEW_WEATHER: {
            return {
                data: data,
            };
        }

        default:
            return state
    }
}

export const getWeather = (state) => state.weather.data;
