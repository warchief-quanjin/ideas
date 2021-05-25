import { services } from './services'
import store from './store'

import { ADD_IDEA, GET_IDEAS, GET_USERS, GET_LOGGED_USER, IDEA_LOADING, IDEA_ERROR, LOGIN, LOGIN_ERROR, LOGOUT, REGISTER, LOGIN_LOADING } from "./actionTypes";

export const login = (payload) => {
    return (dispatch, getState) => {
        return services.login(payload).then((response) => {
            if (response.status === 200) {
                sessionStorage.setItem("token", response.data.data.api_token);
                dispatch({ type: LOGIN, data: response.data })
            } else {
                dispatch({
                    type: LOGIN_ERROR,
                    data: `Respuesta desconocida, codigo de respuesta: ${response ? response.status : "500"}`
                })
            }
        }).catch(error => {
            if (error && error.error && error.error.status === 422) {
                dispatch({ type: LOGIN_ERROR, data: "Usuario Invalido" })
            } else {
                dispatch({ type: LOGIN_ERROR, data: `Respuesta desconocida, codigo de respuesta: ${error && error.error ? error.error.status : "500"}` })
            }
        })
    }
}

export const register = (payload) => {
    return (dispatch, getState) => {
        dispatch({ type: LOGIN_LOADING })
        return services.register(payload).then((response) => {
            if (response.status === 201) {
                sessionStorage.setItem("token", response.data.data.api_token);
                dispatch({ type: REGISTER, data: response.data })
            } else {
                dispatch({
                    type: LOGIN_ERROR,
                    data: `Respuesta desconocida, codigo de respuesta: ${response.status}`
                })
            }
        }).catch(error => {
            dispatch({
                type: LOGIN_ERROR,
                data: `Respuesta desconocida, codigo de respuesta: ${error.error ? error.error.status : "500"}`
            })
        })
    }
}

export const getLoggedUser = (page) => {
    return (dispatch, getState) => {
        store.dispatch({ type: LOGIN_LOADING })

        return services.getLoggedUser(page).then((response) => {
            if (response.status === 200) {
                dispatch({ type: GET_LOGGED_USER, data: response.data })
            } else {
                sessionStorage.removeItem("token");
                dispatch({ type: LOGIN_ERROR, data: `Respuesta desconocida, codigo de respuesta: ${response.status}` })
            }
        }).catch(error => {
            sessionStorage.removeItem("token");
            dispatch({ type: LOGIN_ERROR, data: `Respuesta desconocida, codigo de respuesta: ${error.error ? error.error.status : "500"}` })
        })
    }
}

export const logout = () => {
    return (dispatch, getState) => {
        dispatch({ type: LOGIN_LOADING })
        return services.logout().then((response) => {
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
                data: `Respuesta desconocida, codigo de respuesta: ${error.error ? error.error.status : "500"}`
            })
        })
    }
}

export const addIdea = (payload) => {
    return (dispatch, getState) => {
        dispatch({ type: IDEA_LOADING, data: true })
        return services.addIdea(payload).then((response) => {
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
                data: `Respuesta desconocida, codigo de respuesta: ${error.error ? error.error.status : "500"}`
            })
        })
    }
}

export const getIdeas = (page) => {
    return (dispatch, getState) => {
        dispatch({ type: IDEA_LOADING, data: true })
        return services.getIdeas(page).then((response) => {
            if (response.status === 200) {
                dispatch({ type: GET_IDEAS, data: response.data })
            } else {
                dispatch({
                    type: IDEA_ERROR,
                    data: `Respuesta desconocida, codigo de respuesta: ${response.status}`
                })
            }
        }).catch(error => {
            dispatch({
                type: IDEA_ERROR,
                data: `Respuesta desconocida, codigo de respuesta: ${error.error ? error.error.status : "500"}`
            })
        })
    }
}

export const getUsers = (ids) => {
    return (dispatch, getState) => {
        dispatch({ type: IDEA_LOADING, data: true })

        return services.getUsers(ids).then((response) => {
            dispatch({
                type: GET_USERS,
                data: response
            })
        }).catch(error => {
            dispatch({
                type: IDEA_ERROR,
                data: `Respuesta desconocida, codigo de respuesta: ${error.error ? error.error.status : "500"}`
            })
        })
    }
}
