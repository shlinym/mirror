(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b92df"],{"329c":function(e,n){(function(e,n){"undefined"!==typeof e&&e.Prism&&e.document&&n.createRange&&(Prism.plugins.KeepMarkup=!0,Prism.hooks.add("before-highlight",(function(e){if(e.element.children.length){var n=0,o=[],d=function(e,t){var a={};t||(a.clone=e.cloneNode(!1),a.posOpen=n,o.push(a));for(var r=0,s=e.childNodes.length;r<s;r++){var p=e.childNodes[r];1===p.nodeType?d(p):3===p.nodeType&&(n+=p.data.length)}t||(a.posClose=n)};d(e.element,!0),o&&o.length&&(e.keepMarkup=o)}})),Prism.hooks.add("after-highlight",(function(e){if(e.keepMarkup&&e.keepMarkup.length){var o=function(e,d){for(var t=0,a=e.childNodes.length;t<a;t++){var r=e.childNodes[t];if(1===r.nodeType){if(!o(r,d))return!1}else 3===r.nodeType&&(!d.nodeStart&&d.pos+r.data.length>d.node.posOpen&&(d.nodeStart=r,d.nodeStartPos=d.node.posOpen-d.pos),d.nodeStart&&d.pos+r.data.length>=d.node.posClose&&(d.nodeEnd=r,d.nodeEndPos=d.node.posClose-d.pos),d.pos+=r.data.length);if(d.nodeStart&&d.nodeEnd){var s=n.createRange();return s.setStart(d.nodeStart,d.nodeStartPos),s.setEnd(d.nodeEnd,d.nodeEndPos),d.node.clone.appendChild(s.extractContents()),s.insertNode(d.node.clone),s.detach(),!1}}return!0};e.keepMarkup.forEach((function(n){o(e.element,{node:n,pos:0})})),e.highlightedCode=e.element.innerHTML}})))})(self,document)}}]);