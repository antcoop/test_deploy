(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{29:function(e,t,a){e.exports=a(64)},34:function(e,t,a){},35:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),i=a(9),o=a(7),s=a(6);var m=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};var u=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",Object.assign({className:t},e))};var p=function(e){return r.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};var f=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),i=Object(s.a)(l,2),o=i[0],f=i[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-4"},r.a.createElement("h2",null,"Welcome to Wikipedia Searcher!")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("username is "+a),console.log("password is "+o)}},r.a.createElement(m,{className:"mt-3 px-5"},r.a.createElement(p,{className:"form-group"},r.a.createElement(u,{size:"12"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Username",name:"username",onChange:function(e){return c(e.target.value)}}))),r.a.createElement(p,{className:"form-group"},r.a.createElement(u,{size:"12"},r.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",onChange:function(e){return f(e.target.value)}}))),r.a.createElement("button",{className:"btn btn-success",type:"submit"},"Submit")),r.a.createElement(m,{className:"mt-4"},r.a.createElement("h3",null,"Hello ",a,"!"),r.a.createElement("p",null,"I probably shouldn't tell you this, but your password is ",o,"!"))))};a(34);var E=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"language"},"Search Term:"),r.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"term",list:"term",type:"text",className:"form-control",placeholder:"Type in a search term to begin",id:"term"})))},d=r.a.createContext({title:"",description:"",url:""});a(35);var h=function(){var e=Object(n.useContext)(d);return r.a.createElement("ul",{className:"list-group search-results"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:e.url},e.url)))},v=a(28);var b=function(e){return r.a.createElement("div",{role:"alert",className:"alert alert-".concat(e.type," fade in"),style:Object(v.a)({width:"80%",margin:"0 auto",marginTop:18},e.style)},e.children)},g=a(25),N=a.n(g),j=function(e){return N.a.get("https://en.wikipedia.org/w/api.php?action=opensearch&search="+e+"&limit=1&format=json&origin=*")},w=function(e,t){var a=Object(n.useState)(e),r=Object(s.a)(a,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){l(e)}),t);return function(){clearTimeout(a)}}),[t,e]),c};var O=function(){var e=Object(n.useState)({title:"",description:"",url:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("Wikipedia"),i=Object(s.a)(l,2),o=i[0],u=i[1],p=Object(n.useState)(""),f=Object(s.a)(p,2),v=f[0],g=f[1],N=w(o,500);return Object(n.useEffect)((function(){document.title="Wikipedia Searcher",o&&N&&j(o).then((function(e){if(0===e.data.length)throw new Error("No results found.");if("error"===e.data.status)throw new Error(e.data.message);c({title:e.data[1],description:e.data[2][0],url:e.data[3][0]})})).catch((function(e){return g(e)}))}),[N]),r.a.createElement(d.Provider,{value:a},r.a.createElement("div",null,r.a.createElement(m,{style:{minHeight:"100vh"}},r.a.createElement("h1",{className:"text-center"},"Search For Anything on Wikipedia"),r.a.createElement(b,{type:"danger",style:{opacity:v?1:0,marginBottom:10}},v),r.a.createElement(E,{handleFormSubmit:function(e){e.preventDefault()},handleInputChange:function(e){u(e.target.value)},results:o}),r.a.createElement(h,null))))};a(54);var y=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Wikipedia Searcher"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/",className:"/"===window.location.pathname||"/home"===window.location.pathname?"nav-link active":"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/signup",className:"/signup"===window.location.pathname?"nav-link active":"nav-link"},"Sign Up")))))};a(60);var S=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Wikipedia Searcher"))};a(61);var k=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};a(62);var x=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(k,null,r.a.createElement(o.a,{exact:!0,path:"/",component:O}),r.a.createElement(o.a,{exact:!0,path:"/signup",component:f}),r.a.createElement(o.a,{exact:!0,path:"/search",component:O})),r.a.createElement(S,null)))};a(63);l.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a06ef018.chunk.js.map