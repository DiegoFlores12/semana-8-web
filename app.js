const express = require('express');
const app = express();
const puerto = 3000;

const apiRoutes = require('./routes/apiRoutes');
const logger = require('./middlewares/logger');


app.use(express.json());
app.use(logger);

app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada. Verifica la URL." });
});

app.listen(puerto, () => {
    console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});