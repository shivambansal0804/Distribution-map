export default function useChartReadyData(
  data: {
    [key: string]: string | number;
  }[],
  lookupMap: {
    [key: string]: { [label: string]: string };
  },
  xKey: string,
  yKey: string[]
): (string | number)[][] {
  return data.map((element) => {
    return [
      element[xKey] in lookupMap
        ? lookupMap[element[xKey]].label
        : element[xKey],
      element[yKey[0]],
    ];
  });
}
