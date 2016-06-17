(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/SVGWidget","../common/Palette","../common/PropertyExt","d3-sankey","css!./Sankey"],t):e.graph_Sankey=t(e.d3,e.common_SVGWidget,e.common_Palette,e.common_PropertyExt,e.d3.sankey)})(this,function(e,t,n,r,i){function s(e){r.call(this),this._owner=e}function o(e){t.call(this),this._drawStartPos="origin"}return i=i||e.sankey||window.d3.sankey,s.prototype=Object.create(r.prototype),s.prototype.constructor=s,s.prototype._class+=" graph_Sankey.Column",s.prototype.publish("column",null,"set","Field",function(){return this._owner?this._owner.columns():[]},{optional:!0}),s.prototype.publish("aggrType",null,"set","Aggregation Type",[null,"mean","median","sum","min","max"],{optional:!0,disable:function(e){return!e._owner||e._owner.mappings().indexOf(e)===0}}),s.prototype.publish("aggrColumn",null,"set","Aggregation Field",function(){return this._owner?this._owner.columns():[]},{optional:!0,disable:function(e){return!e._owner||!e.aggrType()||e._owner.mappings().indexOf(e)===0}}),s.prototype.aggregate=function(t){switch(this.aggrType()){case null:case undefined:case"":return t.length;default:var n=this._owner.columns(),r=n.indexOf(this.aggrColumn());return e[this.aggrType()](t,function(e){return+e[r]})}},o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.prototype._class+=" graph_Sankey",o.prototype.Column=s,o.prototype._palette=n.ordinal("default"),o.prototype.publish("paletteID","default","set","Palette ID",o.prototype._palette.switch()),o.prototype.publish("mappings",[],"propertyArray","Source Columns",null,{autoExpand:s}),o.prototype.publish("vertexWidth",36,"number","Vertex Width"),o.prototype.publish("vertexPadding",40,"number","Vertex Padding"),o.prototype.publish("xAxisMovement",!1,"boolean","Enable x-axis movement"),o.prototype.publish("yAxisMovement",!1,"boolean","Enable y-axis movement"),o.prototype.sankeyData=function(){var e={},t={vertices:[],edges:[]},n=this.mappings().filter(function(e){return e.column()});return n.forEach(function(n,r){var i=this._db.rollupView([n.column()]);i.entries().forEach(function(i){var s=n.column()+":"+r+":"+i.key;e[s]||(t.vertices.push({__id:s,__category:n.column(),name:i.key,origRow:i}),e[s]=t.vertices.length-1)},this)},this),n.forEach(function(r,i){if(i<n.length-1){var s=n[i+1],o=this._db.rollupView([r.column(),s.column()]);o.entries().forEach(function(n){var o=r.column()+":"+i+":"+n.key;n.values.forEach(function(n){var r=s.column()+":"+(i+1)+":"+n.key;t.edges.push({__id:o+"_"+r,source:e[o],target:e[r],value:s.aggregate(n.values)})})})}},this),t},o.prototype.enter=function(n,r){t.prototype.enter.apply(this,arguments),this._d3Sankey=e.sankey(),this._d3SankeyPath=this._d3Sankey.link()},o.prototype.update=function(n,r){function a(t){var n=e.select(this);s.xAxisMovement()&&(t.x=Math.max(0,Math.min(s.width()-t.dx,e.event.x))),s.yAxisMovement()&&(t.y=Math.max(0,Math.min(s.height()-t.dy,e.event.y))),n.attr("transform","translate("+t.x+","+t.y+")"),s._d3Sankey.relayout(),o.attr("d",s._d3SankeyPath),n.select("text").attr("x",-6).attr("y",function(e){return e.dy/2}).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text(function(e){return e.name}).filter(function(e){return e.x<s.width()/2}).attr("x",6+s._d3Sankey.nodeWidth()).attr("text-anchor","start")}t.prototype.update.apply(this,arguments),this._palette=this._palette.switch(this.paletteID());var i=this.sankeyData();this._d3Sankey.size([this.width(),this.height()]).nodeWidth(this.vertexWidth()).nodePadding(this.vertexPadding()).nodes(i.vertices).links(i.edges).layout(32);var s=this,o=r.selectAll(".link").data(i.edges);o.enter().append("path").attr("class","link").append("title"),o.attr("d",this._d3SankeyPath).style("stroke-width",function(e){return Math.max(1,e.dy)}).sort(function(e,t){return t.dy-e.dy}),o.select("title").text(function(e){return e.source.name+" → "+e.target.name+"\n"+e.value}),o.exit().remove();var u=r.selectAll(".node").data(i.vertices);u.enter().append("g").attr("class","node").each(function(t){var n=e.select(this);n.append("rect"),n.append("text")}).on("click.mouse",function(e,t){s.click(e.origRow,"",!0)}).call(e.behavior.drag().origin(function(e){return e}).on("dragstart",function(){this.parentNode.appendChild(this)}).on("drag",a)),u.attr("transform",function(e){return"translate("+e.x+","+e.y+")"}),u.select("rect").attr("height",function(e){return e.dy}).attr("width",this._d3Sankey.nodeWidth()).style("fill",function(e){return s._palette(e.name)}).style("stroke",function(t){return e.rgb(s._palette(t.name)).darker(2)}).style("cursor",this.xAxisMovement()||this.yAxisMovement()?null:"default"),u.select("text").attr("x",-6).attr("y",function(e){return e.dy/2}).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text(function(e){return e.name}).filter(function(e){return e.x<s.width()/2}).attr("x",6+this._d3Sankey.nodeWidth()).attr("text-anchor","start"),u.exit().remove()},o.prototype.exit=function(e,n){t.prototype.exit.apply(this,arguments)},o.prototype.click=function(e,t,n){console.log(e+", "+t+", "+n)},o});