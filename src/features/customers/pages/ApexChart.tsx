import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

type Metric = "active" | "repeat" | "visitor" | "conversion";
type Period = "thisWeek" | "lastWeek";

const ApexChart = () => {
  const [activeMetric, setActiveMetric] = useState<Metric>("active");
  const [period, setPeriod] = useState<Period>("thisWeek");

  const data = {
    thisWeek: {
      active: {
        value: "25k",
        label: "Active Customers",
        chart: [22, 22, 37, 37, 26, 26, 48],
      },
      repeat: {
        value: "5.6k",
        label: "Repeat Customers",
        chart: [12, 18, 15, 25, 20, 27, 23],
      },
      visitor: {
        value: "250k",
        label: "Shop Visitor",
        chart: [30, 35, 28, 42, 48, 30, 42],
      },
      conversion: {
        value: "5.5%",
        label: "Conversion Rate",
        chart: [18, 25, 21, 32, 28, 35, 31],
      },
    },

    lastWeek: {
      active: {
        value: "21k",
        label: "Active Customers",
        chart: [18, 24, 29, 25, 35, 31, 38],
      },
      repeat: {
        value: "4.8k",
        label: "Repeat Customers",
        chart: [10, 14, 12, 21, 18, 24, 20],
      },
      visitor: {
        value: "220k",
        label: "Shop Visitor",
        chart: [25, 31, 27, 38, 43, 29, 37],
      },
      conversion: {
        value: "4.9%",
        label: "Conversion Rate",
        chart: [15, 21, 19, 28, 24, 31, 27],
      },
    },
  };

  const current = data[period][activeMetric];

  const series = [
    {
      name: current.label,
      data: current.chart,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 220,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
        speed: 400,
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "smooth",
      width: 1.5,
    },

    colors: ["#4caf7d"],

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.28,
        opacityTo: 0.03,
        stops: [0, 100],
      },
    },

    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },

      labels: {
        style: {
          colors: [
            "var(--text)",
            "var(--text)",
            "var(--text)",
            "var(--text)",
            "var(--text)",
            "var(--text)",
            "var(--text)",
          ],
          fontSize: "12px",
        },
      },
    },

    yaxis: {
      min: 0,
      max: 50,
      tickAmount: 5,

      labels: {
        style: {
          colors: "var(--text)",
          fontSize: "12px",
          
        },

        formatter: (value) => `${value}k`,
      },
    },

    tooltip: {
      shared: false,
      intersect: true,

      y: {
        formatter: (value) => `${value}k`,
      },
    },

    markers: {
      size: 0,

      hover: {
        size: 4,
      },
    },

    legend: {
      show: false,
    },
  };

  const metrics = [
    {
      key: "active" as Metric,
      value: data[period].active.value,
      label: "Active Customers",
    },
    {
      key: "repeat" as Metric,
      value: data[period].repeat.value,
      label: "Repeat Customers",
    },
    {
      key: "visitor" as Metric,
      value: data[period].visitor.value,
      label: "Shop Visitor",
    },
    {
      key: "conversion" as Metric,
      value: data[period].conversion.value,
      label: "Conversion Rate",
    },
  ];

  return (
    <div className="content-mood shadow-[0px_1px_3px_0px_#00000033] rounded-lg col-span-8 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-medium text-[var(--text)]">
          Customer Overview
        </h3>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setPeriod("thisWeek")}
            className={`
              rounded-full
              px-3 py-1
              text-[12px]
              font-medium
              transition
              ${
                period === "thisWeek"
                  ? "border border-green-200 bg-green-50 text-green-700"
                  : "text-gray-400"
              }
            `}
          >
            This week
          </button>

          <button
            onClick={() => setPeriod("lastWeek")}
            className={`
              rounded-full
              px-3 py-1
              text-[12px]
              font-medium
              transition
              ${
                period === "lastWeek"
                  ? "border border-green-200 bg-green-50 text-green-700"
                  : "text-gray-400"
              }
            `}
          >
            Last week
          </button>

          <button className="ml-1 text-gray-500 text-sm leading-none">
            ⋮
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-4 grid grid-cols-4 gap-5">
        {metrics.map((metric) => {
          const isActive = activeMetric === metric.key;

          return (
            <button
              key={metric.key}
              onClick={() => setActiveMetric(metric.key)}
              className={`
                group
                border-b
                pb-2
                text-left
                transition-all
                cursor-pointer
                ${
                  isActive
                    ? "border-green-500"
                    : "border-gray-100 hover:border-green-300"
                }
              `}
            >
              <div
                className={`
                  text-[24px]
                  font-semibold
                  transition
                  ${
                    isActive
                      ? "text-green-600"
                      : "text-[var(--text)]"
                  }
                `}
              >
                {metric.value}
              </div>

              <div
                className={`
                  mt-0.5
                  text-[13px]
                  transition
                  ${
                    isActive
                      ? "text-green-600"
                      : "text-gray-400"
                  }
                `}
              >
                {metric.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Chart */}
      <div className="mt-3">
        <ReactApexChart
          key={`${period}-${activeMetric}`}
          options={options}
          series={series}
          type="area"
          height={285}
        />
      </div>
    </div>
  );
};

export default ApexChart;