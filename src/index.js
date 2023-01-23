import React, { Component } from "react";
import ReactDOM from "react-dom";
import FunnelGraph from "funnel-graph-js";

import "./main.css";
import "./theme.css";
import "./styles.css";

const data = {
  labels: [
    "dev_feature",
    "dev_integration",
    "qa_develop",
    "qa_staging",
    "pre_prod",
    "us_b_prod",
  ],
  subLabels: ["Critical", "High", "Medium", "Low"],
  colors: [["#780000"], ["#dc0000"], ["#fd8c00"], ["#fdc500"]],
  values: [
    [30, 126, 200, 367],
    [20, 78, 168, 200],
    [10, 42, 75, 110],
    [5, 10, 25, 35],
    [2, 4, 10, 15],
    [0, 1, 10, 5],
  ],
};

class App extends Component {
  componentDidMount() {
    const graph = new FunnelGraph({
      container: ".Funnel",
      gradientDirection: "vertical",
      data: data,
      displayPercent: true,
      direction: "horizontal",
      width: 800,
      height: 350,
      subLabelValue: "raw",
    });

    graph.draw();
  }

  render() {
    return (
      <div className="App">
        <div className="Funnel" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
