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
import { TextField } from "@mui/material";
// UTILERIAS
import Utilerias from "../../Models/Utilerias";
// css
import "./TextFieldNumerico.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var TextFieldNumerico = /** @class */ (function (_super) {
    __extends(TextFieldNumerico, _super);
    function TextFieldNumerico(props) {
        var _this = _super.call(this, props) || this;
        _this.inputHTML = React.createRef();
        _this.caretPosicion = 0;
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        _this.valorInputAnterior = _this.props.valorInput;
        return _this;
    }
    TextFieldNumerico.prototype.componentDidUpdate = function (prevProps, prevState) {
        // ESTABLECER POSICION DEL CARET
        var offsetCaret = this.props.valorInput.length - this.valorInputAnterior.length;
        var nuevaPosCaret = this.caretPosicion + offsetCaret;
        this.setCaretPosicion(nuevaPosCaret);
        //console.log( "Nueva Posicion Caret: " + nuevaPosCaret )
    };
    //==========================================================================
    //                      LOGICA DE LA PAGINA
    //===========================================================================
    TextFieldNumerico.prototype.getNumero = function (numero) {
        var num = "";
        var digitos = "0123456789";
        for (var i = 0; i < numero.length; i++) {
            var caracter = numero.charAt(i);
            if (digitos.indexOf(caracter) != -1)
                num += caracter;
        }
        return num;
    };
    TextFieldNumerico.prototype.setCaretPosicion = function (posicion) {
        if ((this.inputHTML != null && this.inputHTML != undefined) &&
            (this.inputHTML.current.selectionStart || this.inputHTML.current.selectionStart === 0)) {
            //this.inputHTML.current.focus()
            this.inputHTML.current.setSelectionRange(posicion, posicion);
        }
    };
    TextFieldNumerico.prototype.handleInputChange = function (inputHTML) {
        //console.log( "Numero Inicial: " + nuevoNumero )
        var numeroSinComas = this.getNumero(inputHTML.target.value);
        //console.log( "Numero Sin Comas: " + numeroSinComas )
        // LIMITAR DIGITOS AL MAXIMO PERMITIDO
        if (numeroSinComas.length > this.props.maxCantidadDigitos) {
            this.forceUpdate();
            return;
        }
        // AGREGAR COMAS
        var numeroConComas = Utilerias.getNumeroConComas(numeroSinComas);
        //console.log( "Numero Con Comas : " + numeroConComas )
        // ACTUALIZAR INPUT
        this.props.handleValorInput(numeroConComas);
    };
    TextFieldNumerico.prototype.handleKeyDown = function (evento) {
        //console.log( "Key: " + evento.key )
        var digitos = "0123456789";
        var caracteresEspeciales = ["ArrowRight", "ArrowLeft", "Backspace"];
        if (caracteresEspeciales.find(function (teclaESP) { return teclaESP == evento.key; }) == undefined &&
            digitos.indexOf(evento.key) == -1) {
            evento.preventDefault();
        }
        else {
            this.caretPosicion = this.inputHTML.current.selectionStart;
            this.valorInputAnterior = this.props.valorInput;
            //console.log( "\ncaret posicion: " + this.caretPosicion )
        }
    };
    //=======================================================================
    //                  DEFINICION DEL HTML
    //=======================================================================
    TextFieldNumerico.prototype.render = function () {
        var _this = this;
        //ref={ this.props.refTextField } value={""}
        //console.log( "render ..." )
        return (React.createElement(TextField, { className: this.props.clasesCSS, inputRef: this.inputHTML, label: this.props.titulo, helperText: this.props.textoAdicional, placeholder: this.props.textoPredeterminado, variant: "outlined", type: "text", required: true, autoComplete: 'off', disabled: this.props.bloqueado, inputProps: {
                inputMode: 'numeric',
                pattern: '[0-9]*',
                size: this.props.maxCantidadCaracteres
            }, value: this.props.valorInput, onChange: function (evento) { _this.handleInputChange(evento); }, onKeyDown: function (evento) { _this.handleKeyDown(evento); } }));
    };
    return TextFieldNumerico;
}(React.Component));
export default TextFieldNumerico;
