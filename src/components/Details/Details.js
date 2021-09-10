import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {getWeather} from "../../reducers/weather";

const DetailsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  height: 70%;
`
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 40%;
  box-shadow: gray 0 5px 15px;
  border-radius: 30px;
  padding: 10px;
`
const Details = ({data}) => {

    const degToCompass = (num) => {
        const val = Math.floor((num / 22.5) + 0.5);
        const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    return (
        <DetailsBox>
            <Detail>
                <span>Minimal temperature {data && Math.round(data.temp.min - 272.15)} °C</span>
                <span>Maximum temperature {data && Math.round(data.temp.max - 272.15)} °C</span>
            </Detail>
            <Detail>Wind direction: {data && degToCompass(data.wind_deg)}</Detail>
            <Detail>Humidity</Detail>
            <Detail>sunrise - sunset</Detail>
            <Detail> something</Detail>
            <Detail> something else</Detail>
        </DetailsBox>
    );
};

export default Details;