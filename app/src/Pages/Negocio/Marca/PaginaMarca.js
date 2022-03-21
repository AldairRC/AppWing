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
// mis componentes
import ModalMarca from './ModalMarca';
import ModalFormulario from './ModalFormulario';
// iconos
import { faFilter, faPlus, faSearch, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// mis componentes
import Encabezado from '../../../Components/Encabezado/Encabezado';
import Paginacion from '../../../Components/Paginacion/Paginacion';
import DivResultado from '../../../Components/DivResultado/DivResultado';
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
import { ReduxProducto_setMarcaActual } from "../../../Redux/Controladores/controladorProducto";
// utilerias
import Utilerias from "../../../Models/Utilerias";
// css
import "../../../CSS/TextField/TextField_E1.css";
import "./PaginaMarca.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var PaginaMarca = /** @class */ (function (_super) {
    __extends(PaginaMarca, _super);
    function PaginaMarca(props) {
        var _this = _super.call(this, props) || this;
        _this.modalMensaje_handleClick_botonAceptar = function () { };
        _this.modalMensaje_handleClick_botonNO = function () { };
        _this.modalMensaje_handleClick_botonSI = function () { };
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        _this.state =
            {
                // ========= MODAL MARCA ==============
                modalMarca_visible: false,
                modalMarca_headerVisible: true,
                modalMarca_id: "",
                modalMarca_nombre: "",
                modalMarca_imagenBase64: "",
                modalMarca_imagenTipo: "",
                // ========= MODAL FORMULARIO ==============
                modalFormulario_visible: false,
                modalFormulario_id: "",
                modalFormulario_nombreOriginal: "",
                modalFormulario_inputNombre: "",
                modalFormulario_imagenBase64: "",
                modalFormulario_imagenTipo: "",
                // ========= MODAL MENSAJE ==============
                modalMensaje_visible: false,
                modalMensaje_titulo: "",
                modalMensaje_descripcion: "",
                modalMensaje_tipo: MENSAJE_CORRECTO,
                listaMarcas: [],
                totalMarcas: 0,
                marcasXpagina: 2
            };
        /*============================
            INICIALIZACION DE PROPIEDADES
        ==============================*/
        _this.itemsMenuOpciones = [
            {
                texto: "Agregar Marca",
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
                texto: "Filtrar Marcas",
                icono: faFilter,
                accion: function () { return alert("/filtrar marcas"); }
            }
        ];
        // INICIALIZAR PAGINACION
        _this.props.dispatchRedux(setPaginaActual(1));
        return _this;
    }
    PaginaMarca.prototype.componentDidMount = function () {
        /*============================
            OBTENCION DE LAS MARCAS
        ==============================*/
        this.getMarcas(this.props.stateReduxPaginacion.paginaActual);
    };
    /*===============================================================================
                  OPERACIONES EN LA BASE DE DATOS
    ================================================================================*/
    PaginaMarca.prototype.getMarcas = function (pagina) {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Obteniendo marcas ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta, query, marcasBD;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/marcas/buscar", [
                            { nombreCampo: "marcasXpagina", valor: this.state.marcasXpagina + "" },
                            { nombreCampo: "pagina", valor: pagina + "" }
                        ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL OBTENER MARCAS
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        query = [];
                        query = respuesta.datos.listaMarcas;
                        marcasBD = [];
                        query.forEach(function (marca) {
                            marcasBD.push({
                                id: marca.id,
                                id_negocio: marca.id_negocio,
                                nombre: marca.nombre,
                                imagenBase64: marca.imagenBase64,
                                imagenTipo: marca.imagenTipo
                            });
                        });
                        this.setState(function (STATE, PROPS) {
                            return {
                                listaMarcas: marcasBD,
                                totalMarcas: respuesta.datos.totalMarcas
                            };
                        });
                        this.props.dispatchRedux(ocultarModalCargando());
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    PaginaMarca.prototype.insertarMarca = function () {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Agregando Marca ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/marcas/insertar", [
                            { nombreCampo: "id_negocio", valor: "N/A" },
                            { nombreCampo: "nombre", valor: this.state.modalFormulario_inputNombre },
                            { nombreCampo: "imagen", valor: this.state.modalFormulario_imagenBase64 },
                            { nombreCampo: "tipoImagen", valor: this.state.modalFormulario_imagenTipo }
                        ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL INSERTAR MARCA
                            this.props.dispatchRedux(ocultarModalCargando());
                            this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, function () { _this.ocultar_modalMensaje(); });
                            return [2 /*return*/];
                        }
                        // MARCA INSERTADA EN LA BD
                        this.props.dispatchRedux(ocultarModalCargando());
                        this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, function () {
                            _this.ocultar_modalMensaje();
                            _this.ocultarModalFormulario();
                            _this.getMarcas(_this.props.stateReduxPaginacion.paginaActual);
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    PaginaMarca.prototype.actualizarMarca = function () {
        var _this = this;
        var nombreMarca = "";
        if (this.state.modalFormulario_inputNombre == "")
            nombreMarca = this.state.modalFormulario_nombreOriginal;
        else
            nombreMarca = this.state.modalFormulario_inputNombre;
        this.props.dispatchRedux(mostrarModalCargando("Actualizando Marca ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/marcas/actualizar", [
                            { nombreCampo: "id_marca", valor: this.state.modalFormulario_id },
                            { nombreCampo: "nombre", valor: nombreMarca },
                            { nombreCampo: "imagen", valor: this.state.modalFormulario_imagenBase64 },
                            { nombreCampo: "imagenTipo", valor: this.state.modalFormulario_imagenTipo }
                        ])];
                    case 1:
                        respuesta = _a.sent();
                        console.log(respuesta);
                        if (respuesta.existeError) {
                            // ERROR AL ACTUALIZAR MARCA
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
                        // MARCA ACTUALIZADA EN LA BD
                        this.props.dispatchRedux(ocultarModalCargando());
                        this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, function () {
                            _this.ocultar_modalMensaje();
                            _this.ocultarModalFormulario();
                            _this.getMarcas(_this.props.stateReduxPaginacion.paginaActual);
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    PaginaMarca.prototype.eliminarMarca = function () {
        var _this = this;
        this.props.dispatchRedux(mostrarModalCargando("Eliminando Marca ..."));
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var respuesta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilerias.postHTTP("api/negocios/marcas/eliminar", [
                            { nombreCampo: "id_marca", valor: this.state.modalMarca_id }
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
                        // MARCA ELIMINADA EN LA BD
                        //console.log( respuesta.datos )
                        this.props.dispatchRedux(ocultarModalCargando());
                        this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, function () {
                            _this.ocultar_modalMensaje();
                            _this.ocultarModalMarca();
                            _this.getMarcas(_this.props.stateReduxPaginacion.paginaActual);
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 900);
    };
    //=====================================================================
    //                  MODAL MARCA SELECCIONADA
    //=====================================================================
    PaginaMarca.prototype.modalMarca_handleClick_imagen = function () {
        //console.log( "click en imagen marca" )
        this.setState(function (STATE, PROPS) {
            return {
                modalMarca_headerVisible: !STATE.modalMarca_headerVisible
            };
        });
    };
    PaginaMarca.prototype.modalMarca_handleClick_X = function () { this.ocultarModalMarca(); };
    PaginaMarca.prototype.modalMarca_handleClick_itemMenuSeleccionar = function () {
        this.props.dispatchRedux(ReduxProducto_setMarcaActual({
            id: this.state.modalMarca_id,
            nombre: this.state.modalMarca_nombre,
            imagen: this.state.modalMarca_imagenBase64,
            imagenTipo: this.state.modalMarca_imagenTipo
        }));
        this.props.navigate('/Producto');
    };
    PaginaMarca.prototype.modalMarca_handleClick_itemMenuEditar = function () {
        this.mostrarModalFormulario(this.state.modalMarca_id, this.state.modalMarca_nombre, this.state.modalMarca_imagenBase64, this.state.modalMarca_imagenTipo);
        this.ocultarModalMarca();
    };
    PaginaMarca.prototype.modalMarca_handleClick_itemMenuEliminar = function () {
        var _this = this;
        this.mostrar_modalMensajePregunta('Esta seguro de eliminar la marca "' + this.state.modalMarca_nombre + '" ?', "Esto causara que todos los productos que tengan esta marca asignada queden con N/A", function () {
            _this.ocultar_modalMensaje();
        }, function () {
            _this.ocultar_modalMensaje();
            _this.eliminarMarca();
        });
    };
    PaginaMarca.prototype.mostrarModalMarca = function (idMarca, imagenBase64, imagenTipo, nombre) {
        this.setState(function (STATE, PROPS) {
            return {
                modalMarca_id: idMarca,
                modalMarca_imagenBase64: imagenBase64,
                modalMarca_imagenTipo: imagenTipo,
                modalMarca_nombre: nombre,
                modalMarca_visible: true,
                modalMarca_headerVisible: true
            };
        });
    };
    PaginaMarca.prototype.ocultarModalMarca = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalMarca_id: "",
                modalMarca_imagenBase64: "",
                modalMarca_imagenTipo: "",
                modalMarca_nombre: "",
                modalMarca_visible: false
            };
        });
    };
    //=====================================================================
    //              HANDLES DEL MODAL MARCA FORMULARIO
    //=====================================================================
    PaginaMarca.prototype.modalFormulario_handleClick_botonOK = function () {
        var _this = this;
        //______________________________________________
        // CUANDO EL FORMULARIO ESPERA UNA MARCA NUEVA
        //______________________________________________
        if (this.state.modalFormulario_id == "") {
            // VALIDAR NOMBRE
            //console.log( this.state.inputNombre_form )
            if (this.state.modalFormulario_inputNombre == "") {
                this.mostrar_modalMensajeError("Datos Incompletos", "Establezca el nombre de la marca", function () { _this.ocultar_modalMensaje(); });
                return;
            }
            // VALIDAR IMAGEN
            if (this.state.modalFormulario_imagenBase64 == "") {
                this.mostrar_modalMensajePregunta("Imagen NO establecida", "Desea guardar esta marca sin imagen?", function () {
                    _this.ocultar_modalMensaje();
                }, function () {
                    _this.ocultar_modalMensaje();
                    _this.insertarMarca();
                });
                return;
            }
            this.insertarMarca();
        }
        //______________________________________________
        // CUANDO EL FORMULARIO EDITA UNA MARCA
        //______________________________________________
        else {
            // VALIDAR IMAGEN
            if (this.state.modalFormulario_imagenBase64 == "") {
                this.mostrar_modalMensajePregunta("Imagen NO establecida", "Desea guardar esta marca sin imagen?", function () {
                    _this.ocultar_modalMensaje();
                }, function () {
                    _this.ocultar_modalMensaje();
                    _this.actualizarMarca();
                });
                return;
            }
            // DATOS COMPLETOS
            this.actualizarMarca();
        }
    };
    PaginaMarca.prototype.modalFormulario_handleChange_inputNombre = function (nuevoValor) {
        this.setState(function (STATE, PROPS) {
            return {
                modalFormulario_inputNombre: nuevoValor
            };
        });
    };
    PaginaMarca.prototype.modalFormulario_handleClick_X = function () { this.ocultarModalFormulario(); };
    PaginaMarca.prototype.modalFormulario_handleClick_eliminarImagen = function () {
        this.setState(function (STATE, PROPS) {
            return {
                modalFormulario_imagenBase64: "",
                modalFormulario_imagenTipo: ""
            };
        });
    };
    //____________________________________
    //  METODO QUE CONTROLA EL INPUT FILE
    //  CUANDO EL USUARIO ELIGE UNA IMAGEN MARCA
    //____________________________________
    PaginaMarca.prototype.modalFormulario_handleChange_inputFileImagen = function (selector) {
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
                            this.mostrar_modalMensajeError("Algo salio mal al cargar la imagen", img_1.mensajeERROR, function () { return _this.ocultar_modalMensaje(); });
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
                        this.mostrar_modalMensajeError("Algo salio mal al cargar la imagen", "Vuelva a intentarlo", function () { return _this.ocultar_modalMensaje(); });
                        console.log("ERROR getImagen inputFileMarca: \n" + ERROR_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PaginaMarca.prototype.mostrarModalFormulario = function (id_marca, nombreOriginal, imagenBase64, imagenTipo) {
        if (id_marca === void 0) { id_marca = ""; }
        if (nombreOriginal === void 0) { nombreOriginal = ""; }
        if (imagenBase64 === void 0) { imagenBase64 = ""; }
        if (imagenTipo === void 0) { imagenTipo = ""; }
        this.setState(function (STATE, PROPS) {
            return {
                modalFormulario_visible: true,
                modalFormulario_id: id_marca,
                modalFormulario_nombreOriginal: nombreOriginal,
                modalFormulario_inputNombre: nombreOriginal,
                modalFormulario_imagenBase64: imagenBase64,
                modalFormulario_imagenTipo: imagenTipo
            };
        });
    };
    PaginaMarca.prototype.ocultarModalFormulario = function () {
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
    PaginaMarca.prototype.mostrar_modalMensajeCorrecto = function (titulo, descripcion, handleClick_botonAceptar) {
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
    PaginaMarca.prototype.mostrar_modalMensajeError = function (titulo, descripcion, handleClick_botonAceptar) {
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
    PaginaMarca.prototype.mostrar_modalMensajePregunta = function (titulo, descripcion, handleClick_botonNO, handleClick_botonSI) {
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
    PaginaMarca.prototype.ocultar_modalMensaje = function () {
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
    //  LISTA DE MARCAS
    //________________________________
    PaginaMarca.prototype.renderizarListaDeMarcas = function () {
        var _this = this;
        // GENERACION DE TARJETAS
        var tarjetas = this.state.listaMarcas.map(function (marca, index) {
            // EVALUAR IMAGEN
            var imagenMarca = (React.createElement("img", { src: marca.imagenBase64 }));
            if (marca.imagenBase64 == "") {
                imagenMarca = (React.createElement("div", { className: 'iconoImagen' },
                    React.createElement(FontAwesomeIcon, { icon: faImage })));
            }
            return (React.createElement("div", { className: 'tarjetaMarca', key: "tarjetaMarca-" + index, onClick: function (evento) { return _this.mostrarModalMarca(marca.id, marca.imagenBase64, marca.imagenTipo, marca.nombre); } },
                imagenMarca,
                React.createElement("div", { className: 'labelMarca' },
                    " ",
                    marca.nombre,
                    " ")));
        });
        if (tarjetas.length == 0)
            return null;
        return (React.createElement("div", { className: "contenedorTarjetasMarca" }, tarjetas));
    };
    //________________________________
    //  CONTENEDOR DE PAGINACION < 1 - 2 - 3 ... >
    //________________________________
    PaginaMarca.prototype.addPaginacion = function () {
        var paginas = Math.ceil(this.state.totalMarcas / this.state.marcasXpagina);
        if (paginas > 1)
            return (React.createElement(Paginacion, { totalPaginas: paginas, PaginasPorGrupo: 4, stateRedux: this.props.stateReduxPaginacion, dispatchRedux: this.props.dispatchRedux, handleClick_botonPagina: this.getMarcas.bind(this) }));
    };
    PaginaMarca.prototype.addDivResultado = function () {
        var visible = false;
        if (this.state.totalMarcas == 0)
            visible = true;
        return (React.createElement(DivResultado, { visible: visible, icono: faSearch, texto: "No tienes registrada ninguna marca" }));
    };
    //=======================================================================
    //              ACTUALIZACION DEL COMPONENTE
    //=======================================================================
    PaginaMarca.prototype.componentDidUpdate = function (prevProps, prevState) {
    };
    //=======================================================================
    //                  DEFINICION DEL HTML
    //=======================================================================
    PaginaMarca.prototype.render = function () {
        return (React.createElement("main", { className: 'contenedorPagina paginaMarca' },
            React.createElement(Encabezado, __assign({}, this.props, { habilitar_BotonRegresar: true, botonRegresar_URL: '/Producto', habilitar_MenuPrincipal: false, itemsMenuPrincipal: [], itemMenuP_seleccionado: "", habilitar_MenuOpciones: true, itemsMenuOpciones: this.itemsMenuOpciones, itemMenuOp_seleccionado: "", titulo: "Papeleria Geraldine Papeleria Geraldine", tituloTooltip: "Nombre de tu Negocio" })),
            this.renderizarListaDeMarcas(),
            this.addPaginacion(),
            this.addDivResultado(),
            React.createElement(ModalMarca, { modalVisible: this.state.modalMarca_visible, headerVisible: this.state.modalMarca_headerVisible, imagen: this.state.modalMarca_imagenBase64, nombre: this.state.modalMarca_nombre, handleClick_imagen: this.modalMarca_handleClick_imagen.bind(this), handleClick_seleccionar: this.modalMarca_handleClick_itemMenuSeleccionar.bind(this), handleClick_editar: this.modalMarca_handleClick_itemMenuEditar.bind(this), handleClick_eliminar: this.modalMarca_handleClick_itemMenuEliminar.bind(this), handleClick_X: this.modalMarca_handleClick_X.bind(this) }),
            React.createElement(ModalFormulario, { modalVisible: this.state.modalFormulario_visible, ID_marca: this.state.modalFormulario_id, imagen: this.state.modalFormulario_imagenBase64, nombreOriginal: this.state.modalFormulario_nombreOriginal, nuevoNombre: this.state.modalFormulario_inputNombre, handleClick_botonOK: this.modalFormulario_handleClick_botonOK.bind(this), handleClick_X: this.modalFormulario_handleClick_X.bind(this), handleChange_inputNombre: this.modalFormulario_handleChange_inputNombre.bind(this), eliminarImagenMarca: this.modalFormulario_handleClick_eliminarImagen.bind(this), handleInputFile_imagenMarca: this.modalFormulario_handleChange_inputFileImagen.bind(this) }),
            React.createElement(ModalMensaje, { titulo: this.state.modalMensaje_titulo, descripcion: this.state.modalMensaje_descripcion, tipo: this.state.modalMensaje_tipo, modalVisible: this.state.modalMensaje_visible, handleClick_botonAceptar: this.modalMensaje_handleClick_botonAceptar.bind(this), handleClick_botonNO: this.modalMensaje_handleClick_botonNO.bind(this), handleClick_botonSI: this.modalMensaje_handleClick_botonSI.bind(this) })));
    };
    return PaginaMarca;
}(React.Component));
export default PaginaMarca;
