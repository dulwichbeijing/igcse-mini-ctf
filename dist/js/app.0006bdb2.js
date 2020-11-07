(function(e){function t(t){for(var o,r,i=t[0],c=t[1],l=t[2],p=0,h=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],o=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=s[0]))}return e}var o={},n={app:0},a=[];function r(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=o,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"0b99":function(e,t,s){"use strict";s("9370")},"15c0":function(e,t,s){},"410c":function(e,t,s){"use strict";s("15c0")},"55ae":function(e,t,s){"use strict";s("6519")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),n=s("2f62");o["a"].use(n["a"]);var a=new n["a"].Store({state:{colourScheme:"dhsz",currentScore:0,tasks:[{name:"The first one is free",points:100,detail:"Quickly test that the website is working for you, the answer is:",monospace:"dhszCTF{dulwich}",files:[],md5:"b33f71ec11ddcd26346f065288e32c6d",solved:!1},{name:"This is supposed to be English?",points:200,detail:"You have just received the following text message, but something has clearly gone wrong...",monospace:"01100100 01101000 01110011 01111010 01000011 01010100 01000110 01111011 01101010 01110101 01110011 01110100 01011111 01100001 01110011 01100011 01101001 01101001 01111101",files:[],md5:"ae29606ccf70ff6c3467f1db1d6e9ef5",solved:!1},{name:"Who shot this photograph?",points:200,detail:"There is something hidden within this photograph file, apparently the artist is very famous? So meta.",files:["https://dhsz.github.io/house-coding-2020-2021/task-files/task3.jpg"],md5:"0648029be255cfc4705d4e06cabdd4b2",solved:!1},{name:"Let's get cracking!",points:350,detail:"You have just intercepted the following message. Unfortunately, it's still encrypted!",monospace:"Gkkf zr okt mk, vbcwolrsjm colrabwrbir gsfb z cazhl!\n\nZjouzo, okt zwb lwkxzxgo gkkfsjm nkw z ngzm, obe?\n\nAbwb sr se:\n\nvaepCRN{xwbzf_bjsmhz}",files:[],md5:"4c2ebc59439f45360b16ee56ddda798d",solved:!1},{name:"Chicken?",points:300,detail:"There's something strange about this web page, but I'm not sure what...",files:["https://dhsz.github.io/house-coding-2020-2021/task-files/task5/"],md5:"06bebf2341bb8611c3ac1249f61a07f6",solved:!1},{name:"PyTech Tech Ltd.",points:250,detail:"We're doing our best to break into the PyTech Tech servers. We don't know the password, but we have found their password checking algorithm!",files:["https://dhsz.github.io/house-coding-2020-2021/task-files/task6.py"],md5:"753d05bd192095e39c8e72eba7bc8b09",solved:!1}]},mutations:{pushPoints:function(e,t){e.currentScore=e.currentScore+t.points,e.tasks[t.number].solved=!0},updateColour:function(e,t){e.colourScheme=t}}}),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.colourScheme,attrs:{id:"app"}},[s("Competition",{attrs:{msg:"DHSZ House Coding 2020-21",sub:"Capture The Flag"}}),s("Points",{attrs:{score:"0"}})],1)},i=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),s("h2",[e._v(e._s(e.sub)+" - 🔴 🟣 🔵 🟢")]),s("h3",[e._v("About the competition")]),s("p",[e._v(' Capture the flag is a style of hacking competition where a hidden message known as a "flag" needs to be located, calculated or decrypted. ')]),s("p",[e._v(" You have 2 hours to complete as many of the challenges below as possible. The first few tasks are simple then get progressively harder, you can attempt them in any order. ")]),e._m(0),s("h3",[e._v("Tasks")]),e._l(e.tasks,(function(e,t){return s("Task",{key:t,attrs:{taskNo:t,name:e.name,points:e.points,detail:e.detail,monospace:e.monospace,files:e.files,md5:e.md5,solved:e.solved}})})),s("h3",[e._v("Extra details")]),e._m(1)],2)},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" Once you have found your flag, you should submit your answer using the following format: "),s("pre",[e._v("dhszCTF{secret_message}")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/DHSZ/house-programming-2020-2021",target:"_blank"}},[e._v("Competition source code")])]),s("li",[s("a",{attrs:{href:"http://www.asciitable.com/",target:"_blank"}},[e._v("ASCII Table")])]),s("li",[s("a",{attrs:{href:"https://imagemagick.org/",target:"_blank"}},[e._v("ImageMagick")])]),s("li",[s("a",{attrs:{href:"https://hexed.it/",target:"_blank"}},[e._v("Hexadecimal Editor")])]),s("li",[s("a",{attrs:{href:"https://magpi.raspberrypi.org/articles/ssh-remote-control-raspberry-pi"}},[e._v("SSH for RaspPi")])])])}],u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"task",class:{correct:e.isCorrect||e.solved}},[s("div",{staticClass:"task__title"},[s("h4",[e._v("Task "+e._s(e.taskNo+1)+": "+e._s(e.name))]),s("strong",[e._v(e._s(e.points))])]),s("p",[e._v(e._s(e.detail))]),e.monospace?s("pre",[e._v(e._s(e.monospace))]):e._e(),s("ul",e._l(e.files,(function(t,o){return s("li",{key:o},[s("a",{attrs:{href:t,target:"_blank"}},[e._v(e._s("Link "+(o+1)))])])})),0),s("div",{staticClass:"task__answer"},[s("label",{attrs:{for:e.md5}},[e._v(" Enter your flag here: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.flag,expression:"flag"}],attrs:{name:e.md5,type:"text",disabled:e.checking||e.isCorrect,placeholder:"dhszCTF{...}"},domProps:{value:e.flag},on:{input:function(t){t.target.composing||(e.flag=t.target.value)}}}),s("button",{attrs:{disabled:e.checking||e.isCorrect},on:{click:e.checkFlag}},[e._v(e._s(e.checking?"Checking...":"Check"))])]),""!==e.message?s("div",{staticClass:"task__message"},[e._v(e._s(e.message))]):e._e()])},p=[],h=(s("a9e3"),s("6821")),d=s.n(h),f={name:"Task",data:function(){return{flag:"",active:!0,checking:!1,isCorrect:!1,message:""}},props:{taskNo:Number,name:String,points:Number,detail:String,monospace:String,files:Array,md5:String,solved:Boolean},methods:{checkFlag:function(){var e=this;this.checking=!0,console.log(d()(this.flag)),setTimeout((function(){e.isCorrect=d()(e.flag)===e.md5,e.isCorrect?(e.checking=!1,e.message="That is correct!",e.active=!1,a.commit("pushPoints",{points:e.points,number:e.taskNo})):(e.checking=!1,e.message="That flag is not correct, please try again! 🤨")}),500)}}},m=f,g=(s("410c"),s("2877")),v=Object(g["a"])(m,u,p,!1,null,"2d7afda2",null),b=v.exports,_={name:"Competition",components:{Task:b},props:{msg:String,sub:String},computed:Object(n["b"])(["currentScore","tasks"])},k=_,w=(s("0b99"),Object(g["a"])(k,c,l,!1,null,"8bbea1ac",null)),y=w.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer"},[s("div",{staticClass:"points"},[s("span",[e._v(e._s(e.currentScore))]),s("span",[e._v("points")])]),s("div",{staticClass:"house"},[s("span",[e._v("Set colour scheme")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.newColour,expression:"newColour"}],on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.newColour=t.target.multiple?s:s[0]},e.setColour]}},[s("option",{attrs:{disabled:"",value:""}},[e._v("Please select a colour")]),e._l(e.colourOptions,(function(t){return s("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.name))])}))],2)])])},S=[],T={name:"Points",data:function(){return{newColour:"",colourOptions:[{name:"Dulwich",value:"dhsz"},{name:"Fan",value:"f"},{name:"Grenville",value:"g"},{name:"Raleigh",value:"r"},{name:"Spenser",value:"s"}]}},computed:Object(n["b"])(["colourScheme","currentScore"]),methods:{setColour:function(){a.commit("updateColour",this.newColour)}}},j=T,O=(s("55ae"),Object(g["a"])(j,C,S,!1,null,"7a3152c8",null)),x=O.exports,z={name:"App",components:{Competition:y,Points:x},computed:Object(n["b"])(["colourScheme"])},P=z,E=(s("034f"),Object(g["a"])(P,r,i,!1,null,null,null)),N=E.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(N)},store:a}).$mount("#app")},6519:function(e,t,s){},"85ec":function(e,t,s){},9370:function(e,t,s){}});
//# sourceMappingURL=app.0006bdb2.js.map