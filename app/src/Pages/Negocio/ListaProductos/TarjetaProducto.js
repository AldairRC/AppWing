"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const swiper_1 = __importStar(require("swiper"));
require("swiper/css");
require("swiper/css/pagination");
require("swiper/css/navigation");
require("swiper/css/effect-creative");
// Utilerias
const Utilerias_1 = __importDefault(require("../../../Models/Utilerias"));
// css
require("./TarjetaProductoMovil.css");
//=====================================================
//  INICIALIZAR CARRUSEL
//=====================================================
swiper_1.default.use([swiper_1.Pagination, swiper_1.Navigation, swiper_1.EffectCreative]);
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class TarjetaProducto extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                modalImagenVisible: false,
                imagenSeleccionada: null
            };
    }
    //===============================================================
    //  RENDERIZAR EL CARRUSEL DE IMAGENES
    //===============================================================
    renderizarImagenes() {
        if (this.props.producto.imagenes_base64.length == 0) {
            return (react_1.default.createElement("div", { className: 'iconoImagen' },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faImage })));
        }
        // GENERADOR DE IMAGENES DEL CARRUSEL
        let slidesImagenes = this.props.producto.imagenes_base64.map((img, index) => {
            return (react_1.default.createElement(react_2.SwiperSlide, { className: "itemCarrusel", key: "imgCarrusel-" + index },
                react_1.default.createElement("img", { src: img, onClick: (evento) => { this.props.handleClick_imagen(img); } })));
        });
        return (react_1.default.createElement(react_2.Swiper, { className: "carrusel", effect: "creative", slidesPerView: 1, slidesPerGroup: 1, loop: true, autoHeight: true, creativeEffect: {
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
    }
    //====================================================================================
    //                          DEFINICION DEL HTML
    //====================================================================================
    render() {
        let labelDimension = null;
        if (this.props.producto.dimension_tipo != "N/A") {
            let dimension = Utilerias_1.default.getNumeroCompletoConComas(this.props.producto.dimension, 2);
            dimension += "  " + this.props.producto.dimension_tipo;
            labelDimension = (react_1.default.createElement("label", { className: 'labelDimension' }, dimension));
        }
        let labelMarca = null;
        if (this.props.producto.marca_nombre != "") {
            labelMarca = (react_1.default.createElement("label", { className: 'labelMarca' }, this.props.producto.marca_nombre + "  "));
        }
        return (react_1.default.createElement("div", { className: 'divTarjeta' },
            this.renderizarImagenes(),
            react_1.default.createElement("div", { className: 'contenedorInfo2' },
                react_1.default.createElement("div", { className: 'divTexto' },
                    react_1.default.createElement("label", { className: 'labelNombre' }, this.props.producto.nombre + "  "),
                    labelMarca,
                    labelDimension),
                react_1.default.createElement(material_1.Button, { className: "botonVer", variant: "contained", onClick: (evento) => {
                        this.props.handleClick_botonVer(this.props.producto.id);
                    } }, "Ver"))));
    }
}
exports.default = TarjetaProducto;
