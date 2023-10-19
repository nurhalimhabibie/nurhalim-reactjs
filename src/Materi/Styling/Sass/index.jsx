import React from "react";
import "./index.scss";
import Title from "./title";

export default class Sass extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <button className="btn btn-info">Go Eduwork</button>
      </div>
    );
  }
}
