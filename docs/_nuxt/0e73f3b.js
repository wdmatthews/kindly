(window.webpackJsonp=window.webpackJsonp||[]).push([[19,10],{371:function(t,e,r){"use strict";var n=r(194);e.a=n.a},386:function(t,e,r){"use strict";e.a=function(t){return!!t||"Required"}},392:function(t,e,r){var content=r(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("5db1c400",content,!0,{sourceMap:!1})},393:function(t,e,r){var n=r(16)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Dosis:300,400,700&display=swap);"]),n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:1rem}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:6rem 1rem}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:8px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:1rem}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:4px;padding-bottom:4px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=n},395:function(t,e,r){"use strict";r.r(e);var n={props:{color:{type:String,default:""},icon:{type:String,default:""}}},o=r(39),l=r(55),c=r.n(l),d=(r(10),r(6),r(9),r(13),r(7),r(14),r(2)),v=(r(46),r(392),r(97)),h=r(371),f=r(90),m=r(54),_=r(26),y=r(199),x=r(5),w=r(8);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(x.a)(v.a,m.a,y.a).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(d.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(h.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(f.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(f.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=k(k({},v.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||_.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(w.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),j=r(394),B=r(118),V=r(379),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-alert",{staticClass:"unselectable",attrs:{text:"",color:t.color}},[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("v-icon",{attrs:{left:"",color:t.color}},[t._v("\n      mdi-"+t._s(t.icon)+"\n    ")]),t._v(" "),r("v-col",[r("span",[t._t("default")],2)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:O,VCol:j.a,VIcon:B.a,VRow:V.a})},407:function(t,e,r){"use strict";var n=r(2),o=(r(46),r(56),r(196),r(9),r(7),r(60),r(154),r(10),r(6),r(13),r(14),r(5)),l=r(93),c=r(123);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},410:function(t,e,r){"use strict";r.r(e);r(31);var n=r(386),o=["Kind","Ambitious","Amiable","Analytical","Caring","Creative","Curious","Dedicated","Generous","Intuitive","Inventive","Remarkable","Thoughtful"],l=["Blue","Green","Yellow","Orange","Red","Pink","Purple","Brown","Black","Grey","White"],c=["Koala","Axolotl","Blue Whale","Butterfly","Dolphin","Gecko","Lanternfish","Rabbit","Rhino","Spider Crab","Tree Frog","Turtle","Whale Shark","Wolffish"],d={data:function(t){return{rules:[n.a],adjective:"",color:"",animal:"",adjectives:o,colors:l,animals:c}},computed:{nickname:function(){return"".concat(this.adjective," ").concat(this.color," ").concat(this.animal)}}},v=r(39),h=r(55),f=r.n(h),m=r(394),_=r(379),y=r(408),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"mx-n2",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"px-md-2",attrs:{cols:"12",md:"4"}},[r("v-select",{attrs:{label:"Adjective",outlined:"",items:t.adjectives,rules:t.rules},model:{value:t.adjective,callback:function(e){t.adjective=e},expression:"adjective"}})],1),t._v(" "),r("v-col",{staticClass:"px-md-2",attrs:{cols:"12",md:"4"}},[r("v-select",{attrs:{label:"Color",outlined:"",items:t.colors,rules:t.rules},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),t._v(" "),r("v-col",{staticClass:"px-md-2",attrs:{cols:"12",md:"4"}},[r("v-select",{attrs:{label:"Animal",outlined:"",items:t.animals,rules:t.rules},model:{value:t.animal,callback:function(e){t.animal=e},expression:"animal"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:m.a,VRow:_.a,VSelect:y.a})},466:function(t,e,r){"use strict";r.r(e);r(155),r(31);var n={data:function(t){return{nicknameFormIsValid:!1,notifications:[{content:"Notification 1",time:new Date},{content:"Notification 2",time:new Date},{content:"Notification 3",time:new Date}]}},head:function(t){return{title:"Profile"}},computed:{nickname:function(){var t;return null===(t=this.$refs.nicknameField)||void 0===t?void 0:t.nickname}},methods:{formatTime:function(time){var t=time.getMonth()+1,e=time.getDate(),r=time.getFullYear(),n=time.getHours(),o=time.getMinutes();return"".concat(t,"/").concat(e,"/").concat(r," ").concat(n,":").concat(o<10?"0":"").concat(o)},setNickname:function(){},clearNotifications:function(){this.notifications=[]},clearNotification:function(t){this.notifications.splice(t,1)}}},o=r(39),l=r(55),c=r.n(l),d=r(194),v=r(394),h=r(407),f=r(118),m=r(187),_=r(119),y=r(188),x=r(81),w=r(379),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pa-4"},[r("BaseCard",{staticClass:"mx-auto mb-4",attrs:{"max-width":"600"},scopedSlots:t._u([{key:"title",fn:function(){return[r("span",{staticClass:"unselectable"},[t._v("Welcome!")])]},proxy:!0},{key:"actions",fn:function(){return[r("v-btn",{staticClass:"text-button font-weight-bold",attrs:{color:"primary",outlined:"",disabled:!t.nicknameFormIsValid},on:{click:t.setNickname}},[r("v-icon",{attrs:{left:""}},[t._v("\n          mdi-pencil\n        ")]),t._v("\n        Set Nickname\n      ")],1)]},proxy:!0}],null,!1,1559896153)},[t._v(" "),r("p",{staticClass:"unselectable"},[t._v("\n      Welcome to Kindly, Student Name!"),r("br"),t._v("\n      You do not have a nickname yet, but you can set it below"),r("br"),t._v("\n      Your nickname will be seen by your teachers and fellow classmates"),r("br"),t._v("\n      Your classmates cannot see your real name, but will instead see your nickname\n    ")]),t._v(" "),r("v-form",{on:{submit:function(t){t.preventDefault()}},model:{value:t.nicknameFormIsValid,callback:function(e){t.nicknameFormIsValid=e},expression:"nicknameFormIsValid"}},[r("NicknameField",{ref:"nicknameField"})],1),t._v(" "),r("BaseAlert",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{color:"warning",icon:"alert"}},[t._v("\n      Someone already has that nickname. Maybe you are friends?\n    ")])],1),t._v(" "),r("h1",{staticClass:"text-h4 text-center unselectable"},[t._v("\n    Hello, Student Name (Nickname)!\n  ")]),t._v(" "),r("p",{staticClass:"mb-0 text-h6 text-center unselectable"},[t._v("\n    You have "+t._s(t.notifications.length)+" notification"+t._s(1!==t.notifications.length?"s":"")+"\n  ")]),t._v(" "),r("v-row",{directives:[{name:"show",rawName:"v-show",value:t.notifications.length>0,expression:"notifications.length > 0"}],staticClass:"mt-4",attrs:{"no-gutters":"",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-list",{staticClass:"px-0 py-2",attrs:{rounded:"",color:"blue-grey darken-4"}},[r("div",{staticClass:"text-center py-2"},[r("v-btn",{staticClass:"text-button font-weight-bold",attrs:{color:"error",outlined:""},on:{click:t.clearNotifications}},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-delete\n            ")]),t._v("\n            Clear All\n          ")],1)],1),t._v(" "),t._l(t.notifications,(function(e,i){return r("v-list-item",{key:"notification-"+i,staticClass:"mb-0"},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.content)}}),t._v(" "),r("v-list-item-subtitle",{domProps:{textContent:t._s(t.formatTime(e.time))}})],1),t._v(" "),r("v-list-item-action",[r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.clearNotification(i)}}},[r("v-icon",{attrs:{color:"error"}},[t._v("\n                mdi-delete\n              ")])],1)],1)],1)}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{NicknameField:r(410).default,BaseAlert:r(395).default,BaseCard:r(250).default}),c()(component,{VBtn:d.a,VCol:v.a,VForm:h.a,VIcon:f.a,VList:m.a,VListItem:_.a,VListItemAction:y.a,VListItemContent:x.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VRow:w.a})}}]);