(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5bd3348"],{"0153":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("GenericCreateUpdatePage",{attrs:{fields:e.fields,url:e.url,"update-success-next-route":e.successUrl,"create-success-next-route":e.successUrl,"fields-meta":e.fieldsMeta}})},r=[],c=(n("ac6a"),n("f3e2"),n("96cf"),n("3b8d")),i=(n("7f7f"),n("cd4a")),s=n("d952"),o={name:"TerminalUpdate",components:{GenericCreateUpdatePage:i["d"]},data:function(){return{successUrl:{name:"TerminalSetting",params:{activeMenu:"TerminalList"}},url:"/api/v1/terminal/terminals/",fields:[[this.$t("sessions.info"),["name","remote_addr","command_storage","replay_storage"]],[this.$t("common.Other"),["comment"]]],fieldsMeta:{command_storage:{type:"select",options:[]},replay_storage:{type:"select",options:[]}}}},computed:{title:function(){return this.$t("sessions.terminalUpdate")},cardTitle:function(){return this.terminalData.name}},mounted:function(){this.initialSelect()},methods:{initialSelect:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["e"])();case 2:return t=e.sent,t.forEach((function(e){a.fieldsMeta.command_storage.options.push({label:e.name,value:e.name})})),e.next=6,Object(s["f"])();case 6:n=e.sent,n.forEach((function(e){a.fieldsMeta.replay_storage.options.push({label:e.name,value:e.name})}));case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},u=o,l=n("2877"),m=Object(l["a"])(u,a,r,!1,null,"1da56bac",null);t["default"]=m.exports},d952:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n("b775");function r(e){return Object(a["a"])({url:"/api/v1/terminal/tasks/kill-session/",method:"post",data:e})}function c(){return Object(a["a"])({url:"/api/v1/terminal/command-storages/",method:"get"})}function i(){return Object(a["a"])({url:"/api/v1/terminal/replay-storages/",method:"get"})}function s(e){return Object(a["a"])({url:"/api/v1/terminal/command-storages/".concat(e,"/test-connective/"),method:"get"})}function o(e){return Object(a["a"])({url:"/api/v1/terminal/replay-storages/".concat(e,"/test-connective/"),method:"get"})}function u(e){return Object(a["a"])({url:e,method:"patch",data:{is_default:!0}})}function l(e){return u("/api/v1/terminal/command-storages/".concat(e,"/"))}function m(e){return u("/api/v1/terminal/replay-storages/".concat(e,"/"))}}}]);