import React from "react";
import axios from "axios"; 
import { useEffect, useState } from "react";

function User() {
    let [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("https://randomuser.me/api/")
        .then((response) => {
          if (response.status === 200) {
            setData(response.data.results);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);

    return (
      <div>
        {data.length > 0 &&
          data.map((value, index) => {
            return (
              <div className="card" key={index}>
                <img src={value.picture.large} alt="  " />
                <h3>
                  {value.name.first} {value.name.last}
                </h3>
                <p>Email: {value.email}</p>
                <p>
                  Location: {value.location.city}, {value.location.country}
                </p>
              </div>
            );
          })}
      </div>
    );
}
export default User