(this["webpackJsonpglide-frontend"]=this["webpackJsonpglide-frontend"]||[]).push([[8],{1230:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var i=n(43),a=n(3),c=n.n(a),r=n(14),o=n(17),l=n(7),s=n(10),d=n(0),u=n(4),b=n(5),j=n(8),O=n(2),v=n(57),x=n(11),m=n(35),p=n(175),h=n(201),C=n(359),f=n(182),y=n(26),R=n(90),E=n(113),I=n(59),w=n(39),g=n(15),T=n(60),U=n(36),Y=n(264),N=n(108),_=n(814),k=n(38),S=n(158);var L=n(62),A=n(67),P=n(214),D=n(31),B=n(130),q=n(220),Q=n(119),V=n(100),z=n(327);function M(){return Object(D.c)((function(e){return e.burn}))}var F,H=n(61),W=n(238),G=n(1),J=u.e.div(F||(F=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function K(e){var t,n,a,s,u,F,K,X,Z,$,ee,te,ne,ie,ae,ce,re,oe,le,se=e.history,de=e.match.params,ue=de.currencyIdA,be=de.currencyIdB,je=null!==(t=Object(T.d)(ue))&&void 0!==t?t:void 0,Oe=null!==(n=Object(T.d)(be))&&void 0!==n?n:void 0,ve=Object(g.a)(),xe=ve.account,me=ve.chainId,pe=ve.library,he=Object(d.useMemo)((function(){return[Object(L.b)(je,me),Object(L.b)(Oe,me)]}),[je,Oe,me]),Ce=Object(l.a)(he,2),fe=Ce[0],ye=Ce[1],Re=Object(x.b)().t,Ee=M(),Ie=Ee.independentField,we=Ee.typedValue,ge=function(e,t){var n,i,a,c,r,s=Object(g.a)(),d=s.account,u=s.chainId,b=M(),O=b.independentField,v=b.typedValue,x=Object(B.b)(e,t),m=Object(l.a)(x,2)[1],p=Object(V.e)(null!==d&&void 0!==d?d:void 0,[null===m||void 0===m?void 0:m.liquidityToken]),h=null===p||void 0===p?void 0:p[null!==(n=null===m||void 0===m||null===(i=m.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],C=[Object(L.b)(e,u),Object(L.b)(t,u)],f=C[0],y=C[1],R=(a={},Object(o.a)(a,z.a.CURRENCY_A,f),Object(o.a)(a,z.a.CURRENCY_B,y),Object(o.a)(a,z.a.LIQUIDITY,null===m||void 0===m?void 0:m.liquidityToken),a),E=Object(q.a)(null===m||void 0===m?void 0:m.liquidityToken),I=m&&E&&h&&f&&j.e.greaterThanOrEqual(E.raw,h.raw)?new j.k(f,m.getLiquidityValue(f,E,h,!1).raw):void 0,w=m&&E&&h&&y&&j.e.greaterThanOrEqual(E.raw,h.raw)?new j.k(y,m.getLiquidityValue(y,E,h,!1).raw):void 0,T=(c={},Object(o.a)(c,z.a.CURRENCY_A,I),Object(o.a)(c,z.a.CURRENCY_B,w),c),U=new j.g("0","100");if(O===z.a.LIQUIDITY_PERCENT)U=new j.g(v,"100");else if(O===z.a.LIQUIDITY){if(null===m||void 0===m?void 0:m.liquidityToken){var Y=Object(Q.a)(v,m.liquidityToken);Y&&h&&!Y.greaterThan(h)&&(U=new j.g(Y.raw,h.raw))}}else if(R[O]){var N=Object(Q.a)(v,R[O]),_=T[O];N&&_&&!N.greaterThan(_)&&(U=new j.g(N.raw,_.raw))}var k,S,A=(r={},Object(o.a)(r,z.a.LIQUIDITY_PERCENT,U),Object(o.a)(r,z.a.LIQUIDITY,h&&U&&U.greaterThan("0")?new j.k(h.token,U.multiply(h.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_A,f&&U&&U.greaterThan("0")&&I?new j.k(f,U.multiply(I.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_B,y&&U&&U.greaterThan("0")&&w?new j.k(y,U.multiply(w.raw).quotient):void 0),r);return d||(k="Connect Wallet"),A[z.a.LIQUIDITY]&&A[z.a.CURRENCY_A]&&A[z.a.CURRENCY_B]||(k=null!==(S=k)&&void 0!==S?S:"Enter an amount"),{pair:m,parsedAmounts:A,error:k}}(null!==je&&void 0!==je?je:void 0,null!==Oe&&void 0!==Oe?Oe:void 0),Te=ge.pair,Ue=ge.parsedAmounts,Ye=ge.error,Ne=function(){var e=Object(D.b)();return{onUserInput:Object(d.useCallback)((function(t,n){e(Object(z.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,_e=!Ye,ke=Object(d.useState)(!1),Se=Object(l.a)(ke,2),Le=Se[0],Ae=Se[1],Pe=Object(d.useState)(!1),De=Object(l.a)(Pe,2),Be=De[0],qe=De[1],Qe=Object(d.useState)(""),Ve=Object(l.a)(Qe,2),ze=Ve[0],Me=Ve[1],Fe=Object(Y.a)(),He=Object(H.k)(),We=Object(l.a)(He,1)[0],Ge=(Z={},Object(o.a)(Z,z.a.LIQUIDITY_PERCENT,Ue[z.a.LIQUIDITY_PERCENT].equalTo("0")?"0":Ue[z.a.LIQUIDITY_PERCENT].lessThan(new j.g("1","100"))?"<1":Ue[z.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)(Z,z.a.LIQUIDITY,Ie===z.a.LIQUIDITY?we:null!==(a=null===(s=Ue[z.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==a?a:""),Object(o.a)(Z,z.a.CURRENCY_A,Ie===z.a.CURRENCY_A?we:null!==(u=null===(F=Ue[z.a.CURRENCY_A])||void 0===F?void 0:F.toSignificant(6))&&void 0!==u?u:""),Object(o.a)(Z,z.a.CURRENCY_B,Ie===z.a.CURRENCY_B?we:null!==(K=null===(X=Ue[z.a.CURRENCY_B])||void 0===X?void 0:X.toSignificant(6))&&void 0!==K?K:""),Z),Je=null===($=Ue[z.a.LIQUIDITY_PERCENT])||void 0===$?void 0:$.equalTo(new j.g("1")),Ke=Object(U.j)(null===Te||void 0===Te||null===(ee=Te.liquidityToken)||void 0===ee?void 0:ee.address),Xe=Object(d.useState)(null),Ze=Object(l.a)(Xe,2),$e=Ze[0],et=Ze[1],tt=Object(A.b)(Ue[z.a.LIQUIDITY],w.u),nt=Object(l.a)(tt,2),it=nt[0],at=nt[1];function ct(){return(ct=Object(r.a)(c.a.mark((function e(){var t,n,i,a,r,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ke&&Te&&pe&&Fe){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=Ue[z.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,Ke.nonces(xe);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],a={name:"Glide LPs",version:"1",chainId:me,verifyingContract:Te.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:xe,spender:w.u,value:t.raw.toString(),nonce:n.toHexString(),deadline:Fe.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:a,primaryType:"Permit",message:o}),pe.send("eth_signTypedData_v4",[xe,l]).then(b.splitSignature).then((function(e){et({v:e.v,r:e.r,s:e.s,deadline:Fe.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&at()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var rt=Object(d.useCallback)((function(e,t){return et(null),Ne(e,t)}),[Ne]),ot=Object(d.useCallback)((function(e){return rt(z.a.LIQUIDITY,e)}),[rt]),lt=Object(d.useCallback)((function(e){return rt(z.a.CURRENCY_A,e)}),[rt]),st=Object(d.useCallback)((function(e){return rt(z.a.CURRENCY_B,e)}),[rt]),dt=Object(N.d)();function ut(){return bt.apply(this,arguments)}function bt(){return(bt=Object(r.a)(c.a.mark((function e(){var t,n,a,r,l,s,d,u,b,O,x,m,p,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(me&&pe&&xe&&Fe){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=Ue[z.a.CURRENCY_A],a=Ue[z.a.CURRENCY_B],n&&a){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(k.g)(me,pe,xe),t={},Object(o.a)(t,z.a.CURRENCY_A,Object(k.c)(n,We)[0]),Object(o.a)(t,z.a.CURRENCY_B,Object(k.c)(a,We)[0]),l=t,je&&Oe){e.next=9;break}throw new Error("missing tokens");case 9:if(s=Ue[z.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=Oe===j.d,u=je===j.d||d,fe&&ye){e.next=16;break}throw new Error("could not wrap");case 16:if(it!==A.a.APPROVED){e.next=20;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],O=[d?fe.address:ye.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),xe,Fe.toHexString()]):(b=["removeLiquidity"],O=[fe.address,ye.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),xe,Fe.toHexString()]),e.next=25;break;case 20:if(null===$e){e.next=24;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],O=[d?fe.address:ye.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),xe,$e.deadline,!1,$e.v,$e.r,$e.s]):(b=["removeLiquidityWithPermit"],O=[fe.address,ye.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),xe,$e.deadline,!1,$e.v,$e.r,$e.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(b.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(O)).then(k.b).catch((function(t){console.error("estimateGas failed",e,O,t)}))})));case 27:if(x=e.sent,-1!==(m=x.findIndex((function(e){return v.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=b[m],h=x[m],qe(!0),e.next=38,r[p].apply(r,Object(i.a)(O).concat([{gasLimit:h}])).then((function(e){var t,n;qe(!1),dt(e,{summary:"Remove ".concat(null===(t=Ue[z.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===je||void 0===je?void 0:je.symbol," and ").concat(null===(n=Ue[z.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol)}),Me(e.hash)})).catch((function(e){qe(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jt(){var e,t;return Object(G.jsxs)(m.a,{gap:"md",children:[Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.wb,{fontSize:"24px",children:null===(e=Ue[z.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(I.a,{currency:je,size:"24px"}),Object(G.jsx)(O.wb,{fontSize:"24px",ml:"10px",children:null===je||void 0===je?void 0:je.symbol})]})]}),Object(G.jsx)(y.c,{children:Object(G.jsx)(O.a,{width:"16px"})}),Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.wb,{fontSize:"24px",children:null===(t=Ue[z.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(I.a,{currency:Oe,size:"24px"}),Object(G.jsx)(O.wb,{fontSize:"24px",ml:"10px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]})]}),Object(G.jsx)(O.wb,{small:!0,textAlign:"left",pt:"12px",children:Re("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:We/100})})]})}function Ot(){var e,t,n;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.wb,{children:Re("%assetA%/%assetB% Burned",{assetA:null!==(e=null===je||void 0===je?void 0:je.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==t?t:""})}),Object(G.jsxs)(y.c,{children:[Object(G.jsx)(I.b,{currency0:je,currency1:Oe,margin:!0}),Object(G.jsx)(O.wb,{children:null===(n=Ue[z.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),Te&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.wb,{children:Re("Price")}),Object(G.jsxs)(O.wb,{children:["1 ",null===je||void 0===je?void 0:je.symbol," = ",fe?Te.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(y.b,{children:[Object(G.jsx)("div",{}),Object(G.jsxs)(O.wb,{children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," = ",ye?Te.priceOf(ye).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]})]}),Object(G.jsx)(O.l,{disabled:!(it===A.a.APPROVED||null!==$e),onClick:ut,children:Re("Confirm")})]})}var vt=Re("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(te=null===(ne=Ue[z.a.CURRENCY_A])||void 0===ne?void 0:ne.toSignificant(6))&&void 0!==te?te:"",symbolA:null!==(ie=null===je||void 0===je?void 0:je.symbol)&&void 0!==ie?ie:"",amountB:null!==(ae=null===(ce=Ue[z.a.CURRENCY_B])||void 0===ce?void 0:ce.toSignificant(6))&&void 0!==ae?ae:"",symbolB:null!==(re=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==re?re:""}),xt=Object(d.useCallback)((function(e){rt(z.a.LIQUIDITY_PERCENT,e.toString())}),[rt]),mt=je===j.d||Oe===j.d,pt=Boolean(me&&(je&&Object(j.o)(j.n[me],je)||Oe&&Object(j.o)(j.n[me],Oe))),ht=Object(d.useCallback)((function(e){be&&Object(S.a)(e)===be?se.push("/remove/".concat(Object(S.a)(e),"/").concat(ue)):se.push("/remove/".concat(Object(S.a)(e),"/").concat(be))}),[ue,be,se]),Ct=Object(d.useCallback)((function(e){ue&&Object(S.a)(e)===ue?se.push("/remove/".concat(be,"/").concat(Object(S.a)(e))):se.push("/remove/".concat(ue,"/").concat(Object(S.a)(e)))}),[ue,be,se]),ft=Object(d.useCallback)((function(){et(null),ze&&rt(z.a.LIQUIDITY_PERCENT,"0"),Me("")}),[rt,ze]),yt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),a=Object(l.a)(i,2),c=a[0],r=a[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[c,s]}(Number.parseInt(Ue[z.a.LIQUIDITY_PERCENT].toFixed(0)),xt),Rt=Object(l.a)(yt,2),Et=Rt[0],It=Rt[1],wt=Object(O.Nb)(Object(G.jsx)(p.c,{title:Re("You will receive"),customOnDismiss:ft,attemptingTxn:Be,hash:ze||"",content:function(){return Object(G.jsx)(p.a,{topContent:jt,bottomContent:Ot})},pendingText:vt}),!0,!0,"removeLiquidityModal"),gt=Object(l.a)(wt,1)[0];return Object(G.jsxs)(W.a,{children:[Object(G.jsxs)(f.a,{children:[Object(G.jsx)(f.b,{backTo:"/pool",title:Re("Remove %assetA%-%assetB% liquidity",{assetA:null!==(oe=null===je||void 0===je?void 0:je.symbol)&&void 0!==oe?oe:"",assetB:null!==(le=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==le?le:""}),subtitle:"To receive ".concat(null===je||void 0===je?void 0:je.symbol," and ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol),noConfig:!0}),Object(G.jsxs)(O.q,{children:[Object(G.jsxs)(m.a,{gap:"20px",children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.wb,{children:Re("Amount")}),Object(G.jsx)(O.l,{variant:"text",scale:"sm",onClick:function(){return Ae(!Le)},children:Re(Le?"Simple":"Detailed")})]}),!Le&&Object(G.jsxs)(J,{children:[Object(G.jsxs)(O.wb,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Ge[z.a.LIQUIDITY_PERCENT],"%"]}),Object(G.jsx)(O.rb,{name:"lp-amount",min:0,max:100,value:Et,onValueChanged:function(e){return It(Math.ceil(e))},mb:"16px"}),Object(G.jsxs)(O.L,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(G.jsx)(O.l,{variant:"tertiary",scale:"sm",onClick:function(){return rt(z.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(G.jsx)(O.l,{variant:"tertiary",scale:"sm",onClick:function(){return rt(z.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(G.jsx)(O.l,{variant:"tertiary",scale:"sm",onClick:function(){return rt(z.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(G.jsx)(O.l,{variant:"tertiary",scale:"sm",onClick:function(){return rt(z.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!Le&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(m.b,{children:Object(G.jsx)(O.c,{color:"textSubtle",width:"24px",my:"16px"})}),Object(G.jsxs)(m.a,{gap:"10px",children:[Object(G.jsx)(O.wb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("You will receive")}),Object(G.jsxs)(E.c,{children:[Object(G.jsxs)(O.L,{justifyContent:"space-between",mb:"8px",children:[Object(G.jsxs)(O.L,{children:[Object(G.jsx)(I.a,{currency:je}),Object(G.jsx)(O.wb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===je||void 0===je?void 0:je.symbol})]}),Object(G.jsx)(O.wb,{small:!0,children:Ge[z.a.CURRENCY_A]||"-"})]}),Object(G.jsxs)(O.L,{justifyContent:"space-between",children:[Object(G.jsxs)(O.L,{children:[Object(G.jsx)(I.a,{currency:Oe}),Object(G.jsx)(O.wb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]}),Object(G.jsx)(O.wb,{small:!0,children:Ge[z.a.CURRENCY_B]||"-"})]}),me&&(pt||mt)?Object(G.jsx)(y.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:mt?Object(G.jsx)(_.a,{to:"/remove/".concat(je===j.d?j.n[me].address:ue,"/").concat(Oe===j.d?j.n[me].address:be),children:Re("Receive WELA")}):pt?Object(G.jsx)(_.a,{to:"/remove/".concat(je&&Object(j.o)(je,j.n[me])?"ELA":ue,"/").concat(Oe&&Object(j.o)(Oe,j.n[me])?"ELA":be),children:Re("Receive ELA")}):null}):null]})]})]}),Le&&Object(G.jsxs)(O.i,{my:"16px",children:[Object(G.jsx)(h.a,{value:Ge[z.a.LIQUIDITY],onUserInput:ot,onMax:function(){rt(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,disableCurrencySelect:!0,currency:null===Te||void 0===Te?void 0:Te.liquidityToken,pair:Te,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.c,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Ge[z.a.CURRENCY_A],onUserInput:lt,onMax:function(){return rt(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,currency:je,label:Re("Output"),onCurrencySelect:ht,id:"remove-liquidity-tokena"}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.a,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Ge[z.a.CURRENCY_B],onUserInput:st,onMax:function(){return rt(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,currency:Oe,label:Re("Output"),onCurrencySelect:Ct,id:"remove-liquidity-tokenb"})]}),Te&&Object(G.jsxs)(m.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(G.jsx)(O.wb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("Prices")}),Object(G.jsxs)(E.c,{children:[Object(G.jsxs)(O.L,{justifyContent:"space-between",children:[Object(G.jsxs)(O.wb,{small:!0,color:"textSubtle",children:["1 ",null===je||void 0===je?void 0:je.symbol," ="]}),Object(G.jsxs)(O.wb,{small:!0,children:[fe?Te.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(O.L,{justifyContent:"space-between",children:[Object(G.jsxs)(O.wb,{small:!0,color:"textSubtle",children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," ="]}),Object(G.jsxs)(O.wb,{small:!0,children:[ye?Te.priceOf(ye).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]})]})]}),Object(G.jsx)(O.i,{position:"relative",mt:"16px",children:xe?Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.l,{variant:it===A.a.APPROVED||null!==$e?"success":"primary",onClick:function(){return ct.apply(this,arguments)},disabled:it!==A.a.NOT_APPROVED||null!==$e,width:"100%",mr:"0.5rem",children:it===A.a.PENDING?Object(G.jsx)(P.a,{children:Re("Enabling")}):it===A.a.APPROVED||null!==$e?Re("Enabled"):Re("Enable")}),Object(G.jsx)(O.l,{variant:!_e&&Ue[z.a.CURRENCY_A]&&Ue[z.a.CURRENCY_B]?"danger":"primary",onClick:function(){gt()},width:"100%",disabled:!_e||null===$e&&it!==A.a.APPROVED,children:Ye||Re("Remove")})]}):Object(G.jsx)(R.a,{})})]})]}),Te?Object(G.jsx)(m.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(G.jsx)(C.a,{showUnwrapped:pt,pair:Te})}):null]})}},814:function(e,t,n){"use strict";var i,a=n(10),c=n(68),r=n(4),o=Object(r.e)(c.a)(i||(i=Object(a.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o}}]);
//# sourceMappingURL=8.ec61bd70.chunk.js.map