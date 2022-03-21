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
/*==============================================================================================
                                    CLASE UTILERIAS
================================================================================================*/
var Utilerias = /** @class */ (function () {
    function Utilerias() {
    }
    /*==============================================
        OBTENER LA URL (string) DE UN ARCHIVO (FILE)
    ================================================*/
    Utilerias.getImagen = function (imagen, extensionesValidas, sizeMax) {
        return new Promise(function (EXITOSO, ERROR) {
            /*__________________________________________
                VERIFICAR SI ES TIPO DE IMAGEN VALIDA
            /___________________________________________*/
            var nombre_extension = imagen.name.split('.');
            var extension = nombre_extension[nombre_extension.length - 1];
            if (extensionesValidas.find(function (ext) { return ext == extension; }) == undefined) {
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
            var reader = new FileReader();
            reader.onloadend = function () { return EXITOSO({
                codigoERROR: Utilerias.LECTURA_IMAGEN_CORRECTA,
                mensajeERROR: "",
                base64: reader.result,
                tipoImagen: extension
            }); };
            reader.onerror = function (evento) {
                EXITOSO({
                    codigoERROR: Utilerias.ERROR_IMAGEN_LECTURA,
                    mensajeERROR: "Vuelva a intentarlo",
                    base64: "",
                    tipoImagen: ""
                });
            };
            reader.readAsDataURL(imagen);
        });
    };
    /*==============================================
        OBTENER LAS URLs (string) DE LOS ARCHIVOS (FILE)
        Y SUS ESTATUS DE LECTURA
    ================================================*/
    Utilerias.getImagenes = function (imagenes, extensionesValidas, sizeMax, maxImagenes, totalImagenesActuales) {
        return __awaiter(this, void 0, void 0, function () {
            var imagenesBase64, imagenesTipo, imagenesEstatus, i, imagen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imagenesBase64 = [];
                        imagenesTipo = [];
                        imagenesEstatus = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < imagenes.length)) return [3 /*break*/, 4];
                        if (totalImagenesActuales == maxImagenes) {
                            imagenesBase64.push("");
                            imagenesTipo.push("");
                            imagenesEstatus.push(Utilerias.ERROR_IMAGEN_MAX_IMAGENES);
                            return [3 /*break*/, 3];
                        }
                        return [4 /*yield*/, Utilerias.getImagen(imagenes[i], extensionesValidas, sizeMax)];
                    case 2:
                        imagen = _a.sent();
                        imagenesBase64.push(imagen.base64);
                        imagenesTipo.push(imagen.tipoImagen);
                        imagenesEstatus.push(imagen.codigoERROR);
                        if (imagen.codigoERROR == Utilerias.LECTURA_IMAGEN_CORRECTA)
                            totalImagenesActuales++;
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, {
                            imagenesBase64: imagenesBase64,
                            imagenesTipo: imagenesTipo,
                            imagenesEstatus: imagenesEstatus
                        }];
                }
            });
        });
    };
    /*==============================================
        OBTENER UN NUMERO FORMATEADO CON COMAS
    ================================================*/
    Utilerias.getNumeroConComas = function (numero) {
        var cont = 1;
        var num = "";
        for (var i = numero.length - 1; i >= 0; i--) {
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
    };
    /*==============================================
        OBTENER UN NUMERO (PE.PD) SIN COMAS
    ================================================*/
    Utilerias.getNumero = function (PE, PD, digDecimales) {
        PE = PE.replace(' ', '').replace(',', '');
        PD = Utilerias.getDecimal(Number(PD), digDecimales);
        if (PE == "")
            PE = "0";
        if (PD == "")
            PD = "0";
        var numero = Number(PE + "." + PD);
        if (isNaN(numero))
            return NaN;
        else
            return numero;
    };
    Utilerias.getDecimal = function (numeroDecimal, limiteDigitos) {
        if (limiteDigitos === void 0) { limiteDigitos = -1; }
        var decimal = numeroDecimal + "";
        if (limiteDigitos == -1) {
            return decimal;
        }
        else if (decimal.length >= limiteDigitos)
            return decimal.substring(0, limiteDigitos);
        else {
            var dif = limiteDigitos - decimal.length;
            return decimal + ("0").repeat(dif);
        }
    };
    Utilerias.getNumeroCompletoConComas = function (numero, digDecimales) {
        if (digDecimales === void 0) { digDecimales = -1; }
        var PE = "";
        var PD = "";
        if ((numero + "").indexOf('.') == -1) { // SOLO PARTE ENTERA
            return Utilerias.getNumeroConComas((numero + ""));
        }
        else {
            var partesNumero = (numero + "").split('.');
            PE = Utilerias.getNumeroConComas(partesNumero[0]);
            PD = Utilerias.getDecimal(Number(partesNumero[1]), digDecimales);
            return PE + "." + PD;
        }
    };
    /*=========================================
        REALIZAR PETICION POST AL SERVIDOR
    ===========================================*/
    Utilerias.postHTTP = function (URL, datos) {
        return __awaiter(this, void 0, void 0, function () {
            var body, respuesta, datosServidor, ERROR_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = new FormData();
                        datos.forEach(function (dato) { body.append(dato.nombreCampo, dato.valor); });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetch(Utilerias.SERVIDOR_ONLINE + URL, {
                                method: 'POST',
                                body: body
                            })];
                    case 2:
                        respuesta = _a.sent();
                        if (!respuesta.ok) return [3 /*break*/, 4];
                        return [4 /*yield*/, respuesta.json()];
                    case 3:
                        datosServidor = _a.sent();
                        return [2 /*return*/, {
                                existeError: datosServidor.existeError,
                                titulo: datosServidor.titulo,
                                descripcion: datosServidor.descripcion,
                                datos: datosServidor.datos
                            }];
                    case 4: // HTTP ERROR
                    return [2 /*return*/, {
                            existeError: true,
                            titulo: "Algo salio mal",
                            descripcion: "Por favor verifique su conexion a internet y vuelva a intentarlo",
                            datos: respuesta.statusText
                        }];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ERROR_1 = _a.sent();
                        return [2 /*return*/, {
                                existeError: true,
                                titulo: "Algo salio mal",
                                descripcion: "Por favor verifique su conexion a internet y vuelva a intentarlo",
                                datos: ERROR_1.message
                            }];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /*============================================================
        QUITAR ESPACIOS EN BLANCO INUTILES
    ==============================================================*/
    Utilerias.corregirTexto_quitarEspaciosEnBlanco = function (texto) {
        var nuevoTexto = "";
        for (var i = 0; i < texto.length; i++) {
            var caracter = texto.charAt(i);
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
    };
    Utilerias.SERVIDOR_LOCAL = "http://localhost:4000/";
    Utilerias.SERVIDOR_ONLINE = "http://wingmex.herokuapp.com/"; //"http://192.168.8.17:4000/"
    Utilerias.ERROR_IMAGEN_TIPO = 1;
    Utilerias.ERROR_IMAGEN_SIZE_MAX = 2;
    Utilerias.ERROR_IMAGEN_LECTURA = 3;
    Utilerias.ERROR_IMAGEN_MAX_IMAGENES = 4;
    Utilerias.LECTURA_IMAGEN_CORRECTA = 0;
    return Utilerias;
}());
export default Utilerias;
