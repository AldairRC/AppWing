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
import { Button } from '@mui/material';
// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
// carrusel
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, EffectCreative } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
// Utilerias
import Utilerias from "../../../Models/Utilerias";
// css
import './TarjetaProductoMovil.css';
//=====================================================
//  INICIALIZAR CARRUSEL
//=====================================================
SwiperCore.use([Pagination, Navigation, EffectCreative]);
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var TarjetaProducto = /** @class */ (function (_super) {
    __extends(TarjetaProducto, _super);
    function TarjetaProducto(props) {
        var _this = _super.call(this, props) || this;
        _this.state =
            {
                modalImagenVisible: false,
                imagenSeleccionada: null
            };
        return _this;
    }
    //===============================================================
    //  RENDERIZAR EL CARRUSEL DE IMAGENES
    //===============================================================
    TarjetaProducto.prototype.renderizarImagenes = function () {
        var _this = this;
        if (this.props.producto.imagenes_base64.length == 0) {
            return (React.createElement("div", { className: 'iconoImagen' },
                React.createElement(FontAwesomeIcon, { icon: faImage })));
        }
        // GENERADOR DE IMAGENES DEL CARRUSEL
        var slidesImagenes = this.props.producto.imagenes_base64.map(function (img, index) {
            return (React.createElement(SwiperSlide, { className: "itemCarrusel", key: "imgCarrusel-" + index },
                React.createElement("img", { src: img, onClick: function (evento) { _this.props.handleClick_imagen(img); } })));
        });
        return (React.createElement(Swiper, { className: "carrusel", effect: "creative", slidesPerView: 1, slidesPerGroup: 1, loop: true, autoHeight: true, creativeEffect: {
                prev: {
                    shadow: true,
                    translate: [0, 0, -600]
                },
                next: {
                    translate: ["100%", 0, 0]
                }
            }, pagination: { clickable: true }, navigation: true }, 
        // IMAGENES DEL CARRUSEL
        slidesImagenes));
    };
    //====================================================================================
    //                          DEFINICION DEL HTML
    //====================================================================================
    TarjetaProducto.prototype.render = function () {
        var _this = this;
        var labelDimension = null;
        if (this.props.producto.dimension_tipo != "N/A") {
            var dimension = Utilerias.getNumeroCompletoConComas(this.props.producto.dimension, 2);
            dimension += "  " + this.props.producto.dimension_tipo;
            labelDimension = (React.createElement("label", { className: 'labelDimension' }, dimension));
        }
        var labelMarca = null;
        if (this.props.producto.marca_nombre != "") {
            labelMarca = (React.createElement("label", { className: 'labelMarca' }, this.props.producto.marca_nombre + "  "));
        }
        return (React.createElement("div", { className: 'divTarjeta' },
            this.renderizarImagenes(),
            React.createElement("div", { className: 'contenedorInfo2' },
                React.createElement("div", { className: 'divTexto' },
                    React.createElement("label", { className: 'labelNombre' }, this.props.producto.nombre + "  "),
                    labelMarca,
                    labelDimension),
                React.createElement(Button, { className: "botonVer", variant: "contained", onClick: function (evento) {
                        _this.props.handleClick_botonVer(_this.props.producto.id);
                    } }, "Ver"))));
    };
    return TarjetaProducto;
}(React.Component));
export default TarjetaProducto;
