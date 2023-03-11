const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Categoria = require('../models/categoria');
const Producto = require('../models/producto');
const Factura = require('../models/factura');

const roleValido = async( rol = '' ) => {

    const existeRol = await Role.findOne( { rol } );

    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la DB`);
    }

}

const emailExiste = async( correo = '' ) => {

    const existeEmail = await Usuario.findOne( { correo } );

    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo } ya existe y esta registrado en la DB`);
    }

}

const existeUsuarioPorId = async(id) => {

    const usuarioExistente = await Usuario.findById(id);

    if ( !usuarioExistente ) {
        throw new Error(`El id ${ id } no existe en la DB`);
    }

}

const existeCategoriaPorId = async(id) => {

    const existeCategoria = await Categoria.findById(id);

    if ( !existeCategoria ) {
        throw new Error(`El id ${ id } no existe en la DB`);
    }

}

const existeProductoPorId = async(id) => {

    const existeProducto = await Producto.findById(id);

    if ( !existeProducto ) {
        throw new Error(`El id ${ id } no existe en la DB`);
    }

}

const existeFacturaPorId = async(id) => {

    const facturaExiste = await Factura.findById(id);

    if ( !facturaExiste ) {
        throw new Error(`El id ${ id } no existe en la DB`);
    }

}

module.exports = {
    roleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId,
    existeFacturaPorId
}