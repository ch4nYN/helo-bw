import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useQuery } from '@apollo/client';
import { QueryResults } from './HistoryTable';
import { LIST_WEIGHT_DATA_QUERY } from '../apis';
import moment from 'moment';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Weight Over Time',
    },
  },
};


const LineChart = () => {
  const { data, loading, error } = useQuery<QueryResults | undefined>(LIST_WEIGHT_DATA_QUERY);

  if (loading) return <div>loading...</div>
  if (error) return <div>{error.message}</div>
  
  const labels = data?.weightData.map(d => moment(d.date).format('L'));
  const d =  data?.weightData.map(d => d.weight);
  const datapoints = {
    labels,
    datasets: [
      {
        label: 'Weight (lbs)',
        data: d,
        borderColor: 'green'
      }
    ]

  }
  return(
    <Line options={options} data={datapoints} />
  )
}

export default LineChart;
