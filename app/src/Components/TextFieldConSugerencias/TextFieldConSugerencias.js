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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//=====================================================
//  IMPORTACIONES GENERALES
//=====================================================
import React from 'react';
// componentes MUI
import { TextField, Autocomplete, Paper } from "@mui/material";
// css
import "./TextFieldConSugerenciasMovil.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var TextFieldConSugerencias = /** @class */ (function (_super) {
    __extends(TextFieldConSugerencias, _super);
    function TextFieldConSugerencias(props) {
        var _this = _super.call(this, props) || this;
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        _this.state =
            {
                valorAutocomplete: null
            };
        return _this;
    }
    //==========================================================================
    //                      LOGICA DE LA PAGINA
    //===========================================================================
    TextFieldConSugerencias.prototype.handleChange_input = function (nuevoValor) {
        var nuevoValorAutocomplete = this.state.valorAutocomplete;
        if (nuevoValorAutocomplete != null && nuevoValor != nuevoValorAutocomplete.label) {
            nuevoValorAutocomplete = null;
        }
        this.props.handleChange_valorInput(nuevoValor);
        this.setState(function (STATE, PROPS) {
            return {
                valorAutocomplete: nuevoValorAutocomplete
            };
        });
    };
    //=======================================================================
    //                  DEFINICION DEL HTML
    //=======================================================================
    TextFieldConSugerencias.prototype.render = function () {
        var _this = this;
        //ref={ this.props.refTextField } value={""}
        return (React.createElement("div", { className: "InputTextoConSugerencia " + this.props.CSS },
            React.createElement(Autocomplete, { freeSolo: true, options: this.props.sugerencias, groupBy: function (opcion) { return opcion.categoria; }, getOptionLabel: function (opcion) { return opcion.label; }, inputValue: this.props.valorInput, value: this.state.valorAutocomplete, onInputChange: function (evento, nuevoValor) { _this.handleChange_input(nuevoValor); }, onChange: function (evento, nuevoValor) {
                    _this.setState(function (STATE, PROPS) {
                        return {
                            valorAutocomplete: nuevoValor
                        };
                    });
                }, renderInput: function (params) {
                    return (React.createElement(TextField, __assign({}, params, { className: "TextField_E1", label: _this.props.titulo, error: _this.props.inputError, required: _this.props.esRequerido, autoComplete: 'off', placeholder: _this.props.textoPredeterminado })));
                }, renderOption: function (props, opcion) { return (React.createElement("li", __assign({ key: opcion.key }, props), opcion.label)); }, PaperComponent: function (_a) {
                    var children = _a.children;
                    return (React.createElement(Paper, { className: "comboInputSugerencia" },
                        " ",
                        children,
                        " "));
                }, onKeyDown: function (evento) { _this.props.handleEvento_keyDown(evento); }, onBlur: function (evento) { _this.props.handleEvento_focusPerdido(); } }),
            this.props.componenteAyuda));
    };
    return TextFieldConSugerencias;
}(React.Component));
export default TextFieldConSugerencias;
