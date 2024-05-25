"use strict";
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 1586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ useUserById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);
([_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useUserById = (id)=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!id) {
            setLoading(false);
            return;
        }
        const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
        const userDocRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "users", id);
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(userDocRef, (doc)=>{
            if (doc.exists()) {
                setUser({
                    ...doc.data(),
                    id: doc.id
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        }, (error)=>{
            setError(error);
            setLoading(false);
        });
        return ()=>unsubscribe() // Clean up the subscription on unmount
        ;
    }, [
        id
    ]);
    return {
        user,
        loading,
        error
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;