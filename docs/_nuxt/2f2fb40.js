(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(t,e,n){"use strict";e.a=[{text:"Sign In",to:"/signin",color:"primary",icon:"login-variant"},{text:"Sign Up",to:"/signup",color:"accent",icon:"account-plus"},{text:"Dashboard",to:"/dashboard",color:"primary",icon:"view-dashboard"},{text:"Profile",to:"/profile",color:"accent",icon:"account"},{text:"Sign Out",to:"/signout",icon:"logout-variant"}]},249:function(t,e,n){"use strict";var r=n(39),o=n(55),l=n.n(o),c=n(382),v=n(383),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("TheAppBar",{on:{"show-navigation":function(e){return t.$refs.navigationDrawer.show()}}}),t._v(" "),n("TheNavigationDrawer",{ref:"navigationDrawer"}),t._v(" "),n("v-main",[n("nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{TheAppBar:n(369).default,TheNavigationDrawer:n(370).default}),l()(component,{VApp:c.a,VMain:v.a})},250:function(t,e,n){"use strict";n.r(e);n(20);var r={props:{maxWidth:{type:[Number,String],default:void 0}}},o=n(39),l=n(55),c=n.n(l),v=n(185),f=n(88),d=n(378),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:"blue-grey darken-4","max-width":t.maxWidth}},[n("v-card-title",{staticClass:"pa-4 text-h4 font-weight-bold"},[n("v-spacer"),t._v(" "),t._t("title"),t._v(" "),n("v-spacer")],2),t._v(" "),n("v-card-text",{staticClass:"px-4 py-0"},[t._t("default")],2),t._v(" "),n("v-card-actions",{staticClass:"px-4 pb-4 pt-0"},[n("v-spacer"),t._v(" "),t._t("actions"),t._v(" "),n("v-spacer")],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:v.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VSpacer:d.a})},267:function(t,e,n){"use strict";n.r(e);var r=n(39),o=n(55),l=n.n(o),c=n(379),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-row",{staticClass:"pa-4",staticStyle:{height:"100%"},attrs:{"no-gutters":"",justify:"center",align:"center"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VRow:c.a})},272:function(t,e,n){n(273),t.exports=n(274)},331:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5fff0b28",content,!0,{sourceMap:!1})},332:function(t,e,n){var r=n(16)(!1);r.push([t.i,'.unselectable{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.transparent{background:transparent}.header-font{font-family:"Dosis",sans-serif}.body-font{font-family:"Montserrat",sans-serif}.v-list-item__subtitle,.v-list-item__title{overflow:unset!important;text-overflow:unset!important;white-space:unset!important}',""]),t.exports=r},369:function(t,e,n){"use strict";n.r(e);var r=n(149),o={data:function(t){return{links:r.a}},computed:{isMobile:function(){return this.$vuetify.breakpoint.xs||this.$vuetify.breakpoint.sm}}},l=n(39),c=n(55),v=n.n(c),f=n(385),d=n(380),_=n(381),m=n(194),x=n(118),h=n(378),w=n(151),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"ml-4"},[n("nuxt-link",{staticClass:"text-decoration-none text-h4 font-weight-bold unselectable",attrs:{to:"/"}},[n("span",{staticClass:"primary--text"},[t._v("Kind")]),n("span",{staticClass:"accent--text"},[t._v("ly")])])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}],staticClass:"mr-1",on:{click:function(e){return t.$emit("show-navigation")}}}),t._v(" "),n("v-toolbar-items",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]},t._l(t.links,(function(link,i){return n("v-btn",{key:"link-"+i,staticClass:"text-button font-weight-bold",attrs:{plain:"",to:link.to,color:link.color}},[n("v-icon",{attrs:{left:""}},[t._v("\n        mdi-"+t._s(link.icon)+"\n      ")]),t._v(" "),"Profile"===link.text?n("v-badge",{attrs:{color:"primary",content:3,value:3,inline:""}},[t._v("\n        "+t._s(link.text)+"\n      ")]):n("span",[t._v(t._s(link.text))])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAppBar:f.a,VAppBarNavIcon:d.a,VBadge:_.a,VBtn:m.a,VIcon:x.a,VSpacer:h.a,VToolbarItems:w.a,VToolbarTitle:w.b})},370:function(t,e,n){"use strict";n.r(e);var r=n(149),o={data:function(t){return{isVisible:!1,links:r.a}},methods:{show:function(){this.isVisible=!0}}},l=n(39),c=n(55),v=n.n(c),f=n(381),d=n(118),_=n(187),m=n(119),x=n(81),h=n(102),w=n(384),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",temporary:"",right:""},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[n("v-list",{attrs:{dense:"",nav:""}},t._l(t.links,(function(link,i){return n("v-list-item",{key:"link-"+i,attrs:{to:link.to,color:link.color}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:link.color},domProps:{textContent:t._s("mdi-"+link.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-button font-weight-bold",class:link.color?link.color+"--text":""},["Profile"===link.text?n("v-badge",{staticClass:"mt-0",attrs:{color:"primary",content:3,value:3,inline:""}},[t._v("\n            "+t._s(link.text)+"\n          ")]):n("span",[t._v(t._s(link.text))])],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBadge:f.a,VIcon:d.a,VList:_.a,VListItem:m.a,VListItemContent:x.a,VListItemIcon:h.a,VListItemTitle:x.c,VNavigationDrawer:w.a})},79:function(t,e,n){"use strict";var r={props:{error:{type:Object,default:null}},head:function(t){return{title:"Error ".concat(t.error.statusCode)}}},o=n(39),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CenterPageRow",[n("BaseCard",{scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"unselectable"},[t._v("Error "+t._s(t.error.statusCode))])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"unselectable text-center"},[n("p",[t._v("Oh no! There was an error!")]),t._v(" "),n("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:"/"}},[t._v("\n        Home\n      ")])],1)])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseCard:n(250).default,CenterPageRow:n(267).default})}},[[272,23,4,24]]]);