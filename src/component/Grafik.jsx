// MultiChartCard.jsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // <<--- ini yang kurang
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // <<--- ini WAJIB buat <Bar />
  Title,
  Tooltip,
  Legend
);

export function MultiChartLineCard({ title, labels = [], datasets = [] }) {
  const data = {
    labels: labels,
    datasets: datasets.map((set, i) => ({
      label: set.label,
      data: set.data,
      fill: false,
      borderColor: set.color || ['#0d6efd', '#dc3545', '#198754'][i],
      backgroundColor: (set.color || ['#0d6efd', '#dc3545', '#198754'])[i],
      tension: 0.3
    }))
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h6 className="text-primary fw-bold mb-3">{title}</h6>
        <div style={{ height: '250px' }}>
          <Line options={options} data={data} />
        </div>
      </Card.Body>
    </Card>
  );
}

export function MultiBarChartCard({ title, labels = [], datasets = [] }) {
  const data = {
    labels: labels,
    datasets: datasets.map((set, i) => ({
      label: set.label,
      data: set.data,
      backgroundColor: set.color || ['#0d6efd', '#dc3545', '#198754'][i]
    }))
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h6 className="text-primary fw-bold mb-3">{title}</h6>
        <div style={{ height: '250px' }}>
          <Bar options={options} data={data} />
        </div>
      </Card.Body>
    </Card>
  );
}