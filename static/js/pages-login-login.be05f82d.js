(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0027":function(e,t,o){"use strict";var i=o("3e55"),n=o.n(i);n.a},"3e55":function(e,t,o){var i=o("ebaf");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=o("4f06").default;n("fe05a1b0",i,!0,{sourceMap:!1,shadowMode:!1})},"4a1c":function(e,t,o){"use strict";var i;o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"container"},[o("v-uni-view",{staticClass:"login_box"},[o("v-uni-view",{staticClass:"form_label"},[o("v-uni-input",{staticClass:"login_input",attrs:{"placeholder-class":"place-holder",type:"number",maxlength:"11",placeholder:"手机号"},model:{value:e.loginForm.phone,callback:function(t){e.$set(e.loginForm,"phone",t)},expression:"loginForm.phone"}})],1),o("v-uni-view",{staticClass:"form_label vcode_label"},[o("v-uni-input",{staticClass:"login_input vcode_input",attrs:{"placeholder-class":"place-holder",type:"number",maxlength:"6",placeholder:"验证码",focus:e.autoVcode},model:{value:e.loginForm.vcode,callback:function(t){e.$set(e.loginForm,"vcode",t)},expression:"loginForm.vcode"}}),e.showSendCode?e._e():o("v-uni-view",{staticClass:"get_vcode",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getVcode()}}},[e._v("发送验证码")]),e.showSendCode?o("v-uni-view",{staticClass:"get_vcode",class:e.showSendCode?"get_vcode_1":""},[e._v("重新获取（"+e._s(e.times)+"s）")]):e._e()],1),o("v-uni-view",{staticClass:"login-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login()}}},[e._v("登录")])],1)],1)},a=[]},"4a46":function(e,t,o){"use strict";o.r(t);var i=o("4a1c"),n=o("751b");for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);o("0027");var l,s=o("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"66d811eb",null,!1,i["a"],l);t["default"]=c.exports},"751b":function(e,t,o){"use strict";o.r(t);var i=o("99c3"),n=o.n(i);for(var a in i)"default"!==a&&function(e){o.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},"99c3":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o("5a90"),n={data:function(){return{loginForm:{phone:"",vcode:""},autoVcode:!1,showVcodeEn:!0,showSendCode:!1,times:0,timer:""}},onLoad:function(){},onShow:function(){},watch:{"loginForm.phone":function(){i.mobileReg.test(this.loginForm.phone)?this.autoVcode=!0:11==this.loginForm.phone.length&&this.$toast("请输入正确的手机号")}},methods:{mobileValidate:function(){return""==this.loginForm.phone?(this.$toast("请输入手机号"),!1):!!i.mobileReg.test(this.loginForm.phone)||(this.$toast("手机号格式错误"),!1)},validate:function(){if(this.mobileValidate())return""!=this.loginForm.vcode||(this.$toast("请输入验证码"),!1)},getVcode:function(){var e=this;if(this.mobileValidate()){uni.showLoading({title:"请求中..."});var t={mobile:this.loginForm.phone,typeCode:"LOGIN"};this.$api.sendSmsCode(t).then((function(t){if(uni.hideLoading(),200==t.code){e.autoVcode=!0,e.$toast(t.msg);var o=60;e.timer||(e.times=o,e.showSendCode=!0,e.timer=setInterval((function(){e.times>0&&e.times<=o?e.times--:(e.showSendCode=!1,clearInterval(e.timer),e.timer=null)}),1e3))}else e.$toast(t.msg)})).catch((function(t){uni.hideLoading(),e.$toast(t)}))}},login:function(){var e=this;uni.showLoading({title:"登录中..."}),this.$api.login({mobile:this.loginForm.phone,code:this.loginForm.vcode}).then((function(t){uni.hideLoading(),e.$toast("登录成功"),uni.setStorageSync("token",t.token),uni.setStorageSync("mobile",t.mobile),uni.setStorageSync("role",t.role),uni.setStorageSync("needBindingWx",t.needBindingWx),1==t.role&&t.needBindingWx?uni.navigateTo({url:"../wxUserInfo/wxUserInfo"}):(console.log("1"),uni.switchTab({url:"../index/index"}))}))}}};t.default=n},ebaf:function(e,t,o){var i=o("24fb");t=i(!1),t.push([e.i,".container[data-v-66d811eb]{width:100%;height:100vh;background:#fff}.login_box[data-v-66d811eb]{width:%?636?%;height:auto;position:absolute;top:%?300?%;left:%?57?%}.login_box .form_label[data-v-66d811eb]{width:%?600?%;height:%?108?%;padding:%?16?% 0 0;margin:auto;border-bottom:1px hsla(0,0%,77.6%,.5) solid;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login_box .form_label .login_input[data-v-66d811eb]{width:%?600?%;height:%?108?%;line-height:%?108?%;font-size:%?32?%;color:#333}.login_box .form_label .vcode_input[data-v-66d811eb]{width:%?480?%}.login_box .vcode_label[data-v-66d811eb]{position:relative}.login_box .vcode_label .get_vcode[data-v-66d811eb]{height:%?108?%;line-height:%?108?%;font-size:%?26?%;color:#5fc2ff;z-index:99;position:absolute;top:%?16?%;right:%?18?%}.login_box .vcode_label .get_vcode_1[data-v-66d811eb]{color:#757575!important}.login-btn[data-v-66d811eb]{width:%?636?%;height:%?96?%;line-height:%?96?%;font-size:%?36?%;text-align:center;color:#fff;background:#5fc2ff;border-radius:%?48?%;margin:%?46?% auto 0}",""]),e.exports=t}}]);