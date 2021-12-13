import axios from 'axios'
import { IP_ADDRESS } from '@env'

console.log(IP_ADDRESS)

const api = axios.create({
  baseURL: `http://${IP_ADDRESS}:3333`
})

export default api
