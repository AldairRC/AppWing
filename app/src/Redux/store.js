"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//=====================================================
//  IMPORTACIONES
//=====================================================
const toolkit_1 = require("@reduxjs/toolkit");
const controladorPaginacion_1 = __importDefault(require("./Controladores/controladorPaginacion"));
const controladorModal_1 = __importDefault(require("./Controladores/controladorModal"));
const controladorProducto_1 = __importDefault(require("./Controladores/controladorProducto"));
//=====================================================
//  CREACION DEL "store" (DATOS GLOBALES)
//=====================================================
const store = (0, toolkit_1.configureStore)({
    reducer: {
        controladorPaginacion: controladorPaginacion_1.default,
        controladorModal: controladorModal_1.default,
        controladorProducto: controladorProducto_1.default
    }
});
exports.default = store;
