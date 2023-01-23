import React, { Component } from "react";
import ReactDOM from "react-dom";
import FunnelGraph from "funnel-graph-js";

import "./main.css";
import "./theme.css";
import "./styles.css";

const data = {
  labels: [
    "Leads",
    "Cold calls and Email Campain",
    "Sales Call",
    "Engineering Deep Dive Discussion",
    "Proposals",
    "Project Win",
  ],
  subLabels: ["Web", "Call Center", "Facebook", "Google"],
  colors: [
    ["#FFB178", "#FF78B1", "#FF3C8E"],
    ["#A0BBFF", "#EC77FF"],
    ["#A0F9FF", "#7795FF"],
    ["#A0F9FF", "#7795FF"],
    ["#A0F9FF", "#7795FF"],
    ["#A0F9FF", "#7795FF"],
  ],
  values: [
    [2000, 1000, 700, 300],
    [1500, 700, 300, 200],
    [1200, 400, 230, 178],
    [900, 158, 120, 97],
    [300, 108, 73, 49],
    [120, 70, 35, 15],
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
      subLabelValue: "percent",
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
