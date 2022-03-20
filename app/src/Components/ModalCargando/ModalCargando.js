"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//=====================================================
//  IMPORTACIONES GENERALES
//=====================================================
const react_1 = __importDefault(require("react"));
// componentes MUI
const material_1 = require("@mui/material");
// logo
const logo_png_1 = __importDefault(require("../../RECURSOS/Imagenes/logo.png"));
// css
require("./ModalCargandoMovil.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class ModalCargando extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    render() {
        return (react_1.default.createElement(material_1.Modal, { className: "modalCargando", open: this.props.modalVisible },
            react_1.default.createElement("div", { className: "contenidoModal" },
                react_1.default.createElement("img", { src: logo_png_1.default }),
                react_1.default.createElement("label", null,
                    " ",
                    this.props.texto,
                    " "))));
    }
}
exports.default = ModalCargando;
