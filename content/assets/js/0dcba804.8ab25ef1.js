(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[82136],{43110:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>R,contentTitle:()=>P,default:()=>L,frontMatter:()=>B,metadata:()=>E,toc:()=>z});var s=a(87462),l=a(67294),r=a(3905),o=a(96486),n=a.n(o),i=a(58057),u=a.n(i),d=a(53252),p=a(51233),c=a(7906),m=a(53184),h=a(53816),g=a(295),v=a(82288),b=a.n(v),j=a(39960),k=a(44996),N=a(30381),f=a.n(N),y=a(13264);function x(e,t){const a=f()(t);return e.compareMain("3.0.0")<0?a.add(12,"months"):e.minor>0?a.add(6,"months"):a.add(24,"months")}function A(e,t){const a=f()(t);return e.compareMain("3.0.0")<0?a.add(12,"months"):e.minor>0?a.add(6,"months"):a.add(36,"months")}const w=(0,y.Z)("div")({width:15,height:15,borderRadius:"50%"});function T(e){const t=f()();return l.createElement(d.Z,null,l.createElement(l.Fragment,null,l.createElement(p.Z,{direction:"row",spacing:2},l.createElement("div",{style:{marginTop:10}},l.createElement(w,{style:{background:e.isBefore(t)?"crimson":"mediumaquamarine"}})),l.createElement("div",{style:{color:e.isBefore(t)?"crimson":"inherit"}},e.isBefore(t)?"Ended":"End"," ",e.fromNow(),l.createElement("br",null),"(",e.format("DD MMM YYYY"),")"))))}function Z(){let e=b().map((e=>({version:u().coerce(e.tagName),released:f()(e.publishedAt),releaseNoteLink:e.releaseNotes})));e.sort(((e,t)=>u().rcompare(e.version,t.version)));let t=[];for(const l of e){const e=l.version,r=l.released,o=n().last(t);o&&(a=o.version,s=l.version,a.major==s.major&&a.minor==s.minor)?(o.released=l.released,o.activeSupport=x(o.version,o.released),o.securitySupport=A(o.version,o.released)):t.push({version:e,released:r,activeSupport:x(e,r),securitySupport:A(e,r),latest:e,latestReleased:r,latestReleaseNoteLink:l.releaseNoteLink})}var a,s;const r=(0,y.Z)(d.Z)({fontWeight:"bold"});return l.createElement(l.Fragment,null,l.createElement(c.Z,null,l.createElement(m.Z,null,l.createElement(h.Z,null,l.createElement(r,null,"Version"),l.createElement(r,null,"Released"),l.createElement(r,null,"Active Support"),l.createElement(r,null,"Security Support"),l.createElement(r,null,"Latest"))),l.createElement(g.Z,null,t.map((e=>{return l.createElement(l.Fragment,null,l.createElement(h.Z,null,(a=e.version).compareMain("3.0.0")<0||0!=a.minor?l.createElement(d.Z,null,a.major,".",a.minor):l.createElement(d.Z,null,a.major,".",a.minor," (LTS)"),(t=e.released,l.createElement(d.Z,null,l.createElement(l.Fragment,null,t.fromNow(),l.createElement("br",null),"(",t.format("DD MMM YYYY"),")"))),T(e.activeSupport),T(e.securitySupport),function(e){const t=f()();return e.activeSupport.isBefore(t)&&e.securitySupport.isBefore(t)?l.createElement(d.Z,null,l.createElement("del",null,e.latest.version)):l.createElement(d.Z,null,l.createElement(l.Fragment,null,l.createElement(j.Z,{href:(0,k.Z)(e.latestReleaseNoteLink)},e.latest.version),l.createElement("br",null),"(",e.latestReleased.format("DD MMM YYYY"),")"))}(e)));var t,a})))))}const B={id:"release-policy",title:"Release policy"},P=void 0,E={unversionedId:"release-policy",id:"release-policy",title:"Release policy",description:"Release semantics",source:"@site/contribute/release-policy.md",sourceDirName:".",slug:"/release-policy",permalink:"/contribute/release-policy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/release-policy.md",tags:[],version:"current",lastUpdatedBy:"Yunze Xu",lastUpdatedAt:1686039955,formattedLastUpdatedAt:"Jun 6, 2023",frontMatter:{id:"release-policy",title:"Release policy"},sidebar:"sidebarDevelopment",previous:{title:"Updating document",permalink:"/contribute/document-contribution"},next:{title:"Release process",permalink:"/contribute/release-process"}},R={},z=[{value:"Release semantics",id:"release-semantics",level:2},{value:"Compatibility between releases",id:"compatibility-between-releases",level:2},{value:"Release frequency and support expectation",id:"release-frequency-and-support-expectation",level:2},{value:"Supported Versions",id:"supported-versions",level:2},{value:"Release cycles",id:"release-cycles",level:2},{value:"Related PIPs",id:"related-pips",level:2}],S={toc:z},M="wrapper";function L(e){let{components:t,...a}=e;return(0,r.kt)(M,(0,s.Z)({},S,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"release-semantics"},"Release semantics"),(0,r.kt)("p",null,"The Pulsar project follows a variant of Semantic Versioning (semver), which replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"major.minor.patch")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"LTS.feature.patch"),"."),(0,r.kt)("p",null,'Concretely, existing releases can expect patches for bugs and security vulnerabilities. New features will target to feature releases. A "major" version bump will not carry any special meaning in terms of "big features" included in the release or breaking API changes. Instead, it would simply signal a new long-term support (LTS) release.'),(0,r.kt)("p",null,"For example,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.10.0 is a feature release;"),(0,r.kt)("li",{parentName:"ul"},"2.10.1 is a patch release;"),(0,r.kt)("li",{parentName:"ul"},"2.11.0 is a feature release;"),(0,r.kt)("li",{parentName:"ul"},"3.0.0 is the first LTS release;"),(0,r.kt)("li",{parentName:"ul"},"3.0.1 is a patch release of the LTS release;"),(0,r.kt)("li",{parentName:"ul"},"3.1.0 is a feature release;"),(0,r.kt)("li",{parentName:"ul"},"3.2.0 is a feature release;"),(0,r.kt)("li",{parentName:"ul"},"3.2.1 is a patch release;"),(0,r.kt)("li",{parentName:"ul"},"4.0.0 is an LTS release.")),(0,r.kt)("h2",{id:"compatibility-between-releases"},"Compatibility between releases"),(0,r.kt)("p",null,"When upgrading an existing cluster, it is important to upgrade components linearly."),(0,r.kt)("p",null,"Before 3.0, upgrade should be done linearly through each feature version. For example, when upgrading from 2.8 to 2.10, it is important to upgrade to 2.9 before going to 2.10."),(0,r.kt)("p",null,"Starting from 3.0, additionally, live upgrade/downgrade between one LTS and the next one is guaranteed. For example,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3.0 -> 4.0 -> 3.0 is OK;"),(0,r.kt)("li",{parentName:"ul"},"3.2 -> 4.0 -> 3.2 is OK;"),(0,r.kt)("li",{parentName:"ul"},"3.2 -> 4.4 -> 3.2 is OK;"),(0,r.kt)("li",{parentName:"ul"},"3.2 -> 5.0 is ",(0,r.kt)("em",{parentName:"li"},"not")," OK.")),(0,r.kt)("h2",{id:"release-frequency-and-support-expectation"},"Release frequency and support expectation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Release frequency"),(0,r.kt)("th",{parentName:"tr",align:null},"Active Support"),(0,r.kt)("th",{parentName:"tr",align:null},"Security Support"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LTS release"),(0,r.kt)("td",{parentName:"tr",align:null},"Every 18 months"),(0,r.kt)("td",{parentName:"tr",align:null},"24 months"),(0,r.kt)("td",{parentName:"tr",align:null},"36 months")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Feature release"),(0,r.kt)("td",{parentName:"tr",align:null},"Every 3 months"),(0,r.kt)("td",{parentName:"tr",align:null},"6 months"),(0,r.kt)("td",{parentName:"tr",align:null},"6 months")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Patch release"),(0,r.kt)("td",{parentName:"tr",align:null},"When it is ready"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,r.kt)("p",null,"This can be translated into:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The last 2 LTS releases and the last 2 feature releases are supported."),(0,r.kt)("li",{parentName:"ul"},"Security patches are provided for the past 3 LTS releases and 2 feature releases")),(0,r.kt)("p",null,"Therefore, users can choose between stay in an LTS release until they are ready to jump into the next LTS, or try the latest releases which contains required features."),(0,r.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,r.kt)(Z,{mdxType:"SupportedVersionsTable"}),(0,r.kt)("h2",{id:"release-cycles"},"Release cycles"),(0,r.kt)("p",null,"Generally, one committer shall volunteer as the release manager (RM) for a specific release."),(0,r.kt)("p",null,"For feature releases and LTS releases, the last 3 weeks of the release cycle will be marked as a code-freeze period. The RM will branch off from master, and the RM is also responsible for selecting the changes that will be cherry-picked in the release branch."),(0,r.kt)("p",null,"From the code-freeze point, to minimize the risk of delaying the release, only bug fixes involving a regression of behavior compared to a previous release should be allowed. Occasional exceptions will be possible after higher scrutiny of the change."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"At the moment of the code freeze, the RM will start preparing a release candidate (RC) following the ",(0,r.kt)("a",{parentName:"li",href:"/contribute/release-process"},"release process"),". Committers, contributors, and users will ",(0,r.kt)("a",{parentName:"li",href:"/contribute/validate-release-candidate"},"test this RC")," to detect issues as early as possible. (A formal vote by the PMC will not be required at this stage, though any disagreement should be sent out ASAP)."),(0,r.kt)("li",{parentName:"ol"},"After 1 week, if there are any changes, the RM will provide a new RC release that the community will test again."),(0,r.kt)("li",{parentName:"ol"},"After 1 more week, if there are any changes, a third RC will be prepared, and this will be submitted to vote to the PMC. Otherwise, the vote will be held on an earlier RC if no issues are found."),(0,r.kt)("li",{parentName:"ol"},"The last 1 week will be used for the voting process and for updating Pulsar website and the blog post announcing the release, which should (hopefully) happen on the scheduled day.")),(0,r.kt)("p",null,'For patch releases, the process is the same while there is no code-freeze period and strict timeline. Basically, patch release is out "when it is ready".'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For example, the next release of Pulsar is 3.0.0, and it has the planned timeline as:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"2023-04-11 - RC-1"),(0,r.kt)("li",{parentName:"ul"},"2023-04-18 - RC-2"),(0,r.kt)("li",{parentName:"ul"},"2023-04-25 - RC-3"),(0,r.kt)("li",{parentName:"ul"},"2023-05-02 - Announce 3.0 Release"))),(0,r.kt)("h2",{id:"related-pips"},"Related PIPs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/wiki/PIP-47%3A-Time-Based-Release-Plan"},"PIP-47: A Time-Based Release Plan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/issues/15966"},"PIP-175: Extend time based release process"))))}L.isMDXComponent=!0},82288:e=>{e.exports=[{author:"RobertIndie",tagName:"v3.0.0",publishedAt:"2023-05-02T16:37:40Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.0/",doc:"/docs/3.0.x",version:"v3.0.x"},{author:"Technoboy-",tagName:"v2.11.1",publishedAt:"2023-04-19T16:53:34Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.1/",doc:"/docs/2.11.x",version:"v2.11.x"},{author:"Technoboy-",tagName:"v2.11.0",publishedAt:"2023-01-11T01:53:34Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.0/",releaseBlog:"/blog/2023/01/20/Apache-Pulsar-2-11-0",doc:"/docs/2.11.x",version:"v2.11.x"},{author:"liangyepianzhou",tagName:"v2.10.4",publishedAt:"2023-04-18T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.4/",releaseBlog:"/blog/2023-04-19-Apache-Pulsar-2-10-4.md",doc:"/docs/2.10.x",version:"v2.10.x"},{author:"liangyepianzhou",tagName:"v2.10.3",publishedAt:"2023-01-04T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.3/",releaseBlog:"/blog/2023/01/09/Apache-Pulsar-2-10-3",doc:"/docs/2.10.x",version:""},{author:"Jason918",tagName:"v2.10.2",publishedAt:"2022-10-28T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.2/",releaseBlog:"",doc:"/docs/2.10.x",version:""},{author:"codelipenghui",tagName:"v2.10.1",publishedAt:"2022-07-04T14:45:46Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.1/",releaseBlog:"/blog/2022/07/12/Apache-Pulsar-2-10-1",doc:"/docs/2.10.x",version:""},{author:"codelipenghui",tagName:"v2.10.0",publishedAt:"2022-04-18T02:08:43Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.0/",releaseBlog:"",doc:"/docs/2.10.x",version:""},{author:"coderzc",tagName:"v2.9.5",publishedAt:"2023-04-20T02:38:21Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.5/",doc:"/docs/2.9.x",version:"v2.9.x"},{author:"congbobo184",tagName:"v2.9.4",publishedAt:"2022-12-28T01:12:20Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.4/",releaseBlog:"",doc:"/docs/2.9.x",version:"v2.9.x"},{author:"mattisonchao",tagName:"v2.9.3",publishedAt:"2022-07-20T02:04:10Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.3/",releaseBlog:"/blog/2022/07/27/Apache-Pulsar-2-9-3",doc:"/docs/2.9.x",version:""},{author:"gaoran10",tagName:"v2.9.2",publishedAt:"2022-04-08T03:22:33Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.2/",releaseBlog:"/blog/2022/04/08/Apache-Pulsar-2-9-2",doc:"/docs/2.9.x",version:""},{author:"eolivelli",tagName:"v2.9.1",publishedAt:"2021-12-20T12:34:56Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.1/",releaseBlog:"",doc:"/docs/2.9.x",version:""},{author:"BewareMyPower",tagName:"v2.8.4",publishedAt:"2022-10-04T13:38:54Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.4/",releaseBlog:"",doc:"/docs/2.8.x",version:"v2.8.x"},{author:"michaeljmarshall",tagName:"v2.8.3",publishedAt:"2022-04-08T03:27:18Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.3/",releaseBlog:"",doc:"/docs/2.8.x",version:""},{author:"315157973",tagName:"v2.8.2",publishedAt:"2022-01-12T09:39:25Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.2/",releaseBlog:"",doc:"/docs/2.8.x",version:""},{author:"hangc0276",tagName:"v2.8.1",publishedAt:"2021-09-18T01:39:29Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.1/",releaseBlog:"/blog/2021/09/23/Apache-Pulsar-2-8-1",doc:"/docs/2.8.x",version:""},{author:"codelipenghui",tagName:"v2.8.0",publishedAt:"2021-06-15T10:39:18Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.0/",releaseBlog:"/blog/2021/06/12/Apache-Pulsar-2-8-0",doc:"/docs/2.8.x",version:""},{author:"Jason918",tagName:"v2.7.5",publishedAt:"2022-09-06T10:53:32Z",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/pulsar-2.7.5/",releaseBlog:"/blog/2022/09/09/Apache-Pulsar-2-7-5",doc:"/docs/2.7.5",version:"v2.7.x"},{author:"Technoboy-",tagName:"v2.7.4",publishedAt:"2021-12-27T08:24:54Z",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/pulsar-2.7.4/",releaseBlog:"/blog/2021/12/14/Apache-Pulsar-2-7-4",doc:"/docs/2.7.4",version:""},{author:"congbobo184",tagName:"v2.7.3",publishedAt:"2021-08-11T01:45:27Z",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/pulsar-2.7.3/",releaseBlog:"/blog/2021/08/11/Apache-Pulsar-2-7-3",doc:"/docs/2.7.3",version:""},{author:"eolivelli",tagName:"v2.7.2",publishedAt:"2021-05-25T06:30:19Z",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/pulsar-2.7.2/",releaseBlog:"/blog/2021/05/13/Apache-Pulsar-2-7-2",doc:"/docs/2.7.2",version:""},{author:"zymap",tagName:"v2.7.1",publishedAt:"2021-03-22T00:35:17Z",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/pulsar-2.7.1/",releaseBlog:"",doc:"/docs/2.7.1",version:""},{author:"codelipenghui",tagName:"v2.7.0",publishedAt:"2020-12-03T08:29:15Z",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/pulsar-2.7.0/",releaseBlog:"/blog/2020/12/24/Apache-Pulsar-2-7-0",doc:"/docs/2.7.0",version:""},{author:"lhotari",tagName:"v2.6.4",publishedAt:"2021-06-02T18:10:21Z",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/pulsar-2.6.4/",releaseBlog:"",doc:"/docs/2.6.4",version:"v2.6.x"},{author:"codelipenghui",tagName:"v2.6.3",publishedAt:"2021-01-21T12:34:56Z",vtag:"2.6.3",releaseNotes:"/release-notes/versioned/pulsar-2.6.3/",releaseBlog:"",doc:"/docs/2.6.3",version:""},{author:"wolfstudy",tagName:"v2.6.2",publishedAt:"2020-11-09T05:08:25Z",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/pulsar-2.6.2/",releaseBlog:"/blog/2020/11/09/Apache-Pulsar-2-6-2",doc:"/docs/2.6.2",version:""},{author:"wolfstudy",tagName:"v2.6.1",publishedAt:"2020-08-21T01:35:54Z",vtag:"2.6.1",releaseNotes:"/release-notes/versioned/pulsar-2.6.1/",releaseBlog:"/blog/2020/08/21/Apache-Pulsar-2-6-1",doc:"/docs/2.6.1",version:""},{author:"codelipenghui",tagName:"v2.6.0",publishedAt:"2020-06-17T12:57:15Z",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/pulsar-2.6.0/",releaseBlog:"/blog/2020/06/18/Apache-Pulsar-2-6-0",doc:"/docs/2.6.0",version:""},{author:"jiazhai",tagName:"v2.5.2",publishedAt:"2020-05-19T12:25:05Z",vtag:"2.5.2",releaseNotes:"/release-notes/versioned/pulsar-2.5.2/",releaseBlog:"/blog/2020/05/19/Apache-Pulsar-2-5-2",doc:"/docs/2.5.2",version:"v2.5.x"},{author:"tuteng",tagName:"v2.5.1",publishedAt:"2020-05-11T04:22:55Z",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/pulsar-2.5.1/",releaseBlog:"/blog/2020/04/23/Apache-Pulsar-2-5-1",doc:"/docs/2.5.1",version:""},{author:"sijie",tagName:"v2.5.0",publishedAt:"2020-01-15T12:34:56Z",vtag:"2.5.0",releaseNotes:"/release-notes/versioned/pulsar-2.5.0/",releaseBlog:"",doc:"/docs/2.5.0",version:""}]},46700:(e,t,a)=>{var s={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":15596,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":15596,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":95606,"./ss.js":95606,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}l.keys=function(){return Object.keys(s)},l.resolve=r,e.exports=l,l.id=46700}}]);