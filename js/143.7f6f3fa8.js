"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[143],{40143:function(t,s,e){e.r(s),e.d(s,{default:function(){return f}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"root-stats"},[t.hasConformances?[s("h4",[t._v(t._s(t.$t("source.conformanceClasses")))]),t._l(t.conformances,(function(e,a){return s("dl",{key:a},[s("dt",[t._v(t._s(a))]),s("dd",[s("ul",t._l(e,(function(e,a){return s("li",{key:a,attrs:{title:a}},[t._v(" "+t._s(e.title)+" "),e.version?s("b-badge",{staticClass:"ml-1",attrs:{pill:"",variant:"secondary"}},[t._v(t._s(e.version))]):t._e()],1)})),0)])])}))]:t._e(),t.stats?[s("h4",[t._v(t._s(t.$t("source.statistics")))]),t._l(t.stats,(function(e,a){return s("dl",{key:a},[s("dt",[t._v(" "+t._s(e.label)+" "),s("b-badge",{staticClass:"ml-1",attrs:{pill:"",variant:"primary"}},[t._v(t._s(e.count))]),e.version?s("b-badge",{staticClass:"ml-1",attrs:{pill:"",variant:"secondary"}},[t._v(t._s(e.version))]):t._e()],1),s("dd",{staticClass:"charts"},[e.extensions?s("StatsChart",{attrs:{type:"extensions",data:e.extensions,count:e.count}}):t._e(),e.assets?s("StatsChart",{attrs:{type:"assets",data:e.assets,count:e.count}}):t._e(),!e.version&&e.versions?s("StatsChart",{attrs:{type:"versions",data:e.versions,count:e.count}}):t._e()],1)])}))]:t._e()],2)},r=[],n=e(55288),o=e(95353),i=e(2566),l={name:"RootStats",components:{StatsChart:()=>Promise.all([e.e(4527),e.e(6750)]).then(e.bind(e,6750))},computed:{...(0,o.aH)(["conformsTo"]),...(0,o.L8)(["root"]),hasConformances(){return Array.isArray(this.conformsTo)&&this.conformsTo.length>0},conformances(){if(!this.hasConformances)return null;let t={OGC:{},STAC:{},Other:{}};for(let s of this.conformsTo){let e=this.parseConformance(s);t[e.type][s]=e}for(let s in t)0===i.Ay.size(t[s])&&delete t[s];return t},stats(){if(!this.root)return null;let t={"stats:catalogs":{label:this.$tc("stacCatalog",2)},"stats:collections":{label:this.$tc("stacCollection",2)},"stats:items":{label:this.$tc("stacItem",2)}};for(let s in t)if(i.Ay.isObject(this.root[s])){let e=Object.assign(t[s],this.root[s]);1===i.Ay.size(e["versions"])&&(e.version=Object.keys(e["versions"])[0],delete e.versions)}else delete t[s];return i.Ay.size(t)>0?t:null}},methods:{parseConformance(t){let s=t,e="Other",a=null;if(t.startsWith("http://www.opengis.net/spec/")){e="OGC";let r=t.match(/^http:\/\/www\.opengis\.net\/spec\/([^/]+)\/([^/]+)\/conf\/(.+)$/);if(r){let[,t,e,o]=r;a=e;let i=t.split("-");t=3===i.length&&"ogcapi"===i[0]?`OGC API - ${(0,n.formatKey)(i[1])} - Part ${i[2]}`:"cql2"===t?"CQL2":(0,n.formatKey)(t),o=(0,n.formatKey)(o),s=`${t} - ${o}`}}else if(t.startsWith("https://api.stacspec.org/")){e="STAC";let r=t.match(/^https?:\/\/api\.stacspec\.org\/([^/]+)\/([^/#]+)(?:#(.+))?$/);r&&(a=r[1],s=(0,n.formatKey)(r[2]),r[3]&&(s+=" - "+(0,n.formatKey)(r[3])))}return{type:e,title:s,version:a}}}},c=l,h=e(81656),u=(0,h.A)(c,a,r,!1,null,null,null),f=u.exports}}]);
//# sourceMappingURL=143.7f6f3fa8.js.map