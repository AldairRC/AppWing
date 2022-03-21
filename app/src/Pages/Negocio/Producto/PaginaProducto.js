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
// componentes MUI
import { Button, IconButton, TextField, Select, MenuItem } from "@mui/material";
// carrusel Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Modulos Swiper
import { Pagination, Navigation, EffectCreative } from 'swiper';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
// iconos
import { faPlus, // +
faEllipsisH, //  =>  ...
faBarcode, // codigo de barras
faDollarSign, // => $
faExclamationTriangle, // advertencia ,
faBroom, // brocha
faPencilAlt, // lapiz (editar)
faTrash, // basurero (eliminar)
faImage // imagen
 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// mis componentes
import Encabezado from '../../../Components/Encabezado/Encabezado';
import ModalImagen from '../../../Components/ModalImagen/ModalImagen';
import TextFieldNumerico from '../../../Components/TextFieldNumerico/TextFieldNumerico';
import ModalMensaje, { MENSAJE_CORRECTO, MENSAJE_ERROR, MENSAJE_PREGUNTA } from '../../../Components/ModalMensaje/ModalMensaje';
import TextFieldConSugerencias from '../../../Components/TextFieldConSugerencias/TextFieldConSugerencias';
import ElementoConTooltip, { classElementoConTooltip } from '../../../Components/ElementoConTooltip/ElementoConTooltip';
/*________________
REDUX MODAL
__________________ */
import { mostrarModalCargando, ocultarModalCargando } from "../../../Redux/Controladores/controladorModal";
/*________________
REDUX PRODUCTO
__________________ */
import { ReduxProducto_setSeccionActual, ReduxProducto_setProductoBD_como_ProductoActual, ReduxProducto_setProductoActual, ReduxProducto_limpiarProductoBD, ReduxProducto_setProductoBD, ReduxProducto_setMarcaActual, ReduxProducto_setCategoriaActual } from '../../../Redux/Controladores/controladorProducto';
// models
import Utilerias from "../../../Models/Utilerias";
// css
import "../../../CSS/TextField/TextField_E1.css";
import "../../../CSS/Combo/Combo_E1.css";
import cssDimension from "./dimension.module.css";
import "./marca.css";
import "./seccion2.css";
import "./seccion3.css";
import "./PaginaProductoMovil.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var PaginaProducto = /** @class */ (function (_super) {
    __extends(PaginaProducto, _super);
    function PaginaProducto(props) {
        var _this = _super.call(this, props) || this;
        _this.menuOpciones = [];
        _this.modalMensaje_handleClick_botonAceptar = function () { };
        _this.modalMensaje_handleClick_botonNO = function () { };
        _this.modalMensaje_handleClick_botonSI = function () { };
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        _this.state =
            {
                opcionesInputNombre: [],
                modalImagen_visible: false,
                modalImagen_imagen: '',
                modalImagen_imagenIndex: -1,
                modalImagen_headerVisible: true,
                inputDimensionPE: "",
                inputDimensionPD: "",
                inputPrecioPE: "",
                inputPrecioPD: "",
                // DATOS DEL PRODUCTO
                id: "",
                id_negocio: "",
                nombre: "",
                descripcion: "",
                precio: 0,
                codigo_barras: "",
                imagenes_base64: [],
                imagenes_tipo: [],
                dimension: 0,
                dimension_tipo: "",
                // ========= MODAL MENSAJE ==============
                modalMensaje_visible: false,
                modalMensaje_titulo: "",
                modalMensaje_descripcion: "",
                modalMensaje_tipo: MENSAJE_CORRECTO,
                // ========= MODAL MENSAJE ==============
                error_nombre: null,
                error_dimension: null,
                error_codigoBarras: null,
                error_precio: null
            };
        /*============================
            INICIALIZACION DE PROPIEDADES
        ==============================*/
        _this.carruselContenedorPagina = null;
        _this.carruselImagenes = null;
        return _this;
    }
    /*================================================================================
                        FUNCIONALIDAD AL CREAR LA PAGINA
    ==================================================================================*/
    PaginaProducto.prototype.componentDidMount = function () {
        var _this = this;
        /*==================================
        TRANSFERIR LOS DATOS DEL PRODUCTO
        SELECCIONADO COMO VALORES INICIALES
        ====================================*/
        this.props.dispatchRedux(mostrarModalCargando("Espere un momento..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var nombresProductos_1, ERROR_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // MENU DE OPCIONES
                        //_______________
                        // ITEM RESTABLECER
                        //_______________
                        this.menuOpciones.push({
                            icono: faBroom,
                            texto: "Restablecer",
                            accion: function () {
                                _this.restablecerFormulario();
                            }
                        });
                        /*___________________
                            ITEM GUARDAR
                        _____________________*/
                        if (this.props.stateReduxProducto.actual.id == "") {
                            this.menuOpciones.push({
                                icono: faPlus,
                                texto: "Guardar",
                                accion: function () {
                                    if (_this.formularioValido()) {
                                        var existeMarca = true;
                                        var existeCategoria = true;
                                        var existeDescripcion = true;
                                        var existeImagenes = true;
                                        // VERIFICAR CAMPOS NO REQUERIDOS
                                        if (_this.props.stateReduxProducto.actual.marca_id == "")
                                            existeMarca = false;
                                        if (_this.props.stateReduxProducto.actual.categoria_id == "")
                                            existeCategoria = false;
                                        var descripcion = Utilerias.corregirTexto_quitarEspaciosEnBlanco(_this.state.descripcion);
                                        if (descripcion == "")
                                            existeDescripcion = false;
                                        if (_this.state.imagenes_base64.length == 0)
                                            existeImagenes = false;
                                        if (existeMarca && existeCategoria &&
                                            existeDescripcion && existeImagenes) {
                                            _this.mostrar_modalMensajePregunta("Desea guardar este nuevo producto?", "", function () { _this.ocultar_modalMensaje(); }, function () {
                                                _this.ocultar_modalMensaje();
                                                _this.insertarProducto();
                                            });
                                        }
                                        else {
                                            var mensaje = "";
                                            if (!existeMarca)
                                                mensaje += "La marca del producto.\n\n";
                                            if (!existeCategoria)
                                                mensaje += "La categoria del producto.\n\n";
                                            if (!existeDescripcion)
                                                mensaje += "La descripcion o detalle del producto.\n\n";
                                            if (!existeImagenes)
                                                mensaje += "Las imagenes del producto.\n\n";
                                            mensaje = mensaje.substring(0, mensaje.length - 2);
                                            _this.mostrar_modalMensajePregunta("Los siguientes datos NO estan establecidos. ¿Desea Continuar?", mensaje, function () { _this.ocultar_modalMensaje(); }, function () {
                                                _this.ocultar_modalMensaje();
                                                _this.insertarProducto();
                                            });
                                        }
                                    }
                                } // fin accion
                            });
                        }
                        /*________________________
                            ITEM GUARDAR CAMBIOS
                        __________________________*/
                        if (this.props.stateReduxProducto.actual.id != "") {
                            this.menuOpciones.push({
                                icono: faPencilAlt,
                                texto: "Guardar Cambios",
                                accion: function () {
                                    if (_this.formularioValido()) {
                                        var existeMarca = true;
                                        var existeCategoria = true;
                                        var existeDescripcion = true;
                                        var existeImagenes = true;
                                        // VERIFICAR CAMPOS NO REQUERIDOS
                                        if (_this.props.stateReduxProducto.actual.marca_id == "")
                                            existeMarca = false;
                                        if (_this.props.stateReduxProducto.actual.categoria_id == "")
                                            existeCategoria = false;
                                        var descripcion = Utilerias.corregirTexto_quitarEspaciosEnBlanco(_this.state.descripcion);
                                        if (descripcion == "")
                                            existeDescripcion = false;
                                        if (_this.state.imagenes_base64.length == 0)
                                            existeImagenes = false;
                                        if (existeMarca && existeCategoria &&
                                            existeDescripcion && existeImagenes) {
                                            _this.mostrar_modalMensajePregunta("Desea guardar los cambios del producto?", "", function () { _this.ocultar_modalMensaje(); }, function () {
                                                _this.ocultar_modalMensaje();
                                                _this.actualizarProducto();
                                            });
                                        }
                                        else {
                                            var mensaje = "";
                                            if (!existeMarca)
                                                mensaje += "La marca del producto.\n\n";
                                            if (!existeCategoria)
                                                mensaje += "La categoria del producto.\n\n";
                                            if (!existeDescripcion)
                                                mensaje += "La descripcion o detalle del producto.\n\n";
                                            if (!existeImagenes)
                                                mensaje += "Las imagenes del producto.\n\n";
                                            mensaje = mensaje.substring(0, mensaje.length - 2);
                                            _this.mostrar_modalMensajePregunta("Los siguientes datos NO estan establecidos. ¿Desea Continuar?", mensaje, function () { _this.ocultar_modalMensaje(); }, function () {
                                                _this.ocultar_modalMensaje();
                                                _this.actualizarProducto();
                                            });
                                        }
                                    }
                                } // fin accion
                            });
                        }
                        /*________________________
                            ITEM ELIMINAR
                        __________________________*/
                        if (this.props.stateReduxProducto.actual.id != "") {
                            this.menuOpciones.push({
                                icono: faTrash,
                                texto: "Eliminar",
                                accion: function () {
                                    _this.mostrar_modalMensajePregunta("Desea eliminar este producto de su inventario?", "", function () { _this.ocultar_modalMensaje(); }, function () {
                                        _this.ocultar_modalMensaje();
                                        _this.eliminarProducto();
                                    });
                                }
                            });
                        }
                        this.setState(function (STATE, PROPS) {
                            return {
                                id: _this.props.stateReduxProducto.actual.id,
                                id_negocio: _this.props.stateReduxProducto.actual.id_negocio,
                                nombre: _this.props.stateReduxProducto.actual.nombre,
                                descripcion: _this.props.stateReduxProducto.actual.descripcion,
                                precio: _this.props.stateReduxProducto.actual.precio,
                                codigo_barras: _this.props.stateReduxProducto.actual.codigo_barras,
                                imagenes_base64: _this.props.stateReduxProducto.actual.imagenes_base64,
                                imagenes_tipo: _this.props.stateReduxProducto.actual.imagenes_tipo,
                                dimension: _this.props.stateReduxProducto.actual.dimension,
                                dimension_tipo: _this.props.stateReduxProducto.actual.dimension_tipo
                            };
                        });
                        this.cargarDimension(this.props.stateReduxProducto.actual.dimension);
                        this.cargarPrecio(this.props.stateReduxProducto.actual.precio);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getNombresDeProductos()];
                    case 2:
                        nombresProductos_1 = _a.sent();
                        this.setState(function (STATE, PROPS) {
                            return {
                                opcionesInputNombre: nombresProductos_1
                            };
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        ERROR_1 = _a.sent();
                        alert("ERROR AL MONTAR COMPONENTE:\n" + ERROR_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.props.dispatchRedux(ocultarModalCargando());
                        return [2 /*return*/];
                }
            });
        }); }, 1200);
    };
    /*================================================================================
                        FUNCIONALIDADES
    ==================================================================================*/
    PaginaProducto.prototype.restablecerFormulario = function () {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Espere un momento..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.props.dispatchRedux(ReduxProducto_setProductoBD_como_ProductoActual());
                this.setState(function (STATE, PROPS) {
                    return {
                        id: _this.props.stateReduxProducto.productoBD.id,
                        id_negocio: _this.props.stateReduxProducto.productoBD.id_negocio,
                        nombre: _this.props.stateReduxProducto.productoBD.nombre,
                        descripcion: _this.props.stateReduxProducto.productoBD.descripcion,
                        precio: _this.props.stateReduxProducto.productoBD.precio,
                        codigo_barras: _this.props.stateReduxProducto.productoBD.codigo_barras,
                        imagenes_base64: _this.props.stateReduxProducto.productoBD.imagenes_base64,
                        imagenes_tipo: _this.props.stateReduxProducto.productoBD.imagenes_tipo,
                        dimension: _this.props.stateReduxProducto.productoBD.dimension,
                        dimension_tipo: _this.props.stateReduxProducto.productoBD.dimension_tipo
                    };
                });
                this.cargarDimension(this.props.stateReduxProducto.productoBD.dimension);
                this.cargarPrecio(this.props.stateReduxProducto.productoBD.precio);
                this.props.dispatchRedux(ocultarModalCargando());
                return [2 /*return*/];
            });
        }); }, 1200);
    };
    PaginaProducto.prototype.cargarDimension = function (dimension) {
        var PE = "";
        var PD = "";
        var dimensionString = dimension + "";
        if (dimension > 0) {
            if (dimensionString.indexOf('.') == -1) {
                // SOLO PARTE ENTERA
                PE = Utilerias.getNumeroConComas(dimensionString);
            }
            else {
                var partesDimension = dimensionString.split('.');
                PE = Utilerias.getNumeroConComas(partesDimension[0]);
                if (partesDimension[1].length == 1)
                    PD = partesDimension[1] + "0";
                else
                    PD = partesDimension[1].substring(0, 2);
            }
        }
        this.setState(function (STATE, PROPS) {
            return {
                inputDimensionPE: PE,
                inputDimensionPD: PD
            };
        });
    };
    PaginaProducto.prototype.cargarPrecio = function (precio) {
        var PE = "";
        var PD = "";
        var precioString = precio + "";
        if (precio > 0) {
            if (precioString.indexOf('.') == -1) {
                // SOLO PARTE ENTERA
                PE = Utilerias.getNumeroConComas(precioString);
            }
            else {
                var partesPrecio = precioString.split('.');
                PE = Utilerias.getNumeroConComas(partesPrecio[0]);
                if (partesPrecio[1].length == 1)
                    PD = partesPrecio[1] + "0";
                else
                    PD = partesPrecio[1].substring(0, 2);
            }
        }
        this.setState(function (STATE, PROPS) {
            return {
                inputPrecioPE: PE,
                inputPrecioPD: PD
            };
        });
    };
    PaginaProducto.prototype.formularioValido = function () {
        var _this = this;
        // VERFICIAR SI NOMBRE ES VACIO
        var nombre = Utilerias.corregirTexto_quitarEspaciosEnBlanco(this.state.nombre);
        if (nombre == "") {
            nombre = this.props.stateReduxProducto.productoBD.nombre;
            if (nombre == "") {
                this.setState(function (STATE, PROPS) {
                    return {
                        error_nombre: _this.crearTextoError("El nombre del producto NO debe estar vacio")
                    };
                });
                this.mostrar_modalMensajeError("Datos Incorrectos", "El Nombre del producto NO esta establecido", function () { _this.ocultar_modalMensaje(); });
                return false;
            }
        }
        // VERIFICAR SI NOMBRE CONTIENE CARACTERES INVALIDOS
        var caracteresNombre = "abcdefghijklmnñopqrstuvwxyz áéíóú äëïöü";
        for (var c = 0; c < nombre.length; c++) {
            var caracter = nombre.charAt(c);
            if (caracteresNombre.indexOf(caracter.toLowerCase()) == -1) {
                this.setState(function (STATE, PROPS) {
                    return {
                        error_nombre: _this.crearTextoError("El nombre del producto solo debe tener letras o espacios")
                    };
                });
                this.mostrar_modalMensajeError("Datos Incorrectos", "El Nombre del producto NO es valido", function () { _this.ocultar_modalMensaje(); });
                return false;
            }
        }
        // VERIFICAR DIMENSION
        if (this.state.dimension_tipo != "N/A" && this.state.dimension == 0) {
            this.setState(function (STATE, PROPS) {
                return {
                    error_dimension: _this.crearTextoError("La dimension NO debe ser 0")
                };
            });
            this.mostrar_modalMensajeError("Datos Incorrectos", "La dimension del producto NO debe ser 0", function () { _this.ocultar_modalMensaje(); });
            return false;
        }
        // VERFICIAR SI CODIGO DE BARRAS ES VACIO
        var codigoBarras = this.state.codigo_barras;
        if (codigoBarras == "") {
            codigoBarras = this.props.stateReduxProducto.productoBD.codigo_barras;
            if (codigoBarras == "") {
                this.setState(function (STATE, PROPS) {
                    return {
                        error_codigoBarras: _this.crearTextoError("El codigo de barras NO debe estar vacio")
                    };
                });
                this.mostrar_modalMensajeError("Datos Incorrectos", "El Codigo de barras del producto NO esta establecido", function () { _this.ocultar_modalMensaje(); });
                return false;
            }
        }
        // VERIFICAR SI CODIGO DE BARRAS CONTIENE CARACTERES INVALIDOS
        var caracteresCodigoBarras = "abcdefghijklmnñopqrstuvwxyz0123456789";
        for (var c = 0; c < codigoBarras.length; c++) {
            var caracter = codigoBarras.charAt(c);
            if (caracteresCodigoBarras.indexOf(caracter.toLowerCase()) == -1) {
                this.setState(function (STATE, PROPS) {
                    return {
                        error_codigoBarras: _this.crearTextoError("El codigo de barras solo acepta letras y digitos")
                    };
                });
                this.mostrar_modalMensajeError("Datos Incorrectos", "El codigo de barras del producto NO es valido", function () { _this.ocultar_modalMensaje(); });
                return false;
            }
        }
        // VALIDAR PRECIO
        if (this.state.precio == 0) {
            this.setState(function (STATE, PROPS) {
                return {
                    error_precio: _this.crearTextoError("El precio NO debe ser 0")
                };
            });
            this.mostrar_modalMensajeError("Datos Incorrectos", "El precio de venta del producto NO debe ser 0", function () { _this.ocultar_modalMensaje(); });
            return false;
        }
        return true;
    };
    //==========================================================================
    //                     OPERACIONES A LA BASE DE DATOS
    //===========================================================================
    PaginaProducto.prototype.getNombresDeProductos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var respuesta, listaNombresBD, listaNombresSugerencia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/productos/getNombresProductos", [])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError)
                            return [2 /*return*/, []
                                // NOMBRES DE PRODUCTOS OBTENIDOS
                            ];
                        listaNombresBD = respuesta.datos;
                        listaNombresSugerencia = [];
                        listaNombresBD.forEach(function (nombre, index) {
                            listaNombresSugerencia.push({
                                label: nombre,
                                key: "PaginaProducto-inputNombre-Opcion" + index,
                                categoria: nombre.charAt(0).toUpperCase()
                            });
                        });
                        return [2 /*return*/, listaNombresSugerencia];
                }
            });
        });
    };
    PaginaProducto.prototype.insertarProducto = function () {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Agregando Producto ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var imagenes, imagenesTipo, nombre, id_marca, dimension, tipoDimension, id_categoria, codigoBarras, precio, descripcion, respuesta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imagenes = this.state.imagenes_base64;
                        imagenesTipo = this.state.imagenes_tipo;
                        nombre = Utilerias.corregirTexto_quitarEspaciosEnBlanco(this.state.nombre);
                        if (nombre == "")
                            nombre = this.props.stateReduxProducto.productoBD.nombre;
                        id_marca = this.props.stateReduxProducto.actual.marca_id;
                        dimension = this.getDimension(this.state.inputDimensionPE, this.state.inputDimensionPD);
                        if (this.state.dimension_tipo == "N/A")
                            dimension = 0;
                        tipoDimension = this.state.dimension_tipo;
                        id_categoria = this.props.stateReduxProducto.actual.categoria_id;
                        codigoBarras = this.state.codigo_barras;
                        if (codigoBarras == "")
                            codigoBarras = this.props.stateReduxProducto.productoBD.codigo_barras;
                        precio = this.getPrecio(this.state.inputPrecioPE, this.state.inputPrecioPD);
                        descripcion = Utilerias.corregirTexto_quitarEspaciosEnBlanco(this.state.descripcion);
                        return [4 /*yield*/, Utilerias.postHTTP("api/negocios/productos/insertar", [
                                { nombreCampo: "id_negocio", valor: "N/A" },
                                { nombreCampo: "nombre", valor: nombre },
                                { nombreCampo: "codigo_de_barras", valor: codigoBarras },
                                { nombreCampo: "descripcion", valor: descripcion },
                                { nombreCampo: "id_marca", valor: id_marca },
                                { nombreCampo: "id_categoria", valor: id_categoria },
                                { nombreCampo: "imagenes_base64", valor: JSON.stringify(imagenes) },
                                { nombreCampo: "imagenes_tipo", valor: JSON.stringify(imagenesTipo) },
                                { nombreCampo: "dimension", valor: dimension + "" },
                                { nombreCampo: "dimension_tipo", valor: tipoDimension },
                                { nombreCampo: "precio", valor: precio + "" }
                            ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL INSERTAR PRODUCTO
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        // PRODUCTO ALMACENADO
                        this.props.dispatchRedux(ocultarModalCargando());
                        this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, function () {
                            _this.ocultar_modalMensaje();
                            _this.props.dispatchRedux(ReduxProducto_limpiarProductoBD());
                            _this.restablecerFormulario();
                            _this.props.dispatchRedux(ReduxProducto_setSeccionActual(1));
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    PaginaProducto.prototype.actualizarProducto = function () {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Actualizando Producto ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var imagenes, imagenesTipo, nombre, id_marca, dimension, tipoDimension, id_categoria, codigoBarras, precio, descripcion, respuesta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imagenes = this.state.imagenes_base64;
                        imagenesTipo = this.state.imagenes_tipo;
                        nombre = Utilerias.corregirTexto_quitarEspaciosEnBlanco(this.state.nombre);
                        if (nombre == "")
                            nombre = this.props.stateReduxProducto.productoBD.nombre;
                        id_marca = this.props.stateReduxProducto.actual.marca_id;
                        dimension = this.getDimension(this.state.inputDimensionPE, this.state.inputDimensionPD);
                        if (this.state.dimension_tipo == "N/A")
                            dimension = 0;
                        tipoDimension = this.state.dimension_tipo;
                        id_categoria = this.props.stateReduxProducto.actual.categoria_id;
                        codigoBarras = this.state.codigo_barras;
                        if (codigoBarras == "")
                            codigoBarras = this.props.stateReduxProducto.productoBD.codigo_barras;
                        precio = this.getPrecio(this.state.inputPrecioPE, this.state.inputPrecioPD);
                        descripcion = Utilerias.corregirTexto_quitarEspaciosEnBlanco(this.state.descripcion);
                        return [4 /*yield*/, Utilerias.postHTTP("api/negocios/productos/actualizar", [
                                { nombreCampo: "id_producto", valor: this.state.id },
                                { nombreCampo: "nombre", valor: nombre },
                                { nombreCampo: "codigo_de_barras", valor: codigoBarras },
                                { nombreCampo: "descripcion", valor: descripcion },
                                { nombreCampo: "id_marca", valor: id_marca },
                                { nombreCampo: "id_categoria", valor: id_categoria },
                                { nombreCampo: "imagenes_base64", valor: JSON.stringify(imagenes) },
                                { nombreCampo: "imagenes_tipo", valor: JSON.stringify(imagenesTipo) },
                                { nombreCampo: "dimension", valor: dimension + "" },
                                { nombreCampo: "dimension_tipo", valor: tipoDimension },
                                { nombreCampo: "precio", valor: precio + "" }
                            ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL ACTUALIZAR PRODUCTO
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        // PRODUCTO ACTUALIZADO
                        this.props.dispatchRedux(ReduxProducto_setProductoBD({
                            id: this.state.id,
                            nombre: nombre,
                            descripcion: descripcion,
                            codigo_barras: codigoBarras,
                            precio: precio,
                            marca_id: this.props.stateReduxProducto.actual.marca_id,
                            marca_nombre: this.props.stateReduxProducto.actual.marca_nombre,
                            marca_imagen: this.props.stateReduxProducto.actual.marca_imagen,
                            marca_imagenTipo: this.props.stateReduxProducto.actual.marca_imagenTipo,
                            categoria_id: this.props.stateReduxProducto.actual.categoria_id,
                            categoria_nombre: this.props.stateReduxProducto.actual.categoria_nombre,
                            categoria_imagen: this.props.stateReduxProducto.actual.categoria_imagen,
                            categoria_imagenTipo: this.props.stateReduxProducto.actual.categoria_imagenTipo,
                            categoria_ubicacion: this.props.stateReduxProducto.actual.categoria_ubicacion,
                            dimension: dimension,
                            dimension_tipo: tipoDimension,
                            imagenes_base64: imagenes,
                            imagenes_tipo: imagenesTipo
                        }));
                        this.props.dispatchRedux(ReduxProducto_setProductoBD_como_ProductoActual());
                        this.props.dispatchRedux(ocultarModalCargando());
                        this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    PaginaProducto.prototype.eliminarProducto = function () {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Eliminando Producto ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/productos/eliminar", [
                            { nombreCampo: "id_producto", valor: this.state.id }
                        ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL ELIMINAR PRODUCTO
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        // PRODUCTO ELIMINADO
                        this.props.dispatchRedux(ReduxProducto_limpiarProductoBD());
                        this.props.dispatchRedux(ReduxProducto_setProductoBD_como_ProductoActual());
                        this.props.dispatchRedux(ReduxProducto_setSeccionActual(1));
                        this.props.dispatchRedux(ocultarModalCargando());
                        this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, function () {
                            _this.ocultar_modalMensaje();
                            _this.props.navigate('/MisProductos');
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    //==========================================================================
    //                 FUNCIONALIDADES DE LA SECCION 1
    //===========================================================================
    PaginaProducto.prototype.handleChange_inputFileImagen = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var producto_imgsBase64_1, producto_imgsTipo_1, imagenes_add, imagenes_errorSize, imagenes_errorTipo, imagenes_errorLimite, imagenes_errorLectura, imagenes, i, mensaje, msj;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(selector.files != undefined && selector.files.length != 0)) return [3 /*break*/, 2];
                        this.props.dispatchRedux(mostrarModalCargando("Agregando imagenes"));
                        producto_imgsBase64_1 = this.state.imagenes_base64.slice(0, this.state.imagenes_base64.length);
                        producto_imgsTipo_1 = this.state.imagenes_tipo.slice(0, this.state.imagenes_tipo.length);
                        imagenes_add = 0;
                        imagenes_errorSize = 0;
                        imagenes_errorTipo = 0;
                        imagenes_errorLimite = 0;
                        imagenes_errorLectura = 0;
                        return [4 /*yield*/, Utilerias.getImagenes(selector.files, ["jpg", "png", "jpeg"], 5000000, 5, producto_imgsBase64_1.length)
                            //console.log( imagenes ) 
                        ];
                    case 1:
                        imagenes = _a.sent();
                        //console.log( imagenes ) 
                        for (i = 0; i < imagenes.imagenesBase64.length; i++) {
                            //console.log( imagenes.imagenesEstatus[i] )
                            switch (imagenes.imagenesEstatus[i]) {
                                case Utilerias.ERROR_IMAGEN_TIPO:
                                    imagenes_errorTipo++;
                                    break;
                                case Utilerias.ERROR_IMAGEN_SIZE_MAX:
                                    imagenes_errorSize++;
                                    break;
                                case Utilerias.ERROR_IMAGEN_MAX_IMAGENES:
                                    imagenes_errorLimite++;
                                    break;
                                case Utilerias.ERROR_IMAGEN_LECTURA:
                                    imagenes_errorLectura++;
                                    break;
                                case Utilerias.LECTURA_IMAGEN_CORRECTA:
                                    imagenes_add++;
                                    producto_imgsBase64_1.push(imagenes.imagenesBase64[i]);
                                    producto_imgsTipo_1.push(imagenes.imagenesTipo[i]);
                                    break;
                                default:
                                    imagenes_errorLectura++;
                            }
                        }
                        if (imagenes_add != 0) {
                            this.setState(function (STATE, PROPS) {
                                return {
                                    imagenes_base64: producto_imgsBase64_1,
                                    imagenes_tipo: producto_imgsTipo_1
                                };
                            });
                        }
                        this.props.dispatchRedux(ocultarModalCargando());
                        if (imagenes_errorSize == 0 && imagenes_errorTipo == 0 &&
                            imagenes_errorLimite == 0 && imagenes_errorLectura == 0) {
                        }
                        else {
                            mensaje = "";
                            msj = "";
                            if (imagenes_errorSize != 0) {
                                msj = " imagenes superan el tamaño de 5Mb";
                                if (imagenes_errorSize == 1)
                                    msj = " imagen supera el tamaño de 5Mb";
                                mensaje += "(" + imagenes_errorSize + ")" + msj + ".\n\n";
                            }
                            if (imagenes_errorTipo != 0) {
                                msj = " archivos NO son tipo jpg , png o jpeg";
                                if (imagenes_errorTipo == 1)
                                    msj = " archivo NO es tipo jpg , png o jpeg";
                                mensaje += "(" + imagenes_errorTipo + ")" + msj + ".\n\n";
                            }
                            if (imagenes_errorLimite != 0) {
                                msj = " imagenes NO fueron añadidas por superar el limite de imagenes " +
                                    "permitidas por producto";
                                if (imagenes_errorLimite == 1)
                                    msj = " imagen NO fue añadida por superar " +
                                        "el limite de imagenes permitidas por producto";
                                mensaje += "(" + imagenes_errorLimite + ")" + msj + ".\n\n";
                            }
                            if (imagenes_errorLectura != 0) {
                                msj = " imagenes NO pudieron ser obtenidas";
                                if (imagenes_errorLectura == 1)
                                    msj = " imagen NO pudo ser obtenida";
                                mensaje += "(" + imagenes_errorLectura + ")" + msj + ".\n\n";
                            }
                            mensaje = mensaje.substring(0, mensaje.length - 2);
                            this.mostrar_modalMensajeError("Algo salio mal al agregar algunas imagenes", mensaje, function () {
                                _this.ocultar_modalMensaje();
                            });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    PaginaProducto.prototype.handleInputNombre = function (nuevoNombre) {
        this.setState(function (STATE, PROPS) {
            return {
                nombre: nuevoNombre,
                error_nombre: null
            };
        });
    };
    PaginaProducto.prototype.handleEvento_keyDown_inputNombre = function (evento) {
        var caracteresValidos = "abcdefghijklmnñopqrstuvwxyz áéíóúäëïöü";
        var caracteresEspeciales = ["ArrowRight", "ArrowLeft", "Backspace"];
        if (caracteresEspeciales.find(function (teclaESP) { return teclaESP == evento.key; }) == undefined &&
            caracteresValidos.indexOf(evento.key.toLowerCase()) == -1) {
            evento.preventDefault();
        }
        //console.log( "========= KeyDown inputNombre =======" )
        //console.log( evento.key )
    };
    PaginaProducto.prototype.handleEvento_focusPerdido_inputNombre = function () {
        var _this = this;
        this.setState(function (STATE, PROPS) {
            return {
                nombre: Utilerias.corregirTexto_quitarEspaciosEnBlanco(_this.state.nombre)
            };
        });
    };
    PaginaProducto.prototype.handleInputDimensionPE = function (dimensionPE) {
        var _this = this;
        this.setState(function (STATE, PROPS) {
            return {
                inputDimensionPE: dimensionPE,
                dimension: _this.getDimension(dimensionPE, _this.state.inputDimensionPD),
                error_dimension: null
            };
        });
    };
    PaginaProducto.prototype.handleInputDimensionPD = function (dimensionPD) {
        var _this = this;
        this.setState(function (STATE, PROPS) {
            return {
                inputDimensionPD: dimensionPD,
                dimension: _this.getDimension(_this.state.inputDimensionPE, dimensionPD),
                error_dimension: null
            };
        });
    };
    PaginaProducto.prototype.handleComboDimension = function (tipo) {
        var _this = this;
        var valorDimensionPE = this.state.inputDimensionPE;
        var valorDimensionPD = this.state.inputDimensionPD;
        if (tipo == 'N/A') {
            valorDimensionPE = "";
            valorDimensionPD = "";
        }
        this.setState(function (STATE, PROPS) {
            return {
                dimension_tipo: tipo,
                inputDimensionPE: valorDimensionPE,
                inputDimensionPD: valorDimensionPD,
                dimension: _this.getDimension(valorDimensionPE, valorDimensionPD),
                error_dimension: null
            };
        });
    };
    PaginaProducto.prototype.getDimensionPE_placeHolder = function () {
        var PE = "0";
        var dimensionBD = this.props.stateReduxProducto.productoBD.dimension;
        var dimension = dimensionBD + "";
        if (this.state.dimension_tipo == "N/A" || dimensionBD == 0)
            return "0";
        else {
            if (dimension.indexOf('.') == -1)
                return Utilerias.getNumeroConComas(dimension);
            return Utilerias.getNumeroConComas(dimension.split('.')[0]);
        }
    };
    PaginaProducto.prototype.getDimensionPD_placeHolder = function () {
        var PD = "";
        var dimensionBD = this.props.stateReduxProducto.productoBD.dimension;
        var dimension = dimensionBD + "";
        if (this.state.dimension_tipo == "N/A" || dimensionBD == 0)
            return "00";
        else {
            if (dimension.indexOf('.') == -1)
                return "00";
            PD = dimension.split('.')[1];
            if (PD.length == 1)
                return PD + "0";
            else
                return PD.substring(0, 2);
        }
    };
    PaginaProducto.prototype.getValorDimensionResumen = function () {
        var dimension = "";
        // EVALUAR TIPO
        if (this.state.dimension_tipo == "N/A") {
            dimension = "N/A";
        }
        else {
            // EVALUAR PARTE ENTERA
            if (this.state.inputDimensionPE == "") {
                dimension = "0 . ";
            }
            else {
                var dimensionPE = Number(this.state.inputDimensionPE.replace(',', '').replace(' ', ''));
                if (dimensionPE == 0)
                    dimension = "0 . ";
                else
                    dimension = Utilerias.getNumeroConComas(dimensionPE + "") + " . ";
            }
            // EVALUAR PARTE DECIMAL
            if (this.state.inputDimensionPD == "") {
                dimension += "00";
            }
            else {
                var dimPD = this.state.inputDimensionPD.replace(',', '').replace(' ', '');
                switch (dimPD.length) {
                    case 1:
                        dimPD = dimPD + "0";
                        break;
                    case 2: break;
                    default: dimPD = dimPD.substring(0, 2);
                }
                dimension += dimPD;
            }
            // ADD TIPO
            dimension += " " + this.state.dimension_tipo;
        }
        return dimension;
    };
    PaginaProducto.prototype.getDimension = function (PE, PD) {
        var dimension = Utilerias.getNumero(PE, PD, 2);
        if (isNaN(dimension)) {
            console.log("Dimension NO es numero");
            return 0;
        }
        else
            return dimension;
    };
    //==========================================================================
    //                 FUNCIONALIDADES DE LA SECCION 2
    //===========================================================================
    PaginaProducto.prototype.handleEvento_keyDown_inputCodigoBarras = function (evento) {
        var caracteresValidos = "abcdefghijklmnñopqrstuvwxyz1234567890";
        var caracteresEspeciales = ["ArrowRight", "ArrowLeft", "Backspace"];
        if (caracteresEspeciales.find(function (teclaESP) { return teclaESP == evento.key; }) == undefined &&
            caracteresValidos.indexOf(evento.key.toLowerCase()) == -1) {
            evento.preventDefault();
        }
        //console.log( "========= KeyDown inputNombre =======" )
        //console.log( evento.key )
    };
    PaginaProducto.prototype.handleEvento_focusPerdido_inputCodigoBarras = function () {
        var _this = this;
        this.setState(function (STATE, PROPS) {
            return {
                codigo_barras: Utilerias.corregirTexto_quitarEspaciosEnBlanco(_this.state.codigo_barras)
            };
        });
    };
    PaginaProducto.prototype.handleInputPrecioPE = function (precioPE) {
        var _this = this;
        this.setState(function (STATE, PROPS) {
            return {
                inputPrecioPE: precioPE,
                precio: _this.getPrecio(precioPE, _this.state.inputPrecioPD),
                error_precio: null
            };
        });
    };
    PaginaProducto.prototype.handleInputPrecioPD = function (precioPD) {
        var _this = this;
        this.setState(function (STATE, PROPS) {
            return {
                inputPrecioPD: precioPD,
                precio: _this.getPrecio(_this.state.inputPrecioPE, precioPD),
                error_precio: null
            };
        });
    };
    PaginaProducto.prototype.getPrecioPE_placeHolder = function () {
        var precioBD = this.props.stateReduxProducto.productoBD.precio;
        var precio = precioBD + "";
        if (precioBD == 0)
            return "0";
        else {
            if (precio.indexOf('.') == -1)
                return Utilerias.getNumeroConComas(precio);
            return Utilerias.getNumeroConComas(precio.split('.')[0]);
        }
    };
    PaginaProducto.prototype.getPrecioPD_placeHolder = function () {
        var PD = "";
        var precioBD = this.props.stateReduxProducto.productoBD.precio;
        var precio = precioBD + "";
        if (precioBD == 0)
            return "00";
        else {
            if (precio.indexOf('.') == -1)
                return "00";
            PD = precio.split('.')[1];
            if (PD.length == 1)
                return PD + "0";
            else
                return PD.substring(0, 2);
        }
    };
    PaginaProducto.prototype.getValorPrecioResumen = function () {
        var precio = "";
        // EVALUAR PARTE ENTERA
        if (this.state.inputPrecioPE == "") {
            precio = "0 . ";
        }
        else {
            var precioPE = Number(this.state.inputPrecioPE.replace(',', '').replace(' ', ''));
            if (precioPE == 0)
                precio = "0 . ";
            else
                precio = Utilerias.getNumeroConComas(precioPE + "") + " . ";
        }
        // EVALUAR PARTE DECIMAL
        if (this.state.inputPrecioPD == "") {
            precio += "00";
        }
        else {
            var prePD = this.state.inputPrecioPD.replace(',', '').replace(' ', '');
            switch (prePD.length) {
                case 1:
                    prePD = prePD + "0";
                    break;
                case 2: break;
                default: prePD = prePD.substring(0, 2);
            }
            precio += prePD;
        }
        return precio;
    };
    PaginaProducto.prototype.getPrecio = function (PE, PD) {
        var precio = Utilerias.getNumero(PE, PD, 2);
        if (isNaN(precio)) {
            console.log("Precio NO es numero");
            return 0;
        }
        else
            return precio;
    };
    PaginaProducto.prototype.handleEvento_focusPerdido_inputDescripcion = function () {
        var _this = this;
        this.setState(function (STATE, PROPS) {
            return {
                descripcion: Utilerias.corregirTexto_quitarEspaciosEnBlanco(_this.state.descripcion)
            };
        });
    };
    //=================================================================================
    //              FUNCIONALIDADES DEL MODAL IMAGEN
    //=================================================================================
    PaginaProducto.prototype.modalImagen_accionX = function () { this.ocultarModalImagen(); };
    PaginaProducto.prototype.modalImagen_accionClickImagen = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalImagen_headerVisible: !STATE.modalImagen_headerVisible
            };
        });
    };
    PaginaProducto.prototype.modalImagen_accionEliminar = function () {
        var imagenesBase64 = this.state.imagenes_base64.filter(function () { return true; });
        var imagenesTipo = this.state.imagenes_tipo.filter(function () { return true; });
        var imagenBase64_eliminada = imagenesBase64.splice(this.state.modalImagen_imagenIndex, 1);
        var imagenTipo_eliminada = imagenesTipo.splice(this.state.modalImagen_imagenIndex, 1);
        if (imagenBase64_eliminada.length != 0 && imagenTipo_eliminada.length != 0) {
            this.setState(function (STATE, PRODS) {
                return {
                    imagenes_base64: imagenesBase64,
                    imagenes_tipo: imagenesTipo
                };
            });
            this.ocultarModalImagen();
        }
        else {
            alert("NO FUE POSIBLLE ELIMINAR LA IMAGEN");
        }
    };
    PaginaProducto.prototype.ocultarModalImagen = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalImagen_visible: false,
                modalImagen_headerVisible: true,
                modalImagen_imagen: "",
                modalImagen_imagenIndex: -1
            };
        });
    };
    PaginaProducto.prototype.mostrarModalImagen = function (imagenBase64, index) {
        this.setState(function (STATE, PROPS) {
            return {
                modalImagen_visible: true,
                modalImagen_imagen: imagenBase64,
                modalImagen_imagenIndex: index
            };
        });
    };
    //=====================================================================
    //              HANDLES DEL MODAL MENSAJE
    //=====================================================================
    PaginaProducto.prototype.mostrar_modalMensajeCorrecto = function (titulo, descripcion, handleClick_botonAceptar) {
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
    PaginaProducto.prototype.mostrar_modalMensajeError = function (titulo, descripcion, handleClick_botonAceptar) {
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
    PaginaProducto.prototype.mostrar_modalMensajePregunta = function (titulo, descripcion, handleClick_botonNO, handleClick_botonSI) {
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
    PaginaProducto.prototype.ocultar_modalMensaje = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalMensaje_visible: false
            };
        });
    };
    //===================================================================================
    //                  DISEÑOS INDIVIDUALES DE LA PAGINA
    //===================================================================================
    //_______________________________________
    //  NAVEGACION ejemplo:  (1)--(2)--(3)
    //_______________________________________
    PaginaProducto.prototype.renderizarNavegacion = function (cantidadItems) {
        var _this = this;
        var botones_lineas = [];
        var _loop_1 = function (i) {
            var clasesCSS = "botonSeccionProducto";
            if (i == this_1.props.stateReduxProducto.seccionActual)
                clasesCSS += " botonSeccionActual";
            var boton = React.createElement(Button, { variant: 'text', className: clasesCSS, key: "paginaProducto-botonPag-" + i, onClick: function (evento) {
                    if (_this.carruselContenedorPagina != null) {
                        _this.carruselContenedorPagina.slideTo(i - 1);
                        _this.props.dispatchRedux(ReduxProducto_setSeccionActual(i));
                    }
                } }, i);
            botones_lineas.push(boton);
            var linea = (React.createElement("div", { className: 'linea', key: "paginaProducto-lineaPag-" + i }, " "));
            botones_lineas.push(linea);
        };
        var this_1 = this;
        for (var i = 1; i <= cantidadItems; i++) {
            _loop_1(i);
        }
        botones_lineas.pop();
        return (React.createElement("div", { className: "divPaginacion" },
            " ",
            botones_lineas,
            "  "));
    };
    //_______________________________________
    //  HTML DE UN BOTON DE ACCION
    //_______________________________________
    PaginaProducto.prototype.generarBoton = function (clasesCSS, texto, accion) {
        return (React.createElement(Button, { variant: 'text', className: clasesCSS, onClick: function (evento) { return accion(); }, key: "paginaProducto-divBotones-" + texto }, texto));
    };
    //_______________________________________
    //  DIV QUE CONTIENE LOS BOTONES DE ACCION
    //_______________________________________
    PaginaProducto.prototype.renderizarBotones = function () {
        var _this = this;
        var botonesVisibles = [];
        //_______________
        // BOTON ATRAS
        //_______________
        if (this.props.stateReduxProducto.seccionActual != 1) {
            botonesVisibles.push(this.generarBoton("botonAzul", "Atras", function () {
                if (_this.carruselContenedorPagina != null) {
                    _this.carruselContenedorPagina.slideTo(_this.props.stateReduxProducto.seccionActual - 2);
                    _this.props.dispatchRedux(ReduxProducto_setSeccionActual(_this.props.stateReduxProducto.seccionActual - 1));
                }
            }));
        }
        //_______________
        // BOTON SIGUIENTE
        //_______________
        if (this.props.stateReduxProducto.seccionActual != 3) {
            botonesVisibles.push(this.generarBoton("botonAzul", "Siguiente", function () {
                if (_this.carruselContenedorPagina != null) {
                    _this.carruselContenedorPagina.slideTo(_this.props.stateReduxProducto.seccionActual);
                    _this.props.dispatchRedux(ReduxProducto_setSeccionActual(_this.props.stateReduxProducto.seccionActual + 1));
                }
            }));
        }
        return (React.createElement("div", { className: 'divBotones' },
            " ",
            botonesVisibles,
            "  "));
    };
    //_______________________________________
    //  CARRUSEL DE IMAGENES DEL PRODUCTO
    //_______________________________________
    PaginaProducto.prototype.renderizarImagenesCarrusel = function () {
        var _this = this;
        return this.state.imagenes_base64.map(function (img, index) {
            var imagen = (React.createElement("div", { className: 'iconoImagen' },
                React.createElement(FontAwesomeIcon, { icon: faImage })));
            if (img != "") {
                imagen = (React.createElement("img", { src: img, onClick: function (evento) { _this.mostrarModalImagen(img, index); } }));
            }
            return (React.createElement(SwiperSlide, { className: "itemCarrusel", key: "imgCarruselProducto-" + index }, imagen));
        });
    };
    //_______________________________________
    //  CARRUSEL DE IMAGENES DEL PRODUCTO (RESUMEN)
    //_______________________________________
    PaginaProducto.prototype.renderizarImagenesCarruselResumen = function () {
        return this.state.imagenes_base64.map(function (img, index) {
            return (React.createElement(SwiperSlide, { className: "itemCarrusel", key: "imgCarruselProductoResumen-" + index },
                React.createElement("img", { src: img })));
        });
    };
    //________________________________________
    // COMPONENTE DE TEXTO CON ICONO PARA ERRORES
    //________________________________________
    PaginaProducto.prototype.crearTextoError = function (texto) {
        return (React.createElement("div", { className: 'div_labelError' },
            React.createElement("div", { className: 'icono' },
                React.createElement(FontAwesomeIcon, { icon: faExclamationTriangle })),
            texto));
    };
    /*======================================================================================
                            1º PANTALLA DEL FORMULARIO
    ========================================================================================*/
    PaginaProducto.prototype.renderizarSeccion1 = function () {
        var _this = this;
        // EVALUAR IMAGEN MARCA
        var imagenMarca = null;
        if (this.props.stateReduxProducto.actual.marca_imagen != "") {
            imagenMarca = (React.createElement("img", { src: this.props.stateReduxProducto.actual.marca_imagen }));
        }
        // TEXTO PREDETERMINADO INPUT NOMBRE
        var textoDefault_inputNombre = this.props.stateReduxProducto.productoBD.nombre;
        if (textoDefault_inputNombre == "")
            textoDefault_inputNombre = "Nombre del Producto";
        // TEXTO PREDETERMINADO MARCA
        var textoDefault_marca = this.props.stateReduxProducto.productoBD.marca_nombre;
        if (textoDefault_marca == "")
            textoDefault_marca = "N/A";
        return (React.createElement(SwiperSlide, { className: "itemSeccion" },
            React.createElement(Button, { variant: 'text', className: 'botonVerde', onClick: function (evento) {
                    var selector = document.createElement('input');
                    selector.type = "file";
                    selector.multiple = true;
                    selector.accept = "image/*";
                    selector.onchange = function (evento) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.handleChange_inputFileImagen(selector)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    }); }); };
                    selector.click();
                } }, "Elegir Imagen"),
            React.createElement(Swiper, { className: "carrusel", effect: "creative", modules: [Pagination, Navigation, EffectCreative], slidesPerView: 1, slidesPerGroup: 1, loop: true, autoHeight: true, allowTouchMove: true, onSwiper: function (carrusel) { _this.carruselImagenes = carrusel; }, onSlideChangeTransitionEnd: function () {
                    _this.carruselContenedorPagina.slideReset(500);
                }, onSlideResetTransitionEnd: function () {
                    _this.carruselContenedorPagina.slideReset(500);
                }, creativeEffect: {
                    prev: {
                        shadow: true,
                        translate: [0, 0, -600]
                    },
                    next: {
                        translate: ["100%", 0, 0]
                    }
                }, pagination: { clickable: true }, navigation: true }, this.renderizarImagenesCarrusel()),
            React.createElement(TextFieldConSugerencias, { CSS: "inputNombre", sugerencias: this.state.opcionesInputNombre, titulo: "Nombre", inputError: (this.state.error_nombre != null) ? true : false, esRequerido: true, componenteAyuda: this.state.error_nombre, textoPredeterminado: textoDefault_inputNombre, valorInput: this.state.nombre, handleChange_valorInput: this.handleInputNombre.bind(this), handleEvento_keyDown: this.handleEvento_keyDown_inputNombre.bind(this), handleEvento_focusPerdido: this.handleEvento_focusPerdido_inputNombre.bind(this) }),
            React.createElement("div", { className: 'divMarca' },
                imagenMarca,
                React.createElement(TextField, { className: "TextField_E1 inputMarca", label: "Marca", helperText: "", placeholder: textoDefault_marca, variant: "outlined", type: "text", InputProps: {
                        readOnly: true
                    }, value: this.props.stateReduxProducto.actual.marca_nombre, onClick: function (evento) {
                        if (_this.props.stateReduxProducto.actual.marca_id != "") {
                            _this.mostrar_modalMensajePregunta("Desea quitar la marca del producto?", "", function () { _this.ocultar_modalMensaje(); }, function () {
                                _this.props.dispatchRedux(ReduxProducto_setMarcaActual({
                                    id: "",
                                    nombre: "",
                                    imagen: "",
                                    imagenTipo: ""
                                }));
                                _this.ocultar_modalMensaje();
                            });
                        }
                    } }),
                React.createElement(IconButton, { className: 'iconoSelectorMarca', onClick: function (evento) {
                        _this.props.dispatchRedux(ReduxProducto_setProductoActual({
                            nombre: _this.state.nombre,
                            imagenes_base64: _this.state.imagenes_base64,
                            imagenes_tipo: _this.state.imagenes_tipo,
                            dimension: _this.state.dimension,
                            dimension_tipo: _this.state.dimension_tipo,
                            codigo_barras: _this.state.codigo_barras,
                            precio: _this.state.precio,
                            descripcion: _this.state.descripcion
                        }));
                        _this.props.navigate('/Marcas');
                    } },
                    React.createElement(FontAwesomeIcon, { icon: faEllipsisH }))),
            React.createElement("div", { className: cssDimension.divDimension },
                React.createElement("div", { className: cssDimension.divContenido },
                    React.createElement(TextFieldNumerico, { clasesCSS: "TextField_E1 " + cssDimension.inputDimension_PE, maxCantidadDigitos: 5, titulo: "Dimension", textoAdicional: "", textoPredeterminado: this.getDimensionPE_placeHolder(), maxCantidadCaracteres: -1, valorInput: this.state.inputDimensionPE, handleValorInput: this.handleInputDimensionPE.bind(this), bloqueado: (this.state.dimension_tipo == 'N/A') ? true : false }),
                    React.createElement("label", { className: cssDimension.labelPunto }, "."),
                    React.createElement(TextFieldNumerico, { clasesCSS: "TextField_E1 " + cssDimension.inputDimension_PD, maxCantidadDigitos: 2, maxCantidadCaracteres: 2, titulo: "", textoAdicional: "", textoPredeterminado: this.getDimensionPD_placeHolder(), valorInput: this.state.inputDimensionPD, handleValorInput: this.handleInputDimensionPD.bind(this), bloqueado: (this.state.dimension_tipo == 'N/A') ? true : false }),
                    React.createElement(Select, { className: 'Combo_E1 ' + cssDimension.comboDimension, MenuProps: {
                            className: 'menuCombo_E1'
                        }, autoWidth: true, displayEmpty: true, value: this.state.dimension_tipo, onChange: function (evento) { _this.handleComboDimension(evento.target.value); } },
                        React.createElement(MenuItem, { value: 'N/A' },
                            " ",
                            "N/A",
                            " "),
                        React.createElement(MenuItem, { value: 'L' }, " L "),
                        React.createElement(MenuItem, { value: 'ml' }, " ml "),
                        React.createElement(MenuItem, { value: 'kg' }, " kg "),
                        React.createElement(MenuItem, { value: 'gr' }, " gr "),
                        React.createElement(MenuItem, { value: 'mts' }, " mts "),
                        React.createElement(MenuItem, { value: 'cm' }, " cm "),
                        React.createElement(MenuItem, { value: 'mm' }, " mm "))),
                this.state.error_dimension)));
    };
    /*======================================================================================
                            2º PANTALLA DEL FORMULARIO
    ========================================================================================*/
    PaginaProducto.prototype.renderizarSeccion2 = function () {
        var _this = this;
        // EVALUAR IMAGEN CATEGORIA
        var imagenCategoria = null;
        if (this.props.stateReduxProducto.actual.categoria_imagen != "") {
            imagenCategoria = (React.createElement("img", { src: this.props.stateReduxProducto.actual.categoria_imagen }));
        }
        // TEXTO PREDETERMINADO CODIGO DE BARRAS
        var textoDefault_codigoBarras = this.props.stateReduxProducto.productoBD.codigo_barras;
        if (textoDefault_codigoBarras == "")
            textoDefault_codigoBarras = "N/A";
        // TEXTO PREDETERMINADO DESCRIPCION
        var textoDefault_descripcion = this.props.stateReduxProducto.productoBD.descripcion;
        if (textoDefault_descripcion == "")
            textoDefault_descripcion = "Descripcion del producto";
        return (React.createElement(SwiperSlide, { className: "itemSeccion" },
            React.createElement("div", { className: 'divCategoria' },
                imagenCategoria,
                React.createElement(TextField, { className: "TextField_E1 inputCategoria", label: "Categoria", helperText: "", placeholder: "N/A", variant: "outlined", type: "text", InputProps: {
                        readOnly: true
                    }, value: this.props.stateReduxProducto.actual.categoria_nombre, onClick: function (evento) {
                        if (_this.props.stateReduxProducto.actual.categoria_id != "") {
                            _this.mostrar_modalMensajePregunta("Desea quitar la categoria del producto?", "", function () { _this.ocultar_modalMensaje(); }, function () {
                                _this.props.dispatchRedux(ReduxProducto_setCategoriaActual({
                                    id: "",
                                    nombre: "",
                                    imagen: "",
                                    imagenTipo: "",
                                    ubicacion: ""
                                }));
                                _this.ocultar_modalMensaje();
                            });
                        }
                    } }),
                React.createElement(IconButton, { className: 'iconoSelectorCategoria', onClick: function (evento) {
                        _this.props.dispatchRedux(ReduxProducto_setProductoActual({
                            nombre: _this.state.nombre,
                            imagenes_base64: _this.state.imagenes_base64,
                            imagenes_tipo: _this.state.imagenes_tipo,
                            dimension: _this.state.dimension,
                            dimension_tipo: _this.state.dimension_tipo,
                            codigo_barras: _this.state.codigo_barras,
                            precio: _this.state.precio,
                            descripcion: _this.state.descripcion
                        }));
                        _this.props.navigate('/Categorias');
                    } },
                    React.createElement(FontAwesomeIcon, { icon: faEllipsisH }))),
            React.createElement("div", { className: 'divCodigoDeBarras' },
                React.createElement("div", { className: 'divContenido' },
                    React.createElement("div", { className: 'divIcono' },
                        React.createElement(FontAwesomeIcon, { icon: faBarcode })),
                    React.createElement(TextField, { className: "TextField_E1 inputCodigoDeBarras", label: "Codigo de Barras", helperText: "", placeholder: textoDefault_codigoBarras, variant: "outlined", type: "text", required: true, autoComplete: 'off', value: this.state.codigo_barras, onChange: function (evento) {
                            _this.setState(function (STATE, PROPS) {
                                return {
                                    codigo_barras: evento.target.value,
                                    error_codigoBarras: null
                                };
                            });
                        }, onKeyDown: function (evento) { _this.handleEvento_keyDown_inputCodigoBarras(evento); }, onBlur: function (evento) { _this.handleEvento_focusPerdido_inputCodigoBarras(); } })),
                this.state.error_codigoBarras),
            React.createElement("div", { className: 'divPrecio' },
                React.createElement("div", { className: 'divContenido' },
                    React.createElement("div", { className: 'divIcono' },
                        React.createElement(FontAwesomeIcon, { icon: faDollarSign })),
                    React.createElement(TextFieldNumerico, { clasesCSS: "TextField_E1 inputPrecio_PE", maxCantidadDigitos: 5, titulo: "Precio", textoAdicional: "", textoPredeterminado: this.getPrecioPE_placeHolder(), maxCantidadCaracteres: -1, valorInput: this.state.inputPrecioPE, handleValorInput: this.handleInputPrecioPE.bind(this), bloqueado: false }),
                    React.createElement("label", { className: 'labelPunto' }, "."),
                    React.createElement(TextFieldNumerico, { clasesCSS: "TextField_E1 inputPrecio_PD", maxCantidadDigitos: 2, maxCantidadCaracteres: 2, titulo: "", textoAdicional: "", textoPredeterminado: this.getPrecioPD_placeHolder(), valorInput: this.state.inputPrecioPD, handleValorInput: this.handleInputPrecioPD.bind(this), bloqueado: false })),
                this.state.error_precio),
            React.createElement(TextField, { className: "TextField_E1 inputDescripcion", label: "Descripcion", helperText: "", placeholder: textoDefault_descripcion, variant: "outlined", type: "text", multiline: true, autoComplete: 'off', rows: 4, value: this.state.descripcion, onChange: function (evento) {
                    _this.setState(function (STATE, PROPS) {
                        return {
                            descripcion: evento.target.value
                        };
                    });
                }, onBlur: function (evento) { _this.handleEvento_focusPerdido_inputDescripcion(); } })));
    };
    /*======================================================================================
                            3º PANTALLA DEL FORMULARIO (RESUMEN)
    ========================================================================================*/
    PaginaProducto.prototype.renderizarSeccion3 = function () {
        // EVALUAR NOMBRE DEL PRODUCTO
        var nombre = this.state.nombre;
        if (nombre == "") {
            if (this.props.stateReduxProducto.productoBD.nombre == "")
                nombre = "N/A";
            else
                nombre = this.props.stateReduxProducto.productoBD.nombre;
        }
        // EVALUAR IMAGEN MARCA
        var imagenMarca = null;
        if (this.props.stateReduxProducto.actual.marca_imagen != "") {
            imagenMarca = (React.createElement("img", { src: this.props.stateReduxProducto.actual.marca_imagen }));
        }
        // EVALUAR NOMBRE DE LA MARCA
        var nombreMarca = this.props.stateReduxProducto.actual.marca_nombre;
        if (nombreMarca == "")
            nombreMarca = "N/A";
        // EVALUAR IMAGEN CATEGORIA
        var imagenCategoria = null;
        if (this.props.stateReduxProducto.actual.categoria_imagen != "") {
            imagenCategoria = (React.createElement("img", { src: this.props.stateReduxProducto.actual.categoria_imagen }));
        }
        // EVALUAR NOMBRE DE LA CATEGORIA
        var nombreCategoria = this.props.stateReduxProducto.actual.categoria_nombre;
        if (nombreCategoria == "")
            nombreCategoria = "N/A";
        // EVALUAR CODIGO DE BARRAS
        var codigoBarras = this.state.codigo_barras;
        if (codigoBarras == "") {
            codigoBarras = this.props.stateReduxProducto.productoBD.codigo_barras;
            if (codigoBarras == "")
                codigoBarras = "N/A";
        }
        // EVALUAR DESCRIPCION
        var descripcion = this.state.descripcion;
        if (descripcion == "")
            descripcion = "N/A";
        return (React.createElement(SwiperSlide, { className: "itemSeccion" },
            React.createElement("label", { className: 'labelTitulo' }, " Resumen del Producto "),
            React.createElement(Swiper, { className: "carrusel", effect: "creative", modules: [Pagination, Navigation, EffectCreative], slidesPerView: 1, slidesPerGroup: 1, loop: true, autoHeight: true, allowTouchMove: true, creativeEffect: {
                    prev: {
                        shadow: true,
                        translate: [0, 0, -600]
                    },
                    next: {
                        translate: ["100%", 0, 0]
                    }
                }, pagination: { clickable: true }, navigation: true }, this.renderizarImagenesCarruselResumen()),
            React.createElement("div", { className: 'divNombreResumen' },
                React.createElement("label", { className: 'labelSubtitulo' }, " Nombre "),
                React.createElement("div", { className: 'labelDato divDatoResumen labelNombre' },
                    " ",
                    nombre,
                    " ")),
            React.createElement("div", { className: 'divMarcaResumen' },
                React.createElement("label", { className: 'labelSubtitulo' }, " Marca "),
                React.createElement("div", { className: 'divDato' },
                    imagenMarca,
                    React.createElement("div", { className: 'divDatoResumen labelMarca labelDato' }, nombreMarca))),
            React.createElement("div", { className: 'divDimensionPrecioResumen' },
                React.createElement("div", { className: 'divDimensionResumen' },
                    React.createElement("label", { className: 'labelSubtitulo' }, " Dimension "),
                    React.createElement("div", { className: 'labelDato divDatoResumen labelDimension' }, this.getValorDimensionResumen())),
                React.createElement("div", { className: 'divPrecioResumen' },
                    React.createElement("div", { className: 'labelSubtitulo' }, " Precio "),
                    React.createElement("div", { className: 'divDatoResumen divDato' },
                        React.createElement("div", { className: 'icono' },
                            React.createElement(FontAwesomeIcon, { icon: faDollarSign })),
                        React.createElement("label", { className: 'labelDato' },
                            "  ",
                            this.getValorPrecioResumen(),
                            "   ")))),
            React.createElement("div", { className: 'divCategoriaResumen' },
                React.createElement("label", { className: 'labelSubtitulo' }, " Categoria "),
                React.createElement("div", { className: 'divDato' },
                    imagenCategoria,
                    React.createElement(ElementoConTooltip, { tituloTooltip: 'Ubicacion de la categoria', descripcionTooltip: this.props.stateReduxProducto.actual.categoria_ubicacion, texto: nombreCategoria, icono: "", CSS: 'divDatoResumen labelCategoria labelDato', tipoElemento: classElementoConTooltip.ELEMENTO_LABEL }))),
            React.createElement("div", { className: 'divCodigoDeBarrasResumen' },
                React.createElement("div", { className: 'labelSubtitulo' }, " Codigo de Barras "),
                React.createElement("div", { className: 'divDatoResumen divDato' },
                    React.createElement("div", { className: 'icono' },
                        React.createElement(FontAwesomeIcon, { icon: faBarcode })),
                    React.createElement("label", { className: 'labelDato' },
                        "  ",
                        codigoBarras,
                        "   "))),
            React.createElement("div", { className: 'divDescripcionResumen' },
                React.createElement("div", { className: 'labelSubtitulo' }, " Descripcion "),
                React.createElement("div", { className: 'divDatoResumen labelDato labelDescripcion' }, descripcion))));
    };
    //=======================================================================
    //              ACTUALIZACION DEL COMPONENTE
    //=======================================================================
    PaginaProducto.prototype.componentDidUpdate = function (prevProps, prevState) {
        this.carruselContenedorPagina.slideReset(300);
    };
    //=======================================================================
    //                  DEFINICION DEL HTML
    //=======================================================================
    PaginaProducto.prototype.render = function () {
        var _this = this;
        return (React.createElement("main", { className: 'contenedorPagina paginaProducto' },
            React.createElement(Encabezado, __assign({}, this.props, { habilitar_BotonRegresar: true, habilitar_MenuPrincipal: false, habilitar_MenuOpciones: true, titulo: "Papeleria Geraldine Papeleria Geraldine", tituloTooltip: "Nombre de tu Negocio", itemsMenuPrincipal: [], itemsMenuOpciones: this.menuOpciones, itemMenuP_seleccionado: "", itemMenuOp_seleccionado: "", botonRegresar_URL: '/MisProductos' })),
            this.renderizarNavegacion(3),
            React.createElement(Swiper, { className: "carruselPaginaProducto", effect: "slide", slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 1, autoHeight: true, allowTouchMove: false, onSwiper: function (carrusel) {
                    _this.carruselContenedorPagina = carrusel;
                    _this.carruselContenedorPagina.slideTo(_this.props.stateReduxProducto.seccionActual - 1);
                } },
                this.renderizarSeccion1(),
                this.renderizarSeccion2(),
                this.renderizarSeccion3()),
            this.renderizarBotones(),
            React.createElement(ModalImagen, { modalVisible: this.state.modalImagen_visible, botonEliminarVisible: true, imagenURL: this.state.modalImagen_imagen, accionX: this.modalImagen_accionX.bind(this), accionEliminar: this.modalImagen_accionEliminar.bind(this), accionClickImagen: this.modalImagen_accionClickImagen.bind(this), headerVisible: this.state.modalImagen_headerVisible }),
            React.createElement(ModalMensaje, { titulo: this.state.modalMensaje_titulo, descripcion: this.state.modalMensaje_descripcion, tipo: this.state.modalMensaje_tipo, modalVisible: this.state.modalMensaje_visible, handleClick_botonAceptar: this.modalMensaje_handleClick_botonAceptar.bind(this), handleClick_botonNO: this.modalMensaje_handleClick_botonNO.bind(this), handleClick_botonSI: this.modalMensaje_handleClick_botonSI.bind(this) })));
    };
    return PaginaProducto;
}(React.Component));
export default PaginaProducto;
