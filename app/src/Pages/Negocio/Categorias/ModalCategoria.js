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
// css
require("./ModalCategoria.css");
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
class ModalCategoria extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.iconoMenu = react_1.default.createRef();
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        this.state =
            {
                menuVisible: false
            };
    }
    ocultarMenu() {
        this.setState((STATE, PROPS) => {
            return {
                menuVisible: false
            };
        });
    }
    renderizarImagenCategoria() {
        let imagen = (react_1.default.createElement("img", { src: this.props.imagen, onClick: (evento) => { this.props.handleClick_imagen(); } }));
        if (this.props.imagen == "") {
            imagen = (react_1.default.createElement("div", { className: 'iconoImagen', onClick: (evento) => { this.props.handleClick_imagen(); } },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faImage })));
        }
        return imagen;
    }
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    render() {
        return (react_1.default.createElement(material_1.Modal, { className: 'modalCategoria', open: this.props.modalVisible },
            react_1.default.createElement("div", { className: 'contenidoModal' },
                react_1.default.createElement("div", { className: (this.props.headerVisible) ? 'divHeader' : 'oculto' },
                    react_1.default.createElement(material_1.IconButton, { className: "iconoMenuCategoria", ref: this.iconoMenu, onClick: (evento) => {
                            this.setState((STATE, PROPS) => {
                                return {
                                    menuVisible: true
                                };
                            });
                        } },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBars })),
                    react_1.default.createElement(material_1.Menu, { className: 'menuCategoria', anchorEl: this.iconoMenu.current, open: this.state.menuVisible, onClose: (evento) => { this.ocultarMenu(); } },
                        react_1.default.createElement(material_1.MenuItem, { className: 'itemMenu', onClick: (evento) => {
                                this.ocultarMenu();
                                this.props.handleClick_seleccionar();
                            } },
                            react_1.default.createElement("div", { className: 'icono' },
                                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { className: 'icono', icon: free_solid_svg_icons_1.faVoteYea })),
                            react_1.default.createElement("label", null, " Seleccionar ")),
                        react_1.default.createElement(material_1.MenuItem, { className: 'itemMenu', onClick: (evento) => {
                                this.ocultarMenu();
                                this.props.handleClick_editar();
                            } },
                            react_1.default.createElement("div", { className: 'icono' },
                                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPencilAlt })),
                            react_1.default.createElement("label", null, " Editar ")),
                        react_1.default.createElement(material_1.MenuItem, { className: 'itemMenu', onClick: (evento) => {
                                this.ocultarMenu();
                                this.props.handleClick_eliminar();
                            } },
                            react_1.default.createElement("div", { className: 'icono' },
                                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTrash })),
                            react_1.default.createElement("label", null, " Eliminar "))),
                    react_1.default.createElement(material_1.IconButton, { className: "iconoX", onClick: (evento) => { this.props.handleClick_X(); } },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }))),
                this.renderizarImagenCategoria(),
                react_1.default.createElement("div", { className: 'divNombre' }, this.props.nombre))));
    }
}
exports.default = ModalCategoria;
