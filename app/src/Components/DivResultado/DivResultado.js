"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//=====================================================
//  IMPORTACIONES GENERALES
//=====================================================
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
// css
require("./DivResultadoMovil.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class DivResultado extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    render() {
        if (this.props.visible) {
            return (react_1.default.createElement("div", { className: "DivResultado" },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: this.props.icono, className: "icono" }),
                react_1.default.createElement("label", null,
                    " ",
                    this.props.texto,
                    " ")));
        }
        else {
            return null;
        }
    }
}
exports.default = DivResultado;
