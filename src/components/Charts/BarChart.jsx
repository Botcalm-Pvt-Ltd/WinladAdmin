import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Category 1',
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: 'Category 2',
        data: [76, 85, 101, 98, 87, 105, 91],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      legend: {
        labels: {
          position:'left',
          colors: '#fff', // Set the legend text color to white
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '75%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      // yaxis: {
      //   title: {
      //     text: '$ (thousands)',
      //   },
      // },
      yaxis: {
        labels: {
          style: {
            colors: '#fff', // Set the y-axis text color to white
          },
        },
        title: {
          text: '$K',
          style: {
            color: '#fff', // Set the y-axis title color to white
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default ApexChart;
