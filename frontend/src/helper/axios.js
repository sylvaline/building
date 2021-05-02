import axios from 'axios'
import url from './url'


const axiosCreate = axios.create({
    baseURL : url,
    headers : {}
})

export default axiosCreate