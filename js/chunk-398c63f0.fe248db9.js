(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-398c63f0"],{"1f31":function(n,a,t){},be59:function(n,a,t){"use strict";t.r(a);var e=function(){var n=this,a=n._self._c;return a("div",{staticClass:"barra-avance",class:[n.showBarra?"barra-avance--open":"barra-avance--close"]},[a("router-link",{staticClass:"boton barra-avance__boton--regresar",class:[!n.controlLinks.back.name&&"barra-avance__boton--disable"],attrs:{to:{name:n.controlLinks.back.name,hash:n.controlLinks.back.hash?"#"+n.controlLinks.back.hash:""}}},[a("i",{staticClass:"me-2 fas fa-angle-left"}),a("span",[n._v("Regresar")])]),a("router-link",{staticClass:"boton",class:[!n.controlLinks.next.name&&"barra-avance__boton--disable"],attrs:{to:{name:n.controlLinks.next.name,hash:n.controlLinks.next.hash?"#"+n.controlLinks.next.hash:""}}},[a("span",{staticClass:"me-2"},[n._v("Continuar")]),a("i",{staticClass:"fas fa-angle-right"})])],1)},s=[],r={name:"BarraAvance",data:()=>({cursoSelection:null,idSelecctionArr:[]}),computed:{menuData(){return this.$config.menuPrincipal.menu},showBarra(){const n=this.$route.fullPath.includes("/introduccion"),a=this.$route.fullPath.includes("/curso"),t=this.controlLinks.next&&this.controlLinks.next.name||this.controlLinks.back&&this.controlLinks.back.name;return!this.menuOpen&&(n||a)&&t},controlLinks(){const n=this.menuData.find(n=>n.nombreRuta===this.$route.name);if("introduccion"===this.$route.name){const n=this.menuData.find(n=>"tema1"===n.nombreRuta);return{next:{name:n.nombreRuta,hash:""},back:{name:"",hash:""}}}if(n){let n={};const a=this.menuData.map(n=>n.nombreRuta).indexOf(this.$route.name),t=this.menuData[a-1],e=t&&t.nombreRuta.includes("tema"),s=t&&t.nombreRuta.includes("introduccion");n.back=e||s?{name:t.nombreRuta,hash:""}:{name:"",hash:""};const r=this.menuData[a+1],o=r&&r.nombreRuta.includes("tema");return n.next=o?{name:r.nombreRuta,hash:""}:{name:"",hash:""},n}return{next:{name:"",hash:""},back:{name:"",hash:""}}},menuOpen(){return this.$store.getters.isMenuOpen}}},o=r,i=(t("bf9b"),t("2877")),c=Object(i["a"])(o,e,s,!1,null,null,null);a["default"]=c.exports},bf9b:function(n,a,t){"use strict";t("1f31")}}]);
//# sourceMappingURL=chunk-398c63f0.fe248db9.js.map