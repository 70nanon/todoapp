(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),i=n.n(c),s=(n(38),n(8)),d=n(9),o=n.n(d),l=n(16),u=n(17),j=(n(40),n(13)),f=(n(41),n(68)),p=n(67),h=n(31),b=n(69),O=n(70),m=n(3);var v=function(e){return Object(m.jsx)(j.b,{draggableId:e.id,index:e.index,children:function(t){return Object(m.jsx)(h.a,Object(s.a)(Object(s.a)(Object(s.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{className:"my-2 py-2 rounded",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-4"}),Object(m.jsx)("div",{className:"col-4",children:e.name}),Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)(f.a,{onClick:function(){e.deleteTask(e.id)},children:"delete"})})]})}))}},e.id)},x=n(11),y=n.n(x),g="https://todoapp.microcms.io/api/v1/tasks",N="f7c56759-963c-4bfe-971d-bccf2a334220",k="77d88407-5a2c-42f0-bcff-9e40f60a1ba6";var w=function(e,t){return y.a.post(g,{displayOrder:e+1,title:t},{headers:{"X-WRITE-API-KEY":k}}).then((function(e){return e.data})).catch((function(e){if(void 0!==e.response)return[{id:null,title:null,comment:null}]}))},E=function(e,t){var n=[g,e].join("/");return y.a.patch(n,{displayOrder:t+1},{headers:{"X-WRITE-API-KEY":k}}).then((function(e){return e.data})).catch((function(e){if(void 0!==e.response)return[{id:null,title:null,comment:null}]}))};var I=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),d=i[0],x=i[1],I=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(g,{headers:{"X-API-KEY":N,"Content-Type":"application/json"},params:{orders:"displayOrder"}}).then((function(e){return e.data.contents})).catch((function(e){if(void 0!==e.response)return[{id:null,title:null,comment:null}]}));case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){I()}),[]);var A=function(e){var t=Array.from(n);!function(e){var t=[g,e].join("/");y.a.delete(t,{headers:{"X-WRITE-API-KEY":k}}).then((function(e){return e.data})).catch((function(e){if(void 0!==e.response)return[{id:null,title:null,comment:null}]}))}(e);var r=t.filter((function(t){return t.id!==e}));a(r)};return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsxs)("div",{className:"header row py-3",children:[Object(m.jsx)("h1",{className:"col",children:"TODO List"}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(f.a,{onClick:I,children:"reload"})})]}),Object(m.jsx)("div",{className:"mainList row mx-auto mx-3",children:Object(m.jsxs)(j.a,{onDragEnd:function(e){var t,r=Array.from(n),c=r.splice(e.source.index,1),i=Object(u.a)(c,1)[0];r.splice(null===(t=e.destination)||void 0===t?void 0:t.index,0,i),r.forEach(function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t.id,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),a(r)},children:[Object(m.jsx)(j.c,{droppableId:"characters mx-auto",children:function(e){return Object(m.jsx)("div",Object(s.a)(Object(s.a)({className:"characters"},e.droppableProps),{},{ref:e.innerRef,children:Object(m.jsxs)(p.a,{children:[null===n||void 0===n?void 0:n.map((function(e,t){var n=e.id,r=e.title,a=e.comment,c=e.displayOrder;return Object(m.jsx)(v,{deleteTask:A,id:n,name:r,thumb:a,index:t,displayOrder:c})})),e.placeholder]})}))}}),Object(m.jsx)(p.a,{className:"characters p-2",children:Object(m.jsx)(h.a,{className:"rounded mx-1",children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(O.a,{placeholder:"task title","aria-label":"task title","aria-describedby":"basic-addon2",type:"title",value:d,onChange:function(e){x(e.target.value)}}),Object(m.jsx)(f.a,{onClick:function(){var e=Array.from(n);(function(){var t=Object(l.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e.length+1,d);case 2:n=t.sent,r={id:n.id,title:d,displayOrder:e.length+1},e.push(r),a(e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()},variant:"outline-secondary",id:"button-addon2",children:" Add "})]})})})]})})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),A()}},[[66,1,2]]]);
//# sourceMappingURL=main.8d2d3c36.chunk.js.map