const express = require('express');
const app = express();
const puerto = 3001;

app.get('/', (req, res) => {
  res.send('Bienvenido al sitio');
});

app.get('/productos', (req, res) => {
  res.send('Listado de productos');
});

app.post('/productos', (req, res) => {
  res.send('Crear un producto');
});

app.put('/productos', (req, res) => {
  res.send('Actualizar un producto');
});

app.delete('/productos', (req, res) => {
  res.send('Borrar un producto');
});

app.get('/usuarios', (req, res) => {
  res.send('Listado de usuarios');
});

app.post('/usuarios', (req, res) => {
  res.send('Crear un usuario');
});

app.put('/usuarios', (req, res) => {
  res.send('Actualizar un usuario');
});

app.delete('/usuarios', (req, res) => {
  res.send('Borrar un usuario');
});

app.listen(puerto, () => {
  console.log(`Servidor levantado en el puerto ${puerto}`);
});
