(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-860c8124"],{"0ada":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[n("el-header",{staticStyle:{"margin-top":"20px"}},[n("search")],1),t._v(" "),n("split-pane",{attrs:{split:"vertical","default-percent":25},on:{resize:t.resize}},[n("template",{slot:"paneL"},[n("split-pane",{attrs:{split:"vertical"},on:{resize:t.resize}},[n("template",{slot:"paneL"},[n("tree")],1),t._v(" "),n("template",{slot:"paneR"},[n("tree")],1)],2)],1),t._v(" "),n("template",{slot:"paneR"},[n("editor",{staticStyle:{"margin-left":"40px"}})],1)],2)],1)},s=[],i=n("19ab"),l=n.n(i),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"Filter keyword"},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}})},o=[],r={data:function(){return{filterText:""}}},u=r,d=n("2877"),v=Object(d["a"])(u,c,o,!1,null,null,null),b=v.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:t.data2,props:t.defaultProps,"filter-node-method":t.filterNode,"default-expand-all":""},on:{"node-contextmenu":t.handleClick},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.node;e.data;return n("span",{staticClass:"custom-tree-node"},[n("span",[t._v(t._s(a.label))])])}}])}),t._v(" "),n("vue-context",{ref:"menu",scopedSlots:t._u([{key:"default",fn:function(e){return e.data?[n("li",[n("a",{on:{click:function(n){return n.preventDefault(),t.alertName(e.data.value)}}},[t._v("Alert name")])])]:void 0}}],null,!0)})],1)},p=[],f=n("899b"),m=(n("f89b"),{components:{VueContext:f["a"]},data:function(){return{options:[{name:"Duplicate",slug:"duplicate"},{name:"Edit",slug:"edit"},{name:"Delete",slug:"delete"}],filterText:"",data2:[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1"}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],defaultProps:{children:"children",label:"label"}}},watch:{filterText:function(t){this.$refs.tree2.filter(t)}},methods:{filterNode:function(t,e){return!t||-1!==e.label.indexOf(t)},handleClick:function(t,e,n,a){console.log(n),this.$refs.menu.open(t,{value:n})},alertName:function(t){alert('You clicked on: "'.concat(t.label,'"')),console.log(t)}}}),g=m,h=Object(d["a"])(g,_,p,!1,null,null,null),C=h.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.commands,s=e.isActive;return[n("div",{staticClass:"menubar"},[n("button",{staticClass:"menubar__button",class:{"is-active":s.bold()},on:{click:a.bold}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_bold"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.italic()},on:{click:a.italic}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_italic"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.strike()},on:{click:a.strike}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_strike"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.underline()},on:{click:a.underline}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_underline"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.code()},on:{click:a.code}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_code"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.paragraph()},on:{click:a.paragraph}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_paragraph"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.heading({level:1})},on:{click:function(t){return a.heading({level:1})}}},[t._v("H1")]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.heading({level:2})},on:{click:function(t){return a.heading({level:2})}}},[t._v("H2")]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.heading({level:3})},on:{click:function(t){return a.heading({level:3})}}},[t._v("H3")]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.bullet_list()},on:{click:a.bullet_list}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_ul"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.ordered_list()},on:{click:a.ordered_list}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_ol"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.blockquote()},on:{click:a.blockquote}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_quote"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",class:{"is-active":s.code_block()},on:{click:a.code_block}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_code"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",on:{click:a.horizontal_rule}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_hr"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",on:{click:a.undo}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_undo"}})],1)]),t._v(" "),n("button",{staticClass:"menubar__button",on:{click:a.redo}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"editor_redo"}})],1)])])]}}])}),t._v(" "),n("editor-content",{staticClass:"editor__content",attrs:{editor:t.editor}})],1)},w=[],x=n("cd42"),y=n("f23d"),L={components:{EditorContent:x["b"],EditorMenuBar:x["c"]},data:function(){return{editor:new x["a"]({extensions:[new y["a"],new y["c"],new y["e"],new y["f"],new y["g"]({levels:[1,2,3]}),new y["i"],new y["l"],new y["m"],new y["o"],new y["p"],new y["k"],new y["b"],new y["d"],new y["j"],new y["n"],new y["q"],new y["h"]],content:"\n          <h2>\n            Hi there,\n          </h2>\n          <p>\n            this is a very <em>basic</em> example of tiptap.\n          </p>\n          <pre><code>body { display: none; }</code></pre>\n          <ul>\n            <li>\n              A regular list\n            </li>\n            <li>\n              With regular items\n            </li>\n          </ul>\n          <blockquote>\n            It's amazing 👏\n            <br />\n            – mom\n          </blockquote>\n        "})}},beforeDestroy:function(){this.editor.destroy()}},E=L,z=(n("8740"),Object(d["a"])(E,k,w,!1,null,"7b4fb72f",null)),S=z.exports,T={components:{splitPane:l.a,Search:b,Tree:C,Editor:S},methods:{resize:function(){}}},q=T,$=(n("4c952"),Object(d["a"])(q,a,s,!1,null,null,null));e["default"]=$.exports},"4c952":function(t,e,n){"use strict";var a=n("d0c9"),s=n.n(a);s.a},8740:function(t,e,n){"use strict";var a=n("a21b"),s=n.n(a);s.a},a21b:function(t,e,n){},d0c9:function(t,e,n){}}]);