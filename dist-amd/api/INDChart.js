(function(e,t){typeof define=="function"&&define.amd?define(["../common/Palette"],t):e.api_INDChart=t(e.common_Palette)})(this,function(e){function t(){}return t.prototype._palette=e.ordinal("default"),t.prototype.click=function(e,t,n){console.log("Click:  "+JSON.stringify(e)+", "+t+", "+n)},t});