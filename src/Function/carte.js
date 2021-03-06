import axios from 'axios';
import { token } from './global';

export function Fn_loadCarte() {
    return new Promise((resolve, reject) => {
        const path = '/api/carte/get'
        const headers = { headers: {"Authorization" : `Bearer ${token()}`} }

        axios.get(`${global.Link_protocol}://${global.Link_url()+path}`, headers)
            .then((res) => resolve(res.data))
            .catch((e) => {
                if (e.response) return reject(e.response.data)
                return reject('Request error: Fn_loadCarte')})
    })
}

export function Fn_changePosition(id) {
    return new Promise((resolve, reject) => {
        const path = '/api/carte/position/change/'+id
        const headers = { headers: {"Authorization" : `Bearer ${token()}`} }
        if (isNaN(id)) reject(`l'id est invalide`)

        axios.put(`${global.Link_protocol}://${global.Link_url()+path}`, null, headers)
            .then((res) => resolve(res.data))
            .catch((e) => {
                if (e.response) return reject(e.response.data)
                return reject('Request error: Fn_changePosition')})
    })
}

export function Fn_getPosition(etat, position) {
    return new Promise((resolve, reject) => {
        const path = '/api/carte/position/get'
        const headers = { headers: {"Authorization" : `Bearer ${token()}`} }
        axios.get(`${global.Link_protocol}://${global.Link_url()+path}`, headers)
            .then((res) => resolve(res.data))
            .catch((e) => {
                if (e.response) return reject(e.response.data)
                return reject('Request error: Fn_getPosition')})
    })
}