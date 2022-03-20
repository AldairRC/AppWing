"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocultarModalCargando = exports.mostrarModalCargando = exports.setMensajeModalCargando = exports.setModalCargandoVisible = exports.controlador = void 0;
//=================================================================
//      IMPORTACIONES
//=================================================================
const toolkit_1 = require("@reduxjs/toolkit");
const stateInicial = {
    modalCargandoVisible: false,
    mensajeModalCargando: ""
};
//=================================================================
//      FUNCION REDUCTORA
//=================================================================
exports.controlador = (0, toolkit_1.createSlice)({
    name: 'modal',
    initialState: stateInicial,
    reducers: {
        setModalCargandoVisible: (state, accion) => {
            state.modalCargandoVisible = accion.payload;
        },
        setMensajeModalCargando: (state, accion) => {
            state.mensajeModalCargando = accion.payload;
        },
        mostrarModalCargando: (state, accion) => {
            state.modalCargandoVisible = true;
            state.mensajeModalCargando = accion.payload;
        },
        ocultarModalCargando: (state) => {
            state.modalCargandoVisible = false;
            state.mensajeModalCargando = "Cargando ...";
        }
    }
});
//=================================================================
//      EXPORTACION DE LAS ACCIONES 
//=================================================================
exports.setModalCargandoVisible = exports.controlador.actions.setModalCargandoVisible;
exports.setMensajeModalCargando = exports.controlador.actions.setMensajeModalCargando;
exports.mostrarModalCargando = exports.controlador.actions.mostrarModalCargando;
exports.ocultarModalCargando = exports.controlador.actions.ocultarModalCargando;
// SE EXPORTA EL LA FUNCION REDUCTORA
exports.default = exports.controlador.reducer;
