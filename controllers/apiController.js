const getStatus = (req, res) => {
    res.status(200).json({
        mensaje: "El servidor está funcionando correctamente.",
        estado: "OK"
    });
};

const postContacto = (req, res) => {
    const { nombre, mensaje } = req.body;

    if (!nombre || !mensaje) {
        return res.status(400).json({
            error: "Faltan datos. Se requiere 'nombre' y 'mensaje'."
        });
    }

    res.status(201).json({
        mensaje: `Gracias ${nombre}, hemos recibido tu mensaje: '${mensaje}'`
    });
};

module.exports = {
    getStatus,
    postContacto
};