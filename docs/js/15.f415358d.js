(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"4b83":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"q-pa-lg"},[e("DetailInfo"),e("DetailReference")],1)])},i=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.item.img}})]),e("div",{staticClass:"text-left col-xs-12 col-sm-12 col-md-12 col-lg-6 q-pl-sm q-pt-lg"},[e("h2",[t._v(t._s(t.item.name))]),e("div",{staticClass:"q-py-sm text-secondary detailName"},[t._v(t._s(t.item.exp))]),e("div",{staticClass:"row q-py-xl",staticStyle:{width:"100%"}},[e("div",{staticClass:"text-h4 text-secondary q-pt-md q-pr-xs",attrs:{isSale:""}},[t._v(t._s(t.item.salePrice)+"원")]),e("div",{staticClass:"text-h2 q-pt-xs"},[t._v(t._s(t.item.price)+"원")]),e("q-space"),0!==t.item.salePrice?e("div",{staticClass:"text-h3 text-primary q-pt-sm"},[t._v(t._s(Math.round((t.item.salePrice-t.item.price)/t.item.salePrice*100))+"%")]):t._e()],1),e("div",{staticClass:"row"},[e("div",{staticClass:"text-bold",staticStyle:{width:"100%"}},[t._v("상품을 선택하세요")]),e("div",{staticStyle:{width:"100%"}},[e("q-select",{attrs:{options:t.item.opts,label:"상품 선택"},on:{input:t.onAdd},model:{value:t.product,callback:function(a){t.product=a},expression:"product"}})],1)]),t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"product-box",staticStyle:{width:"100%"}},[e("div",{staticClass:"row q-py-sm"},[e("div",{staticClass:"q-pt-sm q-pl-sm"},[t._v(t._s(a.name))]),e("q-space"),e("div",[e("q-btn",{attrs:{flat:"",label:"X"},on:{click:function(e){return t.onDelete(a)}}})],1)],1),e("div",{staticClass:"row q-pb-xs"},[e("div",{staticClass:"q-pl-sm"},[a.count>0?e("q-btn",{attrs:{size:"xs",label:"-"},on:{click:function(t){a.count--}}}):e("q-btn",{attrs:{size:"xs",label:"-"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:a.count,expression:"product.count"}],staticStyle:{width:"30px"},attrs:{type:"text"},domProps:{value:a.count},on:{input:function(e){e.target.composing||t.$set(a,"count",e.target.value)}}}),e("q-btn",{attrs:{size:"xs",label:"+"},on:{click:function(t){a.count++}}})],1),e("q-space"),e("div",{staticClass:"q-pr-sm"},[t._v(t._s(0+t.item.price*a.count)+" 원")])],1)])})),e("div",{staticClass:"row q-pt-xl text-right",staticStyle:{width:"100%"}},[e("q-space"),e("div",{staticClass:"text-h6 q-pt-md"},[t._v("총 상품금액")]),e("div",{staticClass:"text-h3 q-pt-xs q-pl-sm"},[t._v(t._s(t.total)+" 원")])],1),e("div",{staticClass:"row q-pt-xl",staticStyle:{width:"100%"}},[e("q-space"),t.isHeart?e("q-btn",{staticClass:"col-xs-2 col-sm-1 col-md-1 col-lg-2",attrs:{flat:"",icon:"mdi-heart",color:"primary",size:"xl"},on:{click:function(a){return t.$store.commit("inHeart",t.item.id)}}}):e("q-btn",{staticClass:"col-xs-2 col-sm-1 col-md-1 col-lg-2",attrs:{flat:"",icon:"mdi-heart-outline",color:"primary",size:"xl"},on:{click:function(a){return t.$store.commit("inHeart",t.item.id)}}}),e("q-btn",{staticClass:"col-xs-2 col-sm-1 col-md-1 col-lg-2 text-primary",attrs:{flat:"",icon:"mdi-cart-outline",size:"xl"},on:{click:function(a){t.cartconfirm=!0}}}),e("q-btn",{staticClass:"col-xs-6 col-sm-4 col-md-4 col-lg-5 productbuy",staticStyle:{"font-size":"20px"},attrs:{push:"",color:"primary",label:"구매하기"},on:{click:function(a){t.buyconfirm=!0}}})],1)],2),e("q-dialog",{attrs:{persistent:""},model:{value:t.cartconfirm,callback:function(a){t.cartconfirm=a},expression:"cartconfirm"}},[e("q-card",{staticStyle:{width:"400px"}},[e("q-card-section",{staticClass:"row items-center"},[e("q-avatar",{staticClass:"q-ml-sm",attrs:{icon:"mdi-account-question-outline",color:"primary","text-color":"white"}}),e("span",{staticClass:"q-ml-md"},[t._v("장바구니에 담으시겠습니까 ? ")])],1),e("q-card-actions",{staticClass:"q-pr-md",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"아니요",color:"primary"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"네, 담을래요!",color:"primary"}})],1)],1)],1),e("q-dialog",{attrs:{persistent:""},model:{value:t.buyconfirm,callback:function(a){t.buyconfirm=a},expression:"buyconfirm"}},[e("q-card",{staticStyle:{width:"400px"}},[e("q-card-section",{staticClass:"row items-center"},[e("q-avatar",{staticClass:"q-ml-sm",attrs:{icon:"mdi-currency-usd",color:"primary","text-color":"white"}}),e("span",{staticClass:"q-ml-md"},[t._v("구매하시겠습니까 ? ")])],1),e("q-card-actions",{staticClass:"q-pr-md",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"아니요",color:"primary"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"네, 살래요!",color:"primary"}})],1)],1)],1)],1)},n=[],l=(e("4de4"),e("7db0"),e("4160"),e("caad"),e("b0c0"),e("2532"),e("159b"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-dialog",{attrs:{"v-model":t.name,persistent:""}},[e("q-card",{staticStyle:{width:"400px"}},[e("q-card-section",{staticClass:"row items-center"},[e("q-avatar",{staticClass:"q-ml-sm",attrs:{icon:t.icon,color:"primary","text-color":"white"}}),e("span",{staticClass:"q-ml-md"},[t._v(t._s(t.text)+" ")])],1),e("q-card-actions",{staticClass:"q-pr-md",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.no,color:"primary"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.yes,color:"primary"}})],1)],1)],1)}),r=[],o={name:"Dialog",props:{name:Boolean,icon:String,text:String,no:String,yes:String},data:function(){return{}}},d=o,m=e("2877"),p=e("24e8"),u=e("f09f"),v=e("a370"),f=e("cb32"),q=e("4b7e"),x=e("9c40"),b=e("7f67"),y=e("eebe"),C=e.n(y),h=Object(m["a"])(d,l,r,!1,null,null,null),_=h.exports;C()(h,"components",{QDialog:p["a"],QCard:u["a"],QCardSection:v["a"],QAvatar:f["a"],QCardActions:q["a"],QBtn:x["a"]}),C()(h,"directives",{ClosePopup:b["a"]});var w={name:"DetailInfo",components:_,data:function(){var t=this;return{product:null,products:[],item:this.$store.state.items.find((function(a){return a.id===t.$route.params.id})),cartconfirm:!1,buyconfirm:!1}},computed:{total:function(){var t=0;return this.products.forEach((function(a){console.log(a),t+=a.price*a.count})),t},isHeart:function(){return this.$store.state.heart.includes(this.item.id)},isSale:function(){return 0!==this.item.salePrice}},methods:{onAdd:function(){this.products.push({name:this.product,count:1,price:this.item.price})},onDelete:function(t){this.products=this.products.filter((function(a){return a.name!==t.name}))}}},g=w,S=(e("b929"),e("2c91")),Q=e("ddd8"),k=Object(m["a"])(g,c,n,!1,null,null,null),z=k.exports;C()(k,"components",{QSpace:S["a"],QSelect:Q["a"],QBtn:x["a"],QDialog:p["a"],QCard:u["a"],QCardSection:v["a"],QAvatar:f["a"],QCardActions:q["a"]}),C()(k,"directives",{ClosePopup:b["a"]});var $=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-pt-xl"},[e("div",{staticClass:"q-pt-xl"},[e("q-tabs",{staticClass:"d-bottom text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.t,callback:function(a){t.t=a},expression:"t"}},t._l(t.tabs,(function(t){return e("q-tab",{key:t.name,attrs:{name:t.name,label:t.label}})})),1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:t.t,callback:function(a){t.t=a},expression:"t"}},t._l(t.tabs,(function(t){return e("q-tab-panel",{key:t.name,attrs:{name:t.name}},[e(t.component,{tag:"component"})],1)})),1)],1)])},D=[],E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"q-py-lg",staticStyle:{"text-align":"center"}},[e("div",[e("img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:t.item.img}})]),e("div",{staticClass:"text-h1 q-py-xl",staticStyle:{"text-align":"center"}},[t._v(t._s(t.item.name))]),e("div",{staticClass:"text-h4 q-py-xl"},[t._v(t._s(t.item.exp))])])])},P=[],j={name:"Description",data:function(){var t=this;return{item:this.$store.state.items.find((function(a){return a.id===t.$route.params.id}))}}},N=j,O=Object(m["a"])(N,E,P,!1,null,null,null),A=O.exports,I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.reviews,(function(a){return e("div",{key:a.id,staticClass:"q-py-lg"},[e("div",{staticClass:"row"},["만족해요"===a.title?e("div",{staticClass:"text-h1 text-primary"},[t._v(t._s(a.title))]):e("div",{staticClass:"text-h1 text-secondary"},[t._v(t._s(a.title))]),e("div",["만족해요"===a.title?e("q-icon",{staticClass:"q-pa-xs text-primary",attrs:{name:"mdi-emoticon-happy-outline",size:"xl"}}):e("q-icon",{staticClass:"q-pa-xs text-secondary",attrs:{name:"mdi-emoticon-cry-outline",size:"xl"}})],1),e("div",{staticClass:"q-pl-md q-pt-md",staticStyle:{"font-size":"20px"}},[t._v(t._s(a.date))])]),e("div",{staticClass:"q-pt-md"},[e("span",[t._v(t._s(a.text))])])])})),0)},H=[],R={name:"Review",data:function(){return{reviews:[{id:1,title:"만족해요",date:"2019.10.15",text:"너무 너무 만족합니다 !! 지인들에게도 추천하고 있어용ㅎㅎ"},{id:2,title:"별로예요",date:"2020.09.28",text:"많이 기대했는데 실망했어요 ㅠㅠ"}]}}},T=R,B=e("0016"),J=Object(m["a"])(T,I,H,!1,null,null,null),M=J.exports;C()(J,"components",{QIcon:B["a"]});var X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"q-py-lg"},[t._m(0),e("div",{staticClass:"q-pt-md",staticStyle:{"font-size":"17px"}},[t._v("\n      배송 언제 출발 하나요???\n    ")]),e("div",{staticClass:"row q-pt-md"},[e("div",[e("q-icon",{attrs:{name:"mdi-subdirectory-arrow-right",size:"md"}})],1),e("div",{staticClass:"q-pt-sm",staticStyle:{"font-size":"17px"}},[t._v("고객님, 주문하신 상품은 2~3일 내로 출고될 예정입니다.")])])]),e("div",{staticClass:"q-py-lg"},[t._m(1),e("div",{staticClass:"q-pt-md row"},[e("div",{staticStyle:{"font-size":"17px"}},[t._v("비밀글")]),e("div",[e("q-icon",{attrs:{size:"sm",name:"mdi-lock-outline"}})],1)])])])},F=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"text-h1"},[t._v("배송문의")]),e("div",{staticClass:"text-secondary q-pl-md q-pt-md",staticStyle:{"font-size":"20px"}},[t._v("2019.10.15")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"text-h1"},[t._v("상품문의")]),e("div",{staticClass:"text-secondary q-pl-md q-pt-md",staticStyle:{"font-size":"20px"}},[t._v("2020.09.28")])])}],G={name:"Question",data:function(){return{}}},K=G,L=Object(m["a"])(K,X,F,!1,null,null,null),U=L.exports;C()(L,"components",{QIcon:B["a"]});var V={name:"DetailReference",data:function(){return{t:"description",tabs:[{name:"description",label:"상품 설명",component:A},{name:"review",label:"상품 후기",component:M},{name:"question",label:"상품 문의",component:U}]}}},W=V,Y=e("429b"),Z=e("7460"),tt=e("eb85"),at=e("adad"),et=e("823b"),st=Object(m["a"])(W,$,D,!1,null,null,null),it=st.exports;C()(st,"components",{QTabs:Y["a"],QTab:Z["a"],QSeparator:tt["a"],QTabPanels:at["a"],QTabPanel:et["a"]});var ct={name:"Detail",components:{DetailInfo:z,DetailReference:it},data:function(){return{confirm:!1,buy:!1}}},nt=ct,lt=Object(m["a"])(nt,s,i,!1,null,null,null);a["default"]=lt.exports},9672:function(t,a,e){},b929:function(t,a,e){"use strict";var s=e("9672"),i=e.n(s);i.a}}]);