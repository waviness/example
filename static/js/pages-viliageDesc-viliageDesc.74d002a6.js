(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-viliageDesc-viliageDesc"],{"0e3b":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".container[data-v-72706fb0]{width:100%;min-height:calc(100vh - %?100?%);background:#f2f2f6;padding-top:%?100?%}.tab-card[data-v-72706fb0]{width:%?750?%;height:%?80?%;padding-top:%?20?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0}.tab-card .tab-card-li[data-v-72706fb0]{width:%?250?%;height:auto;text-align:center}.tab-card .tab-card-li .tab-card-li-t[data-v-72706fb0]{height:%?40?%;line-height:%?40?%;font-size:%?28?%;color:#666;margin-bottom:%?4?%}.tab-card .tab-card-li .tab-card-li-i[data-v-72706fb0]{width:%?112?%;height:%?8?%;background-color:#fff;margin:auto}.tab-card .tab-card-li .tab-card-li-t-active[data-v-72706fb0]{color:#5fc2ff}.tab-card .tab-card-li .tab-card-li-i-active[data-v-72706fb0]{background-color:#5fc2ff}.tab-cont[data-v-72706fb0]{width:%?690?%;height:auto;padding:%?30?%}.zzjg-box[data-v-72706fb0]{width:%?702?%;height:auto;margin:auto}.zzjg-box .zzjg-li[data-v-72706fb0]{width:%?646?%;padding:%?32?% %?28?%;background:#fff;-webkit-border-radius:%?16?%;border-radius:%?16?%;margin-bottom:%?24?%}.zzjg-box .zzjg-li .zzjg-li-i[data-v-72706fb0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.zzjg-box .zzjg-li .zzjg-li-i .name[data-v-72706fb0]{line-height:%?44?%;color:#333;font-size:%?32?%;font-weight:700;margin-right:%?16?%;margin-bottom:%?20?%}.zzjg-box .zzjg-li .zzjg-li-i .title-name[data-v-72706fb0]{font-size:%?24?%}.zzjg-box .zzjg-li .zzjg-li-i .desc[data-v-72706fb0]{text-align:left;line-height:%?40?%;font-size:%?28?%}",""]),t.exports=a},2752:function(t,a,i){"use strict";i("ac1f"),i("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{tabIndex:0,zzjgList:[],zzjgList1:[{id:"",name:"裘松伟",titleDesc:"全面主持村党总支部，村委会和经济合作社工作。",titleName:"村党总支部书记"},{id:"",name:"裘松伟",titleDesc:"全面主持村党总支部，村委会和经济合作社工作。",titleName:"村党总支部书记"}],cqgkText:"",csczText:""}},onLoad:function(){},onShow:function(){this.getInfo()},methods:{tabChange:function(t){this.tabIndex=t},getInfo:function(){var t=this;this.$api.getZzjg({},0).then((function(a){t.zzjgList=a})),this.$api.getCscz().then((function(a){t.csczText=JSON.parse(a).text.replace(/\<img/gi,'<img style="max-width:100%; height:auto; display: block;" ')})),this.$api.getCqgk().then((function(a){t.cqgkText=JSON.parse(a).text.replace(/\<img/gi,'<img style="max-width:100%; height:auto; display: block;" ')}))}}};a.default=e},"732e":function(t,a,i){"use strict";i.r(a);var e=i("ed20"),n=i("81d0");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("e952");var c,l=i("f0c5"),d=Object(l["a"])(n["default"],e["b"],e["c"],!1,null,"72706fb0",null,!1,e["a"],c);a["default"]=d.exports},"81d0":function(t,a,i){"use strict";i.r(a);var e=i("2752"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},9877:function(t,a,i){var e=i("0e3b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("21862152",e,!0,{sourceMap:!1,shadowMode:!1})},e952:function(t,a,i){"use strict";var e=i("9877"),n=i.n(e);n.a},ed20:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tab-card"},[i("v-uni-view",{staticClass:"tab-card-li",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabChange(0)}}},[i("v-uni-view",{staticClass:"tab-card-li-t",class:0==t.tabIndex?"tab-card-li-t-active":""},[t._v("村情概况")]),i("v-uni-view",{staticClass:"tab-card-li-i",class:0==t.tabIndex?"tab-card-li-i-active":""})],1),i("v-uni-view",{staticClass:"tab-card-li",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabChange(1)}}},[i("v-uni-view",{staticClass:"tab-card-li-t",class:1==t.tabIndex?"tab-card-li-t-active":""},[t._v("组织架构")]),i("v-uni-view",{staticClass:"tab-card-li-i",class:1==t.tabIndex?"tab-card-li-i-active":""})],1),i("v-uni-view",{staticClass:"tab-card-li",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabChange(2)}}},[i("v-uni-view",{staticClass:"tab-card-li-t",class:2==t.tabIndex?"tab-card-li-t-active":""},[t._v("村史村志")]),i("v-uni-view",{staticClass:"tab-card-li-i",class:2==t.tabIndex?"tab-card-li-i-active":""})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.tabIndex,expression:"tabIndex == 0"}],staticClass:"tab-cont"},[i("v-uni-view",{staticClass:"detail_desc ql-editor",domProps:{innerHTML:t._s(t.cqgkText)}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.tabIndex,expression:"tabIndex == 1"}],staticClass:"tab-cont"},[i("v-uni-view",{staticClass:"zzjg-box"},t._l(t.zzjgList,(function(a){return i("v-uni-view",{key:a.id,staticClass:"zzjg-li"},[i("v-uni-view",{staticClass:"zzjg-li-i"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(a.name))]),i("v-uni-view",{staticClass:"title-name"},[t._v(t._s(a.titleName))])],1),i("v-uni-view",{staticClass:"zzjg-li-i"},[i("v-uni-view",{staticClass:"desc"},[t._v(t._s(a.titleDesc))])],1)],1)})),1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2==t.tabIndex,expression:"tabIndex == 2"}],staticClass:"tab-cont"},[i("v-uni-view",{staticClass:"detail_desc ql-editor",domProps:{innerHTML:t._s(t.csczText)}})],1)],1)},s=[]}}]);