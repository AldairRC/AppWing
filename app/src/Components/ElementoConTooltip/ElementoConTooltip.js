"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classElementoConTooltip = void 0;
//=====================================================
//  IMPORTACIONES GENERALES
//=====================================================
const react_1 = __importDefault(require("react"));
// componentes MUI
const material_1 = require("@mui/material");
// componente icono
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
// css
require("./TooltipPersonalizado.css");
//=====================================================
//  CONSTANTES
//=====================================================
class classElementoConTooltip {
}
exports.classElementoConTooltip = classElementoConTooltip;
classElementoConTooltip.ELEMENTO_LABEL = 1;
classElementoConTooltip.ELEMENTO_ICONO = 2;
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class ElementoConTooltip extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipVisible: false
        };
    }
    renderizarTooltip() {
        return (react_1.default.createElement("div", { className: 'divContenido' },
            react_1.default.createElement("label", { className: 'titulo' },
                " ",
                this.props.tituloTooltip,
                " "),
            react_1.default.createElement("label", { className: 'descripcion' },
                " ",
                this.props.descripcionTooltip,
                " ")));
    }
    renderizarElemento() {
        // ELEMENTO_LABEL SE TOMA COMO DEFAULT
        let item = (react_1.default.createElement("div", { className: this.props.CSS, onClick: (evento) => { this.mostrarTooltip(true); } }, this.props.texto));
        switch (this.props.tipoElemento) {
            case classElementoConTooltip.ELEMENTO_ICONO:
                item = (react_1.default.createElement("div", { className: this.props.CSS, onClick: (evento) => { this.mostrarTooltip(true); } },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: this.props.icono })));
                break;
        }
        return item;
    }
    mostrarTooltip(visible) {
        this.setState(Object.assign(Object.assign({}, this.state), { tooltipVisible: visible }));
    }
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    render() {
        return (react_1.default.createElement(material_1.ClickAwayListener, { onClickAway: (evento) => this.mostrarTooltip(false) },
            react_1.default.createElement(material_1.Tooltip, { title: this.renderizarTooltip(), TransitionComponent: material_1.Zoom, arrow: true, enterDelay: 500, leaveDelay: 500, disableFocusListener: true, disableHoverListener: true, disableTouchListener: true, open: this.state.tooltipVisible }, this.renderizarElemento())));
    }
}
exports.default = ElementoConTooltip;
