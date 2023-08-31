import sendRequest from "./send-request";
const BASE_URL = 'api/users';
//JSON request


export async function signUp(userData) {
  //add arguments URL METHOD PAYLOAD
  return sendRequest(BASE_URL, 'POST', userData);

}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);

}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}



// ----OLD code prior to adding SEND-REQUEST.js----------

// export async function signUp(userData) {
// //Fetch uses an options object as a 
// //second arg to make requests other than 
// //GET, include data, set headers
//     const res = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         // Fetch requires data payloads to be stringified
//         // and assigned to a body property on the options object
//         body: JSON.stringify(userData)
//          });
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the JWT
//     return res.json(); //resolves a promise which will return a token
//   } else {
//     throw new Error('Invalid Sign Up');
//   }
// }

// export async function login(credentials) {
//   // Fetch uses an options object as a second arg to make
//   // requests other than GET and/or send data and/or set headers
//   const res = await fetch(`${BASE_URL}/login`, {
//     method: 'POST',
//     // MIME type of application/json
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(credentials)
//   });
//   // Check if request succeeded
//   if (res.ok) {
//     // Promise will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error('Invalid Log In');
//   }
// }