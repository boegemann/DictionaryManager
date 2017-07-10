const url='https://dictionayryservices.herokuapp.com';
// const url = 'http://localhost:3001';
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
        error(new Error("Bad response from server"))
      }
    } else response.json().then((json) => success(json));
  }).catch((err) => {
    if (typeof (error) === 'function') {
      error(err)
    }
  })
}

export const login = (creds, success, failure) => {

  let config = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `username=${creds.username}&password=${creds.password}`
  }


  // We dispatch requestLogin to kickoff the call to the API
  fetch(url + '/sessions/create', config)
    .then(response =>
      response.json().then(newState => ({newState, response}))
    ).then(({newState, response}) => {
    if (!response.ok) {
      // If there was a problem, we want to
      // dispatch the error condition
      failure(newState.message);
      return Promise.reject(newState)
    } else {
      // If login was successful, set the token in local storage
      localStorage.setItem('access_token', newState.auth.accessToken);
      // Dispatch the success action
      success(newState)
    }
  }).catch(err => console.log("Error: ", err))

}
