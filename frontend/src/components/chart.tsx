import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  import {Bar} from 'react-chartjs-2';
  import { BarElement } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  )

const LineChart = () => {
    const data = {
        labels: ['1', '1', '1', '1', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2', '3', '3', '3', '3', '3', '3', '3'],
        datasets: [
            {
                label: 'Electricity Prices',
                data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgb(75, 192, 192)',
            },
            {
                label: 'Kw/h Prices',
                data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgb(75, 192, 192)',
            },
        ],
    };
    const [chartData, setChartData] = useState(data);
    useEffect(() => {
        const fetchData = async () => {
         
          const response = await fetch("hourly_elec_prices.csv");
          const reader = response.body?.getReader();
          const result = await reader?.read();
          const decoder = new TextDecoder("utf-8");
          const csv = result?.value ? decoder.decode(result.value) : "";
          const { data } = Papa.parse(csv, { header: true });
         const labels = data.map((row: unknown) => (row as { Hour: string }).Hour);
         const prices = data.map((row: unknown) =>
            parseFloat((row as { Price: string }).Price)
          );
          setChartData({
            labels: labels,
            datasets: [
            {
                label: "Electricity Prices",
                data: prices,
                backgroundColor: '#A162F7',
                borderColor: 'rgb(75, 192, 192)',
                fill: true,
                
            },
            
            ],
          });
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Electricity Prices Chart</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default LineChart;
