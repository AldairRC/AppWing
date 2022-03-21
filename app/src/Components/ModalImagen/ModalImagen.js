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
import { Button, IconButton, Modal } from "@mui/material";
// iconos
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// css
import "./ModalImagenMovil.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var ModalImagen = /** @class */ (function (_super) {
    __extends(ModalImagen, _super);
    function ModalImagen(props) {
        var _this = _super.call(this, props) || this;
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        _this.state =
            {};
        return _this;
    }
    ModalImagen.prototype.renderizarBotonEliminar = function () {
        var _this = this;
        if (this.props.botonEliminarVisible == false)
            return (React.createElement("div", null));
        return (React.createElement(Button, { variant: 'text', className: "botonEliminar", onClick: function (evento) {
                _this.props.accionEliminar();
            } }, "Eliminar"));
    };
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    ModalImagen.prototype.render = function () {
        var _this = this;
        return (React.createElement(Modal, { className: 'modalImagen', open: this.props.modalVisible },
            React.createElement("div", { className: 'contenidoModal' },
                React.createElement("div", { className: (this.props.headerVisible) ? 'divHeader' : 'oculto' },
                    this.renderizarBotonEliminar(),
                    React.createElement(IconButton, { className: "iconoX", onClick: function (evento) { _this.props.accionX(); } },
                        React.createElement(FontAwesomeIcon, { icon: faTimes }))),
                React.createElement("img", { src: this.props.imagenURL, onClick: function (evento) { _this.props.accionClickImagen(); } }))));
    };
    return ModalImagen;
}(React.Component));
export default ModalImagen;
