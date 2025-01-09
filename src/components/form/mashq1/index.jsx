import React, { useState } from "react";
import "./index.css";
function Login() {
  let [email, setEmail] = useState([]);
  let [pasword, setpasword] = useState([]);
  let [data, setData] = useState([]);

  function btn(e) {
    e.preventDefault();
    if (email.length < 3) {
      alert("emailni togri kiritng");
      return;
    }
    if (pasword.length < 3) {
      alert("passwordni togri kiritng");
      return;
    }
    let user = {
      email: email,
      pasword: pasword,
    };
    let copied = [...data];
    copied.push(user);
    setData(copied);
    console.log(copied);
  }
  return (
    <div className="container">
      <form className="form">
        <input
          type="text"
          placeholder="emailni kiriting"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="passwordni kiriting"
          onChange={(e) => {
            setpasword(e.target.value);
          }}
        />
        <button onClick={btn}>Kirish</button>
      </form>
      {/* <div className="wrapper">
                {
                    data.length > 0 && data.map((value, index) => {
                        return (
                            
                        )
                    })
                }
            </div> */}
    </div>
  );
}
export default Login;
