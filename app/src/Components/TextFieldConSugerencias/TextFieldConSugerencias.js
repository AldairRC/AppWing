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
// css
require("./TextFieldConSugerenciasMovil.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class TextFieldConSugerencias extends react_1.default.Component {
    constructor(props) {
        super(props);
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        this.state =
            {
                valorAutocomplete: null
            };
    }
    //==========================================================================
    //                      LOGICA DE LA PAGINA
    //===========================================================================
    handleChange_input(nuevoValor) {
        let nuevoValorAutocomplete = this.state.valorAutocomplete;
        if (nuevoValorAutocomplete != null && nuevoValor != nuevoValorAutocomplete.label) {
            nuevoValorAutocomplete = null;
        }
        this.props.handleChange_valorInput(nuevoValor);
        this.setState((STATE, PROPS) => {
            return {
                valorAutocomplete: nuevoValorAutocomplete
            };
        });
    }
    //=======================================================================
    //                  DEFINICION DEL HTML
    //=======================================================================
    render() {
        //ref={ this.props.refTextField } value={""}
        return (react_1.default.createElement("div", { className: "InputTextoConSugerencia " + this.props.CSS },
            react_1.default.createElement(material_1.Autocomplete, { freeSolo: true, options: this.props.sugerencias, groupBy: (opcion) => opcion.categoria, getOptionLabel: (opcion) => opcion.label, inputValue: this.props.valorInput, value: this.state.valorAutocomplete, onInputChange: (evento, nuevoValor) => { this.handleChange_input(nuevoValor); }, onChange: (evento, nuevoValor) => {
                    this.setState((STATE, PROPS) => {
                        return {
                            valorAutocomplete: nuevoValor
                        };
                    });
                }, renderInput: (params) => {
                    return (react_1.default.createElement(material_1.TextField, Object.assign({}, params, { className: "TextField_E1", label: this.props.titulo, error: this.props.inputError, required: this.props.esRequerido, autoComplete: 'off', placeholder: this.props.textoPredeterminado })));
                }, renderOption: (props, opcion) => (react_1.default.createElement("li", Object.assign({ key: opcion.key }, props), opcion.label)), PaperComponent: ({ children }) => (react_1.default.createElement(material_1.Paper, { className: "comboInputSugerencia" },
                    " ",
                    children,
                    " ")), onKeyDown: (evento) => { this.props.handleEvento_keyDown(evento); }, onBlur: (evento) => { this.props.handleEvento_focusPerdido(); } }),
            this.props.componenteAyuda));
    }
}
exports.default = TextFieldConSugerencias;
