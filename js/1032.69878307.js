"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[1032],{24396:function(t,e,s){s.d(e,{c:function(){return C}});var r=function(){var t=this,e=t._self._c;return t.href?e("b-button-group",{staticClass:"actions",attrs:{vertical:t.vertical,size:t.size}},[t.isBrowserProtocol&&t.isAsset?e("b-button",{attrs:{href:t.href,target:"_blank",variant:"primary"}},[t.browserCanOpenFile?e("b-icon-box-arrow-up-right"):e("b-icon-download"),t._v(" "+t._s(t.buttonText)+" ")],1):t._e(),e("CopyButton",{attrs:{variant:"primary",copyText:t.href}},[t._v(" "+t._s(t.copyButtonText)+" ")]),t.isAsset&&t.canShow&&!t.shown?e("b-button",{attrs:{variant:"primary"},on:{click:t.show}},[e("b-icon-eye",{staticClass:"mr-1"}),t.isThumbnail?[t._v(t._s(t.$t("assets.showThumbnail")))]:[t._v(t._s(t.$t("assets.showOnMap")))]],2):t._e(),t._l(t.actions,(function(s){return e("b-button",t._b({key:s.id,attrs:{variant:"primary"},on:{click:s.onClick}},"b-button",s.btnOptions,!1),[s.icon?e(s.icon,{tag:"component",staticClass:"mr-1"}):t._e(),t._v(" "+t._s(s.text)+" ")],1)}))],2):t._e()},i=[],o=s(88676),n=s(44093),a=s(82124),l=s(40848),c=s(48416),u=s(63956),h=s.n(u);class p{constructor(t,e){this.id=t,this.component=e}get btnOptions(){let t;return this.uri instanceof h()?t=this.uri.toString():"string"===typeof this.uri&&(t=this.uri),t?{href:t,target:"_blank"}:{}}get onClick(){return()=>{}}get uri(){return null}get show(){return!1}get icon(){return o.OS8}}class f extends p{constructor(t,e,s){super(s,e),this.asset=t}}var d=s(75760);class m extends f{get show(){return this.component.isBrowserProtocol&&"application/vnd.laszip+copc"===this.asset.type}get uri(){let t=new(h())("https://viewer.copc.io");return t.addQuery("copc",this.component.href),t}get text(){return d.cp.t("actions.openIn",{service:"copc.io"})}}class g extends f{get show(){return this.component.isBrowserProtocol&&l.QN==this.asset.type}get uri(){let t=new(h())("https://geojson.io");return t.addQuery("data",`text/x-url,${this.component.href}`),t}get text(){return d.cp.t("actions.openIn",{service:"geojson.io"})}}var b={CopcViewer:m,GeoJsonIo:g},w={},y={name:"HrefActions",components:{BIconBoxArrowUpRight:o.OS8,BIconDownload:o._4n,BIconEye:o.akp,CopyButton:()=>Promise.resolve().then(s.bind(s,33560)),Description:n["default"],Metadata:()=>Promise.all([s.e(3912),s.e(5879),s.e(7568)]).then(s.bind(s,7568))},props:{data:{type:Object,required:!0},isAsset:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},size:{type:String,default:"md"},shown:{type:Boolean,default:!1}},computed:{...(0,c.gV)(["getRequestUrl"]),actions(){return Object.entries(this.isAsset?b:w).map((([t,e])=>new e(this.data,this,t))).filter((t=>t.show))},canShow(){return"string"===typeof this.data.type&&(!("server"!==this.tileRendererType||!l.eQ.includes(this.data.type))||(!this.isGdalVfs||"client"!==this.tileRendererType)&&(!!this.isBrowserProtocol&&!!l.Iz.includes(this.data.type)))},protocol(){if("string"===typeof this.href&&this.href){let t=this.href.match(/^(\w+):\/\//);if(t)return t[1].toLowerCase()}return null},isBrowserProtocol(){return!this.protocol&&!this.isGdalVfs||l.IZ.includes(this.protocol)},isThumbnail(){return this.isAsset?Array.isArray(this.data.roles)&&this.data.roles.includes("thumbnail"):"preview"===this.data.rel&&l.cp.canBrowserDisplayImage(this.data)},isGdalVfs(){return l.cp.isGdalVfsUri(this.data.href)},href(){if("string"!==typeof this.data.href)return null;let t=null;return this.context instanceof a.c&&(t=this.context.getAbsoluteUrl()),this.getRequestUrl(this.data.href,t)},from(){if(this.isGdalVfs){let t=this.data.href.match(/^\/vsi([a-z\d]+)(_streaming)?\//);return this.protocolName(t)}return this.protocolName(this.protocol)},browserCanOpenFile(){if(this.isGdalVfs)return!1;if(l.cp.canBrowserDisplayImage(this.data))return!0;if("string"===typeof this.data.type)switch(this.data.type.toLowerCase()){case"text/html":case"application/xhtml+xml":case"text/plain":case"application/pdf":return!0}return!1},buttonText(){if(this.browserCanOpenFile&&this.isBrowserProtocol)return this.$t("open");let t=!this.isBrowserProtocol&&this.from?"withSource":"generic";return this.$t(`assets.download.${t}`,{source:this.from})},copyButtonText(){let t=this.isGdalVfs?"copyGdalVfsUrl":"copyUrl",e=!this.isBrowserProtocol&&this.from?"withSource":"generic";return this.$t(`assets.${t}.${e}`,{source:this.from})}},methods:{protocolName(t){if("string"!==typeof t)return"";switch(t.toLowerCase()){case"s3":return this.$t("protocol.s3");case"abfs":case"abfss":return this.$t("protocol.azure");case"gcs":return this.$t("protocol.gcs");case"ftp":return this.$t("protocol.ftp");case"oss":return this.$t("protocol.oss");case"file":return this.$t("protocol.file")}return""},show(){let t=Object.assign({},this.data);this.isGdalVfs||(t.href=this.href),this.$emit("show",t,this.id,this.isThumbnail)}}},k=y,_=s(82528),v=(0,_.c)(k,r,i,!1,null,null,null),C=v.exports},41032:function(t,e,s){s.r(e),s.d(e,{default:function(){return B}});var r=function(){var t=this,e=t._self._c;return e("section",{staticClass:"links mb-4"},[t.title?e("h2",[t._v(t._s(t.title))]):t._e(),t.hasGroups?t._l(t.groups,(function(s){return e("div",{key:s.rel,staticClass:"group"},[s.rel?e("h4",[t._v(t._s(s.label))]):t._e(),e("ul",t._l(s.links,(function(s,r){return e("Link",{key:r,attrs:{link:s,fallbackTitle:()=>t.fallbackTitle(s)}})})),1)])})):e("ul",t._l(t.links,(function(s,r){return e("Link",{key:r,attrs:{link:s,fallbackTitle:()=>t.fallbackTitle(s)}})})),1)],2)},i=[],o=(s(83248),function(){var t=this,e=t._self._c;return e("li",{staticClass:"link"},[e("StacLink",{staticClass:"pr-1",attrs:{id:t.popoverId,data:t.link,fallbackTitle:t.fallbackTitle}}),e("b-popover",{attrs:{target:t.popoverId,triggers:"hover",placement:"right",container:"#stac-browser","custom-class":"link-more"}},[t.link.description?e("Description",{attrs:{description:t.link.description,compact:""}}):t._e(),e("section",{staticClass:"link-actions"},[e("h3",{staticClass:"first"},[t._v(t._s(t.$t("additionalActions")))]),e("HrefActions",{attrs:{vertical:"",data:t.link,size:"sm"}})],1),e("Metadata",{attrs:{data:t.link,type:"Link",headerTag:"h3",ignoreFields:t.ignore}})],1)],1)}),n=[],a=s(24396),l=s(53178),c=s(90280);let u=0;var h={name:"Link",components:{BPopover:c.K,HrefActions:a.c,StacLink:l["default"],Description:()=>Promise.resolve().then(s.bind(s,44093)),Metadata:()=>s.e(5188).then(s.bind(s,7568))},props:{link:{type:Object,required:!0},fallbackTitle:{type:Function,required:!0}},data(){return{ignore:["href","type","rel","title","description"]}},computed:{popoverId(){return"popover-link-"+u}},beforeCreate(){u++}},p=h,f=s(82528),d=(0,f.c)(p,o,n,!1,null,null,null),m=d.exports,g=s(95879),b=s(9040),w=s(81228),y=s(40848),k=s(75760),_=s(48416),v={name:"Links",components:{Link:m},props:{title:{type:String,default:null},links:{type:Array,default:()=>[]}},computed:{...(0,_.ys)(["uiLanguage"]),groups(){let t=this.links.reduce(((t,e)=>{let s="string"===typeof e.rel?e.rel.toLowerCase():"";return s in t?t[s].links.push(e):t[s]={rel:s,label:this.formatRel(s),links:[e]},t}),{});return Object.values(t).sort(((t,e)=>t.label.localeCompare(e.label,this.uiLanguage)))},hasGroups(){return this.groups.some((t=>t.rel.length>0&&t.links.length>=2))}},methods:{formatRel(t){let e="string"===typeof t?t.toLowerCase():"";return e in g.Fields.links.rel.mapping?(0,k.O8)(g.Fields.links.rel.mapping[e]):(t.startsWith(w.wF)&&(t=t.substr(w.wF.length)),(0,b.formatKey)(t))},fallbackTitle(t){let e=y.cp.titleForHref(t.href);if(this.hasGroups)return e;{let s=this.formatRel(t.rel);return`${s}: ${e}`}}}},C=v,x=(0,f.c)(C,r,i,!1,null,null,null),B=x.exports}}]);
//# sourceMappingURL=1032.69878307.js.map