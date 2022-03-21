"use strict";
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
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
// utilerias
const Utilerias_1 = __importDefault(require("../../../Models/Utilerias"));
// css
require("../../../CSS/TextField/TextField_E1.css");
require("./ModalFormulario.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class ModalFormulario extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.inputNombreHTML = react_1.default.createRef();
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================
        this.state =
        {
        } */
        /*============================
            INPUT FILE IMAGEN MARCA
        ==============================*/
        this.selectorImagen = document.createElement('input');
        this.selectorImagen.type = "file";
        this.selectorImagen.multiple = false;
        this.selectorImagen.accept = "image/*";
        this.selectorImagen.onchange = (evento) => {
            this.props.handleInputFile_imagenMarca(this.selectorImagen);
            this.selectorImagen.files = null;
        };
    }
    /*===============================================================================
                            LOGICA
    =================================================================================*/
    corregirInputNombre() {
        let nombre = Utilerias_1.default.corregirTexto_quitarEspaciosEnBlanco(this.props.nuevoNombre);
        this.props.handleChange_inputNombre(nombre);
    }
    renderizarBotonesImagenMarca() {
        let botonElegir = null;
        if (this.props.imagen == "") {
            botonElegir = (react_1.default.createElement(material_1.Button, { className: 'botonVerde', onClick: (evento) => {
                    let selector = document.createElement('input');
                    selector.type = "file";
                    selector.multiple = false;
                    selector.accept = "image/*";
                    selector.onchange = (evento) => this.props.handleInputFile_imagenMarca(selector);
                    selector.click();
                } }, "Elegir Imagen"));
        }
        let botonEliminar = null;
        if (this.props.imagen != "") {
            botonEliminar = (react_1.default.createElement(material_1.Button, { className: 'botonRojo', onClick: (evento) => this.props.eliminarImagenMarca() }, "Eliminar Imagen"));
        }
        return (react_1.default.createElement("div", { className: 'divBotonesImagenMarca' },
            botonElegir,
            botonEliminar));
    }
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    render() {
        return (react_1.default.createElement(material_1.Modal, { className: 'modalMarcaFormulario', open: this.props.modalVisible },
            react_1.default.createElement("div", { className: 'contenidoModal' },
                react_1.default.createElement("div", { className: 'divHeader' },
                    react_1.default.createElement(material_1.Button, { className: "botonOK", onClick: (evento) => { this.props.handleClick_botonOK(); } }, (this.props.ID_marca == '') ? "Agregar Marca" : "Guardar Cambios"),
                    react_1.default.createElement(material_1.IconButton, { className: "iconoX", onClick: (evento) => { this.props.handleClick_X(); } },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }))),
                react_1.default.createElement(material_1.TextField, { className: "TextField_E1 inputNombre", label: "Nombre", helperText: "", placeholder: (this.props.ID_marca == "") ? "Nombre de la Marca" : this.props.nombreOriginal, variant: "outlined", type: "text", required: true, inputProps: {
                        autoComplete: 'off'
                    }, inputRef: this.inputNombreHTML, value: this.props.nuevoNombre, onChange: (evento) => this.props.handleChange_inputNombre(evento.target.value), onBlur: (evento) => { this.corregirInputNombre(); }, onKeyDown: (evento) => { if (evento.key == "Tab")
                        evento.preventDefault(); } }),
                this.renderizarBotonesImagenMarca(),
                react_1.default.createElement("img", { src: this.props.imagen }))));
    }
}
exports.default = ModalFormulario;
