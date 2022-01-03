const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const breedsRoute = require('./breeds');
const temperamentsRoute = require('./temperaments');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/breeds', breedsRoute);
router.use('/temperaments', temperamentsRoute);



module.exports = router;
