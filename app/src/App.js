"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//=====================================================
//  IMPORTACIONES GENERALES
//=====================================================
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
// redux
const store_1 = __importDefault(require("./Redux/store"));
const react_redux_1 = require("react-redux");
const hooks_1 = require("./Redux/hooks");
//=====================================================
//  IMPORTACIONES DE MIS COMPONENTES
//=====================================================
const PaginaAlmacenProductos_1 = __importDefault(require("./Pages/Negocio/ListaProductos/PaginaAlmacenProductos"));
const PaginaProducto_1 = __importDefault(require("./Pages/Negocio/Producto/PaginaProducto"));
const ModalCargando_1 = __importDefault(require("./Components/ModalCargando/ModalCargando"));
const PaginaMarca_1 = __importDefault(require("./Pages/Negocio/Marca/PaginaMarca"));
const PaginaCategorias_1 = __importDefault(require("./Pages/Negocio/Categorias/PaginaCategorias"));
//=====================================================
//  DEFINICION DEL COMPONENTE <App>
//=====================================================
const App = (props) => {
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(Rutas, null)),
        react_1.default.createElement(VentanaCargando, null)));
};
//=====================================================
//  DEFINICION DEL COMPONENTE <VentanaCargando>
//  ESTE COMPONENTE ALBERGA EL MODAL CARGANDO
//=====================================================
const VentanaCargando = (props) => {
    // hooks
    const stateReduxModal = (0, hooks_1.useReduxSelector)(state => state.controladorModal);
    // html
    return (react_1.default.createElement(ModalCargando_1.default, { modalVisible: stateReduxModal.modalCargandoVisible, texto: stateReduxModal.mensajeModalCargando }));
};
//=====================================================
//  DEFINICION DEL COMPONENTE <Rutas>
// AQUI ESTARAN TODAS LAS PAGINAS DE LA APP
//=====================================================
const Rutas = (props) => {
    //_____________________________
    // USO DE LOS HOOKS
    //_____________________________
    const navigate = (0, react_router_dom_1.useNavigate)();
    const stateReduxPaginacion = (0, hooks_1.useReduxSelector)(state => state.controladorPaginacion);
    const stateReduxModal = (0, hooks_1.useReduxSelector)(state => state.controladorModal);
    const stateReduxProducto = (0, hooks_1.useReduxSelector)(state => state.controladorProducto);
    const dispatchRedux = (0, hooks_1.useReduxDispatch)();
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(PaginaAlmacenProductos_1.default, { navigate: navigate, stateReduxPaginacion: stateReduxPaginacion, stateReduxModal: stateReduxModal, stateReduxProducto: stateReduxProducto, dispatchRedux: dispatchRedux }) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/Categorias', element: react_1.default.createElement(PaginaCategorias_1.default, { navigate: navigate, stateReduxPaginacion: stateReduxPaginacion, stateReduxProducto: stateReduxProducto, stateReduxModal: stateReduxModal, dispatchRedux: dispatchRedux }) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/Marcas', element: react_1.default.createElement(PaginaMarca_1.default, { navigate: navigate, stateReduxPaginacion: stateReduxPaginacion, stateReduxProducto: stateReduxProducto, stateReduxModal: stateReduxModal, dispatchRedux: dispatchRedux }) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/Producto', element: react_1.default.createElement(PaginaProducto_1.default, { navigate: navigate, stateReduxPaginacion: stateReduxPaginacion, stateReduxModal: stateReduxModal, stateReduxProducto: stateReduxProducto, dispatchRedux: dispatchRedux }) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/MisProductos', element: react_1.default.createElement(PaginaAlmacenProductos_1.default, { navigate: navigate, stateReduxPaginacion: stateReduxPaginacion, stateReduxModal: stateReduxModal, stateReduxProducto: stateReduxProducto, dispatchRedux: dispatchRedux }) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/' }) })));
};
exports.default = App;
