(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-message-message"],{4771:function(e,t,a){e.exports=a.p+"static/img/no-viliager.a921f28b.png"},4827:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-load-more[data-v-0ddebc4c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-0ddebc4c]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-0ddebc4c]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > uni-view[data-v-0ddebc4c]{position:absolute}.uni-load-more__img > uni-view uni-view[data-v-0ddebc4c]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-0ddebc4c 1.56s ease infinite;animation:load-data-v-0ddebc4c 1.56s ease infinite}.uni-load-more__img > uni-view uni-view[data-v-0ddebc4c]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-0ddebc4c]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > uni-view uni-view[data-v-0ddebc4c]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-0ddebc4c]:nth-child(4){top:11px;left:0}.load1[data-v-0ddebc4c],\r\n.load2[data-v-0ddebc4c],\r\n.load3[data-v-0ddebc4c]{height:24px;width:24px}.load2[data-v-0ddebc4c]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-0ddebc4c]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-0ddebc4c]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-0ddebc4c]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-0ddebc4c]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-0ddebc4c]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-0ddebc4c]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-0ddebc4c]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-0ddebc4c]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-0ddebc4c]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-0ddebc4c]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-0ddebc4c]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-0ddebc4c]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-0ddebc4c]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-0ddebc4c{0%{opacity:1}100%{opacity:.2}}',""]),e.exports=t},"4b90":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-scroll-view",{staticClass:"content",attrs:{"scroll-y":!0,"refresher-enabled":"true","refresher-triggered":e.triggered,"refresher-threshold":100,"refresher-background":"#f8f8f8"},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.loadMoreLow()},refresherpulling:function(t){arguments[0]=t=e.$handleEvent(t),e.onPulling.apply(void 0,arguments)},refresherrefresh:function(t){arguments[0]=t=e.$handleEvent(t),e.onRefresh.apply(void 0,arguments)},refresherrestore:function(t){arguments[0]=t=e.$handleEvent(t),e.onRestore.apply(void 0,arguments)},refresherabort:function(t){arguments[0]=t=e.$handleEvent(t),e.onAbort.apply(void 0,arguments)}}},[e._l(e.messageList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"message",class:a==e.messageList.length-1?"":"message-b",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.handleLink(t)}}},[i("v-uni-view",{staticClass:"message-info"},[i("v-uni-view",{staticClass:"message-type"},[i("v-uni-view",{staticClass:"message-type__content",style:"background-color: "+e.bgColor[t.type]},[e._v(e._s(e.typeList[t.type]))]),0==t.isRead?i("v-uni-view",{staticClass:"message-type__status"}):e._e()],1),i("v-uni-view",{staticClass:"message-title"},[e._v(e._s(t.title))]),i("v-uni-view",{staticClass:"message-time"},[e._v(e._s(e.timeFormat(t.createTime)))])],1),0===t.type?i("v-uni-view",{staticClass:"message-detail-2"},[i("v-uni-view",{staticClass:"message-result"},[e._v("预约人："+e._s(t.apptPerson)+"\n\t\t\t\t\t预约时间："+e._s(e.formatDate(t.apptBeginTime))+"("+e._s(e.formatWeek(t.apptBeginTime))+"),")]),i("v-uni-view",{staticClass:"message-result"},[e._v(e._s(e.formatTime(t.apptBeginTime))+" -\n\t\t\t\t\t"+e._s(e.formatTime(t.apptEndTime)))])],1):3===t.type?i("v-uni-view",{staticClass:"message-detail"},[i("v-uni-view",{staticClass:"message-result"},[e._v("申请人："+e._s(t.argPerson)+"\n\t\t\t\t\t老娘舅："+e._s(t.argMediateUncle))])],1):5===t.type?i("v-uni-view",[t.content?i("v-uni-view",{staticClass:"message-result"},[e._v(e._s(t.content))]):e._e(),i("v-uni-view",{staticClass:"message-moment"},[t.momentsImg?i("v-uni-image",{staticClass:"message-moment__img",attrs:{src:e.baseUrl+t.momentsImg}}):e._e(),i("v-uni-view",{staticClass:"message-moment__desc"},[e._v(e._s(t.momentsContent))])],1)],1):i("v-uni-view",{staticClass:"message-detail"},[i("v-uni-view",{staticClass:"message-result"},[e._v(e._s(t.content))])],1)],1)})),e.messageList.length>0?i("uni-load-more",{attrs:{status:e.loadStatus,"content-text":e.contentText,color:"#6b6c6c"}}):e._e(),0==e.messageList.length?i("v-uni-view",{staticClass:"no_data"},[i("v-uni-image",{staticClass:"no_img",attrs:{src:a("4771"),mode:"aspectFit"}}),i("v-uni-view",{staticClass:"no_text"},[e._v("暂时还没有消息哦~")])],1):e._e()],2),i("app-tabbar")],1)},o=[]},"5d22":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".container[data-v-6bceabb3]{width:100%;height:calc(100vh - 49px);background:#f2f2f6}.content[data-v-6bceabb3]{width:100%;height:calc(100% - %?30?%)}.message-b[data-v-6bceabb3]{margin-bottom:%?24?%!important}.message[data-v-6bceabb3]{padding:%?32?% %?24?% %?40?% %?24?%;background-color:#fff;border-radius:%?16?%;margin:%?24?%}.message .message-info[data-v-6bceabb3]{width:auto;height:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?40?%}.message .message-info .message-type[data-v-6bceabb3]{position:relative}.message .message-info .message-type__content[data-v-6bceabb3]{width:%?136?%;height:%?48?%;line-height:%?48?%;font-size:%?28?%;text-align:center;color:#fff;border-radius:%?8?%}.message .message-info .message-type__status[data-v-6bceabb3]{width:%?12?%;height:%?12?%;background-color:#e43838;border-radius:50%;position:absolute;top:%?-6?%;right:%?-6?%}.message .message-info .message-title[data-v-6bceabb3]{width:%?314?%;font-size:%?32?%;font-weight:700;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:%?24?%}.message .message-info .message-time[data-v-6bceabb3]{width:%?180?%;font-size:%?22?%;color:#757575;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.message .message-detail[data-v-6bceabb3]{height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.message .message-detail .message-result[data-v-6bceabb3]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:%?28?%;margin-right:%?10?%}.message .message-detail .message-cont-b[data-v-6bceabb3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#5fc2ff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.message-moment[data-v-6bceabb3]{height:%?136?%;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#f2f2f6;margin-top:%?32?%}.message-moment__img[data-v-6bceabb3]{width:%?136?%;height:%?136?%}.message-moment__desc[data-v-6bceabb3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;margin:%?32?%;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.no_data[data-v-6bceabb3]{width:100%;height:auto;position:relative}.no_data .no_img[data-v-6bceabb3]{width:%?596?%;height:%?510?%;position:absolute;top:%?100?%;left:%?78?%}.no_data .no_text[data-v-6bceabb3]{width:100%;line-height:%?44?%;font-size:%?32?%;color:#626262;text-align:center;position:absolute;top:%?484?%}",""]),e.exports=t},6337:function(e,t,a){"use strict";a.r(t);var i=a("e870"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"875e":function(e,t,a){var i=a("5d22");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("626c2c1a",i,!0,{sourceMap:!1,shadowMode:!1})},a3e5:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===e.status&&e.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1"},[a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}})],1),a("v-uni-view",{staticClass:"load2"},[a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}})],1),a("v-uni-view",{staticClass:"load3"},[a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}})],1)],1),a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:e.color}},[e._v(e._s("more"===e.status?e.contentText.contentdown:"loading"===e.status?e.contentText.contentrefresh:e.contentText.contentnomore))])],1)},o=[]},a974:function(e,t,a){"use strict";a.r(t);var i=a("4b90"),n=a("6337");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("ca4e");var s,r=a("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"6bceabb3",null,!1,i["a"],s);t["default"]=d.exports},aded:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};t.default=i},c323:function(e,t,a){"use strict";a.r(t);var i=a("a3e5"),n=a("ddf3");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("ef02");var s,r=a("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"0ddebc4c",null,!1,i["a"],s);t["default"]=d.exports},ca4e:function(e,t,a){"use strict";var i=a("875e"),n=a.n(i);n.a},da78:function(e,t,a){var i=a("4827");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("d51d991a",i,!0,{sourceMap:!1,shadowMode:!1})},ddf3:function(e,t,a){"use strict";a.r(t);var i=a("aded"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},e870:function(e,t,a){"use strict";var i=a("4ea4");a("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("c323")),o={components:{uniLoadMore:n.default},data:function(){return{triggered:!1,pageNum:0,loadStatus:"more",contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多了"},bgColor:["#5fdaff","#FF9F5F","#3F60E6","#8583FB","#da3b3b","#9AE647"],typeList:["书记预约","书记信箱","事件上报","矛盾调解","三务公开","村聊动态"],messageList:[],baseUrl:uni.globalData.baseUrl}},onLoad:function(){var e=this;this._freshing=!1,setTimeout((function(){e.triggered=!0}),100)},onShow:function(){this.setTabBarIndex(3)},methods:{setMessageIcon:function(e){var t="";switch(e){case"aa":t="../../static/image/serve/icon-serve-1-1.png";break}return t},loadMoreLow:function(){this.pageNum++,"noMore"!=this.loadStatus&&this.getMessage()},getMessage:function(){var e=this,t="?page="+this.pageNum+"&size=10";uni.getStorageSync("role");this.$api.getMsg(t).then((function(t){e.messageList=e.messageList.concat(t.data),t.totalElements<10&&(e.loadStatus="noMore")}))},loadMessage:function(){this.pageNum=0,this.messageList=[],this.loadStatus="more",this.loadMoreLow()},onPulling:function(e){},onRefresh:function(){var e=this;(this._freshing=!1)||(this._freshing=!0,this.loadMessage(),setTimeout((function(){e.triggered=!1,e._freshing=!1}),500))},onRestore:function(){this.triggered="restore"},onAbort:function(){},handleLink:function(e){switch(this.$api.visitorMsgRead({},e.id).then((function(e){})),e.isRead=!0,e.type){case 0:uni.navigateTo({url:"../appointment/appointmentDetail/appointmentDetail?id="+e.objId});break;case 1:uni.navigateTo({url:"../mailBox/mailReply/mailReply?id="+e.objId});break;case 2:uni.navigateTo({url:"/pages/event/detail?id="+e.objId});break;case 3:uni.navigateTo({url:"/pages/peace/detail?id="+e.objId});break;case 4:uni.navigateTo({url:"/pages/work/detail?id="+e.objId});break;case 5:uni.navigateTo({url:"/pages/moments/detail?id="+e.objId});break}},timeFormat:function(e){return this.$moment(e).format("YY-MM-DD hh:mm:ss")},formatTime:function(e){return this.$moment(e).format("mm:ss")},formatDate:function(e){return this.$moment(e).format("MM/DD")},formatWeek:function(e){var t=["日","一","二","三","四","五","六"],a=this.$moment(e).day();return"周"+t[a]}}};t.default=o},ef02:function(e,t,a){"use strict";var i=a("da78"),n=a.n(i);n.a}}]);