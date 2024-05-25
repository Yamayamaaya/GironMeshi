"use strict";
exports.id = 874;
exports.ids = [874];
exports.modules = {

/***/ 6874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_feature_auth_component_AuthGuard_AuthGuard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _CustomSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3456);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_feature_auth_component_AuthGuard_AuthGuard__WEBPACK_IMPORTED_MODULE_2__, _CustomSpinner__WEBPACK_IMPORTED_MODULE_3__]);
([src_feature_auth_component_AuthGuard_AuthGuard__WEBPACK_IMPORTED_MODULE_2__, _CustomSpinner__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import { Spinner } from '@chakra-ui/react'



const CustomPage = ({ title , children , isSetUpOGP =true , isTitleHidden =false , isAuthPageHidden =false , loading =false , isLimitWidth =true  })=>{
    const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const handleOnline = ()=>setIsOnline(true);
        const handleOffline = ()=>setIsOnline(false);
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return ()=>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isSetUpOGP && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: title
                    })
                ]
            }),
            !isOnline && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomSpinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        caption: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-white text-center mt-32",
                        children: "インターネット接続が不安定です。"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${isLimitWidth ? "md:px-[15vw] px-[5vw]" : ""} flex  flex-col items-center  h-full overflow-x-hidden w-screen
        `,
                children: [
                    !isTitleHidden && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl my-6 font-bold w-[100vw] text-center",
                        children: title
                    }),
                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomSpinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        caption: "読込中…"
                    }) : isAuthPageHidden ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_feature_auth_component_AuthGuard_AuthGuard__WEBPACK_IMPORTED_MODULE_2__/* .AuthGuard */ .a, {
                        children: children
                    }) : children
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "d": () => (/* binding */ CustomSpinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CustomSpinner = ({ caption ="Loading..."  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        position: "fixed",
        left: "0",
        top: "0",
        "z-index": "1000",
        background: "#AAA3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
                size: "xl",
                className: "mt-8",
                color: "blue.500",
                emptyColor: "gray.200",
                speed: "1.0s"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: caption
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSpinner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1734);
/* harmony import */ var _src_hooks_useRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3074);
/* harmony import */ var _src_components_CustomSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3456);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__, _src_components_CustomSpinner__WEBPACK_IMPORTED_MODULE_3__]);
([_src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__, _src_components_CustomSpinner__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const AuthGuard = ({ children  })=>{
    const { user  } = (0,_src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const { push  } = (0,_src_hooks_useRouter__WEBPACK_IMPORTED_MODULE_2__/* .useRouter */ .t)();
    if (typeof user === "undefined") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_CustomSpinner__WEBPACK_IMPORTED_MODULE_3__/* .CustomSpinner */ .d, {
            caption: "ユーザー情報を取得中…"
        });
    }
    if (user === null) {
        push((path)=>path.signin.$url());
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useRouter)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_lib_pathpida_$path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5655);



const useRouter = ()=>{
    const nextRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const push = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((url)=>{
        return nextRouter.push(typeof url === "function" ? url(_src_lib_pathpida_$path__WEBPACK_IMPORTED_MODULE_2__/* .pagesPath */ .V) : url);
    }, [
        nextRouter
    ]);
    const replace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((url)=>{
        return nextRouter.replace(typeof url === "function" ? url(_src_lib_pathpida_$path__WEBPACK_IMPORTED_MODULE_2__/* .pagesPath */ .V) : url);
    }, [
        nextRouter
    ]);
    return {
        push,
        replace
    };
};


/***/ }),

/***/ 5655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ pagesPath)
/* harmony export */ });
const pagesPath = {
    "lp": {
        $url: (url)=>({
                pathname: "/lp",
                hash: url?.hash
            })
    },
    "mypage": {
        "profile": {
            $url: (url)=>({
                    pathname: "/mypage/profile",
                    hash: url?.hash
                })
        }
    },
    "signin": {
        $url: (url)=>({
                pathname: "/signin",
                hash: url?.hash
            })
    },
    $url: (url)=>({
            pathname: "/",
            hash: url?.hash
        })
};


/***/ })

};
;