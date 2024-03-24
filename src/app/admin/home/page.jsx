"use client"

import AdminPage from "@/components/templates/AdminPage"
import { useState } from "react"
import ReactApexChart from "react-apexcharts"

const ItemEmployee = ({ name, total }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xs">{name}</h1>
      <span className="text-sm">{total}</span>
    </div>
  )
}

const page = () => {

  const [pieChart, setPieChart] = useState({
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  })
  const [barChart, setBarChart] = useState({
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  })

  return (
    <AdminPage>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
        <div className="flex flex-col w-full lg:flex-1 lg:col-span-4">
          <div className="flex flex-col bg-primary text-white px-4 py-3">
            <h1 className="text-xl">Total Employee</h1>
            <span className="font-semibold text-2xl">120</span>
            <div className="flex flex-row mt-3 gap-3 overflow-x-auto scrollbar-hide">
              <ItemEmployee name={'Management'} total={20} />
              <div className="w-[2px] h-full bg-white"></div>
              <ItemEmployee name={'HRD'} total={64} />
              <div className="w-[2px] h-full bg-white"></div>
              <ItemEmployee name={'Operasional'} total={32} />
              <div className="w-[2px] h-full bg-white"></div>
              <ItemEmployee name={'Marketing'} total={34} />
              <div className="w-[2px] h-full bg-white"></div>
              <ItemEmployee name={'Finance'} total={36} />
            </div>
          </div>
          <div className="flex flex-col bg-primary p-4 text-white mt-4">
            <h1>Absensi Result</h1>
            <div className="flex flex-row gap-2">
              <div className="flex flex-col bg-white rounded-[5px] w-full p-3 text-black">
                <h1>Ontime</h1>
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="">58</span>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-[5px] w-full p-3 text-black">
                <h1>Late Arrival</h1>
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="">58</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-right text-sm">
              View Result {'>'}
            </div>
          </div>
          <div className="flex flex-col bg-white shadow-md p-4 mt-4 h-full">
            <h1>Approval</h1>
            <p>Approval Result</p>
            <div className="flex flex-col justify-center items-center h-full">
              <div className="max-w-[500px]">
                <ReactApexChart options={{
                  chart: {
                    type: 'pie',
                  },
                  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                }} type="donut" series={[44, 55, 13, 43, 22]} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:col-span-2">
          <div className="flex flex-col bg-primary min-h-[350px] p-3 text-white">
            <h1>Information Office</h1>
          </div>
          <div className="flex flex-col p-3 bg-white border-[2px] mt-4">
            <h1 className="py-2">Last Transaction</h1>
            <div className="flex flex-col gap-2 min-h-[300px] max-h-[400px] overflow-y-auto scrollbar-hide">
              {Array.from({ length: 20 }).map((_, i) => (
                <div className="flex flex-row items-center gap-2">
                  <img className="rounded-full w-5 h-5" src="https://picsum.photos/200/300" alt="photo" />
                  <div className="flex flex-col flex-1">
                    <h1 className="text-sm">John Doe</h1>
                    <span className="text-[9px] text-gray-400">Transaction</span>
                  </div>
                  <p className="text-xs text-green-500 w-[40px] truncate">Reimbursement</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="flex flex-col mt-4 mb-8">
        <h1 className="py-3">Information Payroll</h1>
        <div className="flex flex-row gap-2 items-center text-xs">
          <span className="text-sm">Sort Date</span>
          <div className="border-[2px] rounded-[5px] px-3 py-1">
            <select className="outline-none" name="" id="">
              <option value="">Month</option>
            </select>
          </div>
          <div className="border-[2px] rounded-[5px] px-3 py-1">
            <select className="outline-none" name="" id="">
              <option value="">Year</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <ReactApexChart options={barChart} height={400} series={barChart.series} type="bar" />
        </div>
      </div>
    </AdminPage>
  )
}

export default page