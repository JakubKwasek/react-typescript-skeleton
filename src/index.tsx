import * as React from "react";
import * as ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { MainContainer } from "./containers/MainContainer";

ReactDOM.render(
  <MainContainer />,
  document.getElementById("app")
);
