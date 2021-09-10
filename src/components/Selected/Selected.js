import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {getWeather} from "../../reducers/weather";
import {getGeo} from "../../reducers/geo";
import {getFullWeather} from "../../reducers/fullWeather";
import {getDay} from "../../reducers/currentDay";

const SelectedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 90%;
  border: white 1px solid;
  border-radius: 20px;
  box-shadow: gray 0 5px 15px;
`

const Some = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 90%;
  box-shadow: gray 0 5px 15px;
  border-radius: 20px;
`

const MainWeather = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    text-align: center;
    font-size: 30px;
  }
`

const Selected = ({data}) => {
    return (
        <SelectedBox>
            <Some style={{flexGrow: 3}}>
                {data.main
                    ? <MainWeather>
                        <img style={{width: "100%"}} src={`assets/${data.weather[0].icon}.svg`} alt={'img'}/>
                        <span>{Math.round(data.main.temp - 272.15)} °C</span>
                    </MainWeather>
                    : data.sunrise
                        ?
                        <MainWeather>
                            <img style={{width: "100%"}} src={`assets/${data.weather[0].icon}.svg`} alt={'img'}/>
                            <span>{Math.round(data.temp.eve - 272.15)} °C</span>
                        </MainWeather>
                        : 'No data'}
            </Some>
            <Some style={{flexGrow: 2}}>Details</Some>
            <Some style={{flexGrow: 1}}>Today date</Some>
        </SelectedBox>
    );
};

export default Selected;