!function(t,e){if("function"==typeof define&&define.amd){var o="https:"===window.location.protocol?"https:":"http:",i=window.__hpcc_gmap_apikey||"AIzaSyDwGn2i1i_pMZvnqYJN1BksD_tjYaCOWKg";define(["d3","../common/HTMLWidget","../layout/AbsoluteSurface","async!"+o+"//maps.google.com/maps/api/js?key="+i,"css!./GMap"],e)}else t.map_GMap=e(t.d3,t.common_HTMLWidget,t.layout_AbsoluteSurface)}(this,function(t,e,o){function i(t,e,o){google.maps.OverlayView.call(this),this._div=null,this._worldSurface=e,this._viewportSurface=o,this._map=t,this.setMap(t);var i=this;google.maps.event.addListener(t,"bounds_changed",function(){i.draw()}),google.maps.event.addListener(t,"projection_changed",function(){i.draw()}),this._prevWorldMin={x:0,y:0},this._prevWorldMax={x:0,y:0},this._prevMin={x:0,y:0},this._prevMax={x:0,y:0}}function r(){function t(t,e,o){var r=i._overlay.getProjection(),a=r.fromLatLngToDivPixel(new google.maps.LatLng(e,o)),n=r.getWorldWidth(),s=parseFloat(t.widgetX()),p=parseFloat(t.widgetY()),l=parseFloat(t.widgetWidth());for(a.x-=s,a.y-=p;a.x<0;)a.x+=n;for(;a.x>l;)a.x-=n;return a}e.call(this),this._tag="div";var i=this;this._worldSurface=new o,this._worldSurface.project=function(e,o){return t(this,e,o)},this._viewportSurface=new o,this._viewportSurface.project=function(e,o){return t(this,e,o)}}return i.prototype=google.maps.OverlayView.prototype,i.prototype.onAdd=function(){this.div=document.createElement("div"),this._viewportSurface.target(this.div).units("pixels");var t=this.getPanes();t.overlayMouseTarget.appendChild(this.div)},i.prototype.draw=function(){var t=this.getProjection();if(t){for(var e=this._map.getBounds(),o=t.fromLatLngToDivPixel(e.getCenter()),i=t.fromLatLngToDivPixel(e.getSouthWest()),r=t.fromLatLngToDivPixel(e.getNorthEast()),a={x:i.x,y:r.y},n={x:r.x,y:i.y},s=t.getWorldWidth();n.x<a.x+100;)n.x+=s;for(;a.x>o.x;)a.x-=s,n.x-=s;(a.x!==this._prevMin.x||a.y!==this._prevMin.y||n.x!==this._prevMax.x||n.y!==this._prevMax.y)&&(this._viewportSurface.widgetX(a.x).widgetY(a.y).widgetWidth(n.x-a.x).widgetHeight(n.y-a.y),this._viewportSurface._renderCount?(this._viewportSurface.render(),this._prevMin=a,this._prevMax=n):this._viewportSurface.lazyRender());for(var p=t.fromLatLngToDivPixel(new google.maps.LatLng(85,-179.9)),l=t.fromLatLngToDivPixel(new google.maps.LatLng(-85,179.9));l.x<p.x+100;)l.x+=s;for(;p.x>o.x;)p.x-=s,l.x-=s;(p.x!==this._prevWorldMin.x||p.y!==this._prevWorldMin.y||l.x!==this._prevWorldMax.x||l.y!==this._prevWorldMax.y)&&(this._worldSurface.widgetX(p.x).widgetY(p.y).widgetWidth(l.x-p.x).widgetHeight(l.y-p.y).render(),this._prevWorldMin=l,this._prevWorldMax=l)}},i.prototype.onRemove=function(){this._viewportSurface.target(null),this._div.parentNode.removeChild(this._div),this._div=null},r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.prototype._class+=" map_GMap",r.prototype.publish("type","road","set","Map Type",["terrain","road","satellite","hybrid"],{tags:["Basic"]}),r.prototype.publish("centerLat",42.877742,"number","Center Latitude",null,{tags:["Basic"]}),r.prototype.publish("centerLong",-97.380979,"number","Center Longtitude",null,{tags:["Basic"]}),r.prototype.publish("zoom",4,"number","Zoom Level",null,{tags:["Basic"]}),r.prototype.publish("panControl",!0,"boolean","Pan Controls",null,{tags:["Basic"]}),r.prototype.publish("zoomControl",!0,"boolean","Pan Controls",null,{tags:["Basic"]}),r.prototype.publish("mapTypeControl",!1,"boolean","Pan Controls",null,{tags:["Basic"]}),r.prototype.publish("scaleControl",!0,"boolean","Pan Controls",null,{tags:["Basic"]}),r.prototype.publish("streetViewControl",!1,"boolean","Pan Controls",null,{tags:["Basic"]}),r.prototype.publish("overviewMapControl",!1,"boolean","Pan Controls",null,{tags:["Basic"]}),r.prototype.publish("googleMapStyles",{},"object","Styling for map colors etc",null,{tags:["Basic"]}),r.prototype.data=function(t){var o=e.prototype.data.apply(this,arguments);return o},r.prototype.getMapType=function(){switch(this.type()){case"terrain":return google.maps.MapTypeId.TERRAIN;case"road":return google.maps.MapTypeId.ROADMAP;case"satellite":return google.maps.MapTypeId.SATELLITE;case"hybrid":return google.maps.MapTypeId.HYBRID;default:return google.maps.MapTypeId.ROADMAP}},r.prototype.getMapOptions=function(){return{panControl:this.panControl(),zoomControl:this.zoomControl(),mapTypeControl:this.mapTypeControl(),scaleControl:this.scaleControl(),streetViewControl:this.streetViewControl(),overviewMapControl:this.overviewMapControl(),overviewMapControlOptions:{opened:!0},styles:this.googleMapStyles()}},r.prototype.size=function(t){var o=e.prototype.size.apply(this,arguments);return arguments.length&&this._googleMapNode&&(this._googleMapNode.style({width:t.width+"px",height:t.height+"px"}),google.maps.event.trigger(this._googleMap,"resize")),o},r.prototype.enter=function(o,r){e.prototype.enter.apply(this,arguments),this._googleMapNode=r.append("div").style({width:this.width()+"px",height:this.height()+"px"}),this._googleMap=new google.maps.Map(this._googleMapNode.node(),{zoom:this.zoom(),center:new google.maps.LatLng(this.centerLat(),this.centerLong()),mapTypeId:this.getMapType(),disableDefaultUI:!0}),this._overlay=new i(this._googleMap,this._worldSurface,this._viewportSurface),this._circleMap=t.map([]),this._pinMap=t.map([]),this._prevCenterLat=this.centerLat(),this._prevCenterLong=this.centerLong(),this._prevZoom=this.zoom()},r.prototype.update=function(t,e){this._googleMap.setMapTypeId(this.getMapType()),this._googleMap.setOptions(this.getMapOptions()),(this._prevCenterLat!==this.centerLat()||this._prevCenterLong!==this.centerLong())&&(this._googleMap.setCenter(new google.maps.LatLng(this.centerLat(),this.centerLong())),this._prevCenterLat=this.centerLat(),this._prevCenterLong=this.centerLong()),this._prevZoom!==this.zoom()&&(this._googleMap.setZoom(this.zoom()),this._prevZoom=this.zoom()),this.updateCircles(),this.updatePins()},r.prototype.updateCircles=function(){function e(t){return t[0]+"_"+t[1]}var o=[],i=[],r=t.map(this._circleMap.keys(),function(t){return t});this.data().forEach(function(t){r.remove(e(t)),t[3]&&!this._circleMap.has(e(t))?o.push(t):t[3]&&this._circleMap.has(e(t))?i.push(t):!t[3]&&this._circleMap.has(e(t))&&r.set(e(t),!0)},this),o.forEach(function(t){var o=this.createCircle(t[0],t[1],t[3],"");this._circleMap.set(e(t),o)},this),i.forEach(function(t){},this);var a=this;r.forEach(function(t){a._circleMap.get(t).setMap(null),a._circleMap.remove(t)})},r.prototype.updatePins=function(){function e(t){return t[0]+"_"+t[1]}var o=[],i=[],r=t.map(this._pinMap.keys(),function(t){return t});this.data().forEach(function(t){r.remove(e(t)),t[2]&&!this._pinMap.has(e(t))?o.push(t):t[2]&&this._pinMap.has(e(t))?i.push(t):!t[2]&&this._pinMap.has(e(t))&&r.set(e(t),!0)},this),o.forEach(function(t){var o=this.createMarker(t[0],t[1],t[2],"");this._pinMap.set(e(t),o)},this),i.forEach(function(t){this._pinMap.get(e(t)).setIcon(this.createIcon(t[2]))},this);var a=this;r.forEach(function(t){a._pinMap.get(t).setMap(null),a._pinMap.remove(t)})},r.prototype.createIcon=function(t){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30",fillColor:t.fillColor,fillOpacity:t.fillOpacity||.8,scale:.5,strokeColor:t.strokeColor||"black",strokeWeight:.25}},r.prototype.createMarker=function(t,e,o){return new google.maps.Marker({position:new google.maps.LatLng(t,e),animation:google.maps.Animation.DROP,title:o.title||"",icon:this.createIcon(o),map:this._googleMap})},r.prototype.createCircle=function(t,e,o){return new google.maps.Circle({center:new google.maps.LatLng(t,e),radius:16093*o.radius/10,fillColor:o.fillColor||"red",strokeColor:o.strokeColor||o.fillColor||"black",strokeWeight:.5,map:this._googleMap})},r.prototype.zoomTo=function(t){var e=0,o=new google.maps.LatLngBounds;return t.forEach(function(t){var i=new google.maps.LatLng(t[0],t[1]);o.extend(i),++e}),e&&(this._googleMap.setCenter(o.getCenter()),this._googleMap.fitBounds(o),this._googleMap.getZoom()>12&&this._googleMap.setZoom(12)),this},r.prototype.zoomToFit=function(){return this.zoomTo(this.data())},r});