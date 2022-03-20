"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReduxSelector = exports.useReduxDispatch = void 0;
//=====================================================
//  IMPORTACIONES
//=====================================================
const react_redux_1 = require("react-redux");
//=====================================================
//  EXPORTACIONES DEL "useSelector" y "useDispatch"
//=====================================================
/*
    "useSelector": RENOMBRADO COMO "useReduxSelector"
    "useDispatch": RENOMBRADO A "useReduxDispatch"
*/
const useReduxDispatch = () => (0, react_redux_1.useDispatch)();
exports.useReduxDispatch = useReduxDispatch;
exports.useReduxSelector = react_redux_1.useSelector;
