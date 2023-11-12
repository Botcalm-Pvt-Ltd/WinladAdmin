import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const chartOptions = {
    chart: {
      type: 'donut',
      width: 400,
      legend: {
        position: 'bottom',
      },
    },
    
     responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 400,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  };
  const chartSeries = [44, 55, 41, 17];

  return (

      <ReactApexChart options={chartOptions} width={500} series={chartSeries} type="donut" />

  );
};

export default PieChart;
