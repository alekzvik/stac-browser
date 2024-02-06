"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[7516],{57516:function(t,e,i){i.r(e),i.d(e,{default:function(){return rt}});var s,a=function(){var t=this,e=t._self._c;return e("b-sidebar",{attrs:{id:"sidebar",title:t.$t("browse"),backdrop:"",lazy:""},scopedSlots:t._u([{key:"default",fn:function(){return[t.parents?t.root?e("Tree",{attrs:{item:t.root,path:t.parents}}):t._e():e("Loading")]},proxy:!0},t.allowSelectCatalog?{key:"footer",fn:function(){return[e("b-button",{staticClass:"switch-catalog",attrs:{variant:"light"}},[e("router-link",{attrs:{to:"/"}},[e("b-icon-arrow-left-right"),t._v(" "+t._s(t.$t("sidebar.switchCatalog")))],1)],1)]},proxy:!0}:null],null,!0),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})},n=[],o=i(88676),r=i(77548),l=i(99628),h=i(19944),c=i(98092),d=i(74352),u=i(95756),p=i(18952),f=i(53377),b=i(54992),g=i(26596),v=i(25800),m=i(97637),w=i(48256),y=i(35136),C=i(14288),S=i(46128),k=i(80700),_=i(51600);function O(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function x(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?O(Object(i),!0).forEach((function(e){K(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function K(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var $="b-sidebar",A=(0,b.s9)(l.M$,"request-state"),P=(0,b.s9)(l.M$,"toggle"),T=(0,b.oV)(l.M$,"state"),V=(0,b.oV)(l.M$,"sync-state"),F=(0,g.O)("visible",{type:u.aM,defaultValue:!1,event:c.Cu}),M=F.mixin,I=F.props,L=F.prop,z=F.event,E=(0,m.a8)((0,v.UJ)(x(x(x({},y.o),I),{},{ariaLabel:(0,m.K2)(u.nV),ariaLabelledby:(0,m.K2)(u.nV),backdrop:(0,m.K2)(u.aM,!1),backdropVariant:(0,m.K2)(u.nV,"dark"),bgVariant:(0,m.K2)(u.nV,"light"),bodyClass:(0,m.K2)(u.io),closeLabel:(0,m.K2)(u.nV),footerClass:(0,m.K2)(u.io),footerTag:(0,m.K2)(u.nV,"footer"),headerClass:(0,m.K2)(u.io),headerTag:(0,m.K2)(u.nV,"header"),lazy:(0,m.K2)(u.aM,!1),noCloseOnBackdrop:(0,m.K2)(u.aM,!1),noCloseOnEsc:(0,m.K2)(u.aM,!1),noCloseOnRouteChange:(0,m.K2)(u.aM,!1),noEnforceFocus:(0,m.K2)(u.aM,!1),noHeader:(0,m.K2)(u.aM,!1),noHeaderClose:(0,m.K2)(u.aM,!1),noSlide:(0,m.K2)(u.aM,!1),right:(0,m.K2)(u.aM,!1),shadow:(0,m.K2)(u.wz,!1),sidebarClass:(0,m.K2)(u.io),tag:(0,m.K2)(u.nV,"div"),textVariant:(0,m.K2)(u.nV,"dark"),title:(0,m.K2)(u.nV),width:(0,m.K2)(u.nV),zIndex:(0,m.K2)(u.AN)})),l.Ux),j=function(t,e){var i=e.normalizeSlot(p.oP,e.slotScope)||e.title;return i?t("strong",{attrs:{id:e.safeId("__title__")}},[i]):t("span")},B=function(t,e){if(e.noHeaderClose)return t();var i=e.closeLabel,s=e.textVariant,a=e.hide;return t(k.Y,{props:{ariaLabel:i,textVariant:s},on:{click:a},ref:"close-button"},[e.normalizeSlot(p._o)||t(o.gxL)])},D=function(t,e){if(e.noHeader)return t();var i=e.normalizeSlot(p._4,e.slotScope);if(!i){var s=j(t,e),a=B(t,e);i=e.right?[a,s]:[s,a]}return t(e.headerTag,{staticClass:"".concat($,"-header"),class:e.headerClass,key:"header"},i)},U=function(t,e){return t("div",{staticClass:"".concat($,"-body"),class:e.bodyClass,key:"body"},[e.normalizeSlot(p._u,e.slotScope)])},H=function(t,e){var i=e.normalizeSlot(p.I7,e.slotScope);return i?t(e.footerTag,{staticClass:"".concat($,"-footer"),class:e.footerClass,key:"footer"},[i]):t()},R=function(t,e){var i=D(t,e);return e.lazy&&!e.isOpen?i:[i,U(t,e),H(t,e)]},q=function(t,e){if(!e.backdrop)return t();var i=e.backdropVariant;return t("div",{directives:[{name:"show",value:e.localShow}],staticClass:"b-sidebar-backdrop",class:K({},"bg-".concat(i),i),on:{click:e.onBackdropClick}})},N=(0,r.SU)({name:l.Ux,mixins:[w.c,y.Q,M,C.O,S.m],inheritAttrs:!1,props:E,data:function(){var t=!!this[L];return{localShow:t,isOpen:t}},computed:{transitionProps:function(){return this.noSlide?{css:!0}:{css:!0,enterClass:"",enterActiveClass:"slide",enterToClass:"show",leaveClass:"show",leaveActiveClass:"slide",leaveToClass:""}},slotScope:function(){var t=this.hide,e=this.right,i=this.localShow;return{hide:t,right:e,visible:i}},hasTitle:function(){var t=this.$scopedSlots,e=this.$slots;return!this.noHeader&&!this.hasNormalizedSlot(p._4)&&!(!this.normalizeSlot(p.oP,this.slotScope,t,e)&&!this.title)},titleId:function(){return this.hasTitle?this.safeId("__title__"):null},computedAttrs:function(){return x(x({},this.bvAttrs),{},{id:this.safeId(),tabindex:"-1",role:"dialog","aria-modal":this.backdrop?"true":"false","aria-hidden":this.localShow?null:"true","aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||this.titleId||null})}},watch:(s={},K(s,L,(function(t,e){t!==e&&(this.localShow=t)})),K(s,"localShow",(function(t,e){t!==e&&(this.emitState(t),this.$emit(z,t))})),K(s,"$route",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.noCloseOnRouteChange||t.fullPath===e.fullPath||this.hide()})),s),created:function(){this.$_returnFocusEl=null},mounted:function(){var t=this;this.listenOnRoot(P,this.handleToggle),this.listenOnRoot(A,this.handleSync),this.$nextTick((function(){t.emitState(t.localShow)}))},activated:function(){this.emitSync()},beforeDestroy:function(){this.localShow=!1,this.$_returnFocusEl=null},methods:{hide:function(){this.localShow=!1},emitState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.localShow;this.emitOnRoot(T,this.safeId(),t)},emitSync:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.localShow;this.emitOnRoot(V,this.safeId(),t)},handleToggle:function(t){t&&t===this.safeId()&&(this.localShow=!this.localShow)},handleSync:function(t){var e=this;t&&t===this.safeId()&&this.$nextTick((function(){e.emitSync(e.localShow)}))},onKeydown:function(t){var e=t.keyCode;!this.noCloseOnEsc&&e===d.W&&this.localShow&&this.hide()},onBackdropClick:function(){this.localShow&&!this.noCloseOnBackdrop&&this.hide()},onTopTrapFocus:function(){var t=(0,f.Il)(this.$refs.content);this.enforceFocus(t.reverse()[0])},onBottomTrapFocus:function(){var t=(0,f.Il)(this.$refs.content);this.enforceFocus(t[0])},onBeforeEnter:function(){this.$_returnFocusEl=(0,f.Si)(h.Oz?[document.body]:[]),this.isOpen=!0},onAfterEnter:function(t){(0,f.Y7)(t,(0,f.Si)())||this.enforceFocus(t),this.$emit(c.CI)},onAfterLeave:function(){this.enforceFocus(this.$_returnFocusEl),this.$_returnFocusEl=null,this.isOpen=!1,this.$emit(c.sL)},enforceFocus:function(t){this.noEnforceFocus||(0,f.kF)(t)}},render:function(t){var e,i=this.bgVariant,s=this.width,a=this.textVariant,n=this.localShow,o=""===this.shadow||this.shadow,r=t(this.tag,{staticClass:$,class:[(e={shadow:!0===o},K(e,"shadow-".concat(o),o&&!0!==o),K(e,"".concat($,"-right"),this.right),K(e,"bg-".concat(i),i),K(e,"text-".concat(a),a),e),this.sidebarClass],style:{width:s},attrs:this.computedAttrs,directives:[{name:"show",value:n}],ref:"content"},[R(t,this)]);r=t("transition",{props:this.transitionProps,on:{beforeEnter:this.onBeforeEnter,afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[r]);var l=t(_.i,{props:{noFade:this.noSlide}},[q(t,this)]),h=t(),c=t();return this.backdrop&&n&&(h=t("div",{attrs:{tabindex:"0"},on:{focus:this.onTopTrapFocus}}),c=t("div",{attrs:{tabindex:"0"},on:{focus:this.onBottomTrapFocus}})),t("div",{staticClass:"b-sidebar-outer",style:{zIndex:this.zIndex},attrs:{tabindex:"-1"},on:{keydown:this.onKeydown}},[h,r,c,l])}}),Y=i(48416),W=i(26732),J=function(){var t=this,e=t._self._c;return e("ul",{directives:[{name:"b-visible",rawName:"v-b-visible",value:t.load,expression:"load"}],staticClass:"tree"},[e("li",[t.pagination?e("b-button",{attrs:{size:"sm",variant:"light",disabled:""}},[e("b-icon-three-dots")],1):t.mayHaveChildren?[e("b-button",{attrs:{size:"sm",variant:"light"},on:{click:t.toggle}},[t.expanded?e("b-icon-folder-minus"):e("b-icon-folder-plus")],1)]:e("b-button",{attrs:{size:"sm",variant:"light",to:t.to}},[e("b-icon-file-earmark-richtext")],1),e("b-button",{class:{path:t.onPath||t.active},attrs:{size:"sm",variant:"light",disabled:!t.to&&!t.active,to:t.to},on:{click:t.onClick}},[t._v(" "+t._s(t.title)+" ")]),t.expanded&&t.mayHaveChildren?[t.loading?e("ul",{staticClass:"tree"},[e("li",[e("b-spinner",{attrs:{label:t.$t("loading"),small:""}})],1)]):0===t.childs.length?e("ul",{staticClass:"tree"},[e("li",[e("b-button",{attrs:{size:"sm",variant:"light",disabled:""}},[t._v(" "+t._s(t.$t("tree.noChildren"))+" ")])],1)]):[t._l(t.shownChilds,(function(i,s){return e("Tree",{key:s,attrs:{item:i,parent:t.stac,path:t.path}})})),t.hasMore?e("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.300",value:t.showMore,expression:"showMore",modifiers:{300:!0}}],staticClass:"show-more",attrs:{variant:"light"},on:{click:t.showMore}},[t._v(t._s(t.$t("showMore")))]):t._e()]]:t._e()],2)])},Q=[],G=i(40848),X=i(82124),Z={name:"Tree",components:{BIconFileEarmarkRichtext:o.IF,BIconFolderMinus:o.kDL,BIconFolderPlus:o.WYj,BIconThreeDots:o.wFC},props:{item:{type:Object,required:!0},parent:{type:Object,default:null},path:{type:Array,default:()=>[]}},data(){return{expanded:!1,loading:!1,chunk:1,childs:[]}},computed:{...(0,Y.ys)(["data","apiCatalogPriority"]),...(0,Y.gV)(["getStac"]),onClick(){return!this.to&&this.mayHaveChildren?this.toggle:null},stac(){if(this.pagination)return null;if(this.item instanceof X.c){let t=this.getStac(this.item.getAbsoluteUrl());return!this.loading&&t?t:this.item}return this.getStac(this.link)},link(){return this.pagination?this.parent?this.parent.getAbsoluteUrl():null:G.cp.isObject(this.item)&&"string"===typeof this.item.href?this.parent?G.cp.toAbsolute(this.item.href,this.parent.getAbsoluteUrl()):this.item.href:null},mayHaveChildren(){return this.item instanceof X.c?this.item.isCatalogLike():!!this.link&&"item"!==this.item.rel},to(){return this.active?null:this.pagination?!this.parent||this.data&&this.parent.getAbsoluteUrl()===this.data.getAbsoluteUrl()?null:this.parent.getBrowserPath():this.stac instanceof X.c?this.stac.getBrowserPath():null},title(){return this.pagination?this.$t("tree.moreCollectionPagesAvailable"):X.c.getDisplayTitle([this.item,this.stac])},hasMore(){return this.childs.length>this.shownChilds.length},shownChilds(){return this.childs.slice(0,50*this.chunk)},onPath(){return!(!Array.isArray(this.path)||!this.stac)&&this.path.includes(this.stac)},active(){return this.stac&&this.stac===this.data},pagination(){return["next","prev","previous"].includes(this.item.rel)}},watch:{onPath:{immediate:!0,handler(){this.onPath&&(this.expanded=!0)}},stac:{immediate:!0,handler(t,e){t instanceof X.c&&t.setApiDataListener("tree",(()=>this.updateChilds())),e instanceof X.c&&e.setApiDataListener("tree"),this.updateChilds()}}},created(){this.parent||(this.expanded=!0)},methods:{updateChilds(){this.stac instanceof X.c?this.childs=this.stac.getChildren(this.apiCatalogPriority):this.childs=[]},showMore(){this.chunk++},load(t){this.stac||!this.link||this.pagination||this.$store.commit(t?"queue":"unqueue",this.link)},async toggle(){if(this.expanded=!this.expanded,this.expanded&&!this.pagination){this.loading=!0;let t=this.item instanceof X.c?this.item.getAbsoluteUrl():this.item.href;await this.$store.dispatch("load",{url:t,loadApi:!0}),this.loading=!1}}}},tt=Z,et=i(82528),it=(0,et.c)(tt,J,Q,!1,null,"27897853",null),st=it.exports,at={name:"Sidebar",components:{BIconArrowLeftRight:o.um6,BSidebar:N,Loading:W.c,Tree:st},data(){return{visible:!1}},computed:{...(0,Y.ys)(["allowSelectCatalog","parents"]),...(0,Y.gV)(["root"])},watch:{visible:{immediate:!0,async handler(t){t&&await this.$store.dispatch("loadParents"),t?document.body.classList.add("sidebar"):document.body.classList.remove("sidebar")}}},mounted(){this.visible=!0}},nt=at,ot=(0,et.c)(nt,a,n,!1,null,null,null),rt=ot.exports}}]);
//# sourceMappingURL=7516.90fe3017.js.map