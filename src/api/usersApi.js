import 'whatwg-fetch'; // allows for browsers that do not support fetch. PollyFil
import getBaseUrl from './baseUrl.js';

const baseUrl = getBaseUrl();

export function getUsers(){
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}

// Probably need to add POST, PUT, DELETE, etc..
function get(url){
  return fetch(baseUrl + url).then(onSuccess,onError);
}

function del(url){
  const request = new Request(baseUrl + url,{
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}



function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log("CHRISERROR " +error); //eslint-disable-line no-console
}
