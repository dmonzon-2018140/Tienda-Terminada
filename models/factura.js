const { Schema, model } = require('mongoose');

const FacturaSchema = Schema({
    emisor: {
        type: String,
        required: [true, 'El emisor es obligatorio']
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es obligatoria'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    valor: {
        type: Number,
        default: 0
    },
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    total: {
        type: Number,
        default: 0
    }
});

module.exports = model('Factura', FacturaSchema);