(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function s(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0cf120":"7957c372","chunk-2d0e19c3":"a92c7a8c","chunk-2d0e95df":"0030591c","chunk-5438d156":"e382266c","chunk-6c8c3552":"aeb99f64","chunk-be8182d0":"916fd972","chunk-c1893d7c":"6113714b"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-5438d156":1,"chunk-6c8c3552":1,"chunk-be8182d0":1,"chunk-c1893d7c":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-2d0cf120":"31d6cfe0","chunk-2d0e19c3":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-5438d156":"95d2f0df","chunk-6c8c3552":"7e898988","chunk-be8182d0":"2056d942","chunk-c1893d7c":"58209954"}[e]+".css",r=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],f.parentNode.removeChild(f),n(o)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1ca6":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n("b775");function i(e){return Object(a["a"])({url:"/record/submit/sleep",method:"post",data:e})}function r(e){return Object(a["a"])({url:"/record/query/sleep",method:"get",params:{token:e}})}function o(e){return Object(a["a"])({url:"/record/analysis/sleep",method:"get",params:{token:e}})}},4360:function(e,t,n){"use strict";var a=n("2b0e"),i=n("2f62"),r=(n("b0c0"),{config:function(e){return e.show.config},activeMenu:function(e){return e.menu.activeMenu},catalog:function(e){return e.editor.catalog},activeNote:function(e){return e.editor.activeNote},token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name}}),o=r,s={config:{nav:!0,menu:!0,tree:!1,editor:!0,reminder:!1,dialogSleep:!1}},c={CHANGE_CONFIG:function(e,t){var n=t.key,a=t.val;e.config[n]=a}},u={changeConfig:function(e,t){var n=e.commit;n("CHANGE_CONFIG",t)}},l={namespaced:!0,state:s,mutations:c,actions:u},d={activeMenu:null},f={CHANGE_ACTIVEMENU:function(e,t){e.activeMenu=t}},h={changeActiveMenu:function(e,t){var n=e.commit;n("CHANGE_ACTIVEMENU",t)}},m={namespaced:!0,state:d,mutations:f,actions:h},p=n("e9bd"),v={catalog:[{id:0,key:"0",parent:"0",metadata:{title:"root",level:0,filetype:"nb",tag:[]},reminder:{enable:!1,count:0,last_time:0,next_time:0},children:[{id:1,key:"1",parent:"0",metadata:{title:"file1",level:1,filetype:"md",tag:[]},reminder:{enable:!0,count:1,last_time:0,next_time:1585980012e3}},{id:2,key:"2",parent:"0",metadata:{title:"file2",level:1,filetype:"md",tag:[]},reminder:{enable:!0,count:0,last_time:1585980012e3,next_time:1588399212e3}}]}],activeNote:{id:1,key:"1",parent:"0",metadata:{title:"file1",level:1,filetype:"md",tag:[]},reminder:{enable:!0,count:0,last_time:0,next_time:0}},contents:[]},b={CHANGE_CATALOG:function(e,t){e.catalog=t},CHANGE_ACTIVENOTE:function(e,t){e.activeNote=t},CHANGE_FILECONTENT:function(e,t){var n=t.key,a=t.content;e.contents[n]=a},UPDATE_CATALOG:function(e){Object(p["d"])(e.catalog).then((function(e){}))}},g={changeCatalog:function(e,t){var n=e.commit;n("CHANGE_CATALOG",t)},changeActiveNote:function(e,t){var n=e.commit;n("CHANGE_ACTIVENOTE",t)},updateCatalog:function(e){var t=e.commit;t("UPDATE_CATALOG")},changeFileContent:function(e,t){var n=e.commit;n("CHANGE_FILECONTENT",t)}},k={namespaced:!0,state:v,mutations:b,actions:g},j=(n("d3b7"),n("498a"),n("b775"));function w(e){return Object(j["a"])({url:"/user/login",method:"post",data:e})}function y(e){return Object(j["a"])({url:"/user/info",method:"get",params:{token:e}})}function _(){return Object(j["a"])({url:"/user/logout",method:"post"})}var x=n("5f87"),T=n("a18c"),E={token:Object(x["a"])(),name:"",avatar:""},C={SET_TOKEN:function(e,t){e.token=t},SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t}},M={login:function(e,t){var n=e.commit,a=t.username,i=t.password;return new Promise((function(e,t){w({username:a.trim(),password:i}).then((function(t){var a=t.data;n("SET_TOKEN",a.token),Object(x["c"])(a.token),e()})).catch((function(e){t(e)}))}))},getInfo:function(e){var t=e.commit,n=e.state;return new Promise((function(e,a){y(n.token).then((function(n){var i=n.data;i||a("Verification failed, please Login again.");var r=i.name,o=i.avatar;t("SET_NAME",r),t("SET_AVATAR",o),e(i)})).catch((function(e){a(e)}))}))},logout:function(e){var t=e.commit,n=e.state;return new Promise((function(e,a){_(n.token).then((function(){t("SET_TOKEN",""),Object(x["b"])(),Object(T["resetRouter"])(),e()})).catch((function(e){a(e)}))}))},resetToken:function(e){var t=e.commit;return new Promise((function(e){t("SET_TOKEN",""),Object(x["b"])(),e()}))}},$={namespaced:!0,state:E,mutations:C,actions:M};a["default"].use(i["a"]);var O=new i["a"].Store({modules:{show:l,menu:m,editor:k,user:$},getters:o});t["a"]=O},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o={name:"App"},s=o,c=n("2877"),u=Object(c["a"])(s,i,r,!1,null,null,null),l=u.exports,d=n("a18c"),f=n("4360"),h=n("f309");a["default"].use(h["a"]);var m=new h["a"]({icons:{iconfont:"mdi"}}),p=n("85ff"),v=n.n(p),b=n("ee98"),g=n.n(b),k=(n("c975"),n("b0c0"),n("96cf"),n("1da1")),j=n("323e"),w=n.n(j),y=(n("a5d8"),n("5f87"));w.a.configure({showSpinner:!1});var _=["/login"];d["a"].beforeEach(function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t,n,a){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(w.a.start(),document.title="Mirror",i=Object(y["a"])(),!i){e.next=27;break}if("/login"!==t.path){e.next=9;break}a({path:"/"}),w.a.done(),e.next=25;break;case 9:if(r=f["a"].getters.name,!r){e.next=14;break}a(),e.next=25;break;case 14:return e.prev=14,e.next=17,f["a"].dispatch("user/getInfo");case 17:a(),e.next=25;break;case 20:return e.prev=20,e.t0=e["catch"](14),e.next=24,f["a"].dispatch("user/resetToken");case 24:w.a.done();case 25:e.next=28;break;case 27:-1!==_.indexOf(t.path)?a():(a("/login?redirect=".concat(t.path)),w.a.done());case 28:case"end":return e.stop()}}),e,null,[[14,20]])})));return function(t,n,a){return e.apply(this,arguments)}}()),d["a"].afterEach((function(){w.a.done()}));var x=!0;a["default"].config.productionTip=!1;var T={isEnabled:!0,logLevel:x?"error":"debug",stringifyArguments:!1,showLogLevel:!0,showMethodName:!0,separator:"|",showConsoleColors:!0};a["default"].use(g.a),a["default"].use(v.a,T),new a["default"]({router:d["a"],store:f["a"],vuetify:m,render:function(e){return e(l)}}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c}));var a=n("a78e"),i=n.n(a),r="mirror_token";function o(){return i.a.get(r)}function s(e){return i.a.set(r,e)}function c(){return i.a.remove(r)}},"9bcd":function(e,t,n){"use strict";var a=n("f61d"),i=n.n(a);i.a},a18c:function(e,t,n){"use strict";n("d3b7");var a=n("2b0e"),i=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire",flex:""}},[n("header-bar"),n("side-bar",{ref:"side"}),n("v-content",{ref:"app"},[n("v-container",{staticClass:"fill-height",attrs:{fluid:"","align-start":""}},[n("app-main",{attrs:{height:"100%",width:"100%"}})],1)],1),n("dialog-button")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view",{key:e.key})},c=[],u={name:"AppMain",computed:{key:function(){return this.$router.path}}},l=u,d=n("2877"),f=Object(d["a"])(l,s,c,!1,null,null,null),h=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.handleClick(t)}}}),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",{staticClass:"hidden-sm-and-down"},[e._v("Mirror")])]),n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"}}),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-apps")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-bell")])],1),n("v-btn",{attrs:{icon:"",large:""}},[n("v-avatar",{attrs:{size:"32px",item:""}},[n("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/logos/logo.svg",alt:"Vuetify"}})],1)],1)],1)},p=[],v={data:function(){return{navShow:!0}},methods:{handleClick:function(){this.navShow=!this.navShow,this.$store.state.show.config.nav=this.navShow}}},b=v,g=n("6544"),k=n.n(g),j=n("40dc"),w=n("5bc1"),y=n("8212"),_=n("8336"),x=n("132d"),T=n("adda"),E=n("2fa4"),C=n("8654"),M=n("2a7f"),$=Object(d["a"])(b,m,p,!1,null,null,null),O=$.exports;k()($,{VAppBar:j["a"],VAppBarNavIcon:w["a"],VAvatar:y["a"],VBtn:_["a"],VIcon:x["a"],VImg:T["a"],VSpacer:E["a"],VTextField:C["a"],VToolbarTitle:M["a"]});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{ref:"drawer",attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:"",width:e.navigation.width},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("item"),n("tree")],1)},N=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{dense:""}},[e._l(e.routes,(function(t){return[e.isMenuItemValid(t)?n("div",{key:t.name},[e.isMoreChildren(t)?n("v-list-group",{key:t.name,attrs:{value:!1,"prepend-icon":t.meta.icon},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.meta.text))])],1)]},proxy:!0}],null,!0)},e._l(t.children,(function(a,i){return n("v-list-item",{key:i,attrs:{link:"",to:e.getFullPath(t,a)},on:{click:function(t){return e.handleItemClick(a.meta.text)}}},[a.meta.icon?n("v-list-item-action",[n("v-icon",[e._v(e._s(a.meta.icon))])],1):e._e(),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(a.meta.text))])],1)],1)})),1):n("v-list-item",{key:t.name,attrs:{to:e.getFullPath(t,t.children[0]),link:""},on:{click:function(n){return e.handleItemClick(t.children[0].meta.text)}}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.children[0].meta.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.children[0].meta.text))])],1)],1)],1):e._e()]}))],2)},V=[],I=n("d8ad"),L={name:"Item",computed:{routes:function(){return console.log(this.$router.options.routes),this.$router.options.routes},show:{get:function(){return this.$store.state.show.config.menu},set:function(e){this.$store.state.show.config.menu=e}}},data:function(){return{}},methods:{isMenuItemValid:function(e){return!e.hidden},isMoreChildren:function(e){return e.children.length>1},getFullPath:function(e,t){var a=n("4ff6");return a(e.path,t.path)},handleItemClick:function(e){this.$log.debug(e),this.$store.state.menu.activeMenu=e,"Wiki"===e&&(I["a"].$emit("get-catalog"),this.$store.state.show.config.menu=!1,this.$store.state.show.config.tree=!0)}}},P=L,D=n("8860"),z=n("56b0"),B=n("da13"),G=n("1800"),F=n("5d23"),W=Object(d["a"])(P,A,V,!1,null,null,null),H=W.exports;k()(W,{VIcon:x["a"],VList:D["a"],VListGroup:z["a"],VListItem:B["a"],VListItemAction:G["a"],VListItemContent:F["a"],VListItemTitle:F["b"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:e.handleBackClick}},[n("v-icon",[e._v("mdi-arrow-left")])],1),n("v-toolbar-title",{staticClass:"pa-0"},[e._v("Library")])],1),n("v-treeview",{attrs:{open:e.open,items:e.catalog,activatable:"","item-key":"key","open-on-click":""},scopedSlots:e._u([{key:"label",fn:function(t){var a=t.item;return[n("div",{directives:[{name:"show",rawName:"v-show",value:!a.isEdit,expression:"!item.isEdit"}],on:{click:function(t){return e.openNote(a)},contextmenu:function(t){return e.handleShowMenu(t,a)}}},[e._v(" "+e._s(a.metadata.title)+" ")]),n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:a.isEdit,expression:"item.isEdit"}],ref:a.key,attrs:{autofocus:"","single-line":""},on:{blur:function(t){return t.stopPropagation(),e.NodeBlur(a)}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.NodeBlur(a)}},model:{value:a.metadata.title,callback:function(t){e.$set(a.metadata,"title",t)},expression:"item.metadata.title"}})]}},{key:"prepend",fn:function(t){var a=t.item,i=t.open;return["nb"===a.metadata.filetype?n("v-icon",[e._v(" "+e._s(i?"mdi-folder-open":"mdi-folder")+" ")]):n("v-icon",[e._v(" "+e._s("mdi-note-text")+" ")])]}}]),model:{value:e.tree,callback:function(t){e.tree=t},expression:"tree"}}),n("v-menu",{attrs:{"position-x":e.x,"position-y":e.y,absolute:"","offset-y":""},model:{value:e.showMenu,callback:function(t){e.showMenu=t},expression:"showMenu"}},[n("v-list",e._l(e.menuItems,(function(t){return n("v-list-item",{key:t,on:{click:function(n){return e.clickAction(n,t)}}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1)},U=[],Y=(n("c740"),n("a15b"),n("a434"),n("ac1f"),n("1276"),n("ec26")),q=n("e9bd"),K={computed:{show:{get:function(){return this.$store.state.show.config.tree},set:function(e){this.$store.state.show.config.tree=e}},catalog:{get:function(){return this.$store.state.editor.catalog},set:function(e){this.$store.state.editor.catalog=e}}},data:function(){return{open:["public"],active:[],tree:[],showMenu:!1,x:0,y:0,menuItems:["New Notebook","New File","Rename","Delete"],rightActiveItem:null}},mounted:function(){this.getEditorCatalog(),I["a"].$on("get-catalog",this.getEditorCatalog)},beforeDestroy:function(){I["a"].$off("get-catalog",this.getEditorCatalog)},methods:{getEditorCatalog:function(){var e=this;Object(q["b"])().then((function(t){e.$store.dispatch("editor/changeCatalog",t.data)}))},newRandomKey:function(){var e=Object(Y["a"])();return e.split("-").join("")},findItem:function(e,t){for(var n=0;n<e.length;n++){if(e[n].key===t)return e[n];var a=this.findItem(e[n].children,t);if(null!==a)return a}return null},handleBackClick:function(){this.$store.state.show.config.menu=!0,this.$store.state.show.config.tree=!1},handleShowMenu:function(e,t){var n=this;this.$log.debug(e,t),this.rightActiveItem=t,e.preventDefault(),this.showMenu=!1,this.x=e.clientX,this.y=e.clientY,this.$nextTick((function(){n.showMenu=!0}))},clickAction:function(e,t){"Rename"===t?this.handleRename(this.rightActiveItem):"Delete"===t?this.handleDelete(this.rightActiveItem):"New Notebook"===t?this.handleNewNoteBook(this.rightActiveItem):"New File"===t?this.handleNewFile(this.rightActiveItem):"Delete"===t&&this.handleDelete(this.rightActiveItem)},NodeBlur:function(e){this.$log.debug("lose focus",e),e.isEdit&&this.$set(e,"isEdit",!1),this.$store.dispatch("editor/updateCatalog",this.catalog)},handleNewFile:function(e){this.$log.debug(e);var t=e,n=this.newRandomKey(),a={id:n,key:n,parent:t.key,metadata:{title:"untitle",level:t.level+1,filetype:"md",tag:[]},reminder:{enable:!1,count:0,last_time:0,next_time:0},children:[]};t.children||this.$set(t,"children",[]),t.children.push(a),this.$store.dispatch("editor/updateCatalog",this.catalog),I["a"].$emit("open-new-file",a)},handleNewNoteBook:function(e){var t=e;if(t.metadata.level>=2)this.$message({message:"仅支持2级nodebook",type:"warning"});else{var n=this.newRandomKey(),a={id:n,key:n,parent:t.key,metadata:{title:"nodebook",level:t.level+1,filetype:"nb",tag:[]},reminder:{enable:!1,count:0,last_time:0,next_time:0},children:[]};t.children||this.$set(t,"children",[]),t.children.push(a)}},handleRename:function(e){var t=this;this.$log.debug(e),e.isEdit||this.$set(e,"isEdit",!0),this.$nextTick((function(){t.$refs[e.key].$refs.input.focus()}))},handleDelete:function(e){this.$log.debug(e);var t=this.findItem(this.catalog,e.parent),n=t.children||t,a=n.findIndex((function(t){return t.id===e.id}));n.splice(a,1)},openNote:function(e){this.$log.debug(e),"md"===e.metadata.filetype&&I["a"].$emit("open-file",e)},handleNodeClick:function(e,t){this.$log.debug(t),!0===Object.prototype.hasOwnProperty.call(t,"isEdit")&&!0===t.isEdit||e.metadata.filetype},handleDrop:function(e,t,n,a){this.$store.dispatch("editor/submitCatalog",this.catalog)}}},X=K,J=(n("9bcd"),n("a523")),Q=n("e449"),Z=n("71d9"),ee=n("eb2a"),te=Object(d["a"])(X,R,U,!1,null,null,null),ne=te.exports;k()(te,{VBtn:_["a"],VContainer:J["a"],VIcon:x["a"],VList:D["a"],VListItem:B["a"],VListItemTitle:F["b"],VMenu:Q["a"],VTextField:C["a"],VToolbar:Z["a"],VToolbarTitle:M["a"],VTreeview:ee["a"]});var ae={name:"SideBar",components:{Item:H,Tree:ne},data:function(){return{navigation:{width:256,borderSize:3}}},computed:{show:{get:function(){return this.$store.state.show.config.nav},set:function(e){this.$store.state.show.config.nav=e}}},mounted:function(){this.setBorderWidth(),this.setEvents()},methods:{setBorderWidth:function(){var e=this.$refs.drawer.$el.querySelector(".v-navigation-drawer__border");e.style.width=this.navigation.borderSize+"px",e.style.cursor="ew-resize"},setEvents:function(){var e=this,t=this.navigation.borderSize,n=this.$refs.drawer.$el,a=n.querySelector(".v-navigation-drawer__border"),i=n.classList.contains("v-navigation-drawer--right")?"right":"left";function r(e){document.body.style.cursor="ew-resize";var t="right"===i?document.body.scrollWidth-e.clientX:e.clientX;n.style.width=t+"px"}a.addEventListener("mousedown",(function(e){e.offsetX<t&&(n.style.transition="initial",document.addEventListener("mousemove",r,!1)),a.style.backgroundColor="blue"}),!1),document.addEventListener("mouseup",(function(){n.style.transition="",e.navigation.width=n.style.width,document.body.style.cursor="",document.removeEventListener("mousemove",r,!1),a.style.backgroundColor="#e7e7e7"}),!1)}}},ie=ae,re=n("f774"),oe=Object(d["a"])(ie,S,N,!1,null,null,null),se=oe.exports;k()(oe,{VNavigationDrawer:re["a"]});var ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-btn",{attrs:{bottom:"",color:"pink",dark:"",fab:"",fixed:"",right:""},on:{click:e.handleDialogClick}},[n("v-icon",[e._v("mdi-plus")])],1),n("dialog-sleep")],1)},ue=[],le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Sleep Record")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-dialog",{ref:"dialog1",attrs:{"return-value":e.date,width:"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},a))]}}]),model:{value:e.dateMenu,callback:function(t){e.dateMenu=t},expression:"dateMenu"}},[n("v-date-picker",{attrs:{scrollable:""},on:{change:e.handleDateChange},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),n("v-col",{attrs:{cols:"12"}},[n("v-dialog",{ref:"dialog2",attrs:{"return-value":e.startTime,width:"290px"},on:{"update:returnValue":function(t){e.startTime=t},"update:return-value":function(t){e.startTime=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"start time","prepend-icon":"mdi-alarm",readonly:""},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}},a))]}}]),model:{value:e.startMenu,callback:function(t){e.startMenu=t},expression:"startMenu"}},[e.startMenu?n("v-time-picker",{attrs:{format:"24hr","full-width":""},on:{change:e.handleStartChange},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}):e._e()],1)],1),n("v-col",{attrs:{cols:"12"}},[n("v-dialog",{ref:"dialog3",attrs:{"return-value":e.endTime,width:"290px"},on:{"update:returnValue":function(t){e.endTime=t},"update:return-value":function(t){e.endTime=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"end time","prepend-icon":"mdi-alarm",readonly:""},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}},a))]}}]),model:{value:e.endMenu,callback:function(t){e.endMenu=t},expression:"endMenu"}},[e.endMenu?n("v-time-picker",{attrs:{format:"24hr","full-width":""},on:{change:e.handleEndChange},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}):e._e()],1)],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"duration","prepend-icon":"mdi-alarm",readonly:""},model:{value:e.duration,callback:function(t){e.duration=t},expression:"duration"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.show=!1}}},[e._v("Close")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)},de=[],fe=(n("25f0"),n("53ca")),he=n("c1df"),me=n.n(he),pe=n("1ca6"),ve={data:function(){return{dateMenu:!1,date:(new Date).toISOString().substr(0,10),startMenu:!1,startTime:null,endMenu:!1,endTime:null,dialog1:!1,dialog2:!1,dialog3:!1,startTimeMin:0,endTimeMin:0,durationMin:0,duration:"00:00"}},computed:{show:{get:function(){return this.$store.state.show.config.dialogSleep},set:function(e){this.$store.state.show.config.dialogSleep=e}}},methods:{handleDateChange:function(){this.dateMenu=!1,this.$refs.dialog1.save(this.date),this.$log.debug(Object(fe["a"])(this.date))},handleStartChange:function(){this.startMenu=!1,this.$refs.dialog2.save(this.startTime);var e=me()().format("YYYY-MM-DD"),t=me()(e+" "+this.startTime);if(this.startTimeMin=t.minute()+60*t.hour(),this.$log.debug(this.startTimeMin),null!==this.endTime){this.startTimeMin>this.endTimeMin&&(this.startTimeMin=this.startTimeMin-1440);var n=function(e){var t=parseInt(e/60),n=parseInt(e%60);return parseInt(t/10).toString()+(t%10).toString()+":"+parseInt(n/10).toString()+(n%10).toString()};this.duration=this.endTimeMin-this.startTimeMin,this.duration=n(this.duration)}},handleEndChange:function(){this.endMenu=!1,this.$refs.dialog3.save(this.endTime);var e=me()().format("YYYY-MM-DD"),t=me()(e+" "+this.endTime);if(this.endTimeMin=t.minute()+60*t.hour(),this.$log.debug(this.endTimeMin),null!==this.startTime){this.startTimeMin>this.endTimeMin&&(this.startTimeMin=this.startTimeMin-1440);var n=function(e){var t=parseInt(e/60),n=parseInt(e%60);return parseInt(t/10).toString()+(t%10).toString()+":"+parseInt(n/10).toString()+(n%10).toString()};this.durationMin=this.endTimeMin-this.startTimeMin,this.duration=n(this.durationMin)}},save:function(){var e=this;this.show=!1;var t=me()(this.date).valueOf(),n={record_date:t,start_time:this.startTimeMin,end_time:this.endTimeMin,duration:this.durationMin};Object(pe["c"])(n).then((function(t){e.$log.debug(t),e.$notify({title:"成功",message:"",type:"success",duration:800})}))}}},be=ve,ge=n("b0af"),ke=n("99d9"),je=n("62ad"),we=n("2e4b"),ye=n("169a"),_e=n("0fd9"),xe=n("c964"),Te=Object(d["a"])(be,le,de,!1,null,null,null),Ee=Te.exports;k()(Te,{VBtn:_["a"],VCard:ge["a"],VCardActions:ke["a"],VCardText:ke["b"],VCardTitle:ke["c"],VCol:je["a"],VContainer:J["a"],VDatePicker:we["a"],VDialog:ye["a"],VRow:_e["a"],VSpacer:E["a"],VTextField:C["a"],VTimePicker:xe["a"]});var Ce={components:{DialogSleep:Ee},methods:{handleDialogClick:function(){"Sleep"===this.$store.state.menu.activeMenu&&(this.$store.state.show.config.dialogSleep=!0)}}},Me=Ce,$e=Object(d["a"])(Me,ce,ue,!1,null,null,null),Oe=$e.exports;k()($e,{VBtn:_["a"],VContainer:J["a"],VIcon:x["a"]});var Se={name:"Layout",components:{AppMain:h,HeaderBar:O,SideBar:se,DialogButton:Oe},props:{source:String},data:function(){return{sideWidth:null}},computed:{},watch:{sideWidth:function(e,t){this.$nextTick((function(){console.log(e,t)}))}},created:function(){},mounted:function(){this.sideWidth=this.$refs.side.$el.style.width,console.log(this.sideWidth)},beforeDestroy:function(){},methods:{updateAppWidth:function(e){this.appWidth="calc(100vh-"+e+")",console.log(e),console.log(this.appWidth)}}},Ne=Se,Ae=n("7496"),Ve=n("a75b"),Ie=Object(d["a"])(Ne,r,o,!1,null,null,null),Le=Ie.exports;k()(Ie,{VApp:Ae["a"],VContainer:J["a"],VContent:Ve["a"]}),a["default"].use(i["a"]);var Pe=[{path:"/login",component:function(){return n.e("chunk-5438d156").then(n.bind(null,"9ed6"))},hidden:!0},{path:"/404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))},hidden:!0},{path:"/",name:"root",redirect:"/home",component:Le,hidden:!0},{path:"/home",name:"Home",component:Le,children:[{path:"sumary",name:"Sumary",component:function(){return n.e("chunk-2d0e19c3").then(n.bind(null,"7abe"))},meta:{text:"Home",icon:"mdi-home"}}]},{path:"/healthy",name:"Healthy",component:Le,meta:{text:"Healthy",icon:"mdi-hand-heart"},children:[{path:"sleep",name:"Sleep",component:function(){return n.e("chunk-6c8c3552").then(n.bind(null,"0cb7"))},meta:{text:"Sleep",icon:"mdi-power-sleep"}},{path:"weight",name:"Weight",component:function(){return n.e("chunk-2d0e19c3").then(n.bind(null,"7abe"))},meta:{text:"Weight",icon:"mdi-weight-kilogram"}}]},{path:"/wiki",name:"Wiki",component:Le,meta:{text:"Wiki",icon:"mdi-wikipedia"},children:[{path:"page",name:"Wiki",component:function(){return n.e("chunk-c1893d7c").then(n.bind(null,"0ada"))},meta:{text:"Wiki",icon:"mdi-wikipedia"}}]},{path:"/program",name:"Program",component:Le,meta:{text:"Program",icon:"mdi-wikipedia"},children:[{path:"sumary",name:"sumary",component:function(){return n.e("chunk-be8182d0").then(n.bind(null,"2641"))},meta:{text:"Program",icon:"mdi-wikipedia"}}]},{path:"/settings",name:"Settings",component:Le,meta:{text:"Settings",icon:"mdi-wikipedia"},children:[{path:"",name:"",component:function(){return n.e("chunk-2d0cf120").then(n.bind(null,"61c2"))},meta:{text:"settings",icon:"mdi-wikipedia"}}]},{path:"*",redirect:"/404",hidden:!0}],De=new i["a"]({scrollBehavior:function(){return{y:0}},routes:Pe});t["a"]=De},b775:function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),i=n.n(a),r=n("4360"),o=n("5f87"),s=n("be34"),c=n.n(s);n("4333");var u=i.a.create({baseURL:"/",timeout:5e3});u.interceptors.request.use((function(e){return r["a"].getters.token&&(e.headers["X-Token"]=Object(o["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return!1===Object.prototype.hasOwnProperty.call(t,"code")?t:2e4!==t.code?(c()({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||c.a.confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){r["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),c()({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=u},d8ad:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("2b0e"),i=new a["default"]},e9bd:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s}));var a=n("b775");function i(e){return Object(a["a"])({url:"/editor/catalog",method:"get",params:{token:e}})}function r(e){return Object(a["a"])({url:"/editor/catalog/update",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/editor/document/new",method:"post",data:e})}function s(e,t){return Object(a["a"])({url:"/editor/document/query/"+e,method:"get"})}},f61d:function(e,t,n){}});
//# sourceMappingURL=app.1e22d696.js.map