import React from "react";
import { Chart } from "react-google-charts";
import useChartData from "../hooks/useChartData";

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
    event: MouseEvent,
    coordinates: { X: number; Y: number }
  ) => void;
}

export default function DistributionMap({
  lookupMap,
  data,
  xKey,
  yKey,
  region = "world",
  resolution,
  displayMode,
  onClick,
}: DistributionMapsProps) {
  const chartArea = React.useRef(document.createElement("div"));
  const eventObj = React.useRef(new MouseEvent("dblclick"));
  const element = chartArea.current;
  element.addEventListener("click", (e: MouseEvent) => {
    eventObj.current = e;
  });

  const options = React.useMemo(() => {
    return {
      region,
      resolution,
      displayMode,
    };
  }, [region, resolution, displayMode]);

  const chartData: (string | number)[][] = useChartData({
    data,
    lookupMap,
    xKey,
    yKey,
    region,
  });

  return (
    <div ref={chartArea}>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="50vh"
        data={chartData}
        mapsApiKey="AIzaSyATwbzs2QohcNsG31ErEkkKD2DciXXSFYw"
        options={options}
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper, google }) => {
              if (onClick) {
                const coordinates = {
                  X: eventObj.current.screenX,
                  Y: eventObj.current.screenY,
                };
                onClick(data, eventObj.current, coordinates);
              }

              console.log(eventObj.current);
            },
          },
        ]}
      />
    </div>
  );
}
