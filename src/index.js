import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// default blue
Highcharts.chart("container", {
  chart: {
    type: "column"
  },
  title: {
    text: "World's largest cities per 2017"
  },
  subtitle: {
    text:
      'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
  },

  xAxis: {
    type: "category",
    labels: {
      rotation: -45,
      style: {
        fontSize: "13px",
        fontFamily: "Verdana, sans-serif"
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: "Population (millions)"
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: "Population in 2017: <b>{point.y:.1f} millions</b>"
  },
  series: [
    {
      name: "Population",
      data: [
        ["Shanghai", 24.2],
        ["Beijing", 20.8],
        ["Karachi", 14.9],
        ["Shenzhen", 13.7],
        ["Guangzhou", 13.1],
        ["Istanbul", 12.7]
      ],
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: "black",
        align: "right",
        format: "{point.y:.1f}", // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif"
        }
      }
    }
  ]
});
