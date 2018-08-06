
//actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_USERNAME = "SET_USERNAME";

//action creators
function saveToken(token) {
  return {
    type : SAVE_TOKEN,
    token : token
  }
}

function logout() {
  return {
    type: LOGOUT
  }
}

function setUsername(username) {
  return {
    type: SET_USERNAME,
    username
  };
}

function facebookLogin(access_token) {
    return dispatch => {
      fetch("/users/login/facebook/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_token
        })
      })
        .then(response => response.json())
        .then(json => {
          if(json.token){
            dispatch(saveToken(json.token))
          }
        })
        .catch(err => console.log(err));
    };
  }

  function usernameLogin(username, password) {
    return function(dispatch) {
      fetch("/rest-auth/login/", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username : username,
          password : password
        })
      })
      .then(response => response.json())
      .then(json => {
        if(json.token) {
          dispatch(saveToken(json.token))
          dispatch(setUsername(username));
        }
      })
      .catch(err => console.log(err));
    }
  }

  function createAccount(username,email, name, password1, password2 ) {
    return function(dispatch) {
      fetch("/rest-auth/registration/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          username,
          email,
          name,
          password1,
          password2,
          
        })
      })
      .then(response => response.json())
      .then(json => {
        if(json.token) {
          dispatch(saveToken(json.token))
          dispatch(setUsername(username));
        }
      })
      .catch(err => console.log(err));
    }
  }

//API actions

//initial state

const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    token : localStorage.getItem("jwt")
};

//reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
          return applySetToken(state, action); 
        case LOGOUT : 
          return applyLogout(state, action);
        case SET_USERNAME:
          return applySetUsername(state, action);   
        default: 
          return state;
    }
}
//reducer functions

function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn : true,
    token
  }
}

function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  return {
    isLoggedIn : false
  }
}

function applySetUsername(state, action) {
  const { username } = action;
  localStorage.setItem("username", username);
  return {
    ...state,
    username
  };
}

//exports

const actionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount,
    setUsername,
    logout
};


export { actionCreators } ;

//reducer export
export default reducer;