import { ErrorText, SERVER_URL, Method, Route } from './constants.js';

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${SERVER_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

export const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

export const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);
