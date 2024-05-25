"use strict";
exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 2133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fp": () => (/* binding */ FIREBASE_PROJECT_ID),
/* harmony export */   "eo": () => (/* binding */ FIREBASE_API_KEY),
/* harmony export */   "gF": () => (/* binding */ FIREBASE_APP_ID),
/* harmony export */   "i3": () => (/* binding */ FIREBASE_MESSAGING_SENDER_ID),
/* harmony export */   "p7": () => (/* binding */ FIREBASE_AUTH_DOMAIN),
/* harmony export */   "sj": () => (/* binding */ FIREBASE_STORAGE_BUCKET)
/* harmony export */ });
const FIREBASE_API_KEY = "AIzaSyBJX-EkdpXU-ns3dN87mQP3qpqBY2whXas" ?? 0;
const FIREBASE_AUTH_DOMAIN = "gironmeshi-55316.firebaseapp.com" ?? 0;
const FIREBASE_PROJECT_ID = "gironmeshi-55316" ?? 0;
const FIREBASE_STORAGE_BUCKET = "gironmeshi-55316.appspot.com" ?? 0;
const FIREBASE_MESSAGING_SENDER_ID = "855765557765" ?? 0;
const FIREBASE_APP_ID = "1:855765557765:web:9a0665fe5378085662326c" ?? 0;


/***/ }),

/***/ 6509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ initializeFirebaseApp)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3392);
/* harmony import */ var _src_constant_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2133);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const firebaseConfig = {
    apiKey: _src_constant_env__WEBPACK_IMPORTED_MODULE_2__/* .FIREBASE_API_KEY */ .eo,
    authDomain: _src_constant_env__WEBPACK_IMPORTED_MODULE_2__/* .FIREBASE_AUTH_DOMAIN */ .p7,
    projectId: _src_constant_env__WEBPACK_IMPORTED_MODULE_2__/* .FIREBASE_PROJECT_ID */ .Fp,
    storageBucket: _src_constant_env__WEBPACK_IMPORTED_MODULE_2__/* .FIREBASE_STORAGE_BUCKET */ .sj,
    messagingSenderId: _src_constant_env__WEBPACK_IMPORTED_MODULE_2__/* .FIREBASE_MESSAGING_SENDER_ID */ .i3,
    appId: _src_constant_env__WEBPACK_IMPORTED_MODULE_2__/* .FIREBASE_APP_ID */ .gF
};
const initializeFirebaseApp = ()=>{
    const app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getStorage)(app);
    return {
        app,
        storage
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;