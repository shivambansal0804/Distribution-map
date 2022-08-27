export default function useChartData({
  data,
  lookupMap,
  xKey,
  yKey,
  region,
}: {
  data: {
    [key: string]: string | number;
  }[];
  lookupMap: {
    [key: string]: { [label: string]: string };
  };
  xKey: string;
  yKey: string[];
  region: string;
}): (string | number)[][] {
  const chartData = data.map((element) => {
    return [
      element[xKey] in lookupMap
        ? lookupMap[element[xKey]].label
        : element[xKey],
      element[yKey[0]],
    ];
  });
  chartData.unshift([
    region in lookupMap ? lookupMap[region].label : region,
    yKey[0] in lookupMap ? lookupMap[yKey[0]].label : yKey[0],
  ]);
  return chartData;
}
