import axios from "axios"

export default class ApiService {

  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  static performAxios(options){
    return axios(options).then((response)=>{
      return {
        status: response.status,
        data: response.data
      }
    }).catch((error)=>{
      if (error.response) {
        return {
          status: error.response.status,
          message: error.response.data
        }
      } else if (error.request) {
        return {
          message: error.request
        }
      } else {
        return {
          message: error.message
        }
      }
    })
  }

  static get(url, token) {
    if (token) {
      this.headers.Authorization = `Bearer ${token}`
    }

    var options = {
      method: 'get',
      url: url,
      headers: ApiService.headers,
    }

    return ApiService.performAxios(options)
  }

  static post(url, token, data){
    if (token) {
      this.headers.Authorization = `Bearer ${token}`
    }

    var options = {
      method: 'post',
      url: url,
      headers: ApiService.headers,
      data: data
    }

    return ApiService.performAxios(options)
  }

  static put(url, token, data){
    if (token) {
      this.headers.Authorization = `Bearer ${token}`
    }

    var options = {
      method: 'put',
      url: url,
      headers: this.headers,
      data: data
    }

    return ApiService.performAxios(options)
  }

  static delete(url, token){
    if (token) {
      this.headers.Authorization = `Bearer ${token}`
    }

    var options = {
      method: 'delete',
      url: url,
      headers: this.headers,
    }

    return ApiService.performAxios(options)
  }
};
