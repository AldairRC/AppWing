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
// componentes MUI
import { Button, IconButton } from '@mui/material';
// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
// carrusel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// modulos Swiper
// Redux
import { setPaginaActual } from "../../Redux/Controladores/controladorPaginacion";
// css
import './PaginacionMovil.css';
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var Paginacion = /** @class */ (function (_super) {
    __extends(Paginacion, _super);
    function Paginacion(props) {
        var _this = _super.call(this, props) || this;
        _this.totalDivsPaginas = Math.ceil(_this.props.totalPaginas / _this.props.PaginasPorGrupo);
        _this.carrusel = null;
        // encontrar el div pagina actual
        _this.divPaginaActual = 1;
        var encontrado = false;
        while (!encontrado) {
            var limite = _this.props.PaginasPorGrupo * _this.divPaginaActual;
            if (_this.props.stateRedux.paginaActual <= limite)
                encontrado = true;
            else
                _this.divPaginaActual++;
        }
        return _this;
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
    Paginacion.prototype.renderizarPaginas = function () {
        var _this = this;
        var itemsCarrusel = [];
        var slider = [];
        var divsPaginas = [];
        var _loop_1 = function (pagina) {
            var clasesCSS = "botonPagina";
            if (this_1.props.stateRedux.paginaActual == pagina)
                clasesCSS += " botonPaginaActual";
            var boton = (React.createElement(Button, { className: clasesCSS, key: "botonPagina-" + pagina, onClick: function (evento) {
                    _this.props.dispatchRedux(setPaginaActual(pagina));
                    _this.props.handleClick_botonPagina(pagina);
                } }, "" + pagina));
            slider.push(boton);
            if (pagina % this_1.props.PaginasPorGrupo == 0) {
                divsPaginas.push(slider.filter(function (boton) { return true; }));
                slider = [];
            }
        };
        var this_1 = this;
        for (var pagina = 1; pagina <= this.props.totalPaginas; pagina++) {
            _loop_1(pagina);
        }
        if (slider.length != 0)
            divsPaginas.push(slider.filter(function (boton) { return true; }));
        console.log(divsPaginas);
        for (var i = 0; i < divsPaginas.length; i++) {
            var item = (React.createElement(SwiperSlide, { className: "itemCarrusel swiper-no-swiping", key: "itemCarruselPaginacion-" + i }, divsPaginas[i]));
            itemsCarrusel.push(item);
        }
        return itemsCarrusel;
    };
    //======================================
    //  METODO PARA RENDERIZAR EL ICONO ATRAS <=
    //======================================
    Paginacion.prototype.renderizarBotonAtras = function () {
        var _this = this;
        if (this.totalDivsPaginas <= 1)
            return;
        var desactivar = false;
        if (this.divPaginaActual == 1)
            desactivar = true;
        return (React.createElement(IconButton, { className: 'iconoPaginacion', disabled: desactivar, onClick: function (evento) {
                if (_this.carrusel != null && _this.divPaginaActual != 1) {
                    _this.carrusel.slideTo(--_this.divPaginaActual - 1);
                    _this.forceUpdate();
                }
            } },
            React.createElement(FontAwesomeIcon, { icon: faCaretLeft })));
    };
    //======================================
    //  METODO PARA RENDERIZAR EL ICONO SIGUIENTE =>
    //======================================
    Paginacion.prototype.renderizarBotonSiguiente = function () {
        var _this = this;
        if (this.totalDivsPaginas <= 1)
            return;
        var desactivar = false;
        if (this.divPaginaActual == this.totalDivsPaginas)
            desactivar = true;
        return (React.createElement(IconButton, { className: 'iconoPaginacion', disabled: desactivar, onClick: function (evento) {
                if (_this.carrusel != null) {
                    _this.carrusel.slideTo(++_this.divPaginaActual - 1);
                    _this.forceUpdate();
                }
            } },
            React.createElement(FontAwesomeIcon, { icon: faCaretRight })));
    };
    //==========================================================
    //  DEFINICION DEL HTML
    //==========================================================
    Paginacion.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'ComponenteDivPaginacion' },
            this.renderizarBotonAtras(),
            React.createElement(Swiper, { className: "carrusel", effect: "slide", slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 1, autoHeight: true, allowTouchMove: false, onSwiper: function (carrusel) {
                    _this.carrusel = carrusel;
                    _this.carrusel.slideTo(_this.divPaginaActual - 1);
                } }, this.renderizarPaginas()),
            this.renderizarBotonSiguiente()));
    };
    return Paginacion;
}(React.Component));
export default Paginacion;
