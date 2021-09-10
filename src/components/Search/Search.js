import React, {useState} from 'react';
import styled from "styled-components";
import {fetchWeather} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {getError} from "../../reducers/error";

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Input = styled.input`
  height: 30px;
  border-radius: 20px;
  padding: 0 20px;
  box-shadow: gray 0 5px 15px;

  ${props => props.error && `
  border: 1px solid darkred
  `}
  :focus {
    outline: none;
  }
`

const InputContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  label {
    display: ${props => props.error ? 'block' : 'none' };
    color: darkred;
    padding-left: 20px;
  }
`


const Button = styled.button`
  width: 30%;
  height: 30px;
  border-radius: 20px;
  box-shadow: gray 0 5px 15px;

`

const Search = () => {
    const [city, setCity] = useState();
    const dispatch = useDispatch();
    const error = useSelector(state => getError(state));

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = () => {
        fetchWeather(city, dispatch);
    }
    return (
        <SearchContainer>
            <InputContainer error={error}>
                <Input id="city" type="text" error={error} value={city} onChange={handleChange}
                       placeholder={'Write a city....'}/>
                <label for="city">Wrong City</label>
            </InputContainer>
            <Button onClick={handleSubmit}>Search</Button>
        </SearchContainer>
    );
}

export default Search;