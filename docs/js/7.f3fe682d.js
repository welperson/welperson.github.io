(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{be6f:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row justify-center"},[i("q-btn",{attrs:{flat:""},on:{click:function(e){return t.$router.push("/detail")}}},[i("img",{staticClass:"productImage inline-block",staticStyle:{position:"relative","z-index":"1"},attrs:{src:t.item.img}})]),i("q-btn",{staticStyle:{position:"relative",left:"90px",top:"-65px","z-index":"2"},attrs:{flat:"",icon:"mdi-heart-outline",color:"primary",size:"xl"}})],1),i("div",{staticStyle:{position:"relative","z-index":"3",top:"-50px"}},[i("div",[t._v(t._s(t.item.name))]),i("div",[t.item.salePrice>0?i("span",{staticStyle:{color:"#a6a6a6"}},[t._v(t._s(t.item.salePrice)+"원 ")]):i("span"),i("span",{staticClass:"text-bold text-h4"},[t._v(t._s(t.item.price)+"원")])]),i("div",{staticClass:"text-h6 q-pt-xs",staticStyle:{color:"#a6a6a6"}},[t._v("리뷰 ("+t._s(t.item.review)+")")])])])},a=[],n={name:"SectionProduct",props:["item"],data:function(){return{}}},c=n,r=(i("d0c0"),i("2877")),l=i("9c40"),o=i("eebe"),u=i.n(o),d=Object(r["a"])(c,s,a,!1,null,null,null);e["a"]=d.exports;u()(d,"components",{QBtn:l["a"]})},d0c0:function(t,e,i){"use strict";var s=i("f2e7"),a=i.n(s);a.a},f2e7:function(t,e,i){},f9c0:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"q-pa-lg"},[i("div",{staticClass:"text-h1 text-primary"},[t._v("신상품")]),i("div",{staticClass:"row items-start q-col-gutter-md"},t._l(t.newItem,(function(t){return i("div",{key:t.id,staticClass:"column col-xs-12 col-sm-6 col-md-4 q-pa-xl"},[i("Product",{attrs:{item:t}})],1)})),0)])])},a=[],n=(i("4de4"),i("caad"),i("2532"),i("be6f")),c={name:"NewProduct",components:{Product:n["a"]},data:function(){return{newItem:this.$store.state.items.filter((function(t){return t.types.includes("new")}))}}},r=c,l=i("2877"),o=Object(l["a"])(r,s,a,!1,null,null,null);e["default"]=o.exports}}]);