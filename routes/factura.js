const { Router } = require('express');
const { check } = require('express-validator');
const { getFacturas, getFacturaPorId, postFactura, putFactura, deleteFactura } = require('../controllers/factura');
const { existeFacturaPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-roles');

const router = Router();

router.get('/', getFacturas);

router.get('/:id', [
    check('id', 'No Id Mongo válido').isMongoId(),
    check('id').custom(existeFacturaPorId),
    validarCampos
], getFacturaPorId);

router.post('/agregar', [
    validarJWT,
    check('emisor', 'Emisor es obligatorio').not().isEmpty(),
    check('direccion', 'Direccion obligatoria').not().isEmpty(),
    validarCampos
], postFactura);

router.put('/editar/:id', [
    validarJWT,
    check('id', 'No Id Mongo válido').isMongoId(),
    check('emisor', 'Emisor obligatorio').not().isEmpty(),
    check('id').custom(existeFacturaPorId),
    validarCampos
], putFactura);

router.delete('/eliminar/:id', [
    validarJWT,
    esAdminRole,
    check('emisor', 'Emisor obligatorio').not().isEmpty(),
    check('id').custom(existeFacturaPorId),
    validarCampos
], deleteFactura);

module.exports = router;