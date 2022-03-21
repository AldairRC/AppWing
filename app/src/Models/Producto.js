"use strict";
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
const Utilerias_1 = __importDefault(require("./Utilerias"));
class Producto {
    constructor() {
        this.imagenes = [];
        this.imagenesURL = [];
    }
    addImagenes(imgs) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultado = [];
            for (let i = 0; i < imgs.length; i++) {
                let imagen = {
                    codigoERROR: 0,
                    mensajeERROR: "",
                    base64: "",
                    tipoImagen: ""
                };
                try {
                    imagen = yield Utilerias_1.default.getImagen(imgs[i], ["jpg", "png", "jpeg"], 5000000);
                }
                catch (ERROR) {
                    console.log(ERROR);
                    resultado.push(Producto.ERROR_NO_IMAGEN);
                    continue;
                }
                switch (imagen.codigoERROR) {
                    case Utilerias_1.default.ERROR_IMAGEN_TIPO:
                    case Utilerias_1.default.ERROR_IMAGEN_LECTURA:
                        resultado.push(Producto.ERROR_NO_IMAGEN);
                        continue;
                    case Utilerias_1.default.ERROR_IMAGEN_SIZE_MAX:
                        resultado.push(Producto.ERROR_TAMAÑO_MAX);
                        continue;
                }
                //________________________
                // VERIFICAR SI IMAGENES == 4
                //________________________
                if (this.imagenes.length == 4) {
                    resultado.push(Producto.ERROR_LIMITE_MAX);
                    continue;
                }
                //________________________
                // TODO BIEN
                //________________________
                this.imagenesURL.push(imagen.base64);
                resultado.push(Producto.EXITOSO);
                this.imagenes.push(imgs[i]);
            }
            return resultado;
        });
    }
    eliminarImagen(index) {
        this.imagenes.splice(index, 1);
        let FilesEliminados = this.imagenesURL.splice(index, 1);
        if (FilesEliminados.length != 0)
            return true;
        return false;
    }
    clonar() {
        let nuevoProducto = new Producto();
        nuevoProducto.imagenes = this.imagenes.slice(0, this.imagenes.length);
        nuevoProducto.imagenesURL = this.imagenesURL.slice(0, this.imagenesURL.length);
        return nuevoProducto;
    }
}
exports.default = Producto;
Producto.EXITOSO = 0;
Producto.ERROR_LIMITE_MAX = 1;
Producto.ERROR_NO_IMAGEN = 2;
Producto.ERROR_TAMAÑO_MAX = 3;
