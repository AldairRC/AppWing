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
// iconos
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
// css
require("./EncabezadoMovil.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class Encabezado extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                menuPrincipalVisible: false,
                menuOpcionesVisible: false,
                tooltipTituloVisible: false,
                itemMenuP_seleccionado: this.props.itemsMenuPrincipal.find((item) => this.props.itemMenuP_seleccionado == item.texto),
                itemMenuOp_seleccionado: this.props.itemsMenuOpciones.find((item) => this.props.itemMenuOp_seleccionado == item.texto)
            };
    }
    /*======================================
        METODO QUE RENDERIZA EL BOTON
        DEL MENU PRINCIPAL
    //======================================*/
    renderizarBotonMenuPrincipal() {
        let icono = null;
        if (this.state.itemMenuP_seleccionado != undefined) {
            icono = this.state.itemMenuP_seleccionado.icono;
        }
        if (this.props.habilitar_MenuPrincipal == false)
            return null;
        return (react_1.default.createElement(material_1.IconButton, { className: 'iconoMenu', onClick: (evento) => this.mostrarMenuLateralPrincipal(true) },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icono })));
    }
    //======================================
    //  METODO QUE RENDERIZA EL MENU PRINCIPAL
    //======================================
    renderizarMenuPrincipal() {
        if (this.props.habilitar_MenuPrincipal == false)
            return null;
        const noBorde = { border: 'none' };
        const styleVacio = {};
        return (react_1.default.createElement(material_1.SwipeableDrawer, { anchor: "left", className: "menuLateralPrincipal", open: this.state.menuPrincipalVisible, onClose: (evento) => { this.mostrarMenuLateralPrincipal(false); }, onOpen: (evento) => { this.mostrarMenuLateralPrincipal(true); } },
            react_1.default.createElement("div", { className: "divMenu" },
                " ",
                this.props.itemsMenuPrincipal.map((item, index) => {
                    return (react_1.default.createElement(material_1.Button, { className: (item.texto == this.props.itemMenuP_seleccionado) ? "item itemSeleccionado" : "item", variant: "text", style: (index + 1 == this.props.itemsMenuPrincipal.length) ? noBorde : styleVacio, key: "itemMenuP-" + index, startIcon: react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: item.icono }), onClick: (evento) => item.accion() },
                        react_1.default.createElement("label", null,
                            " ",
                            item.texto,
                            " ")));
                }),
                " "),
            react_1.default.createElement(material_1.IconButton, { className: 'iconoCerrarMenuLateral', onClick: (evento) => this.mostrarMenuLateralPrincipal(false) },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faChevronLeft }))));
    }
    /*======================================
        METODO PARA RENDERIZAR EL BOTON
        DEL MENU DE OPCIONES
    //======================================*/
    renderizarBotonMenuOpciones() {
        if (this.props.habilitar_MenuOpciones == false)
            return null;
        return (react_1.default.createElement(material_1.IconButton, { className: "iconoOpciones", onClick: (evento) => this.mostrarMenuLateralOpciones(true) },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEllipsisV })));
    }
    /*======================================
        METODO PARA RENDERIZAR EL MENU
        LATERAL DE OPCIONES
    ======================================*/
    renderizarMenuOpciones() {
        const noBorde = { border: 'none' };
        const styleVacio = {};
        if (this.props.habilitar_MenuOpciones == false)
            return null;
        return (react_1.default.createElement(material_1.SwipeableDrawer, { anchor: "top", className: "menuLateralOpciones", open: this.state.menuOpcionesVisible, onClose: (evento) => { this.mostrarMenuLateralOpciones(false); }, onOpen: (evento) => { this.mostrarMenuLateralOpciones(true); } },
            react_1.default.createElement("div", { className: "divMenu" },
                // BOTONES ITEMS
                this.props.itemsMenuOpciones.map((item, index) => {
                    return (react_1.default.createElement(material_1.Button, { className: (item.texto == this.props.itemMenuOp_seleccionado) ? "item itemSeleccionado" : "item", variant: "text", style: (index + 1 == this.props.itemsMenuOpciones.length) ? noBorde : styleVacio, key: "itemMenuOp-" + index, startIcon: react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: item.icono }), onClick: (evento) => {
                            this.mostrarMenuLateralOpciones(false);
                            item.accion();
                        } },
                        react_1.default.createElement("label", null,
                            " ",
                            item.texto,
                            " ")));
                }),
                react_1.default.createElement(material_1.IconButton, { className: 'iconoCerrarMenuLateral', onClick: (evento) => this.mostrarMenuLateralOpciones(false) },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faChevronUp })))));
    }
    /*======================================
        METODO PARA RENDERIZAR EL MENU
        LATERAL DE OPCIONES
    ======================================*/
    renderizarBotonRegresar() {
        if (this.props.habilitar_BotonRegresar == false)
            return null;
        return (react_1.default.createElement(material_1.IconButton, { className: "botonRegresar", onClick: (evento) => this.props.navigate(this.props.botonRegresar_URL) },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowLeft })));
    }
    mostrarTooltipTitulo(visible) {
        this.setState(Object.assign(Object.assign({}, this.state), { tooltipTituloVisible: visible }));
    }
    mostrarMenuLateralPrincipal(visible) {
        this.setState(Object.assign(Object.assign({}, this.state), { menuPrincipalVisible: visible }));
    }
    mostrarMenuLateralOpciones(visible) {
        this.setState(Object.assign(Object.assign({}, this.state), { menuOpcionesVisible: visible }));
    }
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    render() {
        return (react_1.default.createElement("header", { className: 'ContenedorEncabezado' },
            this.renderizarBotonMenuPrincipal(),
            this.renderizarBotonRegresar(),
            react_1.default.createElement(material_1.ClickAwayListener, { onClickAway: (evento) => this.mostrarTooltipTitulo(false) },
                react_1.default.createElement(material_1.Tooltip, { title: react_1.default.createElement("div", { className: 'div-TooltipTitulo' },
                        react_1.default.createElement("label", { className: 'titulo' },
                            " ",
                            this.props.tituloTooltip,
                            " "),
                        react_1.default.createElement("label", { className: 'descripcion' },
                            " ",
                            this.props.titulo,
                            " ")), TransitionComponent: material_1.Zoom, arrow: true, enterDelay: 500, leaveDelay: 500, disableFocusListener: true, disableHoverListener: true, disableTouchListener: true, open: this.state.tooltipTituloVisible },
                    react_1.default.createElement("label", { className: 'titulo', onClick: (evento) => this.mostrarTooltipTitulo(true) }, this.props.titulo))),
            this.renderizarBotonMenuOpciones(),
            this.renderizarMenuPrincipal(),
            this.renderizarMenuOpciones()));
    }
}
exports.default = Encabezado;
/*
(event: React.KeyboardEvent | React.MouseEvent) => {
    }
    */ 
