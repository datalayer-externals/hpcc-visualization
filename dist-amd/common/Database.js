!function(t,r){"function"==typeof define&&define.amd?define(["d3","./Class","./PropertyExt"],r):t.common_Database=r(t.d3,t.common_Class,t.common_PropertyExt)}(this,function(t,r,e){function n(t,n){r.call(this),e.call(this),this._id=t||this._id,n=n||{},this.label(n.label||""),this.type(n.type||""),this.mask(n.mask||null),this.format(n.format||null)}function i(){r.call(this),e.call(this),this.clear()}function o(t,r){return t instanceof Array||(t=[t]),t.filter(function(t){return""!==t}).every(r)}function s(t){return"boolean"==typeof t}function a(t){return"number"==typeof t||!isNaN(t)}function u(t){return"string"==typeof t}function f(r,e){for(var n=0;n<r.length;++n){var i=t.time.format(r[n]).parse(e);if(i)return b=r[n],r[n]}return null}function p(t){return f(v,t)}function l(t){return f(_,t)}function h(t){return f(w,t)}function c(t){return["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","AS","DC","FM","GU","MH","MP","PW","PR","VI"].indexOf(String(t).toUpperCase())>=0}n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.prototype.mixin(e),n.prototype._class+=" common_Database.Field",n.prototype.id=function(){return this._id},n.prototype.publish("label","","string","Label"),n.prototype.publish("type","","set","Type",["","string","number","boolean","time"]);var m=n.prototype.type;n.prototype.type=function(t){var r=m.apply(this,arguments);if(arguments.length)switch(this.type()){case"number":this._typeTransformer=function(t){return Number(t)};break;case"string":this._typeTransformer=function(t){return String(t)};break;case"boolean":this._typeTransformer=function(t){return"string"==typeof t&&["false","off","0"].indexOf(t.toLowerCase())>=0?!1:Boolean(t)};break;case"time":case"date":this._typeTransformer=function(t){return this._maskTransformer.parse(t)};break;default:this._typeTransformer=function(t){return t}}return r},n.prototype.publish("mask","","string","Time Mask");var d=n.prototype.mask;n.prototype.mask=function(t){var r=d.apply(this,arguments);return arguments.length&&(this._maskTransformer=this.formatter(t)),r},n.prototype.publish("format","","string","Format");var y=n.prototype.format;n.prototype.format=function(t){var r=y.apply(this,arguments);return arguments.length&&(this._formatTransformer=this.formatter(t)),r},n.prototype.parse=function(t){if(!t)return t;try{return this._typeTransformer(t)}catch(r){return console.log("Unable to parse:  "+t),null}},n.prototype.transform=function(t){if(!t)return t;try{return this._formatTransformer(this._typeTransformer(t))}catch(r){return console.log("Unable to transform:  "+t),null}},n.prototype.clone=function(){return new n(this._id,{label:this.label(),type:this.type(),mask:this.mask(),format:this.format()})},n.prototype.formatter=function(r){var e;if(!r)return e=function(t){return t},e.parse=function(t){return t},e;switch(this.type()){case"time":case"date":return t.time.format(r)}return e=t.format(r),e.parse=function(t){return t},e},i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype.mixin(e),i.prototype._class+=" common_Database.Grid",i.prototype.publish("fields",[],"propertyArray","Fields"),i.prototype.clear=function(){return this.fields([]),this._data=[],this},i.prototype.legacyColumns=function(t){return arguments.length?(this.row(0,t),this):this.row(0)},i.prototype.legacyData=function(t,r){return i.prototype.data.apply(this,arguments)},i.prototype.field=function(t){return this.fields()[t]};var g=i.prototype.fields;i.prototype.fields=function(t,r){return arguments.length?g.call(this,r?t.map(function(t){return t.clone()}):t):g.apply(this,arguments)},i.prototype.fieldByLabel=function(t,r){return this.fields().filter(function(e,n){return e.idx=n,r?e.label().toLowerCase()===t.toLowerCase():e.label()===t})[0]},i.prototype.data=function(t,r){return arguments.length?(this._data=r?t.map(function(t){return t.map(function(t){return t})}):t,this):this._data},i.prototype.parsedData=function(){var t=this;return this._data.map(function(r){return r.map(function(r,e){return t.fields()[e].parse(r)})})},i.prototype.formattedData=function(){var t=this;return this._data.map(function(r){return r.map(function(r,e){return t.fields()[e].transform(r)})})},i.prototype.row=function(t,r){return arguments.length<2?0===t?this.fields().map(function(t){return t.label()}):this._data[t-1]:(0===t?this.fields(r.map(function(t){return(new n).label(t)})):this._data[t-1]=r,this)},i.prototype.rows=function(t){return arguments.length?(this.row(0,t[0]),this._data=t.filter(function(t,r){return r>0}),this):[this.row(0)].concat(this._data)},i.prototype.column=function(t,r){return arguments.length<2?[this.fields()[t].label()].concat(this._data.map(function(r,e){return r[t]})):(r.forEach(function(e,i){0===i?this.fields()[t]=(new n).label(r[0]):this._data[i-1][t]=e},this),this)},i.prototype.columnData=function(t,r){return arguments.length<2?this._data.map(function(r,e){return r[t]}):(r.forEach(function(r,e){this._data[e][t]=r},this),this)},i.prototype.columns=function(t){return arguments.length?(t.forEach(function(r,e){this.column(e,t[e])},this),this):this.fields().map(function(t,r){return this.column(r)},this)},i.prototype.cell=function(t,r,e){return arguments.length<3?this.row(t)[r]:(0===t?this.fields()[r]=(new n).label(e):this._data[t][r]=e,this)},i.prototype.grid=function(t){return i.prototype.rows.apply(this,arguments)},i.prototype.hipieMapSortArray=function(t){return t.map(function(t){var r=!1;0===t.indexOf("-")&&(t=t.substring(1),r=!0);var e=this.fieldByLabel(t,!0);return e||console.log("Grid.prototype.hipieMapSortArray:  Invalid sort array - "+t),{idx:e?e.idx:-1,reverse:r}},this).filter(function(t){return t.idx>=0})},i.prototype.hipieMappings=function(r){function e(t,r,n,i){var o=n.map(function(t){return t});o[r]=t.key,t.values instanceof Array?t.values.forEach(function(t){e(t,r+1,o,i)}):(o[r+1]=t.values,i.push(o))}var n=-1,i=[],o=[],s=-1,a=[];if(r.forEach(function(t,r){if(t instanceof Object)switch(t["function"]){case"SUM":case"AVE":case"MIN":case"MAX":n>=0&&console.log("Rollup field already exists - there should only be one?"),n=r,t.params.forEach(function(t){var r=this.fieldByLabel(t.param1,!0);r?i.push(r.idx):console.log("Grid.prototype.hipieMappings:  Invalid rollup field - "+t.param1)},this);break;case"SCALE":s>=0&&console.log("Scale field already exists - there should only be one?"),s=r,t.params.forEach(function(t){var r=this.fieldByLabel(t.param1,!0);if(r){var e=r.idx,n=t.param2;a.push(function(t){return t[e]/n})}else console.log("Grid.prototype.hipieMappings:  Invalid scale field - "+t.param1)},this);break;default:console.log("Unknown field function - "+t["function"])}else if(t.indexOf("_AVE")===t.length-4&&this.fieldByLabel(t.substring(0,t.length-4)+"_SUM",!0)&&this.fieldByLabel("base_count",!0)){console.log("Deprecated - Symposium AVE Hack");var e=this.fieldByLabel(t.substring(0,t.length-4)+"_SUM",!0),u=this.fieldByLabel("base_count",!0);o.push(e.idx),a.push(function(t){return t[e.idx]/t[u.idx]})}else{var f=this.fieldByLabel(t,!0);f&&(o.push(f.idx),a.push(function(t){return t[f.idx]}))}},this),n>=0){var u=r[n],f=[];for(var p in u.params)f.push(u.params[p]);var l=this.rollup(o,function(r){switch(u["function"]){case"SUM":return t.sum(r,function(t){return t[i[0]]});case"AVE":return t.mean(r,function(t){return t[i[0]]});case"MIN":return t.min(r,function(t){return t[i[0]]});case"MAX":return t.max(r,function(t){return t[i[0]]})}return console.log("Unsupported Mapping Function:  "+u["function"]),0}),h=[];return l instanceof Array?l.forEach(function(t){e(t,0,[],h)}):h.push([l]),h}return this._data.map(function(t){var r=[];return a.forEach(function(e){r.push(e(t))}),r})},i.prototype._nest=function(r,e){r instanceof Array||(r=[r]);var n=t.nest();return r.forEach(function(t){n.key(function(r){return r[t]})}),n},i.prototype.nest=function(t){return this._nest(t).entries(this._data)},i.prototype.rollup=function(t,r){return this._nest(t).rollup(r).entries(this._data)},i.prototype.length=function(){return this._data.length+1},i.prototype.width=function(){return this.fields().length},i.prototype.pivot=function(){return this.rows(this.columns()),this},i.prototype.clone=function(t){return(new i).fields(this.fields(),t).data(this.data(),t)},i.prototype.filter=function(t){var r={};return this.row(0).forEach(function(t,e){r[t]=e}),(new i).fields(this.fields(),!0).data(this.data().filter(function(e){for(var n in t)if(t[n]!==e[r[n]])return!1;return!0}))};var b=null;i.prototype.analyse=function(t){t instanceof Array||(t=[t]);var r=[];return t.forEach(function(t){var e=this.rollup(t,function(t){return t.length});r.push(e);var n=e.map(function(t){return t.key});this.fields()[t].isBoolean=o(n,s),this.fields()[t].isNumber=o(n,a),this.fields()[t].isString=!this.fields()[t].isNumber&&o(n,u),this.fields()[t].isUSState=this.fields()[t].isString&&o(n,c),this.fields()[t].isDateTime=this.fields()[t].isString&&o(n,p),this.fields()[t].isDateTimeFormat=b,this.fields()[t].isDate=!this.fields()[t].isDateTime&&o(n,l),this.fields()[t].isDateFormat=b,this.fields()[t].isTime=this.fields()[t].isString&&!this.fields()[t].isDateTime&&!this.fields()[t].isDate&&o(n,h),this.fields()[t].isTimeFormat=b},this),r},i.prototype.jsonObj=function(t){return arguments.length?(this.clear(),this.data(t.map(function(t,r){var e=[];for(var i in t){var o=this.row(0).indexOf(i);0>o&&(o=this.fields().length,this.fields().push((new n).label(i))),e[o]=t[i]}return e},this)),this):this._data.map(function(t){var r={};return this.row(0).forEach(function(e,n){r[e]=t[n]}),r},this)},i.prototype.json=function(t){return arguments.length?(this.jsonObj(JSON.parse(t)),this):JSON.stringify(this.jsonObj(),null,"  ")},i.prototype.csv=function(r){return arguments.length?(this.jsonObj(t.csv.parse(r)),this):t.csv.formatRows(this.grid())},i.prototype.tsv=function(r){return arguments.length?(this.jsonObj(t.tsv.parse(r)),this):t.tsv.formatRows(this.grid())};var v=[],_=["%Y-%m-%d","%Y%m%d"],w=["%H:%M:%S.%LZ","%H:%M:%SZ","%H:%M:%S"];return _.forEach(function(t){w.forEach(function(r){v.push(t+"T"+r)})}),{Field:n,Grid:i}});