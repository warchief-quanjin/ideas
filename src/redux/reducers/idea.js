import { ADD_IDEA, GET_IDEAS, IDEA_LOADING } from "../actionTypes";

const initialState = {
    ideas: [],
    nextIdeas: false,
    prevIdeas: false,
    loading: true,
    ideaSaved: false
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
        default:
            return state;
    }
}

export default ideaReducer;
