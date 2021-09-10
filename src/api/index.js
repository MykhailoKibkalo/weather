import {ERROR, NEW_FULL_WEATHER, NEW_GEO, NEW_WEATHER} from "../types";

export const fetchWeather = (city, dispatch) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            try {
                if (data.cod === '404') {
                    dispatch({
                        type: ERROR,
                        data: true
                    })
                } else  {
                    dispatch({
                        type: ERROR,
                        data: false
                    })
                    dispatch({
                        type: NEW_WEATHER,
                        data: data
                    })
                    dispatch({
                        type: NEW_GEO,
                        data: {lon: data.coord.lon, lat: data.coord.lat}
                    })
                }

            } catch (e) {
                console.log(e);
            }
            return data
        })
        .then(data => {
            try {
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=1&appid=${process.env.REACT_APP_API_KEY}`)
                    .then(res => {
                        return res.json()
                    })
                    .then(data => {
                        try {
                            dispatch({
                                type: NEW_FULL_WEATHER,
                                data: data
                            })
                        } catch (e) {
                            console.log(e);
                        }
                    })

            } catch (e) {
                console.log(e);
            }

        })
}



