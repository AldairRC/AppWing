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
import { SwipeableDrawer, Button, IconButton, Tooltip, Zoom, ClickAwayListener } from '@mui/material';
// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faChevronUp, faChevronLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// css
import './EncabezadoMovil.css';
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var Encabezado = /** @class */ (function (_super) {
    __extends(Encabezado, _super);
    function Encabezado(props) {
        var _this = _super.call(this, props) || this;
        _this.state =
            {
                menuPrincipalVisible: false,
                menuOpcionesVisible: false,
                tooltipTituloVisible: false,
                itemMenuP_seleccionado: _this.props.itemsMenuPrincipal.find(function (item) { return _this.props.itemMenuP_seleccionado == item.texto; }),
                itemMenuOp_seleccionado: _this.props.itemsMenuOpciones.find(function (item) { return _this.props.itemMenuOp_seleccionado == item.texto; })
            };
        return _this;
    }
    /*======================================
        METODO QUE RENDERIZA EL BOTON
        DEL MENU PRINCIPAL
    //======================================*/
    Encabezado.prototype.renderizarBotonMenuPrincipal = function () {
        var _this = this;
        var icono = null;
        if (this.state.itemMenuP_seleccionado != undefined) {
            icono = this.state.itemMenuP_seleccionado.icono;
        }
        if (this.props.habilitar_MenuPrincipal == false)
            return null;
        return (React.createElement(IconButton, { className: 'iconoMenu', onClick: function (evento) { return _this.mostrarMenuLateralPrincipal(true); } },
            React.createElement(FontAwesomeIcon, { icon: icono })));
    };
    //======================================
    //  METODO QUE RENDERIZA EL MENU PRINCIPAL
    //======================================
    Encabezado.prototype.renderizarMenuPrincipal = function () {
        var _this = this;
        if (this.props.habilitar_MenuPrincipal == false)
            return null;
        var noBorde = { border: 'none' };
        var styleVacio = {};
        return (React.createElement(SwipeableDrawer, { anchor: "left", className: "menuLateralPrincipal", open: this.state.menuPrincipalVisible, onClose: function (evento) { _this.mostrarMenuLateralPrincipal(false); }, onOpen: function (evento) { _this.mostrarMenuLateralPrincipal(true); } },
            React.createElement("div", { className: "divMenu" },
                " ",
                this.props.itemsMenuPrincipal.map(function (item, index) {
                    return (React.createElement(Button, { className: (item.texto == _this.props.itemMenuP_seleccionado) ? "item itemSeleccionado" : "item", variant: "text", style: (index + 1 == _this.props.itemsMenuPrincipal.length) ? noBorde : styleVacio, key: "itemMenuP-" + index, startIcon: React.createElement(FontAwesomeIcon, { icon: item.icono }), onClick: function (evento) { return item.accion(); } },
                        React.createElement("label", null,
                            " ",
                            item.texto,
                            " ")));
                }),
                " "),
            React.createElement(IconButton, { className: 'iconoCerrarMenuLateral', onClick: function (evento) { return _this.mostrarMenuLateralPrincipal(false); } },
                React.createElement(FontAwesomeIcon, { icon: faChevronLeft }))));
    };
    /*======================================
        METODO PARA RENDERIZAR EL BOTON
        DEL MENU DE OPCIONES
    //======================================*/
    Encabezado.prototype.renderizarBotonMenuOpciones = function () {
        var _this = this;
        if (this.props.habilitar_MenuOpciones == false)
            return null;
        return (React.createElement(IconButton, { className: "iconoOpciones", onClick: function (evento) { return _this.mostrarMenuLateralOpciones(true); } },
            React.createElement(FontAwesomeIcon, { icon: faEllipsisV })));
    };
    /*======================================
        METODO PARA RENDERIZAR EL MENU
        LATERAL DE OPCIONES
    ======================================*/
    Encabezado.prototype.renderizarMenuOpciones = function () {
        var _this = this;
        var noBorde = { border: 'none' };
        var styleVacio = {};
        if (this.props.habilitar_MenuOpciones == false)
            return null;
        return (React.createElement(SwipeableDrawer, { anchor: "top", className: "menuLateralOpciones", open: this.state.menuOpcionesVisible, onClose: function (evento) { _this.mostrarMenuLateralOpciones(false); }, onOpen: function (evento) { _this.mostrarMenuLateralOpciones(true); } },
            React.createElement("div", { className: "divMenu" },
                // BOTONES ITEMS
                this.props.itemsMenuOpciones.map(function (item, index) {
                    return (React.createElement(Button, { className: (item.texto == _this.props.itemMenuOp_seleccionado) ? "item itemSeleccionado" : "item", variant: "text", style: (index + 1 == _this.props.itemsMenuOpciones.length) ? noBorde : styleVacio, key: "itemMenuOp-" + index, startIcon: React.createElement(FontAwesomeIcon, { icon: item.icono }), onClick: function (evento) {
                            _this.mostrarMenuLateralOpciones(false);
                            item.accion();
                        } },
                        React.createElement("label", null,
                            " ",
                            item.texto,
                            " ")));
                }),
                React.createElement(IconButton, { className: 'iconoCerrarMenuLateral', onClick: function (evento) { return _this.mostrarMenuLateralOpciones(false); } },
                    React.createElement(FontAwesomeIcon, { icon: faChevronUp })))));
    };
    /*======================================
        METODO PARA RENDERIZAR EL MENU
        LATERAL DE OPCIONES
    ======================================*/
    Encabezado.prototype.renderizarBotonRegresar = function () {
        var _this = this;
        if (this.props.habilitar_BotonRegresar == false)
            return null;
        return (React.createElement(IconButton, { className: "botonRegresar", onClick: function (evento) { return _this.props.navigate(_this.props.botonRegresar_URL); } },
            React.createElement(FontAwesomeIcon, { icon: faArrowLeft })));
    };
    Encabezado.prototype.mostrarTooltipTitulo = function (visible) {
        this.setState(__assign(__assign({}, this.state), { tooltipTituloVisible: visible }));
    };
    Encabezado.prototype.mostrarMenuLateralPrincipal = function (visible) {
        this.setState(__assign(__assign({}, this.state), { menuPrincipalVisible: visible }));
    };
    Encabezado.prototype.mostrarMenuLateralOpciones = function (visible) {
        this.setState(__assign(__assign({}, this.state), { menuOpcionesVisible: visible }));
    };
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    Encabezado.prototype.render = function () {
        var _this = this;
        return (React.createElement("header", { className: 'ContenedorEncabezado' },
            this.renderizarBotonMenuPrincipal(),
            this.renderizarBotonRegresar(),
            React.createElement(ClickAwayListener, { onClickAway: function (evento) { return _this.mostrarTooltipTitulo(false); } },
                React.createElement(Tooltip, { title: React.createElement("div", { className: 'div-TooltipTitulo' },
                        React.createElement("label", { className: 'titulo' },
                            " ",
                            this.props.tituloTooltip,
                            " "),
                        React.createElement("label", { className: 'descripcion' },
                            " ",
                            this.props.titulo,
                            " ")), TransitionComponent: Zoom, arrow: true, enterDelay: 500, leaveDelay: 500, disableFocusListener: true, disableHoverListener: true, disableTouchListener: true, open: this.state.tooltipTituloVisible },
                    React.createElement("label", { className: 'titulo', onClick: function (evento) { return _this.mostrarTooltipTitulo(true); } }, this.props.titulo))),
            this.renderizarBotonMenuOpciones(),
            this.renderizarMenuPrincipal(),
            this.renderizarMenuOpciones()));
    };
    return Encabezado;
}(React.Component));
export default Encabezado;
/*
(event: React.KeyboardEvent | React.MouseEvent) => {
    }
    */ 
