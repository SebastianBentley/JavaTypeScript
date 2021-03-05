import "./style.css";
import "./style.scss";
import React, { useState } from "react";
//import { render } from "react-dom";
//import { getUsers } from "./common/usersAPI";
//import moment from "moment";

console.log("Hello webpack!");

function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}


const fancyFunc = () => {
    return [1, 2];
};

const [a, b] = fancyFunc();


//Dynamic import
const getUserModule = () => import(/* webpackChunkName: "usersAPI" */"./common/usersAPI");

const btn = document.getElementById("btn");

//Use of Dynamic import
btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json));
  });
});



//render(<App />, document.getElementById("root"));

//getUsers().then(json => console.log(json));

