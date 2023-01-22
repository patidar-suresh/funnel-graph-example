import React, { Component } from "react";
import ReactDOM from "react-dom";
import FunnelGraph from "funnel-graph-js";

import "./main.css";
import "./theme.css";
import "./styles.css";

const data = {
  labels: [
    "Leads",
    "Conversaron con un asesor",
    "Visitaron una propiedad",
    "Compraron",
    "Conversion"
  ],
  subLabels: ["Web", "Call Center", "Facebook", "Google"],
  colors: [
    ["#FFB178", "#FF78B1", "#FF3C8E"],
    ["#A0BBFF", "#EC77FF"],
    ["#A0F9FF", "#7795FF"],
    ["#A0F9FF", "#7795FF"]
  ],
  values: [
    [2000, 1451, 5000, 20],
    [2500, 1400, 1023, 30],
    [400, 200, 119, 40],
    [100, 40, 22, 50],
    [100, 40, 22, 50]
  ]
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
      subLabelValue: "percent"
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
