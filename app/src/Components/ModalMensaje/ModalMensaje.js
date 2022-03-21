"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MENSAJE_PREGUNTA = exports.MENSAJE_ERROR = exports.MENSAJE_CORRECTO = void 0;
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
require("./ModalMensaje.css");
//=====================================================
//  INTERFACES
//=====================================================
exports.MENSAJE_CORRECTO = 1;
exports.MENSAJE_ERROR = 2;
exports.MENSAJE_PREGUNTA = 3;
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class ModalMensaje extends react_1.default.Component {
    constructor(props) {
        super(props);
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================
        this.state =
        {
        } */
    }
    renderizarIcono() {
        let divTipoMensaje = "";
        let divIcono = "";
        let icono;
        switch (this.props.tipo) {
            case exports.MENSAJE_CORRECTO:
                divTipoMensaje = "divTipoMensaje divTipoMensaje_verde";
                divIcono = "divIcono divIcono_verde";
                icono = free_solid_svg_icons_1.faCheckCircle;
                break;
            case exports.MENSAJE_ERROR:
                divTipoMensaje = "divTipoMensaje divTipoMensaje_rojo";
                divIcono = "divIcono divIcono_rojo";
                icono = free_solid_svg_icons_1.faTimesCircle;
                break;
            default:
                divTipoMensaje = "divTipoMensaje divTipoMensaje_azul";
                divIcono = "divIcono divIcono_azul";
                icono = free_solid_svg_icons_1.faExclamationCircle;
                break;
        }
        return (react_1.default.createElement("div", { className: divTipoMensaje },
            react_1.default.createElement("div", { className: divIcono },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icono }))));
    }
    renderizarTitulo() {
        let labelTitulo = "";
        switch (this.props.tipo) {
            case exports.MENSAJE_CORRECTO:
                labelTitulo = "labelTitulo labelTitulo_verde";
                break;
            case exports.MENSAJE_ERROR:
                labelTitulo = "labelTitulo labelTitulo_rojo";
                break;
            default:
                labelTitulo = "labelTitulo labelTitulo_azul";
                break;
        }
        return (react_1.default.createElement("label", { className: labelTitulo }, this.props.titulo));
    }
    renderizarBotonAceptar() {
        if (this.props.tipo == exports.MENSAJE_PREGUNTA)
            return null;
        let botonAceptarCSS = "";
        switch (this.props.tipo) {
            case exports.MENSAJE_CORRECTO:
                botonAceptarCSS = "boton botonVerde";
                break;
            case exports.MENSAJE_ERROR:
                botonAceptarCSS = "boton botonRojo";
                break;
            default:
                botonAceptarCSS = "boton botonAzul";
                break;
        }
        return (react_1.default.createElement(material_1.Button, { className: botonAceptarCSS, onClick: (evento) => { this.props.handleClick_botonAceptar(); } }, "Aceptar"));
    }
    renderizarBotonNO() {
        if (this.props.tipo != exports.MENSAJE_PREGUNTA)
            return null;
        return (react_1.default.createElement(material_1.Button, { className: 'boton botonRojo', onClick: (evento) => { this.props.handleClick_botonNO(); } }, "No"));
    }
    renderizarBotonSI() {
        if (this.props.tipo != exports.MENSAJE_PREGUNTA)
            return null;
        return (react_1.default.createElement(material_1.Button, { className: 'boton botonVerde', onClick: (evento) => { this.props.handleClick_botonSI(); } }, "Si"));
    }
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    render() {
        return (react_1.default.createElement(material_1.Modal, { className: 'modalMensaje', open: this.props.modalVisible },
            react_1.default.createElement("div", { className: 'contenidoModal' },
                this.renderizarIcono(),
                this.renderizarTitulo(),
                react_1.default.createElement("label", { className: 'labelDescripcion' }, this.props.descripcion),
                react_1.default.createElement("div", { className: 'divBotones' },
                    this.renderizarBotonAceptar(),
                    this.renderizarBotonNO(),
                    this.renderizarBotonSI()))));
    }
}
exports.default = ModalMensaje;
