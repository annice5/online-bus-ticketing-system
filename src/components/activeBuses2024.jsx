import React from "react";
import ReactApexChart from "react-apexcharts";
// import ApexCharts from 'apexcharts' // Ensure you have this import

class ActiveBuses2024 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "buses",
          data: [50, 20, 40, 50, 20, 60, 30, 0.0, 0.0, 0.0, 0.0, 0.0],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
        //   formatter: function (val) {
        //     return val + "%";
        //   },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          position: "top",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            // formatter: function (val) {
            //   return val + "%";
            // },
          },
        },
        title: {
          text: "Active Buses",
          floating: true,
          offsetY: 330,
          align: "center",
          style: {
            color: "#04071F",
          },
        },
      
      },
    };
  }

  render() {
    return (
      <div>
        <div>
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={350}
            />
          </div>
          <div id="html-dist"></div>
        </div>
      </div>
    );
  }
}

export default ActiveBuses2024;
