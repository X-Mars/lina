(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0001"],{"9b02":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Page",[t("ListTable",{ref:"ListTable",attrs:{"table-config":e.tableConfig,"header-actions":e.headerActions}})],1)},n=[],o=t("579c"),r=t("83b2"),l=t("e975"),i={name:"DatabaseApp",components:{ListTable:o["a"],Page:r["a"]},props:{},data:function(){return{tableConfig:{url:"/api/v1/perms/users/applications/?category=db",columns:[{prop:"name",align:"center",label:this.$t("assets.Name"),sortable:!0},{prop:"type_display",align:"center",label:this.$t("assets.Type")},{prop:"attrs.database",align:"center",label:this.$t("assets.Database")},{prop:"comment",align:"center",showOverflowTooltip:!0,label:this.$t("assets.Comment")},{prop:"id",align:"center",label:this.$t("assets.Action"),formatter:l["a"],formatterArgs:{hasDelete:!1,hasUpdate:!1,hasClone:!1,extraActions:[{name:"connect",fa:"fa-terminal",type:"primary",callback:function(e){var a=e.row;window.open("/luna/?type=database_app&login_to=".concat(a.id),"_blank")}}]}}]},headerActions:{hasExport:!1,hasImport:!1,hasRefresh:!0,hasCreate:!1,hasBulkDelete:!1,hasBulkUpdate:!1,hasLeftActions:!1,hasSearch:!0,hasRightActions:!0}}},computed:{},mounted:function(){},methods:{}},c=i,p=t("2877"),h=Object(p["a"])(c,s,n,!1,null,"97e0bc24",null);a["default"]=h.exports}}]);