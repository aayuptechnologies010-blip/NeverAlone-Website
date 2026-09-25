(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/views/companion/CompanionOnboarding.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanionOnboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-BV7QT456.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const journey = [
    {
        label: 'Application',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        status: 'done'
    },
    {
        label: 'Verification',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        status: 'pending'
    },
    {
        label: 'Training',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        status: 'current'
    },
    {
        label: 'Approval',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        status: 'upcoming'
    },
    {
        label: 'Available For Conversations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        status: 'locked'
    }
];
function CompanionOnboarding() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompanionOnboarding.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["CompanionOnboarding.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-brand-950 font-sans text-warm-white flex items-center justify-center px-4 py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "max-w-2xl w-full text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-electric-cyan uppercase tracking-wider",
                        children: "Companion Onboarding"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-bold text-white leading-tight mb-6",
                    children: [
                        "Great conversations start ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                            className: "hidden md:block"
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                            lineNumber: 32,
                            columnNumber: 37
                        }, this),
                        "with good listening."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed",
                    children: "Before becoming available for conversations, learn the principles that keep Never Alone respectful, comfortable and safe."
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row justify-center gap-4 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/companion/training",
                            className: "px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]",
                            children: "Start Training"
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/companion/training/guidelines",
                            className: "px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors",
                            children: "Review Companion Guidelines"
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/5 border border-white/10 rounded-3xl p-8 text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-bold text-gray-400 uppercase tracking-widest mb-6",
                            children: "Your Journey"
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: journey.map((step, idx)=>{
                                const Icon = step.icon;
                                const colors = {
                                    done: 'text-green-400 bg-green-500/10 border-green-500/30',
                                    pending: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
                                    current: 'text-electric-cyan bg-electric-cyan/10 border-electric-cyan/30',
                                    upcoming: 'text-gray-500 bg-white/5 border-white/10',
                                    locked: 'text-gray-600 bg-white/5 border-white/10 opacity-50'
                                }[step.status];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${colors}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `font-medium ${step.status === 'locked' ? 'text-gray-600' : 'text-white'}`,
                                                    children: step.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this),
                                                step.status === 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-green-400",
                                                    children: "Completed (Demo)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                                                    lineNumber: 78,
                                                    columnNumber: 48
                                                }, this),
                                                step.status === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-yellow-400",
                                                    children: "Pending (Demo)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                                                    lineNumber: 79,
                                                    columnNumber: 51
                                                }, this),
                                                step.status === 'current' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-electric-cyan",
                                                    children: "Current Step"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                                                    lineNumber: 80,
                                                    columnNumber: 51
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this),
                                        idx < journey.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden sm:block w-px h-6 bg-white/10 ml-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                                            lineNumber: 83,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/companion/CompanionOnboarding.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(CompanionOnboarding, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = CompanionOnboarding;
var _c;
__turbopack_context__.k.register(_c, "CompanionOnboarding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/TrainingGuidelines.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrainingGuidelines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
;
function TrainingGuidelines() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-white mb-3",
                children: "Companion Guidelines"
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 mb-10",
                children: "Core principles every companion should follow."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuidelineCard, {
                        title: "Listening",
                        desc: "Give people room to talk. Let them lead the conversation when they need to."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuidelineCard, {
                        title: "Respect",
                        desc: "Different people will have different experiences and perspectives. Treat every person with dignity."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuidelineCard, {
                        title: "Boundaries",
                        desc: "Know what belongs in a companion conversation and what does not. Do not diagnose, prescribe medication, or provide clinical treatment."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuidelineCard, {
                        title: "Reliability",
                        desc: "Be available when you commit to a conversation. Customers depend on your scheduled availability."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuidelineCard, {
                        title: "Safety",
                        desc: "Know when something should be reported or redirected to appropriate support. Use reporting tools when necessary."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuidelineCard, {
                        title: "Privacy",
                        desc: "Do not request unnecessary personal information from customers. Do not share customer details outside the platform."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuidelineCard, {
                        title: "No Physical Meetups",
                        desc: "Never Alone is for online phone conversations only. Do not arrange physical meetings through the platform."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuidelineCard, {
                        title: "No Off-Platform Money",
                        desc: "Never request or accept money from customers outside the approved platform systems."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-electric-cyan/5 border border-electric-cyan/20 rounded-2xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-white mb-2",
                                children: "Professional Support Is Separate"
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 leading-relaxed",
                                children: "Regular companions are not therapists. Professional Support is a separate service for appropriately qualified and verified mental-health professionals. Do not claim professional qualifications you do not have."
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = TrainingGuidelines;
function GuidelineCard({ title, desc }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/5 border border-white/10 rounded-2xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold text-white mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400 leading-relaxed",
                children: desc
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/TrainingGuidelines.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c1 = GuidelineCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "TrainingGuidelines");
__turbopack_context__.k.register(_c1, "GuidelineCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/TrainingHome.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrainingHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingModuleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingModuleCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const moduleIds = [
    'listening',
    'natural-conversation',
    'advice-boundaries',
    'relationship',
    'safety',
    'flirty-mode'
];
function TrainingHome() {
    _s();
    const { completedCount, requiredCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"])();
    const pct = Math.round(completedCount / requiredCount * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-4xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl md:text-4xl font-bold text-white mb-3",
                        children: "Companion Training"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingHome.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 leading-relaxed",
                        children: "Complete the required modules to understand conversation skills, boundaries and safety."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingHome.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/TrainingHome.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 border border-white/10 rounded-2xl p-6 mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-white",
                                children: [
                                    completedCount,
                                    " of ",
                                    requiredCount,
                                    " modules completed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingHome.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-electric-cyan",
                                children: [
                                    pct,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingHome.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/companion/TrainingHome.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-3 bg-white/10 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-gradient-to-r from-electric-cyan to-dream-purple rounded-full transition-all duration-700",
                            style: {
                                width: `${pct}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/TrainingHome.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingHome.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-3",
                        children: "This is a frontend demo. Progress is stored locally and not sent to a server."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingHome.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/TrainingHome.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: moduleIds.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingModuleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        moduleId: id
                    }, id, false, {
                        fileName: "[project]/src/views/companion/TrainingHome.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingHome.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/TrainingHome.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(TrainingHome, "SNTQpQHoRKMqmW+yCHGrgdWCWv8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"]
    ];
});
_c = TrainingHome;
var _c;
__turbopack_context__.k.register(_c, "TrainingHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/TrainingModulePage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrainingModulePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-BV7QT456.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleListening$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/companion/modules/ModuleListening.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleConversation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/companion/modules/ModuleConversation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleAdvice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/companion/modules/ModuleAdvice.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleRelationship$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/companion/modules/ModuleRelationship.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleSafety$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/companion/modules/ModuleSafety.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleFlirty$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/companion/modules/ModuleFlirty.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const moduleMap = {
    'listening': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleListening$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    'natural-conversation': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleConversation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    'advice-boundaries': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleAdvice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    'relationship': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleRelationship$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    'safety': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleSafety$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    'flirty-mode': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$companion$2f$modules$2f$ModuleFlirty$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
function TrainingModulePage() {
    _s();
    const { moduleId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const ModuleComponent = moduleMap[moduleId];
    if (!ModuleComponent) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"], {
            to: "/companion/training",
            replace: true
        }, void 0, false, {
            fileName: "[project]/src/views/companion/TrainingModulePage.jsx",
            lineNumber: 25,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleComponent, {}, void 0, false, {
        fileName: "[project]/src/views/companion/TrainingModulePage.jsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_s(TrainingModulePage, "6KnGQeIgpvwh5r6MlXvWug/VsZc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = TrainingModulePage;
var _c;
__turbopack_context__.k.register(_c, "TrainingModulePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/TrainingModules.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrainingModules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingModuleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingModuleCard.jsx [app-client] (ecmascript)");
;
;
;
;
const moduleIds = [
    'listening',
    'natural-conversation',
    'advice-boundaries',
    'relationship',
    'safety',
    'flirty-mode'
];
function TrainingModules() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-4xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-white mb-3",
                children: "All Modules"
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingModules.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 mb-10",
                children: "Browse and complete each training module."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingModules.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: moduleIds.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingModuleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        moduleId: id
                    }, id, false, {
                        fileName: "[project]/src/views/companion/TrainingModules.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingModules.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/TrainingModules.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = TrainingModules;
var _c;
__turbopack_context__.k.register(_c, "TrainingModules");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/TrainingProgress.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrainingProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingModuleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingModuleCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.mjs [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.mjs [app-client] (ecmascript) <export default as Loader>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function TrainingProgress() {
    _s();
    const { getModuleStatus, flirtyModeRequired, completedCount, requiredCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"])();
    const pct = Math.round(completedCount / requiredCount * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-white mb-3",
                children: "Training Progress"
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 mb-10",
                children: "Track your module completion status."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 border border-white/10 rounded-2xl p-6 mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-white",
                                children: "Overall"
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-electric-cyan",
                                children: [
                                    pct,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-3 bg-white/10 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-electric-cyan rounded-full transition-all duration-700",
                            style: {
                                width: `${pct}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingModuleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modulesMeta"].map((meta)=>{
                    const status = getModuleStatus(meta.id);
                    const notRequired = meta.isFlirty && !flirtyModeRequired;
                    const Icon = meta.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-10 h-10 rounded-xl flex items-center justify-center ${meta.isFlirty ? 'bg-romantic-DEFAULT/10' : 'bg-white/10'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: `w-5 h-5 ${meta.isFlirty ? 'text-romantic-pink' : 'text-gray-400'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-white text-sm",
                                        children: meta.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            "Module ",
                                            meta.num
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: notRequired ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-gray-600 uppercase",
                                    children: "Not Required"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                    lineNumber: 47,
                                    columnNumber: 19
                                }, this) : status === 'completed' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "w-4 h-4 text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                            lineNumber: 49,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-green-400",
                                            children: "Completed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                            lineNumber: 49,
                                            columnNumber: 72
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                    lineNumber: 49,
                                    columnNumber: 19
                                }, this) : status === 'in-progress' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                            className: "w-4 h-4 text-electric-cyan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                            lineNumber: 51,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-electric-cyan",
                                            children: "In Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                            lineNumber: 51,
                                            columnNumber: 70
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                    lineNumber: 51,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                            className: "w-4 h-4 text-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                            lineNumber: 53,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-gray-500",
                                            children: "Not Started"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                            lineNumber: 53,
                                            columnNumber: 65
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                    lineNumber: 53,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        ]
                    }, meta.id, true, {
                        fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingProgress.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/TrainingProgress.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(TrainingProgress, "fAXLD27BBq6vnFHEgLmqQk50utg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"]
    ];
});
_c = TrainingProgress;
var _c;
__turbopack_context__.k.register(_c, "TrainingProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/TrainingReview.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrainingReview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-BV7QT456.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function TrainingReview() {
    _s();
    const { allRequiredComplete, flirtyModeRequired, trainingComplete, setTrainingComplete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const [declBoundaries, setDeclBoundaries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [declSafety, setDeclSafety] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [declFlirty, setDeclFlirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    if (!allRequiredComplete && !trainingComplete) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: "max-w-3xl py-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-white mb-4",
                    children: "Complete all required modules first."
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-8",
                    children: "You need to finish every required training module before reviewing and completing training."
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                    to: "/companion/training",
                    className: "px-6 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors",
                    children: "Back to Training"
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/companion/TrainingReview.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    if (trainingComplete) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            className: "max-w-2xl mx-auto py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-24 rounded-full bg-electric-cyan/10 flex items-center justify-center mx-auto mb-8 relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                        className: "w-12 h-12 text-electric-cyan fill-electric-cyan/20"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl md:text-4xl font-bold text-white mb-4",
                    children: "Training complete."
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed",
                    children: "You've completed the required companion training modules."
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs font-mono bg-white/5 text-gray-500 px-4 py-2 rounded-lg border border-white/10 inline-block mb-12",
                    children: "Backend integration pending"
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 text-left max-w-sm mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-sm font-bold text-gray-400 uppercase tracking-widest mb-6",
                            children: "Next Steps"
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/TrainingReview.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepItem, {
                                    num: "1",
                                    title: "Training",
                                    status: "done"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepItem, {
                                    num: "2",
                                    title: "Approval",
                                    status: "next"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepItem, {
                                    num: "3",
                                    title: "Available For Conversations",
                                    status: "locked"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/TrainingReview.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mb-8",
                    children: "Training completion does not automatically grant approval. Your application and training will be reviewed."
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/",
                            className: "px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-200 transition-colors",
                            children: "Back To Home"
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/TrainingReview.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/about",
                            className: "px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors",
                            children: "Learn About Never Alone"
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/TrainingReview.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/companion/TrainingReview.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    const handleFinish = ()=>{
        const allChecked = declBoundaries && declSafety && (!flirtyModeRequired || declFlirty);
        if (!allChecked) {
            setError('You must agree to all declarations.');
            return;
        }
        setTrainingComplete(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-bold text-white mb-3",
                children: "Training Review"
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 mb-10",
                children: "You've completed all required modules. Review the core principles and acknowledge the guidelines."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-white mb-4",
                        children: "Core Principles"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-3 text-sm text-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                        lineNumber: 97,
                                        columnNumber: 50
                                    }, this),
                                    "Listen before advising."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                        lineNumber: 98,
                                        columnNumber: 50
                                    }, this),
                                    "Respect boundaries — yours and theirs."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                        lineNumber: 99,
                                        columnNumber: 50
                                    }, this),
                                    "Stay within your role. Companions are not therapists."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                        lineNumber: 100,
                                        columnNumber: 50
                                    }, this),
                                    "Protect privacy. Do not request unnecessary personal information."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                        lineNumber: 101,
                                        columnNumber: 50
                                    }, this),
                                    "Never arrange physical meetups."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                        lineNumber: 102,
                                        columnNumber: 50
                                    }, this),
                                    "Use reporting when necessary."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            flirtyModeRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-romantic-pink flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                        lineNumber: 104,
                                        columnNumber: 52
                                    }, this),
                                    "Flirty Mode stays consensual and non-explicit."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                        checked: declBoundaries,
                        onChange: setDeclBoundaries,
                        label: "I understand the boundaries of the companion role."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                        checked: declSafety,
                        onChange: setDeclSafety,
                        label: "I agree to follow Never Alone's safety and conversation guidelines."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    flirtyModeRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                        checked: declFlirty,
                        onChange: setDeclFlirty,
                        label: "I understand and agree to the additional Flirty Mode boundaries.",
                        pink: true
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                        lineNumber: 129,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleFinish,
                className: "px-10 py-4 rounded-xl text-base font-bold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)]",
                children: "Complete Training"
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/TrainingReview.jsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(TrainingReview, "QX6HIvFfFwD2RgIa5PRMSW3pXXM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = TrainingReview;
function Checkbox({ checked, onChange, label, pink }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex items-start gap-3 cursor-pointer group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center mt-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: checked,
                        onChange: (e)=>onChange(e.target.checked),
                        className: "sr-only"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-5 h-5 border-2 rounded transition-colors ${checked ? pink ? 'bg-romantic-DEFAULT border-romantic-DEFAULT' : 'bg-electric-cyan border-electric-cyan' : 'border-gray-500 group-hover:border-electric-cyan/50'}`,
                        children: checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 text-brand-950 absolute top-0.5 left-0.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 3,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M5 13l4 4L19 7"
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/TrainingReview.jsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/TrainingReview.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-sm font-medium ${checked ? 'text-white' : 'text-gray-300'}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/TrainingReview.jsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_c1 = Checkbox;
function StepItem({ num, title, status }) {
    const colors = {
        done: 'bg-green-500/10 text-green-400 border-green-500/30',
        next: 'bg-electric-cyan/10 text-electric-cyan border-electric-cyan/30',
        locked: 'bg-white/5 text-gray-600 border-white/10'
    }[status];
    const Icon = {
        done: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        next: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        locked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"]
    }[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-8 h-8 rounded-full border flex items-center justify-center ${colors}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/TrainingReview.jsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `font-medium ${status === 'locked' ? 'text-gray-600' : 'text-white'}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            status === 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-green-400 font-bold ml-auto",
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/src/views/companion/TrainingReview.jsx",
                lineNumber: 179,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/TrainingReview.jsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_c2 = StepItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TrainingReview");
__turbopack_context__.k.register(_c1, "Checkbox");
__turbopack_context__.k.register(_c2, "StepItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/modules/ModuleAdvice.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModuleAdvice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-BV7QT456.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/LessonSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/DoDontCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/ScenarioQuestion.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ModuleAdvice() {
    _s();
    const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const [quizPassed, setQuizPassed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleAdvice.useEffect": ()=>{
            window.scrollTo(0, 0);
            if (getModuleStatus('advice-boundaries') === 'not-started') {
                setModuleStatus('advice-boundaries', 'in-progress');
            }
            if (getAnswer('advice-boundaries', 'q1')) setQuizPassed(true);
        }
    }["ModuleAdvice.useEffect"], []);
    const handleQuizComplete = ()=>{
        saveAnswer('advice-boundaries', 'q1', true);
        setQuizPassed(true);
    };
    const handleComplete = ()=>{
        setModuleStatus('advice-boundaries', 'completed');
        navigate('/companion/training');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2",
                children: "Module 03"
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-bold text-white mb-4",
                children: [
                    "You can offer perspective. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                        className: "hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                        lineNumber: 37,
                        columnNumber: 36
                    }, this),
                    "You don't have to have the answer."
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 leading-relaxed mb-10",
                children: "Companions can share friendly thoughts and perspectives. But there are clear boundaries around what companions should not do."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "What companions may provide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                    lineNumber: 46,
                                    columnNumber: 50
                                }, this),
                                "Friendly perspectives"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                    lineNumber: 47,
                                    columnNumber: 50
                                }, this),
                                "General advice based on personal experience"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                    lineNumber: 48,
                                    columnNumber: 50
                                }, this),
                                "Conversation and listening"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                    lineNumber: 49,
                                    columnNumber: 50
                                }, this),
                                "Personal observations"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-6 h-6 text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-white",
                                children: "Critical Mental-Health Boundary"
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-300 mb-4",
                        children: "Regular companions must NOT:"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2 text-sm text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                        lineNumber: 61,
                                        columnNumber: 51
                                    }, this),
                                    " Diagnose any condition"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                        lineNumber: 62,
                                        columnNumber: 51
                                    }, this),
                                    " Prescribe medication"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                        lineNumber: 63,
                                        columnNumber: 51
                                    }, this),
                                    " Provide clinical treatment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                        lineNumber: 64,
                                        columnNumber: 51
                                    }, this),
                                    " Claim to be a therapist"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                        lineNumber: 65,
                                        columnNumber: 51
                                    }, this),
                                    " Tell someone to stop prescribed treatment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 bg-electric-cyan/5 border border-electric-cyan/20 rounded-xl p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-electric-cyan/90",
                            children: "Professional Support is a separate service for appropriately qualified and verified professionals."
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Do's and Don'ts",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    doItems: [
                        '"From my perspective, that sounds difficult."',
                        '"Have you considered talking to someone who specialises in that?"',
                        'Share a personal thought when appropriate.',
                        'Acknowledge you don\'t have all the answers.'
                    ],
                    dontItems: [
                        '"You definitely have anxiety."',
                        '"You should stop taking that medication."',
                        '"I\'m basically a therapist."',
                        'Provide a clinical-style assessment.'
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Knowledge Check",
                title: "Scenario",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    question: 'Someone says: "Do you think I have depression?" Which response is appropriate?',
                    options: [
                        {
                            id: 'a',
                            text: '"Yes, that definitely sounds like depression."'
                        },
                        {
                            id: 'b',
                            text: '"I can\'t diagnose that, but I can listen to what you\'ve been experiencing. If you\'re concerned about your mental health, qualified professional support may be more appropriate."'
                        },
                        {
                            id: 'c',
                            text: '"Just try to be more positive."'
                        }
                    ],
                    correctId: "b",
                    explanation: "Companions should never diagnose. Acknowledge their experience, listen, and gently suggest professional support if appropriate.",
                    onComplete: handleQuizComplete,
                    savedAnswer: getAnswer('advice-boundaries', 'q1') ? 'b' : null
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-8 border-t border-white/10 mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/companion/training",
                        className: "px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    quizPassed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleComplete,
                        className: "px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]",
                        children: getModuleStatus('advice-boundaries') === 'completed' ? 'Continue Training' : 'Complete Module'
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Complete the knowledge check to continue."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/modules/ModuleAdvice.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ModuleAdvice, "tKLNVaMtQ79plbQYSp11k2SxEbU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = ModuleAdvice;
var _c;
__turbopack_context__.k.register(_c, "ModuleAdvice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/modules/ModuleConversation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModuleConversation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-BV7QT456.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/LessonSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/DoDontCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ConversationExample$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/ConversationExample.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/ScenarioQuestion.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ModuleConversation() {
    _s();
    const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const [quizPassed, setQuizPassed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleConversation.useEffect": ()=>{
            window.scrollTo(0, 0);
            if (getModuleStatus('natural-conversation') === 'not-started') {
                setModuleStatus('natural-conversation', 'in-progress');
            }
            if (getAnswer('natural-conversation', 'q1')) setQuizPassed(true);
        }
    }["ModuleConversation.useEffect"], []);
    const handleQuizComplete = ()=>{
        saveAnswer('natural-conversation', 'q1', true);
        setQuizPassed(true);
    };
    const handleComplete = ()=>{
        setModuleStatus('natural-conversation', 'completed');
        navigate('/companion/training');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2",
                children: "Module 02"
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-bold text-white mb-4",
                children: "A conversation shouldn't feel like an interview."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 leading-relaxed mb-10",
                children: "Good companion conversations feel natural, not scripted. Learn how to keep things flowing."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "What makes conversation natural",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                                    lineNumber: 43,
                                    columnNumber: 50
                                }, this),
                                "Ask questions naturally, not in rapid succession."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                                    lineNumber: 44,
                                    columnNumber: 50
                                }, this),
                                "Respond to what the person actually says."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                                    lineNumber: 45,
                                    columnNumber: 50
                                }, this),
                                "Share small, appropriate thoughts when useful."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                                    lineNumber: 46,
                                    columnNumber: 50
                                }, this),
                                "Allow pauses — silence is not failure."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                                    lineNumber: 47,
                                    columnNumber: 50
                                }, this),
                                "Change topics naturally, not abruptly."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                                    lineNumber: 48,
                                    columnNumber: 50
                                }, this),
                                "Do not fire question after question."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Conversation topics",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Conversations may naturally touch on many everyday topics:"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-4",
                        children: [
                            'My Day',
                            'Movies',
                            'Music',
                            'Travel',
                            'Hobbies',
                            'Life',
                            'Goals',
                            'Work',
                            'College',
                            'Random Thoughts'
                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300",
                                children: t
                            }, t, false, {
                                fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Example: natural flow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ConversationExample$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        personSays: "I've been listening to the same song all week.",
                        goodResponse: "Now I'm curious — what song?"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mt-4 text-sm",
                        children: "From here, the conversation can naturally move into music, memories, movies, travel, daily life — without feeling scripted."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Do's and Don'ts",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    doItems: [
                        'Let one topic flow into another naturally.',
                        'Share a brief thought before asking the next question.',
                        'Be comfortable when the conversation pauses.',
                        'Follow the person\'s energy and interests.'
                    ],
                    dontItems: [
                        'Rapid-fire questions one after another.',
                        'Ignore what they just said to ask something unrelated.',
                        'Stick to a script or checklist of topics.',
                        'Fill every silence immediately.'
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Knowledge Check",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    question: "Someone says: \"I watched this movie last night and I can't stop thinking about it.\" What's the best next step?",
                    options: [
                        {
                            id: 'a',
                            text: '"What other hobbies do you have?"'
                        },
                        {
                            id: 'b',
                            text: '"Oh interesting. What was the movie?"'
                        },
                        {
                            id: 'c',
                            text: '"I don\'t really watch movies."'
                        }
                    ],
                    correctId: "b",
                    explanation: "Follow the thread they just opened. Respond to what they actually said, then let the conversation grow from there.",
                    onComplete: handleQuizComplete,
                    savedAnswer: getAnswer('natural-conversation', 'q1') ? 'b' : null
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-8 border-t border-white/10 mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/companion/training",
                        className: "px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    quizPassed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleComplete,
                        className: "px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]",
                        children: getModuleStatus('natural-conversation') === 'completed' ? 'Continue Training' : 'Complete Module'
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Complete the knowledge check to continue."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/modules/ModuleConversation.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ModuleConversation, "tKLNVaMtQ79plbQYSp11k2SxEbU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = ModuleConversation;
var _c;
__turbopack_context__.k.register(_c, "ModuleConversation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/modules/ModuleFlirty.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModuleFlirty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-BV7QT456.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/LessonSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/DoDontCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ConversationExample$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/ConversationExample.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/ScenarioQuestion.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function ModuleFlirty() {
    _s();
    const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const [quiz1Passed, setQuiz1Passed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quiz2Passed, setQuiz2Passed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleFlirty.useEffect": ()=>{
            window.scrollTo(0, 0);
            if (getModuleStatus('flirty-mode') === 'not-started') {
                setModuleStatus('flirty-mode', 'in-progress');
            }
            if (getAnswer('flirty-mode', 'q1')) setQuiz1Passed(true);
            if (getAnswer('flirty-mode', 'q2')) setQuiz2Passed(true);
        }
    }["ModuleFlirty.useEffect"], []);
    const handleComplete = ()=>{
        setModuleStatus('flirty-mode', 'completed');
        navigate('/companion/training');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold text-romantic-pink uppercase tracking-widest",
                        children: "Module 06"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 rounded-full bg-romantic-DEFAULT/10 border border-romantic-DEFAULT/20 text-romantic-200 text-xs font-semibold",
                        children: "18+ • Additional Training"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-bold text-white mb-4",
                children: "Playful still means respectful."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 leading-relaxed mb-10",
                children: "Flirty Mode allows light, playful, consensual conversation. This module covers where the boundaries are."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "What Flirty Mode can include",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                    lineNumber: 46,
                                    columnNumber: 50
                                }, this),
                                "Playful conversation"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                    lineNumber: 47,
                                    columnNumber: 50
                                }, this),
                                "Fun banter"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                    lineNumber: 48,
                                    columnNumber: 50
                                }, this),
                                "Compliments"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                    lineNumber: 49,
                                    columnNumber: 50
                                }, this),
                                "Personality-based conversation"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                    lineNumber: 50,
                                    columnNumber: 50
                                }, this),
                                "Light romantic conversation"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                    lineNumber: 51,
                                    columnNumber: 50
                                }, this),
                                "Mutual non-explicit flirting"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-6 h-6 text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-white",
                                children: "Flirty Mode Absolute Boundaries"
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300",
                        children: [
                            'Sexual services',
                            'Explicit sexual content',
                            'Explicit images',
                            'Harassment',
                            'Coercion',
                            'Blackmail',
                            'Physical meetups',
                            'Pressure for personal information'
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    item
                                ]
                            }, item, true, {
                                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Consent can change at any time",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-romantic-DEFAULT/5 border border-romantic-DEFAULT/20 rounded-2xl p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-300 mb-4",
                            children: "If the other person becomes uncomfortable:"
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-sm text-gray-300 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-romantic-pink"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                            lineNumber: 80,
                                            columnNumber: 53
                                        }, this),
                                        "Stop the flirty tone immediately."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-romantic-pink"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                            lineNumber: 81,
                                            columnNumber: 53
                                        }, this),
                                        "Change the topic."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-romantic-pink"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                            lineNumber: 82,
                                            columnNumber: 53
                                        }, this),
                                        "Respect their boundary immediately."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-romantic-pink"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                            lineNumber: 83,
                                            columnNumber: 53
                                        }, this),
                                        "Do not pressure them to continue."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-romantic-200/80 font-medium italic",
                            children: "Likewise, you may set your own boundary at any time."
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Do's and Don'ts",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    doItems: [
                        '"You have a great sense of humour."',
                        'Keep things light and playful.',
                        'Respect when the tone shifts.',
                        'Enjoy the conversation within boundaries.'
                    ],
                    dontItems: [
                        'Push for explicit content.',
                        'Ignore when someone wants to change the topic.',
                        'Pressure them to stay in flirty mode.',
                        'Request images or personal contact details.'
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Knowledge Check 1",
                title: "Explicit content scenario",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    question: "A customer says: \"Let's make this more explicit.\" What should you do?",
                    options: [
                        {
                            id: 'a',
                            text: 'Continue because they requested it.'
                        },
                        {
                            id: 'b',
                            text: 'Politely keep the conversation within non-explicit boundaries.'
                        }
                    ],
                    correctId: "b",
                    explanation: "\"I'm happy to keep things playful, but let's keep it non-explicit.\" Explicit content is never allowed, even if requested.",
                    onComplete: ()=>{
                        saveAnswer('flirty-mode', 'q1', true);
                        setQuiz1Passed(true);
                    },
                    savedAnswer: getAnswer('flirty-mode', 'q1') ? 'b' : null
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Knowledge Check 2",
                title: "Meetup scenario",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    question: "A customer says: \"Can we meet sometime?\" What's the correct direction?",
                    options: [
                        {
                            id: 'a',
                            text: 'Share your location details.'
                        },
                        {
                            id: 'b',
                            text: 'Politely explain that Never Alone conversations remain online/phone-based and physical meetups are not part of the service.'
                        },
                        {
                            id: 'c',
                            text: 'Say maybe and keep the conversation going.'
                        }
                    ],
                    correctId: "b",
                    explanation: "Physical meetups are never arranged through Never Alone. Politely redirect while keeping the conversation comfortable.",
                    onComplete: ()=>{
                        saveAnswer('flirty-mode', 'q2', true);
                        setQuiz2Passed(true);
                    },
                    savedAnswer: getAnswer('flirty-mode', 'q2') ? 'b' : null
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-8 border-t border-white/10 mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/companion/training",
                        className: "px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    quiz1Passed && quiz2Passed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleComplete,
                        className: "px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-romantic-DEFAULT hover:bg-romantic-DEFAULT/90 transition-colors shadow-[0_0_15px_rgba(244,114,182,0.2)]",
                        children: getModuleStatus('flirty-mode') === 'completed' ? 'Continue Training' : 'Complete Module'
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Complete both knowledge checks to continue."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/modules/ModuleFlirty.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(ModuleFlirty, "S+Fd5PKKAbTRN+WYvOPMy05EUPM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = ModuleFlirty;
var _c;
__turbopack_context__.k.register(_c, "ModuleFlirty");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/modules/ModuleListening.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModuleListening
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-BV7QT456.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/LessonSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/DoDontCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ConversationExample$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/ConversationExample.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/ScenarioQuestion.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ModuleListening() {
    _s();
    const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const [quizPassed, setQuizPassed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleListening.useEffect": ()=>{
            window.scrollTo(0, 0);
            if (getModuleStatus('listening') === 'not-started') {
                setModuleStatus('listening', 'in-progress');
            }
            if (getAnswer('listening', 'q1')) setQuizPassed(true);
        }
    }["ModuleListening.useEffect"], []);
    const handleQuizComplete = ()=>{
        saveAnswer('listening', 'q1', true);
        setQuizPassed(true);
    };
    const handleComplete = ()=>{
        setModuleStatus('listening', 'completed');
        navigate('/companion/training');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2",
                        children: "Module 01"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl md:text-4xl font-bold text-white mb-4",
                        children: "Listening is more than waiting to speak."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 leading-relaxed mb-10",
                        children: "Good listening isn't about having the right words ready. It's about giving the other person space to share what's on their mind."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "What good listening looks like",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                                    lineNumber: 46,
                                    columnNumber: 50
                                }, this),
                                "Give the other person space to speak."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                                    lineNumber: 47,
                                    columnNumber: 50
                                }, this),
                                "Avoid interrupting unnecessarily."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                                    lineNumber: 48,
                                    columnNumber: 50
                                }, this),
                                "Ask open-ended questions."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                                    lineNumber: 49,
                                    columnNumber: 50
                                }, this),
                                "Acknowledge what they said before moving on."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                                    lineNumber: 50,
                                    columnNumber: 50
                                }, this),
                                "Do not immediately turn every conversation into your own story."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                                    lineNumber: 51,
                                    columnNumber: 50
                                }, this),
                                "Do not assume you know how they feel."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Example conversation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ConversationExample$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    personSays: "I've had a really exhausting week.",
                    goodResponse: "That sounds like a lot. What's been taking most of your energy?",
                    avoidResponse: "Everyone has stressful weeks.",
                    avoidReason: "Dismissive responses shut down conversation and make the person feel unheard."
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Do's and Don'ts",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    doItems: [
                        'Let them finish their thought before responding.',
                        'Ask follow-up questions based on what they said.',
                        'Use phrases like "Tell me more" or "How did that feel?"',
                        'Be comfortable with brief pauses.'
                    ],
                    dontItems: [
                        'Interrupt to share your own similar experience.',
                        'Immediately offer solutions they didn\'t ask for.',
                        'Say "I know exactly how you feel."',
                        'Rush them to get to the point.'
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Knowledge Check",
                title: "Practice scenario",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    question: 'Someone says: "I don\'t really know why I called. I just wanted to talk." Which response feels more appropriate?',
                    options: [
                        {
                            id: 'a',
                            text: '"Then what do you want me to do?"'
                        },
                        {
                            id: 'b',
                            text: '"That\'s okay. We can just talk. How has your day been?"'
                        },
                        {
                            id: 'c',
                            text: '"You should probably call someone else."'
                        }
                    ],
                    correctId: "b",
                    explanation: "They don't need to arrive with a perfect topic. Making them feel welcome to simply talk is the right approach.",
                    onComplete: handleQuizComplete,
                    savedAnswer: getAnswer('listening', 'q1') ? 'b' : null
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-8 border-t border-white/10 mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/companion/training",
                        className: "px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    quizPassed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleComplete,
                        className: "px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]",
                        children: getModuleStatus('listening') === 'completed' ? 'Continue Training' : 'Complete Module'
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Complete the knowledge check to continue."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/modules/ModuleListening.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ModuleListening, "tKLNVaMtQ79plbQYSp11k2SxEbU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = ModuleListening;
var _c;
__turbopack_context__.k.register(_c, "ModuleListening");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/modules/ModuleRelationship.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModuleRelationship
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-BV7QT456.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/LessonSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/DoDontCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ConversationExample$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/ConversationExample.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/ScenarioQuestion.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ModuleRelationship() {
    _s();
    const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const [quizPassed, setQuizPassed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleRelationship.useEffect": ()=>{
            window.scrollTo(0, 0);
            if (getModuleStatus('relationship') === 'not-started') {
                setModuleStatus('relationship', 'in-progress');
            }
            if (getAnswer('relationship', 'q1')) setQuizPassed(true);
        }
    }["ModuleRelationship.useEffect"], []);
    const handleQuizComplete = ()=>{
        saveAnswer('relationship', 'q1', true);
        setQuizPassed(true);
    };
    const handleComplete = ()=>{
        setModuleStatus('relationship', 'completed');
        navigate('/companion/training');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2",
                children: "Module 04"
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-bold text-white mb-4",
                children: [
                    "Support the conversation, ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                        className: "hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                        lineNumber: 37,
                        columnNumber: 35
                    }, this),
                    "not a side."
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 leading-relaxed mb-10",
                children: "Relationship and personal conversations are some of the most common on Never Alone. Learn how to navigate them responsibly."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Topics you'll encounter",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                        'Dating',
                        'Communication',
                        'Breakups',
                        'Misunderstandings',
                        'Friendship',
                        'Trust',
                        'Moving On',
                        'Family',
                        'Boundaries',
                        'Decisions'
                    ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300",
                            children: t
                        }, t, false, {
                            fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Key principles",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                                    lineNumber: 53,
                                    columnNumber: 50
                                }, this),
                                "Listen before giving opinions."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                                    lineNumber: 54,
                                    columnNumber: 50
                                }, this),
                                'Avoid controlling instructions ("You must leave them").'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                                    lineNumber: 55,
                                    columnNumber: 50
                                }, this),
                                "Do not pressure users into major decisions."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                                    lineNumber: 56,
                                    columnNumber: 50
                                }, this),
                                "Do not automatically decide who is right or wrong."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                                    lineNumber: 57,
                                    columnNumber: 50
                                }, this),
                                "Help them explore the situation rather than making the decision for them."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Example conversation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ConversationExample$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    personSays: "My partner and I keep arguing. Should I break up?",
                    goodResponse: "That sounds difficult. What usually causes the arguments, and how do you feel after them?",
                    avoidResponse: "Yes, leave them.",
                    avoidReason: "Making a major life decision for someone removes their autonomy. Help them explore rather than deciding for them."
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Do's and Don'ts",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    doItems: [
                        'Help them articulate what they\'re feeling.',
                        'Ask clarifying questions about the situation.',
                        'Acknowledge that relationships are complex.',
                        'Share perspective without being directive.'
                    ],
                    dontItems: [
                        'Take sides automatically.',
                        'Pressure them into breaking up or staying.',
                        'Manipulate the customer toward an outcome.',
                        'Dismiss their feelings about the situation.'
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Knowledge Check",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    question: "Someone says: \"My best friend hasn't spoken to me in a week and I don't know what I did wrong.\" What's the best approach?",
                    options: [
                        {
                            id: 'a',
                            text: '"They\'re probably not a real friend then."'
                        },
                        {
                            id: 'b',
                            text: '"That must feel confusing. Do you have any idea what might have changed?"'
                        },
                        {
                            id: 'c',
                            text: '"Just forget about them and move on."'
                        }
                    ],
                    correctId: "b",
                    explanation: "Help them explore what happened rather than jumping to conclusions about the relationship.",
                    onComplete: handleQuizComplete,
                    savedAnswer: getAnswer('relationship', 'q1') ? 'b' : null
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-8 border-t border-white/10 mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/companion/training",
                        className: "px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    quizPassed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleComplete,
                        className: "px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]",
                        children: getModuleStatus('relationship') === 'completed' ? 'Continue Training' : 'Complete Module'
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Complete the knowledge check to continue."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/modules/ModuleRelationship.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ModuleRelationship, "tKLNVaMtQ79plbQYSp11k2SxEbU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = ModuleRelationship;
var _c;
__turbopack_context__.k.register(_c, "ModuleRelationship");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/companion/modules/ModuleSafety.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModuleSafety
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-BV7QT456.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/TrainingContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/LessonSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/DoDontCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/training/ScenarioQuestion.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ModuleSafety() {
    _s();
    const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const [quizPassed, setQuizPassed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleSafety.useEffect": ()=>{
            window.scrollTo(0, 0);
            if (getModuleStatus('safety') === 'not-started') {
                setModuleStatus('safety', 'in-progress');
            }
            if (getAnswer('safety', 'q1')) setQuizPassed(true);
        }
    }["ModuleSafety.useEffect"], []);
    const handleQuizComplete = ()=>{
        saveAnswer('safety', 'q1', true);
        setQuizPassed(true);
    };
    const handleComplete = ()=>{
        setModuleStatus('safety', 'completed');
        navigate('/companion/training');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2",
                children: "Module 05"
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-bold text-white mb-4",
                children: "Know when a conversation crosses a line."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 leading-relaxed mb-10",
                children: "Safety rules exist to protect both the customer and the companion. Learn what is never allowed and how to respond."
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-6 h-6 text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-white",
                                children: "Not Allowed On Never Alone"
                            }, void 0, false, {
                                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300",
                        children: [
                            'Sexual services',
                            'Explicit sexual content',
                            'Explicit images',
                            'Harassment',
                            'Threats',
                            'Coercion',
                            'Blackmail',
                            'Exploitation',
                            'Off-platform money requests',
                            'Pressure for private information',
                            'Physical meetup requests'
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    item
                                ]
                            }, item, true, {
                                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Safety protects companions too",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-electric-cyan/5 border border-electric-cyan/20 rounded-2xl p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-300 mb-4",
                            children: "A companion can:"
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-sm text-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-electric-cyan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                            lineNumber: 67,
                                            columnNumber: 53
                                        }, this),
                                        "Set a boundary"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-electric-cyan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                            lineNumber: 68,
                                            columnNumber: 53
                                        }, this),
                                        "Change the subject"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-electric-cyan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                            lineNumber: 69,
                                            columnNumber: 53
                                        }, this),
                                        "End the conversation"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-electric-cyan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                            lineNumber: 70,
                                            columnNumber: 53
                                        }, this),
                                        "Report the customer"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-electric-cyan/80 mt-4 font-medium italic",
                            children: '"You never have to continue a conversation that crosses your boundaries."'
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Personal information",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Do not request unnecessary personal information from customers:"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$DoDontCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        doItems: [
                            'Keep conversation within the platform.',
                            'Use only the information the customer voluntarily shares.'
                        ],
                        dontItems: [
                            'Request home addresses.',
                            'Ask for passwords or OTP codes.',
                            'Request bank details or private credentials.',
                            'Encourage moving to off-platform arrangements.'
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-brand-900 border-2 border-red-500/30 rounded-2xl p-6 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-red-300 mb-2",
                        children: "Never request off-platform money from customers."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Keep transactions within approved platform systems once implemented."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-brand-900 border-2 border-red-500/30 rounded-2xl p-6 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-red-300 mb-2",
                        children: "No physical meetups."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Never Alone is for online phone conversations only. Do not arrange physical meetings through the platform."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "When the situation is beyond a normal conversation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/5 border border-white/10 rounded-2xl p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                    className: "w-5 h-5 text-yellow-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-white",
                                    children: "Never Alone is not an emergency service."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400 leading-relaxed",
                            children: "Companions should not try to act as emergency professionals. If someone may be in immediate danger, the platform flow should direct them toward appropriate emergency or crisis resources."
                        }, void 0, false, {
                            fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$LessonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Knowledge Check",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$ScenarioQuestion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    question: "A customer says: \"Can I send you money directly?\" What's the correct response direction?",
                    options: [
                        {
                            id: 'a',
                            text: 'Accept if the amount is small.'
                        },
                        {
                            id: 'b',
                            text: 'Do not accept or request off-platform payment. Keep transactions within approved platform systems once implemented.'
                        },
                        {
                            id: 'c',
                            text: 'Share your bank details privately.'
                        }
                    ],
                    correctId: "b",
                    explanation: "Off-platform money transactions are never allowed. All payments should go through approved platform systems.",
                    onComplete: handleQuizComplete,
                    savedAnswer: getAnswer('safety', 'q1') ? 'b' : null
                }, void 0, false, {
                    fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-8 border-t border-white/10 mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/companion/training",
                        className: "px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    quizPassed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleComplete,
                        className: "px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]",
                        children: getModuleStatus('safety') === 'completed' ? 'Continue Training' : 'Complete Module'
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Complete the knowledge check to continue."
                    }, void 0, false, {
                        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/companion/modules/ModuleSafety.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ModuleSafety, "tKLNVaMtQ79plbQYSp11k2SxEbU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$training$2f$TrainingContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTraining"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$BV7QT456$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = ModuleSafety;
var _c;
__turbopack_context__.k.register(_c, "ModuleSafety");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_views_companion_0lqxt9h._.js.map