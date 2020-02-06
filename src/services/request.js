import axios from 'axios'
export const BASE_API_ENDPOINT = process.env.REACT_APP_API_BASE_URL

const defaultConfig = {
  baseURL: BASE_API_ENDPOINT,
  responseType: 'json'
}

const attachHeaders = (instance, headers) => {
  Object.keys(headers).forEach((key) => {
    instance.defaults.headers[key] = headers[key]
  })
}

const request = (config = defaultConfig) => {
  const instance = axios.create(config)
  console.log(localStorage.getItem('token'))
  attachHeaders(instance, {
    accept: 'application/json',
    authorization: `Token ${localStorage.getItem('token')}`
  })
  return {
    ...instance
  }
}

export const requestWithoutToken = (config = defaultConfig) => {
  const instance = axios.create(config)
  attachHeaders(instance, {
    accept: 'application/json',
  })
  return {
    ...instance
  }
}

export default request()
