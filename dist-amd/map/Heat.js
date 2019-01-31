!function(t,e){"function"==typeof define&&define.amd?define(["d3","topojson","./Layer","../other/HeatMap","../common/Palette","css!./Heat"],e):t.map_Heat=e(t.d3,t.topojson,t.map_Layer,t.other_HeatMap,t.common_Palette)}(this,function(t,e,o,a,r){function n(){o.call(this)}return n.prototype=Object.create(o.prototype),n.prototype.constructor=n,n.prototype._class+=" map_Heat",n.prototype.publish("opacity",1,"number","Opacity",null,{tags:["Advanced"]}),n.prototype.publish("meshColor",null,"html-color","Stroke Color",null,{optional:!0}),n.prototype.publish("meshStrokeWidth",.25,"number","Stroke Width"),n.prototype.layerEnter=function(t,e,r){o.prototype.layerEnter.apply(this,arguments),this._parentOverlay.style("pointer-events","none"),this._heatTransform=r.style("pointer-events","none").append("div").attr("class",this.classID()).style("width",t.width()+"px").style("height",t.height()+"px"),this.heat=(new a).target(this._heatTransform.node())},n.prototype.layerUpdate=function(t){o.prototype.layerUpdate.apply(this,arguments),this._heatTransform.style("opacity",this.opacity()).style("width",t.width()+"px").style("height",t.height()+"px"),this.heat.resize(t.size()),this.heat.columns(this.columns()).data(this.data().map(function(e){var o=t.project(e[0],e[1]);return[o[0],o[1],e[4]]})).render()},n.prototype.layerExit=function(t){delete this._prevProjection,this.heat.target(null),delete this.heat},n.prototype.layerZoomed=function(t){o.prototype.layerZoomed.apply(this,arguments),this.heat.columns(this.columns()).data(this.visible()?this.data().map(function(e){var o=t.project(e[0],e[1]);return[o[0],o[1],e[4]]}):[]).render()},n});