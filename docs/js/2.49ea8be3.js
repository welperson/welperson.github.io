(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0f6c":function(t,s,a){"use strict";var i=a("4024"),n=a.n(i);n.a},4024:function(t,s,a){},"47ef":function(t,s,a){"use strict";var i=a("d6f5"),n=a.n(i);n.a},"6a25":function(t,s,a){},9903:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"text-h1 text-primary"},[t._v("마이페이지")]),a("div",{staticClass:"row q-col-gutter-y-md"},[t._m(0),a("div",{staticClass:"col"},[a("div",{staticClass:"text-h3 text-bold"},[t._v("잔여 포인트")]),a("div",{staticClass:"q-pt-md q-pl-xs text-h6"},[t._v("1,000,000원")]),a("div",[a("q-btn",{staticClass:"text-primary q-pt-sm",attrs:{flat:""}},[t._v("상세보기 >")])],1)]),a("div",{staticClass:"col"},[a("div",{staticClass:"text-h3 text-bold"},[t._v("적립금")]),a("div",{staticClass:"q-pt-md q-pl-xs text-h6"},[t._v("39원")]),a("div",[a("q-btn",{staticClass:"text-primary q-pt-sm",attrs:{flat:""}},[t._v("상세보기 >")])],1)])])])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col"},[a("div",{staticClass:"q-pt-lg"},[a("span",{staticClass:"text-h1 text-bold"},[t._v("김유니")]),a("span",{staticClass:"text-h4"},[t._v("님")])])])}],e={name:"MyInfo",data:function(){return{}}},c=e,l=(a("0f6c"),a("2877")),r=a("9c40"),o=a("eebe"),v=a.n(o),d=Object(l["a"])(c,i,n,!1,null,"2bb6212a",null);s["a"]=d.exports;v()(d,"components",{QBtn:r["a"]})},cb92:function(t,s,a){"use strict";var i=a("6a25"),n=a.n(i);n.a},d6f5:function(t,s,a){},e8de:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"q-pa-lg"},[a("MyInfo"),a("Manage",{attrs:{title:t.title}})],1)])},n=[],e=a("9903"),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"q-pl-xl"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 q-pt-md"},[a("ManageMenu")],1),a("div",{staticClass:"col-8 q-pl-xl"},[a("div",{staticClass:"text-h4"},[t._v("\n        "+t._s(t.title)+"\n      ")]),a("div",{staticClass:"q-pt-md q-pb-xl"},[a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-bold text-h5"},[t._v("2020.10.08")]),a("q-btn",{staticClass:"text-primary",attrs:{flat:"",label:"주문상세보기"}},[a("q-icon",{attrs:{right:"",name:"mdi-chevron-right"}})],1)],1),t._m(0),t._m(1)]),a("div",{staticClass:"q-pt-md"},[a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-bold text-h5"},[t._v("2020.10.08")]),a("q-btn",{staticClass:"text-primary",attrs:{flat:"",label:"주문상세보기"}},[a("q-icon",{attrs:{right:"",name:"mdi-chevron-right"}})],1)],1),t._m(2)])])])])},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/2.png"}})]),a("div",{staticClass:"col-7 q-pt-md"},[t._v("모던오피스 고급 스틸 연필꽂이")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/1.png"}})]),a("div",{staticClass:"col-7 q-pt-md"},[t._v("국산 하이큐 네임펜")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/3.png"}})]),a("div",{staticClass:"col-7 q-pt-md"},[t._v("25절 A5 밴드 양장")])])}],r=a("f51c"),o={name:"Manage",components:{ManageMenu:r["a"]},props:["title"],data:function(){return{menus:this.$store.state.menus}}},v=o,d=a("2877"),u=a("9c40"),m=a("0016"),p=a("eebe"),f=a.n(p),h=Object(d["a"])(v,c,l,!1,null,null,null),C=h.exports;f()(h,"components",{QBtn:u["a"],QIcon:m["a"]});var _={name:"MyPage",components:{MyInfo:e["a"],Manage:C},data:function(){return{title:"주문 내역"}}},q=_,x=(a("47ef"),Object(d["a"])(q,i,n,!1,null,"36eaf94a",null));s["default"]=x.exports},f51c:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menu"},[a("q-btn",{on:{click:function(s){return t.$router.push("/mypage")}}},[t._v("주문 내역"),a("q-icon",{staticClass:"icon",attrs:{name:"mdi-chevron-right"}})],1),a("q-btn",{on:{click:function(s){return t.$router.push("/mydelivery")}}},[t._v("배송지 관리"),a("q-icon",{staticClass:"icon",attrs:{name:"mdi-chevron-right"}})],1),a("q-btn",[t._v("예약 조회"),a("q-icon",{staticClass:"icon",attrs:{name:"mdi-chevron-right"}})],1),a("q-btn",[t._v("상품 후기"),a("q-icon",{staticClass:"icon",attrs:{name:"mdi-chevron-right"}})],1),a("q-btn",[t._v("문의 내역"),a("q-icon",{staticClass:"icon",attrs:{name:"mdi-chevron-right"}})],1),a("q-btn",[t._v("개인 정보 관리"),a("q-icon",{staticClass:"icon",attrs:{name:"mdi-chevron-right"}})],1)],1)},n=[],e={name:"ManageMenu",data:function(){return{}}},c=e,l=(a("cb92"),a("2877")),r=a("9c40"),o=a("0016"),v=a("eebe"),d=a.n(v),u=Object(l["a"])(c,i,n,!1,null,null,null);s["a"]=u.exports;d()(u,"components",{QBtn:r["a"],QIcon:o["a"]})}}]);