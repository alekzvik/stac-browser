(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[3097],{93097:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return O}});var r=function(){var t=this,e=t._self._c;return t.formattedData.length>0?e("section",{staticClass:"metadata"},[t.title?e("h2",[t._v(t._s(t.title||t.$t("metadata.title")))]):t._e(),e("b-card-group",{class:`count-${t.formattedData.length}`,attrs:{columns:""}},t._l(t.formattedData,(function(a){return e("MetadataGroup",t._b({key:a.extension},"MetadataGroup",a,!1))})),1)],1):t._e()},n=[],s=(a(57658),a(2407)),i=function(){var t=this,e=t._self._c;return e("b-card",{key:t.extension,class:["metadata-card",`ext-${t.extension}`],attrs:{"no-body":""}},[e("b-card-title",[t.label?e("span",{domProps:{innerHTML:t._s(t.label)}}):[t._v(t._s(t.$t("metadata.general")))]],2),e("section",{staticClass:"border metadata-rows"},t._l(t.properties,(function(a,r){return e("MetadataEntry",t._b({key:r,attrs:{field:r}},"MetadataEntry",a,!1))})),1)],1)},o=[],l=function(){var t=this,e=t._self._c;return e("b-row",[e("b-col",{staticClass:"label",attrs:{md:t.showTable?12:3,title:t.field}},[e("span",{domProps:{innerHTML:t._s(t.label)}})]),t.showTable?e("b-col",{staticClass:"value mt-2",attrs:{md:"12"}},[e("MetadataTable",t._b({},"MetadataTable",t.$props,!1))],1):e("b-col",{staticClass:"value",attrs:{md:"9"}},[e("div",{domProps:{innerHTML:t._s(t.formatted)}})])],1)},u=[],d=a(9025),c=a(79879);const p=["languages"];var f={name:"MetadataEntry",components:{MetadataTable:()=>a.e(160).then(a.bind(a,30160))},mixins:[d.Z],computed:{showTable(){return p.includes(this.field)||this.itemOrder.length>0&&c.ZP.size(this.value)>=3}}},m=f,h=a(1001),b=(0,h.Z)(m,l,u,!1,null,null,null),_=b.exports,y={name:"MetadataGroup",components:{MetadataEntry:_},props:{label:{type:String,default:""},extension:{type:String,default:""},properties:{type:Object,required:!0}}},g=y,v=(0,h.Z)(g,i,o,!1,null,null,null),x=v.exports,C=a(8168),j=a(20629),M={name:"Metadata",components:{MetadataGroup:x},props:{data:{type:Object,required:!0},type:{type:String,required:!0},context:{type:Object,default:null},ignoreFields:{type:Array,default:()=>[]},title:{type:String,default:null}},data(){return{formattedData:[]}},computed:{...(0,j.rn)(["uiLanguage"])},watch:{uiLanguage:{immediate:!0,async handler(t){if(!t)return;const e=(await a(84260)(`./${t}/duration.js`)).default;C.isoDuration.setLocales({en:e}),this.formattedData=this.formatData()}}},methods:{formatData(){let t=t=>!t.startsWith("_")&&!this.ignoreFields.includes(t);switch(this.type){case"Asset":return(0,s.formatAsset)(this.data,this.context,t);case"Link":return(0,s.formatLink)(this.data,this.context,t);case"Provider":return(0,s.formatProvider)(this.data,this.context,t);case"Item":return(0,s.formatItemProperties)(this.data,t);case"Catalog":return(0,s.formatCatalog)(this.data,t);case"Collection":{let e=(0,s.formatCollection)(this.data,t),a=(0,s.formatSummaries)(this.data,t);return a.forEach((t=>{let a=e.findIndex((e=>t.extension===e.extension));-1!==a?Object.assign(e[a].properties,t.properties):e.push(t)})),e.sort(((t,e)=>t.label.localeCompare(e.label,this.uiLanguage)))}case"FeatureCollection":return{};default:return(0,s.formatGrouped)(this.context,this.data,this.type,t)}}}},w=M,k=(0,h.Z)(w,r,n,!1,null,null,null),O=k.exports},9025:function(t,e){"use strict";e.Z={props:{field:{type:String,required:!0},label:{type:String,required:!0},value:{},formatted:{type:String},spec:{type:Object,required:!0},itemOrder:{},items:{}}}},84260:function(t,e,a){var r={"./de-CH/duration.js":[89489,9489],"./de/duration.js":[32380,2380],"./en/duration.js":[28673,8673],"./es/duration.js":[31514,1514],"./fr-CA/duration.js":[3138,3138],"./fr-CH/duration.js":[13669,3669],"./fr/duration.js":[28770,8770],"./it-CH/duration.js":[22792,2792],"./it/duration.js":[60833,833],"./ro/duration.js":[65972,5972]};function n(t){if(!a.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],n=e[0];return a.e(e[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(r)},n.id=84260,t.exports=n}}]);
//# sourceMappingURL=3097.6b8c7ebe.js.map