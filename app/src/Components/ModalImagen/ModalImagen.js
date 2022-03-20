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
// iconos
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
// css
require("./ModalImagenMovil.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class ModalImagen extends react_1.default.Component {
    constructor(props) {
        super(props);
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        this.state =
            {};
    }
    renderizarBotonEliminar() {
        if (this.props.botonEliminarVisible == false)
            return (react_1.default.createElement("div", null));
        return (react_1.default.createElement(material_1.Button, { variant: 'text', className: "botonEliminar", onClick: (evento) => {
                this.props.accionEliminar();
            } }, "Eliminar"));
    }
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    render() {
        return (react_1.default.createElement(material_1.Modal, { className: 'modalImagen', open: this.props.modalVisible },
            react_1.default.createElement("div", { className: 'contenidoModal' },
                react_1.default.createElement("div", { className: (this.props.headerVisible) ? 'divHeader' : 'oculto' },
                    this.renderizarBotonEliminar(),
                    react_1.default.createElement(material_1.IconButton, { className: "iconoX", onClick: (evento) => { this.props.accionX(); } },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }))),
                react_1.default.createElement("img", { src: this.props.imagenURL, onClick: (evento) => { this.props.accionClickImagen(); } }))));
    }
}
exports.default = ModalImagen;
