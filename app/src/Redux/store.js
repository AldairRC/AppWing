//=====================================================
//  IMPORTACIONES
//=====================================================
import { configureStore } from '@reduxjs/toolkit';
import controladorPaginacion from "./Controladores/controladorPaginacion";
import controladorModal from "./Controladores/controladorModal";
import controladorProducto from "./Controladores/controladorProducto";
//=====================================================
//  CREACION DEL "store" (DATOS GLOBALES)
//=====================================================
var store = configureStore({
    reducer: {
        controladorPaginacion: controladorPaginacion,
        controladorModal: controladorModal,
        controladorProducto: controladorProducto
    }
});
export default store;
