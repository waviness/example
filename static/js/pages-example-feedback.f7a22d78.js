(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-example-feedback"],{6563:function(t,e,n){var a=n("82fd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("712b9f7f",a,!0,{sourceMap:!1,shadowMode:!1})},"7f0d":function(t,e,n){"use strict";n.r(e);var a=n("c16b"),i=n("fe65");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a44d");var o,u=n("f0c5"),s=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"fa382b12",null,!1,a["a"],o);e["default"]=s.exports},"82fd":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.feedback__title[data-v-fa382b12]{line-height:%?90?%;padding-left:%?24?%}.feedback__text[data-v-fa382b12]{background-color:#fff;padding:%?16?% %?24?%;font-size:%?30?%}.feedback__imgs[data-v-fa382b12]{background-color:#fff;padding:%?16?%}',""]),t.exports=e},a44d:function(t,e,n){"use strict";var a=n("6563"),i=n.n(a);i.a},c16b:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uInput:n("4636").default,uUpload:n("2a00").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"feedback"},[n("v-uni-view",{staticClass:"feedback__title"},[t._v("问题和意见")]),n("v-uni-view",{staticClass:"feedback__text"},[n("u-input",{attrs:{type:t.type,maxlength:1e3,border:t.border,height:t.height,"auto-height":t.autoHeight},model:{value:t.feedbackContent,callback:function(e){t.feedbackContent=e},expression:"feedbackContent"}})],1),n("v-uni-view",{staticClass:"feedback__title"},[t._v("图片（上传问题截图）")]),n("v-uni-view",{staticClass:"feedback__imgs"},[n("u-upload",{ref:"uUpload",attrs:{action:t.action,"auto-upload":!1}})],1),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交反馈")])],1)},r=[]},d3b2:function(t,e,n){"use strict";n("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{feedbackContent:"",type:"textarea",border:!1,height:160,autoHeight:!0,action:"",fileList:[],flag:!0}},methods:{submit:function(){var t=this;if(this.flag){this.flag=!1,uni.showLoading();var e=[];e=this.$refs.uUpload.lists.filter((function(t){return 100==t.progress})),console.log(e),console.log(this.feedbackContent),setTimeout((function(){uni.hideLoading(),uni.showToast({title:"提交成功",icon:"success"}),t.flag=!0}),1e3)}}}};e.default=a},fe65:function(t,e,n){"use strict";n.r(e);var a=n("d3b2"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a}}]);