(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[1781],{1781:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return k}});var a=function(){var t=this,r=t._self._c;return r("main",{staticClass:"validation d-flex flex-column"},[!t.allowExternalAccess&&t.isExternal?r("b-alert",{attrs:{show:""}},[t._v(t._s(t.$t("errors.noExternalAccess")))]):t.error?r("ErrorAlert",{attrs:{url:t.url,description:t.errorDescription,id:t.errorId}}):t.internalError?r("ErrorAlert",{attrs:{url:t.url,description:t.internalError.message}}):t.loading||t.working?r("Loading",{attrs:{stretch:""}}):t.report?r("section",[r("h2",[t._v(t._s(t.$t("source.validationReport.title")))]),r("b-alert",{attrs:{variant:"info",show:""}},[t._v(t._s(t.$t("source.validationReport.disclaimer")))]),r("b-row",{staticClass:"stac-id"},[r("b-col",{attrs:{cols:"4"}},[t._v(t._s(t.$t("source.id")))]),r("b-col",[r("code",[t._v(t._s(t.report.id))])])],1),r("b-row",{staticClass:"result"},[r("b-col",{attrs:{cols:"4"}},[t._v(t._s(t.$t("source.validationReport.result")))]),r("b-col",[t.report.valid?r("span",{staticClass:"text-success"},[t._v(t._s(t.$t("source.valid")))]):r("span",{staticClass:"text-danger"},[t._v(t._s(t.$t("source.invalid")))])])],1),r("hr",{staticClass:"my-4"}),r("b-card-group",{staticClass:"results",attrs:{columns:""}},[r("ValidationResult",{attrs:{id:"core",errors:t.report.results.core,warnings:t.report.messages,locale:t.locale,context:t.report}}),t._l(t.report.results.extensions,(function(e,a){return r("ValidationResult",{key:a,attrs:{id:a,errors:e,locale:t.locale,context:t.report}})}))],2)],1):r("ErrorAlert",{attrs:{description:t.$t("errors.default")}})],1)},s=[],i=e(95353),n=e(80287),o=e.n(n),l=e(79873),c=e(31831),u=function(){var t=this,r=t._self._c;return r("b-card",{attrs:{"no-body":""}},[r("b-card-header",[r(t.titleComponent,{tag:"component",staticClass:"name mr-1",attrs:{title:t.id}},[t._v(t._s(t.name))]),t.version?r("b-badge",{attrs:{variant:"primary ml-1"}},[t._v(t._s(t.version))]):t._e(),t.isCore?t._e():r("b-badge",{attrs:{variant:"dark ml-1"}},[t._v(t._s(t.$t("source.extension")))])],1),r("b-list-group",{attrs:{flush:""}},[t.errors.length>0?t._l(t.localizedErrors,(function(e,a){return r("b-list-group-item",{key:a,attrs:{variant:"danger"}},[t._v(" "+t._s(t.makeAjvErrorMessage(e))+" ")])})):t._e(),t.hasWarnings?t._l(t.warnings,(function(e,a){return r("b-list-group-item",{key:a,attrs:{variant:"warning"}},[t._v(" "+t._s(t.makeAjvErrorMessage(e))+" ")])})):t._e(),0!==t.errors.length||t.hasWarnings?t._e():r("b-list-group-item",{attrs:{variant:"success"}},[t._v(" "+t._s(t.$t("source.valid"))+" ")])],2)],1)},d=[],p=e(43580),h=e(55038),v=e(84193),g=e.n(v),f=e(2566);const b=/\/(v?\d+\.\d+[^/]+)(\/|$)/;var m={name:"ValidationResult",components:{BListGroup:p.M,BListGroupItem:h.d},props:{id:{type:String,required:!0},errors:{type:Array,required:!0},warnings:{type:Array,default:null},locale:{type:Function,default:null},context:{type:Object,required:!0}},computed:{titleComponent(){return this.isCore?"span":"code"},localizedErrors(){return"function"!==typeof this.locale||this.locale(this.errors),this.errors},hasWarnings(){return Array.isArray(this.warnings)&&this.warnings.length>0},isCore(){return"core"===this.id},type(){switch(this.context.type){case"Feature":return this.$tc("stacItem");case"Catalog":return this.$tc("stacCatalog");case"Collection":return this.$tc("stacCollection");default:return this.context.type}},name(){return this.isCore?this.type:this.id.startsWith("https://stac-extensions.github.io/")?g()(this.id).directory().replace(b,"/").replace(/\//g," ").trim():this.id.replace(/^\w+:\/\//,"").replace(/(\.github\.io|raw\.githubusercontent\.com)\/?/,"").replace(/\/json-schema/,"").replace(/\/[^/]+\.json$/,"").replace(b,"")},version(){if(this.isCore)return this.context.version;let t=this.id.match(b);return t?t[1]:null}},methods:{makeAjvErrorMessage(t){let r=t.message;if(f.Ay.isObject(t.params)&&Object.keys(t.params).length>0){let e=Object.entries(t.params).map((([t,r])=>{let e;const a=`source.validationParams.${t}`;return e=this.$te(a)?this.$t(a):t.replace(/([^A-Z]+)([A-Z])/g,"$1 $2").toLowerCase(),`${e}: ${r}`})).join(", ");r+=` (${e})`}return t.instancePath?`${t.instancePath} ${r}`:t.schemaPath?this.$t("messageForSchemaError",{message:r,schemaPath:t.schemaPath}):r||String(t)}}},_=m,y=e(81656),j=(0,y.A)(_,u,d,!1,null,null,null),w=j.exports,C={name:"Validation",components:{ValidationResult:w},mixins:[l.A],props:{path:{type:String,required:!0}},data(){return{working:!0,report:null,internalError:null,locale:null}},computed:{...(0,i.aH)(["data","uiLanguage"]),variant(){return this.report&&this.report.valid?"success":"danger"}},watch:{data:{immediate:!0,async handler(){await this.validate()}},uiLanguage:{immediate:!0,async handler(t){if(!t)return;const r=(await e(28781)(`./${t}/validation.js`)).default;this.locale=r instanceof Promise?(await r).default:r}}},methods:{async validate(){if(this.working=!0,this.report=null,this.data instanceof c.A)try{this.report=await o()(this.data)}catch(t){this.internalError=t}finally{this.working=!1}}}},$=C,O=(0,y.A)($,a,s,!1,null,"0cbf5b47",null),k=O.exports},55038:function(t,r,e){"use strict";e.d(r,{d:function(){return _}});var a=e(2448),s=e(58722),i=e(49800),n=e(80072),o=e(17079),l=e(71402),c=e(91671),u=e(1340),d=e(37097),p=e(66344);function h(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,a)}return e}function v(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?h(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function g(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var f=["a","router-link","button","b-link"],b=(0,c.cJ)(p.xk,["event","routerTag"]);delete b.href.default,delete b.to.default;var m=(0,u.sC)((0,c.di)(v(v({},b),{},{action:(0,u.Yg)(n.Ye,!1),button:(0,u.Yg)(n.Ye,!1),tag:(0,u.Yg)(n.vq,"div"),variant:(0,u.Yg)(n.vq)})),i.jA),_=(0,a.X$)({name:i.jA,functional:!0,props:m,render:function(t,r){var e,a=r.props,i=r.data,n=r.children,c=a.button,h=a.variant,v=a.active,m=a.disabled,_=(0,d.PJ)(a),y=c?"button":_?p.zJ:a.tag,j=!!(a.action||_||c||(0,o.Xk)(f,a.tag)),w={},C={};return(0,l.dz)(y,"button")?(i.attrs&&i.attrs.type||(w.type="button"),a.disabled&&(w.disabled=!0)):C=(0,u.YL)(b,a),t(y,(0,s.L)(i,{attrs:w,props:C,staticClass:"list-group-item",class:(e={},g(e,"list-group-item-".concat(h),h),g(e,"list-group-item-action",j),g(e,"active",v),g(e,"disabled",m),e)}),n)}})},43580:function(t,r,e){"use strict";e.d(r,{M:function(){return d}});var a=e(2448),s=e(58722),i=e(49800),n=e(80072),o=e(46710),l=e(1340);function c(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var u=(0,l.sC)({flush:(0,l.Yg)(n.Ye,!1),horizontal:(0,l.Yg)(n.iF,!1),tag:(0,l.Yg)(n.vq,"div")},i.l$),d=(0,a.X$)({name:i.l$,functional:!0,props:u,render:function(t,r){var e=r.props,a=r.data,i=r.children,n=""===e.horizontal||e.horizontal;n=!e.flush&&n;var l={staticClass:"list-group",class:c({"list-group-flush":e.flush,"list-group-horizontal":!0===n},"list-group-horizontal-".concat(n),(0,o.Kg)(n))};return t(e.tag,(0,s.L)(a,l),i)}})},28781:function(t,r,e){var a={"./de-CH/validation.js":[75270,5270],"./de/validation.js":[62816,2816],"./en-GB/validation.js":[6492,6492],"./en/validation.js":[98552,8552],"./es/validation.js":[35893,5893],"./fr-CA/validation.js":[38228,8228],"./fr-CH/validation.js":[82605,4986],"./fr/validation.js":[33129,3129],"./it-CH/validation.js":[63048,3048],"./it/validation.js":[66346,6346],"./ja/validation.js":[14826,4826],"./ro/validation.js":[90944,944]};function s(t){if(!e.o(a,t))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=a[t],s=r[0];return e.e(r[1]).then((function(){return e(s)}))}s.keys=function(){return Object.keys(a)},s.id=28781,t.exports=s}}]);
//# sourceMappingURL=1781.04a63343.js.map