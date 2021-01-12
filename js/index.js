btnStart = document.querySelector('[data-action="start"]');
btnStop = document.querySelector('[data-action="stop"]');
body = document.querySelector('body');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const colorMixer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    btnStart.setAttribute('disabled', 'true');
    this.isActive = true;
    intervalId = setInterval(() => {
      updateColor(colors);
    }, 1000);
  },
  stop() {
    clearInterval(intervalId);
    this.isActive = false;
    btnStart.removeAttribute('disabled');
  },
};
console.log(colorMixer);

btnStart.addEventListener('click', colorMixer.start.bind(colorMixer));
btnStop.addEventListener('click', colorMixer.stop.bind(colorMixer));

function updateColor(array) {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const arrayIndx = array.map((num, idx) => idx);
  const idxMax = Math.max(...arrayIndx);
  const idxMin = Math.min(...arrayIndx);
  const randomColor = randomIntegerFromInterval(idxMin, idxMax);
  body.style.backgroundColor = array[randomColor];
}
