module.exports = [
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cookies.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAuthHeaders",
    ()=>getAuthHeaders,
    "getCacheOptions",
    ()=>getCacheOptions,
    "getCacheTag",
    ()=>getCacheTag,
    "getCartId",
    ()=>getCartId,
    "getPendingCustomer",
    ()=>getPendingCustomer,
    "removeAuthToken",
    ()=>removeAuthToken,
    "removeCartId",
    ()=>removeCartId,
    "removePendingCustomer",
    ()=>removePendingCustomer,
    "setAuthToken",
    ()=>setAuthToken,
    "setCartId",
    ()=>setCartId,
    "setPendingCustomer",
    ()=>setPendingCustomer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
const getAuthHeaders = async ()=>{
    try {
        const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const token = cookies.get("_medusa_jwt")?.value;
        if (!token) {
            return {};
        }
        return {
            authorization: `Bearer ${token}`
        };
    } catch  {
        return {};
    }
};
const getCacheTag = async (tag)=>{
    try {
        const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const cacheId = cookies.get("_medusa_cache_id")?.value;
        if (!cacheId) {
            return "";
        }
        return `${tag}-${cacheId}`;
    } catch  {
        return "";
    }
};
const getCacheOptions = async (tag)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const cacheTag = await getCacheTag(tag);
    if (!cacheTag) {
        return {};
    }
    return {
        tags: [
            `${cacheTag}`
        ]
    };
};
const setAuthToken = async (token)=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set("_medusa_jwt", token, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        sameSite: "strict",
        secure: ("TURBOPACK compile-time value", "development") === "production"
    });
};
const removeAuthToken = async ()=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set("_medusa_jwt", "", {
        maxAge: -1
    });
};
const setPendingCustomer = async (customer)=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set("_medusa_pending_customer", JSON.stringify(customer), {
        maxAge: 60 * 60 * 24,
        httpOnly: true,
        sameSite: "strict",
        secure: ("TURBOPACK compile-time value", "development") === "production"
    });
};
const getPendingCustomer = async ()=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const value = cookies.get("_medusa_pending_customer")?.value;
    if (!value) {
        return null;
    }
    try {
        return JSON.parse(value);
    } catch  {
        return null;
    }
};
const removePendingCustomer = async ()=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set("_medusa_pending_customer", "", {
        maxAge: -1
    });
};
const getCartId = async ()=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return cookies.get("_medusa_cart_id")?.value;
};
const setCartId = async (cartId)=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set("_medusa_cart_id", cartId, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        sameSite: "strict",
        secure: ("TURBOPACK compile-time value", "development") === "production"
    });
};
const removeCartId = async ()=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set("_medusa_cart_id", "", {
        maxAge: -1
    });
};
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/locale-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f1101a42423105c1240b934b25b00f68dd055e84d":"setLocaleCookie","7f889124c6f8d515a6b5259314ad48228ad796ad64":"getLocale","7fb329aae18664f8b832bbbc7a3937ce76b4eabe95":"updateLocale"},"",""] */ __turbopack_context__.s([
    "getLocale",
    ()=>getLocale,
    "setLocaleCookie",
    ()=>setLocaleCookie,
    "updateLocale",
    ()=>updateLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const LOCALE_COOKIE_NAME = "_medusa_locale";
const getLocale = async ()=>{
    try {
        const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        return cookies.get(LOCALE_COOKIE_NAME)?.value ?? null;
    } catch  {
        return null;
    }
};
const setLocaleCookie = async (locale)=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set(LOCALE_COOKIE_NAME, locale, {
        maxAge: 60 * 60 * 24 * 365,
        httpOnly: false,
        sameSite: "strict",
        secure: ("TURBOPACK compile-time value", "development") === "production"
    });
};
const updateLocale = async (localeCode)=>{
    await setLocaleCookie(localeCode);
    // Update cart with the new locale if a cart exists
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (cartId) {
        const headers = {
            ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.update(cartId, {
            locale: localeCode
        }, {}, headers);
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        if (cartCacheTag) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        }
    }
    // Revalidate relevant caches to refresh content
    const productsCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("products");
    if (productsCacheTag) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(productsCacheTag);
    }
    const categoriesCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("categories");
    if (categoriesCacheTag) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(categoriesCacheTag);
    }
    const collectionsCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("collections");
    if (collectionsCacheTag) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(collectionsCacheTag);
    }
    return localeCode;
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getLocale,
    setLocaleCookie,
    updateLocale
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLocale, "7f889124c6f8d515a6b5259314ad48228ad796ad64", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setLocaleCookie, "7f1101a42423105c1240b934b25b00f68dd055e84d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLocale, "7fb329aae18664f8b832bbbc7a3937ce76b4eabe95", null);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/util/get-locale-header.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocaleHeader",
    ()=>getLocaleHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$locale$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/locale-actions.ts [app-rsc] (ecmascript)");
;
async function getLocaleHeader() {
    const locale = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$locale$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocale"])();
    return {
        "x-medusa-locale": locale
    };
}
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sdk",
    ()=>sdk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$get$2d$locale$2d$header$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/util/get-locale-header.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/@medusajs/js-sdk/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
