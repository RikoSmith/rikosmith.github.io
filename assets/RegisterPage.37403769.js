import{Q as v,a as j}from"./QCard.8f58c253.js";import{Q as J}from"./QPage.52a3ba39.js";import{C as g,a as d,h as c,af as W,a3 as X,d as Z,ae as ee,g as te,av as b,s as Q,c as se,ag as ae,ab as B,G as le,_ as z,J as O,K as U,L as n,M as o,O as w,Q as y,an as $,D as oe,aw as ne,N as m,ax as re,I as ue}from"./index.20ac43b0.js";import{b as ie,c as de,u as ce,a as R,Q as me}from"./use-quasar.c61a4c77.js";import{a as fe,u as we}from"./use-dark.c5a5aa1a.js";import{p as T,u as pe,e as ve}from"./validation_rules.f354a5fa.js";import{u as ge}from"./user.a8999611.js";import"./axios.6cf50c67.js";function be(t,l){const e=g(null),u=d(()=>t.disable===!0?null:c("span",{ref:e,class:"no-outline",tabindex:-1}));function r(i){const a=l.value;i!==void 0&&i.type.indexOf("key")===0?a!==null&&document.activeElement!==a&&a.contains(document.activeElement)===!0&&a.focus():e.value!==null&&(i===void 0||a!==null&&a.contains(i.target)===!0)&&e.value.focus()}return{refocusTargetEl:u,refocusTarget:r}}var he={xs:30,sm:35,md:40,lg:50,xl:60};const xe={...we,...ee,...ie,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:t=>t==="tf"||t==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},_e=["update:modelValue"];function ke(t,l){const{props:e,slots:u,emit:r,proxy:i}=te(),{$q:a}=i,x=fe(e,a),_=g(null),{refocusTargetEl:k,refocusTarget:V}=be(e,_),F=W(e,he),h=d(()=>e.val!==void 0&&Array.isArray(e.modelValue)),S=d(()=>{const s=b(e.val);return h.value===!0?e.modelValue.findIndex(p=>b(p)===s):-1}),f=d(()=>h.value===!0?S.value>-1:b(e.modelValue)===b(e.trueValue)),C=d(()=>h.value===!0?S.value===-1:b(e.modelValue)===b(e.falseValue)),q=d(()=>f.value===!1&&C.value===!1),N=d(()=>e.disable===!0?-1:e.tabindex||0),A=d(()=>`q-${t} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(x.value===!0?` q-${t}--dark`:"")+(e.dense===!0?` q-${t}--dense`:"")+(e.leftLabel===!0?" reverse":"")),E=d(()=>{const s=f.value===!0?"truthy":C.value===!0?"falsy":"indet",p=e.color!==void 0&&(e.keepColor===!0||(t==="toggle"?f.value===!0:C.value!==!0))?` text-${e.color}`:"";return`q-${t}__inner relative-position non-selectable q-${t}__inner--${s}${p}`}),D=d(()=>{const s={type:"checkbox"};return e.name!==void 0&&Object.assign(s,{".checked":f.value,"^checked":f.value===!0?"checked":void 0,name:e.name,value:h.value===!0?e.val:e.trueValue}),s}),M=de(D),K=d(()=>{const s={tabindex:N.value,role:t==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":q.value===!0?"mixed":f.value===!0?"true":"false"};return e.disable===!0&&(s["aria-disabled"]="true"),s});function I(s){s!==void 0&&(Q(s),V(s)),e.disable!==!0&&r("update:modelValue",L(),s)}function L(){if(h.value===!0){if(f.value===!0){const s=e.modelValue.slice();return s.splice(S.value,1),s}return e.modelValue.concat([e.val])}if(f.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(C.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function G(s){(s.keyCode===13||s.keyCode===32)&&Q(s)}function H(s){(s.keyCode===13||s.keyCode===32)&&I(s)}const Y=l(f,q);return Object.assign(i,{toggle:I}),()=>{const s=Y();e.disable!==!0&&M(s,"unshift",` q-${t}__native absolute q-ma-none q-pa-none`);const p=[c("div",{class:E.value,style:F.value,"aria-hidden":"true"},s)];k.value!==null&&p.push(k.value);const P=e.label!==void 0?X(u.default,[e.label]):Z(u.default);return P!==void 0&&p.push(c("div",{class:`q-${t}__label q-anchor--skip`},P)),c("div",{ref:_,class:A.value,...K.value,onClick:I,onKeydown:G,onKeyup:H},p)}}const Ve=c("div",{key:"svg",class:"q-checkbox__bg absolute"},[c("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[c("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),c("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var Ce=se({name:"QCheckbox",props:xe,emits:_e,setup(t){function l(e,u){const r=d(()=>(e.value===!0?t.checkedIcon:u.value===!0?t.indeterminateIcon:t.uncheckedIcon)||null);return()=>r.value!==null?[c("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[c(ae,{class:"q-checkbox__icon",name:r.value})])]:[Ve]}return ke("checkbox",l)}});const ye=B({name:"RegisterForm",setup(){ce();const t=le(),l="tw-text-base tw-text-slate-600 tw-mb-1 tw-rounded-xl",e=g(""),u=g(""),r=g(""),i=g(""),a=g(!1),x=[...T];x.push(V=>V===r.value||"Passwords do not match");const _=ge(),{registerUser:k}=_;return{inputClasses:l,username:e,email:u,password:r,confirm_password:i,tos:a,usernameRules:pe,emailRules:ve,passwordRules:T,confirmPasswordRules:x,router:t,async onSubmit(){if(!a.value)return;await k(e.value,u.value,r.value)&&t.push({path:"/login"})},onReset(){e.value="",u.value="",r.value="",i.value=""}}}}),$e=m("b",null,"Terms and Conditions",-1),Re={class:"tw-text-red-600 tw-text-xs"},Se={class:"tw-flex tw-flex-row tw-justify-center tw-mt-2"};function Ie(t,l,e,u,r,i){return O(),U(j,{class:"tw-mx-auto tw-w-88% tw-p-4 tw-pt-1 tw-rounded-xl tw-shadow-xl tw-shadow-black-200 lg:tw-shadow-none"},{default:n(()=>[o(me,{onSubmit:t.onSubmit,onReset:t.onReset},{default:n(()=>[o(v,{class:"tw-text-xl tw-text-slate-700 tw-justify-items-center tw-text-center lg:tw-text-2xl"},{default:n(()=>[w("Register with")]),_:1}),o(v,{class:"tw-flex tw-flex-row tw-justify-center tw-space-x-3"},{default:n(()=>[o(y,null,{default:n(()=>[w("Facebook")]),_:1}),o(y,null,{default:n(()=>[w("Google")]),_:1}),o(y,null,{default:n(()=>[w("AP")]),_:1})]),_:1}),o(v,{class:"tw-p-2 tw-text-slate-500 tw-justify-items-center tw-text-center lg:tw-text-base"},{default:n(()=>[w("or")]),_:1}),o(v,null,{default:n(()=>[o(R,{outlined:"",class:$(t.inputClasses),type:"text",label:"Username",name:"username",modelValue:t.username,"onUpdate:modelValue":l[0]||(l[0]=a=>t.username=a),rules:t.usernameRules},null,8,["class","modelValue","rules"]),o(R,{outlined:"",type:"email",hint:"Only NU organization emails are accepted",label:"Email",name:"email",class:$(t.inputClasses),modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=a=>t.email=a),rules:t.emailRules},null,8,["class","modelValue","rules"]),o(R,{outlined:"",class:$(t.inputClasses),type:"password",label:"Password",name:"password",modelValue:t.password,"onUpdate:modelValue":l[2]||(l[2]=a=>t.password=a),rules:t.passwordRules},null,8,["class","modelValue","rules"]),o(R,{outlined:"",type:"password",label:"Confirm password",name:"confirm_password",class:$(t.inputClasses),modelValue:t.confirm_password,"onUpdate:modelValue":l[3]||(l[3]=a=>t.confirm_password=a),rules:t.confirmPasswordRules},null,8,["class","modelValue","rules"]),o(Ce,{rules:[a=>a===!0||"You must accept Terms and Conditions"],modelValue:t.tos,"onUpdate:modelValue":l[4]||(l[4]=a=>t.tos=a),class:"tw-text-slate-700"},{default:n(()=>[w("I agree the "),$e]),_:1},8,["rules","modelValue"]),oe(m("p",Re," * You must accept the Terms and Conditions ",512),[[ne,!t.tos]]),m("div",Se,[o(y,{unelevated:"",type:"submit",color:"primary",class:"tw-mx-auto tw-text-white tw-w-full tw-rounded-lg"},{default:n(()=>[w("Sign up")]),_:1})])]),_:1}),o(v,{class:"tw-mx-auto tw-text-center tw-p-0 tw-pb-4 tw-text-slate-700"},{default:n(()=>[w(" Already have an account? "),m("b",null,[m("a",{onClick:l[5]||(l[5]=re(a=>t.router.push({path:"/login"}),["prevent"])),class:"lg:tw-cursor-pointer"},"Sign in")])]),_:1})]),_:1},8,["onSubmit","onReset"])]),_:1})}var qe=z(ye,[["render",Ie]]);const Pe=B({name:"RegisterPage",components:{RegisterForm:qe}}),Qe=m("br",null,null,-1),Te=m("br",null,null,-1),je=m("h1",{class:"tw-leading-relaxed tw-text-3xl tw-font-bold"},"Welcome!",-1),Be=m("p",{class:"tw-text-base"},"This is where the fun begins!",-1),ze={class:"lg:tw-absolute lg:tw-flex lg:tw-items-center lg:tw-h-full lg:tw-w-1/2 lg:tw-p-12 tw-hidden"};function Oe(t,l,e,u,r,i){const a=ue("register-form");return O(),U(J,{class:"row items-center justify-evenly tw-mb-16"},{default:n(()=>[o(j,{class:"tw-w-93% tw-h-1/2 tw-bg-gradient-to-br tw-from-cyan-500 tw-to-indigo-500 tw-z-0 tw-absolute tw-top-4 tw-rounded-lg lg:tw-hidden"},{default:n(()=>[o(v,null,{default:n(()=>[Qe,Te]),_:1}),o(v,{class:"tw-text-white tw-justify-items-center tw-text-center"},{default:n(()=>[je,Be]),_:1})]),_:1}),o(a,{class:"tw-z-1 tw-mt-56 lg:tw-hidden"}),m("div",ze,[o(a,{class:"tw-z-1 tw-mt-56 lg:tw-mt-0 lg:tw-max-w-sm"})])]),_:1})}var Le=z(Pe,[["render",Oe]]);export{Le as default};
