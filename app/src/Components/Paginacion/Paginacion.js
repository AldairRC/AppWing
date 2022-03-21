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
// carrusel
const react_2 = require("swiper/react");
require("swiper/css");
// modulos Swiper
// Redux
const controladorPaginacion_1 = require("../../Redux/Controladores/controladorPaginacion");
// css
require("./PaginacionMovil.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class Paginacion extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.totalDivsPaginas = Math.ceil(this.props.totalPaginas / this.props.PaginasPorGrupo);
        this.carrusel = null;
        // encontrar el div pagina actual
        this.divPaginaActual = 1;
        let encontrado = false;
        while (!encontrado) {
            let limite = this.props.PaginasPorGrupo * this.divPaginaActual;
            if (this.props.stateRedux.paginaActual <= limite)
                encontrado = true;
            else
                this.divPaginaActual++;
        }
        /*
                this.state =
                {
                    carrusel: null
        */
    }
    //======================================
    //  METODO PARA RENDERIZAR LAS OPCIONES
    //  DEL MENU PRINCIPAL
    //======================================
    renderizarPaginas() {
        let itemsCarrusel = [];
        let slider = [];
        let divsPaginas = [];
        for (let pagina = 1; pagina <= this.props.totalPaginas; pagina++) {
            let clasesCSS = "botonPagina";
            if (this.props.stateRedux.paginaActual == pagina)
                clasesCSS += " botonPaginaActual";
            let boton = (react_1.default.createElement(material_1.Button, { className: clasesCSS, key: "botonPagina-" + pagina, onClick: (evento) => {
                    this.props.dispatchRedux((0, controladorPaginacion_1.setPaginaActual)(pagina));
                    this.props.handleClick_botonPagina(pagina);
                } }, "" + pagina));
            slider.push(boton);
            if (pagina % this.props.PaginasPorGrupo == 0) {
                divsPaginas.push(slider.filter((boton) => true));
                slider = [];
            }
        }
        if (slider.length != 0)
            divsPaginas.push(slider.filter((boton) => true));
        console.log(divsPaginas);
        for (let i = 0; i < divsPaginas.length; i++) {
            let item = (react_1.default.createElement(react_2.SwiperSlide, { className: "itemCarrusel swiper-no-swiping", key: "itemCarruselPaginacion-" + i }, divsPaginas[i]));
            itemsCarrusel.push(item);
        }
        return itemsCarrusel;
    }
    //======================================
    //  METODO PARA RENDERIZAR EL ICONO ATRAS <=
    //======================================
    renderizarBotonAtras() {
        if (this.totalDivsPaginas <= 1)
            return;
        let desactivar = false;
        if (this.divPaginaActual == 1)
            desactivar = true;
        return (react_1.default.createElement(material_1.IconButton, { className: 'iconoPaginacion', disabled: desactivar, onClick: (evento) => {
                if (this.carrusel != null && this.divPaginaActual != 1) {
                    this.carrusel.slideTo(--this.divPaginaActual - 1);
                    this.forceUpdate();
                }
            } },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCaretLeft })));
    }
    //======================================
    //  METODO PARA RENDERIZAR EL ICONO SIGUIENTE =>
    //======================================
    renderizarBotonSiguiente() {
        if (this.totalDivsPaginas <= 1)
            return;
        let desactivar = false;
        if (this.divPaginaActual == this.totalDivsPaginas)
            desactivar = true;
        return (react_1.default.createElement(material_1.IconButton, { className: 'iconoPaginacion', disabled: desactivar, onClick: (evento) => {
                if (this.carrusel != null) {
                    this.carrusel.slideTo(++this.divPaginaActual - 1);
                    this.forceUpdate();
                }
            } },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCaretRight })));
    }
    //==========================================================
    //  DEFINICION DEL HTML
    //==========================================================
    render() {
        return (react_1.default.createElement("div", { className: 'ComponenteDivPaginacion' },
            this.renderizarBotonAtras(),
            react_1.default.createElement(react_2.Swiper, { className: "carrusel", effect: "slide", slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 1, autoHeight: true, allowTouchMove: false, onSwiper: (carrusel) => {
                    this.carrusel = carrusel;
                    this.carrusel.slideTo(this.divPaginaActual - 1);
                } }, this.renderizarPaginas()),
            this.renderizarBotonSiguiente()));
    }
}
exports.default = Paginacion;
