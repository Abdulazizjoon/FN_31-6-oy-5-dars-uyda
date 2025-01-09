import { useEffect, useState } from "react";
import axios from "axios"; 
import Post from "./components/Api/mashq2";
import User from "./components/Api/mashq1";
import Weather from "./components/Api/mashq3";
import Login from "./components/form/mashq1";
import Pokemon from "./components/Api/mashq4";
import Kontakt from "./components/form/mashq2";
import Sign from "./components/form/mashq3";
import "./App.css";

function App() {
  return (
    <div>
      {/* Api */}
      <User/>
      <Post/>
      {/* <Weather/> */}
      {/* <Pokemon/> */}
      
      {/* forma */}
      <Login/>
      <Kontakt/>
      <Sign/>
    </div>
  )
}

export default App;
