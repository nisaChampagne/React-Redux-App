import React from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import { getAnime } from "../store/actions";

const Data = props => {
  return (
    <>
      <button onClick={props.getAnime}>Click here for Films</button>
      <div className="anime-Films">
        {props.datas.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  datas: state.data
});

export default connect(
  mapStateToProps,
  { getAnime }
)(Data);
