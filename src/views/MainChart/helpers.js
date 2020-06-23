const defaultChartDataset = color => ({
  borderColor: color,
  pointBackgroundColor: "#fff",
  backgroundColor: color,
  data: []
});

const defaultChartOptions = color => ({
  backgroundColor: "blue",
  animation: { easing: "easeOutQuad" },
  onResize: null,
  maintainAspectRatio: false,
  responsive: true
});

const primaryColor = "#169834";
const secondaryColor = "#EF3618";

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

  const barChartOptions = { ...defaultChartOptions, scales };
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
