(function(i){function e(e){for(var t,n,l=e[0],b=e[1],c=e[2],f=0,d=[];f<l.length;f++)n=l[f],r[n]&&d.push(r[n][0]),r[n]=0;for(t in b)Object.prototype.hasOwnProperty.call(b,t)&&(i[t]=b[t]);o&&o(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var i,e=0;e<s.length;e++){for(var a=s[e],t=!0,l=1;l<a.length;l++){var b=a[l];0!==r[b]&&(t=!1)}t&&(s.splice(e--,1),i=n(n.s=a[0]))}return i}var t={},r={app:0},s=[];function n(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return i[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=i,n.c=t,n.d=function(i,e,a){n.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:a})},n.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,e){if(1&e&&(i=n(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var t in i)n.d(a,t,function(e){return i[e]}.bind(null,t));return a},n.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return n.d(e,"a",e),e},n.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],b=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var o=b;s.push([0,"chunk-vendors"]),a()})({0:function(i,e,a){i.exports=a("56d7")},"0007":function(i,e,a){"use strict";var t=a("b58d"),r=a.n(t);r.a},3970:function(i,e,a){},"3ac4":function(i,e,a){"use strict";var t=a("3970"),r=a.n(t);r.a},"56d7":function(i,e,a){"use strict";a.r(e);var t=a("2b0e"),r=function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"container p-0 text-center pl-0 pr-0"},[i.ifAlert?a("button",{staticClass:"w-100 text-center bg-basic text-white position-absolute fixed-top mb-1",on:{click:i.offAlert}},[i._v(i._s(i.alert))]):i._e(),i.settingVisibility?a("math-memory-game-setting",{on:{setPairNumber:function(e){return i.setField(e)}}}):i._e(),i.feedbackVisibility?a("math-memory-game-feedback",{attrs:{click:i.click,pairNumber:i.pairNumber,pairNumberFound:i.pairNumberFound}}):i._e(),i._l(i.classNameList,function(e,t){return i.classNameList[t].ifVisible?a("math-memory-game-card",{key:t,class:i.classNameList[t].classNameCard,attrs:{content:e},on:{ifClicked:function(e){return i.clicked(e)}}}):i._e()}),i.settingNeuVisibility?a("button",{staticClass:"text-white w-100 h-100 bg-basic",on:{click:i.setFieldNeu}},[i._v("NEUES SPIEL")]):i._e()],2)},s=[],n=function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("button",{staticClass:"d-inline-flex border text-center text-white card-size ml-auto mr-auto p-0",class:i.content.classNameCard,on:{click:function(e){return i.rotate()}}})},l=[],b={name:"math-memory-game-card",props:{content:{type:Object}},methods:{rotate:function(){"bg-back"===this.content.classNameCard?this.$emit("ifClicked",[this.content.id-1]):window.alert("Die Karte ist schon geöffnet")}}},c=b,o=(a("64e4"),a("2877")),f=Object(o["a"])(c,n,l,!1,null,"86d59810",null),d=f.exports,g=function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"row w-100 p-0 m-0"},[a("div",{staticClass:"col-12 text-right p-0 m-0 mb-1"},[a("div",{staticClass:"ml-auto pair-number text-right text-white bg-basic pt-1 pr-1"},[a("select",{directives:[{name:"model",rawName:"v-model",value:i.pairNumber,expression:"pairNumber"}],staticClass:"h-100 text-white bg-basic float-left p-0",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(i){return i.selected}).map(function(i){var e="_value"in i?i._value:i.value;return e});i.pairNumber=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[i._v("0")]),a("option",{attrs:{value:"8"}},[i._v("8")]),a("option",{attrs:{value:"12"}},[i._v("12")]),a("option",{attrs:{value:"16"}},[i._v("16")]),a("option",{attrs:{value:"20"}},[i._v("20")]),a("option",{attrs:{value:"24"}},[i._v("24")]),a("option",{attrs:{value:"28"}},[i._v("28")]),a("option",{attrs:{value:"32"}},[i._v("32")])]),i._v("\n            Paaren\n        ")])]),a("button",{staticClass:"text-white w-100 h-100 bg-basic",on:{click:i.setField}},[i._v("SPIEL STARTEN")])])},m=[],u={name:"math-memory-game-setting",data(){return{pairNumber:0}},methods:{setField:function(){this.$emit("setPairNumber",[this.pairNumber])}}},p=u,C=(a("d84c"),Object(o["a"])(p,g,m,!1,null,"0835bc9d",null)),N=C.exports,h=function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"row mb-1"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"ml-auto feedback text-center text-white bg-basic mb-1"},[i._v(i._s(i.pairNumberFound)+" aus "+i._s(i.pairNumber))])])])},k=[],w={name:"math-memory-game-feedback",props:{click:{type:Number},pairNumber:{type:Number},pairNumberFound:{type:Number}}},O=w,P=(a("0007"),Object(o["a"])(O,h,k,!1,null,"36e9e122",null)),V=P.exports,v={name:"math-memory-game-mainfield",components:{MathMemoryGameFeedback:V,MathMemoryGameSetting:N,MathMemoryGameCard:d},data(){return{click:0,pairNumber:0,pairNumberFound:0,settingVisibility:!0,alert:"",feedbackVisibility:!1,ifAlert:!1,settingNeuVisibility:!1,temp:0,classNameList:[{id:1,classNameCard:"bg-back",newColor:"bg-gradient-1",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:2,classNameCard:"bg-back",newColor:"bg-gradient-1",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:3,classNameCard:"bg-back",newColor:"bg-gradient-2",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:4,classNameCard:"bg-back",newColor:"bg-gradient-2",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:5,classNameCard:"bg-back",newColor:"bg-gradient-3",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:6,classNameCard:"bg-back",newColor:"bg-gradient-3",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:7,classNameCard:"bg-back",newColor:"bg-gradient-4",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:8,classNameCard:"bg-back",newColor:"bg-gradient-4",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:9,classNameCard:"bg-back",newColor:"bg-gradient-5",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:10,classNameCard:"bg-back",newColor:"bg-gradient-5",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:11,classNameCard:"bg-back",newColor:"bg-gradient-6",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:12,classNameCard:"bg-back",newColor:"bg-gradient-6",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:13,classNameCard:"bg-back",newColor:"bg-gradient-7",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:14,classNameCard:"bg-back",newColor:"bg-gradient-7",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:15,classNameCard:"bg-back",newColor:"bg-gradient-8",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:16,classNameCard:"bg-back",newColor:"bg-gradient-8",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:17,classNameCard:"bg-back",newColor:"bg-gradient-9",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:18,classNameCard:"bg-back",newColor:"bg-gradient-9",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:19,classNameCard:"bg-back",newColor:"bg-gradient-10",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:20,classNameCard:"bg-back",newColor:"bg-gradient-10",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:21,classNameCard:"bg-back",newColor:"bg-gradient-11",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:22,classNameCard:"bg-back",newColor:"bg-gradient-11",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:23,classNameCard:"bg-back",newColor:"bg-gradient-12",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:24,classNameCard:"bg-back",newColor:"bg-gradient-12",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:25,classNameCard:"bg-back",newColor:"bg-gradient-13",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:26,classNameCard:"bg-back",newColor:"bg-gradient-13",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:27,classNameCard:"bg-back",newColor:"bg-gradient-14",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:28,classNameCard:"bg-back",newColor:"bg-gradient-14",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:29,classNameCard:"bg-back",newColor:"bg-gradient-15",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:30,classNameCard:"bg-back",newColor:"bg-gradient-15",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:31,classNameCard:"bg-back",newColor:"bg-gradient-16",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:32,classNameCard:"bg-back",newColor:"bg-gradient-16",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:33,classNameCard:"bg-back",newColor:"bg-gradient-17",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:34,classNameCard:"bg-back",newColor:"bg-gradient-17",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:35,classNameCard:"bg-back",newColor:"bg-gradient-18",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:36,classNameCard:"bg-back",newColor:"bg-gradient-18",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:37,classNameCard:"bg-back",newColor:"bg-gradient-19",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:38,classNameCard:"bg-back",newColor:"bg-gradient-19",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:39,classNameCard:"bg-back",newColor:"bg-gradient-20",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:40,classNameCard:"bg-back",newColor:"bg-gradient-20",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:41,classNameCard:"bg-back",newColor:"bg-gradient-21",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:42,classNameCard:"bg-back",newColor:"bg-gradient-21",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:43,classNameCard:"bg-back",newColor:"bg-gradient-22",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:44,classNameCard:"bg-back",newColor:"bg-gradient-22",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:45,classNameCard:"bg-back",newColor:"bg-gradient-23",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:46,classNameCard:"bg-back",newColor:"bg-gradient-23",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:47,classNameCard:"bg-back",newColor:"bg-gradient-24",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:48,classNameCard:"bg-back",newColor:"bg-gradient-24",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:49,classNameCard:"bg-back",newColor:"bg-gradient-25",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:50,classNameCard:"bg-back",newColor:"bg-gradient-25",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:51,classNameCard:"bg-back",newColor:"bg-gradient-26",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:52,classNameCard:"bg-back",newColor:"bg-gradient-26",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:53,classNameCard:"bg-back",newColor:"bg-gradient-27",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:54,classNameCard:"bg-back",newColor:"bg-gradient-27",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:55,classNameCard:"bg-back",newColor:"bg-gradient-28",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:56,classNameCard:"bg-back",newColor:"bg-gradient-28",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:57,classNameCard:"bg-back",newColor:"bg-gradient-29",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:58,classNameCard:"bg-back",newColor:"bg-gradient-29",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:59,classNameCard:"bg-back",newColor:"bg-gradient-30",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:60,classNameCard:"bg-back",newColor:"bg-gradient-30",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:61,classNameCard:"bg-back",newColor:"bg-gradient-31",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:62,classNameCard:"bg-back",newColor:"bg-gradient-31",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:63,classNameCard:"bg-back",newColor:"bg-gradient-32",ifPair:!1,ifVisible:!1,ifOpen:!1},{id:64,classNameCard:"bg-back",newColor:"bg-gradient-32",ifPair:!1,ifVisible:!1,ifOpen:!1}]}},methods:{setMix:function(i){let e,a=2*i;while(--a>0)e=Math.floor(Math.random()*(a+1)),this.temp=this.classNameList[e].newColor,this.classNameList[e].newColor=this.classNameList[a].newColor,this.classNameList[a].newColor=this.temp},setReset:function(){this.click=0,this.pairNumber=0,this.pairNumberFound=0,this.alert="",this.settingVisibility=!0,this.feedbackVisibility=!1;for(let i=0;i<64;i++)this.classNameList[i].classNameCard="bg-back",this.classNameList[i].ifVisible=!1,this.classNameList[i].ifOpen=!1},ifAll:function(i){let e=0;for(let a=0;a<64;a++)this.classNameList[a].ifOpen&&e++;return e>=i},setField:function(i){if(this.setReset(),0!==i[0]){for(let i=0;i<64;i++)this.setReset();for(let e=0;e<2*i[0];e++)this.classNameList[e].ifVisible=!0;this.pairNumber=i[0],this.feedbackVisibility=!0,this.settingVisibility=!1,this.setMix(i[0])}else this.ifAlert=!0,this.alert="!! Wählen Sie bitte ihre Paarenanzahl aus !!"},setFieldNeu:function(){this.settingVisibility=!0,this.settingNeuVisibility=!1,this.setReset()},IfPair:function(i){for(let e=0;e<64;e++)this.classNameList[i].classNameCard===this.classNameList[e].classNameCard&&"bg-back"!==this.classNameList[i].classNameCard&&this.classNameList[i].id!==this.classNameList[e].id?(this.classNameList[i].ifPair=!0,this.classNameList[e].ifPair=!0,this.pairNumberFound++):setTimeout(this.cardsOff,600)},cardsOff:function(){for(let i=0;i<64;i++)!0!==this.classNameList[i].ifPair&&(this.classNameList[i].classNameCard="bg-back",this.classNameList[i].ifOpen=!1)},clicked:function(i){"bg-back"===this.classNameList[i[0]].classNameCard&&(this.click++,this.classNameList[i[0]].ifOpen=!0),this.classNameList[i[0]].classNameCard=this.classNameList[i[0]].newColor,this.click%2===0&&(this.IfPair(i[0]),this.ifAll(2*this.pairNumber)&&(this.settingNeuVisibility=!0))},offAlert:function(){this.ifAlert=!1}}},y=v,_=(a("3ac4"),Object(o["a"])(y,r,s,!1,null,null,null)),L=_.exports;t["a"].config.productionTip=!1,new t["a"]({render:i=>i(L)}).$mount("#app")},"64e4":function(i,e,a){"use strict";var t=a("fcbb"),r=a.n(t);r.a},b1ab:function(i,e,a){},b58d:function(i,e,a){},d84c:function(i,e,a){"use strict";var t=a("b1ab"),r=a.n(t);r.a},fcbb:function(i,e,a){}});
//# sourceMappingURL=app.869c287e.js.map