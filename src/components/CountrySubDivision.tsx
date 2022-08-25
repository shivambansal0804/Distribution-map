import React from "react";
import { Chart } from "react-google-charts";
import '../App.css'
interface CountrySubDivisionProps{
  country? : string,
  data: any
}
export default function CountrySubDivision(props : CountrySubDivisionProps) {
  const {country= "IN", data} = props

  // const [region, setRegion] = useState<string>("IN");
  // useEffect(() => {
  //   setRegion(props.country);
  // }, [props.country]);
  

  const options = {
    region: country,
    resolution: "provinces",
    colorAxis: { colors: ["#47B5FF", "#1363DF", "#06283D"] },
    //   backgroundColor: "#f8bbd0",
    datalessRegionColor: "#DFF6FF",
    //   defaultColor: "#f5f5f5",
  };

  return (
    <div className="container">
      <h2>
        {"Detailed Country View - Subdivision Distribution " + props.country}
      </h2>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              console.log(data[chartWrapper.getChart().getSelection()[0].row + 1])
              // const chart = chartWrapper.getChart();
              // console.log(chart)
              // const selected =chart.getSelection();
              // console.log(selected)

            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="50vh"
        data={data}
        options={options}
      />
    </div>
  );
}
