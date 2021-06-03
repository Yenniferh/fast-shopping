import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.1.2:8081',
  timeout: 15000,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
});

export async function GetProducts() {
  return await API.get('/products')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
}

export async function GetProductCategories(id_product) {
  return await API.get(`/product-categories/${id_product}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
}

export async function CreateUser(data) {
  return await API.post('/users', JSON.stringify(data))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
}

export async function CreateOrder(data) {
  /**
    {
      id_user: parseInt(id_user),
      total: total,
    }
  */
  return await API.post('/orders', JSON.stringify(data))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
}

export async function AddOrderItem(data) {
  /**
    {
      id_product: parseInt(id_product),
      quantity: quantity,
      subtotal: subtotal,
      id_order: parseInt(id_order),
    }
  */
  return await API.post('/items', JSON.stringify(data))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
}
