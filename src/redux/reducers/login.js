import { LOGIN, LOGOUT, REGISTER, LOGIN_ERROR } from "../actionTypes";

const initialState = {
    user: {},
    logged: false,
    errorMessage: ""
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                logged: true,
                user: { name: action.data.data.name },
                errorMessage: ""
            };
        }
        case REGISTER: {
            return {
                ...state,
                logged: true,
                user: { name: action.data.data.name },
                errorMessage: ""
            };
        }
        case LOGOUT: {
            return {
                ...state,
                logged: false,
                user: {}
            };
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                logged: false,
                user: {},
                errorMessage: action.data
            };
        }
        default:
            return state;
    }
}

export default loginReducer;
