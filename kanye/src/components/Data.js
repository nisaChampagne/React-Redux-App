import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GET_DATA_SUCCESS } from "../store/actions";
import axios from "axios";
import Movie from "./Movie";

export default function TitleName(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films/")
      .then(res => {
        console.log(res.data);
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div>
      {state.data.map(movie => {
        return <Movie movie={movie} />;
      })}
    </div>
  );
}