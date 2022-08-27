import React from "react";
import { Chart } from "react-google-charts";
import useChartReadyData from "../hooks/useChartReadyData";

interface DistributionMapsProps {
  lookupMap: {
    [key: string]: { [label: string]: string };
  };
  data: {
    [key: string]: string | number;
  }[];
  xKey: string;
  yKey: string[];
  region?: string;
  resolution?: string;
  displayMode?: string;
  onClick?: (
    datum: { [key: string]: string | number }[],
    event: any,
    coordinates: any
  ) => void;
}

export default function DistributionMap(props: DistributionMapsProps) {
  const chartArea = React.useRef(document.createElement("div"));
  const eventObj = React.useRef({});
  const element = chartArea.current;
  element.addEventListener("click", (e: {}) => {
    eventObj.current = e;
  });

  const {
    lookupMap,
    data,
    xKey,
    yKey,
    region = "world",
    resolution,
    displayMode,
    onClick,
  } = props;

  const options = {
    region,
    resolution,
    displayMode,
  };

  const chartReadydata: (string | number)[][] = useChartReadyData(
    data,
    lookupMap,
    xKey,
    yKey
  );
  chartReadydata.unshift([
    region in lookupMap ? lookupMap[region].label : region,
    yKey[0] in lookupMap ? lookupMap[yKey[0]].label : yKey[0],
  ]);

  return (
    <div ref={chartArea}>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="50vh"
        data={chartReadydata}
        mapsApiKey="AIzaSyATwbzs2QohcNsG31ErEkkKD2DciXXSFYw"
        options={options}
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper, google }) => {
              //const chart = chartWrapper.getChart();

              //console.log(chart.getSelection())

              if (onClick) onClick(data, eventObj.current, eventObj.current);

              console.log(eventObj.current);
              //console.log(chartReadydata[chartWrapper.getChart().getSelection()[0].row + 1])
            },
          },
        ]}
      />
    </div>
  );
}
