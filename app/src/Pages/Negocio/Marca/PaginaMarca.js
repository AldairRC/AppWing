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
// mis componentes
const ModalMarca_1 = __importDefault(require("./ModalMarca"));
const ModalFormulario_1 = __importDefault(require("./ModalFormulario"));
// iconos
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
// mis componentes
const Encabezado_1 = __importDefault(require("../../../Components/Encabezado/Encabezado"));
const Paginacion_1 = __importDefault(require("../../../Components/Paginacion/Paginacion"));
const DivResultado_1 = __importDefault(require("../../../Components/DivResultado/DivResultado"));
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
require("../../../CSS/TextField/TextField_E1.css");
require("./PaginaMarca.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class PaginaMarca extends react_1.default.Component {
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
                modalMensaje_tipo: ModalMensaje_1.MENSAJE_CORRECTO,
                listaMarcas: [],
                totalMarcas: 0,
                marcasXpagina: 2
            };
        /*============================
            INICIALIZACION DE PROPIEDADES
        ==============================*/
        this.itemsMenuOpciones = [
            {
                texto: "Agregar Marca",
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
                texto: "Filtrar Marcas",
                icono: free_solid_svg_icons_1.faFilter,
                accion: () => alert("/filtrar marcas")
            }
        ];
        // INICIALIZAR PAGINACION
        this.props.dispatchRedux((0, controladorPaginacion_1.setPaginaActual)(1));
    }
    componentDidMount() {
        /*============================
            OBTENCION DE LAS MARCAS
        ==============================*/
        this.getMarcas(this.props.stateReduxPaginacion.paginaActual);
    }
    /*===============================================================================
                  OPERACIONES EN LA BASE DE DATOS
    ================================================================================*/
    getMarcas(pagina) {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Obteniendo marcas ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/marcas/buscar", [
                { nombreCampo: "marcasXpagina", valor: this.state.marcasXpagina + "" },
                { nombreCampo: "pagina", valor: pagina + "" }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL OBTENER MARCAS
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // MARCAS OBTENIDAS
            let query = [];
            query = respuesta.datos.listaMarcas;
            let marcasBD = [];
            query.forEach((marca) => {
                marcasBD.push({
                    id: marca.id,
                    id_negocio: marca.id_negocio,
                    nombre: marca.nombre,
                    imagenBase64: marca.imagenBase64,
                    imagenTipo: marca.imagenTipo
                });
            });
            this.setState((STATE, PROPS) => {
                return {
                    listaMarcas: marcasBD,
                    totalMarcas: respuesta.datos.totalMarcas
                };
            });
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
        }), 900);
    }
    insertarMarca() {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Agregando Marca ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/marcas/insertar", [
                { nombreCampo: "id_negocio", valor: "N/A" },
                { nombreCampo: "nombre", valor: this.state.modalFormulario_inputNombre },
                { nombreCampo: "imagen", valor: this.state.modalFormulario_imagenBase64 },
                { nombreCampo: "tipoImagen", valor: this.state.modalFormulario_imagenTipo }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL INSERTAR MARCA
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // MARCA INSERTADA EN LA BD
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
            this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, () => {
                this.ocultar_modalMensaje();
                this.ocultarModalFormulario();
                this.getMarcas(this.props.stateReduxPaginacion.paginaActual);
            });
        }), 900);
    }
    actualizarMarca() {
        let nombreMarca = "";
        if (this.state.modalFormulario_inputNombre == "")
            nombreMarca = this.state.modalFormulario_nombreOriginal;
        else
            nombreMarca = this.state.modalFormulario_inputNombre;
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Actualizando Marca ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/marcas/actualizar", [
                { nombreCampo: "id_marca", valor: this.state.modalFormulario_id },
                { nombreCampo: "nombre", valor: nombreMarca },
                { nombreCampo: "imagen", valor: this.state.modalFormulario_imagenBase64 },
                { nombreCampo: "imagenTipo", valor: this.state.modalFormulario_imagenTipo }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL ACTUALIZAR MARCA
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
            // MARCA ACTUALIZADA EN LA BD
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
            this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, () => {
                this.ocultar_modalMensaje();
                this.ocultarModalFormulario();
                this.getMarcas(this.props.stateReduxPaginacion.paginaActual);
            });
        }), 900);
    }
    eliminarMarca() {
        this.props.dispatchRedux((0, controladorModal_1.mostrarModalCargando)("Eliminando Marca ..."));
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let respuesta = yield Utilerias_1.default.postHTTP("api/negocios/marcas/eliminar", [
                { nombreCampo: "id_marca", valor: this.state.modalMarca_id }
            ]);
            console.log(respuesta);
            if (respuesta.existeError) {
                // ERROR AL ELIMINAR MARCA
                this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
                this.mostrar_modalMensajeError(respuesta.titulo, respuesta.descripcion, () => { this.ocultar_modalMensaje(); });
                return;
            }
            // MARCA ELIMINADA EN LA BD
            //console.log( respuesta.datos )
            this.props.dispatchRedux((0, controladorModal_1.ocultarModalCargando)());
            this.mostrar_modalMensajeCorrecto(respuesta.titulo, respuesta.descripcion, () => {
                this.ocultar_modalMensaje();
                this.ocultarModalMarca();
                this.getMarcas(this.props.stateReduxPaginacion.paginaActual);
            });
        }), 900);
    }
    //=====================================================================
    //                  MODAL MARCA SELECCIONADA
    //=====================================================================
    modalMarca_handleClick_imagen() {
        //console.log( "click en imagen marca" )
        this.setState((STATE, PROPS) => {
            return {
                modalMarca_headerVisible: !STATE.modalMarca_headerVisible
            };
        });
    }
    modalMarca_handleClick_X() { this.ocultarModalMarca(); }
    modalMarca_handleClick_itemMenuSeleccionar() {
        this.props.dispatchRedux((0, controladorProducto_1.ReduxProducto_setMarcaActual)({
            id: this.state.modalMarca_id,
            nombre: this.state.modalMarca_nombre,
            imagen: this.state.modalMarca_imagenBase64,
            imagenTipo: this.state.modalMarca_imagenTipo
        }));
        this.props.navigate('/Producto');
    }
    modalMarca_handleClick_itemMenuEditar() {
        this.mostrarModalFormulario(this.state.modalMarca_id, this.state.modalMarca_nombre, this.state.modalMarca_imagenBase64, this.state.modalMarca_imagenTipo);
        this.ocultarModalMarca();
    }
    modalMarca_handleClick_itemMenuEliminar() {
        this.mostrar_modalMensajePregunta('Esta seguro de eliminar la marca "' + this.state.modalMarca_nombre + '" ?', "Esto causara que todos los productos que tengan esta marca asignada queden con N/A", () => {
            this.ocultar_modalMensaje();
        }, () => {
            this.ocultar_modalMensaje();
            this.eliminarMarca();
        });
    }
    mostrarModalMarca(idMarca, imagenBase64, imagenTipo, nombre) {
        this.setState((STATE, PROPS) => {
            return {
                modalMarca_id: idMarca,
                modalMarca_imagenBase64: imagenBase64,
                modalMarca_imagenTipo: imagenTipo,
                modalMarca_nombre: nombre,
                modalMarca_visible: true,
                modalMarca_headerVisible: true
            };
        });
    }
    ocultarModalMarca() {
        this.setState((STATE, PROPS) => {
            return {
                modalMarca_id: "",
                modalMarca_imagenBase64: "",
                modalMarca_imagenTipo: "",
                modalMarca_nombre: "",
                modalMarca_visible: false
            };
        });
    }
    //=====================================================================
    //              HANDLES DEL MODAL MARCA FORMULARIO
    //=====================================================================
    modalFormulario_handleClick_botonOK() {
        //______________________________________________
        // CUANDO EL FORMULARIO ESPERA UNA MARCA NUEVA
        //______________________________________________
        if (this.state.modalFormulario_id == "") {
            // VALIDAR NOMBRE
            //console.log( this.state.inputNombre_form )
            if (this.state.modalFormulario_inputNombre == "") {
                this.mostrar_modalMensajeError("Datos Incompletos", "Establezca el nombre de la marca", () => { this.ocultar_modalMensaje(); });
                return;
            }
            // VALIDAR IMAGEN
            if (this.state.modalFormulario_imagenBase64 == "") {
                this.mostrar_modalMensajePregunta("Imagen NO establecida", "Desea guardar esta marca sin imagen?", () => {
                    this.ocultar_modalMensaje();
                }, () => {
                    this.ocultar_modalMensaje();
                    this.insertarMarca();
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
                this.mostrar_modalMensajePregunta("Imagen NO establecida", "Desea guardar esta marca sin imagen?", () => {
                    this.ocultar_modalMensaje();
                }, () => {
                    this.ocultar_modalMensaje();
                    this.actualizarMarca();
                });
                return;
            }
            // DATOS COMPLETOS
            this.actualizarMarca();
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
    modalFormulario_handleClick_eliminarImagen() {
        this.setState((STATE, PROPS) => {
            return {
                modalFormulario_imagenBase64: "",
                modalFormulario_imagenTipo: ""
            };
        });
    }
    //____________________________________
    //  METODO QUE CONTROLA EL INPUT FILE
    //  CUANDO EL USUARIO ELIGE UNA IMAGEN MARCA
    //____________________________________
    modalFormulario_handleChange_inputFileImagen(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            // CUANDO EXISTE (FileList) y existe imagen seleccionada
            if (selector.files && selector.files.length != 0) {
                try {
                    let img = yield Utilerias_1.default.getImagen(selector.files[0], ["jpg", "png", "jpeg"], 5000000 // 5MB
                    );
                    //console.log( img )
                    if (img.codigoERROR != 0) { // ERROR AL CARGAR IMAGEN
                        this.mostrar_modalMensajeError("Algo salio mal al cargar la imagen", img.mensajeERROR, () => this.ocultar_modalMensaje());
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
                    this.mostrar_modalMensajeError("Algo salio mal al cargar la imagen", "Vuelva a intentarlo", () => this.ocultar_modalMensaje());
                    console.log("ERROR getImagen inputFileMarca: \n" + ERROR);
                }
            }
        });
    }
    mostrarModalFormulario(id_marca = "", nombreOriginal = "", imagenBase64 = "", imagenTipo = "") {
        this.setState((STATE, PROPS) => {
            return {
                modalFormulario_visible: true,
                modalFormulario_id: id_marca,
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
    //  LISTA DE MARCAS
    //________________________________
    renderizarListaDeMarcas() {
        // GENERACION DE TARJETAS
        let tarjetas = this.state.listaMarcas.map((marca, index) => {
            // EVALUAR IMAGEN
            let imagenMarca = (react_1.default.createElement("img", { src: marca.imagenBase64 }));
            if (marca.imagenBase64 == "") {
                imagenMarca = (react_1.default.createElement("div", { className: 'iconoImagen' },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faImage })));
            }
            return (react_1.default.createElement("div", { className: 'tarjetaMarca', key: "tarjetaMarca-" + index, onClick: (evento) => this.mostrarModalMarca(marca.id, marca.imagenBase64, marca.imagenTipo, marca.nombre) },
                imagenMarca,
                react_1.default.createElement("div", { className: 'labelMarca' },
                    " ",
                    marca.nombre,
                    " ")));
        });
        if (tarjetas.length == 0)
            return null;
        return (react_1.default.createElement("div", { className: "contenedorTarjetasMarca" }, tarjetas));
    }
    //________________________________
    //  CONTENEDOR DE PAGINACION < 1 - 2 - 3 ... >
    //________________________________
    addPaginacion() {
        let paginas = Math.ceil(this.state.totalMarcas / this.state.marcasXpagina);
        if (paginas > 1)
            return (react_1.default.createElement(Paginacion_1.default, { totalPaginas: paginas, PaginasPorGrupo: 4, stateRedux: this.props.stateReduxPaginacion, dispatchRedux: this.props.dispatchRedux, handleClick_botonPagina: this.getMarcas.bind(this) }));
    }
    addDivResultado() {
        let visible = false;
        if (this.state.totalMarcas == 0)
            visible = true;
        return (react_1.default.createElement(DivResultado_1.default, { visible: visible, icono: free_solid_svg_icons_1.faSearch, texto: "No tienes registrada ninguna marca" }));
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
        return (react_1.default.createElement("main", { className: 'contenedorPagina paginaMarca' },
            react_1.default.createElement(Encabezado_1.default, Object.assign({}, this.props, { habilitar_BotonRegresar: true, botonRegresar_URL: '/Producto', habilitar_MenuPrincipal: false, itemsMenuPrincipal: [], itemMenuP_seleccionado: "", habilitar_MenuOpciones: true, itemsMenuOpciones: this.itemsMenuOpciones, itemMenuOp_seleccionado: "", titulo: "Papeleria Geraldine Papeleria Geraldine", tituloTooltip: "Nombre de tu Negocio" })),
            this.renderizarListaDeMarcas(),
            this.addPaginacion(),
            this.addDivResultado(),
            react_1.default.createElement(ModalMarca_1.default, { modalVisible: this.state.modalMarca_visible, headerVisible: this.state.modalMarca_headerVisible, imagen: this.state.modalMarca_imagenBase64, nombre: this.state.modalMarca_nombre, handleClick_imagen: this.modalMarca_handleClick_imagen.bind(this), handleClick_seleccionar: this.modalMarca_handleClick_itemMenuSeleccionar.bind(this), handleClick_editar: this.modalMarca_handleClick_itemMenuEditar.bind(this), handleClick_eliminar: this.modalMarca_handleClick_itemMenuEliminar.bind(this), handleClick_X: this.modalMarca_handleClick_X.bind(this) }),
            react_1.default.createElement(ModalFormulario_1.default, { modalVisible: this.state.modalFormulario_visible, ID_marca: this.state.modalFormulario_id, imagen: this.state.modalFormulario_imagenBase64, nombreOriginal: this.state.modalFormulario_nombreOriginal, nuevoNombre: this.state.modalFormulario_inputNombre, handleClick_botonOK: this.modalFormulario_handleClick_botonOK.bind(this), handleClick_X: this.modalFormulario_handleClick_X.bind(this), handleChange_inputNombre: this.modalFormulario_handleChange_inputNombre.bind(this), eliminarImagenMarca: this.modalFormulario_handleClick_eliminarImagen.bind(this), handleInputFile_imagenMarca: this.modalFormulario_handleChange_inputFileImagen.bind(this) }),
            react_1.default.createElement(ModalMensaje_1.default, { titulo: this.state.modalMensaje_titulo, descripcion: this.state.modalMensaje_descripcion, tipo: this.state.modalMensaje_tipo, modalVisible: this.state.modalMensaje_visible, handleClick_botonAceptar: this.modalMensaje_handleClick_botonAceptar.bind(this), handleClick_botonNO: this.modalMensaje_handleClick_botonNO.bind(this), handleClick_botonSI: this.modalMensaje_handleClick_botonSI.bind(this) })));
    }
}
exports.default = PaginaMarca;
