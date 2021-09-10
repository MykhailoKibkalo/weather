import {NEW_DAY} from "../types";

const initState = {
    data: ''
}

export default function setDay(state = initState, {type, data}) {
    switch (type) {
        case NEW_DAY: {
            return {
                data: data,
            };
        }

        default:
            return state
    }
}

export const getDay = (state) => state.currentDay.data;
