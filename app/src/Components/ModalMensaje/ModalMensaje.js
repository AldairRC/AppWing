var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//=====================================================
//  IMPORTACIONES GENERALES
//=====================================================
import React from 'react';
// componentes MUI
import { Button, Modal } from "@mui/material";
// iconos
import { faTimesCircle, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// css
import "./ModalMensaje.css";
//=====================================================
//  INTERFACES
//=====================================================
export var MENSAJE_CORRECTO = 1;
export var MENSAJE_ERROR = 2;
export var MENSAJE_PREGUNTA = 3;
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var ModalMensaje = /** @class */ (function (_super) {
    __extends(ModalMensaje, _super);
    function ModalMensaje(props) {
        return _super.call(this, props) || this;
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================
        this.state =
        {
        } */
    }
    ModalMensaje.prototype.renderizarIcono = function () {
        var divTipoMensaje = "";
        var divIcono = "";
        var icono;
        switch (this.props.tipo) {
            case MENSAJE_CORRECTO:
                divTipoMensaje = "divTipoMensaje divTipoMensaje_verde";
                divIcono = "divIcono divIcono_verde";
                icono = faCheckCircle;
                break;
            case MENSAJE_ERROR:
                divTipoMensaje = "divTipoMensaje divTipoMensaje_rojo";
                divIcono = "divIcono divIcono_rojo";
                icono = faTimesCircle;
                break;
            default:
                divTipoMensaje = "divTipoMensaje divTipoMensaje_azul";
                divIcono = "divIcono divIcono_azul";
                icono = faExclamationCircle;
                break;
        }
        return (React.createElement("div", { className: divTipoMensaje },
            React.createElement("div", { className: divIcono },
                React.createElement(FontAwesomeIcon, { icon: icono }))));
    };
    ModalMensaje.prototype.renderizarTitulo = function () {
        var labelTitulo = "";
        switch (this.props.tipo) {
            case MENSAJE_CORRECTO:
                labelTitulo = "labelTitulo labelTitulo_verde";
                break;
            case MENSAJE_ERROR:
                labelTitulo = "labelTitulo labelTitulo_rojo";
                break;
            default:
                labelTitulo = "labelTitulo labelTitulo_azul";
                break;
        }
        return (React.createElement("label", { className: labelTitulo }, this.props.titulo));
    };
    ModalMensaje.prototype.renderizarBotonAceptar = function () {
        var _this = this;
        if (this.props.tipo == MENSAJE_PREGUNTA)
            return null;
        var botonAceptarCSS = "";
        switch (this.props.tipo) {
            case MENSAJE_CORRECTO:
                botonAceptarCSS = "boton botonVerde";
                break;
            case MENSAJE_ERROR:
                botonAceptarCSS = "boton botonRojo";
                break;
            default:
                botonAceptarCSS = "boton botonAzul";
                break;
        }
        return (React.createElement(Button, { className: botonAceptarCSS, onClick: function (evento) { _this.props.handleClick_botonAceptar(); } }, "Aceptar"));
    };
    ModalMensaje.prototype.renderizarBotonNO = function () {
        var _this = this;
        if (this.props.tipo != MENSAJE_PREGUNTA)
            return null;
        return (React.createElement(Button, { className: 'boton botonRojo', onClick: function (evento) { _this.props.handleClick_botonNO(); } }, "No"));
    };
    ModalMensaje.prototype.renderizarBotonSI = function () {
        var _this = this;
        if (this.props.tipo != MENSAJE_PREGUNTA)
            return null;
        return (React.createElement(Button, { className: 'boton botonVerde', onClick: function (evento) { _this.props.handleClick_botonSI(); } }, "Si"));
    };
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    ModalMensaje.prototype.render = function () {
        return (React.createElement(Modal, { className: 'modalMensaje', open: this.props.modalVisible },
            React.createElement("div", { className: 'contenidoModal' },
                this.renderizarIcono(),
                this.renderizarTitulo(),
                React.createElement("label", { className: 'labelDescripcion' }, this.props.descripcion),
                React.createElement("div", { className: 'divBotones' },
                    this.renderizarBotonAceptar(),
                    this.renderizarBotonNO(),
                    this.renderizarBotonSI()))));
    };
    return ModalMensaje;
}(React.Component));
export default ModalMensaje;
