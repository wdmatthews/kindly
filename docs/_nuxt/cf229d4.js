(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{386:function(e,l,t){"use strict";l.a=function(e){return!!e||"Required"}},410:function(e,l,t){"use strict";t.r(l);t(31);var n=t(386),o=["Kind","Ambitious","Amiable","Analytical","Caring","Creative","Curious","Dedicated","Generous","Intuitive","Inventive","Remarkable","Thoughtful"],c=["Blue","Green","Yellow","Orange","Red","Pink","Purple","Brown","Black","Grey","White"],r=["Koala","Axolotl","Blue Whale","Butterfly","Dolphin","Gecko","Lanternfish","Rabbit","Rhino","Spider Crab","Tree Frog","Turtle","Whale Shark","Wolffish"],d={data:function(e){return{rules:[n.a],adjective:"",color:"",animal:"",adjectives:o,colors:c,animals:r}},computed:{nickname:function(){return"".concat(this.adjective," ").concat(this.color," ").concat(this.animal)}}},m=t(39),v=t(55),f=t.n(v),h=t(394),k=t(379),w=t(408),component=Object(m.a)(d,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("v-row",{staticClass:"mx-n2",attrs:{"no-gutters":""}},[t("v-col",{staticClass:"px-md-2",attrs:{cols:"12",md:"4"}},[t("v-select",{attrs:{label:"Adjective",outlined:"",items:e.adjectives,rules:e.rules},model:{value:e.adjective,callback:function(l){e.adjective=l},expression:"adjective"}})],1),e._v(" "),t("v-col",{staticClass:"px-md-2",attrs:{cols:"12",md:"4"}},[t("v-select",{attrs:{label:"Color",outlined:"",items:e.colors,rules:e.rules},model:{value:e.color,callback:function(l){e.color=l},expression:"color"}})],1),e._v(" "),t("v-col",{staticClass:"px-md-2",attrs:{cols:"12",md:"4"}},[t("v-select",{attrs:{label:"Animal",outlined:"",items:e.animals,rules:e.rules},model:{value:e.animal,callback:function(l){e.animal=l},expression:"animal"}})],1)],1)}),[],!1,null,null,null);l.default=component.exports;f()(component,{VCol:h.a,VRow:k.a,VSelect:w.a})}}]);