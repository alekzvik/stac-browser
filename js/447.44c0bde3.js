(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[447],{6129:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"links mb-4"},[t.title?n("h2",[t._v(t._s(t.title))]):t._e(),n("ul",t._l(t.links,(function(e,i){return n("li",{key:i},[n("StacLink",{attrs:{data:e,fallbackTitle:function(){return t.fallbackTitle(e)}}})],1)})),0)])},s=[],r=n(8217),a=n(4851),o=n(7637),l={name:"Links",components:{StacLink:r["default"]},props:{title:{type:String,default:null},links:{type:Array,default:()=>[]}},methods:{fallbackTitle(t){let e=t.rel;e in a.links.rel.mapping&&(e=a.links.rel.mapping[e]);let n=o.ZP.titleForHref(t.href);return`${e} (${n})`}}},c=l,u=n(1001),d=(0,u.Z)(c,i,s,!1,null,null,null),h=d.exports},3819:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.formattedData.length>0?n("section",{staticClass:"metadata"},[t.title?n("h2",[t._v(t._s(t.title))]):t._e(),t.formattedData.length>0?n("b-card-group",{class:"count-"+t.formattedData.length,attrs:{columns:""}},t._l(t.formattedData,(function(e){return n("b-card",{key:e.extension,staticClass:"metadata-card",attrs:{"no-body":""}},[n("b-card-title",[e.extension?n("div",{domProps:{innerHTML:t._s(e.label)}}):[t._v(t._s(t.commmonMetadataTitle))]],2),n("section",{staticClass:"border metadata-rows"},t._l(e.properties,(function(e,i){return n("b-row",{key:i},[n("b-col",{staticClass:"label",attrs:{md:"3",title:i},domProps:{innerHTML:t._s(e.label)}}),n("b-col",{staticClass:"value",attrs:{md:"9"},domProps:{innerHTML:t._s(e.formatted)}})],1)})),1)],1)})),1):t._e()],1):t._e()},s=[],r=(n(6699),n(5834)),a=n.n(r),o={name:"Metadata",props:{data:{type:Object,required:!0},type:{type:String,required:!0},context:{type:Object,default:null},ignoreFields:{type:Array,default:()=>[]},title:{type:String,default:"Metadata"},commmonMetadataTitle:{type:String,default:"General"}},computed:{formattedData(){let t=t=>!t.startsWith("_")&&!this.ignoreFields.includes(t);switch(this.type){case"Asset":return a().formatAsset(this.data,this.context,t);case"Link":return a().formatLink(this.data,this.context,t);case"Item":return a().formatItemProperties(this.data,t);case"Collection":case"Catalog":{let e=a().formatCollection(this.data,t),n=a().formatSummaries(this.data,t);return n.forEach((t=>{let n=e.findIndex((e=>t.extension===e.extension));-1!==n?Object.assign(e[n].properties,t.properties):e.push(t)})),e.sort(((t,e)=>t.label.localeCompare(e.label)))}default:return[]}}}},l=o,c=n(1001),u=(0,c.Z)(l,i,s,!1,null,null,null),d=u.exports},1688:function(t,e,n){"use strict";n.d(e,{k:function(){return H}});var i,s=n(144),r=n(4689),a="show",o=n(3935),l=n(3294),c=n(2299),u=n(494),d=n(1440),h=n(8415),f=n(4602),p=n(7040),b=n(451),v=n(3727),m=n(8596),g=n(8280),y=n(9558),w=function(t){(0,d.A_)(t,"height",0),(0,d.bz)((function(){(0,d.nq)(t),(0,d.A_)(t,"height","".concat(t.scrollHeight,"px"))}))},O=function(t){(0,d.jo)(t,"height")},T=function(t){(0,d.A_)(t,"height","auto"),(0,d.A_)(t,"display","block"),(0,d.A_)(t,"height","".concat((0,d.Zt)(t).height,"px")),(0,d.nq)(t),(0,d.A_)(t,"height",0)},x=function(t){(0,d.jo)(t,"height")},_={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},j={enter:w,afterEnter:O,leave:T,afterLeave:x},k={appear:(0,b.pi)(c.U5,!1)},C=s.Z.extend({name:r.gt,functional:!0,props:k,render:function(t,e){var n=e.props,i=e.data,s=e.children;return t("transition",(0,y.b)(i,{props:_,on:j},{props:n}),s)}});function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var A=(0,h.gA)(r.gr,"toggle"),N=(0,h.gA)(r.gr,"request-state"),E=(0,h.J3)(r.gr,"accordion"),I=(0,h.J3)(r.gr,"state"),L=(0,h.J3)(r.gr,"sync-state"),B=(0,f.l)("visible",{type:c.U5,defaultValue:!1}),M=B.mixin,D=B.props,U=B.prop,z=B.event,R=(0,b.y2)((0,p.GE)(P(P(P({},v.N),D),{},{accordion:(0,b.pi)(c.N0),appear:(0,b.pi)(c.U5,!1),isNav:(0,b.pi)(c.U5,!1),tag:(0,b.pi)(c.N0,"div")})),r.gr),H=s.Z.extend({name:r.gr,mixins:[v.t,M,g.Z,m.E],props:R,data:function(){return{show:this[U],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(i={},S(i,U,(function(t){t!==this.show&&(this.show=t)})),S(i,"show",(function(t,e){t!==e&&this.emitState()})),i),created:function(){this.show=this[U]},mounted:function(){var t=this;this.show=this[U],this.listenOnRoot(A,this.handleToggleEvent),this.listenOnRoot(E,this.handleAccordionEvent),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(N,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&o.Qg&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){(0,h.tU)(t,window,"resize",this.handleResize,l.IJ),(0,h.tU)(t,window,"orientationchange",this.handleResize,l.IJ)},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(l.l0)},onAfterEnter:function(){this.transitioning=!1,this.$emit(l.AS)},onLeave:function(){this.transitioning=!0,this.$emit(l.yM)},onAfterLeave:function(){this.transitioning=!1,this.$emit(l.v6)},emitState:function(){var t=this.show,e=this.accordion,n=this.safeId();this.$emit(z,t),this.emitOnRoot(I,n,t),e&&t&&this.emitOnRoot(E,n,e)},emitSync:function(){this.emitOnRoot(L,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=(0,d.pv)(t,a);(0,d.IV)(t,a);var n="block"===(0,d.yD)(t).display;return e&&(0,d.cn)(t,a),n},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===(0,d.yD)(this.$el).display&&(!(0,d.wB)(e,".nav-link,.dropdown-item")&&!(0,d.oq)(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvent:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvent:function(t,e){var n=this.accordion,i=this.show;if(n&&n===e){var s=t===this.safeId();(s&&!i||!s&&i)&&this.toggle()}},handleResize:function(){this.show="block"===(0,d.yD)(this.$el).display}},render:function(t){var e=this.appear,n=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(u.Pq,this.slotScope));return t(C,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[n])}})},1015:function(t,e,n){"use strict";n.d(e,{L:function(){return O}});var i,s,r=n(144),a=n(4689),o=n(3294),l=n(2299),c=n(494),u=n(7040),d=n(451),h=n(3727),f=n(8280),p=n(7100);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g="active",y=o.j7+g,w=(0,d.y2)((0,u.GE)(v(v({},h.N),{},(i={},m(i,g,(0,d.pi)(l.U5,!1)),m(i,"buttonId",(0,d.pi)(l.N0)),m(i,"disabled",(0,d.pi)(l.U5,!1)),m(i,"lazy",(0,d.pi)(l.U5,!1)),m(i,"noBody",(0,d.pi)(l.U5,!1)),m(i,"tag",(0,d.pi)(l.N0,"div")),m(i,"title",(0,d.pi)(l.N0)),m(i,"titleItemClass",(0,d.pi)(l.wA)),m(i,"titleLinkAttributes",(0,d.pi)(l.aR)),m(i,"titleLinkClass",(0,d.pi)(l.wA)),i))),a.W9),O=r.Z.extend({name:a.W9,mixins:[h.t,f.Z],inject:{bvTabs:{default:function(){return{}}}},props:w,data:function(){return{localActive:this[g]&&!this.disabled}},computed:{_isTab:function(){return!0},tabClasses:function(){var t=this.localActive,e=this.disabled;return[{active:t,disabled:e,"card-body":this.bvTabs.card&&!this.noBody},t?this.bvTabs.activeTabClass:null]},controlledBy:function(){return this.buttonId||this.safeId("__BV_tab_button__")},computedNoFade:function(){return!this.bvTabs.fade},computedLazy:function(){return this.bvTabs.lazy||this.lazy}},watch:(s={},m(s,g,(function(t,e){t!==e&&(t?this.activate():this.deactivate()||this.$emit(y,this.localActive))})),m(s,"disabled",(function(t,e){if(t!==e){var n=this.bvTabs.firstTab;t&&this.localActive&&n&&(this.localActive=!1,n())}})),m(s,"localActive",(function(t){this.$emit(y,t)})),s),mounted:function(){this.registerTab()},updated:function(){var t=this.bvTabs.updateButton;t&&this.hasNormalizedSlot(c.A0)&&t(this)},beforeDestroy:function(){this.unregisterTab()},methods:{registerTab:function(){var t=this.bvTabs.registerTab;t&&t(this)},unregisterTab:function(){var t=this.bvTabs.unregisterTab;t&&t(this)},activate:function(){var t=this.bvTabs.activateTab;return!(!t||this.disabled)&&t(this)},deactivate:function(){var t=this.bvTabs.deactivateTab;return!(!t||!this.localActive)&&t(this)}},render:function(t){var e=this.localActive,n=t(this.tag,{staticClass:"tab-pane",class:this.tabClasses,directives:[{name:"show",value:e}],attrs:{role:"tabpanel",id:this.safeId(),"aria-hidden":e?"false":"true","aria-labelledby":this.controlledBy||null},ref:"panel"},[e||!this.computedLazy?this.normalizeSlot():t()]);return t(p.N,{props:{mode:"out-in",noFade:this.computedNoFade}},[n])}})},2996:function(t,e,n){"use strict";n.d(e,{M:function(){return J}});var i=n(1915),s=n(144),r=n(4689),a=n(3935),o=n(3294),l=n(3663),c=n(2299),u=n(494),d=n(1572),h=n(7130),f=n(1440),p=n(8415),b=n(8265),v=n(3284),m=n(3058),g=n(1578),y=n(4602),w=n(3954),O=n(7040),T=n(7147);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=function(t,e,n){if(t=t?t.$el||t:null,!(0,f.kK)(t))return null;if((0,T.Np)("observeDom"))return null;var i=new f.iI((function(t){for(var n=!1,i=0;i<t.length&&!n;i++){var s=t[i],r=s.type,a=s.target;("characterData"===r&&a.nodeType===Node.TEXT_NODE||"attributes"===r||"childList"===r&&(s.addedNodes.length>0||s.removedNodes.length>0))&&(n=!0)}n&&e()}));return i.observe(t,_({childList:!0,subtree:!0},n)),i},C=n(451),$=n(5912),P=n(3727),S=n(8280),A=n(7347),N=n(9558);function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I,L=function(t){return t="left"===t?"start":"right"===t?"end":t,"justify-content-".concat(t)},B=(0,C.y2)({align:(0,C.pi)(c.N0),cardHeader:(0,C.pi)(c.U5,!1),fill:(0,C.pi)(c.U5,!1),justified:(0,C.pi)(c.U5,!1),pills:(0,C.pi)(c.U5,!1),small:(0,C.pi)(c.U5,!1),tabs:(0,C.pi)(c.U5,!1),tag:(0,C.pi)(c.N0,"ul"),vertical:(0,C.pi)(c.U5,!1)},r.$P),M=s.Z.extend({name:r.$P,functional:!0,props:B,render:function(t,e){var n,i=e.props,s=e.data,r=e.children,a=i.tabs,o=i.pills,l=i.vertical,c=i.align,u=i.cardHeader;return t(i.tag,(0,N.b)(s,{staticClass:"nav",class:(n={"nav-tabs":a,"nav-pills":o&&!a,"card-header-tabs":!l&&u&&a,"card-header-pills":!l&&u&&o&&!a,"flex-column":l,"nav-fill":!l&&i.fill,"nav-justified":!l&&i.justified},E(n,L(c),!l&&c),E(n,"small",i.small),n)}),r)}});function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){z(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R=(0,y.l)("value",{type:c.jg}),H=R.mixin,Z=R.props,F=R.prop,K=R.event,W=function(t){return!t.disabled},q=s.Z.extend({name:r.GL,inject:{bvTabs:{default:function(){return{}}}},props:{controls:(0,C.pi)(c.N0),id:(0,C.pi)(c.N0),noKeyNav:(0,C.pi)(c.U5,!1),posInSet:(0,C.pi)(c.jg),setSize:(0,C.pi)(c.jg),tab:(0,C.pi)(),tabIndex:(0,C.pi)(c.jg)},methods:{focus:function(){(0,f.KS)(this.$refs.link)},handleEvent:function(t){if(!this.tab.disabled){var e=t.type,n=t.keyCode,i=t.shiftKey;"click"===e||"keydown"===e&&n===l.m5?((0,p.p7)(t),this.$emit(o.PZ,t)):"keydown"!==e||this.noKeyNav||(-1!==[l.XS,l.Cq,l.QI].indexOf(n)?((0,p.p7)(t),i||n===l.QI?this.$emit(o.Q3,t):this.$emit(o.I$,t)):-1!==[l.RV,l.YO,l.bt].indexOf(n)&&((0,p.p7)(t),i||n===l.bt?this.$emit(o.vA,t):this.$emit(o.zd,t)))}}},render:function(t){var e=this.id,n=this.tabIndex,i=this.setSize,s=this.posInSet,r=this.controls,a=this.handleEvent,o=this.tab,l=o.title,c=o.localActive,d=o.disabled,h=o.titleItemClass,f=o.titleLinkClass,p=o.titleLinkAttributes,b=t(A.we,{staticClass:"nav-link",class:[{active:c&&!d,disabled:d},f,c?this.bvTabs.activeNavItemClass:null],props:{disabled:d},attrs:U(U({},p),{},{id:e,role:"tab",tabindex:n,"aria-selected":c&&!d?"true":"false","aria-setsize":i,"aria-posinset":s,"aria-controls":r}),on:{click:a,keydown:a},ref:"link"},[this.tab.normalizeSlot(u.A0)||l]);return t("li",{staticClass:"nav-item",class:[h],attrs:{role:"presentation"}},[b])}}),V=(0,O.CE)(B,["tabs","isNavBar","cardHeader"]),X=(0,C.y2)((0,O.GE)(U(U(U(U({},P.N),Z),V),{},{activeNavItemClass:(0,C.pi)(c.wA),activeTabClass:(0,C.pi)(c.wA),card:(0,C.pi)(c.U5,!1),contentClass:(0,C.pi)(c.wA),end:(0,C.pi)(c.U5,!1),lazy:(0,C.pi)(c.U5,!1),navClass:(0,C.pi)(c.wA),navWrapperClass:(0,C.pi)(c.wA),noFade:(0,C.pi)(c.U5,!1),noKeyNav:(0,C.pi)(c.U5,!1),noNavStyle:(0,C.pi)(c.U5,!1),tag:(0,C.pi)(c.N0,"div")})),r.x0),J=s.Z.extend({name:r.x0,mixins:[P.t,H,S.Z],provide:function(){return{bvTabs:this}},props:X,data:function(){return{currentTab:(0,w.Z3)(this[F],-1),tabs:[],registeredTabs:[]}},computed:{fade:function(){return!this.noFade},localNavClass:function(){var t=[];return this.card&&this.vertical&&t.push("card-header","h-100","border-bottom-0","rounded-0"),[].concat(t,[this.navClass])}},watch:(I={},z(I,F,(function(t,e){if(t!==e){t=(0,w.Z3)(t,-1),e=(0,w.Z3)(e,0);var n=this.tabs[t];n&&!n.disabled?this.activateTab(n):t<e?this.previousTab():this.nextTab()}})),z(I,"currentTab",(function(t){var e=-1;this.tabs.forEach((function(n,i){i!==t||n.disabled?n.localActive=!1:(n.localActive=!0,e=i)})),this.$emit(K,e)})),z(I,"tabs",(function(t,e){var n=this;(0,m.W)(t.map((function(t){return t[i.X$]})),e.map((function(t){return t[i.X$]})))||this.$nextTick((function(){n.$emit(o.hY,t.slice(),e.slice())}))})),z(I,"registeredTabs",(function(){this.updateTabs()})),I),created:function(){this.$_observer=null},mounted:function(){this.setObserver(!0)},beforeDestroy:function(){this.setObserver(!1),this.tabs=[]},methods:{registerTab:function(t){(0,d.kI)(this.registeredTabs,t)||this.registeredTabs.push(t)},unregisterTab:function(t){this.registeredTabs=this.registeredTabs.slice().filter((function(e){return e!==t}))},setObserver:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,e){var n=function(){t.$nextTick((function(){(0,f.bz)((function(){t.updateTabs()}))}))};this.$_observer=k(this.$refs.content,n,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["id"]})}},getTabs:function(){var t=this.registeredTabs.filter((function(t){return 0===t.$children.filter((function(t){return t._isTab})).length})),e=[];if(a.Qg&&t.length>0){var n=t.map((function(t){return"#".concat(t.safeId())})).join(", ");e=(0,f.a8)(n,this.$el).map((function(t){return t.id})).filter(b.y)}return(0,$.X)(t,(function(t,n){return e.indexOf(t.safeId())-e.indexOf(n.safeId())}))},updateTabs:function(){var t=this.getTabs(),e=t.indexOf(t.slice().reverse().find((function(t){return t.localActive&&!t.disabled})));if(e<0){var n=this.currentTab;n>=t.length?e=t.indexOf(t.slice().reverse().find(W)):t[n]&&!t[n].disabled&&(e=n)}e<0&&(e=t.indexOf(t.find(W))),t.forEach((function(t,n){t.localActive=n===e})),this.tabs=t,this.currentTab=e},getButtonForTab:function(t){return(this.$refs.buttons||[]).find((function(e){return e.tab===t}))},updateButton:function(t){var e=this.getButtonForTab(t);e&&e.$forceUpdate&&e.$forceUpdate()},activateTab:function(t){var e=this.currentTab,n=this.tabs,i=!1;if(t){var s=n.indexOf(t);if(s!==e&&s>-1&&!t.disabled){var r=new h.n(o.ix,{cancelable:!0,vueTarget:this,componentId:this.safeId()});this.$emit(r.type,s,e,r),r.defaultPrevented||(this.currentTab=s,i=!0)}}return i||this[F]===e||this.$emit(K,e),i},deactivateTab:function(t){return!!t&&this.activateTab(this.tabs.filter((function(e){return e!==t})).find(W))},focusButton:function(t){var e=this;this.$nextTick((function(){(0,f.KS)(e.getButtonForTab(t))}))},emitTabClick:function(t,e){(0,v.cO)(e)&&t&&t.$emit&&!t.disabled&&t.$emit(o.PZ,e)},clickTab:function(t,e){this.activateTab(t),this.emitTabClick(t,e)},firstTab:function(t){var e=this.tabs.find(W);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))},previousTab:function(t){var e=(0,g.nP)(this.currentTab,0),n=this.tabs.slice(0,e).reverse().find(W);this.activateTab(n)&&t&&(this.focusButton(n),this.emitTabClick(n,t))},nextTab:function(t){var e=(0,g.nP)(this.currentTab,-1),n=this.tabs.slice(e+1).find(W);this.activateTab(n)&&t&&(this.focusButton(n),this.emitTabClick(n,t))},lastTab:function(t){var e=this.tabs.slice().reverse().find(W);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))}},render:function(t){var e=this,n=this.align,s=this.card,r=this.end,a=this.fill,l=this.firstTab,c=this.justified,d=this.lastTab,h=this.nextTab,f=this.noKeyNav,p=this.noNavStyle,b=this.pills,v=this.previousTab,m=this.small,g=this.tabs,y=this.vertical,w=g.find((function(t){return t.localActive&&!t.disabled})),O=g.find((function(t){return!t.disabled})),T=g.map((function(n,s){var r,a=n.safeId,c=null;return f||(c=-1,(n===w||!w&&n===O)&&(c=null)),t(q,{props:{controls:a?a():null,id:n.controlledBy||(a?a("_BV_tab_button_"):null),noKeyNav:f,posInSet:s+1,setSize:g.length,tab:n,tabIndex:c},on:(r={},z(r,o.PZ,(function(t){e.clickTab(n,t)})),z(r,o.Q3,l),z(r,o.I$,v),z(r,o.zd,h),z(r,o.vA,d),r),key:n[i.X$]||s,ref:"buttons",refInFor:!0})})),x=t(M,{class:this.localNavClass,attrs:{role:"tablist",id:this.safeId("_BV_tab_controls_")},props:{fill:a,justified:c,align:n,tabs:!p&&!b,pills:!p&&b,vertical:y,small:m,cardHeader:s&&!y},ref:"nav"},[this.normalizeSlot(u.U4)||t(),T,this.normalizeSlot(u.XE)||t()]);x=t("div",{class:[{"card-header":s&&!y&&!r,"card-footer":s&&!y&&r,"col-auto":y},this.navWrapperClass],key:"bv-tabs-nav"},[x]);var _=this.normalizeSlot()||[],j=t();0===_.length&&(j=t("div",{class:["tab-pane","active",{"card-body":s}],key:"bv-empty-tab"},this.normalizeSlot(u.ZJ)));var k=t("div",{staticClass:"tab-content",class:[{col:y},this.contentClass],attrs:{id:this.safeId("_BV_tab_container_")},key:"bv-content",ref:"content"},[_,j]);return t(this.tag,{staticClass:"tabs",class:{row:y,"no-gutters":y&&s},attrs:{id:this.safeId()}},[r?k:t(),x,r?t():k])}})},7130:function(t,e,n){"use strict";n.d(e,{n:function(){return o}});var i=n(7040);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(this,t),!e)throw new TypeError("Failed to construct '".concat(this.constructor.name,"'. 1 argument required, ").concat(arguments.length," given."));(0,i.f0)(this,t.Defaults,this.constructor.Defaults,n,{type:e}),(0,i.hc)(this,{type:(0,i.MB)(),cancelable:(0,i.MB)(),nativeEvent:(0,i.MB)(),target:(0,i.MB)(),relatedTarget:(0,i.MB)(),vueTarget:(0,i.MB)(),componentId:(0,i.MB)()});var r=!1;this.preventDefault=function(){this.cancelable&&(r=!0)},(0,i._x)(this,"defaultPrevented",{enumerable:!0,get:function(){return r}})}return a(t,null,[{key:"Defaults",get:function(){return{type:"",cancelable:!0,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null,componentId:null}}}]),t}()},81:function(t,e,n){"use strict";n(6699);var i=n(7637),s=n(629);e["Z"]={data(){return{shownAssetsOnMap:[],shownBandsOnMap:[],tab:null,selectedAsset:null,selectedAssetKey:null}},computed:{...(0,s.Se)(["thumbnails","hasAssets","assets"]),shownAssets(){if(0===this.tab)return this.shownAssetsOnMap;if(1===this.tab||null===this.tab&&this.thumbnails.length>0){let t=[];for(let e in this.assets){let n=this.assets[e];this.thumbnails.includes(n)&&t.push(e)}return t}return[]}},methods:{showAsset(t,e,n){n?this.tab=1:(this.tab=0,this.selectedAsset=t,this.selectedAssetKey=e),this.$refs.tabs&&i.ZP.scrollTo(this.$refs.tabs.$el)},mapChanged(t){i.ZP.isObject(t)?(i.ZP.size(t.assets)>0&&(this.selectedAssetKey?this.shownAssetsOnMap=[this.selectedAssetKey]:this.shownAssetsOnMap=t.assets.map((t=>t.key))),i.ZP.size(t.bands)>0&&(this.shownBandsOnMap=t.bands)):(this.shownBandsOnMap=[],this.shownAssetsOnMap=[])}}}},8907:function(t){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({2350:function(t,e){function n(t,e){var n=t[1]||"",s=t[3];if(!s)return n;if(e&&"function"===typeof btoa){var r=i(s),a=s.sources.map((function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"}));return[n].concat(a).concat([r]).join("\n")}return[n].join("\n")}function i(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i})).join("")},e.i=function(t,n){"string"===typeof t&&(t=[[null,t,""]]);for(var i={},s=0;s<this.length;s++){var r=this[s][0];"number"===typeof r&&(i[r]=!0)}for(s=0;s<t.length;s++){var a=t[s];"number"===typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},"499e":function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},s=0;s<e.length;s++){var r=e[s],a=r[0],o=r[1],l=r[2],c=r[3],u={id:t+":"+s,css:o,media:l,sourceMap:c};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}n.r(e),n.d(e,"default",(function(){return p}));var s="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},a=s&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,u=function(){},d=null,h="data-vue-ssr-id",f="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,s){c=n,d=s||{};var a=i(t,e);return b(a),function(e){for(var n=[],s=0;s<a.length;s++){var o=a[s],l=r[o.id];l.refs--,n.push(l)}e?(a=i(t,e),b(a)):a=[];for(s=0;s<n.length;s++){l=n[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete r[l.id]}}}}function b(t){for(var e=0;e<t.length;e++){var n=t[e],i=r[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(m(n.parts[s]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var a=[];for(s=0;s<n.parts.length;s++)a.push(m(n.parts[s]));r[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,n,i=document.querySelector("style["+h+'~="'+t.id+'"]');if(i){if(c)return u;i.parentNode.removeChild(i)}if(f){var s=l++;i=o||(o=v()),e=y.bind(null,i,s,!1),n=y.bind(null,i,s,!0)}else i=v(),e=w.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function y(t,e,n,i){var s=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var r=document.createTextNode(s),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function w(t,e){var n=e.css,i=e.media,s=e.sourceMap;if(i&&t.setAttribute("media",i),d.ssrId&&t.setAttribute(h,e.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},"4d93":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".text-overflow-content[data-v-72c03b2a]{--nlines:3;--lineHeight:1.5;max-height:calc(var(--nlines)*var(--lineHeight));overflow:hidden;-webkit-transition:max-height .3s ease;transition:max-height .3s ease}.text-overflow[data-v-72c03b2a]{position:relative}.no-overflow .text-overflow-content[data-v-72c03b2a]{max-height:100%;overflow:visible}.no-overflow .button-read-more[data-v-72c03b2a],.no-overflow .hide-text[data-v-72c03b2a]{display:none}.read-more-button[data-v-72c03b2a]{cursor:pointer;display:block;position:relative;border-top:1px solid #dbdbdb;height:.1em;margin:2em auto;width:95%;text-align:center}.read-more-button span[data-v-72c03b2a]{background:#fff;color:#b5b5b5;display:inline-block;font-size:.75em;padding:.4em .8em;-webkit-transform:translateY(-1.1em);transform:translateY(-1.1em);text-align:center}.hide-text[data-v-72c03b2a]{--nlines:6;--lineHeight:1.5;background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),color-stop(90%,#fff),to(#fff));background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);width:100%;height:calc(var(--nlines)*var(--lineHeight));position:absolute;-webkit-transform:translateY(calc(var(--nlines)*-1*var(--lineHeight)));transform:translateY(calc(var(--nlines)*-1*var(--lineHeight)))}.hide-text[data-v-72c03b2a],.read-more-button[data-v-72c03b2a]{-webkit-transition:opacity .3s ease,margin .3s ease;transition:opacity .3s ease,margin .3s ease;opacity:1}.expanded .hide-text[data-v-72c03b2a],.expanded .read-more-button[data-v-72c03b2a]:not(.show-less){opacity:0;margin-top:0;margin-bottom:0;pointer-events:none}",""])},6099:function(t,e,n){var i=n("4d93");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("499e").default;s("e6468484",i,!0,{sourceMap:!1,shadowMode:!1})},"6b0e":function(t,e,n){"use strict";var i=n("6099"),s=n.n(i);s.a},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(i){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(i.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},fb15:function(t,e,n){"use strict";var i;(n.r(e),"undefined"!==typeof window)&&(n("f6fd"),(i=window.document.currentScript)&&(i=i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=i[1]));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-overflow",class:{expanded:t.expanded,"no-overflow":t.inMaxRange}},[n("div",{ref:"to",staticClass:"text-overflow-content"},[t._t("default")],2),t.noShadow?t._e():n("div",{ref:"ht",staticClass:"hide-text"}),t.noButton?t._e():n("div",{staticClass:"button-read-more",on:{click:t.toggle}},[t._t("more",[n("div",{staticClass:"read-more-button",class:{"show-less":!t.noLess}},[n("span",[t._v(t._s(t.expanded?t.textLess:t.text))])])],{open:t.expanded})],2)])},r=[],a={name:"vue-read-more-smooth",props:{lines:{type:Number,default:3},gLines:{type:Number,default:null},maxLines:{type:Number,default:null},text:{type:String,default:"Read more"},textLess:{type:String,default:"Read less"},noLess:{type:Boolean,default:!1},openByDefault:{type:Boolean,default:!1},open:{type:Boolean,default:null},noButton:{type:Boolean,default:!1},noShadow:{type:Boolean,default:!1}},data(){return{readmore:!1,expanded:!1,inMaxRange:!1,localMaxLines:1}},watch:{open(t){t!==this.expanded&&this.toggle(!t)}},created(){this.lines&&!this.maxLines?this.localMaxLines=this.lines+1:this.localMaxLines=this.maxLines-1,!0===this.open&&(this.expanded=!0)},mounted(){const t=this.getLineHeight(this.$refs.to);this.lines&&this.$refs.to.style.setProperty("--nlines",this.lines);let e=2;this.gLines?e=this.gLines:this.lines>12?e=4:this.lines>6&&(e=3),this.$refs.ht&&this.$refs.ht.style.setProperty("--nlines",e),!0===this.open&&this.$refs.to.style.setProperty("max-height","100%"),setTimeout((()=>{this.readmore=this.$refs.to.offsetHeight<this.$refs.to.scrollHeight,this.$refs.to.scrollHeight<=this.localMaxLines*t&&(this.inMaxRange=!0),this.$refs.to.style.setProperty("--lineHeight",t+"px"),this.$refs.ht&&this.$refs.ht.style.setProperty("--lineHeight",t+"px"),!0===this.open&&this.$refs.to.style.setProperty("max-height",this.$refs.to.scrollHeight+"px")}))},methods:{toggle(t){const e="boolean"===typeof t?t:this.expanded;e?this.noLess||(this.$refs.to.style.removeProperty("max-height"),this.expanded=!1,this.$emit("update:open",!1)):(this.expanded=!0,this.$emit("update:open",!0),this.$refs.to.style.setProperty("max-height",this.$refs.to.scrollHeight+"px"))},getLineHeight(t){let e=document.createElement(t.children[0].nodeName);const n=getComputedStyle(t.children[0]);e.setAttribute("style","position:absolute;left:-999em;margin:0px;padding:0px;font-family:"+n.fontFamily+";font-size:"+n.fontSize),e.innerHTML="test",e=document.body.appendChild(e);const i=e.clientHeight;return e.parentNode.removeChild(e),i}}},o=a;n("6b0e");function l(t,e,n,i,s,r,a,o){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):s&&(l=o?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var c=l(o,s,r,!1,null,"72c03b2a",null),u=c.exports;e["default"]=u}})["default"]}}]);
//# sourceMappingURL=447.44c0bde3.js.map