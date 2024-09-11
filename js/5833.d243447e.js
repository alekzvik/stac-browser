(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[5833],{41842:function(e,t,s){var r=s(36246);const n="1.0.0",i={classification:"https://stac-extensions.github.io/classification/v1.1.0/schema.json",datacube:"https://stac-extensions.github.io/datacube/v2.1.0/schema.json",eo:"https://stac-extensions.github.io/eo/v1.0.0/schema.json",file:"https://stac-extensions.github.io/file/v1.0.0/schema.json","item-assets":"https://stac-extensions.github.io/item-assets/v1.0.0/schema.json",label:"https://stac-extensions.github.io/label/v1.0.1/schema.json",pointcloud:"https://stac-extensions.github.io/pointcloud/v1.0.0/schema.json",processing:"https://stac-extensions.github.io/processing/v1.1.0/schema.json",projection:"https://stac-extensions.github.io/projection/v1.0.0/schema.json",raster:"https://stac-extensions.github.io/raster/v1.1.0/schema.json",sar:"https://stac-extensions.github.io/sar/v1.0.0/schema.json",sat:"https://stac-extensions.github.io/sat/v1.0.0/schema.json",scientific:"https://stac-extensions.github.io/scientific/v1.0.0/schema.json",table:"https://stac-extensions.github.io/table/v1.2.0/schema.json",timestamps:"https://stac-extensions.github.io/timestamps/v1.0.0/schema.json",version:"https://stac-extensions.github.io/version/v1.0.0/schema.json",view:"https://stac-extensions.github.io/view/v1.0.0/schema.json"},a={itemAndCollection:{"cube:":i.datacube,"eo:":i.eo,"file:":i.file,"label:":i.label,"pc:":i.pointcloud,"processing:":i.processing,"proj:":i.projection,"raster:":i.raster,"sar:":i.sar,"sat:":i.sat,"sci:":i.scientific,"view:":i.view,version:i.version,deprecated:i.version,published:i.timestamps,expires:i.timestamps,unpublished:i.timestamps},catalog:{},collection:{item_assets:i["item-assets"]},item:{}};a.collection=Object.assign(a.collection,a.itemAndCollection),a.item=Object.assign(a.item,a.itemAndCollection);var o={parseUrl(e){let t=e.match(/^https?:\/\/stac-extensions.github.io\/([^\/]+)\/v([^\/]+)\/[^.]+.json$/i);if(t)return{id:t[1],version:t[2]}}},l={version:n,extensions:{},set(e){if("string"!==typeof e.stac_version?l.version="0.6.0":l.version=e.stac_version,Array.isArray(e.stac_extensions))for(let t of e.stac_extensions){let e=o.parseUrl(t);e&&(l.extensions[e.id]=e.version)}},before(e,t=null){let s=t?l.extensions[t]:l.version;return"undefined"!==typeof s&&r.compare(s,e,"<")}},u={type(e){let t=typeof e;if("object"===t){if(null===e)return"null";if(Array.isArray(e))return"array"}return t},is(e,t){return u.type(e)===t},isDefined(e){return"undefined"!==typeof e},isObject(e){return"object"===typeof e&&e===Object(e)&&!Array.isArray(e)},rename(e,t,s){return"undefined"!==typeof e[t]&&"undefined"===typeof e[s]&&(e[s]=e[t],delete e[t],!0)},forAll(e,t,s){if(e[t]&&"object"===typeof e[t])for(let r in e[t])s(e[t][r])},toArray(e,t){return"undefined"!==typeof e[t]&&!Array.isArray(e[t])&&(e[t]=[e[t]],!0)},flattenArray(e,t,s,r=!1){if(Array.isArray(e[t])){for(let n in e[t])if("string"===typeof s[n]){let i=e[t][n];e[s[n]]=r?[i]:i}return delete e[t],!0}return!1},flattenOneElementArray(e,t,s=!1){return!(!s&&Array.isArray(e[t]))||1===e[t].length&&(e[t]=e[t][0],!0)},removeFromArray(e,t,s){if(Array.isArray(e[t])){let r=e[t].indexOf(s);return r>-1&&e[t].splice(r,1),!0}return!1},ensure(e,t,s){return u.type(s)!==u.type(e[t])&&(e[t]=s),!0},upgradeExtension(e,t){let{id:s,version:n}=o.parseUrl(t),i=e.stac_extensions.findIndex((e=>{let t=o.parseUrl(e);return t&&t.id===s&&r.compare(t.version,n,"<")}));return-1!==i&&(e.stac_extensions[i]=t,!0)},addExtension(e,t){let{id:s,version:n}=o.parseUrl(t),i=e.stac_extensions.findIndex((e=>{if(e===t)return!0;let i=o.parseUrl(e);return!(!i||i.id!==s||!r.compare(i.version,n,"<"))}));return-1===i?e.stac_extensions.push(t):e.stac_extensions[i]=t,e.stac_extensions.sort(),!0},removeExtension(e,t){return u.removeFromArray(e,"stac_extensions",t)},migrateExtensionShortnames(e){let t=Object.keys(i),s=Object.values(i);return u.mapValues(e,"stac_extensions",t,s)},populateExtensions(e,t){let s=[];"catalog"!=t&&"collection"!=t||s.push(e),"item"!=t&&"collection"!=t||!u.isObject(e.assets)||(s=s.concat(Object.values(e.assets))),"collection"==t&&u.isObject(e.item_assets)&&(s=s.concat(Object.values(e.item_assets))),"collection"==t&&u.isObject(e.summaries)&&s.push(e.summaries),"item"==t&&u.isObject(e.properties)&&s.push(e.properties);for(let r of s)Object.keys(r).forEach((s=>{let r=s.match(/^(\w+:|[^:]+$)/i);if(Array.isArray(r)){let s=a[t][r[0]];u.is(s,"string")&&u.addExtension(e,s)}}))},mapValues(e,t,s,r){let n=e=>{let t=s.indexOf(e);return t>=0?r[t]:e};return Array.isArray(e[t])?e[t]=e[t].map(n):"undefined"!==typeof e[t]&&(e[t]=n(e[t])),!0},mapObject(e,t){for(let s in e)e[s]=t(e[s],s)},moveTo(e,t,s,r=!1,n=!1){let i;return i=r?n?e=>Array.isArray(e):e=>Array.isArray(e)&&1===e.length:u.isDefined,!!i(e[t])&&(s[t]=r&&!n?e[t][0]:e[t],delete e[t],!0)},runAll(e,t,s,r){for(let n in e)n.startsWith("migrate")||e[n](t,s,r)},toUTC(e,t){if("string"===typeof e[t])try{return e[t]=this.toISOString(e[t]),!0}catch(s){}return delete e[t],!1},toISOString(e){return e instanceof Date||(e=new Date(e)),e.toISOString().replace(".000","")}},c={multihash:null,hexToUint8(e){if(0===e.length||e.length%2!==0)throw new Error(`The string "${e}" is not valid hex.`);return new Uint8Array(e.match(/.{1,2}/g).map((e=>parseInt(e,16))))},uint8ToHex(e){return e.reduce(((e,t)=>e+t.toString(16).padStart(2,"0")),"")},toMultihash(e,t,s){if(!c.multihash||!u.is(e[t],"string"))return!1;try{const r=c.multihash.encode(c.hexToUint8(e[t]),s);return e[t]=c.uint8ToHex(r),!0}catch(r){return console.warn(r),!1}}},m={migrate(e,t=!0){return l.set(e),t&&(e.stac_version=n),e.type="Catalog",u.ensure(e,"stac_extensions",[]),l.before("1.0.0-rc.1")&&u.migrateExtensionShortnames(e),u.ensure(e,"id",""),u.ensure(e,"description",""),u.ensure(e,"links",[]),u.runAll(m,e,e),l.before("0.8.0")&&u.populateExtensions(e,"catalog"),e}},h={migrate(e,t=!0){return m.migrate(e,t),e.type="Collection",l.before("1.0.0-rc.1")&&u.migrateExtensionShortnames(e),u.ensure(e,"license","proprietary"),u.ensure(e,"extent",{spatial:{bbox:[]},temporal:{interval:[]}}),u.runAll(h,e,e),u.isObject(e.properties)&&(u.removeFromArray(e,"stac_extensions","commons"),delete e.properties),l.before("0.8.0")&&u.populateExtensions(e,"collection"),l.before("1.0.0-beta.1")&&u.mapValues(e,"stac_extensions",["assets"],["item-assets"]),e},extent(e){if(u.ensure(e,"extent",{}),l.before("0.8.0")&&(Array.isArray(e.extent.spatial)&&(e.extent.spatial={bbox:[e.extent.spatial]}),Array.isArray(e.extent.temporal)&&(e.extent.temporal={interval:[e.extent.temporal]})),u.ensure(e.extent,"spatial",{}),u.ensure(e.extent.spatial,"bbox",[]),u.ensure(e.extent,"temporal",{}),u.ensure(e.extent.temporal,"interval",[]),l.before("1.0.0-rc.3")){if(e.extent.temporal.interval.length>1){let s,r;for(let n of e.extent.temporal.interval){if(null===n[0])s=null;else if("string"===typeof n[0]&&null!==s)try{let e=new Date(n[0]);("undefined"===typeof s||e<s)&&(s=e)}catch(t){}if(null===n[1])r=null;else if("string"===typeof n[1]&&null!==r)try{let e=new Date(n[1]);("undefined"===typeof r||e>r)&&(r=e)}catch(t){}}e.extent.temporal.interval.unshift([s?u.toISOString(s):null,r?u.toISOString(r):null])}if(e.extent.spatial.bbox.length>1){let t=e.extent.spatial.bbox.reduce(((e,t)=>Array.isArray(t)?Math.max(t.length,e):e),4);if(t>=4){let s=new Array(t).fill(null),r=t/2;for(let t of e.extent.spatial.bbox){if(!Array.isArray(t)||t.length<4)break;for(let e in t){let n=t[e];null===s[e]?s[e]=n:s[e]=e<r?Math.min(n,s[e]):Math.max(n,s[e])}}-1===s.findIndex((e=>null===e))&&e.extent.spatial.bbox.unshift(s)}}}},collectionAssets(e){l.before("1.0.0-rc.1")&&u.removeExtension(e,"collection-assets"),d.migrateAll(e)},itemAsset(e){l.before("1.0.0-beta.2")&&u.rename(e,"item_assets","assets"),d.migrateAll(e,"item_assets")},summaries(e){if(u.ensure(e,"summaries",{}),l.before("0.8.0")&&u.isObject(e.other_properties)){for(let t in e.other_properties){let s=e.other_properties[t];Array.isArray(s.extent)&&2===s.extent.length?e.summaries[t]={minimum:s.extent[0],maximum:s.extent[1]}:Array.isArray(s.values)&&(s.values.filter((e=>Array.isArray(e))).length===s.values.length?e.summaries[t]=s.values.reduce(((e,t)=>e.concat(t)),[]):e.summaries[t]=s.values)}delete e.other_properties}if(l.before("1.0.0-beta.1")&&u.isObject(e.properties)&&!e.links.find((e=>["child","item"].includes(e.rel))))for(let t in e.properties){let s=e.properties[t];Array.isArray(s)||(s=[s]),e.summaries[t]=s}l.before("1.0.0-rc.1")&&u.mapObject(e.summaries,(e=>(u.rename(e,"min","minimum"),u.rename(e,"max","maximum"),e))),y.migrate(e.summaries,e,!0),u.moveTo(e.summaries,"sci:doi",e,!0)&&u.addExtension(e,i.scientific),u.moveTo(e.summaries,"sci:publications",e,!0,!0)&&u.addExtension(e,i.scientific),u.moveTo(e.summaries,"sci:citation",e,!0)&&u.addExtension(e,i.scientific),u.moveTo(e.summaries,"cube:dimensions",e,!0)&&u.addExtension(e,i.datacube),0===Object.keys(e.summaries).length&&delete e.summaries}},p={migrate(e,t=null,s=!0){l.set(e),s&&(e.stac_version=n),u.ensure(e,"stac_extensions",[]),l.before("1.0.0-rc.1")&&u.migrateExtensionShortnames(e),u.ensure(e,"id",""),u.ensure(e,"type","Feature"),u.isObject(e.geometry)||(e.geometry=null),null!==e.geometry&&u.ensure(e,"bbox",[]),u.ensure(e,"properties",{}),u.ensure(e,"links",[]),u.ensure(e,"assets",{});let r=!1;return u.isObject(t)&&u.isObject(t.properties)&&(u.removeFromArray(e,"stac_extensions","commons"),e.properties=Object.assign({},t.properties,e.properties),r=!0),u.runAll(p,e,e),y.migrate(e.properties,e),d.migrateAll(e),(l.before("0.8.0")||r)&&u.populateExtensions(e,"item"),e}},f={migrate(e,t=!0){return u.ensure(e,"collections",[]),u.ensure(e,"links",[]),u.runAll(f,e,e),e.collections=e.collections.map((e=>h.migrate(e,t))),e}},g={migrate(e,t=!0){return u.ensure(e,"type","FeatureCollection"),u.ensure(e,"features",[]),u.ensure(e,"links",[]),u.runAll(g,e,e),e.features=e.features.map((e=>p.migrate(e,null,t))),e}},d={migrateAll(e,t="assets"){for(let s in e[t])d.migrate(e[t][s],e)},migrate(e,t){return u.runAll(d,e,t),y.migrate(e,t),e},mediaTypes(e){u.is(e.type,"string")&&u.mapValues(e,"type",["image/vnd.stac.geotiff","image/vnd.stac.geotiff; cloud-optimized=true"],["image/tiff; application=geotiff","image/tiff; application=geotiff; profile=cloud-optimized"])},eo(e,t){let s=u.isObject(t.properties)&&Array.isArray(t.properties["eo:bands"])?t.properties["eo:bands"]:[];if(Array.isArray(e["eo:bands"]))for(let r in e["eo:bands"]){let t=e["eo:bands"][r];u.is(t,"number")&&u.isObject(s[t])?t=s[t]:u.isObject(t)||(t={}),e["eo:bands"][r]=t}}},y={migrate(e,t,s=!1){return u.runAll(y,e,t,s),e},_commonMetadata(e){l.before("1.0.0-rc.3")&&(u.toUTC(e,"created"),u.toUTC(e,"updated"))},_timestamps(e,t){u.toUTC(e,"published"),u.toUTC(e,"expires"),u.toUTC(e,"unpublished"),u.upgradeExtension(t,i.timestamps)},_versioningIndicator(e,t){u.upgradeExtension(t,i.version)},checksum(e,t){l.before("0.9.0")&&c.multihash&&(u.rename(e,"checksum:md5","checksum:multihash")&&c.toMultihash(e,"checksum:multihash","md5"),u.rename(e,"checksum:sha1","checksum:multihash")&&c.toMultihash(e,"checksum:multihash","sha1"),u.rename(e,"checksum:sha2","checksum:multihash")&&c.toMultihash(e,"checksum:multihash","sha2-256"),u.rename(e,"checksum:sha3","checksum:multihash")&&c.toMultihash(e,"checksum:multihash","sha3-256")),l.before("1.0.0-rc.1")&&u.rename(e,"checksum:multihash","file:checksum")&&u.addExtension(t,i.file),u.removeExtension(t,"checksum")},classification(e,t){l.before("1.1.0","classification")&&u.forAll(e,"classification:classes",(e=>u.rename(e,"color-hint","color_hint"))),u.upgradeExtension(t,i.classification)},cube(e,t){u.upgradeExtension(t,i.datacube)},dtr(e,t){l.before("0.9.0")&&(u.rename(e,"dtr:start_datetime","start_datetime"),u.rename(e,"dtr:end_datetime","end_datetime"),u.removeExtension(t,"datetime-range"))},eo(e,t){l.before("0.9.0")&&(u.rename(e,"eo:epsg","proj:epsg")&&u.addExtension(t,i.projection),u.rename(e,"eo:platform","platform"),u.rename(e,"eo:instrument","instruments")&&u.toArray(e,"instruments"),u.rename(e,"eo:constellation","constellation"),u.rename(e,"eo:off_nadir","view:off_nadir")&&u.addExtension(t,i.view),u.rename(e,"eo:azimuth","view:azimuth")&&u.addExtension(t,i.view),u.rename(e,"eo:incidence_angle","view:incidence_angle")&&u.addExtension(t,i.view),u.rename(e,"eo:sun_azimuth","view:sun_azimuth")&&u.addExtension(t,i.view),u.rename(e,"eo:sun_elevation","view:sun_elevation")&&u.addExtension(t,i.view)),l.before("1.0.0-beta.1")&&u.rename(e,"eo:gsd","gsd"),u.upgradeExtension(t,i.eo)},file(e,t){u.upgradeExtension(t,i.file)},label(e,t){l.before("0.8.0")&&(u.rename(e,"label:property","label:properties"),u.rename(e,"label:task","label:tasks"),u.rename(e,"label:overview","label:overviews")&&u.toArray(e,"label:overviews"),u.rename(e,"label:method","label:methods"),u.toArray(e,"label:classes")),u.upgradeExtension(t,i.label)},pc(e,t){l.before("0.8.0")&&u.rename(e,"pc:schema","pc:schemas"),u.upgradeExtension(t,i.pointcloud)},processing(e,t){u.upgradeExtension(t,i.processing)},proj(e,t){u.upgradeExtension(t,i.projection)},raster(e,t){u.upgradeExtension(t,i.raster)},sar(e,t,s){u.rename(e,"sar:incidence_angle","view:incidence_angle")&&u.addExtension(t,i.view),u.rename(e,"sar:pass_direction","sat:orbit_state")&&u.mapValues(e,"sat:orbit_state",[null],["geostationary"])&&u.addExtension(t,i.sat),l.before("0.7.0")&&(u.flattenArray(e,"sar:resolution",["sar:resolution_range","sar:resolution_azimuth"],s),u.flattenArray(e,"sar:pixel_spacing",["sar:pixel_spacing_range","sar:pixel_spacing_azimuth"],s),u.flattenArray(e,"sar:looks",["sar:looks_range","sar:looks_azimuth","sar:looks_equivalent_number"],s),u.rename(e,"sar:off_nadir","view:off_nadir")&&u.addExtension(t,i.view)),l.before("0.9.0")&&(u.rename(e,"sar:platform","platform"),u.rename(e,"sar:instrument","instruments")&&u.toArray(e,"instruments"),u.rename(e,"sar:constellation","constellation"),u.rename(e,"sar:type","sar:product_type"),u.rename(e,"sar:polarization","sar:polarizations"),u.flattenOneElementArray(e,"sar:absolute_orbit",s)&&u.rename(e,"sar:absolute_orbit","sat:absolute_orbit")&&u.addExtension(t,i.sat),u.flattenOneElementArray(e,"sar:relative_orbit",s)&&u.rename(e,"sar:relative_orbit","sat:relative_orbit")&&u.addExtension(t,i.sat)),u.upgradeExtension(t,i.sar)},sat(e,t){l.before("0.9.0")&&(u.rename(e,"sat:off_nadir_angle","sat:off_nadir"),u.rename(e,"sat:azimuth_angle","sat:azimuth"),u.rename(e,"sat:sun_azimuth_angle","sat:sun_azimuth"),u.rename(e,"sat:sun_elevation_angle","sat:sun_elevation")),u.upgradeExtension(t,i.sat)},sci(e,t){u.upgradeExtension(t,i.scientific)},item(e){l.before("0.8.0")&&(u.rename(e,"item:license","license"),u.rename(e,"item:providers","providers"))},table(e,t){u.upgradeExtension(t,i.table)},view(e,t){u.upgradeExtension(t,i.view)}},x={item(e,t=null,s=!0){return p.migrate(e,t,s)},catalog(e,t=!0){return m.migrate(e,t)},collection(e,t=!0){return h.migrate(e,t)},collectionCollection(e,t=!0){return f.migrate(e,t)},itemCollection(e,t=!0){return g.migrate(e,t)},stac(e,t=!0){return"Feature"===e.type?x.item(e,null,t):"FeatureCollection"===e.type?x.itemCollection(e,t):"Collection"===e.type||!e.type&&u.isDefined(e.extent)&&u.isDefined(e.license)?x.collection(e,t):!e.type&&Array.isArray(e.collections)?x.collectionCollection(e,t):x.catalog(e,t)},enableMultihash(e){c.multihash=e}};e.exports=x},75833:function(e,t,s){"use strict";s.d(t,{default:function(){return se}});var r=s(41842);function n(e){return"string"===typeof e&&e.length>0}function i(e){return"object"===typeof e&&e===Object(e)&&!Array.isArray(e)}function a(...e){if(e=e.filter((e=>Array.isArray(e))),e.length>1){let t=Math.max(...e.map((e=>e.length))),s=[];for(let r=0;r<t;r++)s.push(Object.assign({},...e.map((e=>e[r]))));return s}return 1===e.length?e[0]:[]}function o(e){switch(e){case"int8":return-128;case"int16":return-32768;case"int32":return-2147483648}return e.startsWith("u")?0:null}function l(e){switch(e){case"int8":return 127;case"uint8":return 255;case"int16":return 32767;case"uint16":return 65535;case"int32":return 2147483647;case"uint32":return 4294967295}return null}class u{constructor(e,t={},s=[]){if(!i(e))throw new Error("Given data is not an object");if(e instanceof u){for(let t of s)this[t]=e[t];e=e.toJSON()}this._keyMap=t,this._privateKeys=["_keyMap","_privateKeys"].concat(s);for(let r in e)"undefined"===typeof this[r]&&(this[r]=r in t?t[r](e[r],this):e[r])}isItem(){return"Feature"===this.type}isCatalog(){return"Catalog"===this.type}isCatalogLike(){return this.isCatalog()||this.isCollection()}isCollection(){return"Collection"===this.type}isItemCollection(){return"FeatureCollection"===this.type}isCollectionCollection(){return!1}isAsset(){return!1}isLink(){return!1}getObjectType(){}getAbsoluteUrl(){return null}getMetadata(e){return this[e]}toGeoJSON(){return null}getBoundingBox(){return null}getBoundingBoxes(){return[]}toJSON(){let e={};return Object.keys(this).forEach((t=>{if("function"===typeof this[t]||this._privateKeys.includes(t))return;let s=this[t];if(t in this._keyMap){let e=Array.isArray(s)?[]:{};for(let t in s)e[t]=s[t].toJSON();s=e}e[t]=s})),e}}var c=u,m=s(84193);const h=["http","https"];function p(e){return"string"===typeof e&&e.startsWith("/vsi")&&!e.startsWith("/vsicurl/")}function f(e,t,s=!0){return g(e,t,!1,s)}function g(e,t=null,s=!1,r=!0){"string"===typeof e&&e.startsWith("/vsicurl/")&&(e=e.replace(/^\/vsicurl\//,""));let n=m(e);if(t&&n.is("relative")&&!p(e)){let e=m(t),s=e.path();s.endsWith("/")||s.endsWith(".json")||e.path(s+"/"),n=n.absoluteTo(e)}return n.normalize(),s&&(n.query(""),n.fragment("")),r?n.toString():n}const d="application/geo+json",y=["application/json",d,"text/json"],x=["image/gif","image/jpeg","image/apng","image/png","image/webp"],b=["image/tiff; application=geotiff; profile=cloud-optimized","image/vnd.stac.geotiff; cloud-optimized=true"],A=["application/geotiff","image/tiff; application=geotiff","image/vnd.stac.geotiff"].concat(b);x.concat(A);function v(e,t,s=!1){return Array.isArray(t)||(t=[t]),!(!s||"undefined"!==typeof e)||"string"===typeof e&&(t=t.map((e=>e.toLowerCase())),t.includes(e.toLowerCase()))}function _(e,t=!1){return v(e,y,t)}class k extends c{constructor(e,t=null,s={},r=[]){super(e,s,["_context"].concat(r)),this._context||(this._context=t)}getAbsoluteUrl(e=!0){return this._context?f(this.href,this._context.getAbsoluteUrl(),e):this.href.includes("://")?this.href:null}getContext(){return this._context}canBrowserDisplayImage(e=!1){if("string"!==typeof this.href)return!1;if(!e&&"undefined"===typeof this.type)return!1;let t=new m(this.href),s=t.protocol().toLowerCase(),r=t.suffix().toLowerCase();return!(n(s)&&!h.includes(s))&&(!(!n(this.type)||!x.includes(this.type.toLowerCase()))||!("undefined"!==typeof this.type||!n(r)||"jpg"!==r&&!x.includes("image/"+r)))}isType(e){return n(this.type)&&v(this.type,e)}isGeoTIFF(){return this.isType(A)}isCOG(){return this.isType(b)}isHTTP(){let e=this.getAbsoluteUrl(!1),t=e.protocol().toLowerCase();return n(t)&&h.includes(t)}}var j=k;class w extends j{constructor(e,t=null){super(e,t)}isLink(){return!0}getObjectType(){return"Link"}static fromLinks(e,t=null){return Array.isArray(e)?e.map((e=>i(e)?new w(e,t):e)):[]}}var E=w;class O extends c{constructor(e,t=null,s={},r=[]){if(super(e,Object.assign({links:E.fromLinks},s),["_url"].concat(r)),!this._url&&(this._url=t,!this._url)){let e=this.getSelfLink();e&&(this._url=e.href)}}getAbsoluteUrl(){return this._url}setAbsoluteUrl(e){this._url=e}getStacLinksWithRel(e,t=!0){return this.getLinksWithRels([e]).filter((e=>_(e.type,t)))}getStacLinkWithRel(e,t=!0){const s=this.getStacLinksWithRel(e,t);return s.length>0?s[0]:null}getLinks(){return Array.isArray(this.links)?this.links.filter((e=>i(e)&&n(e.href))):[]}getLinkWithRel(e){return this.getLinks().find((t=>t.rel===e))||null}getLinksWithRels(e){return this.getLinks().filter((t=>e.includes(t.rel)))}getLinksWithOtherRels(e){return this.getLinks().filter((t=>!e.includes(t.rel)))}getSelfLink(){return this.getStacLinkWithRel("self")}getRootLink(){return this.getStacLinkWithRel("root")}getParentLink(){return this.getStacLinkWithRel("parent")}}var T=O;class B extends T{constructor(e,t=null,s={},r=[]){super(e,t,s,r)}getAll(){return[]}}var C=B;class S extends j{constructor(e,t=null,s=null){super(e,s,{},["_key"]),this._key||(this._key=t)}getObjectType(){return"Asset"}isAsset(){return!0}getAbsoluteUrl(e=!0){return this.isDefintion()?null:super.getAbsoluteUrl(e)}getKey(){return this._key}getMetadata(e){return"undefined"!==typeof this[e]?this[e]:this._context?this._context.getMetadata(e):void 0}getBands(){return a(this["eo:bands"],this["raster:bands"])}findVisualBands(){let e={red:null,green:null,blue:null},t=this.getBands();for(let r in t){let s=parseInt(r,10),a=t[s];i(a)&&n(a.common_name)&&a.common_name in e&&(e[a.common_name]={index:s,band:a})}let s=Object.values(e).every((e=>null!==e));return s?e:null}findBand(e,t="name",s=null){Array.isArray(e)||(e=[e]),i(s)||(s=this.getBands());let r=s.findIndex((s=>i(s)&&e.includes(s[t])));return r>=0?{index:r,band:s[r]}:null}getBand(e){if(i(e)||null===e)return e;let t=this.getBands();return t[e]||null}getMinMaxValues(e=null){e=this.getBand(e);const t={minimum:null,maximum:null},s=e=>null!==e.minimum&&null!==e.maximum;if(e){if(i(e.statistics)&&("number"===typeof e.statistics.minimum&&(t.minimum=e.statistics.minimum),"number"===typeof e.statistics.maximum&&(t.maximum=e.statistics.maximum),s(t)))return t;if(i(e.histogram)&&("number"===typeof e.histogram.min&&(t.minimum=e.histogram.min),"number"===typeof e.histogram.max&&(t.maximum=e.histogram.max),s(t)))return t}let r=this.getMetadata("classification:classes");if(Array.isArray(r)&&(r.reduce(((e,t)=>(e.minimum=Math.min(e.minimum,t.value),e.maximum=Math.max(e.maximum,t.value),e)),t),s(t)))return t;let n=this.getMetadata("file:values");if(Array.isArray(n)&&(n.reduce(((e,t)=>(e.minimum=Math.min(e.minimum,...t.values),e.maximum=Math.max(e.maximum,...t.values),e)),t),s(t)))return t;let a=i(e)&&e.data_type||this.getMetadata("file:data_type");return a&&(t.minimum=o(a),t.maximum=l(a)),t}getNoDataValues(e=null){e=this.getBand(e);let t=[];if(e&&"undefined"!==typeof e.nodata)t.push(e.nodata);else{let e=this.getMetadata("file:nodata");if("undefined"!==typeof e)t=e;else{let e=this.getMetadata("classification:classes");Array.isArray(e)&&(t=e.filter((e=>Boolean(e.nodata))).map((e=>e.value)))}}return t.map((e=>"nan"===e?NaN:"+inf"===e?1/0:"-inf"===e?-1/0:e))}isDefintion(){return!n(this.href)}isHTTP(){return this.isDefintion()?null:super.isHTTP()}hasRole(e,t=!1){return Array.isArray(e)||(e=[e]),!(!t||!e.includes(this.getKey()))||Array.isArray(this.roles)&&Boolean(this.roles.find((t=>e.includes(t))))}static fromAssets(e,t=null){let s={};if(i(e))for(let r in e)s[r]=new S(e[r],r,t);return s}}var L=S;class M extends T{constructor(e,t=null,s={},r=[]){super(e,t,s,r)}getTemporalExtent(){return null}getTemporalExtents(){return[]}getIcons(e=!0){return this.getLinksWithRels(["icon"]).filter((t=>t.canBrowserDisplayImage(e)))}getThumbnails(e=!0,t=null){let s=this.getAssetsWithRoles(["thumbnail","overview"],!0);return t&&s.length>1&&s.sort((e=>Array.isArray(e.roles)&&e.roles.includes(t)||e.getKey()===t?-1:1)),0===s.length&&(s=this.getLinksWithRels(["preview"])),e&&(s=s.filter((e=>e.canBrowserDisplayImage()))),s}getDefaultGeoTIFF(e=!0,t=!1){let s=this.rankGeoTIFFs(e,t);return s[0]?.asset}rankGeoTIFFs(e=!0,t=!1,s=null,r=null){i(s)||(s={data:1,visual:2,thumbnail:2,overview:3});let n=[],a=this.getAssetsByTypes(A);e&&(a=a.filter((e=>e.isHTTP()&&(!t||e.isCOG()))));let o=Object.entries(s);for(let i of a){let e=0;if(o.length>0){let t=o.filter((([e])=>i.hasRole(e,!0))).map((([,e])=>e));t.length>0&&(e+=Math.max(...t))}!t&&i.isCOG()&&(e+=2),i.findVisualBands()&&(e+=1),"function"===typeof r&&(e+=r(i)),n.push({asset:i,score:e})}return n.sort(((e,t)=>t.score-e.score)),n}findVisualAssets(){let e={red:null,green:null,blue:null},t=Object.keys(e),s=this.getAssets();for(let n of s){let s=n.getBands();if(1!==s.length)continue;let r=n.findBand(t,"common_name",s);r&&(e[r.band.common_name]=n)}let r=Object.values(e).every((e=>null!==e));return r?e:null}getAsset(e){return i(this.assets)&&this.assets[e]||null}getAssets(){return i(this.assets)?Object.values(this.assets):[]}getAssetsWithRoles(e,t=!1){return this.getAssets().filter((s=>s.hasRole(e,t)))}getAssetWithRole(e,t=!1){let s=this.getAssetsWithRoles([e],t);return s[0]||null}getAssetsByTypes(e){return this.getAssets().filter((t=>v(t.type,e)))}equals(e){return this===e||e instanceof M&&(this.getObjectType()===e.getObjectType()&&!(!this.id||this.id!==e.id))}}var R=M;class W extends R{constructor(e,t=null,s={},r=[]){super(e,t,s,r)}getObjectType(){return this.type}getSearchLink(e=null){let t=this.getStacLinksWithRel("search");return e?t[0]||null:t.find((t=>t.method===e||!e&&!t.method))||null}getApiCollectionsLink(){return this.getStacLinkWithRel("data")}getApiItemsLink(){return this.getStacLinkWithRel("items")}getChildLinks(){return this.getStacLinksWithRel("child")}getItemLinks(){return this.getStacLinksWithRel("item")}}var I=W;class U extends I{constructor(e,t=null){super(e,t)}}var D=U;function F(e){if(n(e)&&e.length>=10)try{let t=e.match(/^(-?\d{1,})-(\d\d)-(\d\d)[T ](\d\d):(\d\d):(\d\d)(?:\.(\d*))?(?:Z|[+-]00:00)?$/i),s=t.slice(1).map((e=>parseInt(e,10)));return new Date(Date.UTC(s[0],s[1]-1,s[2],s[3],s[4],s[5],s[6]||0))}catch(t){return null}return null}function z(e,t){return new Date(e.valueOf()+(t-e)/2)}function G(e){if(!Array.isArray(e)||0===e.length)return null;let t,s;const r=(e,t,s)=>"undefined"===typeof e?t:null===e||null===t?null:s(e,t);return e.forEach((([e,n])=>{t=r(t,e,Math.min),s=r(s,n,Math.max)})),[null===t?null:new Date(t),null===s?null:new Date(s)]}function N(e){let t=e.length>4,s=e[0],r=e[t?3:2],n=e[1],i=e[t?4:3];return{west:s,east:r,south:n,north:i}}function J(e){let{west:t,east:s,south:r,north:n}=N(e);return[[[t,n],[t,r],[s,r],[s,n],[t,n]]]}function V(e){if(P(e)?e=[e]:Array.isArray(e)&&(e=e.filter((e=>P(e)))),!Array.isArray(e)||0===e.length)return null;let t=e.reduce(((e,t)=>{if(H(t)){let{west:s,east:r,south:n,north:i}=N(t);e.push(J([-180,n,r,i])),e.push(J([s,n,180,i]))}else e.push(J(t));return e}),[]),s=null;return 1===t.length?s={type:"Polygon",coordinates:t[0]}:t.length>1&&(s={type:"MultiPolygon",coordinates:t}),s?{type:"Feature",geometry:s,properties:{}}:void 0}function P(e){if(!Array.isArray(e)||![4,6].includes(e.length)||e.some((e=>"number"!==typeof e)))return!1;let{west:t,east:s,south:r,north:n}=N(e);return r<=n&&t>=-180&&t<=180&&r>=-90&&s<=180&&s>=-180&&n<=90}function H(e){if(!P(e))return!1;let{west:t,east:s}=N(e);return t>s}function K(e){if(!Array.isArray(e)||0===e.length)return null;let t={west:180,south:90,east:-180,north:-90};e.forEach((e=>{if(!P(e))return;let s=N(e),r=["west","south"];for(let n in s){let e=r.includes(n)?Math.min:Math.max;t[n]=e(t[n],s[n])}}));let s=[t.west,t.south,t.east,t.north];return P(s)?s:null}class $ extends I{constructor(e,t=null){const s={assets:L.fromAssets,item_assets:L.fromAssets};super(e,t,s)}toGeoJSON(){let e=V(this.getBoundingBoxes());return e&&(e.id=this.id),e}getBoundingBox(){let e=this.getRawBoundingBoxes();return e.length>0&&P(e[0])?e[0]:null}getBoundingBoxes(){let e=this.getRawBoundingBoxes();return 1===e.length&&P(e[0])?e:e.length>1?e.filter(((e,t)=>t>0&&P(e))):[]}getRawBoundingBoxes(){let e=this.extent?.spatial?.bbox;return Array.isArray(e)&&e.length>0?e:[]}getTemporalExtent(){return this.getTemporalExtents()[0]||null}getTemporalExtents(){let e=this.extent?.temporal?.interval;return Array.isArray(e)&&e.length>0?e.filter((e=>Array.isArray(e)&&(n(e[0])||n(e[1])))).map((e=>e.map((e=>F(e))))):[]}getSummary(e){return this.summaries[e]}getBands(){let e=this.getSummary("eo:bands"),t=this.getSummary("raster:bands"),s=[e,t].filter((e=>Array.isArray(e)));return s.length>=2?a(...s):1===s.length?s[0]:[]}}var q=$;class Z extends C{constructor(e,t=null){const s={collections:e=>e.map((e=>new q(e)))};super(e,t,s)}getObjectType(){return"CollectionCollection"}getAll(){return this.collections}isCollectionCollection(){return!0}toGeoJSON(){let e=this.collections.map((e=>e.toGeoJSON())).filter((e=>null!==e));return{type:"FeatureCollection",features:e}}getBoundingBox(){return K(this.getBoundingBoxes())}getBoundingBoxes(){return this.collections.map((e=>e.getBoundingBox()))}getTemporalExtent(){return G(this.getTemporalExtents())}getTemporalExtents(){return this.collections.map((e=>e.getTemporalExtent()))}}var Q=Z;class X extends R{constructor(e,t=null){super(e,t,{assets:L.fromAssets})}getObjectType(){return"Item"}toGeoJSON(){return this.toJSON()}getBoundingBox(){return P(this.bbox)?this.bbox:null}getBoundingBoxes(){return P(this.bbox)?[this.bbox]:[]}getDateTime(){let e=F(this.properties.datetime);if(!e){let e=F(this.properties.start_datetime),t=F(this.properties.end_datetime);return e&&t?z(e,t):e||t}return e}getTemporalExtent(){return this.getTemporalExtents()[0]||null}getTemporalExtents(){let e=[];return n(this.properties.start_datetime)||n(this.properties.end_datetime)?e=[[this.properties.start_datetime||null,this.properties.end_datetime||null]]:n(this.properties.datetime)&&(e=[[this.properties.datetime,this.properties.datetime]]),e.map((e=>e.map((e=>F(e)))))}getMetadata(e){return this.properties[e]}getBands(){let e=this.getMetadata("eo:bands");return Array.isArray(e)?e:[]}getCollectionLink(){return this.getStacLinkWithRel("collection")}}var Y=X;class ee extends C{constructor(e,t=null){const s={features:e=>e.map((e=>new Y(e)))};super(e,t,s)}getObjectType(){return"ItemCollection"}getAll(){return this.features}toGeoJSON(){return this.toJSON()}getBoundingBox(){return K(this.getBoundingBoxes())}getBoundingBoxes(){return this.features.map((e=>e.getBoundingBox()))}getTemporalExtent(){return G(this.getTemporalExtents())}getTemporalExtents(){return this.features.map((e=>e.getTemporalExtent()))}}var te=ee;function se(e,t=!0,s=!1){return t&&(e=r.stac(e,s)),"Feature"===e.type?new Y(e):"FeatureCollection"===e.type?new te(e):"Collection"===e.type||!e.type&&"undefined"!==typeof e.extent&&"undefined"!==typeof e.license?new q(e):!e.type&&Array.isArray(e.collections)?new Q(e):new D(e)}}}]);
//# sourceMappingURL=5833.d243447e.js.map