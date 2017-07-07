//const url='https://dictionayryservices.herokuapp.com';
const url = 'http://localhost:3001';
const appService = "/APP";

export const getNewState = (success, error) => {

// we start off by seeing whether we have a JWT token stored
  let access_token = localStorage.getItem("access_token");
  fetch(url + appService, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      access_token: access_token
    })
  }).then(function (response) {
    console.log(response)
    if (response.status >= 400) {
      if (typeof (error) === 'function') {
        error(new Error("Bad response from server: " + response.status))
      }
    } else response.json().then((json) => success(json));
  }).catch((err) => {
    if (typeof (error) === 'function') {
      error(err)
    }
  })
}
