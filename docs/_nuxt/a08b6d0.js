(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{387:function(e,t,n){"use strict";t.a=function(e){return!!e||"Required"}},415:function(e,t,n){"use strict";n.r(t);var l=n(387),r={props:{value:{type:String,default:""},autofocus:{type:Boolean,default:!1}},data:function(e){return{rules:[l.a]}},mounted:function(){this.autofocus&&this.$refs.field.focus()}},o=n(35),f=n(40),c=n.n(f),d=n(458),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{ref:"field",attrs:{label:"School Name",outlined:"",rules:e.rules,value:e.value},on:{input:function(t){return e.$emit("input",t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("submit")}}})}),[],!1,null,null,null);t.default=component.exports;c()(component,{VTextField:d.a})}}]);