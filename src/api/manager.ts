import axios from '~/axios/axios'


export function login(username: string, password: string) {
    return axios.post('/admin/login', {
        username,
        password
    })
}