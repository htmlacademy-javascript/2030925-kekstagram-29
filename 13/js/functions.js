import { SHOW_TIME } from './constants.js';

const checkLength = (str, num) => str.length <= num;

const checkPalindrome = (str) => {
  const normalized = str.replaceAll(' ', '').toLowerCase();
  let reverse = '';
  let counter;

  for(let i = normalized.length - 1; i >= 0; i--) {
    counter = normalized[i];
    reverse = reverse += counter;
  }

  return normalized === reverse;
};

const stringToPositiveNumber = (arg) => {
  const string = arg.toString();
  let result = '';

  for(let i = 0; i < string.length; i++) {
    if(!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }

  return parseInt(result, 10);
};

export const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

export const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomIdFromRange = (min,max) => {
  const previousValues = [];
  return function() {
    let currentValue = getRandomInteger(min,max);
    if(previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min,max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.right = '0';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.border = '3px solid #e90000';
  alertContainer.style.borderRadius = '3px';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, SHOW_TIME);
};

/*
export const getRandomIdFromRange = () => {
  const previousValues = [];

  return(
    function(min,max) {
      let currentValue = getRandomInteger(min,max);
      if(previousValues.length >= (max - min + 1)) {
        return null;
      }
      while(previousValues.includes(currentValue)) {
        currentValue = getRandomInteger(min,max);
      }
      previousValues.push(currentValue);
      return currentValue;
    }
  );
};
*//*
export const turnToMinutes = (timeStr) => {
  const [hours, minutes] = timeStr.split(':');

  return (hours * 60) + +minutes;
};

export const calculateMeeting = (startWorkTimeInHours, endWorkTimeInHours, startMeetTimeInHours, meetTimeInMinutes) => {
  startWorkTimeInHours = turnToMinutes(startWorkTimeInHours);
  endWorkTimeInHours = turnToMinutes(endWorkTimeInHours);
  startMeetTimeInHours = turnToMinutes(startMeetTimeInHours);

  return (startMeetTimeInHours >= startWorkTimeInHours) && (startMeetTimeInHours + meetTimeInMinutes) <= endWorkTimeInHours;
};
*/
checkLength('Какое-то слово');
checkPalindrome('Лёша на полке клопа нашёл');
stringToPositiveNumber('коровы 33');
