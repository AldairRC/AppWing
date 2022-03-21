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
import { Breadcrumbs, Button } from "@mui/material";
// mis componentes
import ModalCategoria from './ModalCategoria';
import ModalFormulario from './ModalFormulario';
// iconos
import { faFilter, faPlus, faSearch, faEllipsisH, faCaretRight, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// mis componentes
import Encabezado from '../../../Components/Encabezado/Encabezado';
import Paginacion from '../../../Components/Paginacion/Paginacion';
import DivResultado from '../../../Components/DivResultado/DivResultado';
import ElementoConTooltip, { classElementoConTooltip } from '../../../Components/ElementoConTooltip/ElementoConTooltip';
import ModalMensaje, { MENSAJE_CORRECTO, MENSAJE_ERROR, MENSAJE_PREGUNTA } from '../../../Components/ModalMensaje/ModalMensaje';
/*_________________
 redux paginacion
___________________*/
import { setPaginaActual } from "../../../Redux/Controladores/controladorPaginacion";
/*_________________
 redux modal
___________________*/
import { mostrarModalCargando, ocultarModalCargando } from "../../../Redux/Controladores/controladorModal";
/*_________________
 redux producto
___________________*/
import { ReduxProducto_setCategoriaActual } from "../../../Redux/Controladores/controladorProducto";
// utilerias
import Utilerias from "../../../Models/Utilerias";
// css
import "./PaginaCategorias.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var PaginaCategorias = /** @class */ (function (_super) {
    __extends(PaginaCategorias, _super);
    function PaginaCategorias(props) {
        var _this = _super.call(this, props) || this;
        _this.modalMensaje_handleClick_botonAceptar = function () { };
        _this.modalMensaje_handleClick_botonNO = function () { };
        _this.modalMensaje_handleClick_botonSI = function () { };
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        _this.state =
            {
                modalCategoria_visible: false,
                modalCategoria_headerVisible: true,
                modalCategoria_id: "",
                modalCategoria_nombre: "",
                modalCategoria_imagenBase64: "",
                modalCategoria_imagenTipo: "",
                modalFormulario_visible: false,
                modalFormulario_id: "",
                modalFormulario_nombreOriginal: "",
                modalFormulario_inputNombre: "",
                modalFormulario_imagenBase64: "",
                modalFormulario_imagenTipo: "",
                modalMensaje_visible: false,
                modalMensaje_titulo: "",
                modalMensaje_descripcion: "",
                modalMensaje_tipo: MENSAJE_CORRECTO,
                listaCategorias: [],
                totalCategorias: 0,
                categoriasXpagina: 2,
                indicadorSubcategorias: [
                    {
                        id: "",
                        nombre: "Principales",
                        imagenBase64: "",
                        imagenTipo: "",
                        ubicacion: ""
                    }
                ]
            };
        /*============================
            INICIALIZACION DE PROPIEDADES
        ==============================*/
        _this.itemsMenuOpciones = [
            {
                texto: "Agregar Categoria",
                icono: faPlus,
                accion: function () {
                    _this.setState(function (STATE, PROPS) {
                        return {
                            modalFormulario_visible: true
                        };
                    });
                }
            },
            {
                texto: "Filtrar Categorias",
                icono: faFilter,
                accion: function () { return alert("/filtrar categorias"); }
            }
        ];
        // INICIALIZAR PAGINACION
        _this.props.dispatchRedux(setPaginaActual(1));
        return _this;
    }
    PaginaCategorias.prototype.componentDidMount = function () {
        // OBTENCION DE LAS CATEGORIAS
        this.getCategorias(this.props.stateReduxPaginacion.paginaActual);
    };
    /*===============================================================================
                        FUNCIONES
    =================================================================================*/
    PaginaCategorias.prototype.getCategoriaPadre = function () {
        return this.state.indicadorSubcategorias[this.state.indicadorSubcategorias.length - 1];
    };
    PaginaCategorias.prototype.getUbicacionCategoria_nombres = function () {
        var categoriaPadre = this.getCategoriaPadre();
        return categoriaPadre.ubicacion + " / " + categoriaPadre.nombre;
    };
    PaginaCategorias.prototype.getUbicacionCategoria_IDs = function () {
        var IDs = [];
        this.state.indicadorSubcategorias.forEach(function (categoria) {
            if (categoria.id != "")
                IDs.push(categoria.id);
        });
        return IDs;
    };
    /*===============================================================================
                        OPERACIONES EN LA BASE DE DATOS
    =================================================================================*/
    PaginaCategorias.prototype.getCategorias = function (pagina) {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Obteniendo categorias ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta, query, categoriasBD;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/categorias/buscar", [
                            { nombreCampo: "categoriasXpagina", valor: this.state.categoriasXpagina + "" },
                            { nombreCampo: "pagina", valor: pagina + "" },
                            { nombreCampo: "id_categoria_padre", valor: this.getCategoriaPadre().id }
                        ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL OBTENER CATEGORIAS
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        query = [];
                        query = respuesta.datos.listaCategorias;
                        categoriasBD = [];
                        query.forEach(function (categoria) {
                            categoriasBD.push({
                                id: categoria.id,
                                nombre: categoria.nombre,
                                imagenBase64: categoria.imagenBase64,
                                imagenTipo: categoria.imagenTipo,
                                ubicacion: categoria.ubicacion
                            });
                        });
                        this.setState(function (STATE, PROPS) {
                            return {
                                listaCategorias: categoriasBD,
                                totalCategorias: respuesta.datos.totalCategorias
                            };
                        });
                        this.props.dispatchRedux(ocultarModalCargando());
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    PaginaCategorias.prototype.insertarCategoria = function () {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Agregando Categoria ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/categorias/insertar", [
                            { nombreCampo: "id_negocio", valor: "N/A" },
                            { nombreCampo: "categoria_nombre", valor: this.state.modalFormulario_inputNombre },
                            { nombreCampo: "categoria_imagen", valor: this.state.modalFormulario_imagenBase64 },
                            { nombreCampo: "categoria_tipoImagen", valor: this.state.modalFormulario_imagenTipo },
                            { nombreCampo: "id_categoria_padre", valor: this.getCategoriaPadre().id },
                            { nombreCampo: "categoria_ubicacion", valor: JSON.stringify(this.getUbicacionCategoria_IDs()) }
                        ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL INSERTAR CATEGORIA
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        // CATEGORIA INSERTADA EN LA BD
                        this.props.dispatchRedux(ocultarModalCargando());
                        this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, function () {
                            _this.ocultar_modalMensaje();
                            _this.ocultarModalFormulario();
                            _this.getCategorias(_this.props.stateReduxPaginacion.paginaActual);
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    PaginaCategorias.prototype.actualizarCategoria = function () {
        var _this = this;
        var nombreCategoria = "";
        if (this.state.modalFormulario_inputNombre == "")
            nombreCategoria = this.state.modalFormulario_nombreOriginal;
        else
            nombreCategoria = this.state.modalFormulario_inputNombre;
        this.props.dispatchRedux(mostrarModalCargando("Actualizando Categoria ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/categorias/actualizar", [
                            { nombreCampo: "id_categoria", valor: this.state.modalFormulario_id },
                            { nombreCampo: "id_categoria_padre", valor: this.getCategoriaPadre().id },
                            { nombreCampo: "categoria_nombre", valor: nombreCategoria },
                            { nombreCampo: "categoria_imagen", valor: this.state.modalFormulario_imagenBase64 },
                            { nombreCampo: "categoria_imagenTipo", valor: this.state.modalFormulario_imagenTipo }
                        ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL ACTUALIZAR CATEGORIA
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        if (respuesta.datos.existeAdvertencia) {
                            // MARCA ACTUALIZADA A MEDIAS
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () {
                                _this.ocultar_modalMensaje();
                            });
                            return [2 /*return*/];
                        }
                        // CATEGORIA ACTUALIZADA EN LA BD
                        this.props.dispatchRedux(ocultarModalCargando());
                        this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, function () {
                            _this.ocultar_modalMensaje();
                            _this.ocultarModalFormulario();
                            _this.getCategorias(_this.props.stateReduxPaginacion.paginaActual);
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    PaginaCategorias.prototype.eliminarCategoria = function () {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Eliminando Categoria ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/categorias/eliminar", [
                            { nombreCampo: "id_categoria", valor: this.state.modalCategoria_id }
                        ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL ELIMINAR MARCA
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        // CATEGORIA ELIMINADA EN LA BD
                        this.props.dispatchRedux(ocultarModalCargando());
                        this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, function () {
                            _this.ocultar_modalMensaje();
                            _this.ocultarModalCategoria();
                            _this.getCategorias(_this.props.stateReduxPaginacion.paginaActual);
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    //=================================================================================
    //              HANDLES DEL MODAL CATEGORIA SELECCIONADA
    //=================================================================================
    PaginaCategorias.prototype.modalCategoria_handleClick_imagen = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalCategoria_headerVisible: !STATE.modalCategoria_headerVisible
            };
        });
    };
    PaginaCategorias.prototype.modalCategoria_handleClick_X = function () { this.ocultarModalCategoria(); };
    PaginaCategorias.prototype.modalCategoria_handleClick_itemMenuSeleccionar = function () {
        var ubicacion = "";
        this.state.indicadorSubcategorias.forEach(function (categoria) {
            ubicacion += categoria.nombre + " / ";
        });
        ubicacion += this.state.modalCategoria_nombre;
        this.props.dispatchRedux(ReduxProducto_setCategoriaActual({
            id: this.state.modalCategoria_id,
            nombre: this.state.modalCategoria_nombre,
            imagen: this.state.modalCategoria_imagenBase64,
            imagenTipo: this.state.modalCategoria_imagenTipo,
            ubicacion: ubicacion
        }));
        this.props.navigate('/Producto');
    };
    PaginaCategorias.prototype.modalCategoria_handleClick_itemMenuEditar = function () {
        this.mostrarModalFormulario(this.state.modalCategoria_id, this.state.modalCategoria_nombre, this.state.modalCategoria_imagenBase64, this.state.modalCategoria_imagenTipo);
        this.ocultarModalCategoria();
    };
    PaginaCategorias.prototype.modalCategoria_handleClick_itemMenuEliminar = function () {
        var _this = this;
        this.mostrar_modalMensajePregunta('Esta seguro de eliminar la categoria "' + this.state.modalCategoria_nombre + '" ?', "Esto causara que todos los productos que tengan esta categoria asignada queden con N/A", function () {
            _this.ocultar_modalMensaje();
        }, function () {
            _this.ocultar_modalMensaje();
            _this.eliminarCategoria();
        });
    };
    PaginaCategorias.prototype.mostrarModalCategoria = function (idCategoria, imagenBase64, imagenTipo, nombre) {
        this.setState(function (STATE, PROPS) {
            return {
                modalCategoria_id: idCategoria,
                modalCategoria_imagenBase64: imagenBase64,
                modalCategoria_imagenTipo: imagenTipo,
                modalCategoria_nombre: nombre,
                modalCategoria_visible: true,
                modalCategoria_headerVisible: true
            };
        });
    };
    PaginaCategorias.prototype.ocultarModalCategoria = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalCategoria_id: "",
                modalCategoria_imagenBase64: "",
                modalCategoria_imagenTipo: "",
                modalCategoria_nombre: "",
                modalCategoria_visible: false,
                modalCategoria_headerVisible: true
            };
        });
    };
    //======================================================================================
    //              HANDLES DEL MODAL MARCA FORMULARIO
    //======================================================================================
    PaginaCategorias.prototype.modalFormulario_handleClick_botonOK = function () {
        var _this = this;
        //______________________________________________
        // CUANDO EL FORMULARIO ESPERA UNA CATEGORIA NUEVA
        //______________________________________________
        if (this.state.modalFormulario_id == "") {
            // VALIDAR NOMBRE
            if (this.state.modalFormulario_inputNombre == "") {
                this.mostrar_modalMensajeError("Datos Incompletos", "Establezca el nombre de la categoria", function () { _this.ocultar_modalMensaje(); });
                return;
            }
            // VALIDAR IMAGEN
            if (this.state.modalFormulario_imagenBase64 == "") {
                this.mostrar_modalMensajePregunta("Imagen NO establecida", "Desea guardar esta categoria sin imagen?", function () {
                    _this.ocultar_modalMensaje();
                }, function () {
                    _this.ocultar_modalMensaje();
                    _this.insertarCategoria();
                });
                return;
            }
            this.insertarCategoria();
        }
        //______________________________________________
        // CUANDO EL FORMULARIO EDITA UNA CATEGORIA
        //______________________________________________
        else {
            // VALIDAR IMAGEN
            if (this.state.modalFormulario_imagenBase64 == "") {
                this.mostrar_modalMensajePregunta("Imagen NO establecida", "Desea guardar esta categoria sin imagen?", function () {
                    _this.ocultar_modalMensaje();
                }, function () {
                    _this.ocultar_modalMensaje();
                    _this.actualizarCategoria();
                });
                return;
            }
            // DATOS COMPLETOS
            this.actualizarCategoria();
        }
    };
    PaginaCategorias.prototype.modalFormulario_handleChange_inputNombre = function (nuevoValor) {
        this.setState(function (STATE, PROPS) {
            return {
                modalFormulario_inputNombre: nuevoValor
            };
        });
    };
    PaginaCategorias.prototype.modalFormulario_handleClick_X = function () { this.ocultarModalFormulario(); };
    PaginaCategorias.prototype.modalFormulario_handleClick_botonEliminarImagen = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalFormulario_imagenBase64: "",
                modalFormulario_imagenTipo: ""
            };
        });
    };
    PaginaCategorias.prototype.modalFormulario_handleChange_inputFileImagen = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var img_1, ERROR_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(selector.files && selector.files.length != 0)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Utilerias.getImagen(selector.files[0], ["jpg", "png", "jpeg"], 5000000 // 5MB
                            )
                            //console.log( img )
                        ];
                    case 2:
                        img_1 = _a.sent();
                        //console.log( img )
                        if (img_1.codigoERROR != 0) { // ERROR AL CARGAR IMAGEN
                            this.mostrar_modalMensajeError("Algo salio mal al cargar la imagen categoria", img_1.mensajeERROR, function () { return _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        // IMAGEN LEIDA CON EXITO 
                        this.setState(function (STATE, PROPS) {
                            return {
                                modalFormulario_imagenBase64: img_1.base64,
                                modalFormulario_imagenTipo: img_1.tipoImagen
                            };
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        ERROR_1 = _a.sent();
                        this.mostrar_modalMensajeError("Algo salio mal al cargar la imagen categoria", "Vuelva a intentarlo", function () { return _this.ocultar_modalMensaje(); });
                        console.log("ERROR getImagen inputFileMarca: \n" + ERROR_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PaginaCategorias.prototype.mostrarModalFormulario = function (id_categoria, nombreOriginal, imagenBase64, imagenTipo) {
        if (id_categoria === void 0) { id_categoria = ""; }
        if (nombreOriginal === void 0) { nombreOriginal = ""; }
        if (imagenBase64 === void 0) { imagenBase64 = ""; }
        if (imagenTipo === void 0) { imagenTipo = ""; }
        this.setState(function (STATE, PROPS) {
            return {
                modalFormulario_visible: true,
                modalFormulario_id: id_categoria,
                modalFormulario_nombreOriginal: nombreOriginal,
                modalFormulario_inputNombre: nombreOriginal,
                modalFormulario_imagenBase64: imagenBase64,
                modalFormulario_imagenTipo: imagenTipo
            };
        });
    };
    PaginaCategorias.prototype.ocultarModalFormulario = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalFormulario_visible: false,
                modalFormulario_id: "",
                modalFormulario_nombreOriginal: "",
                modalFormulario_inputNombre: "",
                modalFormulario_imagenBase64: "",
                modalFormulario_imagenTipo: ""
            };
        });
    };
    //=====================================================================
    //              HANDLES DEL MODAL MENSAJE
    //=====================================================================
    PaginaCategorias.prototype.mostrar_modalMensajeCorrecto = function (titulo, descripcion, handleClick_botonAceptar) {
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
    PaginaCategorias.prototype.mostrar_modalMensajeError = function (titulo, descripcion, handleClick_botonAceptar) {
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
    PaginaCategorias.prototype.mostrar_modalMensajePregunta = function (titulo, descripcion, handleClick_botonNO, handleClick_botonSI) {
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
    PaginaCategorias.prototype.ocultar_modalMensaje = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalMensaje_visible: false
            };
        });
    };
    //=======================================================================
    //                 DISEÑOS INDIVIDUALES DE LA PAGINA
    //=======================================================================
    //________________________________
    //  INDICADOR DE SUBCATEGORIAS
    //________________________________
    PaginaCategorias.prototype.renderizarIndicadorSubcategorias = function () {
        var itemPrincipal = null;
        var itemComprimido = null;
        var itemAnterior = null;
        var itemActual = null;
        switch (this.state.indicadorSubcategorias.length) {
            case 0:
            case 1: //===========================================
                return null;
            case 2: //===========================================
                itemPrincipal = this.crearItem_indicadorSubcategoria("BOTON", 0);
                itemActual = this.crearItem_indicadorSubcategoria("", 1);
                break;
            case 3: //===========================================
                itemPrincipal = this.crearItem_indicadorSubcategoria("BOTON", 0);
                itemAnterior = this.crearItem_indicadorSubcategoria("BOTON", 1);
                itemActual = this.crearItem_indicadorSubcategoria("", 2);
                break;
            default: //===========================================
                itemPrincipal = this.crearItem_indicadorSubcategoria("BOTON", 0);
                itemComprimido = this.crearItem_indicadorSubcategoria("ICONO_TOOLTIP", -1);
                itemAnterior = this.crearItem_indicadorSubcategoria("BOTON", this.state.indicadorSubcategorias.length - 2);
                itemActual = this.crearItem_indicadorSubcategoria("", this.state.indicadorSubcategorias.length - 1);
                break;
        }
        return (React.createElement(Breadcrumbs, { className: 'divIndicadorSubcategorias', separator: React.createElement("div", { className: 'separador' },
                React.createElement(FontAwesomeIcon, { icon: faCaretRight })) },
            itemPrincipal,
            itemComprimido,
            itemAnterior,
            itemActual));
    };
    PaginaCategorias.prototype.crearItem_indicadorSubcategoria = function (tipo, indexCategoria) {
        var _this = this;
        var item = null;
        switch (tipo) {
            case "BOTON":
                item = (React.createElement(Button, { className: "itemSubcategoria", key: "itemSubcategoria-" + indexCategoria, variant: 'text', onClick: function (evento) {
                        _this.setState(function (STATE, PROPS) {
                            return {
                                indicadorSubcategorias: STATE.indicadorSubcategorias.slice(0, indexCategoria + 1)
                            };
                        });
                        _this.props.dispatchRedux(setPaginaActual(1));
                        _this.getCategorias(1);
                    } }, this.state.indicadorSubcategorias[indexCategoria].nombre));
                break;
            case "ICONO_TOOLTIP":
                item = (React.createElement(ElementoConTooltip, { tituloTooltip: 'Subcategoria Actual', descripcionTooltip: this.getUbicacionCategoria_nombres(), texto: '', icono: faEllipsisH, CSS: 'itemSubcategoriaIcono', tipoElemento: classElementoConTooltip.ELEMENTO_ICONO }));
                break;
            default:
                item = (React.createElement("div", { className: "itemSubcategoriaActual", key: "itemSubcategoria-A" }, this.state.indicadorSubcategorias[indexCategoria].nombre));
        }
        return item;
    };
    //________________________________
    //  LISTA DE MARCAS
    //________________________________
    PaginaCategorias.prototype.renderizarListaDeCategorias = function () {
        var _this = this;
        // GENERACION DE TARJETAS
        var tarjetas = this.state.listaCategorias.map(function (categoria, index) {
            // EVALUAR IMAGEN
            var imagenCategoria = (React.createElement("img", { src: categoria.imagenBase64, onClick: function (evento) {
                    _this.mostrarModalCategoria(categoria.id, categoria.imagenBase64, categoria.imagenTipo, categoria.nombre);
                } }));
            if (categoria.imagenBase64 == "") {
                imagenCategoria = (React.createElement("div", { className: 'iconoImagen', onClick: function (evento) {
                        _this.mostrarModalCategoria(categoria.id, categoria.imagenBase64, categoria.imagenTipo, categoria.nombre);
                    } },
                    React.createElement(FontAwesomeIcon, { icon: faImage })));
            }
            return (React.createElement("div", { className: 'tarjetaCategoria', key: "tarjetaCategoria-" + index },
                imagenCategoria,
                React.createElement("div", { className: 'labelCategoria', onClick: function (evento) {
                        _this.mostrarModalCategoria(categoria.id, categoria.imagenBase64, categoria.imagenTipo, categoria.nombre);
                    } },
                    " ",
                    categoria.nombre,
                    "  "),
                React.createElement(Button, { className: 'botonSubcategorias', variant: 'text', onClick: function (evento) {
                        var nuevoIndicador = _this.state.indicadorSubcategorias.slice(0, _this.state.indicadorSubcategorias.length);
                        nuevoIndicador.push(categoria);
                        _this.setState(function (STATE, PROPS) {
                            return {
                                indicadorSubcategorias: nuevoIndicador
                            };
                        });
                        _this.props.dispatchRedux(setPaginaActual(1));
                        _this.getCategorias(1);
                    } }, "Subcategorias")));
        });
        if (tarjetas.length == 0)
            return null;
        return (React.createElement("div", { className: "contenedorTarjetasCategoria" }, tarjetas));
    };
    //________________________________
    //  CONTENEDOR DE PAGINACION < 1 - 2 - 3 ... >
    //________________________________
    PaginaCategorias.prototype.addPaginacion = function () {
        var paginas = Math.ceil(this.state.totalCategorias / this.state.categoriasXpagina);
        if (paginas > 1)
            return (React.createElement(Paginacion, { totalPaginas: paginas, PaginasPorGrupo: 4, stateRedux: this.props.stateReduxPaginacion, dispatchRedux: this.props.dispatchRedux, handleClick_botonPagina: this.getCategorias.bind(this) }));
    };
    PaginaCategorias.prototype.addDivResultado = function () {
        var visible = false;
        if (this.state.totalCategorias == 0)
            visible = true;
        return (React.createElement(DivResultado, { visible: visible, icono: faSearch, texto: "No tienes registrada ninguna categoria" }));
    };
    //=======================================================================
    //              ACTUALIZACION DEL COMPONENTE
    //=======================================================================
    PaginaCategorias.prototype.componentDidUpdate = function (prevProps, prevState) {
    };
    //=======================================================================
    //                  DEFINICION DEL HTML
    //=======================================================================
    PaginaCategorias.prototype.render = function () {
        return (React.createElement("main", { className: 'contenedorPagina paginaCategorias' },
            React.createElement(Encabezado, __assign({}, this.props, { habilitar_BotonRegresar: true, botonRegresar_URL: '/Producto', habilitar_MenuPrincipal: false, itemsMenuPrincipal: [], itemMenuP_seleccionado: "", habilitar_MenuOpciones: true, itemsMenuOpciones: this.itemsMenuOpciones, itemMenuOp_seleccionado: "", titulo: "Papeleria Geraldine Papeleria Geraldine", tituloTooltip: "Nombre de tu Negocio" })),
            this.renderizarIndicadorSubcategorias(),
            this.renderizarListaDeCategorias(),
            this.addPaginacion(),
            this.addDivResultado(),
            React.createElement(ModalCategoria, { modalVisible: this.state.modalCategoria_visible, headerVisible: this.state.modalCategoria_headerVisible, imagen: this.state.modalCategoria_imagenBase64, nombre: this.state.modalCategoria_nombre, handleClick_imagen: this.modalCategoria_handleClick_imagen.bind(this), handleClick_seleccionar: this.modalCategoria_handleClick_itemMenuSeleccionar.bind(this), handleClick_editar: this.modalCategoria_handleClick_itemMenuEditar.bind(this), handleClick_eliminar: this.modalCategoria_handleClick_itemMenuEliminar.bind(this), handleClick_X: this.modalCategoria_handleClick_X.bind(this) }),
            React.createElement(ModalFormulario, { modalVisible: this.state.modalFormulario_visible, ID_categoria: this.state.modalFormulario_id, imagen: this.state.modalFormulario_imagenBase64, nombreOriginal: this.state.modalFormulario_nombreOriginal, nuevoNombre: this.state.modalFormulario_inputNombre, handleClick_botonOK: this.modalFormulario_handleClick_botonOK.bind(this), handleClick_X: this.modalFormulario_handleClick_X.bind(this), handleChange_inputNombre: this.modalFormulario_handleChange_inputNombre.bind(this), handleInputFile_imagen: this.modalFormulario_handleChange_inputFileImagen.bind(this), handleClick_botonEliminarImagen: this.modalFormulario_handleClick_botonEliminarImagen.bind(this) }),
            React.createElement(ModalMensaje, { titulo: this.state.modalMensaje_titulo, descripcion: this.state.modalMensaje_descripcion, tipo: this.state.modalMensaje_tipo, modalVisible: this.state.modalMensaje_visible, handleClick_botonAceptar: this.modalMensaje_handleClick_botonAceptar.bind(this), handleClick_botonNO: this.modalMensaje_handleClick_botonNO.bind(this), handleClick_botonSI: this.modalMensaje_handleClick_botonSI.bind(this) })));
    };
    return PaginaCategorias;
}(React.Component));
export default PaginaCategorias;
