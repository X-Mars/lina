(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9908e77e"],{b7ff:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return b})),a.d(t,"d",(function(){return h}));var r,n,c,s=a("bd86"),o=a("0692"),i="chrome",m="mysql_workbench",l="vmware_client",p="custom",u=[i,m,l,p],d=(r={},Object(s["a"])(r,i,["asset","path","chrome_target","chrome_username","chrome_password"]),Object(s["a"])(r,m,["asset","path","mysql_workbench_ip","mysql_workbench_port","mysql_workbench_name","mysql_workbench_username","mysql_workbench_password"]),Object(s["a"])(r,l,["asset","path","vmware_target","vmware_username","vmware_password"]),Object(s["a"])(r,p,["asset","path","custom_cmdline","custom_target","custom_username","custom_password"]),r),b=(n={},Object(s["a"])(n,i,"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"),Object(s["a"])(n,m,"C:\\Program Files\\MySQL\\MySQL Workbench 8.0 CE\\MySQLWorkbench.exe"),Object(s["a"])(n,l,"C:\\Program Files (x86)\\VMware\\Infrastructure\\Virtual Infrastructure Client\\Launcher\\VpxClient.exe"),n),h=(c={},Object(s["a"])(c,i,{name:i,title:"Chrome"}),Object(s["a"])(c,m,{name:m,title:"MySQL Workbench"}),Object(s["a"])(c,l,{name:l,title:"vSphere Client"}),Object(s["a"])(c,p,{name:p,title:o["a"].t("applications.custom")}),c)},bc95:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericCreateUpdatePage",e._b({},"GenericCreateUpdatePage",e.$data,!1))},n=[],c=a("bd86"),s=(a("7f7f"),a("cd4a")),o=a("b7ff"),i=a("7541"),m=a("8521"),l=a("90c5"),p={components:{GenericCreateUpdatePage:s["d"]},data:function(){var e=this.$route.query.type||"chrome",t=o["c"][e],a=o["d"][e],r=o["b"][e];return{initial:{type:a.name,attrs:{path:r}},fields:[[this.$t("common.Basic"),["name","type"]],[a.title,["attrs"]],[this.$t("common.Other"),["comment"]]],fieldsMeta:{type:{type:"select",options:[{label:a.title,value:e}],disabled:!0},attrs:{fields:t,fieldsMeta:Object(c["a"])({asset:{rules:[i["d"].Required],el:{multiple:!1,ajax:{url:"/api/v1/assets/assets/?platform__base=Windows",transformOption:function(e){return{label:e.hostname,value:e.id}}}}}},"".concat("vmware_client"===e?"vmware":e,"_password"),{component:m["e"]})}},url:"/api/v1/applications/applications/",getUrl:function(){var e=this.$route.params,t="/api/v1/applications/applications/";return e.id&&(t="".concat(t).concat(e.id,"/")),"".concat(t,"?type=").concat(this.$route.query.type)},cleanFormValue:function(e){e.category="remote_app";for(var t=["chrome_password","custom_password","mysql_workbench_password","vmware_password"],a=e.attrs,r=0,n=t;r<n.length;r++){var c=n[r],s=a[c];s&&(a[c]=Object(l["a"])(s))}return e}}},computed:{}},u=p,d=a("2877"),b=Object(d["a"])(u,r,n,!1,null,"406bed14",null);t["default"]=b.exports}}]);