import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {

const chartOptions = {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      ,
       series: [{
         name: 'series-1',
         data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }]
}


  return (

      <ReactApexChart options={chartOptions} width={500} height={400} type="bar" />

  );
};

export default BarChart;
