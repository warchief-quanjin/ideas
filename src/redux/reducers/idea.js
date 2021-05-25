import { ADD_IDEA, GET_IDEAS, GET_USERS, IDEA_LOADING, IDEA_ERROR } from "../actionTypes";

const initialState = {
    ideas: [],
    users: [],
    nextIdeas: false,
    prevIdeas: false,
    loading: true,
    ideaSaved: false,
    errorMessage: ""
};

const ideaReducer = (state = initialState, action) => {
    switch (action.type) {
        case IDEA_LOADING: {
            return {
                ...state,
                loading: true,
                ideaSaved: false
            };
        }
        case ADD_IDEA: {
            return {
                ...state,
                ideaSaved: true
            };
        }
        case GET_IDEAS: {
            const { data, links } = action.data;
            
            return {
                ...state,
                ideas: data,
                nextIdeas: links.next,
                prevIdeas: links.prev,
                loading: false
            };
        }
        case GET_USERS: {         
            return {
                ...state,
                users: action.data,                
                loading: false
            };
        }
        case IDEA_ERROR: {
            return {
                ...state,
                errorMessage: action.data
            };
        }
        default:
            return state;
    }
}

export default ideaReducer;
