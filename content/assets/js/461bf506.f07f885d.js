"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[24225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),o=a(67392),s=a(7094),u=a(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){const{lazy:t,block:a,defaultValue:i,values:m,groupId:d,className:c}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,o.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===i?i:i??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,s.U)(),[N,y]=(0,r.useState)(k),P=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=d){const e=g[d];null!=e&&e!==N&&f.some((t=>t.value===e))&&y(e)}const I=e=>{const t=e.currentTarget,a=P.indexOf(t),n=f[a].value;n!==N&&(w(t),y(n),null!=d&&v(d,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;t=P[a]??P[0];break}case"ArrowLeft":{const a=P.indexOf(e.currentTarget)-1;t=P[a]??P[P.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},c)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>P.push(e),onKeyDown:T,onClick:I},i,{className:(0,l.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},96931:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));a(65488),a(85162);const l={id:"admin-api-tools",title:"Pulsar admin interfaces - Tools",sidebar_label:"Tools"},i=void 0,o={unversionedId:"admin-api-tools",id:"admin-api-tools",title:"Pulsar admin interfaces - Tools",description:"You can manage Pulsar entities through the Pulsar admin layer via one of the following tools:",source:"@site/docs/admin-api-tools.md",sourceDirName:".",slug:"/admin-api-tools",permalink:"/docs/next/admin-api-tools",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/admin-api-tools.md",tags:[],version:"current",frontMatter:{id:"admin-api-tools",title:"Pulsar admin interfaces - Tools",sidebar_label:"Tools"},sidebar:"docsSidebar",previous:{title:"Transactions",permalink:"/docs/next/admin-api-transactions"},next:{title:"Get started",permalink:"/docs/next/admin-api-get-started"}},s={},u=[{value:"Related topics",id:"related-topics",level:3}],p={toc:u},m="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can manage Pulsar entities through the Pulsar admin layer via one of the following tools:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pulsar admin APIs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.11.x/"},"Java admin API"),": It\u2019s a programmable interface written in Java.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go admin API (coming soon)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"pathname:///admin-rest-api/?version=2.11.0"},"REST API"),": HTTP calls, which are made against the admin APIs provided by brokers. In addition, both the Java admin API and pulsar-admin CLI use the REST API.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/"},"pulsar-admin CLI"),": It\u2019s a command-line tool and is available in the bin folder of your Pulsar installation."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pulsar admin APIs - tools",src:a(25853).Z,width:"872",height:"587"})),(0,r.kt)("p",null,"Here are the explanations and comparisons of these tools."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Tools"),(0,r.kt)("th",{parentName:"tr",align:null},"When to use"),(0,r.kt)("th",{parentName:"tr",align:null},"Considerations"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar admin APIs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/admin/2.11.x/"},"Java admin API")),(0,r.kt)("td",{parentName:"tr",align:null},"- If you want to implement your own admin interface client using Java and manage clusters. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - If you want to manage resources programmatically rather than relying on external tools inside of unit tests.",(0,r.kt)("br",null),(0,r.kt)("br",null)," - If you want to use admin APIs in Java applications."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),(0,r.kt)("br",null)," - This method is only available in Java. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - It needs more development work if you want to use it to build applications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar admin APIs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"pathname:///admin-rest-api/?version=2.11.0"},"REST API")),(0,r.kt)("td",{parentName:"tr",align:null},"- If you want to implement your own admin interface client using other languages and manage clusters using scripts."),(0,r.kt)("td",{parentName:"tr",align:null},"- This method is the most complicated. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - It needs more development work if you want to use it to build applications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar admin CLI"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"pathname:///reference/#/next/pulsar-admin/"},"pulsar-admin CLI")),(0,r.kt)("td",{parentName:"tr",align:null},"- If you want to get started with Pulsar admin APIs with minimal effort (e.g., no need to prepare an extra environment). ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - If you want to perform common administrative tasks."),(0,r.kt)("td",{parentName:"tr",align:null},"- This method is the most easy-to-use. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - It\u2019s challenging to use this method to build applications.",(0,r.kt)("br",null),(0,r.kt)("br",null)," - It takes a little more time because JVM starts slowly.")))),(0,r.kt)("h3",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To understand the basics, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/admin-api-overview"},"Pulsar admin API - Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To learn usage scenarios, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/admin-api-use-cases"},"Pulsar admin API - Use cases"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To learn common administrative tasks, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/admin-api-features"},"Pulsar admin API - Features"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To get up quickly, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/admin-api-get-started"},"Pulsar admin API - Get started"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To check the detailed usage, see the API references below."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.11.x/"},"Java admin API"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-rest-api-overview"},"REST API")))))))}d.isMDXComponent=!0},25853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/admin-api-tools-95a5ddbed922e7976be922e4c85fffbe.svg"}}]);