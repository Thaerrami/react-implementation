(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[0],{108:function(e,t,a){e.exports=a(145)},113:function(e,t,a){},121:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),l=a.n(c),s=(a(113),a(4)),o=a(5),i=a(6),m=a(7),u=(a(89),a(29)),d=a(148),p=a(149),h=a(16),b=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={bool:!0},e.stater=function(t,a){e.setState({bool:!e.state.bool}),e.state.bool?a():t()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("span",{className:"m-3 font-weight-bold"},this.props.mode),r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onClick:function(){return e.stater(e.props.make_light,e.props.make_night)}}),r.a.createElement("span",{className:"slider round"}))))}}]),a}(r.a.Component),E=Object(h.b)((function(e){return{zefta:e.value,mode:e.mode}}),(function(e){return{make_night:function(){return e({type:"NIGHT"})},make_light:function(){return e({type:"LIGHT"})}}}))(b),f=a(3),v=a.n(f),g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=v()({"bg-light text-dark":"light"===this.props.mode.toLowerCase(),"bg-dark text-white":"night"===this.props.mode.toLowerCase()}),t=v()({dark:"night"===this.props.mode.toLowerCase(),light:"light"===this.props.mode.toLowerCase()});return r.a.createElement("div",null,r.a.createElement(d.a,{collapseOnSelect:!0,expand:"lg",bg:t,variant:t,className:e},r.a.createElement(d.a.Brand,{href:"#home",className:e},"React-Bootstrap"),r.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,null,r.a.createElement(u.b,{to:"/home"},"Formik taining")),r.a.createElement(p.a.Link,null,r.a.createElement(u.b,{to:"/contactUs"},"contactUs api fetch traning")),r.a.createElement(p.a.Link,null,r.a.createElement(u.b,{to:"/todo"},"todo state managemnt traning")),r.a.createElement("div",{style:{width:"fit-content"}},r.a.createElement(E,null))),r.a.createElement(p.a,null))))}}]),a}(r.a.Component),w=Object(h.b)((function(e){return{zefta:e.value,mode:e.mode}}))(g),k=a(61);a(121);function N(e){return r.a.createElement(r.a.Fragment,null)}var y=a(25),j=a.n(y),x=a(47),O=a(48),C=a.n(O);function S(){return(S=Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(x.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(x.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(x.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.put("https://jsonplaceholder.typicode.com/users/"+t,a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).size=function(e){var t=0;for(var a in e)null!==a&&t++;return t},n.putuser=function(e){n.setState({us:e}),n.setState({opened:!0})},n.deleteuser=function(e){try{(function(e){return T.apply(this,arguments)})(e.id).then((function(t){n.setState({user:t.data});var a=n.state.user,r=Object(k.a)(a);r.splice(e,1),n.setState({user:r})}))}catch(t){console.log(t)}},n.update=function(e){(function(e,t){return _.apply(this,arguments)})(n.state.us.id,e).then((function(){alert("success")})).catch((function(e){alert("err")}))},n.state={user:[],loaded:!1,us:{},opened:!0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;try{(function(){return S.apply(this,arguments)})().then((function(t){e.setState({user:t.data}),e.setState({loaded:!0})}))}catch(t){console.log(t)}}},{key:"render",value:function(){var e=this,t=v()({container:!0,jumbotron:!0,dsi:!0,popup_show_data:this.state.opened,popup_show_data_closer:!this.state.opened}),a=v()({blod:this.state.opened,close:!this.state.opened,"bg-light text-dark":"light"===this.props.mode.toLowerCase(),"bg-dark text-white":"night"===this.props.mode.toLowerCase()}),n=v()({"bg-light text-dark":"light"===this.props.mode.toLowerCase(),"bg-dark text-white":"night"===this.props.mode.toLowerCase()}),c=v()({container:!0,"text-dark":"light"===this.props.mode.toLowerCase(),"text-white":"night"===this.props.mode.toLowerCase()}),l=this.state.us,s=l.name,o=l.phone,i=l.username,m=l.website;return r.a.createElement("div",{className:n},this.size(this.state.us)>0?r.a.createElement("div",{className:a},r.a.createElement("div",{className:t},r.a.createElement("div",{className:"cardhead"},m),r.a.createElement("span",{className:"close",onClick:function(){e.setState({opened:!1}),console.log("close",e.state.opened)}},"\xd7"),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("p",null,"name : ",s),r.a.createElement("br",null),r.a.createElement("p",null,"phone : ",o),r.a.createElement("br",null),r.a.createElement("p",null,"username : ",i)))):"",r.a.createElement("ul",{className:n},!0===this.state.loaded?r.a.createElement(F,{user:this.state.user,putuser:this.putuser,deleteuser:this.deleteuser,dark:"night"===this.props.mode.toLowerCase()}):r.a.createElement(H,null)),r.a.createElement("div",{className:c},r.a.createElement(N,{onSubmit:this.update,values:this.state.us})))}}]),a}(r.a.Component);function F(e){var t=v()({lilo:!0,"text-dark bg-white":!1===e.dark,"text-primary bg-black":!0===e.dark});return r.a.createElement("div",null,e.user.map((function(a){return r.a.createElement("li",{key:a.id,className:t},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.putuser(a)}},"select "),"\xa0\xa0",a.name)})))}function H(){return r.a.createElement("div",null,r.a.createElement("div",{className:"loader"}),r.a.createElement("p",{style:{width:"fit-content",margin:"auto"}},"loading..."))}var B=Object(h.b)((function(e){return{zefta:e.value,mode:e.mode}}))(z),G=a(18),I=a(64),M=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.setState({data:e}),e.name.includes("thaer")?(n.setState({former:"forme",vis:"show"}),window.location.replace("./todo")):(n.setState({former:"formerr"}),setTimeout((function(){n.setState({former:"forme"})}),703))},n.close=function(){n.setState({vis:"hid"})},n.onNameEnter=function(e){n.setState({name:e.target.value}),console.log(e.target.value)},n.display=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:n.state.former},r.a.createElement("label",null,"name :"),r.a.createElement(G.b,{className:"form-control",name:"name"}),r.a.createElement(G.a,{render:function(e){return r.a.createElement("div",{className:"error"},e)},name:"name"}),r.a.createElement("br",null),r.a.createElement("label",null,"email :"),r.a.createElement(G.b,{className:"form-control",type:"email",name:"email"}),r.a.createElement(G.a,{component:"span",className:"error",name:"email"}),r.a.createElement("br",null),r.a.createElement("label",null,"password :"),r.a.createElement(G.b,{className:"form-control",type:"password",name:"password"}),r.a.createElement(G.a,{component:"span",className:"error",name:"password"}),r.a.createElement("div",{className:"submit-button"},r.a.createElement("button",{type:"submit",className:"btn btn-success"},"go"),r.a.createElement(u.b,null,"forget password")))},n.validate=function(){return I.a().shape({name:I.b().min(3,"Too Short!").max(70,"Too Long!").required("enter the name "),email:I.b().required("enter the email "),password:I.b().required("enter the password")})},n.state={data:{},vis:"hid",former:"forme",name:"awedawed"},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:this.state.vis},r.a.createElement("div",{class:"alert alert-success alert-dismissible"},r.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert",onClick:this.close},"\xd7"),r.a.createElement("strong",null,"Success!"))),r.a.createElement(G.d,{initialValues:{name:"",email:"",password:""},onSubmit:this.onSubmit,render:this.display,validationSchema:this.validate()}))}}]),a}(n.Component);function D(){return q.apply(this,arguments)}function q(){return(q=Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,console.log(t),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var A=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){D()},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(r.a.Component),U=(a(98),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).nightmood=function(){n.setState({dark:!n.state.dark}),n.state.dark?console.log("night"):console.log("not ")},n.state={dark:!1,sound:!0,lang:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=v()({bodyer:this.state.dark,"dark-text":this.state.dark,"set-text":!0});return r.a.createElement("div",{className:e},r.a.createElement("div",{className:"container todo-pice"},r.a.createElement("div",{className:"btx"},r.a.createElement("span",{className:"tct"},"night mode"),r.a.createElement("br",null),r.a.createElement("label",{class:"switch"},r.a.createElement("input",{type:"checkbox",onClick:this.nightmood}),r.a.createElement("span",{class:"slider round"})))),r.a.createElement("div",{className:"container todo-pice"},r.a.createElement("div",{className:"btx"},r.a.createElement("span",{className:"tct"},"ENG/AR"),r.a.createElement("br",null),r.a.createElement("label",{class:"switch"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{class:"slider round"})))),r.a.createElement("div",{className:"container todo-pice"},r.a.createElement("div",{className:"btx"},r.a.createElement("span",{className:"tct"},"sound"),r.a.createElement("br",null),r.a.createElement("label",{class:"switch"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{class:"slider round"})))),r.a.createElement("div",{className:"container todo-pice"},r.a.createElement("div",{className:"btx"},r.a.createElement("span",{className:"tct"},"sound"),r.a.createElement("br",null),r.a.createElement("label",{class:"switch"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{class:"slider round"})))),r.a.createElement("div",{className:"container todo-pice"},r.a.createElement("div",{className:"btx"},r.a.createElement("span",{className:"tct"},"sound"),r.a.createElement("br",null),r.a.createElement("label",{class:"switch"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{class:"slider round"})))),r.a.createElement("div",{className:"container todo-pice"},r.a.createElement("div",{className:"btx"},r.a.createElement("span",{className:"tct"},"sound"),r.a.createElement("br",null),r.a.createElement("label",{class:"switch"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{class:"slider round"})))))}}]),a}(n.Component)),W=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=v()({"bg-light text-dark":"light"===this.props.mode.toLowerCase(),"bg-dark text-white":"night"===this.props.mode.toLowerCase()}),t=v()({"page-footer font-small pt-4":!0,"bg-white   text-dark":"light"===this.props.mode.toLowerCase(),"bg-dark text-white":"night"===this.props.mode.toLowerCase()});return r.a.createElement("div",{className:e},r.a.createElement("footer",{className:t},r.a.createElement("div",{className:"container-fluid text-center  text-md-left"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-md-0 mt-3"},r.a.createElement("h5",{className:"text-uppercase"},"react formik and yup test"),r.a.createElement("p",null,"this is the first time i use formik and yup ")),r.a.createElement("hr",{className:"clearfix w-100 d-md-none pb-3"}),r.a.createElement("div",{className:"col-md-3 mb-md-0 mb-3"},r.a.createElement("h5",{className:"text-uppercase"},"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 1")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 2")))))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",r.a.createElement("a",{href:"https://mdbootstrap.com/"}," MDBootstrap.com"))))}}]),a}(n.Component),J=Object(h.b)((function(e){return{zefta:e.value,mode:e.mode}}))(W),R=a(9),V=(a(141),a(142),function(){return r.a.createElement(r.a.Fragment,null)}),K=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).putdata=function(e){n.setState({textfield:e.target.value})},n.task=function(e){var t=Object(k.a)(n.state.dat);t.splice(e,1),n.setState({dat:t})},n.complited=function(e){var t=Object(k.a)(n.state.dat);t[e].comp=!t[e].comp,n.setState({dat:t})},n.task2=function(e){n.setState({cdone:"btn btn-success"})},n.removeall=function(){window.confirm("are you sure this will delete all tasks!")&&n.setState({dat:[]})},n.addnewtask=function(){if(""!==n.state.textfield){console.log(n.state);var e=Object(k.a)(n.state.dat);e.push({text:n.state.textfield}),n.setState({dat:e}),n.setState({textfield:""})}},n.shir=function(e){"Enter"===e.key&&n.addnewtask()},n.state={dat:[{text:"react js",comp:!1},{text:"node js",comp:!1}],textfield:"",valdata:"add task",col:"green",done:"done",cdone:[]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=v()({red:0===this.state.dat.length,green:this.state.dat.length>0}),a=v()({no_task:0===this.state.dat.length,add_task:this.state.dat.length>0}),n=v()({"bg-light text-dark":"light"===this.props.mode.toLowerCase(),"bg-dark text-white":"night"===this.props.mode.toLowerCase()}),c=v()({"form-control todo-adder":!0,dark:"night"===this.props.mode.toLowerCase(),light:"light"===this.props.mode.toLowerCase()}),l=v()({"head-todo":!0,"bg-dark text-white":"night"===this.props.mode.toLowerCase(),"bg-light text-dark":"light"===this.props.mode.toLowerCase()});return r.a.createElement("div",{className:n},r.a.createElement(V,null),r.a.createElement("div",{className:n},r.a.createElement("input",{className:c,onKeyDown:this.shir,value:this.state.textfield,onChange:this.putdata}),r.a.createElement("div",{className:"button-holder"},r.a.createElement("button",{className:"btn btn-danger todo-adder-button",onClick:this.removeall},"remove all"),r.a.createElement("button",{className:"btn btn-success todo-adder-button",onClick:this.addnewtask},"add task"))),r.a.createElement("p",{className:t},a),r.a.createElement("ul",{className:l},this.state.dat.map((function(t,a){return r.a.createElement("li",{key:a,className:t.comp?"completed lilo":"lilo"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.task(a)}}," remove ")," \xa0",r.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.complited(a)}}," comleted ")," \xa0",r.a.createElement("p",{className:"data"},"".concat(t.text,"  ")))}))),r.a.createElement("span",{className:"up",onClick:function(){return window.scrollTo(0,0)}},"\u21e7"))}}]),a}(n.Component),$=Object(h.b)((function(e){return{zefta:e.value,mode:e.mode}}))(K),P=(a(143),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={bar:0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return window.onscroll=function(){var t=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;e.setState({width:t})},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"road",style:{width:this.state.width+"%"}}))}}]),a}(r.a.Component)),Q=(a(144),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",password:""},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"face"},r.a.createElement("p",null,"login")),r.a.createElement("div",{className:"back"},r.a.createElement("p",null,"enter your data"),r.a.createElement(G.d,{initialValues:{name:"",email:"",password:""},onSubmit:function(e){console.log(e)},render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.c,null,r.a.createElement(R.a,{when:e.dirty,message:"are you fucken sure"}),r.a.createElement(G.b,{className:"form-control",name:"name"}),r.a.createElement(G.b,{className:"form-control",type:"email",name:"email"}),r.a.createElement(G.b,{className:"form-control",type:"password",name:"password"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"go")))}}))))}},{key:"name",get:function(){return 4}}]),a}(n.Component)),X=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).get=function(e){try{(function(e){return L.apply(this,arguments)})(e).then((function(e){n.setState({user:e}),n.setState({booler:!0})}))}catch(t){console.log(t),console.log("err")}},n.componentWillMount=function(){n.get(n.props.match.params.id)},n.state={user:{},booler:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"view",console.log(),this.state.booler?r.a.createElement(Y,{name:this.state.user.data.name,id:this.state.user.data.id,username:this.state.user.data.username,email:this.state.user.data.email}):"")}}]),a}(n.Component),Y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-control"},e.name),r.a.createElement("br",null),r.a.createElement("div",{className:"form-control"},e.id),r.a.createElement("br",null),r.a.createElement("div",{className:"form-control"},e.username),r.a.createElement("br",null),r.a.createElement("div",{className:"form-control"},e.email),console.log(e))},Z=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=v()({"bg-light text-dark":"light"===this.props.mode.toLowerCase(),"bg-dark text-white":"night"===this.props.mode.toLowerCase()});return r.a.createElement(u.a,null,r.a.createElement("div",{className:e},r.a.createElement(w,null),r.a.createElement(P,null),r.a.createElement(R.d,null,r.a.createElement(R.b,{path:"/login",component:A}),r.a.createElement(R.b,{path:"/view/:id",exact:!0,component:X}),r.a.createElement(R.b,{path:"/settings",component:U}),r.a.createElement(R.b,{path:"/contactUs",component:B}),r.a.createElement(R.b,{exact:!0,path:"/todo",component:$}),r.a.createElement(R.b,{path:"/home",component:M}),r.a.createElement(R.b,{path:"/fliper",component:Q}),r.a.createElement(R.b,{exact:!0,path:"/",component:B})),r.a.createElement(J,null)))}}]),a}(r.a.Component),ee=Object(h.b)((function(e){return{zefta:e.value,mode:e.mode}}))(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(67),ae={mode:"light",value:"light"};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NIGHT":return{value:"night",mode:"night"};case"LIGHT":return{value:"light",mode:"light"};default:return e}},re=Object(te.b)(ne);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:re},r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){},98:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.856f5c71.chunk.js.map