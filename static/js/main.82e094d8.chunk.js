(this.webpackJsonpfuelup=this.webpackJsonpfuelup||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},19:function(e,t,n){},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(12),l=n.n(c),r=(n(19),n(20),function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to fuelup"))}),u=n(2),i=Object(a.createContext)(),s=function(e){var t=Object(a.useState)({latitude:null,longitude:null,locality:null}),n=Object(u.a)(t,2),c=n[0],l=n[1];return Object(a.useEffect)((function(){!function(){if(navigator.geolocation){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,n=e.coords.longitude;l({latitude:t,longitude:n}),console.info("Geolocation obtained successfully")}),(function(e){console.warn("Geolocation ERROR(".concat(e.code,"): ").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}}()}),[]),o.a.createElement(i.Provider,{value:[c,l]},e.children)},d=function(){var e=Object(a.useContext)(i),t=Object(u.a)(e,1)[0];return o.a.createElement("div",{id:"user-location"},"Your location is ",t.latitude,", ",t.longitude)},m=n(13),f=n.n(m),v=Object(a.createContext)(),p=function(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),c=n[0],l=n[1];return Object(a.useEffect)((function(){f()("https://cors-anywhere.herokuapp.com/https://www.racv.com.au/bin/racv/fuelprice.2.json").then((function(e){return l(e.data)}))}),[]),o.a.createElement(v.Provider,{value:[c,l]},e.children)},h=function(){var e=Object(a.useContext)(v),t=Object(u.a)(e,1)[0];return console.log(t.GraphJSON),o.a.createElement("div",{id:"fuel-prices"},"Today's ",o.a.createElement("span",null,"Unleaded 91")," average price is ","")};var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(r,null)),o.a.createElement("main",null,o.a.createElement(s,null,o.a.createElement(d,null)),o.a.createElement(p,null,o.a.createElement(h,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.82e094d8.chunk.js.map