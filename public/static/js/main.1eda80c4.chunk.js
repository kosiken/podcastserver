(this.webpackJsonppodcasts=this.webpackJsonppodcasts||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(14),i=a.n(r),o=(a(92),a(15)),s=a(35),l=a(8),d=a(24),u=a(66),p={podcasts:[],color:"#000000",backgroundColor:"#fff0ff",isLoading:!0,page:"grid"};var j=Object(d.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=e;switch(t.type){case"close":a=Object(l.a)(Object(l.a)({},a),{},{page:"grid"});break;case"podcasts":a=Object(l.a)(Object(l.a)({},a),{},{isLoading:!1,podcasts:t.podcasts});break;case"theme":a=Object(l.a)(Object(l.a)({},a),{},{backgroundColor:t.backgroundColor,color:t.color});break;case"add":a=Object(l.a)(Object(l.a)({},a),{},{podcasts:a.podcasts.concat([t.podcast])});break;case"failure":a=Object(l.a)(Object(l.a)({},a),{},{error:t.error});break;case"select":a=a.podcast&&a.podcast.id===t.podcast.id?Object(l.a)(Object(l.a)({},a),{},{page:"player"}):Object(l.a)(Object(l.a)({},a),{},{podcast:t.podcast,page:"player"});break;default:console.log("Invalid Action -> \n",t)}return a}}),b=Object(d.a)(u.a)(d.d),f=function(){return{store:b(j)}},h=a(7),x=a(67),g=a(158),O=a(159),m=a(160),v=a(156),y=a(2),k=Object(v.a)((function(e){return{root:{display:"flex","max-width":300,margin:20,"flex-direction":"column","-ms-flex-align":"center","align-items":"center",padding:"10px 0",cursor:"pointer"},details:{display:"flex",flexDirection:"column"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},cover:{maxWidth:200,maxHeight:200,width:"90%"},playIcon:{height:38,width:38}}})),w=function(e){var t=e.podcast,a=(e.key,e.onClick,k()),n=Object(o.b)(),r=Object(c.useState)("#ffffff"),i=Object(h.a)(r,2),s=i[0],l=i[1],d=Object(c.useState)("#000000"),u=Object(h.a)(d,2),p=u[0],j=u[1];return Object(c.useEffect)((function(){var e=new Image;t.image&&(e.crossOrigin="Anonymous",e.src=t.image,e.onload=function(){var t=Object(x.a)(e);l(t.backgroundColor),j(t.color)})}),[t.image]),Object(y.jsxs)(g.a,{className:a.root,style:{backgroundColor:s,color:p},onClick:function(){n({type:"theme",backgroundColor:s,color:p}),n({type:"select",podcast:t})},children:[Object(y.jsx)("img",{className:a.cover,src:t.image,alt:t.title_original}),Object(y.jsx)(O.a,{children:Object(y.jsx)(m.a,{style:{fontWeight:"bold",textAlign:"center"},children:t.publisher_original})})]})},C=a(164),S=a(36),N=a(76),E=a(71),I=a.n(E),A=a(51),_=a.n(A),L=function(e){var t=e.selected,a=e.category,c=Object(N.a)(e,["selected","category"]),n=I()(_.a.category,Object(S.a)({},_.a.active,t));return Object(y.jsx)(m.a,Object(l.a)(Object(l.a)({className:n,component:"span"},c),{},{children:a}))},T=a(170),P=a(161),D=a(162),F=Object(v.a)((function(e){return Object(T.a)({root:{flexGrow:1},mhomeIcon:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),B=function(e){e.className;var t=F();return Object(y.jsx)(P.a,{position:"static",style:{backgroundColor:"#ffffff",color:"#000000"},elevation:0,children:Object(y.jsx)(D.a,{children:Object(y.jsx)(m.a,{variant:"h6",className:t.title,children:"Podcasts"})})})},M=a(163),R=a(16),G=a.n(R),W=a(25),H=a(72),J=a(73),K=a(74),Y=a.n(K).a.create({baseURL:"https://lionpods.herokuapp.com",headers:{"Content-Type":"application/json"}}),z=new(function(){function e(t){Object(H.a)(this,e),this.api=void 0,this.api=t}return Object(J.a)(e,[{key:"getPodcasts",value:function(){var e=Object(W.a)(G.a.mark((function e(){var t,a,c=arguments;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{limit:10,page:0},e.prev=1,e.next=4,this.api.get("/podcasts",{params:t});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Error while fetching");case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"addPodCast",value:function(){var e=Object(W.a)(G.a.mark((function e(t){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.post("/podcasts",{body:{rss:t}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error while adding");case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getAudio",value:function(){var e=Object(W.a)(G.a.mark((function e(t){var a,c,n,r=arguments;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:10,c=r.length>2&&void 0!==r[2]?r[2]:1,e.prev=2,e.next=5,this.api.get("/podcast",{params:{rss:t,limit:a,page:c}});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(2),new Error("Error while adding");case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}]),e}())(Y),U=Object(v.a)((function(e){return{loader:{height:"90vh",display:"flex","justify-content":"center","align-items":"center",width:"100%"}}})),V=function(){var e=U(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.app})),r=a.podcasts,i=a.isLoading,s=a.page,l=Object(c.useState)(""),d=Object(h.a)(l,2),u=d[0],p=d[1],j=Object(c.useState)("All"),b=Object(h.a)(j,2),f=b[0],x=b[1];return n.a.useEffect((function(){z.getPodcasts({page:1,limit:8}).then((function(e){t({type:"podcasts",podcasts:e}),p("")})).catch((function(e){console.log(e),p(e.message)}))}),[]),u.length?Object(y.jsx)("div",{className:e.loader,children:Object(y.jsx)(m.a,{children:u})}):i?Object(y.jsxs)("div",{className:e.loader,children:[Object(y.jsx)(M.a,{}),Object(y.jsx)("br",{}),Object(y.jsx)(m.a,{children:"Loading Podcasts"})]}):Object(y.jsxs)("div",{className:"disp "+("grid"===s?"":"nill"),children:[Object(y.jsx)(B,{}),Object(y.jsx)("section",{id:"sel",style:{width:"80%",margin:"10px auto 0",padding:"8px"},children:["All","Comedy","Sports","Tech","Lifestyle"].map((function(e,t){return Object(y.jsx)(L,{category:e,selected:f===e,onClick:function(){x(e)}},""+t)}))}),Object(y.jsx)(C.a,{container:!0,className:"podcasts",children:r.map((function(e,t){return Object(y.jsx)(C.a,{item:!0,lg:3,sm:4,xs:6,children:Object(y.jsx)(w,{podcast:e})},"podcast"+t)}))})]})},Z=a(168),q=a(165),Q=a(167),X=a(166),$=a(133),ee=a(27),te=a(169),ae=a(75),ce=function(e,t){return e.length>t?e.slice(0,t-6)+"...":e},ne=function(e){var t=Math.floor(e/60)+":",a=(e%60).toString();return t+(a=a.length<2?"0"+a:a)},re=Object(v.a)((function(e){return{episode:{display:"flex",alignItems:"center",margin:"2px 0 10px",padding:"2px 5px","justify-content":"center",cursor:"pointer"}}})),ie=function(e){var t=e.episode,a=e.color,c=e.index,r=e.backgroundColor,i=e.onClick,o=void 0===i?function(){}:i,s=re(),l=n.a.useRef(null),d=Object(ae.a)(l);return Object(y.jsxs)("div",{ref:l,className:s.episode,style:{color:d?r:a,backgroundColor:d?a:r},onClick:function(){o(t,c)},children:[Object(y.jsx)(m.a,{component:"span",style:{flex:1},children:t.episode}),Object(y.jsx)(m.a,{style:{flex:8},children:ce(t.title,35)}),Object(y.jsx)(m.a,{component:"span",variant:"caption",style:{flex:1},children:ne(t.duration)})]})};var oe=Object(v.a)((function(e){return{main:{"min-width":300,height:"100vh","max-width":500,padding:"0 8px 8px",margin:"0 2px 2px 0","box-shadow":"0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",display:"flex",flexDirection:"column",width:"30%"},indicator:{width:"100vw",position:"fixed",top:0,zIndex:999,left:0},root:{display:"flex","box-shadow":"none",padding:5,"justify-content":"space-between",width:"100%"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},acb:{display:"block",padding:0},acc:{boxShadow:"none",background:"none",padding:0,"&::before":{background:"none"}},cover:{width:90,height:90},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1),"justify-content":"center"},playIcon:{height:38,width:38},episode:{display:"flex",alignItems:"center",margin:"2px 0 10px",padding:"2px 5px","justify-content":"center",cursor:"pointer"}}})),se=function(){var e=oe(),t=n.a.useState(!1),a=Object(h.a)(t,2),r=a[0],i=a[1],l=Object(o.b)(),d=Object(o.c)((function(e){return e.app})),u=d.backgroundColor,p=d.color,j=d.podcast,b=d.page,f=n.a.useState(!1),x=Object(h.a)(f,2),v=x[0],k=x[1],w=function(e,t){var a=Object(c.useState)(e),n=Object(h.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)(!1),s=Object(h.a)(o,2),l=s[0],d=s[1];return Object(c.useEffect)((function(){if(!l){d(!0);var a=setTimeout((function(){i(e),d(!1)}),t);return function(){clearTimeout(a)}}}),[e]),[r,l]}(v,200),S=Object(h.a)(w,2),N=S[0],E=S[1],I=n.a.useState(0),A=Object(h.a)(I,2),_=A[0],L=A[1],T=n.a.useState(0),P=Object(h.a)(T,2),D=P[0],F=P[1],B=n.a.useState([]),R=Object(h.a)(B,2),H=R[0],J=R[1],K=n.a.useState(0),Y=Object(h.a)(K,2),U=Y[0],V=Y[1],ae=n.a.useState(),re=Object(h.a)(ae,2),se=re[0],le=re[1],de=n.a.useRef(null),ue=n.a.useState(""),pe=Object(h.a)(ue,2),je=pe[0],be=pe[1];n.a.useEffect((function(){if(se){var e=de.current;null!=e&&(v&&e.readyState>=2&&e.play(),v||e.pause())}}),[v]),n.a.useEffect((function(){Object(W.a)(G.a.mark((function e(){var t,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V(0),J([]),le(void 0),t=de.current,i(!1),k(!1),be(""),t&&(t.pause(),t.currentTime=0),void 0!==j){e.next=10;break}return e.abrupt("return");case 10:if(!j.image){e.next=23;break}return e.prev=11,e.next=14,z.getAudio(j.rss);case 14:a=e.sent,J(a),i(!0),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(11),console.log(e.t0),be("Error loading podcast");case 23:case"end":return e.stop()}}),e,null,[[11,19]])})))()}),[j]),n.a.useEffect((function(){if(se){var e=de.current;e&&(e.pause(),e.src=se.src,e.addEventListener("timeupdate",(function(){var t=Math.floor((null===e||void 0===e?void 0:e.currentTime)||0);V(t),se&&F(t/se.duration*100)})),e.addEventListener("loadeddata",(function(){e&&e.readyState>=2&&(e.play(),k(!0))})))}}),[se]),n.a.useEffect((function(){if(H.length){var e=H[_];if(e.episode!==(null===se||void 0===se?void 0:se.episode)){F(0);var t=de.current;t&&(t.currentTime=0),le(e)}}}),[_]),n.a.useEffect((function(){console.log("88")}),[u]);return Object(y.jsxs)("div",{className:"main "+("player"===b?"":"none"),style:{backgroundColor:u,color:p},children:[Object(y.jsx)(s.a,{children:Object(y.jsxs)("title",{children:[(null===se||void 0===se?void 0:se.title)||(null===j||void 0===j?void 0:j.title_original)||"Podcasts"," "]})}),Object(y.jsx)("div",{id:"back",children:Object(y.jsxs)($.a,{style:{color:p},onClick:function(){l({type:"close"})},children:[" ",Object(y.jsx)(ee.a,{})," "]})}),Object(y.jsx)("div",{style:{height:"75%"},children:j?Object(y.jsxs)(n.a.Fragment,{children:[Object(y.jsxs)(Z.a,{className:e.acc,children:[Object(y.jsx)(q.a,{className:e.acb,"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(y.jsxs)(g.a,{className:e.root,style:{backgroundColor:u,color:p},children:[Object(y.jsxs)("div",{className:e.details,children:[" ",Object(y.jsxs)(O.a,{className:e.content,children:[Object(y.jsx)(m.a,{component:"h5",variant:"h5",children:ce(j.publisher_original,25)}),Object(y.jsx)(m.a,{variant:"subtitle1",children:ce(j.title_original,35)})]})]}),Object(y.jsx)(X.a,{className:e.cover,image:j.image,title:j.title_original})]})}),Object(y.jsx)(Q.a,{style:{display:"block",maxHeight:"300px"},children:Object(y.jsx)(m.a,{component:"span",style:{flex:1},children:j.description_original})})]}),Object(y.jsxs)("div",{style:{height:"70%",overflowY:H.length>5?"scroll":"hidden"},children:[H.map((function(e,t){return Object(y.jsx)(ie,{episode:e,backgroundColor:u,color:p,index:t,onClick:function(e,t){L(t),le(e)}},"episode"+t)})),Object(y.jsx)("div",{style:{textAlign:"center"},children:!r&&Object(y.jsx)(M.a,{color:"inherit"})})]})]}):Object(y.jsx)("div",{})}),Object(y.jsxs)("div",{children:["  ",Object(y.jsx)(m.a,{style:{fontWeight:"bold",textAlign:"center"},children:ce((null===se||void 0===se?void 0:se.title)||"No episode",35)}),!!je.length&&Object(y.jsx)(m.a,{style:{textAlign:"center"},variant:"subtitle1",children:je}),Object(y.jsxs)("div",{className:e.controls,style:{color:p},children:[Object(y.jsx)($.a,{style:{color:p},disabled:!H.length,onClick:function(){_>0&&L(_-1)},children:Object(y.jsx)(ee.e,{})}),Object(y.jsx)($.a,{style:{color:p},disabled:!(null===se||void 0===se?void 0:se.src),onClick:function(){if(de.current&&!E){var e=de.current;e.readyState<2||(k(!N),N?e.pause():e&&e.readyState>=2&&e.play())}},children:N?Object(y.jsx)(ee.b,{className:e.playIcon}):Object(y.jsx)(ee.c,{className:e.playIcon})}),Object(y.jsx)($.a,{style:{color:p},disabled:!H.length,onClick:function(){var e=H.length;e&&L(e>_+1?_+1:0)},children:Object(y.jsx)(ee.d,{})})]}),Object(y.jsxs)(C.a,{container:!0,spacing:2,style:{alignItems:"center"},children:[Object(y.jsx)(C.a,{item:!0,children:Object(y.jsx)("span",{children:ne(U)})}),Object(y.jsx)(C.a,{item:!0,xs:!0,children:Object(y.jsx)(te.a,{value:D,style:{color:p},disabled:!(null===se||void 0===se?void 0:se.src),onChange:function(e,t){var a=de.current,c=Number(t);if(a&&se){a.pause();var n=Math.round(c/100*se.duration);a.currentTime=n,N&&a&&a.readyState>=2&&a.play()}F(c)}})}),Object(y.jsx)(C.a,{item:!0,children:Object(y.jsx)("span",{children:ne((null===se||void 0===se?void 0:se.duration)||0)})})]})]}),Object(y.jsx)("audio",{ref:de})]})};a(131);var le=function(){var e=f().store;return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)(s.a,{children:[Object(y.jsx)("meta",{property:"og:image",content:"/pods.png"}),Object(y.jsx)("meta",{property:"og:description",content:"A small podcast player"}),Object(y.jsx)("meta",{name:"image",content:"/android-chrome-192x192.png"}),Object(y.jsx)("meta",{name:"description",content:"A small podcast player"}),Object(y.jsx)("meta",{property:"og:title",content:"500 Dash"}),Object(y.jsx)("meta",{name:"twitter:title",content:"Krc Podcasts \u2014 A small podcast player for web"})]}),Object(y.jsxs)(o.a,{store:e,children:[Object(y.jsx)(V,{}),Object(y.jsx)(se,{})]})]})},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,171)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(le,{})}),document.getElementById("root")),de()},51:function(e,t,a){e.exports={category:"Category_category__2tVYK",active:"Category_active__3uZGC"}},92:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.1eda80c4.chunk.js.map