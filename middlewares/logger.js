const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} a la ruta: ${req.url}`);
    next();
};

module.exports = logger;