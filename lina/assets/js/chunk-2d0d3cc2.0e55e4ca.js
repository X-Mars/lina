(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3cc2"],{"5dfc":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("GenericListTable",{attrs:{"table-config":e.tableConfig,"header-actions":e.headerActions}})},s=[],o=(t("d92a"),t("cd4a")),i=t("e975"),r=t("82a0"),c={name:"AssetChangeAuthPlanList",components:{GenericListTable:o["g"]},data:function(){var e=this;return{tableConfig:{url:"/api/v1/xpack/change-auth-plan/plan/",columns:["name","username","assets_amount","nodes_amount","password_strategy_display","is_periodic","periodic_display","run_times","comment","org_name","actions"],columnsShow:{min:["name","actions"],default:["name","username","password_strategy_display","is_periodic","periodic_display","run_times","actions"]},columnsMeta:{name:{formatter:i["f"],formatterArgs:{route:"AssetChangeAuthPlanDetail"}},username:{showOverflowTooltip:!0},assets_amount:{label:e.$t("xpack.ChangeAuthPlan.AssetAmount"),width:"80px"},nodes_amount:{label:e.$t("xpack.ChangeAuthPlan.NodeAmount"),width:"80px"},password_strategy_display:{label:e.$t("xpack.ChangeAuthPlan.PasswordStrategy"),width:"220px",showOverflowTooltip:!0},is_periodic:{label:e.$t("xpack.ChangeAuthPlan.Timer"),formatterArgs:{showFalse:!1},width:"80px"},periodic_display:{label:e.$t("xpack.ChangeAuthPlan.TimerPeriod"),showOverflowTooltip:!0,width:"150px"},run_times:{label:e.$t("xpack.ChangeAuthPlan.ExecutionTimes"),width:"87px",formatter:i["f"],formatterArgs:{route:"AssetChangeAuthPlanDetail",routeQuery:{activeTab:"AssetChangeAuthPlanExecutionList"}}},comment:{width:"90px"},actions:{width:"164px",formatterArgs:{onClone:function(a){var t=a.row;e.$router.push({name:"AssetChangeAuthPlanCreate",query:{clone_from:t.id}})},onUpdate:function(a){var t=a.row;e.$router.push({name:"AssetChangeAuthPlanUpdate",params:{id:t.id}})},extraActions:[{title:e.$t("xpack.Execute"),name:"execute",can:this.$hasPerm("xpack.add_changeauthplanexecution"),type:"info",callback:function(e){var a=e.row;this.$axios.post("/api/v1/xpack/change-auth-plan/plan-execution/",{plan:a.id}).then((function(e){Object(r["i"])(e["task"])}))}.bind(this)}]}}}},headerActions:{hasRefresh:!0,hasExport:!1,hasImport:!1,hasMoreActions:!1,createRoute:function(){return{name:"AssetChangeAuthPlanCreate"}}}}}},l=c,u=t("2877"),h=Object(u["a"])(l,n,s,!1,null,"8f1ed818",null);a["default"]=h.exports}}]);