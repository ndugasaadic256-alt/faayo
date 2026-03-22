import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface NutritionData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  goal: number;
}

export default function NutritionChart({ data }: { data: NutritionData }) {
  const chartData = {
    labels: ['Protein', 'Carbs', 'Fat'],
    datasets: [
      {
        data: [data.protein, data.carbs, data.fat],
        backgroundColor: [
          '#10b981',
          '#3b82f6',
          '#f97316'
        ],
        borderColor: [
          '#059669',
          '#1d4ed8',
          '#ea580c'
        ],
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  };

  return <Doughnut data={chartData} options={options} />;
}