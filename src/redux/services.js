import { Api } from '../properties';

export const services = {
    getIdeas,
    getUsers,
    getLoggedUser,
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

function getLoggedUser() {
    const token = sessionStorage.getItem("token")
    return Api.instance().get(`/user/?api_token=${token}`).then((response) => {
        return Promise.resolve(response)
    }).catch(error => {
        return Promise.reject({
            error: error.response
        });
    });
};

async function getUser(id) {
    const token = sessionStorage.getItem("token")
    return await Api.instance().get(`/user/${id}/?api_token=${token}`)
};

function getUsers(ids) {
    const usersFunctions = [];
    ids.forEach(id => {
        usersFunctions.push(getUser(id))
    });

    return Promise.all(usersFunctions).then((response) => {
        const users = [];

        if (response.length > 0) {
            response.forEach(element => {
                const user = element.data.data;
                users.push({ id: user.id, name: user.name, email: user.email })
            });
        }

        return Promise.resolve(users)
    }).catch(error => {
        return Promise.reject({
            error: error
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
