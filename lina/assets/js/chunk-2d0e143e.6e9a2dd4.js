(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e143e"],{"7a64":function(e,n,t){"use strict";t.r(n);var u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("TabPage",{attrs:{"active-menu":e.config.activeMenu,submenu:e.config.submenu},on:{"update:activeMenu":function(n){return e.$set(e.config,"activeMenu",n)},"update:active-menu":function(n){return e.$set(e.config,"activeMenu",n)}}},[t("div",{attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s(e.Title)+"\n  ")])])},c=[],i=t("cd4a"),o={name:"Index",components:{TabPage:i["m"]},data:function(){var e=this;return{config:{activeMenu:"SysRoleList",submenu:[{title:this.$t("route.SystemRole"),name:"SysRoleList",hidden:function(){return!e.$hasPerm("rbac.view_systemrole")},component:function(){return Promise.all([t.e("chunk-commons"),t.e("chunk-27824793"),t.e("chunk-4367c372"),t.e("chunk-2e5a7b54"),t.e("chunk-07d50204")]).then(t.bind(null,"1309"))}},{title:this.$t("route.OrgRole"),name:"OrgRoleList",hidden:function(){return!e.$store.getters.hasValidLicense||!e.$hasPerm("rbac.view_orgrole")},component:function(){return Promise.all([t.e("chunk-commons"),t.e("chunk-27824793"),t.e("chunk-4367c372"),t.e("chunk-2e5a7b54"),t.e("chunk-10bdfd42")]).then(t.bind(null,"b8b6"))}}]}}},computed:{Title:function(){return this.$t("route.RoleList")}},mounted:function(){}},r=o,s=t("2877"),a=Object(s["a"])(r,u,c,!1,null,"81a6d6ec",null);n["default"]=a.exports}}]);