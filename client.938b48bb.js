webpackJsonp([1],[,function(t,e,n){"use strict";var s=n(3),a=n.n(s),i=Object.keys(a.a).map(function(t){return{label:t,value:t}});e.a={pointDown:!0,thickness:8,duration:1e3,roundEdges:!0,angle:40,easings:i,selectedEasing:"circInOut",color:"#ffffff",fontSize:80}},,,,function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(7),a=n(11);new s.a({el:"#app",render:function(t){return t(a.a)}})},,,,,function(t,e,n){"use strict";function s(t){n(12)}var a=n(13),i=n(64),r=n(0),o=s,c=r(a.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var s=n(1),a=n(44),i=n(51),r=n(56);e.a={components:{CodePreview:a.a,Preview:i.a,Props:r.a},data:function(){return{sharedState:s.a}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function s(t){n(45)}var a=n(46),i=n(50),r=n(0),o=s,c=r(a.a,i.a,!1,o,"data-v-cd3618b2",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var s=n(47),a=(n.n(s),n(48)),i=(n.n(a),n(49)),r=n.n(i),o=n(3),c=n.n(o),l=n(1);e.a={name:"CodePreview",components:{Prism:r.a},data:function(){return{sharedState:l.a}},computed:{easing:function(){return c.a[this.sharedState.selectedEasing]}}}},,,,function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code box"},[n("div",{staticClass:"m-b"},[n("h2",[t._v("\n      Install\n    ")]),t._v(" "),n("prism",{attrs:{language:"html"}},[t._v("\nnpm install vue-chevron --save\n    ")])],1),t._v(" "),n("h2",[t._v("Code example")]),t._v(" "),n("div",{staticClass:"code__preview"},[n("prism",{attrs:{language:"html"}},[t._v('\n<template>\n  <div class="example" @click="toggle">\n    <vue-chevron\n      :point-down="pointDown"\n      :duration="duration"\n      :thickness="thickness"\n      :angle="angle"\n      :round-edges="roundEdges"\n    />\n  </div>\n</template>\n\n<script>\nimport VueChevron from \'vue-chevron\';\n\nexport default {\n  name: \'App\',\n  components: {\n    VueChevron\n  },\n  data() {\n    return {\n      pointDown: '+t._s(t.sharedState.pointDown)+",\n      thickness: "+t._s(t.sharedState.thickness)+",\n      duration: "+t._s(t.sharedState.duration)+",\n      angle: "+t._s(t.sharedState.angle)+",\n      roundEdges: "+t._s(t.sharedState.roundEdges)+",\n      easing: "+t._s(t.easing)+"\n    };\n  },\n  methods: {\n    toggle() {\n      this.pointDown = !this.pointDown;\n    }\n  }\n}\n<\/script>\n\n<style>\n.example {\n  color: "+t._s(t.sharedState.color)+";\n  font-size: "+t._s(t.sharedState.fontSize)+"px;\n}\n</style>\n    ")])],1)])},a=[],i={render:s,staticRenderFns:a};e.a=i},function(t,e,n){"use strict";function s(t){n(52)}var a=n(53),i=n(55),r=n(0),o=s,c=r(a.a,i.a,!1,o,"data-v-69afe83a",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var s=n(3),a=n.n(s),i=n(1),r=n(54);e.a={name:"Preview",components:{VueChevron:r.a},data:function(){return{sharedState:i.a}},methods:{toggle:function(){this.sharedState.pointDown=!this.sharedState.pointDown}},computed:{easing:function(){return a.a[this.sharedState.selectedEasing]}}}},function(t,e,n){"use strict";function s(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}function a(t,e){o=e.progress<=1?performance.now():o;var n=function n(s){var a=(s-o)/t;if(a>=1)return window.cancelAnimationFrame(r),e.clickProgress=1,void(e.progress=1);e.progress=e.easing(a),r=window.requestAnimationFrame(n)};r=window.requestAnimationFrame(n)}function i(t,e,n,s,a){var i=1===n?e:e+(1-n);i>=1&&(i=1);var r=a+s/2-i*s,o=a-s/2+i*s;return t?r:o}var r=void 0,o=null;e.a={name:"VueChevron",props:{pointDown:{type:Boolean,default:!0},duration:{type:Number,default:1e3},thickness:{type:Number,default:4},angle:{type:Number,default:40},roundEdges:{type:Boolean,default:!0},easing:{type:Function,default:s}},data:function(){return{progress:1,clickProgress:1,reverse:!1,lineLength:30}},computed:{path:function(){var t=this.progress,e=this.triangleSideLengths,n=e.width,s=(e.height,i(this.pointDown,t,this.clickProgress,this.triangleSideLengths.height,this.viewBoxCenter.y)),a=i(!this.pointDown,t,this.clickProgress,this.triangleSideLengths.height,this.viewBoxCenter.y);return"M"+(this.viewBoxCenter.x-n)+","+s+", "+this.viewBoxCenter.x+","+a+" "+(this.viewBoxCenter.x+n)+","+s},triangleSideLengths:function(){var t=this.lineLength*Math.sin(this.angle*(Math.PI/180));return{width:this.lineLength*Math.cos(this.angle*(Math.PI/180)),height:t}},viewBoxCenter:function(){var t=this.viewBoxSize;return{x:t.width/2,y:t.height/2}},viewBoxSize:function(){return{width:Math.ceil(2*this.lineLength+2*this.thickness),height:Math.ceil(2*this.lineLength*Math.sin(this.angle*(Math.PI/180))+2*this.thickness)}}},watch:{pointDown:function(t){this.clickProgress=this.progress,this.progress=0,window.cancelAnimationFrame(r),a(this.duration,this)}},render:function(t){return t("svg",{attrs:{height:50,width:50,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+this.viewBoxSize.width+" "+this.viewBoxSize.height}},[t("title","vue-chevron"),t("path",{attrs:{d:this.path,fill:"none","stroke-linecap":this.roundEdges?"round":"square","stroke-width":this.thickness,stroke:"currentColor"}})])}}},function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview"},[n("div",{staticClass:"row center-xs"},[n("div",{staticClass:"col-xs-12 col-sm-4 col-md-2"},[n("div",{staticClass:"align-center"},[n("label",[t._v("Color")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sharedState.color,expression:"sharedState.color"}],attrs:{type:"color"},domProps:{value:t.sharedState.color},on:{input:function(e){e.target.composing||t.$set(t.sharedState,"color",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-xs-12 col-sm-4 col-md-3 col-lg-2 preview__col"},[n("div",{staticClass:"align-center preview__wrap"},[n("div",{staticClass:"preview__svg",style:"color: "+t.sharedState.color+"; font-size: "+t.sharedState.fontSize+"px",on:{click:t.toggle}},[n("vue-chevron",{attrs:{"point-down":t.sharedState.pointDown,duration:t.sharedState.duration,thickness:t.sharedState.thickness,angle:t.sharedState.angle,"round-edges":t.sharedState.roundEdges,easing:t.easing}})],1)])]),t._v(" "),n("div",{staticClass:"col-xs-12 col-sm-4 col-md-2"},[n("div",{staticClass:"align-center"},[n("label",[t._v("Font size ("+t._s(t.sharedState.fontSize)+"px)")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sharedState.fontSize,expression:"sharedState.fontSize",modifiers:{number:!0}}],attrs:{type:"range",min:"10",max:"150",step:"1"},domProps:{value:t.sharedState.fontSize},on:{__r:function(e){t.$set(t.sharedState,"fontSize",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])])])])},a=[],i={render:s,staticRenderFns:a};e.a=i},function(t,e,n){"use strict";function s(t){n(57)}var a=n(58),i=n(63),r=n(0),o=s,c=r(a.a,i.a,!1,o,"data-v-b87c6ca8",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var s=n(59),a=n(1);e.a={name:"Preview",components:{Switches:s.a},data:function(){return{sharedState:a.a}}}},,,,,function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"props box"},[n("h2",[t._v("Props")]),t._v(" "),n("form",[n("table",[t._m(0),t._v(" "),n("tr",[n("td",[n("label",[t._v("Duration ("+t._s(t.sharedState.duration)+"ms)")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sharedState.duration,expression:"sharedState.duration",modifiers:{number:!0}}],attrs:{type:"range",min:"200",max:"2000",step:"100"},domProps:{value:t.sharedState.duration},on:{__r:function(e){t.$set(t.sharedState,"duration",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("1000")])]),t._v(" "),n("tr",[n("td",[n("label",[t._v("Thickness ("+t._s(t.sharedState.thickness)+")")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sharedState.thickness,expression:"sharedState.thickness",modifiers:{number:!0}}],attrs:{type:"range",min:"1",max:"50",step:"1"},domProps:{value:t.sharedState.thickness},on:{__r:function(e){t.$set(t.sharedState,"thickness",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("8")])]),t._v(" "),n("tr",[n("td",[n("label",[t._v("Angle ("+t._s(t.sharedState.angle)+"°)")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sharedState.angle,expression:"sharedState.angle",modifiers:{number:!0}}],attrs:{type:"range",min:"10",max:"60",step:"1"},domProps:{value:t.sharedState.angle},on:{__r:function(e){t.$set(t.sharedState,"angle",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("40")])]),t._v(" "),n("tr",[n("td",[n("label",[t._v("Round edges")]),t._v(" "),n("switches",{attrs:{theme:"bulma",color:"primary"},model:{value:t.sharedState.roundEdges,callback:function(e){t.$set(t.sharedState,"roundEdges",e)},expression:"sharedState.roundEdges"}})],1),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[n("label",[t._v("Easings")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.sharedState.selectedEasing,expression:"sharedState.selectedEasing"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.sharedState,"selectedEasing",e.target.multiple?n:n[0])}}},t._l(t.sharedState.easings,function(e,s){return n("option",{key:s,domProps:{value:e.value}},[t._v("\n              "+t._s(e.label)+"\n            ")])})),t._v(" "),t._m(1)]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),t._m(2)])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Prop")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Default value")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("small",[t._v("Not included to keep size minimum")]),t._v(" "),n("a",{attrs:{href:"https://github.com/mattdesl/eases",target:"_blank"}},[t._v("Easing functions")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("a",{attrs:{href:"http://easings.net/#easeInOutCirc",target:"_blank"}},[t._v("circInOut")])])}],i={render:s,staticRenderFns:a};e.a=i},function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"bg-pattern"}),t._v(" "),n("div",{staticClass:"wrap container-fluid"},[n("h1",[t._v("Vue Chevron")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"btn-wrap"},[n("a",{staticClass:"btn",attrs:{href:"https://github.com/ispal/vue-chevron",target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"icon icon-github",attrs:{viewBox:"0 0 24 28"}},[n("title",[t._v("github")]),t._v(" "),n("path",{attrs:{d:"M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"}})]),t._v(" "),n("span",[t._v("\n          View on Github\n        ")])])]),t._v(" "),n("div",{staticClass:"demo"},[n("preview")],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-sm-6"},[n("code-preview")],1),t._v(" "),n("div",{staticClass:"col-xs-12 col-sm-6 first-xs last-sm "},[n("props")],1)])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row center-xs badges"},[n("div",{staticClass:"col-xs-12 col-sm-8"},[n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/npm/v/vue-chevron.svg?style=flat",alt:"Version","data-canonical-src":"https://img.shields.io/npm/v/vue-chevron.svg?style=flat"}}),t._v(" "),n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/npm/dm/vue-chevron.svg",alt:"npm downloads","data-canonical-src":"https://img.shields.io/npm/dm/vue-chevron.svg"}}),t._v(" "),n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/david/ispal/vue-chevron.svg?style=flat",alt:"No Dependencies","data-canonical-src":"https://img.shields.io/david/ispal/vue-chevron.svg?style=flat"}}),t._v(" "),n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/npm/l/vue-chevron.svg?style=flat",alt:"License","data-canonical-src":"https://img.shields.io/npm/l/vue-chevron.svg?style=flat"}})])])}],i={render:s,staticRenderFns:a};e.a=i}],[5]);
//# sourceMappingURL=client.938b48bb.js.map