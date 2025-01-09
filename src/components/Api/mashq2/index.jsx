import React, { Component } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function Post() {
  let [data, setData] = useState([]);
  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status == 200) {
          let sort = response.data;
          setData(sort);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function click() {
    let sort = [...data].sort((a, b) => a.title.localeCompare(b.title));
    setData(sort);
  }
  return (
    <div>
      <button onClick={click}>sort</button>
      {console.log(data)}
      {data.length > 0 &&
        data.map((value, index) => {
          return (
            <div className="card" key={index}>
              <h2>title: {value.title}</h2>
              <p>body: {value.body}</p>
            </div>
          );
        })}
    </div>
  );
}
export default Post;
