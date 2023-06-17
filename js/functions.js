const checkLength = (str, num) => str.length <= num;

const checkPalindrome = (str) => {
    let normalized = str.replaceAll(' ', '').toLowerCase();
    let reverse = '';

    for(let i = normalized.length - 1; i >= 0; i--) {
        normalized[i];
        reverse = reverse += normalized[i];
    }

    return normalized === reverse ? true : false;
}

const stringToPositiveNumber = (arg) => {
    const string = arg.toString();
    let result = '';

    for(let i = 0; i < string.length; i++) {
        if(!Number.isNaN(parseInt(string[i], 10))) {
            result += string[i];
        }
    }

    return parseInt(result, 10);
}
