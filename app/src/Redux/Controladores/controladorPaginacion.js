"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPaginaActual = exports.controlador = void 0;
//=================================================================
//      IMPORTACIONES
//=================================================================
const toolkit_1 = require("@reduxjs/toolkit");
const stateInicial = {
    paginaActual: 1
};
//=================================================================
//      FUNCION REDUCTORA
//=================================================================
exports.controlador = (0, toolkit_1.createSlice)({
    name: 'paginacion',
    initialState: stateInicial,
    reducers: {
        setPaginaActual: (state, accion) => {
            state.paginaActual = accion.payload;
        }
    }
});
//=================================================================
//      EXPORTACION DE LAS ACCIONES 
//=================================================================
exports.setPaginaActual = exports.controlador.actions.setPaginaActual;
// SE EXPORTA EL LA FUNCION REDUCTORA
exports.default = exports.controlador.reducer;
