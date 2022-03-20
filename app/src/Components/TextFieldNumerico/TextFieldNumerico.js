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
// UTILERIAS
const Utilerias_1 = __importDefault(require("../../Models/Utilerias"));
// css
require("./TextFieldNumerico.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class TextFieldNumerico extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.inputHTML = react_1.default.createRef();
        this.caretPosicion = 0;
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        this.valorInputAnterior = this.props.valorInput;
    }
    componentDidUpdate(prevProps, prevState) {
        // ESTABLECER POSICION DEL CARET
        let offsetCaret = this.props.valorInput.length - this.valorInputAnterior.length;
        let nuevaPosCaret = this.caretPosicion + offsetCaret;
        this.setCaretPosicion(nuevaPosCaret);
        //console.log( "Nueva Posicion Caret: " + nuevaPosCaret )
    }
    //==========================================================================
    //                      LOGICA DE LA PAGINA
    //===========================================================================
    getNumero(numero) {
        let num = "";
        let digitos = "0123456789";
        for (let i = 0; i < numero.length; i++) {
            let caracter = numero.charAt(i);
            if (digitos.indexOf(caracter) != -1)
                num += caracter;
        }
        return num;
    }
    setCaretPosicion(posicion) {
        if ((this.inputHTML != null && this.inputHTML != undefined) &&
            (this.inputHTML.current.selectionStart || this.inputHTML.current.selectionStart === 0)) {
            //this.inputHTML.current.focus()
            this.inputHTML.current.setSelectionRange(posicion, posicion);
        }
    }
    handleInputChange(inputHTML) {
        //console.log( "Numero Inicial: " + nuevoNumero )
        let numeroSinComas = this.getNumero(inputHTML.target.value);
        //console.log( "Numero Sin Comas: " + numeroSinComas )
        // LIMITAR DIGITOS AL MAXIMO PERMITIDO
        if (numeroSinComas.length > this.props.maxCantidadDigitos) {
            this.forceUpdate();
            return;
        }
        // AGREGAR COMAS
        let numeroConComas = Utilerias_1.default.getNumeroConComas(numeroSinComas);
        //console.log( "Numero Con Comas : " + numeroConComas )
        // ACTUALIZAR INPUT
        this.props.handleValorInput(numeroConComas);
    }
    handleKeyDown(evento) {
        //console.log( "Key: " + evento.key )
        let digitos = "0123456789";
        let caracteresEspeciales = ["ArrowRight", "ArrowLeft", "Backspace"];
        if (caracteresEspeciales.find((teclaESP) => teclaESP == evento.key) == undefined &&
            digitos.indexOf(evento.key) == -1) {
            evento.preventDefault();
        }
        else {
            this.caretPosicion = this.inputHTML.current.selectionStart;
            this.valorInputAnterior = this.props.valorInput;
            //console.log( "\ncaret posicion: " + this.caretPosicion )
        }
    }
    //=======================================================================
    //                  DEFINICION DEL HTML
    //=======================================================================
    render() {
        //ref={ this.props.refTextField } value={""}
        //console.log( "render ..." )
        return (react_1.default.createElement(material_1.TextField, { className: this.props.clasesCSS, inputRef: this.inputHTML, label: this.props.titulo, helperText: this.props.textoAdicional, placeholder: this.props.textoPredeterminado, variant: "outlined", type: "text", required: true, autoComplete: 'off', disabled: this.props.bloqueado, inputProps: {
                inputMode: 'numeric',
                pattern: '[0-9]*',
                size: this.props.maxCantidadCaracteres
            }, value: this.props.valorInput, onChange: (evento) => { this.handleInputChange(evento); }, onKeyDown: (evento) => { this.handleKeyDown(evento); } }));
    }
}
exports.default = TextFieldNumerico;
