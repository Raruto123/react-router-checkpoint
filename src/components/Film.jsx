import React from "react";
import { Link } from "react-router-dom";

function Film(props) {
  return (
    <div className="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
      <div className="card--miabox">
        <img src={props.films.image} alt="img" />
        <div className="overlay">
          <div className="mx-auto overlay-header d-flex align-items-center">
            
            <Link to={`detail/${props.films.id}`} className="mx-auto text-white">
              <i className="far fa-play-circle fa-3x"></i>
            </Link>
          </div>
          <div className="overlay-footer p-2">
            <h4 className="text-white ">{props.films.title}</h4>
            <div className="d-flex flex-row justify-content-between">
              <div>
                <span style={{ fontSize: "10px" }} className="btn-18 p-1">
                  +18
                </span>
                <span className="text-white" style={{ fontSize: "10px" }}>
                 {props.films.duration}
                </span>
              </div>
              <div className="btn-plus">
                <button
                  style={{
                    fontSize: "10px",
                    backgroundColor: "#151415",
                    borderRadius: "5px",
                    border: "white solid 1px",
                  }}
                  className="text-white"
                >
                  Plus d infos
                </button>
              </div>
            </div>

            <div className="flex flex-column text-white mt-1">
              <div style={{ fontSize: "10px" }}>
                <span>Inspirant</span>
                <span>- Intime</span>
                <span>- Emotion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Film;
