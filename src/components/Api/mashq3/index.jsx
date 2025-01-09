import React, { Component } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Weather() {
  let token = "23020c443070e898404c6d502b01c938";
  let [data, setData] = useState([]);
  useEffect(function () {
    axios
      .get(
        `https://dataservice.accuweather.com/currentconditions/v1/12345?apikey=${token}`
      )
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
    <div>
      {data.length > 0 &&
        data.map((value, index) => {
          return <h2 key={index}>{value}</h2>;
        })}
    </div>
  );
}

export default Weather;
