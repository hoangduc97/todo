(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{102:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(82),i=a(81);a(92);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var c=function(e){var t=e.addTask,a=e.listId,o=l(Object(n.useState)(""),2),s=o[0],c=o[1],u=function(){""!==s&&(t(a,{title:s,completed:!1,note:"",priority:0,due_date:"",list:a}),c(""))};return r.a.createElement("li",{className:"task new_task"},r.a.createElement(i.a,{className:"new_task__icon",onClick:u}),r.a.createElement("input",{type:"text",className:"new_task__input",placeholder:"New task ...",value:s,onChange:function(e){return c(e.target.value)},onKeyDown:function(e){13==e.keyCode&&u()}}))},u=a(22),d=a(13),p=a(14);a(94);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=Object(p.b)((function(e){return{tasks:e.ListDetailReducer.tasks}}),(function(e){return{getAllTask:function(t){return e(function(e){return function(t){t({type:d.a.GET_REQUEST}),u.b.getAll(e).then((function(e){t({type:d.a.GET_SUCCESS,payload:e.data.data})})).catch((function(e){t({type:d.a.GET_FAILURE,payload:e.response.message})}))}}(t))},addTask:function(t,a){return e(function(e,t){return function(a){a({type:d.a.CREATE_REQUEST}),u.b.create(e,t).then((function(e){a({type:d.a.CREATE_SUCCESS,payload:e.data.data})})).catch((function(e){a({type:d.a.CREATE_FAILURE,payload:e.response.message})}))}}(t,a))},updateTask:function(t){return e(function(e){return function(t){t({type:d.a.UPDATE_REQUEST}),u.b.update(e).then((function(e){t({type:d.a.UPDATE_SUCCESS,payload:e.data.data})})).catch((function(e){t({type:d.a.UPDATE_FAILURE,payload:e.response.message})}))}}(t))},deleteTask:function(t){return e(function(e){return function(t){t({type:d.a.DELETE_REQUEST}),u.b.delete(e).then((function(e){t({type:d.a.DELETE_SUCCESS,payload:e.data.data})})).catch((function(e){t({type:d.a.DELETE_FAILURE,payload:e.response.message})}))}}(t))}}}))((function(e){var t=f(Object(n.useState)(!1),2),a=t[0],i=t[1],l=f(Object(n.useState)(!1),2),s=l[0],u=l[1];Object(n.useEffect)((function(){var t=e.params.list_id;console.log("rerender"),e.getAllTask(t)}),[e.getAllTask]);var d=function(){return u(!s)},p=e.tasks?e.tasks.filter((function(e){return e.completed})).length:0;return r.a.createElement("div",{className:"list_detail task__content"},r.a.createElement("button",{className:"button task__content--button",onClick:function(){return i(!a)}},"Done(",p,")"),r.a.createElement("ul",{className:"task__content--tasks"},a&&e.tasks&&e.tasks.filter((function(e){return e.completed})).map((function(t){return r.a.createElement(o.a,_({key:t._id},t,{updateTask:e.updateTask,deleteTask:e.deleteTask,updated:d}))})),e.tasks&&e.tasks.filter((function(e){return!e.completed})).map((function(t){return r.a.createElement(o.a,_({key:t._id},t,{updateTask:e.updateTask,deleteTask:e.deleteTask,updated:d}))})),r.a.createElement(c,{addTask:e.addTask,listId:e.params.list_id})))}))},82:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(91),i=a(98),l=a(99);a(83);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(e){var t,a=s(Object(n.useState)(e.title),2),c=a[0],u=a[1],d=s(Object(n.useState)(e.completed),2),p=d[0],_=d[1],f=s(Object(n.useState)(e.note),2),m=f[0],k=f[1],b=s(Object(n.useState)(e.due_date?e.due_date.split("T")[0]:""),2),g=b[0],h=b[1],y=s(Object(n.useState)(e.priority),2),v=y[0],E=y[1],w=s(Object(n.useState)(!1),2),x=w[0],S=w[1],T="task__detail"+(x?" active":""),A=p?"checked":"";return r.a.createElement("li",{className:(t=["task"],1==v?t.push("low"):2==v?t.push("medium"):3==v&&t.push("high"),t.join(" "))},r.a.createElement("div",{className:"task__line"},r.a.createElement("div",{className:"task__line--move"},r.a.createElement(o.b,null)),r.a.createElement("div",{className:"task__line--checked"},r.a.createElement(i.a,{className:A,onClick:function(){x&&_(!p)}})),r.a.createElement("input",{className:"task__line--input",type:"text",value:c,onChange:function(e){return u(e.target.value)},disabled:!x}),r.a.createElement("div",{className:"task__line--detail",onClick:function(){return S(!x)}},r.a.createElement(l.a,null))),r.a.createElement("div",{className:T},r.a.createElement("div",{className:"task__detail--left note"},r.a.createElement("label",{className:"title"},"Notes"),r.a.createElement("textarea",{name:"task_note",className:"note_text",value:m,onChange:function(e){return k(e.target.value)}})),r.a.createElement("div",{className:"task__detail--right"},r.a.createElement("div",{className:"due_date"},r.a.createElement("label",{className:"title"},"Due Date"),r.a.createElement("input",{className:"due_date_text",type:"date",value:g,onChange:function(e){return h(e.target.value)}})),r.a.createElement("div",{className:"priority"},r.a.createElement("label",{className:"title"},"Priority"),r.a.createElement("select",{className:"priority_text",value:v,onChange:function(e){return E(e.target.value)}},r.a.createElement("option",{value:0},"None"),r.a.createElement("option",{value:1},"Low"),r.a.createElement("option",{value:2},"Medium"),r.a.createElement("option",{value:3},"High"))),r.a.createElement("div",{className:"button__group"},r.a.createElement("button",{className:"save",onClick:function(t){""===c||c===e.title&&p===e.completed&&m===e.note&&g===(e.due_date?e.due_date.split("T")[0]:"")&&v===e.priority||(e.updateTask({_id:e._id,title:c,completed:p,note:m,due_date:g,priority:v}),e.updated())}},"save"),r.a.createElement("button",{className:"delete",onClick:function(){return e.deleteTask(e._id)}},"delete")))))}},83:function(e,t,a){var n=a(18),r=a(84);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},84:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n)()(!1);r.push([e.i,'.task{margin-bottom:1em;box-shadow:-2px 2px 6px -1px black;position:relative}.task::before{content:"";display:block;width:4px;height:100%;position:absolute;left:0;top:0}.task label{-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;user-select:none;color:white}.task__line{display:flex;background-color:#9F5F80;padding:0.5em}.task__line--move,.task__line--checked,.task__line--detail{display:flex;align-items:center;font-size:1.2em;margin-right:1em}.task__line--move svg>path,.task__line--checked svg>path,.task__line--detail svg>path{stroke:#FFBA93}.task__line--move{padding:0.5em;cursor:grabbing}.task__line--checked{cursor:pointer}.task__line--checked svg{border:2px solid white;border-radius:5px}.task__line--checked svg:hover{border-color:#06d237}.task__line--checked svg path{opacity:0;color:#06d237}.task__line--detail{cursor:pointer;margin-left:1em}.task__line--detail svg path{color:#FF8E71}.task__line .checked{border-color:#06d237}.task__line .checked path{opacity:1}.task__line--input{border:none;background-color:transparent;width:100%;outline:none;color:#FFBA93}.task__line--input:focus{border:2px solid #583D72}.task .active{display:grid;padding:1em;border-top:2px solid #583D72;transform:translateY(0);transition:transform 0.3s ease;transition-delay:0.25s;grid-template-columns:60% 40%;position:relative}.task .active::before{content:"";display:block;width:4px;height:100%;position:absolute;left:0;top:0}.task__detail{display:none;background-color:#9F5F80;transform:translateY(-100%)}.task__detail>*{padding:0 1em}.task__detail--left{display:flex;flex-direction:column}.task__detail--left .note_text{resize:none;height:15em;border:none}.task__detail--left .note_text:focus{outline:#9F5F80 auto}.task__detail--right{display:flex;flex-direction:column;justify-content:space-around}.task__detail--right .due_date,.task__detail--right .priority{display:flex;flex-direction:column}.task__detail--right .due_date_text,.task__detail--right .priority_text{width:100%;padding:0.25em 0.5em;cursor:pointer;line-height:1.1;outline:#9F5F80 auto 2px}.task__detail--right .priority_text{padding:0.4em}.task__detail--right .button__group{display:flex;justify-content:space-between}.task__detail--right .button__group .delete{background-color:red}.task__detail--right .button__group .save{background-color:green}.task__detail--right .button__group .delete,.task__detail--right .button__group .save{color:white;text-transform:uppercase;padding:1em 2em;border-radius:5px;border:none;box-shadow:-3px 3px 3px -1px #583D72;transition:box-shadow 0.3s ease;cursor:pointer}.task__detail--right .button__group .delete:focus,.task__detail--right .button__group .save:focus{outline:none}.task__detail--right .button__group .delete:active,.task__detail--right .button__group .save:active{box-shadow:none}.low::before{background-color:green}.low .active::before{background-color:green}.medium::before{background-color:yellow}.medium .active::before{background-color:yellow}.high::before{background-color:red}.high .active::before{background-color:red}\n',""]),t.default=r},92:function(e,t,a){var n=a(18),r=a(93);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},93:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n)()(!1);r.push([e.i,".new_task{display:flex;font-size:1.2em;padding:0.5em;background-color:#9F5F80;border-radius:10em}.new_task__icon{margin:0.5em;color:#FFBA93}.new_task__input{width:90%;background-color:transparent;border:none;outline:none;color:#FFBA93}.new_task__input::placeholder{color:inherit;opacity:.7}\n",""]),t.default=r},94:function(e,t,a){var n=a(18),r=a(95);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},95:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n)()(!1);r.push([e.i,".list_detail .button{margin:1em 2em}\n",""]),t.default=r}}]);