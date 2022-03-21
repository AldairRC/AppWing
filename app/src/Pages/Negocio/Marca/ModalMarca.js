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
//=====================================================
//  IMPORTACIONES GENERALES
//=====================================================
import React from 'react';
// componentes MUI
import { IconButton, Modal, Menu, MenuItem } from "@mui/material";
// iconos
import { faTimes, faBars, faPencilAlt, faVoteYea, faTrash, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// css
import "./ModalMarca.css";
//=====================================================
//  DEFINCION DEL COMPONENTE
//=====================================================
var ModalMarca = /** @class */ (function (_super) {
    __extends(ModalMarca, _super);
    function ModalMarca(props) {
        var _this = _super.call(this, props) || this;
        _this.iconoMenu = React.createRef();
        /*============================
            INICIALIZACION DEL ESTADO
        ==============================*/
        _this.state =
            {
                menuVisible: false
            };
        return _this;
    }
    ModalMarca.prototype.ocultarMenu = function () {
        this.setState(function (STATE, PROPS) {
            return {
                menuVisible: false
            };
        });
    };
    ModalMarca.prototype.renderizarImagenMarca = function () {
        var _this = this;
        var imagen = (React.createElement("img", { src: this.props.imagen, onClick: function (evento) { _this.props.handleClick_imagen(); } }));
        if (this.props.imagen == "") {
            imagen = (React.createElement("div", { className: 'iconoImagen', onClick: function (evento) { _this.props.handleClick_imagen(); } },
                React.createElement(FontAwesomeIcon, { icon: faImage })));
        }
        return imagen;
    };
    //======================================
    //  DEFINICION DEL HTML
    //======================================
    ModalMarca.prototype.render = function () {
        var _this = this;
        return (React.createElement(Modal, { className: 'modalMarca', open: this.props.modalVisible },
            React.createElement("div", { className: 'contenidoModal' },
                React.createElement("div", { className: (this.props.headerVisible) ? 'divHeader' : 'oculto' },
                    React.createElement(IconButton, { className: "iconoMenuMarca", ref: this.iconoMenu, onClick: function (evento) {
                            _this.setState(function (STATE, PROPS) {
                                return {
                                    menuVisible: true
                                };
                            });
                        } },
                        React.createElement(FontAwesomeIcon, { icon: faBars })),
                    React.createElement(Menu, { className: 'menuMarca', anchorEl: this.iconoMenu.current, open: this.state.menuVisible, onClose: function (evento) { _this.ocultarMenu(); } },
                        React.createElement(MenuItem, { className: 'itemMenu', onClick: function (evento) {
                                _this.ocultarMenu();
                                _this.props.handleClick_seleccionar();
                            } },
                            React.createElement("div", { className: 'icono' },
                                React.createElement(FontAwesomeIcon, { className: 'icono', icon: faVoteYea })),
                            React.createElement("label", null, " Seleccionar ")),
                        React.createElement(MenuItem, { className: 'itemMenu', onClick: function (evento) {
                                _this.ocultarMenu();
                                _this.props.handleClick_editar();
                            } },
                            React.createElement("div", { className: 'icono' },
                                React.createElement(FontAwesomeIcon, { icon: faPencilAlt })),
                            React.createElement("label", null, " Editar ")),
                        React.createElement(MenuItem, { className: 'itemMenu', onClick: function (evento) {
                                _this.ocultarMenu();
                                _this.props.handleClick_eliminar();
                            } },
                            React.createElement("div", { className: 'icono' },
                                React.createElement(FontAwesomeIcon, { icon: faTrash })),
                            React.createElement("label", null, " Eliminar "))),
                    React.createElement(IconButton, { className: "iconoX", onClick: function (evento) { _this.props.handleClick_X(); } },
                        React.createElement(FontAwesomeIcon, { icon: faTimes }))),
                this.renderizarImagenMarca(),
                React.createElement("div", { className: 'divNombre' }, this.props.nombre))));
    };
    return ModalMarca;
}(React.Component));
export default ModalMarca;
