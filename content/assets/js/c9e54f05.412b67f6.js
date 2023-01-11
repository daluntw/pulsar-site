"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,y=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"create-gpg-keys",title:"Creating GPG keys"},s=void 0,i={unversionedId:"create-gpg-keys",id:"create-gpg-keys",title:"Creating GPG keys",description:"This page provides instructions for Pulsar committers on how to do the initial GPG setup.",source:"@site/contribute/create-gpg-keys.md",sourceDirName:".",slug:"/create-gpg-keys",permalink:"/contribute/create-gpg-keys",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/create-gpg-keys.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1673402898,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{id:"create-gpg-keys",title:"Creating GPG keys"},sidebar:"sidebarDevelopment",previous:{title:"Writing syntax guide",permalink:"/contribute/document-syntax"},next:{title:"Verifying release candidates",permalink:"/contribute/validate-release-candidate"}},p={},l=[{value:"Appending the key to KEYS files",id:"appending-the-key-to-keys-files",level:2},{value:"Upload the key to a public key server",id:"upload-the-key-to-a-public-key-server",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page provides instructions for Pulsar committers on how to do the initial GPG setup."),(0,a.kt)("p",null,"This is a condensed version of instructions available at ",(0,a.kt)("a",{parentName:"p",href:"http://apache.org/dev/openpgp.html"},"http://apache.org/dev/openpgp.html"),"."),(0,a.kt)("p",null,"Install GnuPG. For example on macOS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install gnupg\n")),(0,a.kt)("p",null,"Set configuration to use ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA512")," keys by default:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir ~/.gnupg\ncat <<EOL >> ~/.gnupg/gpg.conf\npersonal-digest-preferences SHA512\ncert-digest-algo SHA512\ndefault-preference-list SHA512 SHA384 SHA256 SHA224 AES256 AES192 AES CAST5 ZLIB BZIP2 ZIP Uncompressed\nEOL\nchmod 700 ~/.gnupg/gpg.conf\n")),(0,a.kt)("p",null,"Check the version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --version\n\n# gpg (GnuPG) 2.1.22\n# ...\n")),(0,a.kt)("p",null,"Generate new GPG key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# For 1.x or 2.0.x\ngpg --gen-key\n\n# For 2.1.x\ngpg --full-gen-key\n\ngpg (GnuPG) 2.1.22; Copyright (C) 2017 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: test user\nEmail address: test@apache.org\nComment: CODE SIGNING KEY\nYou selected this USER-ID:\n    "test user (CODE SIGNING KEY) <test@apache.org>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\n<Enter passphrase>\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"New ",(0,a.kt)("strong",{parentName:"p"},"RSA")," keys generated should be at least ",(0,a.kt)("strong",{parentName:"p"},"4096")," bits.")),(0,a.kt)("h2",{id:"appending-the-key-to-keys-files"},"Appending the key to KEYS files"),(0,a.kt)("p",null,"The GPG key needs to be appended to ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYS")," file that is stored in 2 SVN locations, one for proper releases and one for the release candidates."),(0,a.kt)("p",null,"The credentials for SVN are the usual Apache account credentials."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Checkout the SVN folder containing the KEYS file\nsvn co https://dist.apache.org/repos/dist/dev/pulsar pulsar-dist-dev-keys --depth empty\ncd pulsar-dist-dev-keys\nsvn up KEYS\n\nAPACHEID=apacheid\n# Export the key in ascii format and append it to the file\n( gpg --list-sigs $APACHEID@apache.org\n  gpg --export --armor $APACHEID@apache.org ) >> KEYS\n\n# Commit to SVN\nsvn ci -m "Added gpg key for $APACHEID"\n')),(0,a.kt)("p",null,"Repeat the same operation for the release KEYS file:"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"You should ask a PMC member to complete this step.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Checkout the SVN folder containing the KEYS file\nsvn co https://dist.apache.org/repos/dist/release/pulsar pulsar-dist-release-keys --depth empty\ncd pulsar-dist-release-keys\nsvn up KEYS\n\nAPACHEID=apacheid\n# Export the key in ascii format and append it to the file\n( gpg --list-sigs $APACHEID@apache.org\n  gpg --export --armor $APACHEID@apache.org ) >> KEYS\n\n# Commit to SVN\nsvn ci -m "Added gpg key for $APACHEID"\n')),(0,a.kt)("h2",{id:"upload-the-key-to-a-public-key-server"},"Upload the key to a public key server"),(0,a.kt)("p",null,"Use the key id to publish it to several public key servers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --send-key 8C75C738C33372AE198FD10CC238A8CAAC055FD2\ngpg --send-key --keyserver=keys.openpgp.org 8C75C738C33372AE198FD10CC238A8CAAC055FD2\ngpg --send-key --keyserver=keyserver.ubuntu.com 8C75C738C33372AE198FD10CC238A8CAAC055FD2\n")))}d.isMDXComponent=!0}}]);