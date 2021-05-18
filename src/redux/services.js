import { Api } from '../properties';

export const services = {
    getIdeas,
    addIdea,
    login,
    register,
    logout
}

function login(payload) {
    return Api.instance().post('/login', payload).then((response) => {
        return Promise.resolve(response)
    }).catch(error => {
        return Promise.reject({
            error: error.response
        });
    });
}

function register(payload) {
    return Api.instance().post('/register', payload).then((response) => {
        return Promise.resolve(response)
    }).catch(error => {
        return Promise.reject({
            error: error.response
        });
    });
}

function logout() {
    const token = sessionStorage.getItem("token")
    return Api.instance().post(`/logout?api_token=${token}`).then((response) => {
        return Promise.resolve(response)
    }).catch(error => {
        return Promise.reject({
            error: error.response
        });
    });
}

function getIdeas(page) {
    const token = sessionStorage.getItem("token")
    return Api.instance().get(`/comments/?api_token=${token}&page=${page}`).then((response) => {
        return Promise.resolve(response)
    }).catch(error => {
        return Promise.reject({
            error: error.response
        });
    });
}

function addIdea(payload) {
    const token = sessionStorage.getItem("token")
    return Api.instance().post(`/comments/?api_token=${token}`, payload).then((response) => {
        return Promise.resolve(response)
    }).catch(error => {
        return Promise.reject({
            error: error.response
        });
    });
}
