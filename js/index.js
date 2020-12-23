btnStart = document.querySelector('[data-action="start"]');
btnStop = document.querySelector('[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const colorMixer = {
  start() {
    setInterval(() => {
      const randomColor = randomIntegerFromInterval(colors[0], colors[5]);
      console.log(randomColor);
    }, 1000);
  },
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
