import{c as he,a as p,h as H,d as pe,o as we,H as _e,w as b,v as ot,e as $e,g as ye,n as j,f as _,l as M,s as ze,i as rt,j as at,k as lt,P as it,m as nt,p as ut,q as st,r as U,t as ae,u as Se,x as le,y as me,z as ie,A as dt,B as ne,C as P,D as ct,E as xe,F as ft,_ as vt,G as mt,I as Le,J as Ee,K as ht,L as V,M as L,N as I,Q as pt,O as wt,R as ue,S as yt,T as bt,U as gt,V as Ct}from"./index.20ac43b0.js";import{g as qt,a as Tt,h as kt,Q as _t,b as St,c as xt}from"./QLayout.ac5b22d9.js";import{u as Lt,a as Et}from"./use-dark.c5a5aa1a.js";import{u as Bt}from"./user.a8999611.js";import"./axios.6cf50c67.js";var Mt=he({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const l=p(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>H("div",{class:l.value},pe(o.default))}}),Vt=he({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const l=p(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>H("div",{class:l.value,role:"toolbar"},pe(o.default))}});function Dt(e,o,l){let u;function t(){u!==void 0&&(_e.remove(u),u=void 0)}return we(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){u={condition:()=>l.value===!0,handler:o},_e.add(u)}}}const Pt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},At=["beforeShow","show","beforeHide","hide"];function Ot({showing:e,canShow:o,hideOnRouteChange:l,handleShow:u,handleHide:t,processOnMount:a}){const n=ye(),{props:d,emit:s,proxy:f}=n;let i;function q(v){e.value===!0?m(v):w(v)}function w(v){if(d.disable===!0||v!==void 0&&v.qAnchorHandled===!0||o!==void 0&&o(v)!==!0)return;const S=d["onUpdate:modelValue"]!==void 0;S===!0&&(s("update:modelValue",!0),i=v,j(()=>{i===v&&(i=void 0)})),(d.modelValue===null||S===!1)&&y(v)}function y(v){e.value!==!0&&(e.value=!0,s("beforeShow",v),u!==void 0?u(v):s("show",v))}function m(v){if(d.disable===!0)return;const S=d["onUpdate:modelValue"]!==void 0;S===!0&&(s("update:modelValue",!1),i=v,j(()=>{i===v&&(i=void 0)})),(d.modelValue===null||S===!1)&&k(v)}function k(v){e.value!==!1&&(e.value=!1,s("beforeHide",v),t!==void 0?t(v):s("hide",v))}function g(v){d.disable===!0&&v===!0?d["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):v===!0!==e.value&&(v===!0?y:k)(i)}b(()=>d.modelValue,g),l!==void 0&&ot(n)===!0&&b(()=>f.$route.fullPath,()=>{l.value===!0&&e.value===!0&&m()}),a===!0&&$e(()=>{g(d.modelValue)});const h={show:w,hide:m,toggle:q};return Object.assign(f,h),h}let F=0,se,de,W,ce=!1,Be,Me,Ve,D=null;function Ht(e){$t(e)&&ze(e)}function $t(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=rt(e),l=e.shiftKey&&!e.deltaX,u=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||u?e.deltaY:e.deltaX;for(let a=0;a<o.length;a++){const n=o[a];if(kt(n,u))return u?t<0&&n.scrollTop===0?!0:t>0&&n.scrollTop+n.clientHeight===n.scrollHeight:t<0&&n.scrollLeft===0?!0:t>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function De(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Y(e){ce!==!0&&(ce=!0,requestAnimationFrame(()=>{ce=!1;const{height:o}=e.target,{clientHeight:l,scrollTop:u}=document.scrollingElement;(W===void 0||o!==window.innerHeight)&&(W=l-o,document.scrollingElement.scrollTop=u),u>W&&(document.scrollingElement.scrollTop-=Math.ceil((u-W)/8))}))}function Pe(e){const o=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:u,overflowX:t}=window.getComputedStyle(o);se=qt(window),de=Tt(window),Be=o.style.left,Me=o.style.top,Ve=window.location.href,o.style.left=`-${se}px`,o.style.top=`-${de}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),u!=="hidden"&&(u==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,_.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Y,M.passiveCapture),window.visualViewport.addEventListener("scroll",Y,M.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",De,M.passiveCapture))}_.is.desktop===!0&&_.is.mac===!0&&window[`${e}EventListener`]("wheel",Ht,M.notPassive),e==="remove"&&(_.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",Y,M.passiveCapture),window.visualViewport.removeEventListener("scroll",Y,M.passiveCapture)):window.removeEventListener("scroll",De,M.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Be,o.style.top=Me,window.location.href===Ve&&window.scrollTo(se,de),W=void 0)}function zt(e){let o="add";if(e===!0){if(F++,D!==null){clearTimeout(D),D=null;return}if(F>1)return}else{if(F===0||(F--,F>0))return;if(o="remove",_.is.ios===!0&&_.is.nativeMobile===!0){D!==null&&clearTimeout(D),D=setTimeout(()=>{Pe(o),D=null},100);return}}Pe(o)}function Ft(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,zt(o))}}}function Wt(){let e=null;const o=ye();function l(){e!==null&&(clearTimeout(e),e=null)}return at(l),we(l),{removeTimeout:l,registerTimeout(u,t){l(),lt(o)===!1&&(e=setTimeout(u,t))}}}const be={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Qt=Object.keys(be);be.all=!0;function Ae(e){const o={};for(const l of Qt)e[l]===!0&&(o[l]=!0);return Object.keys(o).length===0?be:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const Xt=["INPUT","TEXTAREA"];function Oe(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&Xt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function Rt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),it.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function fe(e,o,l){const u=me(e);let t,a=u.left-o.event.x,n=u.top-o.event.y,d=Math.abs(a),s=Math.abs(n);const f=o.direction;f.horizontal===!0&&f.vertical!==!0?t=a<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?t=n<0?"up":"down":f.up===!0&&n<0?(t="up",d>s&&(f.left===!0&&a<0?t="left":f.right===!0&&a>0&&(t="right"))):f.down===!0&&n>0?(t="down",d>s&&(f.left===!0&&a<0?t="left":f.right===!0&&a>0&&(t="right"))):f.left===!0&&a<0?(t="left",d<s&&(f.up===!0&&n<0?t="up":f.down===!0&&n>0&&(t="down"))):f.right===!0&&a>0&&(t="right",d<s&&(f.up===!0&&n<0?t="up":f.down===!0&&n>0&&(t="down")));let i=!1;if(t===void 0&&l===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,i=!0,t==="left"||t==="right"?(u.left-=a,d=0,a=0):(u.top-=n,s=0,n=0)}return{synthetic:i,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:u,direction:t,isFirst:o.event.isFirst,isFinal:l===!0,duration:Date.now()-o.event.time,distance:{x:d,y:s},offset:{x:a,y:n},delta:{x:u.left-o.event.lastX,y:u.top-o.event.lastY}}}}let Ut=0;var ve=nt({name:"touch-pan",beforeMount(e,{value:o,modifiers:l}){if(l.mouse!==!0&&_.has.touch!==!0)return;function u(a,n){l.mouse===!0&&n===!0?ze(a):(l.stop===!0&&le(a),l.prevent===!0&&Se(a))}const t={uid:"qvtp_"+Ut++,handler:o,modifiers:l,direction:Ae(l),noop:ut,mouseStart(a){Oe(a,t)&&st(a)&&(U(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Oe(a,t)){const n=a.target;U(t,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,n){if(_.is.firefox===!0&&ae(e,!0),t.lastEvt=a,n===!0||l.stop===!0){if(t.direction.all!==!0&&(n!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const f=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Se(f),a.cancelBubble===!0&&le(f),Object.assign(f,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:f}}le(a)}const{left:d,top:s}=me(a);t.event={x:d,y:s,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:s}},move(a){if(t.event===void 0)return;const n=me(a),d=n.left-t.event.x,s=n.top-t.event.y;if(d===0&&s===0)return;t.lastEvt=a;const f=t.event.mouse===!0,i=()=>{u(a,f);let y;l.preserveCursor!==!0&&l.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Rt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),f===!0){const k=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{k(),m()},50):k()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:y,synthetic:m}=fe(a,t,!1);y!==void 0&&(t.handler(y)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=y.position.left,t.event.lastY=y.position.top,t.event.lastDir=m===!0?void 0:y.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||f===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const q=Math.abs(d),w=Math.abs(s);q!==w&&(t.direction.horizontal===!0&&q>w||t.direction.vertical===!0&&q<w||t.direction.up===!0&&q<w&&s<0||t.direction.down===!0&&q<w&&s>0||t.direction.left===!0&&q>w&&d<0||t.direction.right===!0&&q>w&&d>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,n){if(t.event!==void 0){if(ie(t,"temp"),_.is.firefox===!0&&ae(e,!1),n===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(fe(a===void 0?t.lastEvt:a,t).payload);const{payload:d}=fe(a===void 0?t.lastEvt:a,t,!0),s=()=>{t.handler(d)};t.styleCleanup!==void 0?t.styleCleanup(s):s()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";U(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}_.has.touch===!0&&U(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchpan;l!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&l.end(),l.handler=o.value),l.direction=Ae(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ie(o,"main"),ie(o,"temp"),_.is.firefox===!0&&ae(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function N(e,o,l){return l<=o?o:Math.min(l,Math.max(o,e))}const He=150;var Yt=he({name:"QDrawer",inheritAttrs:!1,props:{...Pt,...Lt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...At,"onLayout","miniState"],setup(e,{slots:o,emit:l,attrs:u}){const t=ye(),{proxy:{$q:a}}=t,n=Et(e,a),{preventBodyScroll:d}=Ft(),{registerTimeout:s,removeTimeout:f}=Wt(),i=dt(ft,ne);if(i===ne)return console.error("QDrawer needs to be child of QLayout"),ne;let q,w=null,y;const m=P(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),k=p(()=>e.mini===!0&&m.value!==!0),g=p(()=>k.value===!0?e.miniWidth:e.width),h=P(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),v=p(()=>e.persistent!==!0&&(m.value===!0||Qe.value===!0));function S(r,c){if(Fe(),r!==!1&&i.animate(),T(0),m.value===!0){const C=i.instances[X.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),E(1),i.isContainer.value!==!0&&d(!0)}else E(0),r!==!1&&te(!1);s(()=>{r!==!1&&te(!0),c!==!0&&l("show",r)},He)}function ge(r,c){We(),r!==!1&&i.animate(),E(0),T(A.value*g.value),oe(),c!==!0?s(()=>{l("hide",r)},He):f()}const{show:K,hide:$}=Ot({showing:h,hideOnRouteChange:v,handleShow:S,handleHide:ge}),{addToHistory:Fe,removeFromHistory:We}=Dt(h,$,v),Q={belowBreakpoint:m,hide:$},x=p(()=>e.side==="right"),A=p(()=>(a.lang.rtl===!0?-1:1)*(x.value===!0?1:-1)),Ce=P(0),O=P(!1),G=P(!1),qe=P(g.value*A.value),X=p(()=>x.value===!0?"left":"right"),J=p(()=>h.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:g.value:0),Z=p(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(x.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),z=p(()=>e.overlay===!1&&h.value===!0&&m.value===!1),Qe=p(()=>e.overlay===!0&&h.value===!0&&m.value===!1),Xe=p(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&O.value===!1?" hidden":"")),Re=p(()=>({backgroundColor:`rgba(0,0,0,${Ce.value*.4})`})),Te=p(()=>x.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Ue=p(()=>x.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ye=p(()=>{const r={};return i.header.space===!0&&Te.value===!1&&(Z.value===!0?r.top=`${i.header.offset}px`:i.header.space===!0&&(r.top=`${i.header.size}px`)),i.footer.space===!0&&Ue.value===!1&&(Z.value===!0?r.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(r.bottom=`${i.footer.size}px`)),r}),Ne=p(()=>{const r={width:`${g.value}px`,transform:`translateX(${qe.value}px)`};return m.value===!0?r:Object.assign(r,Ye.value)}),Ie=p(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),je=p(()=>`q-drawer q-drawer--${e.side}`+(G.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(O.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${k.value===!0?"mini":"standard"}`+(Z.value===!0||z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Te.value===!0?" q-drawer--top-padding":""))),Ke=p(()=>{const r=a.lang.rtl===!0?e.side:X.value;return[[ve,et,void 0,{[r]:!0,mouse:!0}]]}),Ge=p(()=>{const r=a.lang.rtl===!0?X.value:e.side;return[[ve,ke,void 0,{[r]:!0,mouse:!0}]]}),Je=p(()=>{const r=a.lang.rtl===!0?X.value:e.side;return[[ve,ke,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ee(){tt(m,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}b(m,r=>{r===!0?(q=h.value,h.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(h.value===!0?(T(0),E(0),oe()):K(!1))}),b(()=>e.side,(r,c)=>{i.instances[c]===Q&&(i.instances[c]=void 0,i[c].space=!1,i[c].offset=0),i.instances[r]=Q,i[r].size=g.value,i[r].space=z.value,i[r].offset=J.value}),b(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ee()}),b(()=>e.behavior+e.breakpoint,ee),b(i.isContainer,r=>{h.value===!0&&d(r!==!0),r===!0&&ee()}),b(i.scrollbarWidth,()=>{T(h.value===!0?0:void 0)}),b(J,r=>{B("offset",r)}),b(z,r=>{l("onLayout",r),B("space",r)}),b(x,()=>{T()}),b(g,r=>{T(),re(e.miniToOverlay,r)}),b(()=>e.miniToOverlay,r=>{re(r,g.value)}),b(()=>a.lang.rtl,()=>{T()}),b(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ze(),i.animate())}),b(k,r=>{l("miniState",r)});function T(r){r===void 0?j(()=>{r=h.value===!0?0:g.value,T(A.value*r)}):(i.isContainer.value===!0&&x.value===!0&&(m.value===!0||Math.abs(r)===g.value)&&(r+=A.value*i.scrollbarWidth.value),qe.value=r)}function E(r){Ce.value=r}function te(r){const c=r===!0?"remove":i.isContainer.value!==!0?"add":"";c!==""&&document.body.classList[c]("q-body--drawer-toggle")}function Ze(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),G.value=!0,w=setTimeout(()=>{w=null,G.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function et(r){if(h.value!==!1)return;const c=g.value,C=N(r.distance.x,0,c);if(r.isFinal===!0){C>=Math.min(75,c)===!0?K():(i.animate(),E(0),T(A.value*c)),O.value=!1;return}T((a.lang.rtl===!0?x.value!==!0:x.value)?Math.max(c-C,0):Math.min(0,C-c)),E(N(C/c,0,1)),r.isFirst===!0&&(O.value=!0)}function ke(r){if(h.value!==!0)return;const c=g.value,C=r.direction===e.side,R=(a.lang.rtl===!0?C!==!0:C)?N(r.distance.x,0,c):0;if(r.isFinal===!0){Math.abs(R)<Math.min(75,c)===!0?(i.animate(),E(1),T(0)):$(),O.value=!1;return}T(A.value*R),E(N(1-R/c,0,1)),r.isFirst===!0&&(O.value=!0)}function oe(){d(!1),te(!0)}function B(r,c){i.update(e.side,r,c)}function tt(r,c){r.value!==c&&(r.value=c)}function re(r,c){B("size",r===!0?e.miniWidth:c)}return i.instances[e.side]=Q,re(e.miniToOverlay,g.value),B("space",z.value),B("offset",J.value),e.showIfAbove===!0&&e.modelValue!==!0&&h.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),$e(()=>{l("onLayout",z.value),l("miniState",k.value),q=e.showIfAbove===!0;const r=()=>{(h.value===!0?S:ge)(!1,!0)};if(i.totalWidth.value!==0){j(r);return}y=b(i.totalWidth,()=>{y(),y=void 0,h.value===!1&&e.showIfAbove===!0&&m.value===!1?K(!1):r()})}),we(()=>{y!==void 0&&y(),w!==null&&(clearTimeout(w),w=null),h.value===!0&&oe(),i.instances[e.side]===Q&&(i.instances[e.side]=void 0,B("size",0),B("offset",0),B("space",!1))}),()=>{const r=[];m.value===!0&&(e.noSwipeOpen===!1&&r.push(ct(H("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ke.value)),r.push(xe("div",{ref:"backdrop",class:Xe.value,style:Re.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&h.value===!0,()=>Je.value)));const c=k.value===!0&&o.mini!==void 0,C=[H("div",{...u,key:""+c,class:[Ie.value,u.class]},c===!0?o.mini():pe(o.default))];return e.elevated===!0&&h.value===!0&&C.push(H("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(xe("aside",{ref:"content",class:je.value,style:Ne.value},C,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Ge.value)),H("div",{class:"q-drawer-container"},r)}}});const Nt={components:{},setup(){const e=P(!1),o=Bt(),l=mt();return console.log(l),{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},userStore:o,router:l}}},It={class:"lg:tw-w-9/12 lg:tw-p-3 tw-p-1 tw-mx-auto"},jt={class:"tw-p-2 tw-text-lg tw-font-light hover:tw-text-orange-600 tw-uppercase"},Kt={class:"tw-px-4 tw-pl-12 tw-text-lg"},Gt=I("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1);function Jt(e,o,l,u,t,a){const n=Le("router-link"),d=Le("router-view");return Ee(),ht(_t,{view:"lHh lpR fFf",class:"tw-bg-white"},{default:V(()=>[L(St,{elevated:"",class:"bg-primary text-white"},{default:V(()=>[I("div",It,[L(Vt,null,{default:V(()=>[L(pt,{dense:"",flat:"",round:"",icon:"menu",onClick:u.toggleLeftDrawer},null,8,["onClick"]),L(Mt,{class:"lg:tw-block tw-hidden"},{default:V(()=>[wt(ue(u.router.currentRoute.value.meta.header),1)]),_:1}),(Ee(),yt(gt,null,bt(["main","dashboard","login","register"],s=>L(n,{key:s,to:{name:s}},{default:V(()=>[I("h3",jt,ue(s),1)]),_:2},1032,["to"])),64)),I("div",Kt,ue(u.userStore.user.username),1),L(Ct,null,{default:V(()=>[Gt]),_:1})]),_:1})])]),_:1}),L(Yt,{modelValue:u.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=s=>u.leftDrawerOpen=s),side:"left",bordered:""},null,8,["modelValue"]),L(xt,null,{default:V(()=>[L(d)]),_:1})]),_:1})}var lo=vt(Nt,[["render",Jt]]);export{lo as default};
