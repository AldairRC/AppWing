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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
// mis componentes
const ModalCategoria_1 = __importDefault(require("./ModalCategoria"));
const ModalFormulario_1 = __importDefault(require("./ModalFormulario"));
// iconos
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
// mis componentes
const Encabezado_1 = __importDefault(require("../../../Components/Encabezado/Encabezado"));
const Paginacion_1 = __importDefault(require("../../../Components/Paginacion/Paginacion"));
const DivResultado_1 = __importDefault(require("../../../Components/DivResultado/DivResultado"));
const ElementoConTooltip_1 = __importStar(require("../../../Components/ElementoConTooltip/ElementoConTooltip"));
const ModalMensaje_1 = __importStar(require("../../../Components/ModalMensaje/ModalMensaje"));
/*_________________
 redux paginacion
___________________*/
const controladorPaginacion_1 = require("../../../Redux/Controladores/controladorPaginacion");
/*_________________
 redux modal
___________________*/
const controladorModal_1 = require("../../../Redux/Controladores/controladorModal");
/*_________________
 redux producto
___________________*/
const controladorProducto_1 = require("../../../Redux/Controladores/controladorProducto");
// utilerias
const Utilerias_1 = __importDefault(require("../../../Models/Utilerias"));
// css
require("./PaginaCategorias.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class PaginaCategorias extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.modalMensaje_handleClick_botonAceptar = () => { };
        this.modalMensaje_handleClick_botonNO = () => { };
        this.modalMensaje_handleClick_botonSI = () => { };
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        this.state =
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
                modalMensaje_tipo: ModalMensaje_1.MENSAJE_CORRECTO,
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
        this.itemsMenuOpciones = [
            {
                texto: "Agregar Categoria",
                icono: free_solid_svg_icons_1.faPlus,
                accion: () => {
                    this.setState((STATE, PROPS) => {
                        return {
                            modalFormulario_visible: true
                        };
                    });
                }
            },
            {
                texto: "Filtrar Categorias",
                icono: free_solid_svg_icons_1.faFilter,
                accion: () => alert("/filtrar categorias")
            }
        ];
        // INICIALIZAR PAGINACION
        this.props.dispatchRedux((0, controladorPaginacion_1.setPaginaActual)(1));
    }
    componentDidMount() {
        // OBTENCION DE LAS CATEGORIAS
        this.getCategorias(this.props.stateReduxPaginacion.paginaActual);
    }
    /*===============================================================================
                        FUNCIONES
    =================================================================================*/
    getCategoriaPadre() {
        return this.state.indicadorSubcategorias[this.state.indicadorSubcategorias.length - 1];
    }
    getUbicacionCategoria_nombres() {
        let categoriaPadre = this.getCategoriaPadre();
        return categoriaPadre.ubicacion + " / " + categoriaPadre.nombre;
    }
    getUbicacionCategoria_IDs() {
        let IDs = [];
        this.state.indicadorSubcategorias.forEach((categoria) => {
            if (categoria.id != "")
                IDs.push(categoria.id);
        });
        return IDs;
    }
    /*===============================================================================
                        OPERACIONES EN LA BASE DE DATOS
    =================================================================================*/
    getCategorias(pagina) {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Obteniendo categorias ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/categorias/buscar", [
                { nombreCampo: "categoriasXpagina", valor: this.state.categoriasXpagina + "" },
                { nombreCampo: "pagina", valor: pagina + "" },
                { nombreCampo: "id_categoria_padre", valor: this.getCategoriaPadre().id }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL OBTENER CATEGORIAS
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // CATEGORIAS OBTENIDAS
            let query = [];
            query = respuesta.datos.listaCategorias;
            let categoriasBD = [];
            query.forEach((categoria) => {
                categoriasBD.push({
                    id: categoria.id,
                    nombre: categoria.nombre,
                    imagenBase64: categoria.imagenBase64,
                    imagenTipo: categoria.imagenTipo,
                    ubicacion: categoria.ubicacion
                });
            });
            this.setState((STATE, PROPS) => {
                return {
                    listaCategorias: categoriasBD,
                    totalCategorias: respuesta.datos.totalCategorias
                };
            });
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
        }), 900);
    }
    insertarCategoria() {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Agregando Categoria ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/categorias/insertar", [
                { nombreCampo: "id_negocio", valor: "N/A" },
                { nombreCampo: "categoria_nombre", valor: this.state.modalFormulario_inputNombre },
                { nombreCampo: "categoria_imagen", valor: this.state.modalFormulario_imagenBase64 },
                { nombreCampo: "categoria_tipoImagen", valor: this.state.modalFormulario_imagenTipo },
                { nombreCampo: "id_categoria_padre", valor: this.getCategoriaPadre().id },
                { nombreCampo: "categoria_ubicacion", valor: JSON.stringify(this.getUbicacionCategoria_IDs()) }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL INSERTAR CATEGORIA
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // CATEGORIA INSERTADA EN LA BD
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
            this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, () => {
                this.ocultar_modalMensaje();
                this.ocultarModalFormulario();
                this.getCategorias(this.props.stateReduxPaginacion.paginaActual);
            });
        }), 900);
    }
    actualizarCategoria() {
        let nombreCategoria = "";
        if (this.state.modalFormulario_inputNombre == "")
            nombreCategoria = this.state.modalFormulario_nombreOriginal;
        else
            nombreCategoria = this.state.modalFormulario_inputNombre;
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Actualizando Categoria ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/categorias/actualizar", [
                { nombreCampo: "id_categoria", valor: this.state.modalFormulario_id },
                { nombreCampo: "id_categoria_padre", valor: this.getCategoriaPadre().id },
                { nombreCampo: "categoria_nombre", valor: nombreCategoria },
                { nombreCampo: "categoria_imagen", valor: this.state.modalFormulario_imagenBase64 },
                { nombreCampo: "categoria_imagenTipo", valor: this.state.modalFormulario_imagenTipo }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL ACTUALIZAR CATEGORIA
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            if (respuesta.datos.existeAdvertencia) {
                // MARCA ACTUALIZADA A MEDIAS
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => {
                    this.ocultar_modalMensaje();
                });
                return;
            }
            // CATEGORIA ACTUALIZADA EN LA BD
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
            this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, () => {
                this.ocultar_modalMensaje();
                this.ocultarModalFormulario();
                this.getCategorias(this.props.stateReduxPaginacion.paginaActual);
            });
        }), 900);
    }
    eliminarCategoria() {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Eliminando Categoria ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/categorias/eliminar", [
                { nombreCampo: "id_categoria", valor: this.state.modalCategoria_id }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL ELIMINAR MARCA
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // CATEGORIA ELIMINADA EN LA BD
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
            this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, () => {
                this.ocultar_modalMensaje();
                this.ocultarModalCategoria();
                this.getCategorias(this.props.stateReduxPaginacion.paginaActual);
            });
        }), 900);
    }
    //=================================================================================
    //              HANDLES DEL MODAL CATEGORIA SELECCIONADA
    //=================================================================================
    modalCategoria_handleClick_imagen() {
        this.setState((STATE, PROPS) => {
            return {
                modalCategoria_headerVisible: !STATE.modalCategoria_headerVisible
            };
        });
    }
    modalCategoria_handleClick_X() { this.ocultarModalCategoria(); }
    modalCategoria_handleClick_itemMenuSeleccionar() {
        let ubicacion = "";
        this.state.indicadorSubcategorias.forEach((categoria) => {
            ubicacion += categoria.nombre + " / ";
        });
        ubicacion += this.state.modalCategoria_nombre;
        this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setCategoriaActual)({
            id: this.state.modalCategoria_id,
            nombre: this.state.modalCategoria_nombre,
            imagen: this.state.modalCategoria_imagenBase64,
            imagenTipo: this.state.modalCategoria_imagenTipo,
            ubicacion: ubicacion
        }));
        this.props.navigate('/Producto');
    }
    modalCategoria_handleClick_itemMenuEditar() {
        this.mostrarModalFormulario(this.state.modalCategoria_id, this.state.modalCategoria_nombre, this.state.modalCategoria_imagenBase64, this.state.modalCategoria_imagenTipo);
        this.ocultarModalCategoria();
    }
    modalCategoria_handleClick_itemMenuEliminar() {
        this.mostrar_modalMensajePregunta('Esta seguro de eliminar la categoria "' + this.state.modalCategoria_nombre + '" ?', "Esto causara que todos los productos que tengan esta categoria asignada queden con N/A", () => {
            this.ocultar_modalMensaje();
        }, () => {
            this.ocultar_modalMensaje();
            this.eliminarCategoria();
        });
    }
    mostrarModalCategoria(idCategoria, imagenBase64, imagenTipo, nombre) {
        this.setState((STATE, PROPS) => {
            return {
                modalCategoria_id: idCategoria,
                modalCategoria_imagenBase64: imagenBase64,
                modalCategoria_imagenTipo: imagenTipo,
                modalCategoria_nombre: nombre,
                modalCategoria_visible: true,
                modalCategoria_headerVisible: true
            };
        });
    }
    ocultarModalCategoria() {
        this.setState((STATE, PROPS) => {
            return {
                modalCategoria_id: "",
                modalCategoria_imagenBase64: "",
                modalCategoria_imagenTipo: "",
                modalCategoria_nombre: "",
                modalCategoria_visible: false,
                modalCategoria_headerVisible: true
            };
        });
    }
    //======================================================================================
    //              HANDLES DEL MODAL MARCA FORMULARIO
    //======================================================================================
    modalFormulario_handleClick_botonOK() {
        //______________________________________________
        // CUANDO EL FORMULARIO ESPERA UNA CATEGORIA NUEVA
        //______________________________________________
        if (this.state.modalFormulario_id == "") {
            // VALIDAR NOMBRE
            if (this.state.modalFormulario_inputNombre == "") {
                this.mostrar_modalMensajeError("Datos Incompletos", "Establezca el nombre de la categoria", () => { this.ocultar_modalMensaje(); });
                return;
            }
            // VALIDAR IMAGEN
            if (this.state.modalFormulario_imagenBase64 == "") {
                this.mostrar_modalMensajePregunta("Imagen NO establecida", "Desea guardar esta categoria sin imagen?", () => {
                    this.ocultar_modalMensaje();
                }, () => {
                    this.ocultar_modalMensaje();
                    this.insertarCategoria();
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
                this.mostrar_modalMensajePregunta("Imagen NO establecida", "Desea guardar esta categoria sin imagen?", () => {
                    this.ocultar_modalMensaje();
                }, () => {
                    this.ocultar_modalMensaje();
                    this.actualizarCategoria();
                });
                return;
            }
            // DATOS COMPLETOS
            this.actualizarCategoria();
        }
    }
    modalFormulario_handleChange_inputNombre(nuevoValor) {
        this.setState((STATE, PROPS) => {
            return {
                modalFormulario_inputNombre: nuevoValor
            };
        });
    }
    modalFormulario_handleClick_X() { this.ocultarModalFormulario(); }
    modalFormulario_handleClick_botonEliminarImagen() {
        this.setState((STATE, PROPS) => {
            return {
                modalFormulario_imagenBase64: "",
                modalFormulario_imagenTipo: ""
            };
        });
    }
    modalFormulario_handleChange_inputFileImagen(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            // CUANDO EXISTE (FileList) y existe imagen seleccionada
            if (selector.files && selector.files.length != 0) {
                try {
                    let img = yield Utilerias_1.default.getImagen(selector.files[0], ["jpg", "png", "jpeg"], 5000000 // 5MB
                    );
                    //console.log( img )
                    if (img.codigoERROR != 0) { // ERROR AL CARGAR IMAGEN
                        this.mostrar_modalMensajeError("Algo salio mal al cargar la imagen categoria", img.mensajeERROR, () => this.ocultar_modalMensaje());
                        return;
                    }
                    // IMAGEN LEIDA CON EXITO 
                    this.setState((STATE, PROPS) => {
                        return {
                            modalFormulario_imagenBase64: img.base64,
                            modalFormulario_imagenTipo: img.tipoImagen
                        };
                    });
                }
                catch (ERROR) {
                    this.mostrar_modalMensajeError("Algo salio mal al cargar la imagen categoria", "Vuelva a intentarlo", () => this.ocultar_modalMensaje());
                    console.log("ERROR getImagen inputFileMarca: \n" + ERROR);
                }
            }
        });
    }
    mostrarModalFormulario(id_categoria = "", nombreOriginal = "", imagenBase64 = "", imagenTipo = "") {
        this.setState((STATE, PROPS) => {
            return {
                modalFormulario_visible: true,
                modalFormulario_id: id_categoria,
                modalFormulario_nombreOriginal: nombreOriginal,
                modalFormulario_inputNombre: nombreOriginal,
                modalFormulario_imagenBase64: imagenBase64,
                modalFormulario_imagenTipo: imagenTipo
            };
        });
    }
    ocultarModalFormulario() {
        this.setState((STATE, PROPS) => {
            return {
                modalFormulario_visible: false,
                modalFormulario_id: "",
                modalFormulario_nombreOriginal: "",
                modalFormulario_inputNombre: "",
                modalFormulario_imagenBase64: "",
                modalFormulario_imagenTipo: ""
            };
        });
    }
    //=====================================================================
    //              HANDLES DEL MODAL MENSAJE
    //=====================================================================
    mostrar_modalMensajeCorrecto(titulo, descripcion, handleClick_botonAceptar) {
        this.modalMensaje_handleClick_botonAceptar = handleClick_botonAceptar;
        this.setState((STATE, PROPS) => {
            return {
                modalMensaje_visible: true,
                modalMensaje_tipo: ModalMensaje_1.MENSAJE_CORRECTO,
                modalMensaje_titulo: titulo,
                modalMensaje_descripcion: descripcion
            };
        });
    }
    mostrar_modalMensajeError(titulo, descripcion, handleClick_botonAceptar) {
        this.modalMensaje_handleClick_botonAceptar = handleClick_botonAceptar;
        this.setState((STATE, PROPS) => {
            return {
                modalMensaje_visible: true,
                modalMensaje_tipo: ModalMensaje_1.MENSAJE_ERROR,
                modalMensaje_titulo: titulo,
                modalMensaje_descripcion: descripcion
            };
        });
    }
    mostrar_modalMensajePregunta(titulo, descripcion, handleClick_botonNO, handleClick_botonSI) {
        this.modalMensaje_handleClick_botonNO = handleClick_botonNO;
        this.modalMensaje_handleClick_botonSI = handleClick_botonSI;
        this.setState((STATE, PROPS) => {
            return {
                modalMensaje_visible: true,
                modalMensaje_tipo: ModalMensaje_1.MENSAJE_PREGUNTA,
                modalMensaje_titulo: titulo,
                modalMensaje_descripcion: descripcion
            };
        });
    }
    ocultar_modalMensaje() {
        this.setState((STATE, PROPS) => {
            return {
                modalMensaje_visible: false
            };
        });
    }
    //=======================================================================
    //                 DISEÑOS INDIVIDUALES DE LA PAGINA
    //=======================================================================
    //________________________________
    //  INDICADOR DE SUBCATEGORIAS
    //________________________________
    renderizarIndicadorSubcategorias() {
        let itemPrincipal = null;
        let itemComprimido = null;
        let itemAnterior = null;
        let itemActual = null;
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
        return (react_1.default.createElement(material_1.Breadcrumbs, { className: 'divIndicadorSubcategorias', separator: react_1.default.createElement("div", { className: 'separador' },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCaretRight })) },
            itemPrincipal,
            itemComprimido,
            itemAnterior,
            itemActual));
    }
    crearItem_indicadorSubcategoria(tipo, indexCategoria) {
        let item = null;
        switch (tipo) {
            case "BOTON":
                item = (react_1.default.createElement(material_1.Button, { className: "itemSubcategoria", key: "itemSubcategoria-" + indexCategoria, variant: 'text', onClick: (evento) => {
                        this.setState((STATE, PROPS) => {
                            return {
                                indicadorSubcategorias: STATE.indicadorSubcategorias.slice(0, indexCategoria + 1)
                            };
                        });
                        this.props.dispatchRedux((0, controladorPaginacion_1.setPaginaActual)(1));
                        this.getCategorias(1);
                    } }, this.state.indicadorSubcategorias[indexCategoria].nombre));
                break;
            case "ICONO_TOOLTIP":
                item = (react_1.default.createElement(ElementoConTooltip_1.default, { tituloTooltip: 'Subcategoria Actual', descripcionTooltip: this.getUbicacionCategoria_nombres(), texto: '', icono: free_solid_svg_icons_1.faEllipsisH, CSS: 'itemSubcategoriaIcono', tipoElemento: ElementoConTooltip_1.classElementoConTooltip.ELEMENTO_ICONO }));
                break;
            default:
                item = (react_1.default.createElement("div", { className: "itemSubcategoriaActual", key: "itemSubcategoria-A" }, this.state.indicadorSubcategorias[indexCategoria].nombre));
        }
        return item;
    }
    //________________________________
    //  LISTA DE MARCAS
    //________________________________
    renderizarListaDeCategorias() {
        // GENERACION DE TARJETAS
        let tarjetas = this.state.listaCategorias.map((categoria, index) => {
            // EVALUAR IMAGEN
            let imagenCategoria = (react_1.default.createElement("img", { src: categoria.imagenBase64, onClick: (evento) => {
                    this.mostrarModalCategoria(categoria.id, categoria.imagenBase64, categoria.imagenTipo, categoria.nombre);
                } }));
            if (categoria.imagenBase64 == "") {
                imagenCategoria = (react_1.default.createElement("div", { className: 'iconoImagen', onClick: (evento) => {
                        this.mostrarModalCategoria(categoria.id, categoria.imagenBase64, categoria.imagenTipo, categoria.nombre);
                    } },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faImage })));
            }
            return (react_1.default.createElement("div", { className: 'tarjetaCategoria', key: "tarjetaCategoria-" + index },
                imagenCategoria,
                react_1.default.createElement("div", { className: 'labelCategoria', onClick: (evento) => {
                        this.mostrarModalCategoria(categoria.id, categoria.imagenBase64, categoria.imagenTipo, categoria.nombre);
                    } },
                    " ",
                    categoria.nombre,
                    "  "),
                react_1.default.createElement(material_1.Button, { className: 'botonSubcategorias', variant: 'text', onClick: (evento) => {
                        let nuevoIndicador = this.state.indicadorSubcategorias.slice(0, this.state.indicadorSubcategorias.length);
                        nuevoIndicador.push(categoria);
                        this.setState((STATE, PROPS) => {
                            return {
                                indicadorSubcategorias: nuevoIndicador
                            };
                        });
                        this.props.dispatchRedux((0, controladorPaginacion_1.setPaginaActual)(1));
                        this.getCategorias(1);
                    } }, "Subcategorias")));
        });
        if (tarjetas.length == 0)
            return null;
        return (react_1.default.createElement("div", { className: "contenedorTarjetasCategoria" }, tarjetas));
    }
    //________________________________
    //  CONTENEDOR DE PAGINACION < 1 - 2 - 3 ... >
    //________________________________
    addPaginacion() {
        let paginas = Math.ceil(this.state.totalCategorias / this.state.categoriasXpagina);
        if (paginas > 1)
            return (react_1.default.createElement(Paginacion_1.default, { totalPaginas: paginas, PaginasPorGrupo: 4, stateRedux: this.props.stateReduxPaginacion, dispatchRedux: this.props.dispatchRedux, handleClick_botonPagina: this.getCategorias.bind(this) }));
    }
    addDivResultado() {
        let visible = false;
        if (this.state.totalCategorias == 0)
            visible = true;
        return (react_1.default.createElement(DivResultado_1.default, { visible: visible, icono: free_solid_svg_icons_1.faSearch, texto: "No tienes registrada ninguna categoria" }));
    }
    //=======================================================================
    //              ACTUALIZACION DEL COMPONENTE
    //=======================================================================
    componentDidUpdate(prevProps, prevState) {
    }
    //=======================================================================
    //                  DEFINICION DEL HTML
    //=======================================================================
    render() {
        return (react_1.default.createElement("main", { className: 'contenedorPagina paginaCategorias' },
            react_1.default.createElement(Encabezado_1.default, Object.assign({}, this.props, { habilitar_BotonRegresar: true, botonRegresar_URL: '/Producto', habilitar_MenuPrincipal: false, itemsMenuPrincipal: [], itemMenuP_seleccionado: "", habilitar_MenuOpciones: true, itemsMenuOpciones: this.itemsMenuOpciones, itemMenuOp_seleccionado: "", titulo: "Papeleria Geraldine Papeleria Geraldine", tituloTooltip: "Nombre de tu Negocio" })),
            this.renderizarIndicadorSubcategorias(),
            this.renderizarListaDeCategorias(),
            this.addPaginacion(),
            this.addDivResultado(),
            react_1.default.createElement(ModalCategoria_1.default, { modalVisible: this.state.modalCategoria_visible, headerVisible: this.state.modalCategoria_headerVisible, imagen: this.state.modalCategoria_imagenBase64, nombre: this.state.modalCategoria_nombre, handleClick_imagen: this.modalCategoria_handleClick_imagen.bind(this), handleClick_seleccionar: this.modalCategoria_handleClick_itemMenuSeleccionar.bind(this), handleClick_editar: this.modalCategoria_handleClick_itemMenuEditar.bind(this), handleClick_eliminar: this.modalCategoria_handleClick_itemMenuEliminar.bind(this), handleClick_X: this.modalCategoria_handleClick_X.bind(this) }),
            react_1.default.createElement(ModalFormulario_1.default, { modalVisible: this.state.modalFormulario_visible, ID_categoria: this.state.modalFormulario_id, imagen: this.state.modalFormulario_imagenBase64, nombreOriginal: this.state.modalFormulario_nombreOriginal, nuevoNombre: this.state.modalFormulario_inputNombre, handleClick_botonOK: this.modalFormulario_handleClick_botonOK.bind(this), handleClick_X: this.modalFormulario_handleClick_X.bind(this), handleChange_inputNombre: this.modalFormulario_handleChange_inputNombre.bind(this), handleInputFile_imagen: this.modalFormulario_handleChange_inputFileImagen.bind(this), handleClick_botonEliminarImagen: this.modalFormulario_handleClick_botonEliminarImagen.bind(this) }),
            react_1.default.createElement(ModalMensaje_1.default, { titulo: this.state.modalMensaje_titulo, descripcion: this.state.modalMensaje_descripcion, tipo: this.state.modalMensaje_tipo, modalVisible: this.state.modalMensaje_visible, handleClick_botonAceptar: this.modalMensaje_handleClick_botonAceptar.bind(this), handleClick_botonNO: this.modalMensaje_handleClick_botonNO.bind(this), handleClick_botonSI: this.modalMensaje_handleClick_botonSI.bind(this) })));
    }
}
exports.default = PaginaCategorias;
