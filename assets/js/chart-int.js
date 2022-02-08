$(document).ready(function () {
  "use strict";

  Highcharts.chart('chart-box', {
    colors: ['#38C976'],
    chart: {
      type: 'bar',
      styledMode: true
    },
    title: {
      text: null
    }, credits: {
      enabled: false
    },
    exporting: {
      buttons: {
        contextButton: {
          enabled: false
        }
      }
    },
    yAxis: [{
      className: 'highcharts-color-0',
      title: {
        text: null
      }
    }, {
      className: 'highcharts-color-1',
      opposite: true,
      title: {
        text: null
      }
    }],
    plotOptions: {
      column: {
        borderRadius: 5
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
    },
    series: [{
      data: [324, 124, 547, 221],
      yAxis: 1
    }]

  });
});