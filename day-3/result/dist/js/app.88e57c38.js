(function(e){function t(t){for(var r,s,o=t[0],i=t[1],l=t[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(h.length)h.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},c=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("app-header",{attrs:{changeSearch:e.changeSearch}}),a("div",{staticClass:"container"},[a("h1",{staticClass:"pt-3 pb-3"},[e._v("Персонажи Marvel")]),a("app-modal",{attrs:{character:e.character}}),e.loading?a("spinner"):a("div",{staticClass:"row"},[e.searchCharacters.length?e._l(e.searchCharacters,(function(t,r){return a("div",{key:t.id,staticClass:"card mb-3 col-sm-12 col-md-6 col-lg-4"},[a("div",{staticClass:"row g-0"},[a("div",{staticClass:"col-4"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.thumbnail,alt:t.name}})]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(t.name))]),a("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},on:{click:function(t){e.characterIndex=r}}},[e._v(" Подробнее ")])])])])])})):a("h5",[e._v("Ничего не найдено")])],2)],1)],1)},c=[],s=a("1da1"),o=(a("96cf"),a("d3b7"),a("ac1f"),a("841c"),a("4de4"),a("b0c0"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("div",{staticClass:"spinner-border text-danger",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"})])])}],l={name:"Spinner"},u=l,d=a("2877"),h=Object(d["a"])(u,o,i,!1,null,"0391fb8e",null),f=h.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.character?a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(" "+e._s(e.character.name)+" ")]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),a("div",{staticClass:"modal-body"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:e.character.thumbnail,alt:e.character.name}}),a("div",[a("p",{staticClass:"text-muted"},[e._v(e._s(e.character.modified))]),a("h5",[e._v("Описание:")]),a("p",[e._v(e._s(e.character.description))]),a("h5",[e._v("Комиксы:")]),a("ul",e._l(e.character.comics,(function(t,r){return a("li",{key:r},[e._v(" "+e._s(t.name)+" ")])})),0)]),e._m(0)])])])]):e._e()},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary  btn-sm",attrs:{type:"button","data-bs-dismiss":"modal"}},[e._v(" Закрыть ")])])}],v={name:"AppModal",props:["character"]},b=v,g=Object(d["a"])(b,p,m,!1,null,"066716c8",null),_=g.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-dark bg-dark"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Marvel")]),a("form",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.search,expression:"search",modifiers:{trim:!0}}],staticClass:"form-control me-2",attrs:{type:"search",placeholder:"Поиск...","aria-label":"Search"},domProps:{value:e.search},on:{keypress:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},input:[function(t){t.target.composing||(e.search=t.target.value.trim())},function(t){return e.changeSearch(e.search)}],blur:function(t){return e.$forceUpdate()}}}),a("button",{staticClass:"btn btn-outline-light",attrs:{type:"reset"},on:{click:function(){e.search="",e.changeSearch(e.search)}}},[e._v("все ")])])])])},C=[],w={name:"AppHeader",props:["changeSearch"],data:function(){return{search:""}}},x=w,k=Object(d["a"])(x,y,C,!1,null,"48c7fa90",null),O=k.exports,j={name:"App",components:{AppHeader:O,AppModal:_,Spinner:f},data:function(){return{loading:!1,characters:[],characterIndex:0,search:""}},methods:{fetchCharacters:function(){var e=this;return fetch("https://netology-api-marvel.herokuapp.com/characters").then((function(e){return e.json()})).then((function(t){return e.characters=t}))},changeSearch:function(e){this.search=e}},computed:{character:function(){return this.searchCharacters[this.characterIndex]||null},searchCharacters:function(){var e=this.characters,t=this.search;return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.fetchCharacters();case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()}},S=j,M=Object(d["a"])(S,n,c,!1,null,null,null),A=M.exports,E=a("9483");Object(E["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(A)}}).$mount("#app")}});
//# sourceMappingURL=app.88e57c38.js.map