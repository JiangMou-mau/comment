webpackJsonp([1],{0:function(t,e){},"1uuo":function(t,e){},"AcH+":function(t,e){},KULt:function(t,e){},KgzO:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},s,!1,function(t){a("yr/9")},null,null).exports,r=a("/ocq"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports;var l={name:"Login",data:function(){return{follower:{faccount:"",pwd:""},message:"",token:""}},methods:{login:function(){var t="/api/logIn";console.log(t);var e=this;console.log(e.follower),e.$http.post(t,e.follower).then(function(t){e.token=t.data,localStorage.token=e.token,console.log("登入成功"),e.$router.push("/message")}).catch(function(t){e.message=t.data,console.log(t.data)})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("form",{staticClass:"form-signin text-center",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("h1",{staticClass:"h3 mb-4 heading-primary"},[t._v("留言板登入")]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:"faccount"}},[t._v("帳號")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.follower.faccount,expression:"follower.faccount"}],staticClass:"form__input",attrs:{type:"text",placeholder:"請輸入帳號",id:"faccount",required:""},domProps:{value:t.follower.faccount},on:{input:function(e){e.target.composing||t.$set(t.follower,"faccount",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:"pwd"}},[t._v("密碼")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.follower.pwd,expression:"follower.pwd"}],staticClass:"form__input",attrs:{type:"password",placeholder:"請輸入密碼",id:"pwd",required:""},domProps:{value:t.follower.pwd},on:{input:function(e){e.target.composing||t.$set(t.follower,"pwd",e.target.value)}}})]),t._v(" "),""==!t.message?a("div",{staticClass:"checkbox mb-3",staticStyle:{float:"left"}},[a("label",{staticClass:"login-msg danger"},[t._v(t._s(t.message))])]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("登入")]),t._v(" "),a("router-link",{staticClass:"btn btn-outline-primary btn-md",attrs:{to:{name:"Signup"}}},[t._v("註冊")]),t._v(" "),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("php作業")])],1)])},staticRenderFns:[]};var u=a("VU/8")(l,c,!1,function(t){a("KgzO")},"data-v-089ff9d0",null).exports,m={name:"Signup",data:function(){return{follower:{faccount:"",pwd:"",name:"",address:"",mphone:""},message:"",token:""}},methods:{Signup:function(){var t=this,e="/api/signUp";console.log(e);var a=this;a.$http.post(e,a.follower).then(function(e){console.log(e.data),alert(e.data),t.$store.dispatch("loginModule/login",t.follower)}).catch(function(t){a.message=t.data,console.log(t.data)})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("form",{staticClass:"form-signin text-center",on:{submit:function(e){return e.preventDefault(),t.Signup(e)}}},[a("h1",{staticClass:"h3 mb-4 heading-primary"},[t._v("帳戶註冊")]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:"account"}},[t._v("帳號")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.follower.faccount,expression:"follower.faccount"}],staticClass:"form__input",attrs:{type:"text",placeholder:"請輸入帳號",id:"faccount",required:""},domProps:{value:t.follower.faccount},on:{input:function(e){e.target.composing||t.$set(t.follower,"faccount",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:"password"}},[t._v("密碼")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.follower.pwd,expression:"follower.pwd"}],staticClass:"form__input",attrs:{type:"password",placeholder:"請輸入密碼",id:"pwd",required:""},domProps:{value:t.follower.pwd},on:{input:function(e){e.target.composing||t.$set(t.follower,"pwd",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:"name"}},[t._v("姓名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.follower.name,expression:"follower.name"}],staticClass:"form__input",attrs:{type:"text",placeholder:"請輸入姓名",id:"name",required:""},domProps:{value:t.follower.name},on:{input:function(e){e.target.composing||t.$set(t.follower,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:"address"}},[t._v("地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.follower.address,expression:"follower.address"}],staticClass:"form__input",attrs:{type:"text",placeholder:"請輸入地址",id:"address",required:""},domProps:{value:t.follower.address},on:{input:function(e){e.target.composing||t.$set(t.follower,"address",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:"mphone"}},[t._v("註冊")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.follower.mphone,expression:"follower.mphone"}],staticClass:"form__input",attrs:{type:"text",placeholder:"請輸入電話",id:"mphone",required:""},domProps:{value:t.follower.mphone},on:{input:function(e){e.target.composing||t.$set(t.follower,"mphone",e.target.value)}}})]),t._v(" "),""==!t.message?a("div",{staticClass:"checkbox mb-3",staticStyle:{float:"left"}},[a("label",{staticClass:"login-msg danger"},[t._v(t._s(t.message))])]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("註冊")]),t._v(" "),a("router-link",{staticClass:"btn btn-outline-primary btn-md",attrs:{to:{name:"Login"}}},[t._v("登入")]),t._v(" "),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("php作業")])],1)])},staticRenderFns:[]};var d=a("VU/8")(m,v,!1,function(t){a("P/w8")},"data-v-3c3c34a8",null).exports,p={data:function(){return{newTitle:"",newContent:"",userData:null,comments:[]}},mounted:function(){this.getUserData()},methods:{getUserData:function(){var t="/api/getUserData";console.log(t);var e=this;e.$http.get(t,{headers:{Authorization:"bearer"+localStorage.token}}).then(function(t){e.userData=t.data,e.getMessage()}).catch(function(t){console.log(t.data)})},getMessage:function(){var t="/api/showComment";console.log(t);var e=this;e.$http.get(t,{headers:{Authorization:"bearer"+localStorage.token}}).then(function(t){e.comments=t.data}).catch(function(t){console.log(t.data)})},leaveMessage:function(){var t="/api/comment",e=this,a={title:this.newTitle,content:this.newContent};console.log(t),e.$http.post(t,a,{headers:{Authorization:"bearer"+localStorage.token}}).then(function(t){e.comments.splice(0,0,t.data),e.newTitle="",e.newContent=""}).catch(function(t){console.log(t.data)})},deleteComment:function(t){var e="/api/deleteComment?cid="+t;this.newTitle,this.newContent;console.log(e),this.$http.delete(e,{headers:{Authorization:"bearer"+localStorage.token}}).then(function(t){alert(t.data)}).catch(function(t){console.log(t.data)})}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",[a("form",{staticClass:"left",on:{submit:function(e){return e.preventDefault(),t.leaveMessage(e)}}},[a("h1",{staticClass:"h3 mb-4 heading-primary"},[t._v("留言")]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label"},[t._v("標題")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],staticClass:"form__input",attrs:{type:"text",placeholder:"請輸入標題",id:"title",required:""},domProps:{value:t.newTitle},on:{input:function(e){e.target.composing||(t.newTitle=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label"},[t._v("留言")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newContent,expression:"newContent"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入備註",required:""},domProps:{value:t.newContent},on:{input:function(e){e.target.composing||(t.newContent=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("留言")])])]),t._v(" "),a("div",{staticClass:"content-card"},[a("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),a("tbody",t._l(t.comments,function(e){return a("tr",{key:e.cid},[a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",[t._v(t._s(e.content))]),t._v(" "),a("td"),a("td",{staticClass:"btn-group",attrs:{role:"group"}},[e.cfid==t.userData.fid?a("router-link",{staticClass:"btn btn-outline-primary btn-md",attrs:{to:{name:"MessageEdit",params:{id:e.cid}}}},[t._v("編輯")]):t._e(),t._v(" "),e.cfid==t.userData.fid?a("button",{staticClass:"btn btn-outline-danger btn-md",attrs:{type:"button"},on:{click:function(a){return t.deleteComment(e.cid)}}},[t._v("刪除")]):t._e()],1)])}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-margin-bottom-small"},[e("h1",{staticClass:"heading"},[this._v("留言板")]),this._v(" "),e("h2",{staticClass:"heading--sub"},[this._v("歡迎來到留言版")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("姓名")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("標題")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("內容")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("管理")])])])}]};var f=a("VU/8")(p,_,!1,function(t){a("KULt")},"data-v-768d144d",null).exports,h={data:function(){return{newTitle:"",newContent:""}},methods:{editMessage:function(){var t="/api/editComment";console.log(t);var e=this,a={cid:this.$route.params.id,title:this.newTitle,content:this.newContent};e.$http.post(t,a,{headers:{Authorization:"bearer"+localStorage.token}}).then(function(t){e.$router.push("/message")}).catch(function(t){alert(t.data)})}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",[a("form",{staticClass:"left",on:{submit:function(e){return e.preventDefault(),t.editMessage(e)}}},[a("h1",{staticClass:"h3 mb-4 heading-primary"},[t._v("修改留言")]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label"},[t._v("標題")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],staticClass:"form__input",attrs:{type:"text",placeholder:"請輸入標題",id:"title",required:""},domProps:{value:t.newTitle},on:{input:function(e){e.target.composing||(t.newTitle=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label"},[t._v("留言")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newContent,expression:"newContent"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入備註",required:""},domProps:{value:t.newContent},on:{input:function(e){e.target.composing||(t.newContent=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("留言")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-margin-bottom-small"},[e("h1",{staticClass:"heading"},[this._v("留言板")]),this._v(" "),e("h2",{staticClass:"heading--sub"},[this._v("歡迎來到留言版")])])}]};var b=a("VU/8")(h,g,!1,function(t){a("AcH+")},"data-v-a96d6060",null).exports;n.a.use(r.a);var w=new r.a({mode:"history",routes:[{path:"/",name:"Login",component:u},{path:"/login",name:"Login",component:u},{path:"/signup",name:"Signup",component:d},{path:"/message",name:"Message",component:f},{path:"/message/edit/:id",name:"MessageEdit",component:b}]}),C=a("8+8L"),x=a("NYxO");a("mtWM");n.a.use(x.a),n.a.use(C.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:w,components:{App:o},template:"<App/>"});e.default={namespaced:!0,state:{message:""},mutations:{MESSAGE:function(t,e){t.message=e}},getters:{message:function(t){return t.message}}}},"P/w8":function(t,e){},"yr/9":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b73538f3d74bac9ae1d8.js.map