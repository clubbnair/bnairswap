(this["webpackJsonpglide-frontend"] = this["webpackJsonpglide-frontend"] || []).push([
    [6],
    {
        1227: function (e, n, t) {
            "use strict";
            t.r(n);
            var i,
                c,
                r,
                l,
                a,
                o,
                s,
                d,
                j,
                b,
                u,
                x,
                h = t(10),
                p = t(0),
                O = t(4),
                m = t(2),
                f = t(6),
                g = t(55),
                v = t(237),
                y = t(1),
                w = function (e, n, t) {
                    return Object(O.d)(i || (i = Object(h.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(", ");\n\n  background: ", ";\n\n  & svg {\n    display: block;\n  }\n"])), n, function () {
                        return e.isDark ? (null === t || void 0 === t ? void 0 : t.dark) || (null === t || void 0 === t ? void 0 : t.light) || e.colors.background : (null === t || void 0 === t ? void 0 : t.light) || e.colors.background;
                    });
                },
                C = Object(O.e)(m.i)(
                    c || (c = Object(h.a)(["\n  ", "\n  transform: ", ";\n"])),
                    function (e) {
                        var n = e.theme,
                            t = e.clipPath,
                            i = e.clipFill;
                        return w(n, t, i);
                    },
                    function (e) {
                        return "#bottomConcaveCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, 1px)";
                    }
                ),
                k = Object(O.e)(m.i)(
                    r || (r = Object(h.a)(["\n  ", "\n  transform: ", ";\n"])),
                    function (e) {
                        var n = e.theme,
                            t = e.clipPath,
                            i = e.clipFill;
                        return w(n, t, i);
                    },
                    function (e) {
                        return "#bottomConvexCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, -1px)";
                    }
                ),
                L = function (e) {
                    var n = e.clipFill;
                    return Object(y.jsx)(k, {
                        clipFill: n,
                        clipPath: "#topConvexCurve",
                        children: Object(y.jsx)("svg", {
                            width: "0",
                            height: "0",
                            children: Object(y.jsx)("defs", {
                                children: Object(y.jsx)("clipPath", { id: "topConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(y.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z" }) }),
                            }),
                        }),
                    });
                },
                S = function (e) {
                    var n = e.clipFill;
                    return Object(y.jsx)(k, {
                        clipFill: n,
                        clipPath: "#bottomConvexCurve",
                        children: Object(y.jsx)("svg", {
                            width: "0",
                            height: "0",
                            children: Object(y.jsx)("defs", {
                                children: Object(y.jsx)("clipPath", { id: "bottomConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(y.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }),
                            }),
                        }),
                    });
                },
                D = function (e) {
                    var n = e.clipFill;
                    return Object(y.jsx)(C, {
                        clipFill: n,
                        clipPath: "#topConcaveCurve",
                        children: Object(y.jsx)("svg", {
                            width: "0",
                            height: "0",
                            children: Object(y.jsx)("defs", {
                                children: Object(y.jsx)("clipPath", { id: "topConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(y.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }),
                            }),
                        }),
                    });
                },
                F = function (e) {
                    var n = e.clipFill;
                    return Object(y.jsx)(C, {
                        clipFill: n,
                        clipPath: "#bottomConcaveCurve",
                        children: Object(y.jsx)("svg", {
                            width: "0",
                            height: "0",
                            children: Object(y.jsx)("defs", {
                                children: Object(y.jsx)("clipPath", { id: "bottomConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(y.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z" }) }),
                            }),
                        }),
                    });
                },
                P = O.e.div(
                    l || (l = Object(h.a)(["\n  background: ", ";\n  z-index: ", ";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])),
                    function (e) {
                        var n = e.theme,
                            t = e.dividerFill;
                        return n.isDark
                            ? (null === t || void 0 === t ? void 0 : t.dark) || (null === t || void 0 === t ? void 0 : t.light) || "none"
                            : (null === t || void 0 === t ? void 0 : t.light) || (null === t || void 0 === t ? void 0 : t.dark) || "none";
                    },
                    function (e) {
                        return e.index;
                    }
                ),
                T = O.e.div(a || (a = Object(h.a)(["\n  z-index: ", ";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])), function (e) {
                    return e.index + 1;
                }),
                E = function (e) {
                    var n = e.index,
                        t = e.dividerPosition,
                        i = e.dividerComponent,
                        c = e.concave,
                        r = e.clipFill,
                        l = e.dividerFill,
                        a = "top" === t && !c,
                        o = "bottom" === t && !c,
                        s = "top" === t && c,
                        d = "bottom" === t && c;
                    return Object(y.jsxs)(P, {
                        index: n,
                        dividerFill: l,
                        children: [
                            i && Object(y.jsx)(T, { index: n, children: i }),
                            Object(y.jsxs)(y.Fragment, { children: [s && Object(y.jsx)(D, { clipFill: r }), d && Object(y.jsx)(F, { clipFill: r })] }),
                            Object(y.jsxs)(y.Fragment, { children: [a && Object(y.jsx)(L, { clipFill: r }), o && Object(y.jsx)(S, { clipFill: r })] }),
                        ],
                    });
                },
                I = ["children", "background", "svgFill", "index", "dividerComponent", "dividerPosition", "hasCurvedDivider", "concaveDivider", "clipFill", "dividerFill", "containerProps", "innerProps"],
                z = Object(O.e)(m.L)(
                    o || (o = Object(h.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ", ";\n  background: ", ";\n  padding: ", ";\n"])),
                    function (e) {
                        return e.index - 1;
                    },
                    function (e) {
                        return e.background || "none";
                    },
                    function (e) {
                        return (0, e.getPadding)();
                    }
                ),
                Q = Object(O.e)(v.a)(
                    s ||
                        (s = Object(h.a)([
                            "\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ",
                            " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  ",
                            " {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    },
                    function (e) {
                        return e.theme.mediaQueries.lg;
                    }
                ),
                B = function (e) {
                    var n = e.children,
                        t = e.background,
                        i = e.svgFill,
                        c = e.index,
                        r = void 0 === c ? 1 : c,
                        l = e.dividerComponent,
                        a = e.dividerPosition,
                        o = void 0 === a ? "bottom" : a,
                        s = e.hasCurvedDivider,
                        d = void 0 === s || s,
                        j = e.concaveDivider,
                        b = void 0 !== j && j,
                        u = e.clipFill,
                        x = e.dividerFill,
                        h = e.containerProps,
                        p = e.innerProps,
                        O = Object(g.a)(e, I);
                    return Object(y.jsxs)(
                        m.i,
                        Object(f.a)(
                            Object(f.a)({}, h),
                            {},
                            {
                                children: [
                                    d && "top" === o && Object(y.jsx)(E, { svgFill: i, index: r, concave: b, dividerPosition: o, dividerComponent: l, clipFill: u, dividerFill: x }),
                                    Object(y.jsx)(
                                        z,
                                        Object(f.a)(
                                            Object(f.a)(
                                                {
                                                    background: t,
                                                    index: r,
                                                    getPadding: function () {
                                                        return d ? ("bottom" === o ? "48px 0 14px" : "top" === o ? "14px 0 48px" : "48px 0") : "48px 0";
                                                    },
                                                },
                                                O
                                            ),
                                            {},
                                            { children: Object(y.jsx)(Q, Object(f.a)(Object(f.a)({}, p), {}, { children: n })) }
                                        )
                                    ),
                                    d && "bottom" === o && Object(y.jsx)(E, { svgFill: i, index: r, concave: b, dividerPosition: o, dividerComponent: l, clipFill: u, dividerFill: x }),
                                ],
                            }
                        )
                    );
                },
                q = t(37),
                G = t(11),
                M = t(90),
                A = function (e, n) {
                    return Object(O.f)(d || (d = Object(h.a)(["\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(", ", ", ");\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n"])), e, n);
                },
                N = Object(O.e)(m.i)(
                    j ||
                        (j = Object(h.a)([
                            "\n  position: relative;\n  max-height: ",
                            ";\n\n  & :nth-child(2) {\n    animation: ",
                            " 3s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n\n  & :nth-child(3) {\n    animation: ",
                            " 3s ease-in-out infinite;\n    animation-delay: 0.66s;\n  }\n\n  & :nth-child(4) {\n    animation: ",
                            " 3s ease-in-out infinite;\n    animation-delay: 0.33s;\n  }\n\n  & :nth-child(5) {\n    animation: ",
                            " 3s ease-in-out infinite;\n    animation-delay: 0s;\n  }\n",
                        ])),
                    function (e) {
                        return e.maxHeight;
                    },
                    A("3px", "15px"),
                    A("5px", "10px"),
                    A("6px", "5px"),
                    A("4px", "12px")
                ),
                H = O.e.img(b || (b = Object(h.a)(["\n  max-height: ", ";\n  visibility: hidden;\n"])), function (e) {
                    return e.maxHeight;
                }),
                V = Object(O.e)(m.i)(u || (u = Object(h.a)(["\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  img {\n    max-height: 100%;\n    width: auto;\n  }\n"])));
            !(function (e) {
                (e.MD = "1.5x"), (e.LG = "2x");
            })(x || (x = {}));
            var U,
                $,
                R,
                W,
                Z,
                _,
                J,
                X,
                Y,
                K,
                ee,
                ne,
                te,
                ie,
                ce,
                re,
                le,
                ae,
                oe,
                se,
                de,
                je,
                be,
                ue,
                xe,
                he,
                pe,
                Oe,
                me,
                fe,
                ge = function (e, n, t) {
                    return ""
                        .concat(e)
                        .concat(n)
                        .concat(t ? "@".concat(t, ".png") : ".png");
                },
                ve = function (e, n) {
                    return "".concat(ge(e, n), " 512w, \n  ").concat(ge(e, n, x.MD), " 768w, \n  ").concat(ge(e, n, x.LG), " 1024w,");
                },
                ye = function (e) {
                    var n = e.path,
                        t = e.attributes,
                        i = e.maxHeight;
                    return Object(y.jsxs)(N, {
                        maxHeight: i,
                        children: [
                            Object(y.jsx)(H, { src: ge(n, t[0].src), maxHeight: i, srcSet: ve(n, t[0].src) }),
                            t.map(function (e) {
                                return Object(y.jsx)(V, { children: Object(y.jsx)("img", { src: ge(n, e.src), srcSet: ve(n, e.src), alt: e.alt }) }, e.src);
                            }),
                        ],
                    });
                },
                we = function () {
                    return Object(O.f)(U || (U = Object(h.a)(["\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(-7px, -7px);\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n"])));
                },
                Ce = Object(O.e)(m.L)($ || ($ = Object(h.a)(["\n  padding: 0;\n\n  ", " {\n    padding: 0 24px;\n  }\n"])), function (e) {
                    return e.theme.mediaQueries.sm;
                }),
                ke = O.e.div(R || (R = Object(h.a)(["\n  width: 90%;\n  animation: ", " 4s ease-in-out infinite;\n"])), we),
                Le = O.e.div(W || (W = Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s ease-in-out infinite;\n"])), we),
                Se = "/images/home/glider/",
                De = "glider1",
                Fe = { path: "/images/home/glider/", attributes: [{ src: "butterfly", alt: "Butterfly" }] },
                Pe = function () {
                    var e = Object(G.b)().t,
                        n = Object(q.c)().account;
                    return Object(y.jsx)(y.Fragment, {
                        children: Object(y.jsxs)(Ce, {
                            position: "relative",
                            flexDirection: ["column-reverse", null, null, "row"],
                            alignItems: ["flex-end", null, null, "center"],
                            justifyContent: "center",
                            children: [
                                Object(y.jsxs)(m.L, {
                                    flex: "1",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    children: [
                                        Object(y.jsx)(m.M, { scale: "xl", mb: "24px", color: "glide", children: e("BNAIR SWAP") }),
                                        Object(y.jsx)(m.O, { scale: "md", mb: "24px", children: e("Incentivized Farming on the Elastos Smart Chain. Earn CLUBBNAIR through yield farming, then use your earnings to purchase Exclusive Travel packages and luxury Goods.") }),
                                        Object(y.jsxs)(m.L, {
                                            children: [
                                                !n && Object(y.jsx)(M.a, { mr: "8px" }),
                                                Object(y.jsx)(m.V, { mr: "16px", href: "/swap", children: Object(y.jsx)(m.l, { variant: n ? "primary" : "secondary", children: e("Trade Now") }) }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(y.jsxs)(m.L, {
                                    flex: [null, null, null, "1"],
                                    mb: ["24px", null, null, "0"],
                                    position: "relative",
                                    children: [
                                        Object(y.jsx)(ke, { children: Object(y.jsx)("img", { src: "".concat(Se).concat(De, ".png"), srcSet: ve(Se, De), alt: e("Glider") }) }),
                                        Object(y.jsx)(Le, { children: Object(y.jsx)(ye, Object(f.a)({}, Fe)) }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                Te = function () {
                    return Object(O.f)(_ || (_ = Object(h.a)(["\n  from {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 0.9;\n  }  \n"])));
                },
                Ee = Object(O.e)(m.L)(J || (J = Object(h.a)(["\n  padding: 0;\n\n  ", " {\n    width: 65%;\n    margin: 0 auto;\n  }\n"])), function (e) {
                    return e.theme.mediaQueries.sm;
                }),
                Ie = O.e.div(X || (X = Object(h.a)(["\n  width: 90%;\n  animation: ", " 3.5s ease-in-out infinite;\n"])), function () {
                    return Object(O.f)(Z || (Z = Object(h.a)(["\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(-5px, -5px);\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n"])));
                }),
                ze = O.e.div(
                    Y ||
                        (Y = Object(h.a)([
                            "\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  & :nth-child(2) {\n    animation: ",
                            " 2s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n\n  & :nth-child(3) {\n    animation: ",
                            " 4s ease-in-out infinite;\n    animation-delay: 0.66s;\n  }\n\n  & :nth-child(4) {\n    animation: ",
                            " 2.5s ease-in-out infinite;\n    animation-delay: 0.33s;\n  }\n",
                        ])),
                    Te,
                    Te,
                    Te
                ),
                Qe = "/images/home/rocket/",
                Be = "rocket1",
                qe = {
                    path: "/images/home/rocket/",
                    attributes: [
                        { src: "star-l", alt: "3D Star" },
                        { src: "star-top-r", alt: "3D Star" },
                        { src: "star-bottom-r", alt: "3D Star" },
                    ],
                },
                Ge = function () {
                    var e = Object(G.b)().t;
                    return Object(y.jsx)(y.Fragment, {
                        children: Object(y.jsx)(Ee, {
                            position: "relative",
                            flexDirection: ["column-reverse", null, null, "row"],
                            alignItems: ["flex-end", null, null, "center"],
                            justifyContent: "center",
                            children: Object(y.jsxs)(m.L, {
                                flex: [null, null, null, "1"],
                                mb: ["24px"],
                                mt: ["10vh"],
                                position: "relative",
                                children: [
                                ],
                            }),
                        }),
                    });
                },
                Me = t(69),
                Ae = ["icon", "background", "borderColor", "rotation", "children"],
                Ne = Object(O.e)(m.p)(
                    K || (K = Object(h.a)(["\n  height: fit-content;\n  padding: 1px 1px 4px 1px;\n  box-sizing: border-box;\n\n  ", " {\n    ", "\n  }\n"])),
                    function (e) {
                        return e.theme.mediaQueries.md;
                    },
                    function (e) {
                        var n = e.rotation;
                        return n ? "transform: rotate(".concat(n, ");") : "";
                    }
                ),
                He = Object(O.e)(m.q)(ee || (ee = Object(h.a)(["\n  background: ", ";\n"])), function (e) {
                    return e.theme.colors.overlay;
                }),
                Ve = Object(O.e)(m.i)(
                    ne || (ne = Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", " {\n    ", "\n  }\n"])),
                    function (e) {
                        return e.theme.mediaQueries.md;
                    },
                    function (e) {
                        var n = e.rotation;
                        return n ? "transform: rotate(".concat(n, ");") : "";
                    }
                ),
                Ue = function (e) {
                    var n = e.icon,
                        t = e.background,
                        i = e.borderColor,
                        c = e.rotation,
                        r = e.children,
                        l = Object(g.a)(e, Ae);
                    return Object(y.jsx)(Ne, Object(f.a)(Object(f.a)({ background: t, borderBackground: i, rotation: c }, l), {}, { children: Object(y.jsxs)(He, { children: [Object(y.jsx)(Ve, { rotation: c, children: n }), r] }) }));
                },
                $e = function (e) {
                    var n = e.headingText,
                        t = e.bodyText,
                        i = e.highlightColor,
                        c = n.split(" "),
                        r = c.pop(),
                        l = c.slice(0, c.length).join(" ");
                    return Object(y.jsxs)(m.L, {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: [null, null, null, "24px"],
                        children: [Object(y.jsx)(m.O, { scale: "xl", children: l }), Object(y.jsx)(m.O, { color: i, scale: "xl", mb: "24px", children: r }), Object(y.jsx)(m.wb, { textAlign: "center", color: "textSubtle", children: t })],
                    });
                },
                Re = function () {
                    var e = Object(G.b)().t,
                        n = Object(Me.a)().theme,
                        t = { icon: Object(y.jsx)("img", { src: "/images/home/pitch/trade.png", alt: e("Trade") }) },
                        i = { icon: Object(y.jsx)("img", { src: "/images/home/pitch/wallet.png", alt: e("Trade") }) },
                        c = { icon: Object(y.jsx)("img", { src: "/images/home/pitch/percent.png", alt: e("Trade") }) };
                    return Object(y.jsxs)(m.L, {
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        children: [
                        ],
                    });
                },
                We = Object(O.e)(m.L)(ce || (ce = Object(h.a)(["\n  padding: 0;\n  margin-bottom: 15vh;\n\n  ", " {\n    padding: 0 24px;\n  }\n"])), function (e) {
                    return e.theme.mediaQueries.sm;
                }),
                Ze = O.e.img(re || (re = Object(h.a)(["\n  width: 164px;\n  margin-right: 50%;\n\n  ", " {\n    width: 324px;\n  }\n"])), function (e) {
                    return e.theme.mediaQueries.sm;
                }),
                _e = O.e.div(
                    le || (le = Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 20px;\n\n  ", " {\n  \n  }\n\n  animation: ", " 4s ease-in-out infinite;\n"])),
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    },
                    function () {
                        return Object(O.f)(ie || (ie = Object(h.a)(["\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(100px, 16px);\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n"])));
                    }
                ),
                Je = O.e.div(ae || (ae = Object(h.a)(["\n  width: 90%;\n  animation: ", " 4s ease-in-out infinite;\n"])), function () {
                    return Object(O.f)(te || (te = Object(h.a)(["\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(-7px, -7px);\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n"])));
                }),
                Xe = "/images/home/details/",
                Ye = function () {
                    var e = Object(G.b)().t;
                    return Object(y.jsxs)(y.Fragment, {
                        children: [
                            Object(y.jsxs)(m.L, {
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                children: [
                                    Object(y.jsxs)(We, {
                                        position: "relative",
                                        flexDirection: ["column", null, null, "row"],
                                        alignItems: ["flex-end", null, null, "center"],
                                        justifyContent: "center",
                                        children: [
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                Ke = Object(O.e)(m.L)(oe || (oe = Object(h.a)(["\n  padding: 0;\n"]))),
                en = O.e.div(se || (se = Object(h.a)(["\n  width: 90%;\n"]))),
                nn = "/images/home/partners/",
                tn = function () {
                    var e = Object(G.b)().t;
                    return Object(y.jsxs)(m.L, {
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        children: [
                        ],
                    });
                },
                cn = t(142),
                rn = t(20),
                ln = t(19),
                an = t(71),
                on = t(42),
                sn = t(105),
                dn = t(181),
                jn = t(13),
                bn = t.n(jn),
                un = t(365),
                xn = t(44),
                hn = Object(O.e)(m.L)(de || (de = Object(h.a)(["\n  flex-direction: column;\n"]))),
                pn = O.e.div(
                    je ||
                        (je = Object(h.a)([
                            "\n  display: grid;\n  grid-gap: 16px 8px;\n  grid-template-columns: repeat(1, auto);\n  justify-content: center;\n\n  ",
                            " {\n    grid-gap: 32px;\n    grid-template-columns: repeat(4, auto);\n    padding: 0 16px;\n    justify-content: space-between;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.mediaQueries.md;
                    }
                ),
                On = function () {
                    function e(e) {
                        var n = new bn.a(0);
                        return (
                            e.forEach(function (e) {
                                e.lpTotalInQuoteToken && e.quoteToken.usdcPrice && (n = new bn.a(e.lpTotalInQuoteToken).times(e.quoteToken.usdcPrice).plus(n));
                            }),
                            n
                        );
                    }
                    var n = Object(G.b)().t,
                        t = Object(dn.a)().currentBlock,
                        i = Object(an.b)().data,
                        c = Object(xn.g)().pools,
                        r = Object(cn.f)(),
                        l = Object(ln.d)(Object(cn.c)(Object(rn.f)())),
                        a = Object(ln.d)(Object(cn.d)(Object(rn.f)())),
                        o = Object(ln.d)(Object(cn.g)(Object(rn.f)())),
                        s = r ? Object(ln.d)(r) - l - a - o : 0,
                        d = Object(an.f)().times(s),
                        j = Object(ln.a)(d.toNumber()),
                        b = Object(sn.a)(new bn.a(t)).toNumber(),
                        u = i.filter(function (e) {
                            return 0 !== e.pid && "0X" !== e.multiplier && !Object(un.a)(e.pid);
                        }),
                        x = i.filter(function (e) {
                            return 0 !== e.pid && "0X" === e.multiplier && !Object(un.a)(e.pid);
                        }),
                        h = i.filter(function (e) {
                            return Object(un.a)(e.pid);
                        }),
                        p = e(u)
                            .plus(e(x))
                            .plus(e(h))
                            .plus(
                                (function (e) {
                                    var n = new bn.a(0);
                                    return (
                                        e.forEach(function (e) {
                                            if (e.stakingTokenPrice && e.totalStaked && e.stakingToken.decimals) {
                                                var t = Object(ln.d)(e.totalStaked, e.stakingToken.decimals);
                                                n = new bn.a(t).times(e.stakingTokenPrice).plus(n);
                                            }
                                        }),
                                        n
                                    );
                                })(c)
                            );
                    return Object(y.jsxs)(pn, {
                        children: [
                            Object(y.jsxs)(m.L, {
                                flexDirection: "column",
                                children: [
                                    p ? Object(y.jsx)(on.a, { decimals: 2, prefix: "$", fontSize: "32px", bold: !0, value: p.toNumber() }) : Object(y.jsx)(m.qb, { height: 24, width: 126, my: "4px" }),
                                    Object(y.jsx)(m.wb, { fontSize: "20px", color: "textSubtle", children: n("Total value locked") }),
                                ],
                            }),
                            Object(y.jsxs)(hn, {
                                children: [
                                    s ? Object(y.jsx)(on.a, { decimals: 0, fontSize: "32px", bold: !0, value: s }) : Object(y.jsx)(m.qb, { height: 24, width: 126, my: "4px" }),
                                    Object(y.jsx)(m.wb, { fontSize: "20px", color: "textSubtle", children: n("Circulating CLUBBNAIR") }),
                                ],
                            }),
                            Object(y.jsxs)(hn, {
                                children: [
                                    (null === d || void 0 === d ? void 0 : d.gt(0)) && j
                                        ? Object(y.jsx)(m.wb, { fontSize: "32px", children: n("$%marketCap%", { marketCap: j }) })
                                        : Object(y.jsx)(m.qb, { height: 24, width: 126, my: "4px" }),
                                    Object(y.jsx)(m.wb, { fontSize: "20px", color: "textSubtle", children: n("Market cap") }),
                                ],
                            }),
                            Object(y.jsxs)(hn, {
                                children: [Object(y.jsx)(m.wb, { fontSize: "32px", children: n("%cakeEmissions%/block", { cakeEmissions: b }) }), Object(y.jsx)(m.wb, { fontSize: "20px", color: "textSubtle", children: n("Emission rate") })],
                            }),
                        ],
                    });
                },
                mn = t(3),
                fn = t.n(mn),
                gn = t(758),
                vn = t(14),
                yn = t(7),
                wn = t(64),
                Cn = t(36),
                kn = t(106),
                Ln = t(53),
                Sn = t(169),
                Dn = t(39),
                Fn = t(93),
                Pn = t(52),
                Tn = function () {
                    var e = Object(p.useState)([]),
                        n = Object(yn.a)(e, 2),
                        t = n[0],
                        i = n[1],
                        c = Object(p.useState)(null),
                        r = Object(yn.a)(c, 2),
                        l = r[0],
                        a = r[1],
                        o = Object(q.c)().account,
                        s = Object(Fn.a)().fastRefresh;
                    return (
                        Object(p.useEffect)(
                            function () {
                                o &&
                                    (function () {
                                        var e = Object(vn.a)(
                                            fn.a.mark(function e() {
                                                var n, t, c, r, l;
                                                return fn.a.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = Dn.z.map(function (e) {
                                                                        return { address: Object(rn.n)(), name: "pendingGlide", params: [e.pid, o] };
                                                                    })),
                                                                    (e.next = 3),
                                                                    Object(Ln.a)(Sn, n)
                                                                );
                                                            case 3:
                                                                (t = e.sent),
                                                                    (c = Dn.z.map(function (e, n) {
                                                                        return Object(f.a)(Object(f.a)({}, e), {}, { balance: new bn.a(t[n]) });
                                                                    })),
                                                                    (r = c.filter(function (e) {
                                                                        return e.balance.gt(0);
                                                                    })),
                                                                    (l = r.reduce(function (e, n) {
                                                                        var t = new bn.a(n.balance);
                                                                        return t.eq(0) ? e : e + t.div(Pn.g).toNumber();
                                                                    }, 0)),
                                                                    i(r),
                                                                    a(l);
                                                            case 9:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        );
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()();
                            },
                            [o, s]
                        ),
                        { farmsWithStakedBalance: t, earningsSum: l }
                    );
                },
                En = Object(O.e)(m.p)(be || (be = Object(h.a)(["\n  width: 100%;\n  height: fit-content;\n"]))),
                In = function () {
                    var e = Object(p.useState)(!1),
                        n = Object(yn.a)(e, 2),
                        t = n[0],
                        i = n[1],
                        c = Object(G.b)().t,
                        r = Object(wn.a)(),
                        l = r.toastSuccess,
                        a = r.toastError,
                        o = Tn(),
                        s = o.farmsWithStakedBalance,
                        d = o.earningsSum,
                        j = Object(q.c)(),
                        b = j.chainId,
                        u = j.library,
                        x = Object(Cn.h)(),
                        h = Object(an.f)(),
                        O = new bn.a(d).multipliedBy(h),
                        f = s.length,
                        g = c("%earningsUsdc% to collect from %count% %farms%", { earningsUsdc: O.toString(), count: f > 0 ? f : "", farms: 0 === f || f > 1 ? "farms" : "farm" }).split(O.toString()),
                        v = Object(yn.a)(g, 2),
                        w = v[0],
                        C = v[1],
                        k = Object(p.useCallback)(
                            Object(vn.a)(
                                fn.a.mark(function e() {
                                    var n, t, r;
                                    return fn.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        i(!0), (n = Object(gn.a)(s)), (e.prev = 2), n.s();
                                                    case 4:
                                                        if ((t = n.n()).done) {
                                                            e.next = 17;
                                                            break;
                                                        }
                                                        return (r = t.value), (e.prev = 6), (e.next = 9), Object(sn.c)(x, r.pid);
                                                    case 9:
                                                        l("".concat(c("Harvested"), "!"), c("Your %symbol% earnings have been sent to your wallet!", { symbol: "CLUBBNAIR" })), (e.next = 15);
                                                        break;
                                                    case 12:
                                                        (e.prev = 12), (e.t0 = e.catch(6)), a(c("Error"), c("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                                    case 15:
                                                        e.next = 4;
                                                        break;
                                                    case 17:
                                                        e.next = 22;
                                                        break;
                                                    case 19:
                                                        (e.prev = 19), (e.t1 = e.catch(2)), n.e(e.t1);
                                                    case 22:
                                                        return (e.prev = 22), n.f(), e.finish(22);
                                                    case 25:
                                                        i(!1);
                                                    case 26:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [
                                            [2, 19, 22, 25],
                                            [6, 12],
                                        ]
                                    );
                                })
                            ),
                            [s, x, l, a, c]
                        );
                    return Object(y.jsx)(En, {
                        children: Object(y.jsx)(m.q, {
                            children: Object(y.jsxs)(m.L, {
                                flexDirection: ["column", null, null, "row"],
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [
                                    Object(y.jsxs)(m.L, {
                                        flexDirection: "column",
                                        alignItems: ["center", null, null, "flex-start"],
                                        children: [
                                            w && Object(y.jsx)(m.wb, { mb: "4px", color: "textSubtle", children: w }),
                                            O && !O.isNaN()
                                                ? Object(y.jsx)(on.a, { decimals: O.gt(0) ? 2 : 0, fontSize: "24px", bold: !0, prefix: O.gt(0) ? "~$" : "$", lineHeight: "1.1", value: O.toNumber() })
                                                : Object(y.jsx)(m.qb, { width: 96, height: 24, my: "2px" }),
                                            Object(y.jsx)(m.wb, { mb: ["16px", null, null, "0"], color: "textSubtle", children: C }),
                                        ],
                                    }),
                                    f <= 0
                                        ? Object(y.jsx)(m.V, {
                                              href: "farms",
                                              children: Object(y.jsxs)(m.l, {
                                                  width: ["100%", null, null, "auto"],
                                                  variant: "secondary",
                                                  children: [Object(y.jsx)(m.wb, { color: "primary", bold: !0, children: c("Start earning") }), Object(y.jsx)(m.e, { ml: "4px", color: "primary" })],
                                              }),
                                          })
                                        : Object(y.jsx)(y.Fragment, {
                                              children:
                                                  20 !== b
                                                      ? Object(y.jsx)(m.l, {
                                                            onClick: function () {
                                                                Object(kn.b)(20, u);
                                                            },
                                                            children: c("Connect to Elastos"),
                                                        })
                                                      : Object(y.jsx)(m.l, {
                                                            width: ["100%", null, null, "auto"],
                                                            id: "harvest-all",
                                                            isLoading: t,
                                                            endIcon: t ? Object(y.jsx)(m.f, { spin: !0, color: "currentColor" }) : null,
                                                            disabled: t,
                                                            onClick: k,
                                                            children: Object(y.jsx)(m.wb, { color: "contrast", bold: !0, children: c(t ? "Harvesting" : "Harvest all") }),
                                                        }),
                                          }),
                                ],
                            }),
                        }),
                    });
                },
                zn = function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
                    return "".concat(e.substring(0, n), "...").concat(e.substring(e.length - t));
                },
                Qn = Object(O.e)(m.L)(ue || (ue = Object(h.a)(["\n  align-items: center;\n  display: none;\n  ", " {\n    display: flex;\n  }\n"])), function (e) {
                    return e.theme.mediaQueries.md;
                }),
                Bn = function () {
                    var e = Object(G.b)().t,
                        n = Object(q.c)().account,
                        t = zn(n);
                    return Object(y.jsx)(y.Fragment, {
                        children: Object(y.jsx)(Qn, {
                            children: Object(y.jsx)(m.L, {
                                flexDirection: "column",
                                children: n ? Object(y.jsxs)(m.wb, { fontSize: "16px", children: [" ", e("Connected with %address%", { address: t })] }) : Object(y.jsx)(m.qb, { width: 160, height: 16, my: "4px" }),
                            }),
                        }),
                    });
                },
                qn = Object(O.e)(m.i)(
                    xe || (xe = Object(h.a)(["\n  border-radius: ", ";\n  background: ", ";\n"])),
                    function (e) {
                        return e.theme.radii.card;
                    },
                    function (e) {
                        return e.theme.isDark ? "linear-gradient(139.73deg, #191919 0%, #191919 100%)" : "linear-gradient(180deg, rgba(202, 194, 236, 0.9) 0%,  rgba(204, 220, 239, 0.9) 51.04%, rgba(206, 236, 243, 0.9) 100%)";
                    }
                ),
                Gn = function () {
                    return Object(y.jsx)(qn, {
                        children: Object(y.jsx)(m.i, {
                            p: ["16px", null, null, "24px"],
                            children: Object(y.jsxs)(m.L, {
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: ["column", null, null, "row"],
                                children: [
                                    Object(y.jsx)(m.L, { flex: "1", mr: [null, null, null, "32px"], children: Object(y.jsx)(Bn, {}) }),
                                    Object(y.jsx)(m.L, { flex: "1", width: ["100%", null, "auto"], children: Object(y.jsx)(In, {}) }),
                                ],
                            }),
                        }),
                    });
                },
                Mn = O.e.div(he || (he = Object(h.a)([""]))),
                An = Object(O.e)(B)(pe || (pe = Object(h.a)(["\n  padding-top: 16px;\n  padding-bottom: 0;\n\n  ", " {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n"])), function (e) {
                    return e.theme.mediaQueries.md;
                }),
                Nn = Object(O.e)(B)(Oe || (Oe = Object(h.a)(["\n  padding-top: 32px;\n  padding-botom: 0;\n\n  ", " {\n    padding-top: 0px;\n    padding-bottom: 10vh;\n  }\n"])), function (e) {
                    return e.theme.mediaQueries.md;
                }),
                Hn = Object(O.e)(v.a)(me || (me = Object(h.a)(["\n  z-index: 1;\n  width: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])), function (e) {
                    return e.theme.mediaQueries.lg;
                }),
                Vn = O.e.div(fe || (fe = Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"])));
            n.default = function () {
                var e = Object(G.b)().t,
                    n = Object(p.useRef)(null),
                    t = Object(q.c)().account;
                return Object(y.jsxs)(Mn, {
                    ref: n,
                    children: [
                        t && Object(y.jsx)(Hn, { children: Object(y.jsx)(Gn, {}) }),
                        Object(y.jsx)(An, { innerProps: { style: { margin: "0", width: "100%" } }, index: 2, hasCurvedDivider: !1, children: Object(y.jsx)(Pe, {}) }),
                        Object(y.jsxs)(Nn, { index: 2, hasCurvedDivider: !1, children: [Object(y.jsx)(On, {}), Object(y.jsx)(Ge, {})] }),
                        Object(y.jsx)(Nn, { index: 2, hasCurvedDivider: !1, children: Object(y.jsx)(Re, {}) }),
                        Object(y.jsx)(An, { innerProps: { style: { margin: "0", width: "100%" } }, index: 2, hasCurvedDivider: !1, children: Object(y.jsx)(Ye, {}) }),
                        Object(y.jsx)(An, { innerProps: { style: { margin: "0", width: "100%" } }, index: 2, hasCurvedDivider: !1, children: Object(y.jsx)(tn, {}) }),
                        Object(y.jsx)(Vn, {
                            children: Object(y.jsxs)(m.l, {
                                scale: "md",
                                variant: "text",
                                onClick: function () {
                                    n.current.scrollIntoView({ behavior: "smooth" });
                                },
                                children: [e("Return To Top"), Object(y.jsx)(m.A, { color: "primary" })],
                            }),
                        }),
                    ],
                });
            };
        },
        758: function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return c;
            });
            var i = t(239);
            function c(e, n) {
                var t;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (t = Object(i.a)(e)) || (n && e && "number" === typeof e.length)) {
                        t && (e = t);
                        var c = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return c >= e.length ? { done: !0 } : { done: !1, value: e[c++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var l,
                    a = !0,
                    o = !1;
                return {
                    s: function () {
                        t = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = t.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (o = !0), (l = e);
                    },
                    f: function () {
                        try {
                            a || null == t.return || t.return();
                        } finally {
                            if (o) throw l;
                        }
                    },
                };
            }
        },
    },
]);
//# sourceMappingURL=6.7716fcce.chunk.js.map
