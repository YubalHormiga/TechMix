import axios from 'axios'

const apiKey = import.meta.env.VITE_TASTY_API_KEY
const api = axios.create({
  baseURL: 'https://tasty.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    'X-RapidAPI-Key': apiKey
  }
})
export default api
