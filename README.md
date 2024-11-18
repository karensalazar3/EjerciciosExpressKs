## Explicaciones y Pruebas de Ejercicios en Express
## Ejercicio 1: Levantar un servidor básico
## Archivo: e1.js
const express = require('express');
const app = express();
const puerto = 3000;
app.listen(puerto, () => {
 console.log(`Servidor levantado en el puerto ${puerto}`);
});
## Explicación: 
Este código importa Express, crea una instancia de la aplicación y la configura para
escuchar en el puerto 3000. Cuando el servidor se levanta, muestra un mensaje en la consola
indicando que está corriendo.
## Prueba: 
Levanta el servidor ejecutando `node e1.js` y verifica en la terminal el mensaje 'Servidor
levantado en el puerto 3000'.

## Ejercicio 2: Manejo de rutas con diferentes métodos HTTP
## Archivo: ej2.js
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


 ## Explicación: 
 Este servidor maneja rutas para productos y usuarios con diferentes métodos HTTP
(GET, POST, PUT, DELETE).
## Prueba: 
Usa Postman para probar cada ruta. Configura solicitudes a `http://localhost:3000` con los
métodos y rutas indicadas en el ejercicio.

## Ejercicio 3: Manipulación de productos y filtros
## Archivo: ej3.js
const express = require('express');
const app = express();
app.use(express.json());
const puerto = 3000;

let productos = [
  { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
  { id: 2, nombre: 'FIFA 23 PS5', precio: 1000 },
  { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
  { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
  { id: 5, nombre: 'Skin Valorant', precio: 120 },
  { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
];

app.get('/products', (req, res) => {
  res.json({
    description: 'Productos',
    items: productos
  });
});

app.post('/products', (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  res.status(201).json({ message: 'Producto agregado', producto: nuevoProducto });
});

app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productoActualizado = req.body;
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos[index] = { id, ...productoActualizado };
    res.json({ message: 'Producto actualizado', producto: productos[index] });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    const eliminado = productos.splice(index, 1);
    res.json({ message: 'Producto eliminado', producto: eliminado });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.get('/products/filtro/precio', (req, res) => {
  const productosFiltrados = productos.filter(p => p.precio >= 50 && p.precio <= 250);
  res.json({ message: 'Productos con precio entre 50 y 250', items: productosFiltrados });
});

app.get('/products/buscar/id', (req, res) => {
  const id = parseInt(req.query.id);
  const producto = productos.find(p => p.id === id);
  if (producto) {
    res.json({ message: 'Producto encontrado', producto });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.get('/products/buscar/nombre', (req, res) => {
  const nombre = req.query.nombre.toLowerCase();
  const producto = productos.find(p => p.nombre.toLowerCase() === nombre);
  if (producto) {
    res.json({ message: 'Producto encontrado', producto });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.listen(puerto, () => {
  console.log(`Servidor levantado en el puerto ${puerto}`);
});

## Explicación: 
Este servidor maneja un array de productos y permite realizar operaciones de CRUD,
así como filtros y búsquedas por id y nombre.
## Prueba: 
Prueba los endpoints con Postman utilizando las rutas `http://localhost:3000/products` y los
métodos adecuados. Envía JSON en el body para las solicitudes POST y PUT.

## Requisitos
- Node.js
- Express

## Instalación:
- Clona este repositorio:
git clone https://github.com/karensalazar3/EjerciciosExpress/tree/main
- Instala las dependencias:
npm install express
- Ejecuta los archivos:
node e1.js
node ej2.js
node ej3.js


Este README proporciona una descripción clara de los ejercicios, el código y cómo probarlos.
## KAREN SALAZAR.
