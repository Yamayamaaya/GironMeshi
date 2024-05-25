"use strict";
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 1734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useAuthContext),
/* harmony export */   "H": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
_firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    user: undefined,
    loading: true,
    error: null
};
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
const AuthProvider = ({ children  })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true) // loading 状態を追加
    ;
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null) // error 状態を追加
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        try {
            const auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
            return (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{
                setUser(user);
                setLoading(false) // ユーザーの状態が確認できたら、loading を false に設定
                ;
            });
        } catch (error) {
            setError(error) // エラーが発生した場合、error を設定
            ;
            setLoading(false) // エラーが発生しても、loading を false に設定
            ;
            return ()=>{};
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            loading,
            error
        },
        children: children
    });
};
const useAuthContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;