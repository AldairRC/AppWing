//=====================================================
//  IMPORTACIONES GENERALES
//=====================================================
import React from 'react';
import { Navigate, Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import './App.css';
// redux
import store from './Redux/store';
import { Provider } from 'react-redux';
import { useReduxSelector, useReduxDispatch } from './Redux/hooks';
//=====================================================
//  IMPORTACIONES DE MIS COMPONENTES
//=====================================================
import PaginaAlmacenProductos from './Pages/Negocio/ListaProductos/PaginaAlmacenProductos';
import PaginaProducto from './Pages/Negocio/Producto/PaginaProducto';
import ModalCargando from './Components/ModalCargando/ModalCargando';
import PaginaMarca from './Pages/Negocio/Marca/PaginaMarca';
import PaginaCategorias from './Pages/Negocio/Categorias/PaginaCategorias';
//=====================================================
//  DEFINICION DEL COMPONENTE <App>
//=====================================================
var App = function (props) {
    return (React.createElement(Provider, { store: store },
        React.createElement(BrowserRouter, null,
            React.createElement(Rutas, null)),
        React.createElement(VentanaCargando, null)));
};
//=====================================================
//  DEFINICION DEL COMPONENTE <VentanaCargando>
//  ESTE COMPONENTE ALBERGA EL MODAL CARGANDO
//=====================================================
var VentanaCargando = function (props) {
    // hooks
    var stateReduxModal = useReduxSelector(function (state) { return state.controladorModal; });
    // html
    return (React.createElement(ModalCargando, { modalVisible: stateReduxModal.modalCargandoVisible, texto: stateReduxModal.mensajeModalCargando }));
};
//=====================================================
//  DEFINICION DEL COMPONENTE <Rutas>
// AQUI ESTARAN TODAS LAS PAGINAS DE LA APP
//=====================================================
var Rutas = function (props) {
    //_____________________________
    // USO DE LOS HOOKS
    //_____________________________
    var navigate = useNavigate();
    var stateReduxPaginacion = useReduxSelector(function (state) { return state.controladorPaginacion; });
    var stateReduxModal = useReduxSelector(function (state) { return state.controladorModal; });
    var stateReduxProducto = useReduxSelector(function (state) { return state.controladorProducto; });
    var dispatchRedux = useReduxDispatch();
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(PaginaAlmacenProductos, { navigate: navigate, stateReduxPaginacion: stateReduxPaginacion, stateReduxModal: stateReduxModal, stateReduxProducto: stateReduxProducto, dispatchRedux: dispatchRedux }) }),
        React.createElement(Route, { path: '/Categorias', element: React.createElement(PaginaCategorias, { navigate: navigate, stateReduxPaginacion: stateReduxPaginacion, stateReduxProducto: stateReduxProducto, stateReduxModal: stateReduxModal, dispatchRedux: dispatchRedux }) }),
        React.createElement(Route, { path: '/Marcas', element: React.createElement(PaginaMarca, { navigate: navigate, stateReduxPaginacion: stateReduxPaginacion, stateReduxProducto: stateReduxProducto, stateReduxModal: stateReduxModal, dispatchRedux: dispatchRedux }) }),
        React.createElement(Route, { path: '/Producto', element: React.createElement(PaginaProducto, { navigate: navigate, stateReduxPaginacion: stateReduxPaginacion, stateReduxModal: stateReduxModal, stateReduxProducto: stateReduxProducto, dispatchRedux: dispatchRedux }) }),
        React.createElement(Route, { path: '/MisProductos', element: React.createElement(PaginaAlmacenProductos, { navigate: navigate, stateReduxPaginacion: stateReduxPaginacion, stateReduxModal: stateReduxModal, stateReduxProducto: stateReduxProducto, dispatchRedux: dispatchRedux }) }),
        React.createElement(Route, { path: '*', element: React.createElement(Navigate, { to: '/' }) })));
};
export default App;
