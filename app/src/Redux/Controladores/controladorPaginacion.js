//=================================================================
//      IMPORTACIONES
//=================================================================
import { createSlice } from '@reduxjs/toolkit';
var stateInicial = {
    paginaActual: 1
};
//=================================================================
//      FUNCION REDUCTORA
//=================================================================
export var controlador = createSlice({
    name: 'paginacion',
    initialState: stateInicial,
    reducers: {
        setPaginaActual: function (state, accion) {
            state.paginaActual = accion.payload;
        }
    }
});
//=================================================================
//      EXPORTACION DE LAS ACCIONES 
//=================================================================
export var setPaginaActual = controlador.actions.setPaginaActual;
// SE EXPORTA EL LA FUNCION REDUCTORA
export default controlador.reducer;
