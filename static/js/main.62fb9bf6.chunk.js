(this["webpackJsonpulbi-course"]=this["webpackJsonpulbi-course"]||[]).push([[0],{26:function(e,t,n){e.exports={MyBtn:"Button_MyBtn__1xMzk"}},35:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(35),n(0)),l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("footer",{className:"page-footer purple accent-3",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/UsernameMy1/ulbi-blog",children:"Repo"})]})})})})},u=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{children:Object(i.jsxs)("div",{className:"nav-wrapper purple accent-3",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"React UlbiTV"}),Object(i.jsx)("ul",{id:"nav-mobile purple accent-3",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/UsernameMy1/ulbi-blog",children:"Repo"})})})]})})})},o=n(8),j=n.n(o),b=n(14),d=n(12),O=n(4),h=n(2),f=r.a.forwardRef((function(e,t){return Object(i.jsx)("div",{className:"input-field col s12",children:Object(i.jsx)("input",Object(h.a)(Object(h.a)({ref:t},e),{},{className:"validate"}))})})),x=(n(25),n(26),function(e){var t=e.create,n=Object(c.useState)({title:"",value:""}),r=Object(O.a)(n,2),a=r[0],s=r[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{className:"col s12",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(f,{value:a.title,onChange:function(e){return s(Object(h.a)(Object(h.a)({},a),{},{title:e.target.value}))},type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(i.jsx)(f,{value:a.value,onChange:function(e){return s(Object(h.a)(Object(h.a)({},a),{},{value:e.target.value}))},type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"})]}),Object(i.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault();var n=Object(h.a)(Object(h.a)({},a),{},{id:Date.now()});t(n),s({title:"",value:""})},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})]})})}),p=n(61),v=n(60),m=function(e){var t=e.post,n=e.remove;return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col s12 m12",children:Object(i.jsxs)("div",{className:"card  center-align",children:[Object(i.jsx)("span",{className:"card-title",children:t.title}),Object(i.jsx)("div",{className:"card-content",children:Object(i.jsx)("p",{children:t.body})}),Object(i.jsx)("div",{className:"card-action",children:Object(i.jsx)("button",{onClick:function(){return n(t)},className:"btn",href:"#",children:"Delete"})})]})})})})},g=function(e){var t=e.posts,n=e.title,c=e.remove;return t.length?Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"center-align",children:n})}),Object(i.jsx)(p.a,{children:t.map((function(e){return Object(i.jsx)(v.a,{timeout:500,classNames:"post",children:Object(i.jsx)(m,{remove:c,post:e})},e.id)}))})]}):Object(i.jsx)("h2",{className:"center-align",children:"\u041d\u0435\u0442 \u043f\u043e\u0441\u0442\u043e\u0432"})},N=function(e){var t=e.options,n=e.defaultValue,c=e.value,r=e.onChange;return Object(i.jsx)("div",{className:"margintop",children:Object(i.jsxs)("select",{className:"browser-default",value:c,onChange:function(e){return r(e.target.value)},children:[Object(i.jsx)("option",{value:"",disabled:!0,children:n}),t.map((function(e){return Object(i.jsx)("option",{value:e.name,children:e.desc},e.desc)}))]})})},y=function(e){var t=e.filter,n=e.setFilter;return Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{value:t.query,onChange:function(e){return n(Object(h.a)(Object(h.a)({},t),{},{query:e.target.value}))},placeholder:"\u041f\u043e\u0438\u0441\u043a"}),Object(i.jsx)(N,{value:t.sort,onChange:function(e){return n(Object(h.a)(Object(h.a)({},t),{},{sort:e}))},defaultValue:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",options:[{name:"title",desc:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"},{name:"body",desc:"\u041f\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e"}]})]})},w=function(e,t,n){var r=function(e,t){return Object(c.useMemo)((function(){return t?Object(b.a)(e).sort((function(e,n){return e[t].localeCompare(n[t])})):e}),[t,e])}(e,t);return Object(c.useMemo)((function(){return r.filter((function(e){return e.title.includes(n)}))}),[n,r])},C=n(27),k=n(28),M=n(29),S=n.n(M),F=function(){function e(){Object(C.a)(this,e)}return Object(k.a)(e,null,[{key:"getAll",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,c,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:10,n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=4,S.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:t,_page:n}});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),_=function(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})},q=function(e,t){return Math.ceil(e/t)},B=function(e){var t=e.totalPages,n=(e.page,e.changePage),c=function(e){for(var t=[],n=0;n<e;n++)t.push(n+1);return t}(t);return Object(i.jsx)("div",{children:c.map((function(e){return Object(i.jsx)("button",{className:"btn",onClick:function(){return n(e)},children:e},e)}))})},D=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({sort:"",query:""}),s=Object(O.a)(a,2),l=s[0],u=s[1],o=w(n,l.sort,l.query),h=Object(c.useState)("false"),f=Object(O.a)(h,2),p=f[0],v=f[1],m=Object(c.useState)(0),N=Object(O.a)(m,2),C=N[0],k=N[1],M=Object(c.useState)(10),S=Object(O.a)(M,2),D=S[0],P=(S[1],Object(c.useState)(1)),R=Object(O.a)(P,2),A=R[0],J=R[1];function U(){return V.apply(this,arguments)}function V(){return(V=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,F.getAll(D,A);case 3:t=e.sent,r(t.data),v(!1),n=t.headers["x-total-count"],k(q(n,D));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){U()}),[A]);return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"content container",children:[Object(i.jsx)("button",{className:"btn",onClick:U,children:"response"}),Object(i.jsx)(x,{create:function(e){r([].concat(Object(b.a)(n),[e]))}}),Object(i.jsx)(y,{filter:l,setFilter:u}),p?Object(i.jsx)(_,{}):Object(i.jsx)(g,{remove:function(e){r(n.filter((function(t){return t.id!==e.id})))},title:"\u041f\u043e\u0441\u0442\u044b \u043f\u0440\u043e JS",posts:o}),Object(i.jsx)(B,{page:A,changePage:function(e){J(e)},totalPages:C})]})})};var P=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsx)(D,{}),Object(i.jsx)(l,{})]})};s.a.render(Object(i.jsx)(P,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.62fb9bf6.chunk.js.map