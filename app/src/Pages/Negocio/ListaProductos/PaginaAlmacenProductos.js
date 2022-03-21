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
// iconos
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
// mis componentes
const Encabezado_1 = __importDefault(require("../../../Components/Encabezado/Encabezado"));
const Paginacion_1 = __importDefault(require("../../../Components/Paginacion/Paginacion"));
const DivResultado_1 = __importDefault(require("../../../Components/DivResultado/DivResultado"));
const ModalImagen_1 = __importDefault(require("../../../Components/ModalImagen/ModalImagen"));
const TarjetaProducto_1 = __importDefault(require("./TarjetaProducto"));
const ModalMensaje_1 = __importStar(require("../../../Components/ModalMensaje/ModalMensaje"));
// redux
const controladorPaginacion_1 = require("../../../Redux/Controladores/controladorPaginacion");
const controladorModal_1 = require("../../../Redux/Controladores/controladorModal");
// redux producto
const controladorProducto_1 = require("../../../Redux/Controladores/controladorProducto");
// Clase Utilerias
const Utilerias_1 = __importDefault(require("../../../Models/Utilerias"));
// css
require("./PaginaAlmacenProductosMovil.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class PaginaAlmacenProductos extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.modalMensaje_handleClick_botonAceptar = () => { };
        this.modalMensaje_handleClick_botonNO = () => { };
        this.modalMensaje_handleClick_botonSI = () => { };
        /*============================
            INICIALIZACION DE PROPIEDADES
        ==============================*/
        this.totalProductos = 0;
        this.productosXpagina = 4;
        this.itemsMenuPrincipal =
            [
                {
                    texto: "Novedades",
                    icono: free_solid_svg_icons_1.faHome,
                    accion: () => alert("/")
                },
                {
                    texto: "Ventas Locales",
                    icono: free_solid_svg_icons_1.faClipboardList,
                    accion: () => alert("/ventas-locales")
                },
                {
                    texto: "Mis Productos",
                    icono: free_solid_svg_icons_1.faBoxes,
                    accion: () => alert("/lista-mis-productos")
                },
                {
                    texto: "Proovedores",
                    icono: free_solid_svg_icons_1.faDolly,
                    accion: () => alert("/proveedores")
                }
            ];
        this.itemsMenuOpciones = [
            {
                texto: "Lista de mis Productos",
                icono: free_solid_svg_icons_1.faListUl,
                accion: () => alert("/lista-mis-productos")
            },
            {
                texto: "Filtrar Productos",
                icono: free_solid_svg_icons_1.faFilter,
                accion: () => alert("mostrar menu lateral de filtro")
            },
            {
                texto: "Agregar Producto",
                icono: free_solid_svg_icons_1.faPlus,
                accion: () => {
                    this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_limpiarProductoBD)());
                    this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setProductoBD_como_ProductoActual)());
                    this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setSeccionActual)(1));
                    this.props.navigate('/Producto');
                }
            }
        ];
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        this.state =
            {
                listaProductos: [],
                modalMensaje_visible: false,
                modalMensaje_tipo: ModalMensaje_1.MENSAJE_CORRECTO,
                modalMensaje_titulo: "",
                modalMensaje_descripcion: "",
                modalImagen_visible: false,
                modalImagen_headerVisible: true,
                modalImagen_imagen: ""
            };
        /*============================
            ESTABLECER QUE QUEREMOS LA PAGINA 1
        ==============================*/
        this.props.dispatchRedux((0, controladorPaginacion_1.setPaginaActual)(1));
    }
    componentDidMount() {
        // OBTENER LOS PRODUCTOS
        this.getProductos(1);
    }
    /*===============================================================================
                        OPERACIONES EN LA BASE DE DATOS
    =================================================================================*/
    getProductos(pagina) {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Obteniendo productos ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/productos/listaProductos", [
                { nombreCampo: "productosXpagina", valor: this.productosXpagina + "" },
                { nombreCampo: "pagina", valor: pagina + "" }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL OBTENER PRODUCTOS
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // PRODUCTOS OBTENIDOS
            let query = [];
            query = respuesta.datos.listaProductos;
            let productosBD = [];
            query.forEach((producto) => {
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
            this.setState((STATE, PROPS) => {
                return {
                    listaProductos: productosBD
                };
            });
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
        }), 900);
    }
    getProducto(id) {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Espere un momento ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/productos/getProductoByID", [
                { nombreCampo: "id_producto", valor: id }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL OBTENER PRODUCTO
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // PRODUCTO OBTENIDO
            let producto = {};
            try {
                producto = respuesta.datos;
            }
            catch (ERROR) {
                // ERROR AL RECEPTAR REGISTRO PRODUCTO
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                console.log(ERROR);
                return;
            }
            this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setProductoBD)({
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
            this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setProductoBD_como_ProductoActual)());
            this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setSeccionActual)(1));
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
            this.props.navigate('/Producto');
        }), 900);
    }
    //=================================================================================
    //              FUNCIONALIDADES DEL MODAL IMAGEN
    //=================================================================================
    modalImagen_accionX() { this.ocultarModalImagen(); }
    modalImagen_accionClickImagen() {
        this.setState((STATE, PROPS) => {
            return {
                modalImagen_headerVisible: !STATE.modalImagen_headerVisible
            };
        });
    }
    ocultarModalImagen() {
        this.setState((STATE, PROPS) => {
            return {
                modalImagen_visible: false,
                modalImagen_headerVisible: true,
                modalImagen_imagen: ""
            };
        });
    }
    mostrarModalImagen(imagenBase64) {
        this.setState((STATE, PROPS) => {
            return {
                modalImagen_visible: true,
                modalImagen_imagen: imagenBase64
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
    /*===========================================================================
                        COMPONENTES INDIVIDUALES HTML
    =============================================================================*/
    addContenedorTarjetas() {
        if (this.totalProductos == 0)
            return null;
        return (react_1.default.createElement("div", { className: 'contenedorTarjetas' }, this.state.listaProductos.map((producto, index) => {
            return (react_1.default.createElement(TarjetaProducto_1.default, { producto: producto, key: "tarjetaProducto-" + index, handleClick_botonVer: this.getProducto.bind(this), handleClick_imagen: this.mostrarModalImagen.bind(this) }));
        })));
    }
    addPaginacion() {
        let paginas = Math.ceil(this.totalProductos / this.productosXpagina);
        if (paginas > 1)
            return (react_1.default.createElement(Paginacion_1.default, { totalPaginas: paginas, PaginasPorGrupo: 4, stateRedux: this.props.stateReduxPaginacion, dispatchRedux: this.props.dispatchRedux, handleClick_botonPagina: this.getProductos.bind(this) }));
    }
    addDivResultado() {
        let visible = false;
        if (this.totalProductos == 0)
            visible = true;
        return (react_1.default.createElement(DivResultado_1.default, { visible: visible, icono: free_solid_svg_icons_1.faSearch, texto: "No se encontro ningun producto" }));
    }
    /*===========================================================================
                                DEFINICION DEL HTML
    =============================================================================*/
    render() {
        return (react_1.default.createElement("main", { className: 'contenedorPagina' },
            react_1.default.createElement(Encabezado_1.default, Object.assign({}, this.props, { habilitar_BotonRegresar: false, habilitar_MenuPrincipal: true, habilitar_MenuOpciones: true, titulo: "Papeleria Geraldine Papeleria Geraldine", tituloTooltip: "Nombre de tu Negocio", itemsMenuPrincipal: this.itemsMenuPrincipal, itemsMenuOpciones: this.itemsMenuOpciones, itemMenuP_seleccionado: "Mis Productos", itemMenuOp_seleccionado: "Lista de mis Productos", botonRegresar_URL: '' })),
            this.addContenedorTarjetas(),
            this.addPaginacion(),
            this.addDivResultado(),
            react_1.default.createElement(ModalMensaje_1.default, { titulo: this.state.modalMensaje_titulo, descripcion: this.state.modalMensaje_descripcion, tipo: this.state.modalMensaje_tipo, modalVisible: this.state.modalMensaje_visible, handleClick_botonAceptar: this.modalMensaje_handleClick_botonAceptar.bind(this), handleClick_botonNO: this.modalMensaje_handleClick_botonNO.bind(this), handleClick_botonSI: this.modalMensaje_handleClick_botonSI.bind(this) }),
            react_1.default.createElement(ModalImagen_1.default, { modalVisible: this.state.modalImagen_visible, botonEliminarVisible: false, imagenURL: this.state.modalImagen_imagen, accionX: this.modalImagen_accionX.bind(this), accionEliminar: () => { }, accionClickImagen: this.modalImagen_accionClickImagen.bind(this), headerVisible: this.state.modalImagen_headerVisible })));
    }
}
exports.default = PaginaAlmacenProductos;
