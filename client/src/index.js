import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import "regenerator-runtime/runtime";

// import App from './App';
import Loader from "./components/Loader";

const App = Loadable({
  loader: () => import("./App"),
  loading: Loader,
});

function openReactApp(e) {
  e.target.disabled = true;
  e.target.innerText = "불러오는중..";

  slime.style.display = "block";
  pf.style.display = "none";

  ReactDOM.render(<App />, mainContainer);
}

const mainContainer = document.querySelector("main");
const slime = document.getElementById("slime-container");
const pf = document.getElementById("pf-container");
const trigger = document.getElementById("trigger");
trigger.addEventListener("click", openReactApp);
