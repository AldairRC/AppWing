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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// css
import "./DivResultadoMovil.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var DivResultado = /** @class */ (function (_super) {
    __extends(DivResultado, _super);
    function DivResultado(props) {
        return _super.call(this, props) || this;
    }
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    DivResultado.prototype.render = function () {
        if (this.props.visible) {
            return (React.createElement("div", { className: "DivResultado" },
                React.createElement(FontAwesomeIcon, { icon: this.props.icono, className: "icono" }),
                React.createElement("label", null,
                    " ",
                    this.props.texto,
                    " ")));
        }
        else {
            return null;
        }
    };
    return DivResultado;
}(React.Component));
export default DivResultado;
