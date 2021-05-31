import axios from 'axios';


const API = axios.create({
    baseURL : 'http://localhost:8081',
    timeout : 15000,
    responseType : 'json',
    headers : { 'Content-Type' : 'application/json' },
});

export async function GetProducts() {
  console.log(API.defaults.baseURL)
  return await API.get("/products")
    .then((res) => {
      return res.data;
    }).catch(err => {
      console.error(`Error: ${err}`)
    })
}