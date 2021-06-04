const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 8080;
app.listen(port, () => {
  console.log('Listening on port 8080.');
});

const pool = mysql.createPool({
  connectionLimit: 10, //important
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

app.get('/', async (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/products', async (req, res) => {
  const query = 'SELECT * FROM products';
  pool.query(query, (err, data) => {
    if (err) {
      res.json({ status: 'error', message: err });
    }
    res.json({ status: 'ok', products: data });
  });
});

app.get('/products/:id_product', async (req, res) => {
  const query = 'SELECT * FROM products where id_product = ?';
  pool.query(query, [req.params.id_product], (error, data) => {
    if (error) {
      res.json({ status: 'error', message: error.message });
    } else if (!data) {
      res.json({});
    }
    res.json({ product: data[0] });
  });
});

app.post('/users', async (req, res) => {
  const { id_user, full_name, address, phone, email } = req.body;
  const data = {
    id_user: id_user,
    full_name: full_name,
    address: address,
    phone: phone,
    email: email,
  };
  const query = 'INSERT INTO users VALUES (?, ?, ?, ?, ?)';
  pool.query(query, Object.values(data), (error, result) => {
    if (error) {
      res.json({ status: 'error', message: error.message });
    }

    const lastQuery = 'SELECT LAST_INSERT_ID()';
    pool.query(lastQuery, (error, result) => {
      if (error) {
        res.json({ status: 'error', message: error.message });
      }
      res.json({ status: 'ok', id: result[0]['LAST_INSERT_ID()'] });
    });
  });
});

app.post('/orders', async (req, res) => {
  const { id_user, total } = req.body;
  const moment = require('moment');
  const today = moment().format('YYYY-MM-DD');
  const data = {
    ordered_at: today,
    id_user: id_user,
    total: total,
  };
  const query =
    'INSERT INTO orders (ordered_at, id_user, total) VALUES (?, ?, ?)';
  pool.query(query, Object.values(data), (error, result) => {
    if (error) {
      res.json({ status: 'error', message: error.message });
    }

    const lastQuery = 'SELECT LAST_INSERT_ID()';
    pool.query(lastQuery, (error, result) => {
      if (error) {
        res.json({ status: 'error', message: error.message });
      }
      res.json({ status: 'ok', id: result[0]['LAST_INSERT_ID()'] });
    });
  });
});

app.post('/items', async (req, res) => {
  const { id_product, quantity, subtotal, id_order } = req.body;
  const data = {
    id_product: id_product,
    quantity: quantity,
    subtotal: subtotal,
    id_order: id_order,
  };

  const query =
    'INSERT INTO items (id_product, quantity, subtotal, id_order) VALUES (?, ?, ?, ?)';
  pool.query(query, Object.values(data), (error, result) => {
    if (error) {
      res.json({ status: 'error', message: error.message });
    }

    const lastQuery = 'SELECT LAST_INSERT_ID()';
    pool.query(lastQuery, (error, result) => {
      if (error) {
        res.json({ status: 'error', message: error.message });
      }
      res.json({ status: 'ok', id: result[0]['LAST_INSERT_ID()'] });
    });
  });
});

app.get('/categories', async (req, res) => {
  const query = 'SELECT * FROM categories';
  pool.query(query, (error, data) => {
    if (error) {
      res.json({ status: 'error', message: err.message });
    }
    res.json({ status: 'ok', categories: data });
  });
});

app.get('/categories/:id_category', async (req, res) => {
  const query = 'SELECT * FROM categories where id_category = ?';
  pool.query(query, [req.params.id_category], (error, data) => {
    if (error) {
      res.json({ status: 'error', message: error.message });
    } else if (!data) {
      res.json({});
    }
    res.json({ status: 'ok', category: data[0] });
  });
});

app.get('/product-categories/:id_product', async (req, res) => {
  const query =
    'SELECT * FROM categories WHERE id_category in (SELECT id_cat FROM product_categories WHERE id_prod = ?)';
  pool.query(query, [req.params.id_product], (error, data) => {
    if (error) {
      res.json({ status: 'error', message: error.message });
    }
    res.json({ status: 'ok', categories: data });
  });
});
