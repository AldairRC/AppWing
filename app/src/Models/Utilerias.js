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
Object.defineProperty(exports, "__esModule", { value: true });
/*==============================================================================================
                                    CLASE UTILERIAS
================================================================================================*/
class Utilerias {
    /*==============================================
        OBTENER LA URL (string) DE UN ARCHIVO (FILE)
    ================================================*/
    static getImagen(imagen, extensionesValidas, sizeMax) {
        return new Promise((EXITOSO, ERROR) => {
            /*__________________________________________
                VERIFICAR SI ES TIPO DE IMAGEN VALIDA
            /___________________________________________*/
            let nombre_extension = imagen.name.split('.');
            let extension = nombre_extension[nombre_extension.length - 1];
            if (extensionesValidas.find((ext) => ext == extension) == undefined) {
                EXITOSO({
                    codigoERROR: Utilerias.ERROR_IMAGEN_TIPO,
                    mensajeERROR: "NO es un tipo de imagen valido",
                    base64: "",
                    tipoImagen: ""
                });
                return;
            }
            /*__________________________________________
                VERIFICAR TAMAÑO DE IMAGEN
            /___________________________________________*/
            if (imagen.size > sizeMax) {
                EXITOSO({
                    codigoERROR: Utilerias.ERROR_IMAGEN_SIZE_MAX,
                    mensajeERROR: "El tamaño de la imagen NO es valido",
                    base64: "",
                    tipoImagen: ""
                });
                return;
            }
            let reader = new FileReader();
            reader.onloadend = () => EXITOSO({
                codigoERROR: Utilerias.LECTURA_IMAGEN_CORRECTA,
                mensajeERROR: "",
                base64: reader.result,
                tipoImagen: extension
            });
            reader.onerror = (evento) => {
                EXITOSO({
                    codigoERROR: Utilerias.ERROR_IMAGEN_LECTURA,
                    mensajeERROR: "Vuelva a intentarlo",
                    base64: "",
                    tipoImagen: ""
                });
            };
            reader.readAsDataURL(imagen);
        });
    }
    /*==============================================
        OBTENER LAS URLs (string) DE LOS ARCHIVOS (FILE)
        Y SUS ESTATUS DE LECTURA
    ================================================*/
    static getImagenes(imagenes, extensionesValidas, sizeMax, maxImagenes, totalImagenesActuales) {
        return __awaiter(this, void 0, void 0, function* () {
            let imagenesBase64 = [];
            let imagenesTipo = [];
            let imagenesEstatus = [];
            for (let i = 0; i < imagenes.length; i++) {
                if (totalImagenesActuales == maxImagenes) {
                    imagenesBase64.push("");
                    imagenesTipo.push("");
                    imagenesEstatus.push(Utilerias.ERROR_IMAGEN_MAX_IMAGENES);
                    continue;
                }
                let imagen = yield Utilerias.getImagen(imagenes[i], extensionesValidas, sizeMax);
                imagenesBase64.push(imagen.base64);
                imagenesTipo.push(imagen.tipoImagen);
                imagenesEstatus.push(imagen.codigoERROR);
                if (imagen.codigoERROR == Utilerias.LECTURA_IMAGEN_CORRECTA)
                    totalImagenesActuales++;
            }
            return {
                imagenesBase64: imagenesBase64,
                imagenesTipo: imagenesTipo,
                imagenesEstatus: imagenesEstatus
            };
        });
    }
    /*==============================================
        OBTENER UN NUMERO FORMATEADO CON COMAS
    ================================================*/
    static getNumeroConComas(numero) {
        let cont = 1;
        let num = "";
        for (let i = numero.length - 1; i >= 0; i--) {
            if (cont == 3) {
                cont = 1;
                num = "," + numero.charAt(i) + num;
            }
            else {
                cont++;
                num = numero.charAt(i) + num;
            }
        }
        if (numero.length != 0 && num.charAt(0) == ',')
            num = num.substring(1, num.length);
        return num;
    }
    /*==============================================
        OBTENER UN NUMERO (PE.PD) SIN COMAS
    ================================================*/
    static getNumero(PE, PD, digDecimales) {
        PE = PE.replace(' ', '').replace(',', '');
        PD = Utilerias.getDecimal(Number(PD), digDecimales);
        if (PE == "")
            PE = "0";
        if (PD == "")
            PD = "0";
        let numero = Number(PE + "." + PD);
        if (isNaN(numero))
            return NaN;
        else
            return numero;
    }
    static getDecimal(numeroDecimal, limiteDigitos = -1) {
        let decimal = numeroDecimal + "";
        if (limiteDigitos == -1) {
            return decimal;
        }
        else if (decimal.length >= limiteDigitos)
            return decimal.substring(0, limiteDigitos);
        else {
            let dif = limiteDigitos - decimal.length;
            return decimal + ("0").repeat(dif);
        }
    }
    static getNumeroCompletoConComas(numero, digDecimales = -1) {
        let PE = "";
        let PD = "";
        if ((numero + "").indexOf('.') == -1) { // SOLO PARTE ENTERA
            return Utilerias.getNumeroConComas((numero + ""));
        }
        else {
            let partesNumero = (numero + "").split('.');
            PE = Utilerias.getNumeroConComas(partesNumero[0]);
            PD = Utilerias.getDecimal(Number(partesNumero[1]), digDecimales);
            return PE + "." + PD;
        }
    }
    /*=========================================
        REALIZAR PETICION POST AL SERVIDOR
    ===========================================*/
    static postHTTP(URL, datos) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = new FormData();
            datos.forEach((dato) => { body.append(dato.nombreCampo, dato.valor); });
            try {
                let respuesta = yield fetch(Utilerias.SERVIDOR_ONLINE + URL, {
                    method: 'POST',
                    body: body
                });
                if (respuesta.ok) // HTTP OK
                 {
                    let datosServidor = yield respuesta.json();
                    return {
                        existeError: datosServidor.existeError,
                        titulo: datosServidor.titulo,
                        descripcion: datosServidor.descripcion,
                        datos: datosServidor.datos
                    };
                }
                else { // HTTP ERROR
                    return {
                        existeError: true,
                        titulo: "Algo salio mal",
                        descripcion: "Por favor verifique su conexion a internet y vuelva a intentarlo",
                        datos: respuesta.statusText
                    };
                }
            }
            catch (ERROR) {
                return {
                    existeError: true,
                    titulo: "Algo salio mal",
                    descripcion: "Por favor verifique su conexion a internet y vuelva a intentarlo",
                    datos: ERROR.message
                };
            }
        });
    }
    /*============================================================
        QUITAR ESPACIOS EN BLANCO INUTILES
    ==============================================================*/
    static corregirTexto_quitarEspaciosEnBlanco(texto) {
        let nuevoTexto = "";
        for (let i = 0; i < texto.length; i++) {
            let caracter = texto.charAt(i);
            if (caracter == " ") {
                if (nuevoTexto == "" || nuevoTexto.charAt(nuevoTexto.length - 1) == " ")
                    continue;
                nuevoTexto += caracter;
            }
            else {
                nuevoTexto += caracter;
            }
        }
        if (nuevoTexto != "" && nuevoTexto.charAt(nuevoTexto.length - 1) == " ") {
            nuevoTexto = nuevoTexto.substring(0, nuevoTexto.length - 1);
        }
        return nuevoTexto;
    }
}
exports.default = Utilerias;
Utilerias.SERVIDOR_LOCAL = "http://localhost:4000/";
Utilerias.SERVIDOR_ONLINE = "http://192.168.8.17:4000/";
Utilerias.ERROR_IMAGEN_TIPO = 1;
Utilerias.ERROR_IMAGEN_SIZE_MAX = 2;
Utilerias.ERROR_IMAGEN_LECTURA = 3;
Utilerias.ERROR_IMAGEN_MAX_IMAGENES = 4;
Utilerias.LECTURA_IMAGEN_CORRECTA = 0;
