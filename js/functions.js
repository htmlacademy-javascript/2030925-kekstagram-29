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

checkLength('Какое-то слово');
checkPalindrome('Лёша на полке клопа нашёл');
stringToPositiveNumber('коровы 33');
/*Удалю в след коммите*/
