(function(){"use strict";var t={1019:function(t,e,a){var r=a(6369),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){e.preventDefault(),t.dialogVisible=!0}}},[t._v("Создать график")]),a("el-dialog",{attrs:{title:"Создать график",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"body"},[a("div",{staticClass:"body__select-item"},[a("el-select",{attrs:{placeholder:"Выберите тип графика"},model:{value:t.typeChart,callback:function(e){t.typeChart=e},expression:"typeChart"}},t._l(t.typeChartsList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"body__select-item"},[a("el-select",{attrs:{disabled:!t.typeChart,placeholder:"Выберите источник данных"},model:{value:t.dataSource,callback:function(e){t.dataSource=e},expression:"dataSource"}},t._l(t.dataSourceList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",disabled:!(t.typeChart&&t.dataSource)},on:{click:t.handleCreate}},[t._v("Создать")])],1)]),a("div",{staticClass:"charts-list"},t._l(t.chartList,(function(t,e){return a("chart-component",{key:e,attrs:{data:t}})})),1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-component"},["pie"===t.data.type?a("div",[a("pie-chart",{attrs:{data:t.data.data}})],1):t._e(),"line"===t.data.type?a("div",[a("line-chart",{attrs:{data:t.data.data}})],1):t._e()])},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("DxPieChart",{attrs:{id:"pie","data-source":t.data,palette:"Bright"}},[a("DxSeries",{attrs:{"argument-field":"Группа","value-field":"Доля"}},[a("DxLabel",{attrs:{visible:!0}},[a("DxConnector",{attrs:{visible:!0,width:1}})],1)],1),a("DxSize",{attrs:{width:600}})],1)},u=[],c=a(7081),d=a.n(c),p={components:{DxPieChart:d(),DxSize:c.DxSize,DxSeries:c.DxSeries,DxLabel:c.DxLabel,DxConnector:c.DxConnector},data(){return{}},props:{data:{type:Array,default:()=>[]}}},f=p,h=a(1001),v=(0,h.Z)(f,s,u,!1,null,null,null),b=v.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("DxChart",{attrs:{id:"chart","data-source":t.data,palette:"Violet"}},[a("DxCommonSeriesSettings",{attrs:{type:"line","argument-field":"Дата"}}),t._l(t.energySources,(function(t){return a("DxSeries",{key:t.value,attrs:{"value-field":t.value,name:t.name}})})),a("DxMargin",{attrs:{bottom:10}}),a("DxArgumentAxis",{attrs:{"value-margins-enabled":!1,"discrete-axis-division-mode":"crossLabels"}},[a("DxGrid",{attrs:{visible:!0}})],1),a("DxTooltip",{attrs:{enabled:!0}})],2)},y=[],x=a(5699),C={components:{DxChart:x.DxChart,DxSeries:x.DxSeries,DxArgumentAxis:x.DxArgumentAxis,DxCommonSeriesSettings:x.DxCommonSeriesSettings,DxGrid:x.DxGrid,DxMargin:x.DxMargin,DxTooltip:x.DxTooltip},data(){return{energySources:[{value:"Процент",name:"Процент"}]}},props:{data:{type:Array,default:()=>[]}}},D=C,S=(0,h.Z)(D,m,y,!1,null,null,null),g=S.exports,_={name:"App",components:{PieChart:b,LineChart:g},props:{data:{type:Object,required:!0}}},L=_,k=(0,h.Z)(L,o,l,!1,null,null,null),O=k.exports,w={name:"App",components:{ChartComponent:O},data(){return{dialogVisible:!1,typeChart:null,dataSource:null,chartList:[],typeChartsList:[{value:"pie",label:"Pie Chart"},{value:"line",label:"Line Chart"}],dataSourcePieChartList:[{value:"https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047",label:"https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047"}],dataSourceLineChartList:[{value:"https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2",label:"https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2"}]}},computed:{dataSourceList(){return"pie"===this.typeChart?this.dataSourcePieChartList:this.dataSourceLineChartList}},watch:{typeChart(){this.dataSource=null}},methods:{async handleCreate(){this.dialogVisible=!1;const t=await fetch(this.dataSource);if(t.ok){const e=await t.json();this.chartList.push({type:this.typeChart,data:e}),this.dataSource=null,this.typeChart=null}}}},j=w,A=(0,h.Z)(j,n,i,!1,null,null,null),P=A.exports,T=a(8499);r["default"].config.productionTip=!1,r["default"].component(T.Select.name,T.Select),r["default"].component(T.Button.name,T.Button),r["default"].component(T.Dialog.name,T.Dialog),r["default"].component(T.Option.name,T.Option),new r["default"]({render:t=>t(P)}).$mount("#app")}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,i){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],n=t[c][1],i=t[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[s])}))?r.splice(s--,1):(l=!1,i<o&&(o=i));if(l){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,o=r[0],l=r[1],s=r[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(s)var c=s(a)}for(e&&e(r);u<o.length;u++)i=o[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(c)},r=self["webpackChunkelastoo_test"]=self["webpackChunkelastoo_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(1019)}));r=a.O(r)})();
//# sourceMappingURL=app.d311ecc1.js.map