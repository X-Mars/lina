(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f97676a"],{"3cc2":function(e,t,a){},ac7c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("GenericTreeListPage",{ref:"TreeTablePage",attrs:{"tree-setting":e.treeSetting,"header-actions":e.headerActions,"table-config":e.tableConfig}}),e._v(" "),a("PermBulkUpdateDialog",e._b({attrs:{visible:e.updateSelectedDialogSetting.visible,"perm-type":e.permType},on:{"update:visible":function(t){return e.$set(e.updateSelectedDialogSetting,"visible",t)}}},"PermBulkUpdateDialog",e.updateSelectedDialogSetting,!1))],1)},i=[],s=(a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("bd86")),n=(a("7f7f"),a("fbde")),o=a("cf45"),c=a("e975"),l=a("cc0d"),p=a("d240"),u=a("2f62");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={name:"AssetAccountList",components:{GenericTreeListPage:n["a"],PermBulkUpdateDialog:p["a"]},data:function(){var e=this,t=this;return{permType:"applications",isInit:!0,clickedRow:null,iShowTree:!0,treeSetting:{async:!1,showMenu:!1,showRefresh:!0,showAssets:!1,treeUrl:"/api/v1/applications/applications/tree/",callback:{onSelected:function(e,a){var r,i="/api/v1/perms/application-permissions/",s=a.id,n=null===(r=a.meta.data)||void 0===r?void 0:r.value;"category"===a.meta.type?(i=Object(o["n"])(i,"category",n),i=Object(o["n"])(i,"type","")):"type"===a.meta.type?(i=Object(o["n"])(i,"category",""),i=Object(o["n"])(i,"type",n)):"application"===a.meta.type&&(i=Object(o["n"])(i,"category",""),i=Object(o["n"])(i,"type",""),i=Object(o["n"])(i,"app",s)),setTimeout((function(){t.tableConfig.url=i}),100)}}},tableConfig:{url:"/api/v1/perms/application-permissions/",columns:["name","type_display","category_display","users_amount","user_groups_amount","applications_amount","system_users_amount","date_expired","is_valid","from_ticket","created_by","date_created","comment","org_name","actions"],columnsShow:{min:["name","actions"],default:["name","category_display","users_amount","user_groups_amount","applications_amount","system_users_amount","is_valid","actions"]},columnsMeta:{name:{formatterArgs:{routeQuery:{activeTab:"RemoteAppPermissionDetail"}},showOverflowTooltip:!0},type_display:{width:"135px"},category_display:{width:"135px"},users_amount:{label:this.$t("users.Users"),width:"110px",formatter:c["f"],formatterArgs:{routeQuery:{activeTab:"ApplicationPermissionUser"}}},user_groups_amount:{label:this.$t("users.UserGroups"),width:"110px",formatter:c["f"],formatterArgs:{routeQuery:{activeTab:"ApplicationPermissionUser"}}},applications_amount:{label:this.$t("assets.Applications"),width:"110px",formatter:c["f"],formatterArgs:{routeQuery:{activeTab:"ApplicationsPermission"}}},system_users_amount:{label:this.$t("assets.SystemUsers"),width:"110px",formatter:c["f"],formatterArgs:{routeQuery:{activeTab:"ApplicationsPermission"}}},from_ticket:{label:this.$t("perms.fromTicket"),width:100,formatterArgs:{showFalse:!1}},actions:{formatterArgs:{onUpdate:function(t){var a=t.row,r={name:"ApplicationPermissionUpdate",params:{id:a.id},query:{type:a.type,category:a.category}};e.$router.push(r)},onClone:function(t){var a=t.row,r={name:"ApplicationPermissionCreate",query:{type:a.type,category:a.category,clone_from:a.id}};e.$router.push(r)}}}}},headerActions:{hasCreate:!1,createInNewPage:!0,moreActionsType:"primary",moreCreates:{callback:function(e){t.$router.push({name:"ApplicationPermissionCreate",query:{category:e.category.toLowerCase(),type:e.name.toLowerCase()}})},dropdown:l["d"]},extraMoreActions:[{name:"actionUpdateSelected",title:this.$t("common.updateSelected"),can:function(e){var a=e.selectedRows;return a.length>0&&!t.currentOrgIsRoot&&t.$hasPerm("perms.change_applicationpermission")},callback:function(e){var a=e.selectedRows;t.updateSelectedDialogSetting.selectedRows=a,t.updateSelectedDialogSetting.visible=!0}}]},updateSelectedDialogSetting:{visible:!1,selectedRows:[]}}},computed:m({},Object(u["b"])(["currentOrgIsRoot"]))},h=f,y=a("2877"),b=Object(y["a"])(h,r,i,!1,null,null,null);t["default"]=b.exports},c0eb:function(e,t,a){"use strict";var r=a("1157"),i=a.n(r);window.$=i.a,window.jQuery=i.a,t["a"]=i.a},cc0d:function(e,t,a){"use strict";a.d(t,"h",(function(){return f})),a.d(t,"i",(function(){return v})),a.d(t,"g",(function(){return _})),a.d(t,"e",(function(){return O})),a.d(t,"f",(function(){return $})),a.d(t,"a",(function(){return j})),a.d(t,"d",(function(){return k})),a.d(t,"c",(function(){return D})),a.d(t,"b",(function(){return x}));var r=a("0692"),i=a("4360"),s=a("cf45"),n="chrome",o="mysql_workbench",c="vmware_client",l="custom",p="remote_app";function u(){return i["a"].getters.hasValidLicense}var d=[{name:n,title:r["a"].t("applications.applicationsType.".concat(n)),type:"primary",group:r["a"].t("applications.RemoteApp"),category:p,has:u},{name:o,title:r["a"].t("applications.applicationsType.".concat(o)),type:"primary",category:p,has:u},{name:c,title:r["a"].t("applications.applicationsType.".concat(c)),type:"primary",category:p,has:u},{name:l,title:r["a"].t("applications.applicationsType.".concat(l)),type:"primary",category:p,has:u}],m="mysql",f="oracle",h="postgresql",y="mariadb",b="db",g="sqlserver",v="redis",_="mongodb",O=[{name:m,title:r["a"].t("applications.applicationsType.".concat(m)),type:"primary",category:b,has:!0,group:r["a"].t("applications.RDBProtocol")},{name:y,title:r["a"].t("applications.applicationsType.".concat(y)),type:"primary",category:b,has:!0},{name:f,title:r["a"].t("applications.applicationsType.".concat(f)),type:"primary",category:b,has:u},{name:h,title:r["a"].t("applications.applicationsType.".concat(h)),type:"primary",category:b,has:u},{name:g,title:r["a"].t("applications.applicationsType.".concat(g)),type:"primary",category:b,has:u}],w={name:_,title:r["a"].t("applications.applicationsType.".concat(_)),type:"primary",category:b,group:r["a"].t("applications.NoSQLProtocol")},T={name:v,title:r["a"].t("applications.applicationsType.".concat(v)),type:"primary",category:b,has:!0},$=[w,T],j=[].concat(O,[w]),P="k8s",S="cloud",A=[{name:P,title:r["a"].t("applications.applicationsType.".concat(P)),group:r["a"].t("applications.Cloud"),type:"primary",category:S,has:!0}],k=[].concat(O,$,d,A),D=[].concat(O,$,A),x=[Object(s["j"])(O),Object(s["j"])($),Object(s["j"])(d),Object(s["j"])(A)]},ce4b:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tree",e._b({attrs:{data:e.iData,"show-checkbox":"","node-key":"id","default-expand-all":!0,"default-checked-keys":e.value,props:e.defaultProps},on:{check:e.handleCheckChange}},"el-tree",e.$attrs,!1))},i=[],s=(a("6762"),a("2fdb"),a("ac4d"),a("8a81"),a("ac6a"),a("6d67"),{name:"PermissionFormActionField",props:{value:{type:Array,default:function(){return[]}},choices:{type:Array,default:function(){return[]}},actions:{type:Array,default:function(){return[]}}},data:function(){return{defaultProps:{children:"children",label:"label"},fullChoicesTreeNodes:[{id:"all",label:this.$t("perms.all"),children:[{id:"connect",label:this.$t("perms.connect")},{id:"updownload",label:this.$t("perms.upDownload"),children:[{id:"upload_file",label:this.$t("perms.uploadFile")},{id:"download_file",label:this.$t("perms.downloadFile")}]},{id:"clipboard_copy_paste",label:this.$t("perms.clipboardCopyPaste"),children:[{id:"clipboard_copy",label:this.$t("perms.clipboardCopy")},{id:"clipboard_paste",label:this.$t("perms.clipboardPaste")}]}]}]}},computed:{choicesIDs:function(){return 0!==this.actions.length?this.actions:0===this.choices.length?["all","connect","upload_file","download_file","updownload","clipboard_copy_paste","clipboard_copy","clipboard_paste"]:this.choices.map((function(e){return e.value}))},iData:function(){this.$log.debug("choices: ",this.choicesIDs);var e=_.cloneDeep(this.fullChoicesTreeNodes),t=this.trimChoicesTreeNodes(e);return this.$log.debug("choicesTreeNodes: ",t),t}},methods:{trimChoicesTreeNodes:function(e){var t=[],a=!0,r=!1,i=void 0;try{for(var s,n=e[Symbol.iterator]();!(a=(s=n.next()).done);a=!0){var o=s.value;if(this.choicesIDs.includes(o.id)){var c=o.children||[];0!==c.length&&(c=this.trimChoicesTreeNodes(c),o.children=c),t.push(o)}}}catch(l){r=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(r)throw i}}return t},handleCheckChange:function(e,t){var a=t.checkedKeys;0!==a.length&&a.push("connect"),this.$emit("input",a)}}}),n=s,o=a("2877"),c=Object(o["a"])(n,r,i,!1,null,"2d0b5919",null);t["a"]=c.exports},d240:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.visible?a("GenericUpdateFormDialog",e._g({attrs:{"selected-rows":e.selectedRows,"form-setting":e.formSetting,visible:e.visible}},e.$listeners)):e._e()},i=[],s=(a("d92a"),a("cd4a")),n=(a("7f7f"),a("1e0c")),o=a("ce4b");function c(){var e={label:this.$t("users.Users"),hidden:function(){return!1},el:{value:[],ajax:{url:"/api/v1/users/users/?fields_size=mini",transformOption:function(e){return{label:e.name+"("+e.username+")",value:e.id}}}}},t={label:this.$t("users.UserGroups"),hidden:function(){return!1},el:{value:[],url:"/api/v1/users/groups/"}},a={type:"assetSelect",hidden:function(){return!1},component:n["a"],label:this.$t("perms.Asset"),rules:[{required:!1}],el:{value:[]}},r={label:this.$t("perms.Node"),hidden:function(){return!1},el:{value:[],ajax:{url:"/api/v1/assets/nodes/",transformOption:function(e){return{label:e.full_value,value:e.id}}}}},i={label:this.$t("perms.SystemUser"),hidden:function(){return!1},el:{value:[],ajax:{url:"/api/v1/assets/system-users/?protocol__in=rdp,ssh,vnc,telnet",transformOption:function(e){var t=e.username||"*";return{label:e.name+"("+t+")",value:e.id}}}}},s={label:this.$t("perms.Actions"),hidden:function(){return!1},component:o["a"],helpText:this.$t("common.actionsTips")},c={label:this.$t("common.dateStart"),hidden:function(){return!1}},l={label:this.$t("common.dateExpired"),hidden:function(){return!1}},p={label:this.$t("assets.IsActive"),type:"checkbox"},u={label:this.$t("assets.Applications"),hidden:function(){return!1},el:{value:[],ajax:{url:"/api/v1/applications/applications/",transformOption:function(e){return{label:e.name+" ("+e.type_display+")",value:e.id}}}}};return{users:e,user_groups:t,assets:a,applications:u,nodes:r,system_users:i,actions:s,is_active:p,date_start:c,date_expired:l}}var l=c,p={name:"PermBulkUpdateDialog",components:{GenericUpdateFormDialog:s["i"]},props:{permType:{type:String,default:"asset"},visible:{type:Boolean,default:!1},selectedRows:{type:Array,default:function(){return[]}}},data:function(){return{formSetting:{url:"",hasSaveContinue:!1,initial:{},fields:[],fieldsMeta:{}}}},created:function(){this.init()},methods:{init:function(){var e,t=l.bind(this)(),a=["users","user_groups","system_users","actions","is_active","date_start","date_expired"],r={users:t.users,user_groups:t.user_groups,system_users:t.system_users,actions:t.actions,date_start:t.date_start,date_expired:t.date_expired,is_active:t.is_active};"asset"!==this.permType?(e="/api/v1/perms/application-permissions/",a.splice(2,0,"applications"),Object.assign(r,{applications:t.applications})):(e="/api/v1/perms/asset-permissions/",a.splice.apply(a,[2,0].concat(["assets","nodes"])),Object.assign(r,{assets:t.assets,nodes:t.nodes})),this.$data.formSetting.url=e,this.$data.formSetting.fields=a,this.$data.formSetting.fieldsMeta=r}}},u=p,d=a("2877"),m=Object(d["a"])(u,r,i,!1,null,"5b32989a",null);t["a"]=m.exports},fbde:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Page",e._b({},"Page",e.$attrs,!1),[a("TreeTable",e._g(e._b({ref:"TreeTable",scopedSlots:e._u([{key:"table",fn:function(){return[e._t("table")]},proxy:!0},{key:"rMenu",fn:function(t){var r=t.data;return a("div",{},[e._t("rMenu",null,{data:r})],2)}}],null,!0)},"TreeTable",e.$attrs,!1),e.$listeners))],1)},i=[],s=(a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("bd86")),n=a("83b2"),o=a("8ad4"),c=a("2f62");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={name:"GenericTreeListPage",components:{Page:n["a"],TreeTable:o["a"]},computed:p({},Object(c["b"])(["currentOrgIsRoot"])),created:function(){var e=this.$attrs["header-actions"]||{};void 0===e.canCreate&&this.currentOrgIsRoot&&_.set(this.$attrs,"header-actions.canCreate",!1),void 0===e.hasImport&&this.currentOrgIsRoot&&_.set(this.$attrs,"header-actions.hasImport",!1)},methods:{hideRMenu:function(){this.$refs.TreeTable.hideRMenu()},getSelectedNodes:function(){return this.$refs.TreeTable.getSelectedNodes()},getNodes:function(){return this.$refs.TreeTable.getNodes()},selectNode:function(e){return this.$refs.TreeTable.selectNode(e)}}},d=u,m=a("2877"),f=Object(m["a"])(d,r,i,!1,null,"e5ee6c70",null);t["a"]=f.exports}}]);