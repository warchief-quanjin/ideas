import { services } from './services'
import store from './store'

import { ADD_IDEA, GET_IDEAS, IDEA_LOADING, IDEA_ERROR, LOGIN, LOGIN_ERROR, LOGOUT, REGISTER } from "./actionTypes";

export const login = (payload) => {
    services.login(payload).then((response) => {
        if (response.status === 200) {
            sessionStorage.setItem("token", response.data.data.api_token);
            store.dispatch({
                type: LOGIN,
                data: response.data
            })
        } else {
            store.dispatch({
                type: LOGIN_ERROR,
                data: `Respuesta desconocida, codigo de respuesta: ${response.status}`
            })
        }
    }).catch(error => {
        if (error.error.status === 422) {
            store.dispatch({
                type: LOGIN_ERROR,
                data: "Usuario Invalido"
            })
        } else {
            store.dispatch({
                type: LOGIN_ERROR,
                data: `Respuesta desconocida, codigo de respuesta: ${error.error.status}`
            })
        }
    })
}

export const register = (payload) => {
    services.register(payload).then((response) => {
        if (response.status === 201) {
            sessionStorage.setItem("token", response.data.data.api_token);
            store.dispatch({
                type: REGISTER,
                data: response.data
            })
        } else {
            store.dispatch({
                type: LOGIN_ERROR,
                data: `Respuesta desconocida, codigo de respuesta: ${response.status}`
            })
        }
    }).catch(error => {
        store.dispatch({
            type: LOGIN_ERROR,
            data: `Respuesta desconocida, codigo de respuesta: ${error.error.status}`
        })
    })
}

export const logout = (payload) => {
    return (dispatch, getState) => {
        services.logout(payload).then((response) => {
            if (response.status === 200) {
                sessionStorage.removeItem("token");
                dispatch({
                    type: LOGOUT,
                    data: response.data
                })
            } else {
                dispatch({
                    type: LOGIN_ERROR,
                    data: `Respuesta desconocida, codigo de respuesta: ${response.status}`
                })
            }
        }).catch(error => {
            dispatch({
                type: LOGIN_ERROR,
                data: `Respuesta desconocida, codigo de respuesta: ${error.error.status}`
            })
        })
    }
}

export const addIdea = (payload) => {
    return (dispatch, getState) => {
        dispatch({ type: IDEA_LOADING, data: true })
        services.addIdea(payload).then((response) => {
            if (response.status === 201) {
                dispatch({
                    type: ADD_IDEA,
                    data: response.data
                })
            } else {
                dispatch({
                    type: IDEA_ERROR,
                    data: `Respuesta desconocida, codigo de respuesta: ${response.status}`
                })
            }
        }).catch(error => {
            dispatch({
                type: IDEA_ERROR,
                data: `Respuesta desconocida, codigo de respuesta: ${error.error.status}`
            })
        })
    }
}

export const getIdeas = (page) => {
    return (dispatch, getState) => {
        dispatch({
            type: IDEA_LOADING,
            data: true
        })
        services.getIdeas(page).then((response) => {
            if (response.status === 200) {
                dispatch({
                    type: GET_IDEAS,
                    data: response.data
                })
            } else {
                dispatch({
                    type: IDEA_ERROR,
                    data: `Respuesta desconocida, codigo de respuesta: ${response.status}`
                })
            }
        }).catch(error => {
            dispatch({
                type: IDEA_ERROR,
                data: `Respuesta desconocida, codigo de respuesta: ${error.error.status}`
            })
        })
    }
}
