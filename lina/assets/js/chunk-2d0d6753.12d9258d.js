(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6753"],{7345:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("GenericCreateUpdatePage",e._b({attrs:{"create-success-next-route":e.successUrl,"update-success-next-route":e.successUrl,"after-get-form-value":e.afterGetFormValue}},"GenericCreateUpdatePage",e.$data,!1))},a=[],i=(n("6b54"),n("87b3"),n("28a5"),n("2caf"),n("7f7f"),n("cd4a")),u={name:"EndpointRuleCreateUpdate",components:{GenericCreateUpdatePage:i["d"]},data:function(){return{url:"/api/v1/terminal/endpoint-rules/",successUrl:{name:"TerminalSetting",params:{activeMenu:"EndpointRuleList"}},fields:[[this.$t("common.Basic"),["name","ip_group","endpoint","priority"]],[this.$t("common.Other"),["comment"]]],fieldsMeta:{endpoint:{el:{multiple:!1,value:[],ajax:{url:"/api/v1/terminal/endpoints/?fields_size=mini",transformOption:function(e){return{label:e.name,value:e.id}}}}}},hasDetailInMsg:!1,cleanFormValue:function(e){return Array.isArray(e.ip_group)||(e.ip_group=e.ip_group?e.ip_group.split(","):[]),e},afterGetFormValue:function(e){return e.ip_group=e.ip_group.toString(),e}}}},o=u,s=n("2877"),p=Object(s["a"])(o,r,a,!1,null,"4487f4b8",null);t["default"]=p.exports}}]);