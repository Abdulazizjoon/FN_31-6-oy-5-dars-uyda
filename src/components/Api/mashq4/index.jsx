import React, { Component } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function Pokemon() {
  let [data, setData] = useState([]);
  useEffect(function () {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
      .then((response) => {
        if (response.status == 200) {
          setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="cards">
      <input className="in" type="text" />
      <button className="search">search</button>
      {data.length > 0 &&
        data.map((value, index) => {
          return (
            <div key={index} className="card">
              <img src={value} alt="" />
            </div>
          );
        })}
    </div>
  );
}
export default Pokemon;
