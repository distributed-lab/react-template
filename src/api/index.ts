import { config } from '@config'
import axios, { AxiosInstance } from 'axios'

export let api: AxiosInstance

export const initApi = () => {
  api = axios.create({ baseURL: config.API_URL })
}
