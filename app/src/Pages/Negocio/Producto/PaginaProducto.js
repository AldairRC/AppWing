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
// carrusel Swiper
const react_2 = require("swiper/react");
require("swiper/css");
// Modulos Swiper
const swiper_1 = require("swiper");
require("swiper/css/pagination");
require("swiper/css/navigation");
require("swiper/css/effect-creative");
// iconos
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
// mis componentes
const Encabezado_1 = __importDefault(require("../../../Components/Encabezado/Encabezado"));
const ModalImagen_1 = __importDefault(require("../../../Components/ModalImagen/ModalImagen"));
const TextFieldNumerico_1 = __importDefault(require("../../../Components/TextFieldNumerico/TextFieldNumerico"));
const ModalMensaje_1 = __importStar(require("../../../Components/ModalMensaje/ModalMensaje"));
const TextFieldConSugerencias_1 = __importDefault(require("../../../Components/TextFieldConSugerencias/TextFieldConSugerencias"));
const ElementoConTooltip_1 = __importStar(require("../../../Components/ElementoConTooltip/ElementoConTooltip"));
/*________________
REDUX MODAL
__________________ */
const controladorModal_1 = require("../../../Redux/Controladores/controladorModal");
/*________________
REDUX PRODUCTO
__________________ */
const controladorProducto_1 = require("../../../Redux/Controladores/controladorProducto");
// models
const Utilerias_1 = __importDefault(require("../../../Models/Utilerias"));
// css
require("../../../CSS/TextField/TextField_E1.css");
require("../../../CSS/Combo/Combo_E1.css");
const dimension_module_css_1 = __importDefault(require("./dimension.module.css"));
require("./marca.css");
require("./seccion2.css");
require("./seccion3.css");
require("./PaginaProductoMovil.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class PaginaProducto extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.menuOpciones = [];
        this.modalMensaje_handleClick_botonAceptar = () => { };
        this.modalMensaje_handleClick_botonNO = () => { };
        this.modalMensaje_handleClick_botonSI = () => { };
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        this.state =
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
                modalMensaje_tipo: ModalMensaje_1.MENSAJE_CORRECTO,
                // ========= MODAL MENSAJE ==============
                error_nombre: null,
                error_dimension: null,
                error_codigoBarras: null,
                error_precio: null
            };
        /*============================
            INICIALIZACION DE PROPIEDADES
        ==============================*/
        this.carruselContenedorPagina = null;
        this.carruselImagenes = null;
    }
    /*================================================================================
                        FUNCIONALIDAD AL CREAR LA PAGINA
    ==================================================================================*/
    componentDidMount() {
        /*==================================
        TRANSFERIR LOS DATOS DEL PRODUCTO
        SELECCIONADO COMO VALORES INICIALES
        ====================================*/
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Espere un momento..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            // MENU DE OPCIONES
            //_______________
            // ITEM RESTABLECER
            //_______________
            this.menuOpciones.push({
                icono: free_solid_svg_icons_1.faBroom,
                texto: "Restablecer",
                accion: () => {
                    this.restablecerFormulario();
                }
            });
            /*___________________
                ITEM GUARDAR
            _____________________*/
            if (this.props.stateReduxProducto.actual.id == "") {
                this.menuOpciones.push({
                    icono: free_solid_svg_icons_1.faPlus,
                    texto: "Guardar",
                    accion: () => {
                        if (this.formularioValido()) {
                            let existeMarca = true;
                            let existeCategoria = true;
                            let existeDescripcion = true;
                            let existeImagenes = true;
                            // VERIFICAR CAMPOS NO REQUERIDOS
                            if (this.props.stateReduxProducto.actual.marca_id == "")
                                existeMarca = false;
                            if (this.props.stateReduxProducto.actual.categoria_id == "")
                                existeCategoria = false;
                            let descripcion = Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.state.descripcion);
                            if (descripcion == "")
                                existeDescripcion = false;
                            if (this.state.imagenes_base64.length == 0)
                                existeImagenes = false;
                            if (existeMarca && existeCategoria &&
                                existeDescripcion && existeImagenes) {
                                this.mostrar_modalMensajePregunta("Desea guardar este nuevo producto?", "", () => { this.ocultar_modalMensaje(); }, () => {
                                    this.ocultar_modalMensaje();
                                    this.insertarProducto();
                                });
                            }
                            else {
                                let mensaje = "";
                                if (!existeMarca)
                                    mensaje += "La marca del producto.\n\n";
                                if (!existeCategoria)
                                    mensaje += "La categoria del producto.\n\n";
                                if (!existeDescripcion)
                                    mensaje += "La descripcion o detalle del producto.\n\n";
                                if (!existeImagenes)
                                    mensaje += "Las imagenes del producto.\n\n";
                                mensaje = mensaje.substring(0, mensaje.length - 2);
                                this.mostrar_modalMensajePregunta("Los siguientes datos NO estan establecidos. ¿Desea Continuar?", mensaje, () => { this.ocultar_modalMensaje(); }, () => {
                                    this.ocultar_modalMensaje();
                                    this.insertarProducto();
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
                    icono: free_solid_svg_icons_1.faPencilAlt,
                    texto: "Guardar Cambios",
                    accion: () => {
                        if (this.formularioValido()) {
                            let existeMarca = true;
                            let existeCategoria = true;
                            let existeDescripcion = true;
                            let existeImagenes = true;
                            // VERIFICAR CAMPOS NO REQUERIDOS
                            if (this.props.stateReduxProducto.actual.marca_id == "")
                                existeMarca = false;
                            if (this.props.stateReduxProducto.actual.categoria_id == "")
                                existeCategoria = false;
                            let descripcion = Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.state.descripcion);
                            if (descripcion == "")
                                existeDescripcion = false;
                            if (this.state.imagenes_base64.length == 0)
                                existeImagenes = false;
                            if (existeMarca && existeCategoria &&
                                existeDescripcion && existeImagenes) {
                                this.mostrar_modalMensajePregunta("Desea guardar los cambios del producto?", "", () => { this.ocultar_modalMensaje(); }, () => {
                                    this.ocultar_modalMensaje();
                                    this.actualizarProducto();
                                });
                            }
                            else {
                                let mensaje = "";
                                if (!existeMarca)
                                    mensaje += "La marca del producto.\n\n";
                                if (!existeCategoria)
                                    mensaje += "La categoria del producto.\n\n";
                                if (!existeDescripcion)
                                    mensaje += "La descripcion o detalle del producto.\n\n";
                                if (!existeImagenes)
                                    mensaje += "Las imagenes del producto.\n\n";
                                mensaje = mensaje.substring(0, mensaje.length - 2);
                                this.mostrar_modalMensajePregunta("Los siguientes datos NO estan establecidos. ¿Desea Continuar?", mensaje, () => { this.ocultar_modalMensaje(); }, () => {
                                    this.ocultar_modalMensaje();
                                    this.actualizarProducto();
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
                    icono: free_solid_svg_icons_1.faTrash,
                    texto: "Eliminar",
                    accion: () => {
                        this.mostrar_modalMensajePregunta("Desea eliminar este producto de su inventario?", "", () => { this.ocultar_modalMensaje(); }, () => {
                            this.ocultar_modalMensaje();
                            this.eliminarProducto();
                        });
                    }
                });
            }
            this.setState((STATE, PROPS) => {
                return {
                    id: this.props.stateReduxProducto.actual.id,
                    id_negocio: this.props.stateReduxProducto.actual.id_negocio,
                    nombre: this.props.stateReduxProducto.actual.nombre,
                    descripcion: this.props.stateReduxProducto.actual.descripcion,
                    precio: this.props.stateReduxProducto.actual.precio,
                    codigo_barras: this.props.stateReduxProducto.actual.codigo_barras,
                    imagenes_base64: this.props.stateReduxProducto.actual.imagenes_base64,
                    imagenes_tipo: this.props.stateReduxProducto.actual.imagenes_tipo,
                    dimension: this.props.stateReduxProducto.actual.dimension,
                    dimension_tipo: this.props.stateReduxProducto.actual.dimension_tipo
                };
            });
            this.cargarDimension(this.props.stateReduxProducto.actual.dimension);
            this.cargarPrecio(this.props.stateReduxProducto.actual.precio);
            try {
                let nombresProductos = yield this.getNombresDeProductos();
                this.setState((STATE, PROPS) => {
                    return {
                        opcionesInputNombre: nombresProductos
                    };
                });
            }
            catch (ERROR) {
                alert("ERROR AL MONTAR COMPONENTE:\n" + ERROR);
            }
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
        }), 1200);
    }
    /*================================================================================
                        FUNCIONALIDADES
    ==================================================================================*/
    restablecerFormulario() {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Espere un momento..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setProductoBD_como_ProductoActual)());
            this.setState((STATE, PROPS) => {
                return {
                    id: this.props.stateReduxProducto.productoBD.id,
                    id_negocio: this.props.stateReduxProducto.productoBD.id_negocio,
                    nombre: this.props.stateReduxProducto.productoBD.nombre,
                    descripcion: this.props.stateReduxProducto.productoBD.descripcion,
                    precio: this.props.stateReduxProducto.productoBD.precio,
                    codigo_barras: this.props.stateReduxProducto.productoBD.codigo_barras,
                    imagenes_base64: this.props.stateReduxProducto.productoBD.imagenes_base64,
                    imagenes_tipo: this.props.stateReduxProducto.productoBD.imagenes_tipo,
                    dimension: this.props.stateReduxProducto.productoBD.dimension,
                    dimension_tipo: this.props.stateReduxProducto.productoBD.dimension_tipo
                };
            });
            this.cargarDimension(this.props.stateReduxProducto.productoBD.dimension);
            this.cargarPrecio(this.props.stateReduxProducto.productoBD.precio);
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
        }), 1200);
    }
    cargarDimension(dimension) {
        let PE = "";
        let PD = "";
        let dimensionString = dimension + "";
        if (dimension > 0) {
            if (dimensionString.indexOf('.') == -1) {
                // SOLO PARTE ENTERA
                PE = Utilerias_1.default.getNumeroConComas(dimensionString);
            }
            else {
                let partesDimension = dimensionString.split('.');
                PE = Utilerias_1.default.getNumeroConComas(partesDimension[0]);
                if (partesDimension[1].length == 1)
                    PD = partesDimension[1] + "0";
                else
                    PD = partesDimension[1].substring(0, 2);
            }
        }
        this.setState((STATE, PROPS) => {
            return {
                inputDimensionPE: PE,
                inputDimensionPD: PD
            };
        });
    }
    cargarPrecio(precio) {
        let PE = "";
        let PD = "";
        let precioString = precio + "";
        if (precio > 0) {
            if (precioString.indexOf('.') == -1) {
                // SOLO PARTE ENTERA
                PE = Utilerias_1.default.getNumeroConComas(precioString);
            }
            else {
                let partesPrecio = precioString.split('.');
                PE = Utilerias_1.default.getNumeroConComas(partesPrecio[0]);
                if (partesPrecio[1].length == 1)
                    PD = partesPrecio[1] + "0";
                else
                    PD = partesPrecio[1].substring(0, 2);
            }
        }
        this.setState((STATE, PROPS) => {
            return {
                inputPrecioPE: PE,
                inputPrecioPD: PD
            };
        });
    }
    formularioValido() {
        // VERFICIAR SI NOMBRE ES VACIO
        let nombre = Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.state.nombre);
        if (nombre == "") {
            nombre = this.props.stateReduxProducto.productoBD.nombre;
            if (nombre == "") {
                this.setState((STATE, PROPS) => {
                    return {
                        error_nombre: this.crearTextoError("El nombre del producto NO debe estar vacio")
                    };
                });
                this.mostrar_modalMensajeError("Datos Incorrectos", "El Nombre del producto NO esta establecido", () => { this.ocultar_modalMensaje(); });
                return false;
            }
        }
        // VERIFICAR SI NOMBRE CONTIENE CARACTERES INVALIDOS
        let caracteresNombre = "abcdefghijklmnñopqrstuvwxyz áéíóú äëïöü";
        for (let c = 0; c < nombre.length; c++) {
            let caracter = nombre.charAt(c);
            if (caracteresNombre.indexOf(caracter.toLowerCase()) == -1) {
                this.setState((STATE, PROPS) => {
                    return {
                        error_nombre: this.crearTextoError("El nombre del producto solo debe tener letras o espacios")
                    };
                });
                this.mostrar_modalMensajeError("Datos Incorrectos", "El Nombre del producto NO es valido", () => { this.ocultar_modalMensaje(); });
                return false;
            }
        }
        // VERIFICAR DIMENSION
        if (this.state.dimension_tipo != "N/A" && this.state.dimension == 0) {
            this.setState((STATE, PROPS) => {
                return {
                    error_dimension: this.crearTextoError("La dimension NO debe ser 0")
                };
            });
            this.mostrar_modalMensajeError("Datos Incorrectos", "La dimension del producto NO debe ser 0", () => { this.ocultar_modalMensaje(); });
            return false;
        }
        // VERFICIAR SI CODIGO DE BARRAS ES VACIO
        let codigoBarras = this.state.codigo_barras;
        if (codigoBarras == "") {
            codigoBarras = this.props.stateReduxProducto.productoBD.codigo_barras;
            if (codigoBarras == "") {
                this.setState((STATE, PROPS) => {
                    return {
                        error_codigoBarras: this.crearTextoError("El codigo de barras NO debe estar vacio")
                    };
                });
                this.mostrar_modalMensajeError("Datos Incorrectos", "El Codigo de barras del producto NO esta establecido", () => { this.ocultar_modalMensaje(); });
                return false;
            }
        }
        // VERIFICAR SI CODIGO DE BARRAS CONTIENE CARACTERES INVALIDOS
        let caracteresCodigoBarras = "abcdefghijklmnñopqrstuvwxyz0123456789";
        for (let c = 0; c < codigoBarras.length; c++) {
            let caracter = codigoBarras.charAt(c);
            if (caracteresCodigoBarras.indexOf(caracter.toLowerCase()) == -1) {
                this.setState((STATE, PROPS) => {
                    return {
                        error_codigoBarras: this.crearTextoError("El codigo de barras solo acepta letras y digitos")
                    };
                });
                this.mostrar_modalMensajeError("Datos Incorrectos", "El codigo de barras del producto NO es valido", () => { this.ocultar_modalMensaje(); });
                return false;
            }
        }
        // VALIDAR PRECIO
        if (this.state.precio == 0) {
            this.setState((STATE, PROPS) => {
                return {
                    error_precio: this.crearTextoError("El precio NO debe ser 0")
                };
            });
            this.mostrar_modalMensajeError("Datos Incorrectos", "El precio de venta del producto NO debe ser 0", () => { this.ocultar_modalMensaje(); });
            return false;
        }
        return true;
    }
    //==========================================================================
    //                     OPERACIONES A LA BASE DE DATOS
    //===========================================================================
    getNombresDeProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/productos/getNombresProductos", []);
            console.log(respuesta);
            if (respuesta.existeError)
                return [];
            // NOMBRES DE PRODUCTOS OBTENIDOS
            let listaNombresBD = respuesta.datos;
            let listaNombresSugerencia = [];
            listaNombresBD.forEach((nombre, index) => {
                listaNombresSugerencia.push({
                    label: nombre,
                    key: "PaginaProducto-inputNombre-Opcion" + index,
                    categoria: nombre.charAt(0).toUpperCase()
                });
            });
            return listaNombresSugerencia;
        });
    }
    insertarProducto() {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Agregando Producto ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            // OBTENER LOS DATOS
            // IMAGENES
            let imagenes = this.state.imagenes_base64;
            let imagenesTipo = this.state.imagenes_tipo;
            // NOMBRE
            let nombre = Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.state.nombre);
            if (nombre == "")
                nombre = this.props.stateReduxProducto.productoBD.nombre;
            // MARCA
            let id_marca = this.props.stateReduxProducto.actual.marca_id;
            // DIMENSION
            let dimension = this.getDimension(this.state.inputDimensionPE, this.state.inputDimensionPD);
            if (this.state.dimension_tipo == "N/A")
                dimension = 0;
            // TIPO DIMENSION
            let tipoDimension = this.state.dimension_tipo;
            // CATEGORIA
            let id_categoria = this.props.stateReduxProducto.actual.categoria_id;
            // CODIGO DE BARRAS
            let codigoBarras = this.state.codigo_barras;
            if (codigoBarras == "")
                codigoBarras = this.props.stateReduxProducto.productoBD.codigo_barras;
            // PRECIO
            let precio = this.getPrecio(this.state.inputPrecioPE, this.state.inputPrecioPD);
            // DESCRIPCION
            let descripcion = Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.state.descripcion);
            // ENVIO DE DATOS
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/productos/insertar", [
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
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL INSERTAR PRODUCTO
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // PRODUCTO ALMACENADO
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
            this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, () => {
                this.ocultar_modalMensaje();
                this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_limpiarProductoBD)());
                this.restablecerFormulario();
                this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setSeccionActual)(1));
            });
        }), 900);
    }
    actualizarProducto() {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Actualizando Producto ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            // IMAGENES
            let imagenes = this.state.imagenes_base64;
            let imagenesTipo = this.state.imagenes_tipo;
            // NOMBRE
            let nombre = Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.state.nombre);
            if (nombre == "")
                nombre = this.props.stateReduxProducto.productoBD.nombre;
            // MARCA
            let id_marca = this.props.stateReduxProducto.actual.marca_id;
            // DIMENSION
            let dimension = this.getDimension(this.state.inputDimensionPE, this.state.inputDimensionPD);
            if (this.state.dimension_tipo == "N/A")
                dimension = 0;
            // TIPO DIMENSION
            let tipoDimension = this.state.dimension_tipo;
            // CATEGORIA
            let id_categoria = this.props.stateReduxProducto.actual.categoria_id;
            // CODIGO DE BARRAS
            let codigoBarras = this.state.codigo_barras;
            if (codigoBarras == "")
                codigoBarras = this.props.stateReduxProducto.productoBD.codigo_barras;
            // PRECIO
            let precio = this.getPrecio(this.state.inputPrecioPE, this.state.inputPrecioPD);
            // DESCRIPCION
            let descripcion = Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.state.descripcion);
            // ENVIO DE DATOS
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/productos/actualizar", [
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
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL ACTUALIZAR PRODUCTO
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // PRODUCTO ACTUALIZADO
            this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setProductoBD)({
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
            this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setProductoBD_como_ProductoActual)());
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
            this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
        }), 900);
    }
    eliminarProducto() {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Eliminando Producto ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            // ENVIO DE DATOS
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/productos/eliminar", [
                { nombreCampo: "id_producto", valor: this.state.id }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL ELIMINAR PRODUCTO
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // PRODUCTO ELIMINADO
            this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_limpiarProductoBD)());
            this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setProductoBD_como_ProductoActual)());
            this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setSeccionActual)(1));
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
            this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, () => {
                this.ocultar_modalMensaje();
                this.props.navigate('/MisProductos');
            });
        }), 900);
    }
    //==========================================================================
    //                 FUNCIONALIDADES DE LA SECCION 1
    //===========================================================================
    handleChange_inputFileImagen(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            if (selector.files != undefined && selector.files.length != 0) {
                this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Agregando imagenes"));
                let producto_imgsBase64 = this.state.imagenes_base64.slice(0, this.state.imagenes_base64.length);
                let producto_imgsTipo = this.state.imagenes_tipo.slice(0, this.state.imagenes_tipo.length);
                let imagenes_add = 0;
                let imagenes_errorSize = 0;
                let imagenes_errorTipo = 0;
                let imagenes_errorLimite = 0;
                let imagenes_errorLectura = 0;
                let imagenes = yield Utilerias_1.default.getImagenes(selector.files, ["jpg", "png", "jpeg"], 5000000, 5, producto_imgsBase64.length);
                //console.log( imagenes ) 
                for (let i = 0; i < imagenes.imagenesBase64.length; i++) {
                    //console.log( imagenes.imagenesEstatus[i] )
                    switch (imagenes.imagenesEstatus[i]) {
                        case Utilerias_1.default.ERROR_IMAGEN_TIPO:
                            imagenes_errorTipo++;
                            break;
                        case Utilerias_1.default.ERROR_IMAGEN_SIZE_MAX:
                            imagenes_errorSize++;
                            break;
                        case Utilerias_1.default.ERROR_IMAGEN_MAX_IMAGENES:
                            imagenes_errorLimite++;
                            break;
                        case Utilerias_1.default.ERROR_IMAGEN_LECTURA:
                            imagenes_errorLectura++;
                            break;
                        case Utilerias_1.default.LECTURA_IMAGEN_CORRECTA:
                            imagenes_add++;
                            producto_imgsBase64.push(imagenes.imagenesBase64[i]);
                            producto_imgsTipo.push(imagenes.imagenesTipo[i]);
                            break;
                        default:
                            imagenes_errorLectura++;
                    }
                }
                if (imagenes_add != 0) {
                    this.setState((STATE, PROPS) => {
                        return {
                            imagenes_base64: producto_imgsBase64,
                            imagenes_tipo: producto_imgsTipo
                        };
                    });
                }
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                if (imagenes_errorSize == 0 && imagenes_errorTipo == 0 &&
                    imagenes_errorLimite == 0 && imagenes_errorLectura == 0) {
                }
                else {
                    let mensaje = "";
                    let msj = "";
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
                    this.mostrar_modalMensajeError("Algo salio mal al agregar algunas imagenes", mensaje, () => {
                        this.ocultar_modalMensaje();
                    });
                }
            }
        });
    }
    handleInputNombre(nuevoNombre) {
        this.setState((STATE, PROPS) => {
            return {
                nombre: nuevoNombre,
                error_nombre: null
            };
        });
    }
    handleEvento_keyDown_inputNombre(evento) {
        let caracteresValidos = "abcdefghijklmnñopqrstuvwxyz áéíóúäëïöü";
        let caracteresEspeciales = ["ArrowRight", "ArrowLeft", "Backspace"];
        if (caracteresEspeciales.find((teclaESP) => teclaESP == evento.key) == undefined &&
            caracteresValidos.indexOf(evento.key.toLowerCase()) == -1) {
            evento.preventDefault();
        }
        //console.log( "========= KeyDown inputNombre =======" )
        //console.log( evento.key )
    }
    handleEvento_focusPerdido_inputNombre() {
        this.setState((STATE, PROPS) => {
            return {
                nombre: Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.state.nombre)
            };
        });
    }
    handleInputDimensionPE(dimensionPE) {
        this.setState((STATE, PROPS) => {
            return {
                inputDimensionPE: dimensionPE,
                dimension: this.getDimension(dimensionPE, this.state.inputDimensionPD),
                error_dimension: null
            };
        });
    }
    handleInputDimensionPD(dimensionPD) {
        this.setState((STATE, PROPS) => {
            return {
                inputDimensionPD: dimensionPD,
                dimension: this.getDimension(this.state.inputDimensionPE, dimensionPD),
                error_dimension: null
            };
        });
    }
    handleComboDimension(tipo) {
        let valorDimensionPE = this.state.inputDimensionPE;
        let valorDimensionPD = this.state.inputDimensionPD;
        if (tipo == 'N/A') {
            valorDimensionPE = "";
            valorDimensionPD = "";
        }
        this.setState((STATE, PROPS) => {
            return {
                dimension_tipo: tipo,
                inputDimensionPE: valorDimensionPE,
                inputDimensionPD: valorDimensionPD,
                dimension: this.getDimension(valorDimensionPE, valorDimensionPD),
                error_dimension: null
            };
        });
    }
    getDimensionPE_placeHolder() {
        let PE = "0";
        let dimensionBD = this.props.stateReduxProducto.productoBD.dimension;
        let dimension = dimensionBD + "";
        if (this.state.dimension_tipo == "N/A" || dimensionBD == 0)
            return "0";
        else {
            if (dimension.indexOf('.') == -1)
                return Utilerias_1.default.getNumeroConComas(dimension);
            return Utilerias_1.default.getNumeroConComas(dimension.split('.')[0]);
        }
    }
    getDimensionPD_placeHolder() {
        let PD = "";
        let dimensionBD = this.props.stateReduxProducto.productoBD.dimension;
        let dimension = dimensionBD + "";
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
    }
    getValorDimensionResumen() {
        let dimension = "";
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
                let dimensionPE = Number(this.state.inputDimensionPE.replace(',', '').replace(' ', ''));
                if (dimensionPE == 0)
                    dimension = "0 . ";
                else
                    dimension = Utilerias_1.default.getNumeroConComas(dimensionPE + "") + " . ";
            }
            // EVALUAR PARTE DECIMAL
            if (this.state.inputDimensionPD == "") {
                dimension += "00";
            }
            else {
                let dimPD = this.state.inputDimensionPD.replace(',', '').replace(' ', '');
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
    }
    getDimension(PE, PD) {
        let dimension = Utilerias_1.default.getNumero(PE, PD, 2);
        if (isNaN(dimension)) {
            console.log("Dimension NO es numero");
            return 0;
        }
        else
            return dimension;
    }
    //==========================================================================
    //                 FUNCIONALIDADES DE LA SECCION 2
    //===========================================================================
    handleEvento_keyDown_inputCodigoBarras(evento) {
        let caracteresValidos = "abcdefghijklmnñopqrstuvwxyz1234567890";
        let caracteresEspeciales = ["ArrowRight", "ArrowLeft", "Backspace"];
        if (caracteresEspeciales.find((teclaESP) => teclaESP == evento.key) == undefined &&
            caracteresValidos.indexOf(evento.key.toLowerCase()) == -1) {
            evento.preventDefault();
        }
        //console.log( "========= KeyDown inputNombre =======" )
        //console.log( evento.key )
    }
    handleEvento_focusPerdido_inputCodigoBarras() {
        this.setState((STATE, PROPS) => {
            return {
                codigo_barras: Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.state.codigo_barras)
            };
        });
    }
    handleInputPrecioPE(precioPE) {
        this.setState((STATE, PROPS) => {
            return {
                inputPrecioPE: precioPE,
                precio: this.getPrecio(precioPE, this.state.inputPrecioPD),
                error_precio: null
            };
        });
    }
    handleInputPrecioPD(precioPD) {
        this.setState((STATE, PROPS) => {
            return {
                inputPrecioPD: precioPD,
                precio: this.getPrecio(this.state.inputPrecioPE, precioPD),
                error_precio: null
            };
        });
    }
    getPrecioPE_placeHolder() {
        let precioBD = this.props.stateReduxProducto.productoBD.precio;
        let precio = precioBD + "";
        if (precioBD == 0)
            return "0";
        else {
            if (precio.indexOf('.') == -1)
                return Utilerias_1.default.getNumeroConComas(precio);
            return Utilerias_1.default.getNumeroConComas(precio.split('.')[0]);
        }
    }
    getPrecioPD_placeHolder() {
        let PD = "";
        let precioBD = this.props.stateReduxProducto.productoBD.precio;
        let precio = precioBD + "";
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
    }
    getValorPrecioResumen() {
        let precio = "";
        // EVALUAR PARTE ENTERA
        if (this.state.inputPrecioPE == "") {
            precio = "0 . ";
        }
        else {
            let precioPE = Number(this.state.inputPrecioPE.replace(',', '').replace(' ', ''));
            if (precioPE == 0)
                precio = "0 . ";
            else
                precio = Utilerias_1.default.getNumeroConComas(precioPE + "") + " . ";
        }
        // EVALUAR PARTE DECIMAL
        if (this.state.inputPrecioPD == "") {
            precio += "00";
        }
        else {
            let prePD = this.state.inputPrecioPD.replace(',', '').replace(' ', '');
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
    }
    getPrecio(PE, PD) {
        let precio = Utilerias_1.default.getNumero(PE, PD, 2);
        if (isNaN(precio)) {
            console.log("Precio NO es numero");
            return 0;
        }
        else
            return precio;
    }
    handleEvento_focusPerdido_inputDescripcion() {
        this.setState((STATE, PROPS) => {
            return {
                descripcion: Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.state.descripcion)
            };
        });
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
    modalImagen_accionEliminar() {
        let imagenesBase64 = this.state.imagenes_base64.filter(() => true);
        let imagenesTipo = this.state.imagenes_tipo.filter(() => true);
        let imagenBase64_eliminada = imagenesBase64.splice(this.state.modalImagen_imagenIndex, 1);
        let imagenTipo_eliminada = imagenesTipo.splice(this.state.modalImagen_imagenIndex, 1);
        if (imagenBase64_eliminada.length != 0 && imagenTipo_eliminada.length != 0) {
            this.setState((STATE, PRODS) => {
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
    }
    ocultarModalImagen() {
        this.setState((STATE, PROPS) => {
            return {
                modalImagen_visible: false,
                modalImagen_headerVisible: true,
                modalImagen_imagen: "",
                modalImagen_imagenIndex: -1
            };
        });
    }
    mostrarModalImagen(imagenBase64, index) {
        this.setState((STATE, PROPS) => {
            return {
                modalImagen_visible: true,
                modalImagen_imagen: imagenBase64,
                modalImagen_imagenIndex: index
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
    //===================================================================================
    //                  DISEÑOS INDIVIDUALES DE LA PAGINA
    //===================================================================================
    //_______________________________________
    //  NAVEGACION ejemplo:  (1)--(2)--(3)
    //_______________________________________
    renderizarNavegacion(cantidadItems) {
        let botones_lineas = [];
        for (let i = 1; i <= cantidadItems; i++) {
            let clasesCSS = "botonSeccionProducto";
            if (i == this.props.stateReduxProducto.seccionActual)
                clasesCSS += " botonSeccionActual";
            let boton = react_1.default.createElement(material_1.Button, { variant: 'text', className: clasesCSS, key: "paginaProducto-botonPag-" + i, onClick: (evento) => {
                    if (this.carruselContenedorPagina != null) {
                        this.carruselContenedorPagina.slideTo(i - 1);
                        this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setSeccionActual)(i));
                    }
                } }, i);
            botones_lineas.push(boton);
            let linea = (react_1.default.createElement("div", { className: 'linea', key: "paginaProducto-lineaPag-" + i }, " "));
            botones_lineas.push(linea);
        }
        botones_lineas.pop();
        return (react_1.default.createElement("div", { className: "divPaginacion" },
            " ",
            botones_lineas,
            "  "));
    }
    //_______________________________________
    //  HTML DE UN BOTON DE ACCION
    //_______________________________________
    generarBoton(clasesCSS, texto, accion) {
        return (react_1.default.createElement(material_1.Button, { variant: 'text', className: clasesCSS, onClick: (evento) => accion(), key: "paginaProducto-divBotones-" + texto }, texto));
    }
    //_______________________________________
    //  DIV QUE CONTIENE LOS BOTONES DE ACCION
    //_______________________________________
    renderizarBotones() {
        let botonesVisibles = [];
        //_______________
        // BOTON ATRAS
        //_______________
        if (this.props.stateReduxProducto.seccionActual != 1) {
            botonesVisibles.push(this.generarBoton("botonAzul", "Atras", () => {
                if (this.carruselContenedorPagina != null) {
                    this.carruselContenedorPagina.slideTo(this.props.stateReduxProducto.seccionActual - 2);
                    this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setSeccionActual)(this.props.stateReduxProducto.seccionActual - 1));
                }
            }));
        }
        //_______________
        // BOTON SIGUIENTE
        //_______________
        if (this.props.stateReduxProducto.seccionActual != 3) {
            botonesVisibles.push(this.generarBoton("botonAzul", "Siguiente", () => {
                if (this.carruselContenedorPagina != null) {
                    this.carruselContenedorPagina.slideTo(this.props.stateReduxProducto.seccionActual);
                    this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setSeccionActual)(this.props.stateReduxProducto.seccionActual + 1));
                }
            }));
        }
        return (react_1.default.createElement("div", { className: 'divBotones' },
            " ",
            botonesVisibles,
            "  "));
    }
    //_______________________________________
    //  CARRUSEL DE IMAGENES DEL PRODUCTO
    //_______________________________________
    renderizarImagenesCarrusel() {
        return this.state.imagenes_base64.map((img, index) => {
            let imagen = (react_1.default.createElement("div", { className: 'iconoImagen' },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faImage })));
            if (img != "") {
                imagen = (react_1.default.createElement("img", { src: img, onClick: (evento) => { this.mostrarModalImagen(img, index); } }));
            }
            return (react_1.default.createElement(react_2.SwiperSlide, { className: "itemCarrusel", key: "imgCarruselProducto-" + index }, imagen));
        });
    }
    //_______________________________________
    //  CARRUSEL DE IMAGENES DEL PRODUCTO (RESUMEN)
    //_______________________________________
    renderizarImagenesCarruselResumen() {
        return this.state.imagenes_base64.map((img, index) => {
            return (react_1.default.createElement(react_2.SwiperSlide, { className: "itemCarrusel", key: "imgCarruselProductoResumen-" + index },
                react_1.default.createElement("img", { src: img })));
        });
    }
    //________________________________________
    // COMPONENTE DE TEXTO CON ICONO PARA ERRORES
    //________________________________________
    crearTextoError(texto) {
        return (react_1.default.createElement("div", { className: 'div_labelError' },
            react_1.default.createElement("div", { className: 'icono' },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExclamationTriangle })),
            texto));
    }
    /*======================================================================================
                            1º PANTALLA DEL FORMULARIO
    ========================================================================================*/
    renderizarSeccion1() {
        // EVALUAR IMAGEN MARCA
        let imagenMarca = null;
        if (this.props.stateReduxProducto.actual.marca_imagen != "") {
            imagenMarca = (react_1.default.createElement("img", { src: this.props.stateReduxProducto.actual.marca_imagen }));
        }
        // TEXTO PREDETERMINADO INPUT NOMBRE
        let textoDefault_inputNombre = this.props.stateReduxProducto.productoBD.nombre;
        if (textoDefault_inputNombre == "")
            textoDefault_inputNombre = "Nombre del Producto";
        // TEXTO PREDETERMINADO MARCA
        let textoDefault_marca = this.props.stateReduxProducto.productoBD.marca_nombre;
        if (textoDefault_marca == "")
            textoDefault_marca = "N/A";
        return (react_1.default.createElement(react_2.SwiperSlide, { className: "itemSeccion" },
            react_1.default.createElement(material_1.Button, { variant: 'text', className: 'botonVerde', onClick: (evento) => {
                    let selector = document.createElement('input');
                    selector.type = "file";
                    selector.multiple = true;
                    selector.accept = "image/*";
                    selector.onchange = (evento) => __awaiter(this, void 0, void 0, function* () { yield this.handleChange_inputFileImagen(selector); });
                    selector.click();
                } }, "Elegir Imagen"),
            react_1.default.createElement(react_2.Swiper, { className: "carrusel", effect: "creative", modules: [swiper_1.Pagination, swiper_1.Navigation, swiper_1.EffectCreative], slidesPerView: 1, slidesPerGroup: 1, loop: true, autoHeight: true, allowTouchMove: true, onSwiper: (carrusel) => { this.carruselImagenes = carrusel; }, onSlideChangeTransitionEnd: () => {
                    this.carruselContenedorPagina.slideReset(500);
                }, onSlideResetTransitionEnd: () => {
                    this.carruselContenedorPagina.slideReset(500);
                }, creativeEffect: {
                    prev: {
                        shadow: true,
                        translate: [0, 0, -600]
                    },
                    next: {
                        translate: ["100%", 0, 0]
                    }
                }, pagination: { clickable: true }, navigation: true }, this.renderizarImagenesCarrusel()),
            react_1.default.createElement(TextFieldConSugerencias_1.default, { CSS: "inputNombre", sugerencias: this.state.opcionesInputNombre, titulo: "Nombre", inputError: (this.state.error_nombre != null) ? true : false, esRequerido: true, componenteAyuda: this.state.error_nombre, textoPredeterminado: textoDefault_inputNombre, valorInput: this.state.nombre, handleChange_valorInput: this.handleInputNombre.bind(this), handleEvento_keyDown: this.handleEvento_keyDown_inputNombre.bind(this), handleEvento_focusPerdido: this.handleEvento_focusPerdido_inputNombre.bind(this) }),
            react_1.default.createElement("div", { className: 'divMarca' },
                imagenMarca,
                react_1.default.createElement(material_1.TextField, { className: "TextField_E1 inputMarca", label: "Marca", helperText: "", placeholder: textoDefault_marca, variant: "outlined", type: "text", InputProps: {
                        readOnly: true
                    }, value: this.props.stateReduxProducto.actual.marca_nombre, onClick: (evento) => {
                        if (this.props.stateReduxProducto.actual.marca_id != "") {
                            this.mostrar_modalMensajePregunta("Desea quitar la marca del producto?", "", () => { this.ocultar_modalMensaje(); }, () => {
                                this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setMarcaActual)({
                                    id: "",
                                    nombre: "",
                                    imagen: "",
                                    imagenTipo: ""
                                }));
                                this.ocultar_modalMensaje();
                            });
                        }
                    } }),
                react_1.default.createElement(material_1.IconButton, { className: 'iconoSelectorMarca', onClick: (evento) => {
                        this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setProductoActual)({
                            nombre: this.state.nombre,
                            imagenes_base64: this.state.imagenes_base64,
                            imagenes_tipo: this.state.imagenes_tipo,
                            dimension: this.state.dimension,
                            dimension_tipo: this.state.dimension_tipo,
                            codigo_barras: this.state.codigo_barras,
                            precio: this.state.precio,
                            descripcion: this.state.descripcion
                        }));
                        this.props.navigate('/Marcas');
                    } },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEllipsisH }))),
            react_1.default.createElement("div", { className: dimension_module_css_1.default.divDimension },
                react_1.default.createElement("div", { className: dimension_module_css_1.default.divContenido },
                    react_1.default.createElement(TextFieldNumerico_1.default, { clasesCSS: "TextField_E1 " + dimension_module_css_1.default.inputDimension_PE, maxCantidadDigitos: 5, titulo: "Dimension", textoAdicional: "", textoPredeterminado: this.getDimensionPE_placeHolder(), maxCantidadCaracteres: -1, valorInput: this.state.inputDimensionPE, handleValorInput: this.handleInputDimensionPE.bind(this), bloqueado: (this.state.dimension_tipo == 'N/A') ? true : false }),
                    react_1.default.createElement("label", { className: dimension_module_css_1.default.labelPunto }, "."),
                    react_1.default.createElement(TextFieldNumerico_1.default, { clasesCSS: "TextField_E1 " + dimension_module_css_1.default.inputDimension_PD, maxCantidadDigitos: 2, maxCantidadCaracteres: 2, titulo: "", textoAdicional: "", textoPredeterminado: this.getDimensionPD_placeHolder(), valorInput: this.state.inputDimensionPD, handleValorInput: this.handleInputDimensionPD.bind(this), bloqueado: (this.state.dimension_tipo == 'N/A') ? true : false }),
                    react_1.default.createElement(material_1.Select, { className: 'Combo_E1 ' + dimension_module_css_1.default.comboDimension, MenuProps: {
                            className: 'menuCombo_E1'
                        }, autoWidth: true, displayEmpty: true, value: this.state.dimension_tipo, onChange: (evento) => { this.handleComboDimension(evento.target.value); } },
                        react_1.default.createElement(material_1.MenuItem, { value: 'N/A' },
                            " ",
                            "N/A",
                            " "),
                        react_1.default.createElement(material_1.MenuItem, { value: 'L' }, " L "),
                        react_1.default.createElement(material_1.MenuItem, { value: 'ml' }, " ml "),
                        react_1.default.createElement(material_1.MenuItem, { value: 'kg' }, " kg "),
                        react_1.default.createElement(material_1.MenuItem, { value: 'gr' }, " gr "),
                        react_1.default.createElement(material_1.MenuItem, { value: 'mts' }, " mts "),
                        react_1.default.createElement(material_1.MenuItem, { value: 'cm' }, " cm "),
                        react_1.default.createElement(material_1.MenuItem, { value: 'mm' }, " mm "))),
                this.state.error_dimension)));
    }
    /*======================================================================================
                            2º PANTALLA DEL FORMULARIO
    ========================================================================================*/
    renderizarSeccion2() {
        // EVALUAR IMAGEN CATEGORIA
        let imagenCategoria = null;
        if (this.props.stateReduxProducto.actual.categoria_imagen != "") {
            imagenCategoria = (react_1.default.createElement("img", { src: this.props.stateReduxProducto.actual.categoria_imagen }));
        }
        // TEXTO PREDETERMINADO CODIGO DE BARRAS
        let textoDefault_codigoBarras = this.props.stateReduxProducto.productoBD.codigo_barras;
        if (textoDefault_codigoBarras == "")
            textoDefault_codigoBarras = "N/A";
        // TEXTO PREDETERMINADO DESCRIPCION
        let textoDefault_descripcion = this.props.stateReduxProducto.productoBD.descripcion;
        if (textoDefault_descripcion == "")
            textoDefault_descripcion = "Descripcion del producto";
        return (react_1.default.createElement(react_2.SwiperSlide, { className: "itemSeccion" },
            react_1.default.createElement("div", { className: 'divCategoria' },
                imagenCategoria,
                react_1.default.createElement(material_1.TextField, { className: "TextField_E1 inputCategoria", label: "Categoria", helperText: "", placeholder: "N/A", variant: "outlined", type: "text", InputProps: {
                        readOnly: true
                    }, value: this.props.stateReduxProducto.actual.categoria_nombre, onClick: (evento) => {
                        if (this.props.stateReduxProducto.actual.categoria_id != "") {
                            this.mostrar_modalMensajePregunta("Desea quitar la categoria del producto?", "", () => { this.ocultar_modalMensaje(); }, () => {
                                this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setCategoriaActual)({
                                    id: "",
                                    nombre: "",
                                    imagen: "",
                                    imagenTipo: "",
                                    ubicacion: ""
                                }));
                                this.ocultar_modalMensaje();
                            });
                        }
                    } }),
                react_1.default.createElement(material_1.IconButton, { className: 'iconoSelectorCategoria', onClick: (evento) => {
                        this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setProductoActual)({
                            nombre: this.state.nombre,
                            imagenes_base64: this.state.imagenes_base64,
                            imagenes_tipo: this.state.imagenes_tipo,
                            dimension: this.state.dimension,
                            dimension_tipo: this.state.dimension_tipo,
                            codigo_barras: this.state.codigo_barras,
                            precio: this.state.precio,
                            descripcion: this.state.descripcion
                        }));
                        this.props.navigate('/Categorias');
                    } },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEllipsisH }))),
            react_1.default.createElement("div", { className: 'divCodigoDeBarras' },
                react_1.default.createElement("div", { className: 'divContenido' },
                    react_1.default.createElement("div", { className: 'divIcono' },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBarcode })),
                    react_1.default.createElement(material_1.TextField, { className: "TextField_E1 inputCodigoDeBarras", label: "Codigo de Barras", helperText: "", placeholder: textoDefault_codigoBarras, variant: "outlined", type: "text", required: true, autoComplete: 'off', value: this.state.codigo_barras, onChange: (evento) => {
                            this.setState((STATE, PROPS) => {
                                return {
                                    codigo_barras: evento.target.value,
                                    error_codigoBarras: null
                                };
                            });
                        }, onKeyDown: (evento) => { this.handleEvento_keyDown_inputCodigoBarras(evento); }, onBlur: (evento) => { this.handleEvento_focusPerdido_inputCodigoBarras(); } })),
                this.state.error_codigoBarras),
            react_1.default.createElement("div", { className: 'divPrecio' },
                react_1.default.createElement("div", { className: 'divContenido' },
                    react_1.default.createElement("div", { className: 'divIcono' },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faDollarSign })),
                    react_1.default.createElement(TextFieldNumerico_1.default, { clasesCSS: "TextField_E1 inputPrecio_PE", maxCantidadDigitos: 5, titulo: "Precio", textoAdicional: "", textoPredeterminado: this.getPrecioPE_placeHolder(), maxCantidadCaracteres: -1, valorInput: this.state.inputPrecioPE, handleValorInput: this.handleInputPrecioPE.bind(this), bloqueado: false }),
                    react_1.default.createElement("label", { className: 'labelPunto' }, "."),
                    react_1.default.createElement(TextFieldNumerico_1.default, { clasesCSS: "TextField_E1 inputPrecio_PD", maxCantidadDigitos: 2, maxCantidadCaracteres: 2, titulo: "", textoAdicional: "", textoPredeterminado: this.getPrecioPD_placeHolder(), valorInput: this.state.inputPrecioPD, handleValorInput: this.handleInputPrecioPD.bind(this), bloqueado: false })),
                this.state.error_precio),
            react_1.default.createElement(material_1.TextField, { className: "TextField_E1 inputDescripcion", label: "Descripcion", helperText: "", placeholder: textoDefault_descripcion, variant: "outlined", type: "text", multiline: true, autoComplete: 'off', rows: 4, value: this.state.descripcion, onChange: (evento) => {
                    this.setState((STATE, PROPS) => {
                        return {
                            descripcion: evento.target.value
                        };
                    });
                }, onBlur: (evento) => { this.handleEvento_focusPerdido_inputDescripcion(); } })));
    }
    /*======================================================================================
                            3º PANTALLA DEL FORMULARIO (RESUMEN)
    ========================================================================================*/
    renderizarSeccion3() {
        // EVALUAR NOMBRE DEL PRODUCTO
        let nombre = this.state.nombre;
        if (nombre == "") {
            if (this.props.stateReduxProducto.productoBD.nombre == "")
                nombre = "N/A";
            else
                nombre = this.props.stateReduxProducto.productoBD.nombre;
        }
        // EVALUAR IMAGEN MARCA
        let imagenMarca = null;
        if (this.props.stateReduxProducto.actual.marca_imagen != "") {
            imagenMarca = (react_1.default.createElement("img", { src: this.props.stateReduxProducto.actual.marca_imagen }));
        }
        // EVALUAR NOMBRE DE LA MARCA
        let nombreMarca = this.props.stateReduxProducto.actual.marca_nombre;
        if (nombreMarca == "")
            nombreMarca = "N/A";
        // EVALUAR IMAGEN CATEGORIA
        let imagenCategoria = null;
        if (this.props.stateReduxProducto.actual.categoria_imagen != "") {
            imagenCategoria = (react_1.default.createElement("img", { src: this.props.stateReduxProducto.actual.categoria_imagen }));
        }
        // EVALUAR NOMBRE DE LA CATEGORIA
        let nombreCategoria = this.props.stateReduxProducto.actual.categoria_nombre;
        if (nombreCategoria == "")
            nombreCategoria = "N/A";
        // EVALUAR CODIGO DE BARRAS
        let codigoBarras = this.state.codigo_barras;
        if (codigoBarras == "") {
            codigoBarras = this.props.stateReduxProducto.productoBD.codigo_barras;
            if (codigoBarras == "")
                codigoBarras = "N/A";
        }
        // EVALUAR DESCRIPCION
        let descripcion = this.state.descripcion;
        if (descripcion == "")
            descripcion = "N/A";
        return (react_1.default.createElement(react_2.SwiperSlide, { className: "itemSeccion" },
            react_1.default.createElement("label", { className: 'labelTitulo' }, " Resumen del Producto "),
            react_1.default.createElement(react_2.Swiper, { className: "carrusel", effect: "creative", modules: [swiper_1.Pagination, swiper_1.Navigation, swiper_1.EffectCreative], slidesPerView: 1, slidesPerGroup: 1, loop: true, autoHeight: true, allowTouchMove: true, creativeEffect: {
                    prev: {
                        shadow: true,
                        translate: [0, 0, -600]
                    },
                    next: {
                        translate: ["100%", 0, 0]
                    }
                }, pagination: { clickable: true }, navigation: true }, this.renderizarImagenesCarruselResumen()),
            react_1.default.createElement("div", { className: 'divNombreResumen' },
                react_1.default.createElement("label", { className: 'labelSubtitulo' }, " Nombre "),
                react_1.default.createElement("div", { className: 'labelDato divDatoResumen labelNombre' },
                    " ",
                    nombre,
                    " ")),
            react_1.default.createElement("div", { className: 'divMarcaResumen' },
                react_1.default.createElement("label", { className: 'labelSubtitulo' }, " Marca "),
                react_1.default.createElement("div", { className: 'divDato' },
                    imagenMarca,
                    react_1.default.createElement("div", { className: 'divDatoResumen labelMarca labelDato' }, nombreMarca))),
            react_1.default.createElement("div", { className: 'divDimensionPrecioResumen' },
                react_1.default.createElement("div", { className: 'divDimensionResumen' },
                    react_1.default.createElement("label", { className: 'labelSubtitulo' }, " Dimension "),
                    react_1.default.createElement("div", { className: 'labelDato divDatoResumen labelDimension' }, this.getValorDimensionResumen())),
                react_1.default.createElement("div", { className: 'divPrecioResumen' },
                    react_1.default.createElement("div", { className: 'labelSubtitulo' }, " Precio "),
                    react_1.default.createElement("div", { className: 'divDatoResumen divDato' },
                        react_1.default.createElement("div", { className: 'icono' },
                            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faDollarSign })),
                        react_1.default.createElement("label", { className: 'labelDato' },
                            "  ",
                            this.getValorPrecioResumen(),
                            "   ")))),
            react_1.default.createElement("div", { className: 'divCategoriaResumen' },
                react_1.default.createElement("label", { className: 'labelSubtitulo' }, " Categoria "),
                react_1.default.createElement("div", { className: 'divDato' },
                    imagenCategoria,
                    react_1.default.createElement(ElementoConTooltip_1.default, { tituloTooltip: 'Ubicacion de la categoria', descripcionTooltip: this.props.stateReduxProducto.actual.categoria_ubicacion, texto: nombreCategoria, icono: "", CSS: 'divDatoResumen labelCategoria labelDato', tipoElemento: ElementoConTooltip_1.classElementoConTooltip.ELEMENTO_LABEL }))),
            react_1.default.createElement("div", { className: 'divCodigoDeBarrasResumen' },
                react_1.default.createElement("div", { className: 'labelSubtitulo' }, " Codigo de Barras "),
                react_1.default.createElement("div", { className: 'divDatoResumen divDato' },
                    react_1.default.createElement("div", { className: 'icono' },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBarcode })),
                    react_1.default.createElement("label", { className: 'labelDato' },
                        "  ",
                        codigoBarras,
                        "   "))),
            react_1.default.createElement("div", { className: 'divDescripcionResumen' },
                react_1.default.createElement("div", { className: 'labelSubtitulo' }, " Descripcion "),
                react_1.default.createElement("div", { className: 'divDatoResumen labelDato labelDescripcion' }, descripcion))));
    }
    //=======================================================================
    //              ACTUALIZACION DEL COMPONENTE
    //=======================================================================
    componentDidUpdate(prevProps, prevState) {
        this.carruselContenedorPagina.slideReset(300);
    }
    //=======================================================================
    //                  DEFINICION DEL HTML
    //=======================================================================
    render() {
        return (react_1.default.createElement("main", { className: 'contenedorPagina paginaProducto' },
            react_1.default.createElement(Encabezado_1.default, Object.assign({}, this.props, { habilitar_BotonRegresar: true, habilitar_MenuPrincipal: false, habilitar_MenuOpciones: true, titulo: "Papeleria Geraldine Papeleria Geraldine", tituloTooltip: "Nombre de tu Negocio", itemsMenuPrincipal: [], itemsMenuOpciones: this.menuOpciones, itemMenuP_seleccionado: "", itemMenuOp_seleccionado: "", botonRegresar_URL: '/MisProductos' })),
            this.renderizarNavegacion(3),
            react_1.default.createElement(react_2.Swiper, { className: "carruselPaginaProducto", effect: "slide", slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 1, autoHeight: true, allowTouchMove: false, onSwiper: (carrusel) => {
                    this.carruselContenedorPagina = carrusel;
                    this.carruselContenedorPagina.slideTo(this.props.stateReduxProducto.seccionActual - 1);
                } },
                this.renderizarSeccion1(),
                this.renderizarSeccion2(),
                this.renderizarSeccion3()),
            this.renderizarBotones(),
            react_1.default.createElement(ModalImagen_1.default, { modalVisible: this.state.modalImagen_visible, botonEliminarVisible: true, imagenURL: this.state.modalImagen_imagen, accionX: this.modalImagen_accionX.bind(this), accionEliminar: this.modalImagen_accionEliminar.bind(this), accionClickImagen: this.modalImagen_accionClickImagen.bind(this), headerVisible: this.state.modalImagen_headerVisible }),
            react_1.default.createElement(ModalMensaje_1.default, { titulo: this.state.modalMensaje_titulo, descripcion: this.state.modalMensaje_descripcion, tipo: this.state.modalMensaje_tipo, modalVisible: this.state.modalMensaje_visible, handleClick_botonAceptar: this.modalMensaje_handleClick_botonAceptar.bind(this), handleClick_botonNO: this.modalMensaje_handleClick_botonNO.bind(this), handleClick_botonSI: this.modalMensaje_handleClick_botonSI.bind(this) })));
    }
}
exports.default = PaginaProducto;
