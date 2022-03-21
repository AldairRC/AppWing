"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//=====================================================
//  IMPORTACIONES
//=====================================================
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
const App_1 = __importDefault(require("./App"));
//import reportWebVitals from './reportWebVitals' 
//=====================================================
//  RENDERIZADO DE LA APP
/*
    LA APP QUEDA ENVUELTA EN EL COMPONENTE "Provider"
    PARA QUE CUALQUIER COMPONENTE REACT PUEDA ACCEDER
    A LA "store" (DATOS GLOBALES DE LA APP)

    LA APP QUEDA ENVUELTA EN EL COMPONENTE "BrowserRouter"
    PARA QUE LA APLICACION SE MANEJE A TRAVES DE RUTAS URL
    DEFINIDAS EN EL COMPONENTE "App"
*/
//=====================================================
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(App_1.default, null)), document.getElementById('root'));
//reportWebVitals();
