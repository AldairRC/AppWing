//=================================================================
//      IMPORTACIONES
//=================================================================
import { createSlice } from '@reduxjs/toolkit';
var stateInicial = {
    modalCargandoVisible: false,
    mensajeModalCargando: ""
};
//=================================================================
//      FUNCION REDUCTORA
//=================================================================
export var controlador = createSlice({
    name: 'modal',
    initialState: stateInicial,
    reducers: {
        setModalCargandoVisible: function (state, accion) {
            state.modalCargandoVisible = accion.payload;
        },
        setMensajeModalCargando: function (state, accion) {
            state.mensajeModalCargando = accion.payload;
        },
        mostrarModalCargando: function (state, accion) {
            state.modalCargandoVisible = true;
            state.mensajeModalCargando = accion.payload;
        },
        ocultarModalCargando: function (state) {
            state.modalCargandoVisible = false;
            state.mensajeModalCargando = "Cargando ...";
        }
    }
});
//=================================================================
//      EXPORTACION DE LAS ACCIONES 
//=================================================================
export var setModalCargandoVisible = controlador.actions.setModalCargandoVisible;
export var setMensajeModalCargando = controlador.actions.setMensajeModalCargando;
export var mostrarModalCargando = controlador.actions.mostrarModalCargando;
export var ocultarModalCargando = controlador.actions.ocultarModalCargando;
// SE EXPORTA EL LA FUNCION REDUCTORA
export default controlador.reducer;
