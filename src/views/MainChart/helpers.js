const defaultChartDataset = color => ({
  borderColor: color,
  pointBackgroundColor: "#fff",
  backgroundColor: color,
  data: []
});

const defaultChartOptions = {
  backgroundColor: "blue",
  animation: { easing: "easeOutQuad" },
  onResize: null,
  maintainAspectRatio: false,
  responsive: true
};

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
  kpiPrimary,
  kpiAdditional,
  showAdditional
}) => {
  const labels = [];
  const datasets = [
    {
      ...defaultChartDataset(primaryColor),
      label: kpiPrimary.toUpperCase(),
      yAxisID: kpiPrimary
    }
  ];
  if (showAdditional)
    datasets.push({
      ...defaultChartDataset(secondaryColor),
      label: kpiAdditional.toUpperCase(),
      yAxisID: kpiAdditional
    });
  data.forEach(company => {
    labels.push(company.brand);
    datasets[0].data.push(company[kpiPrimary][yearPrimary]);
    if (showAdditional) {
      datasets[1].data.push(company[kpiAdditional][yearPrimary]);
    }
  });

  const scales = getBarChartScales({
    kpiPrimary,
    kpiAdditional,
    showAdditional
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
  kpiPrimary,
  kpiAdditional,
  showAdditional,
  removeY
}) => {
  const xAxes = [{ gridLines: { display: false } }];
  const yAxes = [
    {
      id: kpiPrimary,
      position: "left",
      fontStyle: "bold",
      fontColor: primaryColor,
      ticks: {
        fontColor: primaryColor,
        display: !removeY
      },
      scaleLabel: {
        display: !removeY,
        fontColor: primaryColor,
        fontSize: 14,
        fontStyle: "bold",
        labelString: kpiPrimary.toUpperCase()
      }
    }
  ];
  if (showAdditional)
    yAxes.push({
      id: kpiAdditional,
      position: "right",
      fontStyle: "bold",
      fontColor: secondaryColor,
      ticks: {
        fontColor: secondaryColor,
        display: !removeY
      },
      scaleLabel: {
        display: !removeY,
        fontColor: secondaryColor,
        fontSize: 14,
        fontStyle: "bold",
        labelString: kpiAdditional.toUpperCase()
      }
    });
  return { xAxes, yAxes };
};

export const fetchLineChartData = ({ data, kpiPrimary }) => {
  let labels;

  const datasets = [];

  data.forEach((company, index) => {
    const { brand } = company;
    if (!index) labels = Object.keys(company.sales);
    datasets.push({
      ...defaultChartDataset(chartColors[index]),
      fill: false,
      label: brand,
      data: Object.values(company[kpiPrimary])
    });
  });

  const scales = getLineChartScales({
    kpiPrimary
  });

  const lineChartOptions = { ...defaultChartOptions, scales };
  return { lineChartOptions, lineChartData: { labels, datasets } };
};

const getLineChartScales = ({ kpiPrimary, removeY }) => {
  const xAxes = [{ gridLines: { display: false } }];
  const yAxes = [
    {
      id: kpiPrimary,
      position: "left",
      fontStyle: "bold",
      fontColor: primaryColor,
      ticks: {
        fontColor: primaryColor,
        display: !removeY
      },
      scaleLabel: {
        display: !removeY,
        fontColor: primaryColor,
        fontSize: 14,
        fontStyle: "bold",
        labelString: kpiPrimary.toUpperCase()
      }
    }
  ];

  return { xAxes, yAxes };
};

export const getYearsOptions = state => {
  // eslint-disable-next-line
  const obj = state?.cars?.[0]?.sales ?? {};
  return Object.keys(obj)
    .map(year => ({ label: year, value: year }))
    .reverse();
};

export const fetchAdditionalChartData = ({ data, year, brand }) => {
  const labels = [];
  const line = [];
  const bar = [];
  const pie = [];
  const currentBrand = data.find(el => el.brand === brand);
  if (currentBrand) {
    const { sales, shares, revenue } = currentBrand;
    Object.keys(currentBrand.sales).forEach(key => {
      labels.push(key);
      line.push(sales[key]);
      bar.push(revenue[key]);
    });
    pie.push(shares[year]);
    pie.push(100 - shares[year]);
  }
  const lineData = {
    labels,
    datasets: [
      {
        ...defaultChartDataset(primaryColor),
        data: line,
        label: brand,
        fill: false
      }
    ]
  };
  const barData = {
    labels,
    datasets: [
      {
        ...defaultChartDataset(secondaryColor),
        data: bar,
        label: brand
      }
    ]
  };
  const pieData = {
    labels: [brand, "Others"],
    datasets: [
      {
        data: [...pie],
        backgroundColor: [chartColors[0], chartColors[1]]
        // label: brand
      }
    ]
  };
  const lineOptions = {
    ...defaultChartOptions,
    legend: { display: false },
    scales: getLineChartScales({ kpiPrimary: "sales", removeY: true }),
    title: {
      display: true,
      position: "top",
      text: `${brand} sales history`,
      fontSize: 15
    }
  };
  const barOptions = {
    ...defaultChartOptions,
    legend: { display: false },
    scales: getBarChartScales({ kpiPrimary: "revenue", removeY: true }),
    title: {
      display: true,
      position: "top",
      text: `${brand} sales revenue`,
      fontSize: 15
    }
  };
  const pieOptions = {
    legend: { display: false },
    title: {
      display: true,
      position: "top",
      text: `${brand} ${year} market share`,
      fontSize: 15
    },
    animation: { easing: "easeOutQuad" },
    onResize: null,
    maintainAspectRatio: false,
    responsive: true
  };

  return { lineData, barData, pieData, lineOptions, barOptions, pieOptions };
};
