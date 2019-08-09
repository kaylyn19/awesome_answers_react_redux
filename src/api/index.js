const BASE_URL = 'http://localhost:3000/api/v1'
export const Session = {
    create(params) {
        return fetch(`${BASE_URL}/session`, { // returns promise
            method: 'POST',
            credentials: 'include', // send all the credential headers e.g. cookies
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => {
            return res.json()
        })
        // Session.create({email: "js@winterfell.gov", password: "supersecret"})
    }
}

export const Question = {
    all() {
        return fetch(`${BASE_URL}/questions`, {
            credentials: 'include'
        }).then(res => res.json());
    },
    one(id) {
        return fetch(`${BASE_URL}/questions/${id}`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params) {
        return fetch(`${BASE_URL}/questions`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({question: params}),
        }).then(res => res.json());
    }
}

export const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            method: 'GET',
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params) {
        return fetch(`${BASE_URL}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: params})
        }).then(res => res.json())
    }
}
