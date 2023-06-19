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

checkLength('Какое-то слово');
checkPalindrome('Лёша на полке клопа нашёл');
stringToPositiveNumber('коровы 33');
