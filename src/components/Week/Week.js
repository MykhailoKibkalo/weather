import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getFullWeather} from "../../reducers/fullWeather";
import {NEW_DAY} from "../../types";

const WeekBox = styled.div`
  display: flex;
  border-radius: 30px;
  justify-content: space-between;
  height: 30%;
  box-shadow: gray 0 5px 15px;

`
const Day = styled.div`
  cursor: pointer;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14%;
  :not(:last-child){
    border-right: gray 1px solid;
  }
`

const Week = () => {
    const full = useSelector(state => getFullWeather(state));
    const week = 7;
    const dispatch = useDispatch()

    const handleClick = (data) => {
        dispatch({
            type: NEW_DAY,
            data: data
        })
    }

    return (
        <WeekBox>
            { full.daily && full.daily.slice(0,week).map(el => (
                // <Day>{new Date(el.dt * 1000).toUTCString()}</Day>
                <Day
                    key={el.moonrise}
                    onClick={() => handleClick(el)}
                >
                    <span>{new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(new Date(el.dt * 1000))}</span>
                    <span>{new Intl.DateTimeFormat('en-US', {day: 'numeric', month: 'long'}).format(new Date(el.dt * 1000))}</span>
                    <img style={{width: "50%"}} src={`assets/${el.weather[0].icon}.svg`} alt={'img'}/>
                    <span>{Math.round(el.temp.eve - 272.15)} °C</span>

                </Day>
            ))}
        </WeekBox>
    );
};

export default Week;