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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//=====================================================
//  IMPORTACIONES GENERALES
//=====================================================
import React from 'react';
// iconos
import { faHome, faClipboardList, faDolly, faBoxes, faListUl, faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
// mis componentes
import Encabezado from '../../../Components/Encabezado/Encabezado';
import Paginacion from '../../../Components/Paginacion/Paginacion';
import DivResultado from '../../../Components/DivResultado/DivResultado';
import ModalImagen from '../../../Components/ModalImagen/ModalImagen';
import TarjetaProducto from './TarjetaProducto';
import ModalMensaje, { MENSAJE_CORRECTO, MENSAJE_ERROR, MENSAJE_PREGUNTA } from '../../../Components/ModalMensaje/ModalMensaje';
// redux
import { setPaginaActual } from "../../../Redux/Controladores/controladorPaginacion";
import { mostrarModalCargando, ocultarModalCargando } from "../../../Redux/Controladores/controladorModal";
// redux producto
import { ReduxProducto_limpiarProductoBD, ReduxProducto_setProductoBD_como_ProductoActual, ReduxProducto_setSeccionActual, ReduxProducto_setProductoBD } from "../../../Redux/Controladores/controladorProducto";
// Clase Utilerias
import Utilerias from '../../../Models/Utilerias';
// css
import "./PaginaAlmacenProductosMovil.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var PaginaAlmacenProductos = /** @class */ (function (_super) {
    __extends(PaginaAlmacenProductos, _super);
    function PaginaAlmacenProductos(props) {
        var _this = _super.call(this, props) || this;
        _this.modalMensaje_handleClick_botonAceptar = function () { };
        _this.modalMensaje_handleClick_botonNO = function () { };
        _this.modalMensaje_handleClick_botonSI = function () { };
        /*============================
            INICIALIZACION DE PROPIEDADES
        ==============================*/
        _this.totalProductos = 0;
        _this.productosXpagina = 4;
        _this.itemsMenuPrincipal =
            [
                {
                    texto: "Novedades",
                    icono: faHome,
                    accion: function () { return alert("/"); }
                },
                {
                    texto: "Ventas Locales",
                    icono: faClipboardList,
                    accion: function () { return alert("/ventas-locales"); }
                },
                {
                    texto: "Mis Productos",
                    icono: faBoxes,
                    accion: function () { return alert("/lista-mis-productos"); }
                },
                {
                    texto: "Proovedores",
                    icono: faDolly,
                    accion: function () { return alert("/proveedores"); }
                }
            ];
        _this.itemsMenuOpciones = [
            {
                texto: "Lista de mis Productos",
                icono: faListUl,
                accion: function () { return alert("/lista-mis-productos"); }
            },
            {
                texto: "Filtrar Productos",
                icono: faFilter,
                accion: function () { return alert("mostrar menu lateral de filtro"); }
            },
            {
                texto: "Agregar Producto",
                icono: faPlus,
                accion: function () {
                    _this.props.dispatchRedux(ReduxProducto_limpiarProductoBD());
                    _this.props.dispatchRedux(ReduxProducto_setProductoBD_como_ProductoActual());
                    _this.props.dispatchRedux(ReduxProducto_setSeccionActual(1));
                    _this.props.navigate('/Producto');
                }
            }
        ];
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        _this.state =
            {
                listaProductos: [],
                modalMensaje_visible: false,
                modalMensaje_tipo: MENSAJE_CORRECTO,
                modalMensaje_titulo: "",
                modalMensaje_descripcion: "",
                modalImagen_visible: false,
                modalImagen_headerVisible: true,
                modalImagen_imagen: ""
            };
        /*============================
            ESTABLECER QUE QUEREMOS LA PAGINA 1
        ==============================*/
        _this.props.dispatchRedux(setPaginaActual(1));
        return _this;
    }
    PaginaAlmacenProductos.prototype.componentDidMount = function () {
        // OBTENER LOS PRODUCTOS
        this.getProductos(1);
    };
    /*===============================================================================
                        OPERACIONES EN LA BASE DE DATOS
    =================================================================================*/
    PaginaAlmacenProductos.prototype.getProductos = function (pagina) {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Obteniendo productos ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta, query, productosBD;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/productos/listaProductos", [
                            { nombreCampo: "productosXpagina", valor: this.productosXpagina + "" },
                            { nombreCampo: "pagina", valor: pagina + "" }
                        ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL OBTENER PRODUCTOS
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        query = [];
                        query = respuesta.datos.listaProductos;
                        productosBD = [];
                        query.forEach(function (producto) {
                            productosBD.push({
                                id: producto.id,
                                nombre: producto.nombre,
                                marca_nombre: producto.marca,
                                imagenes_base64: producto.imagenes_base64,
                                imagenes_tipo: producto.imagenes_tipo,
                                dimension: producto.dimension,
                                dimension_tipo: producto.dimensionTipo
                            });
                        });
                        this.totalProductos = respuesta.datos.totalProductos;
                        this.setState(function (STATE, PROPS) {
                            return {
                                listaProductos: productosBD
                            };
                        });
                        this.props.dispatchRedux(ocultarModalCargando());
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    PaginaAlmacenProductos.prototype.getProducto = function (id) {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Espere un momento ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta, producto;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/productos/getProductoByID", [
                            { nombreCampo: "id_producto", valor: id }
                        ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL OBTENER PRODUCTO
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        producto = {};
                        try {
                            producto = respuesta.datos;
                        }
                        catch (ERROR) {
                            // ERROR AL RECEPTAR REGISTRO PRODUCTO
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            console.log(ERROR);
                            return [2 /*return*/];
                        }
                        this.props.dispatchRedux(ReduxProducto_setProductoBD({
                            id: producto.id,
                            nombre: producto.nombre,
                            descripcion: producto.descripcion,
                            codigo_barras: producto.codigo_barras,
                            precio: producto.precio,
                            marca_id: producto.marca_id,
                            marca_nombre: producto.marca_nombre,
                            marca_imagen: producto.marca_imagen,
                            marca_imagenTipo: producto.marca_imagenTipo,
                            categoria_id: producto.categoria_id,
                            categoria_nombre: producto.categoria_nombre,
                            categoria_imagen: producto.categoria_imagen,
                            categoria_imagenTipo: producto.categoria_imagenTipo,
                            categoria_ubicacion: producto.categoria_ubicacion,
                            dimension: producto.dimension,
                            dimension_tipo: producto.dimension_tipo,
                            imagenes_base64: producto.imagenes_base64,
                            imagenes_tipo: producto.imagenes_tipo
                        }));
                        this.props.dispatchRedux(ReduxProducto_setProductoBD_como_ProductoActual());
                        this.props.dispatchRedux(ReduxProducto_setSeccionActual(1));
                        this.props.dispatchRedux(ocultarModalCargando());
                        this.props.navigate('/Producto');
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    //=================================================================================
    //              FUNCIONALIDADES DEL MODAL IMAGEN
    //=================================================================================
    PaginaAlmacenProductos.prototype.modalImagen_accionX = function () { this.ocultarModalImagen(); };
    PaginaAlmacenProductos.prototype.modalImagen_accionClickImagen = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalImagen_headerVisible: !STATE.modalImagen_headerVisible
            };
        });
    };
    PaginaAlmacenProductos.prototype.ocultarModalImagen = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalImagen_visible: false,
                modalImagen_headerVisible: true,
                modalImagen_imagen: ""
            };
        });
    };
    PaginaAlmacenProductos.prototype.mostrarModalImagen = function (imagenBase64) {
        this.setState(function (STATE, PROPS) {
            return {
                modalImagen_visible: true,
                modalImagen_imagen: imagenBase64
            };
        });
    };
    //=====================================================================
    //              HANDLES DEL MODAL MENSAJE
    //=====================================================================
    PaginaAlmacenProductos.prototype.mostrar_modalMensajeCorrecto = function (titulo, descripcion, handleClick_botonAceptar) {
        this.modalMensaje_handleClick_botonAceptar = handleClick_botonAceptar;
        this.setState(function (STATE, PROPS) {
            return {
                modalMensaje_visible: true,
                modalMensaje_tipo: MENSAJE_CORRECTO,
                modalMensaje_titulo: titulo,
                modalMensaje_descripcion: descripcion
            };
        });
    };
    PaginaAlmacenProductos.prototype.mostrar_modalMensajeError = function (titulo, descripcion, handleClick_botonAceptar) {
        this.modalMensaje_handleClick_botonAceptar = handleClick_botonAceptar;
        this.setState(function (STATE, PROPS) {
            return {
                modalMensaje_visible: true,
                modalMensaje_tipo: MENSAJE_ERROR,
                modalMensaje_titulo: titulo,
                modalMensaje_descripcion: descripcion
            };
        });
    };
    PaginaAlmacenProductos.prototype.mostrar_modalMensajePregunta = function (titulo, descripcion, handleClick_botonNO, handleClick_botonSI) {
        this.modalMensaje_handleClick_botonNO = handleClick_botonNO;
        this.modalMensaje_handleClick_botonSI = handleClick_botonSI;
        this.setState(function (STATE, PROPS) {
            return {
                modalMensaje_visible: true,
                modalMensaje_tipo: MENSAJE_PREGUNTA,
                modalMensaje_titulo: titulo,
                modalMensaje_descripcion: descripcion
            };
        });
    };
    PaginaAlmacenProductos.prototype.ocultar_modalMensaje = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalMensaje_visible: false
            };
        });
    };
    /*===========================================================================
                        COMPONENTES INDIVIDUALES HTML
    =============================================================================*/
    PaginaAlmacenProductos.prototype.addContenedorTarjetas = function () {
        var _this = this;
        if (this.totalProductos == 0)
            return null;
        return (React.createElement("div", { className: 'contenedorTarjetas' }, this.state.listaProductos.map(function (producto, index) {
            return (React.createElement(TarjetaProducto, { producto: producto, key: "tarjetaProducto-" + index, handleClick_botonVer: _this.getProducto.bind(_this), handleClick_imagen: _this.mostrarModalImagen.bind(_this) }));
        })));
    };
    PaginaAlmacenProductos.prototype.addPaginacion = function () {
        var paginas = Math.ceil(this.totalProductos / this.productosXpagina);
        if (paginas > 1)
            return (React.createElement(Paginacion, { totalPaginas: paginas, PaginasPorGrupo: 4, stateRedux: this.props.stateReduxPaginacion, dispatchRedux: this.props.dispatchRedux, handleClick_botonPagina: this.getProductos.bind(this) }));
    };
    PaginaAlmacenProductos.prototype.addDivResultado = function () {
        var visible = false;
        if (this.totalProductos == 0)
            visible = true;
        return (React.createElement(DivResultado, { visible: visible, icono: faSearch, texto: "No se encontro ningun producto" }));
    };
    /*===========================================================================
                                DEFINICION DEL HTML
    =============================================================================*/
    PaginaAlmacenProductos.prototype.render = function () {
        return (React.createElement("main", { className: 'contenedorPagina' },
            React.createElement(Encabezado, __assign({}, this.props, { habilitar_BotonRegresar: false, habilitar_MenuPrincipal: true, habilitar_MenuOpciones: true, titulo: "Papeleria Geraldine Papeleria Geraldine", tituloTooltip: "Nombre de tu Negocio", itemsMenuPrincipal: this.itemsMenuPrincipal, itemsMenuOpciones: this.itemsMenuOpciones, itemMenuP_seleccionado: "Mis Productos", itemMenuOp_seleccionado: "Lista de mis Productos", botonRegresar_URL: '' })),
            this.addContenedorTarjetas(),
            this.addPaginacion(),
            this.addDivResultado(),
            React.createElement(ModalMensaje, { titulo: this.state.modalMensaje_titulo, descripcion: this.state.modalMensaje_descripcion, tipo: this.state.modalMensaje_tipo, modalVisible: this.state.modalMensaje_visible, handleClick_botonAceptar: this.modalMensaje_handleClick_botonAceptar.bind(this), handleClick_botonNO: this.modalMensaje_handleClick_botonNO.bind(this), handleClick_botonSI: this.modalMensaje_handleClick_botonSI.bind(this) }),
            React.createElement(ModalImagen, { modalVisible: this.state.modalImagen_visible, botonEliminarVisible: false, imagenURL: this.state.modalImagen_imagen, accionX: this.modalImagen_accionX.bind(this), accionEliminar: function () { }, accionClickImagen: this.modalImagen_accionClickImagen.bind(this), headerVisible: this.state.modalImagen_headerVisible })));
    };
    return PaginaAlmacenProductos;
}(React.Component));
export default PaginaAlmacenProductos;
