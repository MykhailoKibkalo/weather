import {ERROR} from "../types";

const initState = {
    data: false
}

export default function setError(state = initState, {type, data}) {
    switch (type) {
        case ERROR: {
            return {
                data: data,
            };
        }

        default:
            return state
    }
}

export const getError = (state) => state.error.data;
