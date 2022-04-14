const randomColour = () => Math.floor(Math.random() * 16777215).toString(16);
const randomDuration = () => Math.floor(Math.random() * 16777215).toString(16);
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const maxOffset = 1800
const squareArray = [
  {
    id: 1,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 2,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 3,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 4,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 5,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 6,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 7,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 8,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 9,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 10,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 11,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 12,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 13,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 14,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 15,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 16,
    fill: randomColour(),
    offset: randomIntFromInterval(1, maxOffset),
    flashDuration: Math.random(),
  },
  {
    id: 17,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 18,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 19,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 21,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 22,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 23,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 24,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 25,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
]
const circleArray = [
  {
    id: 1,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 2,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 3,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 4,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 5,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 6,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 7,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 8,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 9,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 10,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 11,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 12,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 13,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 14,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 15,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 16,
    fill: randomColour(),
    offset: randomIntFromInterval(1, maxOffset),
    flashDuration: Math.random(),
  },
  {
    id: 17,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 18,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 19,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 21,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 22,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 23,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 24,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
  {
    id: 25,
    offset: randomIntFromInterval(1, maxOffset),
    fill: randomColour(),
    flashDuration: Math.random(),
  },
]

export { circleArray, squareArray } 
