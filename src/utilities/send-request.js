//default indicates default export of all of module's functions
//come here to do all API request refactoring (i.e. using AXIOS)
//send token from here
import { getToken } from "./users-service";

//use default PARAMS 
export default async function sendRequest(url, method= 'GET', payload = null) {
//Fetch accepts an options object as the 2nd argument
//used to include a data payload, set headers, specify the method, etc
    const options = { method };
    if (payload) {
        //express body parser middleware  in server.js
        //is looking at request for 'Content-Type'
        options.headers = { 'Content-Type': 'application/json' };
        // data/payload below
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        //need to add an authorization header
        //use the logical OR assignment operator, only asigns object if options.headers is falsy
        options.headers ||= {};
        options.headers.Authorization = `Bearer ${token}`;
  }

    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    //if res.ok is flase, then something went wrong
    // send reuest always returns a promise via 
    //res.json() which always resolves to the data
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}