(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44a45405"],{"0765":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("GenericCreateUpdatePage",e._b({attrs:{"after-get-form-value":e.afterGetFormValue}},"GenericCreateUpdatePage",e.$data,!1))},u=[],a=(t("28a5"),t("2caf"),t("6b54"),t("87b3"),t("8615"),t("ac6a"),t("456d"),t("7f7f"),t("5e04")),i=t("8521"),n={name:"AclCreateUpdate",components:{GenericCreateUpdatePage:a["a"]},data:function(){return{initial:{action:"reject",rules:{ip_group:"*"},user:this.$route.query.user,users:{username_group:""}},url:"/api/v1/acls/login-acls/",hasDetailInMsg:!1,fields:[[this.$t("common.Basic"),["name","priority"]],[this.$t("acl.users"),["user"]],[this.$t("acl.Rules"),["rules"]],[this.$t("acl.Action"),["action","reviewers"]],[this.$t("common.Other"),["is_active","comment"]]],fieldsMeta:{is_active:{type:"checkbox"},user:{el:{disabled:!!this.$route.query.user,multiple:!1,ajax:{url:"/api/v1/users/users/?fields_size=mini&all=true",transformOption:function(e){return{label:e.name+"("+e.username+")",value:e.id}}}}},reviewers:{el:{value:[],ajax:{url:"/api/v1/users/users/?fields_size=mini&all=true",transformOption:function(e){return{label:e.name+"("+e.username+")",value:e.id}}}},hidden:function(e){return"confirm"!==e.action}},rules:{fields:["ip_group","time_period"],fieldsMeta:{ip_group:{label:this.$t("acl.ip_group"),helpText:this.$t("acl.ip_group_help_text")},time_period:{label:this.$t("common.time_period"),component:i["g"]}}}},getUrl:function(){var e=this.$route.query,r=this.$route.params,t="/api/v1/acls/login-acls/";return r.id&&(t="".concat(t).concat(r.id,"/")),e.user&&(t="".concat(t,"?user=").concat(e.user)),t},updateSuccessNextRoute:this.$route.query.user?{name:"UserDetail",params:{id:this.$route.query.user}}:{name:"UserLoginACLList"},createSuccessNextRoute:this.$route.query.user?{name:"UserDetail",params:{id:this.$route.query.user}}:{name:"UserLoginACLList"},onPerformError:function(e,r,t){this.$emit("submitError",e);var s=e.response,u=s.data;if(400===s.status)for(var a=0,i=Object.keys(u);a<i.length;a++){var n=i[a],o=u[n];"ip_group"===n&&(o=Object.values(u[n])),o instanceof Array&&(o=o.join(";")),this.$refs.form.setFieldError(n,o)}},afterGetFormValue:function(e){return e.rules.ip_group=e.rules.ip_group.toString(),this.$route.query.user||(e.users.username_group=e.users.username_group.toString()),e},cleanFormValue:function(e){return Array.isArray(e.rules.ip_group)||(e.rules.ip_group=e.rules.ip_group?e.rules.ip_group.split(","):[]),this.$route.query.user?delete e.users:Array.isArray(e.users.username_group)||(e.users.username_group=e.users.username_group?e.users.username_group.split(","):[]),"confirm"!==e.action&&(e.reviewers=[]),e}}},mounted:function(){},methods:{}},o=n,l=t("2877"),c=Object(l["a"])(o,s,u,!1,null,null,null);r["default"]=c.exports},8615:function(e,r,t){var s=t("5ca1"),u=t("504c")(!1);s(s.S,"Object",{values:function(e){return u(e)}})}}]);