"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[79497],{3905:(e,o,a)=>{a.d(o,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function t(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?t(Object(a),!0).forEach((function(o){i(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function l(e,o){if(null==e)return{};var a,n,i=function(e,o){if(null==e)return{};var a,n,i={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],o.indexOf(a)>=0||(i[a]=e[a]);return i}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var o=n.useContext(s),a=o;return e&&(a="function"==typeof e?e(o):r(r({},o),e)),a},p=function(e){var o=c(e.components);return n.createElement(s.Provider,{value:o},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var a=e.components,i=e.mdxType,t=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(a),m=i,d=k["".concat(s,".").concat(m)]||k[m]||u[m]||t;return a?n.createElement(d,r(r({ref:o},p),{},{components:a})):n.createElement(d,r({ref:o},p))}));function d(e,o){var a=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var t=a.length,r=new Array(t);r[0]=m;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[k]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<t;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,o,a)=>{a.d(o,{Z:()=>r});var n=a(67294),i=a(86010);const t={tabItem:"tabItem_Ymn6"};function r(e){let{children:o,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(t.tabItem,r),hidden:a},o)}},65488:(e,o,a)=>{a.d(o,{Z:()=>u});var n=a(87462),i=a(67294),t=a(86010),r=a(72389),l=a(67392),s=a(7094),c=a(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){const{lazy:o,block:a,defaultValue:r,values:k,groupId:u,className:m}=e,d=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=k??d.map((e=>{let{props:{value:o,label:a,attributes:n}}=e;return{value:o,label:a,attributes:n}})),f=(0,l.l)(b,((e,o)=>e.value===o.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??d.find((e=>e.props.default))?.props.value??d[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,s.U)(),[w,v]=(0,i.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:R}=(0,c.o5)();if(null!=u){const e=h[u];null!=e&&e!==w&&b.some((o=>o.value===e))&&v(e)}const P=e=>{const o=e.currentTarget,a=N.indexOf(o),n=b[a].value;n!==w&&(R(o),v(n),null!=u&&y(u,String(n)))},C=e=>{let o=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;o=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;o=N[a]??N[N.length-1];break}}o?.focus()};return i.createElement("div",{className:(0,t.Z)("tabs-container",p.tabList)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},m)},b.map((e=>{let{value:o,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===o?0:-1,"aria-selected":w===o,key:o,ref:e=>N.push(e),onKeyDown:C,onClick:P},r,{className:(0,t.Z)("tabs__item",p.tabItem,r?.className,{"tabs__item--active":w===o})}),a??o)}))),o?(0,i.cloneElement)(d.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},d.map(((e,o)=>(0,i.cloneElement)(e,{key:o,hidden:e.props.value!==w})))))}function u(e){const o=(0,r.Z)();return i.createElement(k,(0,n.Z)({key:String(o)},e))}},37996:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>k});var n=a(87462),i=(a(67294),a(3905)),t=a(65488),r=a(85162);const l={id:"administration-isolation-bookie",title:"Isolate bookies",sidebar_label:"Isolate bookies"},s=void 0,c={unversionedId:"administration-isolation-bookie",id:"administration-isolation-bookie",title:"Isolate bookies",description:"Isolating bookies equals isolating message storage, which is a data storage mechanism that provides isolation and safety for specific topics.",source:"@site/docs/administration-isolation-bookie.md",sourceDirName:".",slug:"/administration-isolation-bookie",permalink:"/docs/next/administration-isolation-bookie",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/administration-isolation-bookie.md",tags:[],version:"current",frontMatter:{id:"administration-isolation-bookie",title:"Isolate bookies",sidebar_label:"Isolate bookies"},sidebar:"docsSidebar",previous:{title:"Isolate brokers",permalink:"/docs/next/administration-isolation-broker"},next:{title:"Overview",permalink:"/docs/next/security-overview"}},p={},k=[{value:"Understand bookie data isolation policy",id:"understand-bookie-data-isolation-policy",level:2},{value:"Rack-aware placement policy",id:"rack-aware-placement-policy",level:3},{value:"Qualified rack size of bookies",id:"qualified-rack-size-of-bookies",level:4},{value:"Enforced minimum rack size of bookies",id:"enforced-minimum-rack-size-of-bookies",level:4},{value:"Region-aware placement policy",id:"region-aware-placement-policy",level:3},{value:"Enable bookie data placement policy",id:"enable-bookie-data-placement-policy",level:2},{value:"Enable region-aware placement policy on broker",id:"enable-region-aware-placement-policy-on-broker",level:3},{value:"Enable region-aware placement policy on the auto-recovery instances (pods)",id:"enable-region-aware-placement-policy-on-the-auto-recovery-instances-pods",level:3},{value:"Configure data placement policy on bookie instances",id:"configure-data-placement-policy-on-bookie-instances",level:2},{value:"Example of configuring rack-aware placement policy",id:"example-of-configuring-rack-aware-placement-policy",level:4},{value:"Example of configuring region-aware placement policy",id:"example-of-configuring-region-aware-placement-policy",level:4},{value:"Configure bookie affinity groups",id:"configure-bookie-affinity-groups",level:2}],u={toc:k},m="wrapper";function d(e){let{components:o,...l}=e;return(0,i.kt)(m,(0,n.Z)({},u,l,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Isolating bookies equals isolating message storage, which is a data storage mechanism that provides isolation and safety for specific topics."),(0,i.kt)("p",null,"Bookie isolation is controlled by BookKeeper clients. For Pulsar, there are two kinds of BookKeeper clients to read and write data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BookKeeper clients on the broker side: Pulsar brokers use these BookKeeper clients to read and write topic messages."),(0,i.kt)("li",{parentName:"ul"},"BookKeeper clients on the bookie auto-recovery side:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The bookie auditor checks whether ledger replicas fulfill the configured isolation policy;"),(0,i.kt)("li",{parentName:"ul"},"The bookie replication worker writes ledger replicas to target bookies according to the configured isolation policy.")))),(0,i.kt)("p",null,"To isolate bookies, you need to complete the following tasks."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select a ",(0,i.kt)("a",{parentName:"li",href:"#understand-bookie-data-isolation-policy"},"data isolation policy")," based on your requirements."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#enable-bookie-data-placement-policy"},"Enable the policy on BookKeeper clients"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#configure-data-placement-policy-on-bookie-instances"},"Configure the policy on bookie instances"),".")),(0,i.kt)("h2",{id:"understand-bookie-data-isolation-policy"},"Understand bookie data isolation policy"),(0,i.kt)("p",null,'Bookie data isolation policy is built on top of the existing BookKeeper rack-aware placement policy. The "rack" concept can be anything, for example, racks, regions, availability zones. It writes the configured isolation policy into the metadata store. Both BookKeeper clients on the broker and bookie auto-recovery side read the configured isolation policy from the metadata store and apply it when choosing bookies to store messages.'),(0,i.kt)("p",null,"BookKeeper provides three kinds of data isolation policies for disaster tolerance."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rack-aware placement policy (default)"),(0,i.kt)("li",{parentName:"ul"},"Region-aware placement policy"),(0,i.kt)("li",{parentName:"ul"},"Zone-aware placement policy")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Both ",(0,i.kt)("a",{parentName:"p",href:"#rack-aware-placement-policy"},"rack-aware placement policy")," and ",(0,i.kt)("a",{parentName:"p",href:"#region-aware-placement-policy"},"region-aware placement policy")," can be used in all kinds of deployments where racks are a subset of a region. The major difference between the two policies is:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("inlineCode",{parentName:"li"},"RackawareEnsemblePlacementPolicy")," configured, the BookKeeper client chooses bookies from different ",(0,i.kt)("strong",{parentName:"li"},"racks")," to reduce the single point of failure. If there is only one rack available, the policy falls back on choosing a random bookie across available ones."),(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("inlineCode",{parentName:"li"},"RegionAwareEnsemblePlacementPolicy")," configured, the BookKeeper client chooses bookies from different ",(0,i.kt)("strong",{parentName:"li"},"regions"),"; for the selected region, it chooses bookies from different racks if more than one ensemble falls into the same region."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Zone-aware placement policy (",(0,i.kt)("inlineCode",{parentName:"p"},"ZoneAwareEnsemblePlacementPolicy"),") can be used in a public cloud infrastructure where Availability Zones (AZs) are isolated locations within the data center regions that public cloud services originate from and operate in.")))),(0,i.kt)("h3",{id:"rack-aware-placement-policy"},"Rack-aware placement policy"),(0,i.kt)("p",null,"Rack-aware placement policy enforces different data replicas to be placed in different racks to guarantee the rack-level disaster tolerance for your production environment. A data center usually has a lot of racks, and each rack has many storage nodes. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"RackAwareEnsemblePlacementPolicy")," to configure the rack information for each bookie."),(0,i.kt)("h4",{id:"qualified-rack-size-of-bookies"},"Qualified rack size of bookies"),(0,i.kt)("p",null,"When the available rack size of bookies can meet the requirements configured on a topic, the rack-aware placement policy can work well and you don't need any extra configurations."),(0,i.kt)("p",null,"For example, the BookKeeper cluster has 4 racks and 13 bookie instances as shown in the following diagram. When a topic is configured with ",(0,i.kt)("inlineCode",{parentName:"p"},"EnsembleSize=3, WriteQuorum=3, AckQuorum=2"),", the BookKeeper client chooses one bookie instance from three different racks to write data to, such as Bookie2, Bookie8, and Bookie12."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rack-aware placement policy",src:a(42721).Z,width:"1578",height:"278"})),(0,i.kt)("h4",{id:"enforced-minimum-rack-size-of-bookies"},"Enforced minimum rack size of bookies"),(0,i.kt)("p",null,"When the available rack size of bookies cannot meet the requirements configured on a topic, the strategy that the BookKeeper client chooses bookies to recover old ledgers and create new ledgers depends on whether the enforced minimum rack size of bookies is configured."),(0,i.kt)("p",null,"In this case, if you want to make the rack-aware placement policy work as usual, you need to configure an enforced minimum rack size of bookies (",(0,i.kt)("inlineCode",{parentName:"p"},"MinNumRacksPerWriteQuorum"),")."),(0,i.kt)("p",null,"For example, you have the same BookKeeper cluster with the same topic requirements ",(0,i.kt)("inlineCode",{parentName:"p"},"EnsembleSize=3, WriteQuorum=3, AckQuorum=2")," as shown in the above diagram. When all the bookie instances in Rack3 and Rack4 fail, you only have 2 available racks and there are the following three possibilities."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you have configured ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceMinNumRacksPerWriteQuorum=true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MinNumRacksPerWriteQuorum=3"),", the BookKeeper client fails to choose bookies, which means new ledgers cannot be created and old ledgers cannot be recovered. Because the requirement of ",(0,i.kt)("inlineCode",{parentName:"p"},"MinNumRacksPerWriteQuorum=3")," cannot be fulfilled.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you have configured ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceMinNumRacksPerWriteQuorum=true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MinNumRacksPerWriteQuorum=2"),", the BookKeeper client chooses one bookie from Rack1 and Rack2 to recover old ledgers, such as bookie1 and bookie5, to place 2 replicas for Bookie8 and Bookie12. For new ledger creation, it chooses one bookie from Rack1 and Rack2, such as Bookie4 and Bookie7, and a random bookie from either Rack1 or Rack2 to place the last replica."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rack-aware placement policy with an enforced minimum rack size of bookies",src:a(50533).Z,width:"1578",height:"461"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have configured ",(0,i.kt)("inlineCode",{parentName:"li"},"EnforceMinNumRacksPerWriteQuorum=false"),", the BookKeeper client tries its best effort to apply the placement policy depending on the available number of racks and bookies. It may still work as the above diagram or the following diagram.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rack-aware placement policy without an enforced minimum rack size of bookies",src:a(63138).Z,width:"1578",height:"525"})),(0,i.kt)("h3",{id:"region-aware-placement-policy"},"Region-aware placement policy"),(0,i.kt)("p",null,"Region-aware placement policy enforces different data replicas to be placed in different regions and racks to guarantee region-level disaster tolerance. To achieve datacenter level disaster tolerance, you need to write data replicas into different data centers. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"RegionAwareEnsemblePlacementPolicy")," to configure region and rack information for each bookie node to ensure region-level disaster tolerance."),(0,i.kt)("p",null,"For example, the BookKeeper cluster has 4 regions, and each region has several racks with their bookie instances, as shown in the following diagram. If a topic is configured with ",(0,i.kt)("inlineCode",{parentName:"p"},"EnsembleSize=3, WriteQuorum=3, and AckQuorum=2"),", the BookKeeper client chooses three different regions, such as Region A, Region C and Region D. For each region, it chooses one bookie on a single rack, such as Bookie5 on Rack2, Bookie17 on Rack6, and Bookie21 on Rack8."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Region-aware placement policy",src:a(1906).Z,width:"1656",height:"809"})),(0,i.kt)("p",null,"When two regions fail, such as Region B and Region C, as shown in the following diagram, the BookKeeper client chooses one bookie from Region A or Region D to replace the failed Bookie17 for recovering old ledgers. And it also chooses Region A and Region D to write replicas for creating new ledgers. In Region A, it falls back to rack-aware placement policy and chooses one bookie from Rack1 and Rack2, such as Bookie4 and Bookie7. For Region D, it has to choose one bookie from Rack8, such as Bookie22."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Region-aware placement policy for disaster tolerance",src:a(6627).Z,width:"1734",height:"928"})),(0,i.kt)("h2",{id:"enable-bookie-data-placement-policy"},"Enable bookie data placement policy"),(0,i.kt)("p",null,"By default, the rack-aware placement policy is enabled on both broker and bookie sides. If you want to switch to the region-aware placement policy, you need to enable the region-aware placement policy on both broker and bookie sides."),(0,i.kt)("h3",{id:"enable-region-aware-placement-policy-on-broker"},"Enable region-aware placement policy on broker"),(0,i.kt)("p",null,"Configure the following field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"bookkeeperClientRegionawarePolicyEnabled=true\n")),(0,i.kt)("p",null,"To enforce the minimum rack size of bookies, configure the following fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"bookkeeperClientEnforceMinNumRacksPerWriteQuorum=true\nbookkeeperClientMinNumRacksPerWriteQuorum=2\n")),(0,i.kt)("p",null,"To balance the ledger disk usage of different bookies, you can enable the disk weight placement by configuring the following field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"bookkeeperDiskWeightBasedPlacementEnabled=true\n")),(0,i.kt)("h3",{id:"enable-region-aware-placement-policy-on-the-auto-recovery-instances-pods"},"Enable region-aware placement policy on the auto-recovery instances (pods)"),(0,i.kt)("p",null,"Configure the following fields in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/bookkeeper.conf")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"ensemblePlacementPolicy=org.apache.bookkeeper.client.RegionAwareEnsemblePlacementPolicy\nreppDnsResolverClass=org.apache.pulsar.zookeeper.ZkBookieRackAffinityMapping\n")),(0,i.kt)("p",null,"To enforce the minimum rack size of bookies, configure the following fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"enforceMinNumRacksPerWriteQuorum=true\nminNumRacksPerWriteQuorum=2\n")),(0,i.kt)("p",null,"To balance the ledger disk usage of different bookies, you can enable the disk weight placement by configuring the following field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"diskWeightBasedPlacementEnabled=true\n")),(0,i.kt)("h2",{id:"configure-data-placement-policy-on-bookie-instances"},"Configure data placement policy on bookie instances"),(0,i.kt)("p",null,"To configure a data placement policy on bookie instances, you can use one of the following methods."),(0,i.kt)(t.Z,{defaultValue:"Pulsar-admin CLI",values:[{label:"Pulsar-admin CLI",value:"Pulsar-admin CLI"},{label:"REST API",value:"REST API"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Pulsar-admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Specify the rack name to represent which region or rack this bookie belongs to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin bookies set-bookie-rack\nThe following options are required: [-b | --bookie], [-r | --rack]\n\nThen we need to update the rack placement information for a specific bookie in the cluster. Note that the bookie address format is `address:port`.\nUsage: set-bookie-rack [options]\n  Options:\n  * -b, --bookie\n      Bookie address (format: `address:port`)\n    -g, --group\n      Bookie group name\n      Default: default\n    --hostname\n      Bookie host name\n  * -r, --rack\n      Bookie rack name\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In addition, you can also group bookies across racks or regions to serve broker-level isolation by specifying a group name for each bookie and assigning the group name to a specific namespace. See ",(0,i.kt)("a",{parentName:"p",href:"#configure-bookie-affinity-groups"},"configure bookie affinity groups")," for more details."))),(0,i.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.0&apiversion=v2#operation/updateBookieRackInfo"},"POST /admin/v2/bookies/racks-info/:bookie")))),(0,i.kt)("h4",{id:"example-of-configuring-rack-aware-placement-policy"},"Example of configuring rack-aware placement policy"),(0,i.kt)("p",null,"The following is an example of how to configure bookie instances with their rack properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin bookies set-bookie-rack --bookie bookie1:3181 --hostname bookie1.pulsar.com:3181 --group group1 --rack rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie2:3181 --hostname bookie2.pulsar.com:3181 --group group1 --rack rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie3:3181 --hostname bookie3.pulsar.com:3181 --group group1 --rack rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie4:3181 --hostname bookie4.pulsar.com:3181 --group group1 --rack rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie5:3181 --hostname bookie5.pulsar.com:3181 --group group1 --rack rack2\n...\n")),(0,i.kt)("h4",{id:"example-of-configuring-region-aware-placement-policy"},"Example of configuring region-aware placement policy"),(0,i.kt)("p",null,"The following is an example of how to configure bookie instances with their region/rack properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin bookies set-bookie-rack --bookie bookie1:3181 --hostname bookie1.pulsar.com:3181 --group group1 --rack RegionA/rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie2:3181 --hostname bookie2.pulsar.com:3181 --group group1 --rack RegionA/rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie3:3181 --hostname bookie3.pulsar.com:3181 --group group1 --rack RegionA/rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie4:3181 --hostname bookie4.pulsar.com:3181 --group group1 --rack RegionA/rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie5:3181 --hostname bookie5.pulsar.com:3181 --group group1 --rack RegionA/rack2\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie6:3181 --hostname bookie6.pulsar.com:3181 --group group1 --rack RegionA/rack2\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie7:3181 --hostname bookie7.pulsar.com:3181 --group group1 --rack RegionA/rack2\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie8:3181 --hostname bookie8.pulsar.com:3181 --group group1 --rack RegionB/rack3\n...\n")),(0,i.kt)("h2",{id:"configure-bookie-affinity-groups"},"Configure bookie affinity groups"),(0,i.kt)("p",null,"The data of a namespace can be isolated into user-defined groups of bookies, as known as bookie affinity groups, which guarantee all the data that belongs to the namespace is stored in desired bookies."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")," Before configuring bookie affinity groups, you need to group bookies first. See ",(0,i.kt)("a",{parentName:"p",href:"#configure-data-placement-policy-on-bookie-instances"},"configure data placement policy on bookie instances")," for more details."),(0,i.kt)("p",null,"To configure bookie affinity groups, you can use one of the following methods."),(0,i.kt)(t.Z,{defaultValue:"Pulsar-admin CLI",values:[{label:"Pulsar-admin CLI",value:"Pulsar-admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Pulsar-admin CLI",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces set-bookie-affinity-group options\n")),(0,i.kt)("p",null,"For more information about the command ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-bookie-affinity-group options"),", see ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/"},"Pulsar admin docs"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin bookies set-bookie-rack \\\n--bookie 127.0.0.1:3181 \\\n--hostname 127.0.0.1:3181 \\\n--group group-bookie1 \\\n--rack rack1\n\nbin/pulsar-admin namespaces set-bookie-affinity-group public/default \\\n--primary-group group-bookie1\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Do not set a bookie rack name to slash (",(0,i.kt)("inlineCode",{parentName:"li"},"/"),") or an empty string (",(0,i.kt)("inlineCode",{parentName:"li"},'""'),") if you use Pulsar earlier than 2.7.5, 2.8.3, and 2.9.2. If you use Pulsar 2.7.5, 2.8.3, 2.9.2 or later versions, it falls back to ",(0,i.kt)("inlineCode",{parentName:"li"},"/default-rack")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"/default-region/default-rack"),"."),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"RackawareEnsemblePlacementPolicy")," is enabled, the rack name is not allowed to contain one slash (",(0,i.kt)("inlineCode",{parentName:"li"},"/"),") except for the beginning and end of the rack name string. For example, a rack name like ",(0,i.kt)("inlineCode",{parentName:"li"},"/rack0")," is allowed, but ",(0,i.kt)("inlineCode",{parentName:"li"},"/rack/0")," is invalid."),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"RegionAwareEnsemblePlacementPolicy")," is enabled, the rack name can only contain one slash (",(0,i.kt)("inlineCode",{parentName:"li"},"/"),") except for the beginning and end of the rack name string. For example, rack name like ",(0,i.kt)("inlineCode",{parentName:"li"},"/region0/rack0")," is allowed, but ",(0,i.kt)("inlineCode",{parentName:"li"},"/region0rack0")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"/region0/rack/0")," are invalid.\nFor the bookie rack name restrictions, see ",(0,i.kt)("a",{parentName:"li",href:"pathname:///reference/#/next/pulsar-admin/bookies?id=set-bookie-rack"},"pulsar-admin bookies set-bookie-rack"),".")))),(0,i.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.0&apiversion=v2#operation/setBookieAffinityGroup"},"POST /admin/v2/namespaces/:tenant/:namespace/persistence/bookieAffinity"))),(0,i.kt)(r.Z,{value:"Java admin API",mdxType:"TabItem"},(0,i.kt)("p",null,"For how to set bookie affinity group for a namespace using Java admin API, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L1164"},"code"),"."))))}d.isMDXComponent=!0},42721:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/rack-aware-placement-policy-1-4f24b2896f0259416ecaac0abf7421cb.svg"},50533:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/rack-aware-placement-policy-2-3864fb206aa793fa87a6556b71642968.svg"},63138:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/rack-aware-placement-policy-3-d9ba58be554e438afc505386acf1d94b.svg"},1906:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/region-aware-placement-policy-1-e507d707cb5e369fa91616c45db6421b.svg"},6627:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/region-aware-placement-policy-2-d85209e840449079d2a46f7ad82df678.svg"}}]);