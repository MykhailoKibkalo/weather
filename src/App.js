import React from "react";
import Today from "./components/Today/Today";
import Week from "./components/Week/Week";
import styled from "styled-components";
import Details from "./components/Details/Details";
import {useSelector} from "react-redux";
import {getFullWeather} from "./reducers/fullWeather";
import {getDay} from "./reducers/currentDay";
import {getWeather} from "./reducers/weather";

const Main = styled.div`
  display: flex;
`
const Info = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  width: 70%;
`

const App = () => {
    const weather = useSelector(state => getWeather(state));
    const full = useSelector(state => getFullWeather(state));
    const data = useSelector(state => getDay(state));
    console.log(weather);
    return (
        <Main>
            <Today data={data ? data : weather ? weather : false}/>
            <Info>
                <Week/>
                {/*<Details data={full.daily ? full.daily[0]}/>*/}
                <Details data={data ? data : full.daily ? full.daily[0] : null }/>
            </Info>
        </Main>
    );
}

export default App;
