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
import { Button, IconButton, Modal, TextField } from "@mui/material";
// iconos
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// utilerias
import Utilerias from "../../../Models/Utilerias";
// css
import "../../../CSS/TextField/TextField_E1.css";
import "./ModalFormulario.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var ModalFormulario = /** @class */ (function (_super) {
    __extends(ModalFormulario, _super);
    function ModalFormulario(props) {
        return _super.call(this, props) || this;
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================
        this.state =
        {
        } */
    }
    /*======================================================================================
                        FUNCIONALIDADES
    ========================================================================================*/
    ModalFormulario.prototype.corregirInputNombre = function () {
        var nombre = Utilerias.corregirTexto_quitarEspaciosEnBlanco(this.props.nuevoNombre);
        this.props.handleChange_inputNombre(nombre);
    };
    ModalFormulario.prototype.renderizarBotonesImagenCategoria = function () {
        var _this = this;
        var botonElegir = null;
        if (this.props.imagen == "") {
            botonElegir = (React.createElement(Button, { className: 'botonVerde', onClick: function (evento) {
                    var selector = document.createElement('input');
                    selector.type = "file";
                    selector.multiple = false;
                    selector.accept = "image/*";
                    selector.onchange = function (evento) { return _this.props.handleInputFile_imagen(selector); };
                    selector.click();
                } }, "Elegir Imagen"));
        }
        var botonEliminar = null;
        if (this.props.imagen != "") {
            botonEliminar = (React.createElement(Button, { className: 'botonRojo', onClick: function (evento) {
                    _this.props.handleClick_botonEliminarImagen();
                } }, "Eliminar Imagen"));
        }
        return (React.createElement("div", { className: 'divBotonesImagenCategoria' },
            botonElegir,
            botonEliminar));
    };
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    ModalFormulario.prototype.render = function () {
        var _this = this;
        return (React.createElement(Modal, { className: 'modalCategoriaFormulario', open: this.props.modalVisible },
            React.createElement("div", { className: 'contenidoModal' },
                React.createElement("div", { className: 'divHeader' },
                    React.createElement(Button, { className: "botonOK", onClick: function (evento) { _this.props.handleClick_botonOK(); } }, (this.props.ID_categoria == '') ? "Agregar Categoria" : "Guardar Cambios"),
                    React.createElement(IconButton, { className: "iconoX", onClick: function (evento) { _this.props.handleClick_X(); } },
                        React.createElement(FontAwesomeIcon, { icon: faTimes }))),
                React.createElement(TextField, { className: "TextField_E1 inputNombre", label: "Nombre", helperText: "", placeholder: (this.props.ID_categoria == "") ? "Nombre de la Categoria" : this.props.nombreOriginal, variant: "outlined", type: "text", required: true, value: this.props.nuevoNombre, onChange: function (evento) { return _this.props.handleChange_inputNombre(evento.target.value); }, inputProps: {
                        autoComplete: 'off'
                    }, onBlur: function (evento) { _this.corregirInputNombre(); }, onKeyDown: function (evento) { if (evento.key == "Tab")
                        evento.preventDefault(); } }),
                this.renderizarBotonesImagenCategoria(),
                React.createElement("img", { src: this.props.imagen }))));
    };
    return ModalFormulario;
}(React.Component));
export default ModalFormulario;
