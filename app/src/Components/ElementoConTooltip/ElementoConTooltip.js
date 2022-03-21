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
import { Tooltip, Zoom, ClickAwayListener } from '@mui/material';
// componente icono
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// css
import './TooltipPersonalizado.css';
//=====================================================
//  CONSTANTES
//=====================================================
var classElementoConTooltip = /** @class */ (function () {
    function classElementoConTooltip() {
    }
    classElementoConTooltip.ELEMENTO_LABEL = 1;
    classElementoConTooltip.ELEMENTO_ICONO = 2;
    return classElementoConTooltip;
}());
export { classElementoConTooltip };
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var ElementoConTooltip = /** @class */ (function (_super) {
    __extends(ElementoConTooltip, _super);
    function ElementoConTooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            tooltipVisible: false
        };
        return _this;
    }
    ElementoConTooltip.prototype.renderizarTooltip = function () {
        return (React.createElement("div", { className: 'divContenido' },
            React.createElement("label", { className: 'titulo' },
                " ",
                this.props.tituloTooltip,
                " "),
            React.createElement("label", { className: 'descripcion' },
                " ",
                this.props.descripcionTooltip,
                " ")));
    };
    ElementoConTooltip.prototype.renderizarElemento = function () {
        var _this = this;
        // ELEMENTO_LABEL SE TOMA COMO DEFAULT
        var item = (React.createElement("div", { className: this.props.CSS, onClick: function (evento) { _this.mostrarTooltip(true); } }, this.props.texto));
        switch (this.props.tipoElemento) {
            case classElementoConTooltip.ELEMENTO_ICONO:
                item = (React.createElement("div", { className: this.props.CSS, onClick: function (evento) { _this.mostrarTooltip(true); } },
                    React.createElement(FontAwesomeIcon, { icon: this.props.icono })));
                break;
        }
        return item;
    };
    ElementoConTooltip.prototype.mostrarTooltip = function (visible) {
        this.setState(__assign(__assign({}, this.state), { tooltipVisible: visible }));
    };
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    ElementoConTooltip.prototype.render = function () {
        var _this = this;
        return (React.createElement(ClickAwayListener, { onClickAway: function (evento) { return _this.mostrarTooltip(false); } },
            React.createElement(Tooltip, { title: this.renderizarTooltip(), TransitionComponent: Zoom, arrow: true, enterDelay: 500, leaveDelay: 500, disableFocusListener: true, disableHoverListener: true, disableTouchListener: true, open: this.state.tooltipVisible }, this.renderizarElemento())));
    };
    return ElementoConTooltip;
}(React.Component));
export default ElementoConTooltip;
