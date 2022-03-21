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
import { Modal } from "@mui/material";
// logo
import logo from "../../RECURSOS/Imagenes/logo.png";
// css
import "./ModalCargandoMovil.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var ModalCargando = /** @class */ (function (_super) {
    __extends(ModalCargando, _super);
    function ModalCargando(props) {
        return _super.call(this, props) || this;
    }
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    ModalCargando.prototype.render = function () {
        return (React.createElement(Modal, { className: "modalCargando", open: this.props.modalVisible },
            React.createElement("div", { className: "contenidoModal" },
                React.createElement("img", { src: logo }),
                React.createElement("label", null,
                    " ",
                    this.props.texto,
                    " "))));
    };
    return ModalCargando;
}(React.Component));
export default ModalCargando;
