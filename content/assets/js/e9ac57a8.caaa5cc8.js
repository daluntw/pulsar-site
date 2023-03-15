"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[85452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={id:"client-libraries-node-setup",title:"Set up Pulsar Node.js client",sidebar_label:"Set up"},o=void 0,i={unversionedId:"client-libraries-node-setup",id:"client-libraries-node-setup",title:"Set up Pulsar Node.js client",description:"Install Node.js client library",source:"@site/docs/client-libraries-node-setup.md",sourceDirName:".",slug:"/client-libraries-node-setup",permalink:"/docs/next/client-libraries-node-setup",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-node-setup.md",tags:[],version:"current",frontMatter:{id:"client-libraries-node-setup",title:"Set up Pulsar Node.js client",sidebar_label:"Set up"},sidebar:"docsSidebar",previous:{title:"Node.js client",permalink:"/docs/next/client-libraries-node"},next:{title:"Initialize",permalink:"/docs/next/client-libraries-node-initialize"}},s={},p=[{value:"Install Node.js client library",id:"install-nodejs-client-library",level:2},{value:"Connect to Pulsar cluster",id:"connect-to-pulsar-cluster",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-nodejs-client-library"},"Install Node.js client library"),(0,a.kt)("p",null,"Install the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pulsar-client"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," library via ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install pulsar-client\n")),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-node/blob/master/README.md"},"README"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This library only works in Node.js 10.x or later versions because it uses the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-addon-api"},(0,a.kt)("inlineCode",{parentName:"a"},"node-addon-api"))," module.")),(0,a.kt)("h2",{id:"connect-to-pulsar-cluster"},"Connect to Pulsar cluster"),(0,a.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,a.kt)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,a.kt)("inlineCode",{parentName:"p"},"6650"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,a.kt)("p",null,"If you have multiple brokers, separate ",(0,a.kt)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,a.kt)("p",null,"If you use ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/security-tls-authentication"},"mTLS")," authentication, add ",(0,a.kt)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")))}d.isMDXComponent=!0}}]);