import axios from '~/axios/axios'


export  function   login(username: string, password: string) {
    return axios.post('/admin/login', {
        username,
        password
    })
}

export  function getinfo() {
    return axios.post('/admin/getinfo')
}