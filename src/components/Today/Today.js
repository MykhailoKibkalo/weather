import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import Search from "../Search/Search";
import Selected from "../Selected/Selected";
import {getGeo} from "../../reducers/geo";
import {getFullWeather} from "../../reducers/fullWeather";
import {getDay} from "../../reducers/currentDay";

// const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${process.env.REACT_APP_API_KEY}`
// const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=Львов&limit=1&appid=${process.env.REACT_APP_API_KEY}`
// const urlFullWeather = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=1&appid=${process.env.REACT_APP_API_KEY}`

const TodayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30vw;
  height: 100vh;
  border-radius: 0 50px 50px 0;
  padding: 40px 20px;
  align-items: center;
  border: 1px solid white;
  box-shadow: 1px 0 20px gray; 
`



const Today = ({data}) => {

    return (
        <TodayContainer>
            <Search/>
            <Selected data={data}/>
        </TodayContainer>
    );
};

export default Today;
