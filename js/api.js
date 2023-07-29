import { ErrorText, SERVER_URL, Method, Route } from './constants.js';


export const getData = () =>
  fetch(`${SERVER_URL}${Route.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(ErrorText.GET_DATA);
    });

export const sendData = (body, onSuccess) =>
  fetch(`${SERVER_URL}${Route.SEND_DATA}`,
    {
      method: Method.POST,
      body,
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      onSuccess();
    })
    .catch(() => {
      throw new Error(ErrorText.SEND_DATA);
    });


/*
const load = (route, errorText, method = Method.GET, body = null) => {
  fetch(`${SERVER_URL}${route}` , {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json;
    })
    .catch(() => {
      throw new Error(errorText);
    });
};

export const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

export const sendData = (body, onSuccess) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body, onSuccess);
*/
