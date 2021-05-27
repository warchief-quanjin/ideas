import { LOGIN, LOGOUT, GET_LOGGED_USER, REGISTER, LOGIN_ERROR, LOGIN_LOADING } from "../actionTypes";

const initialState = {
    user: {},
    // logged: sessionStorage.getItem("token") ? true : false,
    logged: false,
    errorMessage: "",
    loading: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                logged: true,
                loading: false,
                user: { name: action.data.data.name },
                errorMessage: ""
            };
        }
        case REGISTER: {
            return {
                ...state,
                logged: true,
                loading: false,
                user: { name: action.data.data.name },
                errorMessage: ""
            };
        }
        case GET_LOGGED_USER: {
            return {
                ...state,
                logged: true,
                loading: false,
                user: { name: action.data.data.name },
                errorMessage: ""
            };
        }
        case LOGOUT: {
            return {
                ...state,
                loading: false,
                logged: false,
                user: {}
            };
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                loading: false,
                logged: false,
                user: {},
                errorMessage: action.data
            };
        }
        case LOGIN_LOADING: {
            return {
                ...state,
                loading: action.data
            };
        }
        default:
            return state;
    }
}

export default loginReducer;
