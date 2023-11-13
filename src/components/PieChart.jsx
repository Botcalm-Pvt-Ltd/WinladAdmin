import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = ({ position = 'left', chartSeries = [22, 33, 50], labels = ['Label1', 'Label2', 'Label3'],heading, labelCOlor = '#000' } ) => {
  const chartOptions = {
    chart: {
      type: 'donut',
      width: 400,
    },
    labels: labels,
    // Remove the stroke from the chart
    stroke: {
      show: false,
    },
    // Align the legend to the left side
    legend: {
      position: position,
      labels: {
        colors: labelCOlor, // Set the legend text color to white
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


  return (
    <>
      {heading}
      <ReactApexChart options={chartOptions} series={chartSeries} type='donut' />
    </>

  );
};

export default PieChart;
