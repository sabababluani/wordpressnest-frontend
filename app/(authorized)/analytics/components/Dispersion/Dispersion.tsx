import ResolutionStackedBarChart from './components/ResolutionStackedBarChart/ResolutionStackedBrChart';

const datasets = [
  {
    label: 'Desktop',
    data: [
      600, 700, 800, 750, 720, 600, 700, 800, 750, 720, 700, 800, 750, 720, 700,
      800, 750, 720, 700, 800,
    ],
    backgroundColor: '#000000',
  },
  {
    label: 'Mobile',
    data: [
      300, 200, 100, 150, 200, 300, 200, 100, 150, 200, 200, 100, 150, 200, 200,
      100, 150, 200, 200, 100,
    ],
    backgroundColor: '#E9EAEB',
  },
  {
    label: 'Tablet',
    data: [
      10, 60, 70, 65, 80, 10, 60, 70, 65, 80, 60, 70, 65, 80, 10, 60, 70, 65,
      80, 10,
    ],
    backgroundColor: '#52C41A',
  },
];

const labels = [
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
];

const Dispersion = () => {
  return <ResolutionStackedBarChart datasets={datasets} labels={labels} />;
};

export default Dispersion;