;
;
// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "http://localhost:9000";
if ("TURBOPACK compile-time truthy", 1) {
    MEDUSA_BACKEND_URL = ("TURBOPACK compile-time value", "http://localhost:9000");
}
const sdk = new __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    baseUrl: MEDUSA_BACKEND_URL,
    debug: ("TURBOPACK compile-time value", "development") === "development",
    publishableKey: ("TURBOPACK compile-time value", "pk_777aeeed057568d8f29685dcb7957270b1812cdde28274dbd46e8e108bef45b3")
});
const originalFetch = sdk.client.fetch.bind(sdk.client);
sdk.client.fetch = async (input, init)=>{
    const headers = init?.headers ?? {};
    let localeHeader;
    try {
        localeHeader = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$get$2d$locale$2d$header$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocaleHeader"])();
        headers["x-medusa-locale"] ??= localeHeader["x-medusa-locale"];
    } catch  {}
    const newHeaders = {
        ...localeHeader,
        ...headers
    };
    init = {
        ...init,
        headers: newHeaders
    };
    return originalFetch(input, init);
};
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/util/medusa-error.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>medusaError
]);
function medusaError(error) {
    const err = error;
    if (err.response) {
        const u = new URL(err.config?.url ?? "", err.config?.baseURL ?? "");
        console.error("Resource:", u.toString());
        console.error("Response data:", err.response.data);
        console.error("Status code:", err.response.status);
        console.error("Headers:", err.response.headers);
        const data = err.response.data;
        const message = typeof data === "object" && data !== null ? data.message || String(data) : data;
        throw new Error(message.charAt(0).toUpperCase() + message.slice(1) + ".");
    } else if (err.request) {
        throw new Error("No response received: " + String(err.request));
    } else {
        throw new Error("Error setting up the request: " + err.message);
    }
}
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/regions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f0896c053e56772f93598e7ed0ef3cc82b5b33a32":"getRegion","7f8243e5e61fe076177a2db60128978a911cbbd1e6":"retrieveRegion","7ffb24541c113938c7be97a35950ca2c595df6ad7e":"listRegions"},"",""] */ __turbopack_context__.s([
    "getRegion",
    ()=>getRegion,
    "listRegions",
    ()=>listRegions,
    "retrieveRegion",
    ()=>retrieveRegion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const listRegions = async ()=>{
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/regions`, {
        method: "GET",
        headers,
        next: {
            revalidate: 0
        },
        cache: "no-store"
    }).then(({ regions })=>{
        console.log("🌏 FETCHED REGIONS FROM MEDUSA:", regions.map((r)=>({
                id: r.id,
                name: r.name,
                currency: r.currency_code,
                countries: r.countries?.map((c)=>c.iso_2)
            })));
        return regions;
    }).catch((err)=>{
        console.error("❌ FAILED TO FETCH REGIONS:", err.message);
        return [];
    });
};
const getRegion = async (countryCode)=>{
    try {
        const regions = await listRegions();
        if (!regions?.length) {
            console.log("❌ NO REGIONS RETURNED BY STORE API");
            return null;
        }
        // Match country code case-insensitively (e.g., "au" vs "AU")
        const normalizedCountry = countryCode.toLowerCase();
        const region = regions.find((r)=>r.countries?.some((c)=>c.iso_2?.toLowerCase() === normalizedCountry));
        if (!region) {
            console.log(`❌ REGION NOT FOUND FOR COUNTRY CODE: ${countryCode}. Available countries:`, regions.flatMap((r)=>r.countries?.map((c)=>c.iso_2)));
            return null;
        }
        return region;
    } catch (e) {
        console.error("Error retrieving region:", e);
        return null;
    }
};
const retrieveRegion = async (id)=>{
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/regions/${id}`, {
        method: "GET",
        headers,
        next: {
            revalidate: 0
        },
        cache: "no-store"
    }).then(({ region })=>region).catch(()=>null);
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    listRegions,
    getRegion,
    retrieveRegion
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listRegions, "7ffb24541c113938c7be97a35950ca2c595df6ad7e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRegion, "7f0896c053e56772f93598e7ed0ef3cc82b5b33a32", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(retrieveRegion, "7f8243e5e61fe076177a2db60128978a911cbbd1e6", null);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cart.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0064776bab36b1e3c19bfe8469b51c59141191faed":"listCartOptions","400861639b912bfefd5d1e782b805f80a2b7f96373":"deleteLineItem","4044f7789a01c5ab1c53b9b30e55b20f1a8c0ee0a5":"setShippingMethod","405f2715e9a8f4b185315d95a9c0583a66760634ef":"placeOrder","406541d832cd56d54c75a2933fe7ed32e39e824a26":"addToCart","40948e325c4d2701be79f8f71feb2fec234a3c174e":"updateLineItem","40982fad5a29c59368da9548add39ebce585334723":"updateCart","40acd70cdd83b4ebd428822a9e71820da0147d523b":"removeDiscount","40d39b4b22d110bc9b698208ce8709f9cd45b79d77":"applyPromotions","40d509ee97e90a563af94368cd832fdd3329b75a31":"applyGiftCard","40ec9e53a1b843e4ef8c727e3fc79fed44fd50c627":"getOrSetCart","6005e04e9c28dc12d9fe1d045ae20299a8d0937cbd":"submitPromotionForm","604b13e3848afd5728aa3d9e7ebf88897fdf7fa780":"initiatePaymentSession","60672d822ae18b9ced2e5d38a7c427892d1cdae21a":"updateRegion","60967d63e44050b5d131ff65a40c81cfac5aef4e03":"removeGiftCard","60b3b95074f1b26e738aad2e1c0b346a0866580d9b":"setAddresses","60c5a446881df3f0f1a2d3df10d5b4ef9b70610e79":"retrieveCart"},"",""] */ __turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "applyGiftCard",
    ()=>applyGiftCard,
    "applyPromotions",
    ()=>applyPromotions,
    "deleteLineItem",
    ()=>deleteLineItem,
    "getOrSetCart",
    ()=>getOrSetCart,
    "initiatePaymentSession",
    ()=>initiatePaymentSession,
    "listCartOptions",
    ()=>listCartOptions,
    "placeOrder",
    ()=>placeOrder,
    "removeDiscount",
    ()=>removeDiscount,
    "removeGiftCard",
    ()=>removeGiftCard,
    "retrieveCart",
    ()=>retrieveCart,
    "setAddresses",
    ()=>setAddresses,
    "setShippingMethod",
    ()=>setShippingMethod,
    "submitPromotionForm",
    ()=>submitPromotionForm,
    "updateCart",
    ()=>updateCart,
    "updateLineItem",
    ()=>updateLineItem,
    "updateRegion",
    ()=>updateRegion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/util/medusa-error.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$regions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/regions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$locale$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/locale-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function retrieveCart(cartId, fields) {
    const id = cartId || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    fields ??= "*items, *region, *items.product, *items.variant, *items.thumbnail, *items.metadata, +items.total, *promotions, +shipping_methods.name";
    if (!id) {
        return null;
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("carts")
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/carts/${id}`, {
        method: "GET",
        query: {
            fields
        },
        headers,
        next,
        cache: "force-cache"
    }).then(({ cart })=>cart).catch(()=>null);
}
async function getOrSetCart(countryCode) {
    const region = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$regions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRegion"])(countryCode);
    if (!region) {
        throw new Error(`Region not found for country code: ${countryCode}`);
    }
    let cart = await retrieveCart(undefined, "id,region_id");
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    if (!cart) {
        const locale = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$locale$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocale"])();
        const cartResp = await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.create({
            region_id: region.id,
            locale: locale || undefined
        }, {}, headers);
        cart = cartResp.cart;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCartId"])(cart.id);
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
    }
    if (cart && cart?.region_id !== region.id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.update(cart.id, {
            region_id: region.id
        }, {}, headers);
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
    }
    return cart;
}
async function updateCart(data) {
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!cartId) {
        throw new Error("No existing cart found, please create one before updating");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.update(cartId, data, {}, headers).then(async ({ cart })=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        const fulfillmentCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("fulfillment");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(fulfillmentCacheTag);
        return cart;
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function addToCart({ variantId, quantity, countryCode }) {
    if (!variantId) {
        throw new Error("Missing variant ID when adding to cart");
    }
    const cart = await getOrSetCart(countryCode);
    if (!cart) {
        throw new Error("Error retrieving or creating cart");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.createLineItem(cart.id, {
        variant_id: variantId,
        quantity
    }, {}, headers).then(async ()=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        const fulfillmentCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("fulfillment");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(fulfillmentCacheTag);
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function updateLineItem({ lineId, quantity }) {
    if (!lineId) {
        throw new Error("Missing lineItem ID when updating line item");
    }
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!cartId) {
        throw new Error("Missing cart ID when updating line item");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.updateLineItem(cartId, lineId, {
        quantity
    }, {}, headers).then(async ()=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        const fulfillmentCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("fulfillment");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(fulfillmentCacheTag);
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function deleteLineItem(lineId) {
    if (!lineId) {
        throw new Error("Missing lineItem ID when deleting line item");
    }
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!cartId) {
        throw new Error("Missing cart ID when deleting line item");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.deleteLineItem(cartId, lineId, {}, headers).then(async ()=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        const fulfillmentCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("fulfillment");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(fulfillmentCacheTag);
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function setShippingMethod({ cartId, shippingMethodId }) {
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.addShippingMethod(cartId, {
        option_id: shippingMethodId
    }, {}, headers).then(async ()=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function initiatePaymentSession(cart, data) {
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.payment.initiatePaymentSession(cart, data, {}, headers).then(async (resp)=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        return resp;
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function applyPromotions(codes) {
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!cartId) {
        throw new Error("No existing cart found");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.update(cartId, {
        promo_codes: codes
    }, {}, headers).then(async ()=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        const fulfillmentCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("fulfillment");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(fulfillmentCacheTag);
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function applyGiftCard(code) {
//   const cartId = getCartId()
//   if (!cartId) return "No cartId cookie found"
//   try {
//     await updateCart(cartId, { gift_cards: [{ code }] }).then(() => {
//       revalidateTag("cart")
//     })
//   } catch (error: any) {
//     throw error
//   }
}
async function removeDiscount(code) {
// const cartId = getCartId()
// if (!cartId) return "No cartId cookie found"
// try {
//   await deleteDiscount(cartId, code)
//   revalidateTag("cart")
// } catch (error: any) {
//   throw error
// }
}
async function removeGiftCard(codeToRemove, giftCards) {
//   const cartId = getCartId()
//   if (!cartId) return "No cartId cookie found"
//   try {
//     await updateCart(cartId, {
//       gift_cards: [...giftCards]
//         .filter((gc) => gc.code !== codeToRemove)
//         .map((gc) => ({ code: gc.code })),
//     }).then(() => {
//       revalidateTag("cart")
//     })
//   } catch (error: any) {
//     throw error
//   }
}
async function submitPromotionForm(currentState, formData) {
    const code = formData.get("code");
    try {
        await applyPromotions([
            code
        ]);
    } catch (e) {
        return e.message;
    }
}
async function setAddresses(currentState, formData) {
    try {
        if (!formData) {
            throw new Error("No form data found when setting addresses");
        }
        const cartId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
        if (!cartId) {
            throw new Error("No existing cart found when setting addresses");
        }
        const data = {
            shipping_address: {
                first_name: formData.get("shipping_address.first_name"),
                last_name: formData.get("shipping_address.last_name"),
                address_1: formData.get("shipping_address.address_1"),
                address_2: "",
                company: formData.get("shipping_address.company"),
                postal_code: formData.get("shipping_address.postal_code"),
                city: formData.get("shipping_address.city"),
                country_code: formData.get("shipping_address.country_code"),
                province: formData.get("shipping_address.province"),
                phone: formData.get("shipping_address.phone")
            },
            email: formData.get("email")
        };
        const sameAsBilling = formData.get("same_as_billing");
        if (sameAsBilling === "on") data.billing_address = data.shipping_address;
        if (sameAsBilling !== "on") data.billing_address = {
            first_name: formData.get("billing_address.first_name"),
            last_name: formData.get("billing_address.last_name"),
            address_1: formData.get("billing_address.address_1"),
            address_2: "",
            company: formData.get("billing_address.company"),
            postal_code: formData.get("billing_address.postal_code"),
            city: formData.get("billing_address.city"),
            country_code: formData.get("billing_address.country_code"),
            province: formData.get("billing_address.province"),
            phone: formData.get("billing_address.phone")
        };
        await updateCart(data);
    } catch (e) {
        return e.message;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${formData.get("shipping_address.country_code")}/checkout?step=delivery`);
}
async function placeOrder(cartId) {
    const id = cartId || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!id) {
        throw new Error("No existing cart found when placing an order");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    const cartRes = await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.complete(id, {}, headers).then(async (cartRes)=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        return cartRes;
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
    if (cartRes?.type === "order") {
        const countryCode = cartRes.order.shipping_address?.country_code?.toLowerCase();
        const orderCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("orders");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(orderCacheTag);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeCartId"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${countryCode}/order/${cartRes?.order.id}/confirmed`);
    }
    return cartRes.cart;
}
async function updateRegion(countryCode, currentPath) {
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    const region = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$regions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRegion"])(countryCode);
    if (!region) {
        throw new Error(`Region not found for country code: ${countryCode}`);
    }
    if (cartId) {
        await updateCart({
            region_id: region.id
        });
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
    }
    const regionCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("regions");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(regionCacheTag);
    const productsCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("products");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(productsCacheTag);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${countryCode}${currentPath}`);
}
async function listCartOptions() {
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("shippingOptions")
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch("/store/shipping-options", {
        query: {
            cart_id: cartId
        },
        next,
        headers,
        cache: "force-cache"
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    retrieveCart,
    getOrSetCart,
    updateCart,
    addToCart,
    updateLineItem,
    deleteLineItem,
    setShippingMethod,
    initiatePaymentSession,
    applyPromotions,
    applyGiftCard,
    removeDiscount,
    removeGiftCard,
    submitPromotionForm,
    setAddresses,
    placeOrder,
    updateRegion,
    listCartOptions
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(retrieveCart, "60c5a446881df3f0f1a2d3df10d5b4ef9b70610e79", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrSetCart, "40ec9e53a1b843e4ef8c727e3fc79fed44fd50c627", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCart, "40982fad5a29c59368da9548add39ebce585334723", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addToCart, "406541d832cd56d54c75a2933fe7ed32e39e824a26", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLineItem, "40948e325c4d2701be79f8f71feb2fec234a3c174e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLineItem, "400861639b912bfefd5d1e782b805f80a2b7f96373", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setShippingMethod, "4044f7789a01c5ab1c53b9b30e55b20f1a8c0ee0a5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(initiatePaymentSession, "604b13e3848afd5728aa3d9e7ebf88897fdf7fa780", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(applyPromotions, "40d39b4b22d110bc9b698208ce8709f9cd45b79d77", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(applyGiftCard, "40d509ee97e90a563af94368cd832fdd3329b75a31", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeDiscount, "40acd70cdd83b4ebd428822a9e71820da0147d523b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeGiftCard, "60967d63e44050b5d131ff65a40c81cfac5aef4e03", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitPromotionForm, "6005e04e9c28dc12d9fe1d045ae20299a8d0937cbd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setAddresses, "60b3b95074f1b26e738aad2e1c0b346a0866580d9b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(placeOrder, "405f2715e9a8f4b185315d95a9c0583a66760634ef", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateRegion, "60672d822ae18b9ced2e5d38a7c427892d1cdae21a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listCartOptions, "0064776bab36b1e3c19bfe8469b51c59141191faed", null);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/customer.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00c148a643fd316c68c4d92b16b118b64dcf8b623b":"transferCart","40518be9740228671f16c10de108ccd479b8e995f9":"signout","40ead4ac6bdde59f06d471a246b8a739ec42b0691e":"confirmEmailVerification","608e1b7bd9b96f1b43944352fa154dc367dcef2bb7":"signup","60b3440a0c10a00687da152d9548913066bea3f4da":"login","7f2e9e72fc622c6537b2bf8d0f0fb2900e229ec11c":"updateCustomer","7f3ec90016e58fcd68ec62e1b5a2d8356f41a26e04":"updateCustomerAddress","7f7affd9e350a7f9eab6cd837528617b93279fe6c8":"retrieveCustomer","7fc0883af526499c3467d3340edf6b598498d17d34":"deleteCustomerAddress","7fe34e948082f7aed32c4f205e86e0278271c3055a":"addCustomerAddress"},"",""] */ __turbopack_context__.s([
    "addCustomerAddress",
    ()=>addCustomerAddress,
    "confirmEmailVerification",
    ()=>confirmEmailVerification,
    "deleteCustomerAddress",
    ()=>deleteCustomerAddress,
    "login",
    ()=>login,
    "retrieveCustomer",
    ()=>retrieveCustomer,
    "signout",
    ()=>signout,
    "signup",
    ()=>signup,
    "transferCart",
    ()=>transferCart,
    "updateCustomer",
    ()=>updateCustomer,
    "updateCustomerAddress",
    ()=>updateCustomerAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/util/medusa-error.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
// Requests a verification email for the given customer. The request must be
// authenticated with a token tied to the auth identity (the token returned by
// register or by a login that requires verification).
async function requestVerificationEmail(email, token) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].auth.verification.request({
        entity_id: email,
        entity_type: "email"
    }, {
        authorization: `Bearer ${token}`
    });
}
const retrieveCustomer = async ()=>{
    const authHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])();
    if (!authHeaders) return null;
    const headers = {
        ...authHeaders
    };
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("customers")
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/customers/me`, {
        method: "GET",
        query: {
            fields: "*orders"
        },
        headers,
        next,
        cache: "force-cache"
    }).then(({ customer })=>customer).catch(()=>null);
};
const updateCustomer = async (body)=>{
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    const updateRes = await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.update(body, {}, headers).then(({ customer })=>customer).catch(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
    const cacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cacheTag);
    return updateRes;
};
async function signup(_currentState, formData) {
    const password = formData.get("password");
    const customerForm = {
        email: formData.get("email"),
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        phone: formData.get("phone")
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].auth.register("customer", "emailpass", {
            email: customerForm.email,
            password
        });
    } catch (error) {
        const fetchError = error;
        // An existing identity (for example, an admin user with the same email) is
        // expected and handled: the customer can still log in to link a customer
        // record. Any other error is surfaced.
        if (fetchError.statusText !== "Unauthorized" || fetchError.message !== "Identity with email already exists") {
            return {
                state: "error",
                error: String(error)
            };
        }
    }
    // Persist the extra signup fields. The customer record is created during
    // login, which is deferred until after email verification when the backend
    // requires it.
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setPendingCustomer"])(customerForm);
    // Continue by logging in. The login response tells us whether the backend
    // requires email verification — we don't need a storefront-side flag.
    return completeLogin(customerForm.email, password);
}
async function login(_currentState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    return completeLogin(email, password);
}
// Logs the customer in and reconciles the customer record. The behavior is
// driven entirely by the backend's login response, so it works whether or not
// email verification is enabled.
async function completeLogin(email, password) {
    let result;
    try {
        result = await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].auth.login("customer", "emailpass", {
            email,
            password
        });
    } catch (error) {
        return {
            state: "error",
            error: String(error)
        };
    }
    // A `location` is returned by third-party auth providers, which this flow
    // doesn't support.
    if (typeof result === "object" && "location" in result) {
        return {
            state: "error",
            error: "This login method isn't supported by the storefront."
        };
    }
    // The backend requires email verification and the customer hasn't verified
    // yet. Send the verification email and ask them to check their inbox.
    if (typeof result === "object" && "verification_required" in result && result.verification_required) {
        try {
            await requestVerificationEmail(email, result.token);
        } catch  {
        // Ignore: the customer can resend from the verification page.
        }
        return {
            state: "verification_required",
            email
        };
    }
    if (typeof result !== "string") {
        return {
            state: "error",
            error: "Authentication requires additional steps that aren't supported."
        };
    }
    let token = result;
    // The token may not be tied to a customer record yet — right after
    // registration, or after verifying a brand-new account. Ask the backend:
    // `/store/customers/me` rejects tokens without a registered actor, so a
    // failed retrieve means we still need to create the customer, then log in
    // again to obtain a customer-bound token.
    const customerExists = await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.retrieve({}, {
        authorization: `Bearer ${token}`
    }).then(()=>true).catch(()=>false);
    if (!customerExists) {
        const pending = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPendingCustomer"])();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.create({
                email,
                first_name: pending?.first_name,
                last_name: pending?.last_name,
                phone: pending?.phone
            }, {}, {
                authorization: `Bearer ${token}`
            });
            token = await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].auth.login("customer", "emailpass", {
                email,
                password
            });
        } catch (error) {
            return {
                state: "error",
                error: String(error)
            };
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePendingCustomer"])();
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setAuthToken"])(token);
    const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
    try {
        await transferCart();
    } catch (error) {
        return {
            state: "error",
            error: String(error)
        };
    }
    return {
        state: "success"
    };
}
async function confirmEmailVerification(token) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].auth.verification.confirm({
            code: token
        });
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: String(error)
        };
    }
}
async function signout(countryCode) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].auth.logout();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeAuthToken"])();
    const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeCartId"])();
    const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${countryCode}/account`);
}
async function transferCart() {
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!cartId) {
        return;
    }
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.transferCart(cartId, {}, headers);
    const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
}
const addCustomerAddress = async (currentState, formData)=>{
    const isDefaultBilling = currentState.isDefaultBilling || false;
    const isDefaultShipping = currentState.isDefaultShipping || false;
    const address = {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        company: formData.get("company"),
        address_1: formData.get("address_1"),
        address_2: formData.get("address_2"),
        city: formData.get("city"),
        postal_code: formData.get("postal_code"),
        province: formData.get("province"),
        country_code: formData.get("country_code"),
        phone: formData.get("phone"),
        is_default_billing: isDefaultBilling,
        is_default_shipping: isDefaultShipping
    };
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.createAddress(address, {}, headers).then(async ()=>{
        const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
        return {
            success: true,
            error: null
        };
    }).catch((err)=>{
        return {
            success: false,
            error: err.toString()
        };
    });
};
const deleteCustomerAddress = async (addressId)=>{
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.deleteAddress(addressId, headers).then(async ()=>{
        const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
        return {
            success: true,
            error: null
        };
    }).catch((err)=>{
        return {
            success: false,
            error: err.toString()
        };
    });
};
const updateCustomerAddress = async (currentState, formData)=>{
    const addressId = currentState.addressId || formData.get("addressId");
    if (!addressId) {
        return {
            success: false,
            error: "Address ID is required"
        };
    }
    const address = {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        company: formData.get("company"),
        address_1: formData.get("address_1"),
        address_2: formData.get("address_2"),
        city: formData.get("city"),
        postal_code: formData.get("postal_code"),
        province: formData.get("province"),
        country_code: formData.get("country_code")
    };
    const phone = formData.get("phone");
    if (phone) {
        address.phone = phone;
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.updateAddress(addressId, address, {}, headers).then(async ()=>{
        const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
        return {
            success: true,
            error: null
        };
    }).catch((err)=>{
        return {
            success: false,
            error: err.toString()
        };
    });
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    retrieveCustomer,
    updateCustomer,
    signup,
    login,
    confirmEmailVerification,
    signout,
    transferCart,
    addCustomerAddress,
    deleteCustomerAddress,
    updateCustomerAddress
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(retrieveCustomer, "7f7affd9e350a7f9eab6cd837528617b93279fe6c8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCustomer, "7f2e9e72fc622c6537b2bf8d0f0fb2900e229ec11c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signup, "608e1b7bd9b96f1b43944352fa154dc367dcef2bb7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "60b3440a0c10a00687da152d9548913066bea3f4da", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(confirmEmailVerification, "40ead4ac6bdde59f06d471a246b8a739ec42b0691e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signout, "40518be9740228671f16c10de108ccd479b8e995f9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(transferCart, "00c148a643fd316c68c4d92b16b118b64dcf8b623b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addCustomerAddress, "7fe34e948082f7aed32c4f205e86e0278271c3055a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCustomerAddress, "7fc0883af526499c3467d3340edf6b598498d17d34", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCustomerAddress, "7f3ec90016e58fcd68ec62e1b5a2d8356f41a26e04", null);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-mismatch-banner/index.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-mismatch-banner/index.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-mismatch-banner/index.tsx <module evaluation>", "default");
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-mismatch-banner/index.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-mismatch-banner/index.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-mismatch-banner/index.tsx", "default");
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-mismatch-banner/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$mismatch$2d$banner$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-mismatch-banner/index.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$mismatch$2d$banner$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-mismatch-banner/index.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$mismatch$2d$banner$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/categories.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCategoryByHandle",
    ()=>getCategoryByHandle,
    "listCategories",
    ()=>listCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
;
;
const listCategories = async (query)=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("categories")
    };
    const limit = query?.limit || 100;
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch("/store/product-categories", {
        query: {
            fields: "*category_children, *products, *parent_category, *parent_category.parent_category",
            limit,
            ...query
        },
        next,
        cache: "force-cache"
    }).then(({ product_categories })=>product_categories);
};
const getCategoryByHandle = async (categoryHandle)=>{
    const handle = `${categoryHandle.join("/")}`;
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("categories")
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/product-categories`, {
        query: {
            fields: "*category_children, *products",
            handle
        },
        next,
        cache: "force-cache"
    }).then(({ product_categories })=>product_categories[0]);
};
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/collections.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7fd0f20748335d597b6a6d677911a002c072143acf":"listCollections","7fe5df2c7b307c5b64d296dd0a4151ded9c1ff7bc7":"getCollectionByHandle","7feb1bb212b1a2c6acfaf792df112a5eb931e0939d":"retrieveCollection"},"",""] */ __turbopack_context__.s([
    "getCollectionByHandle",
    ()=>getCollectionByHandle,
    "listCollections",
    ()=>listCollections,
    "retrieveCollection",
    ()=>retrieveCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const retrieveCollection = async (id)=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("collections")
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/collections/${id}`, {
        next,
        cache: "force-cache"
    }).then(({ collection })=>collection);
};
const listCollections = async (queryParams = {})=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("collections")
    };
    queryParams.limit = queryParams.limit || "100";
    queryParams.offset = queryParams.offset || "0";
    return await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch("/store/collections", {
        query: queryParams,
        next,
        cache: "force-cache"
    }).then(({ collections })=>({
            collections,
            count: collections.length
        }));
};
const getCollectionByHandle = async (handle)=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("collections")
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/collections`, {
        query: {
            handle,
            fields: "*products"
        },
        next,
        cache: "force-cache"
    }).then(({ collections })=>collections[0] || null);
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    retrieveCollection,
    listCollections,
    getCollectionByHandle
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(retrieveCollection, "7feb1bb212b1a2c6acfaf792df112a5eb931e0939d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listCollections, "7fd0f20748335d597b6a6d677911a002c072143acf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCollectionByHandle, "7fe5df2c7b307c5b64d296dd0a4151ded9c1ff7bc7", null);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx <module evaluation>", "default");
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx", "default");
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/icons/medusa.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const Medusa = ({ size: _size = "20", color = "#9CA3AF", ...attributes })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        ...attributes,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15.2447 2.92183L11.1688 0.576863C9.83524 -0.192288 8.20112 -0.192288 6.86753 0.576863L2.77285 2.92183C1.45804 3.69098 0.631592 5.11673 0.631592 6.63627V11.345C0.631592 12.8833 1.45804 14.2903 2.77285 15.0594L6.84875 17.4231C8.18234 18.1923 9.81646 18.1923 11.15 17.4231L15.2259 15.0594C16.5595 14.2903 17.3672 12.8833 17.3672 11.345V6.63627C17.4048 5.11673 16.5783 3.69098 15.2447 2.92183ZM9.00879 13.1834C6.69849 13.1834 4.82019 11.3075 4.82019 9C4.82019 6.69255 6.69849 4.81657 9.00879 4.81657C11.3191 4.81657 13.2162 6.69255 13.2162 9C13.2162 11.3075 11.3379 13.1834 9.00879 13.1834Z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/icons/medusa.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/icons/medusa.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Medusa;
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/icons/nextjs.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const NextJs = ({ size: _size = "20", color = "#9CA3AF", ...attributes })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        ...attributes,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8.41117 0.0131402C8.3725 0.0166554 8.24946 0.0289589 8.13873 0.0377471C5.58488 0.267998 3.19273 1.64599 1.67764 3.76395C0.833977 4.94157 0.294381 6.27737 0.090495 7.69227C0.0184318 8.18617 0.00964355 8.33206 0.00964355 9.00172C0.00964355 9.67138 0.0184318 9.81726 0.090495 10.3112C0.579119 13.6876 2.98181 16.5244 6.24048 17.5755C6.82402 17.7636 7.43919 17.8919 8.13873 17.9692C8.41117 17.9991 9.58879 17.9991 9.86122 17.9692C11.0687 17.8356 12.0917 17.5368 13.1006 17.0218C13.2552 16.9427 13.2851 16.9216 13.264 16.9041C13.25 16.8935 12.5908 16.0094 11.7999 14.9408L10.3621 12.9986L8.56057 10.3323C7.56926 8.86638 6.75371 7.66767 6.74668 7.66767C6.73965 7.66591 6.73262 8.85056 6.7291 10.2971C6.72383 12.8299 6.72207 12.9318 6.69044 12.9916C6.64474 13.0777 6.60958 13.1128 6.53576 13.1515C6.47952 13.1796 6.43031 13.1849 6.1649 13.1849H5.86083L5.77998 13.1339C5.72725 13.1005 5.68858 13.0566 5.66222 13.0056L5.62531 12.9265L5.62882 9.40246L5.63409 5.87663L5.68858 5.80808C5.7167 5.77117 5.77646 5.72372 5.81865 5.70087C5.89071 5.66571 5.91883 5.6622 6.2229 5.6622C6.58146 5.6622 6.64122 5.67626 6.73438 5.7782C6.76074 5.80632 7.73623 7.27571 8.90331 9.04566C10.0704 10.8156 11.6663 13.2324 12.4502 14.4188L13.8739 16.5754L13.946 16.5279C14.584 16.1131 15.2589 15.5226 15.7933 14.9074C16.9305 13.6015 17.6634 12.009 17.9095 10.3112C17.9815 9.81726 17.9903 9.67138 17.9903 9.00172C17.9903 8.33206 17.9815 8.18617 17.9095 7.69227C17.4208 4.31585 15.0181 1.47901 11.7595 0.427943C11.1847 0.241633 10.5731 0.113326 9.88758 0.0359895C9.71885 0.0184131 8.55705 -0.000920974 8.41117 0.0131402ZM12.0917 5.45128C12.176 5.49346 12.2446 5.57432 12.2692 5.65868C12.2832 5.70438 12.2868 6.68163 12.2832 8.88395L12.278 12.0442L11.7208 11.19L11.1619 10.3358V8.03853C11.1619 6.55332 11.1689 5.71844 11.1795 5.67802C11.2076 5.57959 11.2691 5.50225 11.3535 5.45655C11.4255 5.41964 11.4519 5.41613 11.7278 5.41613C11.988 5.41613 12.0337 5.41964 12.0917 5.45128Z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/icons/nextjs.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/icons/nextjs.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NextJs;
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/medusa-cta/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/ui/index.tsx [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$icons$2f$medusa$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/icons/medusa.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$icons$2f$nextjs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/icons/nextjs.tsx [app-rsc] (ecmascript)");
;
;
;
;
const MedusaCTA = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Text"], {
        className: "flex gap-x-2 txt-compact-small-plus items-center",
        children: [
            "Powered by",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://www.medusajs.com",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$icons$2f$medusa$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    fill: "#9ca3af",
                    className: "fill-[#9ca3af]"
                }, void 0, false, {
                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/medusa-cta/index.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/medusa-cta/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            "&",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://nextjs.org",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$icons$2f$nextjs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    fill: "#9ca3af"
                }, void 0, false, {
                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/medusa-cta/index.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/medusa-cta/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/medusa-cta/index.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MedusaCTA;
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/categories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$collections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/collections.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/ui/index.tsx [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$medusa$2d$cta$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/medusa-cta/index.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function Footer() {
    const { collections } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$collections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listCollections"])({
        fields: "*products"
    });
    const productCategories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listCategories"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-ui-border-base w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-container flex flex-col w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase",
                                children: "मराठीस्वाद"
                            }, void 0, false, {
                                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-semibold text-ui-fg-base",
                                            children: "Categories"
                                        }, void 0, false, {
                                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "grid grid-cols-1 gap-2 text-ui-fg-subtle text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/categories/diwali-sweets-and-snacks",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "Diwali Sweets & Snacks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/categories/bhajanya-pithe",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "Bhajanya & Pithe (Flour)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/categories/masale-spices-chutneys",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "Masale & Chutneys"
                                                    }, void 0, false, {
                                                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/categories/papads-snacks",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "Papads & Snacks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/categories/diwali-decorations",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "Diwali Decorations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-semibold text-ui-fg-base",
                                            children: "Information"
                                        }, void 0, false, {
                                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "grid grid-cols-1 gap-2 text-ui-fg-subtle text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/about-us",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "About Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/store",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "All Products"
                                                    }, void 0, false, {
                                                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/terms-of-sale",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "Terms of Sale"
                                                    }, void 0, false, {
                                                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/contact",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "Contact Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-semibold text-ui-fg-base",
                                            children: "Warehouse Hub"
                                        }, void 0, false, {
                                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-ui-fg-subtle",
                                            children: [
                                                "Claymore NSW 2559, Australia",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 45
                                                }, this),
                                                "Ph: 0410 757 450",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 33
                                                }, this),
                                                "Air-flown freshness Australia-wide"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full mb-16 justify-between text-ui-fg-muted",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Text"], {
                            className: "txt-compact-small",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Medusa Store. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$medusa$2d$cta$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/locales.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f73e85ae946d7c219d947706501ed6dd734b76c1e":"listLocales"},"",""] */ __turbopack_context__.s([
    "listLocales",
    ()=>listLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const listLocales = async ()=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("locales")
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/locales`, {
        method: "GET",
        next,
        cache: "force-cache"
    }).then(({ locales })=>locales).catch(()=>null);
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    listLocales
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listLocales, "7f73e85ae946d7c219d947706501ed6dd734b76c1e", null);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx <module evaluation>", "default");
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx", "default");
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$dropdown$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$dropdown$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$dropdown$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-button/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cart.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$dropdown$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx [app-rsc] (ecmascript)");
;
;
;
async function CartButton() {
    const cart = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retrieveCart"])().catch(()=>null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$dropdown$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        cart: cart
    }, void 0, false, {
        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-button/index.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/side-menu/index.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/side-menu/index.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/side-menu/index.tsx <module evaluation>", "default");
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/side-menu/index.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/side-menu/index.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/side-menu/index.tsx", "default");
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/side-menu/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$side$2d$menu$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/side-menu/index.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$side$2d$menu$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/side-menu/index.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$side$2d$menu$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/locales.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$locale$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/locale-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$regions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/regions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/common/components/localized-client-link/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$button$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-button/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$side$2d$menu$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/side-menu/index.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function Nav() {
    const [regions, locales, currentLocale] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$regions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listRegions"])().then((regions)=>regions),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listLocales"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$locale$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocale"])()
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-0 inset-x-0 z-50 group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 basis-0 h-full flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$side$2d$menu$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                regions: regions,
                                locales: locales,
                                currentLocale: currentLocale
                            }, void 0, false, {
                                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "txt-compact-xlarge-plus hover:text-ui-fg-base uppercase",
                            "data-testid": "nav-store-link",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-ui-fg-base font-semibold",
                                children: "मराठीस्वाद"
                            }, void 0, false, {
                                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-x-6 h-full flex-1 basis-0 justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden small:flex items-center gap-x-6 h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    className: "hover:text-ui-fg-base",
                                    href: "/account",
                                    "data-testid": "nav-account-link",
                                    children: "Account"
                                }, void 0, false, {
                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    className: "hover:text-ui-fg-base flex gap-2",
                                    href: "/cart",
                                    "data-testid": "nav-cart-link",
                                    children: "Cart (0)"
                                }, void 0, false, {
                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, void 0),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$button$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/shipping/components/free-shipping-price-nudge/index.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/freelancing/my-medusa-store/apps/storefront/src/modules/shipping/components/free-shipping-price-nudge/index.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/shipping/components/free-shipping-price-nudge/index.tsx <module evaluation>", "default");
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/shipping/components/free-shipping-price-nudge/index.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/freelancing/my-medusa-store/apps/storefront/src/modules/shipping/components/free-shipping-price-nudge/index.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/freelancing/my-medusa-store/apps/storefront/src/modules/shipping/components/free-shipping-price-nudge/index.tsx", "default");
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/modules/shipping/components/free-shipping-price-nudge/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$shipping$2f$components$2f$free$2d$shipping$2d$price$2d$nudge$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/shipping/components/free-shipping-price-nudge/index.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$shipping$2f$components$2f$free$2d$shipping$2d$price$2d$nudge$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/shipping/components/free-shipping-price-nudge/index.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$shipping$2f$components$2f$free$2d$shipping$2d$price$2d$nudge$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/freelancing/my-medusa-store/apps/storefront/src/app/[countryCode]/(main)/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/cart.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$customer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/data/customer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/lib/util/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$mismatch$2d$banner$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/components/cart-mismatch-banner/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$templates$2f$footer$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/footer/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$templates$2f$nav$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/layout/templates/nav/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$shipping$2f$components$2f$free$2d$shipping$2d$price$2d$nudge$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/freelancing/my-medusa-store/apps/storefront/src/modules/shipping/components/free-shipping-price-nudge/index.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const metadata = {
    metadataBase: new URL((0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$util$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBaseURL"])())
};
async function PageLayout(props) {
    const customer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$customer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retrieveCustomer"])();
    const cart = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retrieveCart"])();
    let shippingOptions = [];
    if (cart) {
        const { shipping_options } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$lib$2f$data$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listCartOptions"])();
        shippingOptions = shipping_options;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$templates$2f$nav$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/app/[countryCode]/(main)/layout.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            customer && cart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$mismatch$2d$banner$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                customer: customer,
                cart: cart
            }, void 0, false, {
                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/app/[countryCode]/(main)/layout.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this),
            cart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$shipping$2f$components$2f$free$2d$shipping$2d$price$2d$nudge$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                variant: "popup",
                cart: cart,
                shippingOptions: shippingOptions
            }, void 0, false, {
                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/app/[countryCode]/(main)/layout.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            props.children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$freelancing$2f$my$2d$medusa$2d$store$2f$apps$2f$storefront$2f$src$2f$modules$2f$layout$2f$templates$2f$footer$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/freelancing/my-medusa-store/apps/storefront/src/app/[countryCode]/(main)/layout.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=freelancing_my-medusa-store_apps_storefront_src_59a8e2c0._.js.map