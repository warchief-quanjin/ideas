import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from "../redux/actions";
import * as types from "../redux/actionTypes";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Login', () => {
    it('should register', () => {
        const store = mockStore();
        const payload = {
            "name": "Varok Saurfang",
            "email": "varok_saurfang@gmail.com",
            "password": "ilovetacos94",
            "password_confirmation": "ilovetacos94"
        }

        return store.dispatch(actions.register(payload)).then(() => {
            const actions = store.getActions()
            if (actions[1].type === 'LOGIN_ERROR') {
                expect(actions[1].data).toEqual("Respuesta desconocida, codigo de respuesta: 422")
            } else {
                expect(actions[1].data.data.email).toEqual("varok_saurfang@gmail.com")
            }
        })
    })

    it('should login', () => {
        const store = mockStore();
        const payload = {
            "email": "varok_saurfang@gmail.com",
            "password": "ilovetacos94"
        }

        return store.dispatch(actions.login(payload)).then(() => {
            const actions = store.getActions()
            expect(actions[1].data.data.email).toEqual("varok_saurfang@gmail.com")
        })
    })

    it('should fetch 10 ideas', () => {
        const store = mockStore();

        return store.dispatch(actions.getIdeas(1)).then(() => {
            const actions = store.getActions()
            expect(actions[1].data.data.length).toEqual(10)
        })
    })

    it('should return logged user', () => {
        const store = mockStore();

        return store.dispatch(actions.getLoggedUser()).then(() => {
            const actions = store.getActions()
            expect(actions[0].data.data.email).toEqual("varok_saurfang@gmail.com")
        })
    })

    it('should add idea', () => {
        const store = mockStore();

        const payload = {
            body: "Idea Test"
        }

        return store.dispatch(actions.addIdea(payload)).then(() => {
            const actions = store.getActions()
            expect(actions[1].data.body).toEqual("Idea Test")
        })
    })

    it('should fetch 2 users', () => {
        const store = mockStore();

        return store.dispatch(actions.getUsers([1, 2])).then(() => {
            const actions = store.getActions()
            expect(actions[1].data.length).toEqual(2)
        })
    })

    it('should logout', () => {
        const store = mockStore();

        return store.dispatch(actions.logout()).then(() => {
            const actions = store.getActions()
            expect(actions[1].data.data).toEqual("User logged out.")
        })
    })
})

