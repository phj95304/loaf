import { actionCreators as userActions } from "redux/modules/users";

// actions
//const LOGOUT = "LOGOUT";
const SET_FEED = "SET_FEED";
const SET_PROJECT = "SET_PROJECT";
const REGISTER_PROJECT = "REGISTER_PROJECT";
const SAVE_TOKEN = "SAVE_TOKEN";
//const LOAD_FILE = "LOAD_FILE";
const SET_COMMENT = "SET_COMMENT";//action을 정의할때 쓸 변수


// action creators

//comment함수를 만들다

function registerComment(loggedInUser){//등록된 댓글데이터를 전송 위한 액션
    return{
        type:SET_COMMENT,
        loggedInUser
    }
}

function setFeed(feed) {
    return {
        type: SET_FEED,
        feed
    }
}
/**
function logout() {
    return {
      type: LOGOUT
    }
}
 */

function setProject(projectId){
    return {
        type : SET_PROJECT,
        projectId
    }
}

function saveToken(token) {
    return {
      type : SAVE_TOKEN,
      token : token
    }
  }

function registerProject(loggedInUser){
    return {
        type: REGISTER_PROJECT,
        loggedInUser
    }
}
/*
function loadFile(){
    return {

        
    }
}
*/
// api actions

//

function createComment(projectId, message){ //댓글 데이터 등록
    return function(dispatch, getState) {
        const { users: { token, loggedInUser }} = getState()
        fetch(`/projects/${projectId}/comments/`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                Authorization : `JWT ${token}`
            },
            body : JSON.stringify({
                message
              })
            })
            .then(response => response.json())
            .then(json => {
              if(json.token) {
                dispatch(saveToken(json.token));
                dispatch(registerComment(loggedInUser));
              }
            })
            .catch(err => console.log(err));
          };
}

function getFeed(){
    return (dispatch, getState) => {
        const { users : { token } } = getState();
        fetch("/projects/", {
            method: "GET",
            headers: {
                "Authorization" : `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => dispatch(setFeed(json)))
    }
}

function getProject(projectId){//projectDstail가져오기
    return (dispatch, getState) => {
        const { users : { token }} = getState();
        fetch(`/projects/${projectId}/`, {
            headers: {
                Authorization : `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => dispatch(setProject(json)));
    };
};



function createProject(file, title, caption, max_member, schedule, tags) {
    return function(dispatch, getState) {
        const { users: { token, loggedInUser }} = getState()
        fetch(`/projects/`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                Authorization : `JWT ${token}`
            },
            body : JSON.stringify({
                file, 
                title,
                caption,
                max_member, 
                schedule,
                tags
              })
            })
            .then(response => response.json())
            .then(json => {
              if(json.token) {
                dispatch(saveToken(json.token));
                dispatch(registerProject(loggedInUser));
              }
            })
            .catch(err => console.log(err));
          };
}
      




// initial state

const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    token : localStorage.getItem("jwt"),
    username: localStorage.getItem("username")
}

// reducer

function reducer(state= initialState, action) {
    switch(action.type){
        case SET_FEED:
            return applySetFeed(state, action);
        case SET_PROJECT:
            return applySetProject(state, action);
        case SAVE_TOKEN:
            return applySetToken(state, action);
        default:
            return state;
    }
}

// reducer functions 스테이트 정의

function applySetFeed(state, action){
    const { feed } = action;
    return {
        ...state,
        feed
    }
}

//projectId에 댓글도 들어가 이씀
function applySetProject(state, action) {
    const { projectId } = action;
    return {
        ...state,
        projectId
    }
}

function applySetToken(state, action) {
    const { token } = action;
    localStorage.setItem("jwt", token);
    return {
        state,
      isLoggedIn : true,
      token
    }
  }

// exports

const actionCreators = {
    getFeed,
    getProject,
    createProject,
    createComment
    
}

export { actionCreators };

export default reducer;