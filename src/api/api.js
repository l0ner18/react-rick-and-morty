import axios from "axios";


const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export const mainAPI = {
    getData(page) {
        return instance.get(`/character/?page=${page}`)
    }
}