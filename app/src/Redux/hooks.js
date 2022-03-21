//=====================================================
//  IMPORTACIONES
//=====================================================
import { useDispatch, useSelector } from 'react-redux';
//=====================================================
//  EXPORTACIONES DEL "useSelector" y "useDispatch"
//=====================================================
/*
    "useSelector": RENOMBRADO COMO "useReduxSelector"
    "useDispatch": RENOMBRADO A "useReduxDispatch"
*/
export var useReduxDispatch = function () { return useDispatch(); };
export var useReduxSelector = useSelector;
