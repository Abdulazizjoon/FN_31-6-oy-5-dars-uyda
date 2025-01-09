import React, { useState } from "react";
import "./index.css";

function Sign() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [tel, setTel] = useState("");
  let [pasword, setPasword] = useState("");
  let [data, setData] = useState([]);
  function btn(e) {
    e.preventDefault();
    if (name.length < 2) {
      alert("bunday nom bolishi munkun emas");
      return;
    }
    if (email.length < 2) {
      alert("bunday email mavjud emas");
      return;
    }
    if (tel.length < 2) {
      alert("telfon raqamni togri kiriting");
      return;
    }
    if (pasword.length < 8) {
      alert("password kamida 8ta belgidan iborat bolishi shart");
      return;
    }
    let user = {
      name: name,
      email: email,
      tel: tel,
      pasword: pasword,
    };
    let copied = [...data];
    copied.push(user);
    setData(copied);
    alert("muvafaqiyatli royhattan otdingiz");
  }
  return (
    <div>
      <form>
        <input
          className="inputt1"
          placeholder="ismingizni kiriting"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="inputt2"
          placeholder="emailni kiriting"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="inputt3"
          placeholder="telefon raqamingizni kiriting"
          type="text"
          onChange={(e) => {
            setTel(e.target.value);
          }}
        />
        <input
          className="inputt4"
          placeholder="parolni kiriting"
          type="text"
          onChange={(e) => {
            setPasword(e.target.value);
          }}
        />
        <button onClick={btn} className="btn1">
          save
        </button>
      </form>
    </div>
  );
}
export default Sign;
