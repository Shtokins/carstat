const defaultChartDataset = color => ({
  borderColor: color,
  pointBackgroundColor: "#fff",
  backgroundColor: color,
  data: []
});

const defaultChartOptions = () => ({
  backgroundColor: "blue",
  animation: { easing: "easeOutQuad" },
  onResize: null,
  maintainAspectRatio: false,
  responsive: true
});

const chartColors = [
  "#FF645D",
  "#FFD35B",
  "#71D34D",
  "#00B4C6",
  "#2370EF",
  "#AE43BA"
];

const primaryColor = "#2370EF";
const secondaryColor = "#AE43BA";

export const fetchBarChartData = ({
  data,
  yearPrimary,
  comparatorPrimary,
  comparatorSecondary,
  showSecondary
}) => {
  const labels = [];
  const datasets = [
    {
      ...defaultChartDataset(primaryColor),
      label: comparatorPrimary.toUpperCase(),
      yAxisID: comparatorPrimary
    }
  ];
  if (showSecondary)
    datasets.push({
      ...defaultChartDataset(secondaryColor),
      label: comparatorSecondary.toUpperCase(),
      yAxisID: comparatorSecondary
    });
  data.forEach(company => {
    labels.push(company.brand);
    datasets[0].data.push(company[comparatorPrimary][yearPrimary]);
    if (showSecondary) {
      datasets[1].data.push(company[comparatorSecondary][yearPrimary]);
    }
  });

  const scales = getBarChartScales({
    comparatorPrimary,
    comparatorSecondary,
    showSecondary
  });

  const barChartOptions = {
    ...defaultChartOptions,
    scales,
    title: {
      display: true,
      position: "top",
      text: yearPrimary,
      fontSize: 18
    }
  };
  return { barChartOptions, barChartData: { labels, datasets } };
};

const getBarChartScales = ({
  comparatorPrimary,
  comparatorSecondary,
  showSecondary
}) => {
  const xAxes = [{ gridLines: { display: false } }];
  const yAxes = [
    {
      id: comparatorPrimary,
      position: "left",
      fontStyle: "bold",
      fontColor: primaryColor,
      ticks: {
        fontColor: primaryColor
      },

      scaleLabel: {
        display: true,
        fontColor: primaryColor,
        fontSize: 14,
        fontStyle: "bold",
        labelString: comparatorPrimary.toUpperCase()
      }
    }
  ];
  if (showSecondary)
    yAxes.push({
      id: comparatorSecondary,
      position: "right",
      fontStyle: "bold",
      fontColor: secondaryColor,
      ticks: {
        fontColor: secondaryColor
      },
      scaleLabel: {
        display: true,
        fontColor: secondaryColor,
        fontSize: 14,
        fontStyle: "bold",
        labelString: comparatorSecondary.toUpperCase()
      }
    });
  return { xAxes, yAxes };
};

export const fetchLineChartData = ({ data, comparatorPrimary }) => {
  let labels;

  const datasets = [];

  data.forEach((company, index) => {
    const { brand } = company;
    if (!index) labels = Object.keys(company.sales);
    datasets.push({
      ...defaultChartDataset(chartColors[index]),
      fill: false,
      label: brand,
      data: Object.values(company[comparatorPrimary])
    });
  });

  const scales = getLineChartScales({
    comparatorPrimary
  });

  const lineChartOptions = { ...defaultChartOptions, scales };
  return { lineChartOptions, lineChartData: { labels, datasets } };
};

const getLineChartScales = ({ comparatorPrimary }) => {
  const xAxes = [{ gridLines: { display: false } }];
  const yAxes = [
    {
      id: comparatorPrimary,
      position: "left",
      fontStyle: "bold",
      fontColor: primaryColor,
      ticks: {
        fontColor: primaryColor
      },

      scaleLabel: {
        display: true,
        fontColor: primaryColor,
        fontSize: 14,
        fontStyle: "bold",
        labelString: comparatorPrimary.toUpperCase()
      }
    }
  ];

  return { xAxes, yAxes };
};

export const getYearsOptions = state => {
  const obj = state?.cars?.[0]?.sales ?? {};
  return Object.keys(obj)
    .map(year => ({ label: year, value: year }))
    .reverse()
};
