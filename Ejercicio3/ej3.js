const express = require('express')
const app = express()
app.use(express.json())// Para manejar JSON en el body de las solicitudes
const puerto = 3002;

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
    const nuevoProducto = req.body
    productos.push(nuevoProducto)
    res.status(201).json({ message: 'Producto agregado', producto: nuevoProducto })
});

app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const productoActualizado = req.body
    const index = productos.findIndex(p => p.id === id)

    if (index !== -1) {
        productos[index] = { id, ...productoActualizado }
        res.json({ message: 'Producto actualizado', producto: productos[index] })
    } else {
        res.status(404).json({ message: 'Producto no encontrado' })
    }
});

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = productos.findIndex(p => p.id === id)

    if (index !== -1) {
        const eliminado = productos.splice(index, 1)
        res.json({ message: 'Producto eliminado', producto: eliminado })
    } else {
        res.status(404).json({ message: 'Producto no encontrado' })
    }
});

app.get('/products/filtro/precio', (req, res) => {
    const productosFiltrados = productos.filter(p => p.precio >= 50 && p.precio <= 250)
    res.json({ message: 'Productos con precio entre 50 y 250', items: productosFiltrados })
})

app.get('/products/buscar/id', (req, res) => {
    const id = parseInt(req.query.id);
    const producto = productos.find(p => p.id === id)

    if (producto) {
        res.json({ message: 'Producto encontrado', producto })
    } else {
        res.status(404).json({ message: 'Producto no encontrado' })
    }
});

app.get('/products/buscar/nombre', (req, res) => {
    const nombre = req.query.nombre.toLowerCase()
    const producto = productos.find(p => p.nombre.toLowerCase() === nombre)

    if (producto) {
        res.json({ message: 'Producto encontrado', producto });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' })
    }
});

app.listen(puerto, () => {
    console.log(`Servidor levantado en el puerto ${puerto}`)
})