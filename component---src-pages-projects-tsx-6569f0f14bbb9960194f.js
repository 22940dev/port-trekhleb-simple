(self.webpackChunktrekhleb_github_io=self.webpackChunktrekhleb_github_io||[]).push([[317],{3460:function(e,t,l){var n=l(5301).w_;e.exports.s=function(e){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M226.063 24.22l-9.782 32.624c12.992-2.652 26.423-4.032 40.19-4.032 10.475 0 20.766.82 30.81 2.376l-9.405-30.97h-51.813zm30.406 48.843c-99.627 0-180.19 80.53-180.19 180.156 0 99.624 80.563 180.155 180.19 180.155 99.624 0 180.155-80.53 180.155-180.156 0-99.627-80.53-180.157-180.156-180.157zm0 41.687c76.482 0 138.467 61.985 138.467 138.47 0 76.482-61.985 138.5-138.468 138.5-76.485 0-138.5-62.018-138.5-138.5 0-76.485 62.015-138.47 138.5-138.47zm-.033 38.938c-54.96 0-99.53 44.54-99.53 99.5s44.57 99.5 99.53 99.5 99.5-44.54 99.5-99.5-44.54-99.5-99.5-99.5zm.032 39.687c33.052 0 59.842 26.79 59.842 59.844 0 33.052-26.79 59.843-59.843 59.843-33.055 0-59.845-26.79-59.845-59.844 0-33.055 26.79-59.845 59.844-59.845zm0 30.906c-15.993 0-28.97 12.947-28.97 28.94 0 15.99 12.977 28.968 28.97 28.968 15.99 0 28.936-12.977 28.936-28.97 0-15.99-12.945-28.937-28.937-28.937zM114.905 395l-27.844 92.875h46.876l20.28-62.313c-14.35-8.54-27.56-18.833-39.312-30.562zm277.188 5.688c-11.982 11.026-25.324 20.595-39.72 28.468l19.25 58.72h46.907l-26.436-87.188zm-165.03 50.78v36.407h52.092v-35.53c-7.45.84-15.015 1.28-22.687 1.28-9.99 0-19.81-.74-29.408-2.156z"}}]})(e)}},5851:function(e,t,l){"use strict";var n=l(7294),a=l(6104),r=l(618);t.Z=function(e){var t=e.children,l=e.link;if(!t)return null;var c=n.createElement(a.Z,{level:a._.h3},t),s=l?n.createElement(r.Z,{link:l},c):null;return n.createElement("div",{className:"mb-3"},s||c)}},9576:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return $}});var n,a,r=l(7294),c=l(18),s=l(2916),m=l(5376),u=l(5537),i=l(3460),o=l(2971),E=l(2103),v=l(8388),d=l(682),h=l(8508),f=l(4052),Z=l(5851),p=l(1074),D=function(e){var t=e.children,l=e.className,n=void 0===l?"px-6 pb-6":l;return t?r.createElement("div",{className:n},r.createElement(p.Z,null,t)):null},k=l(7784),g=l(6981),N=l(8362),b=l(7747),x=l(618),y=l(1462),j=function(e){var t,l=e.project;if(!l)return null;var n=null!=l&&l.tags?r.createElement("div",null,r.createElement(h.Z,{tags:l.tags,numToShow:3})):null,a=r.createElement(o.Z,{startDate:l.startDate,endDate:l.endDate,className:"text-xs text-gray-500"}),c=(0,b.$_)(l),j={url:null==l||null===(t=l.srcURL)||void 0===t?void 0:t.url,caption:"Stars on GitHub"},z="number"==typeof c?r.createElement(N.Z,{stars:c,link:j,className:"text-xs text-gray-500 font-light"}):null,_=l.summary?l.summary.map((function(e,t){return r.createElement("p",{key:t},e)})):null,L=_?r.createElement("div",{className:"mb-3 font-light"},_):null,P=l.archived?void 0:l.demoURL||l.srcURL,R=l.demoURL&&!l.archived?r.createElement(k.Z,{link:l.demoURL,startEnhancer:r.createElement(s.Z,null),className:"mr-4"},"Demo"):null,S=l.srcURL&&!l.archived?r.createElement(k.Z,{link:l.srcURL,startEnhancer:r.createElement(m.h,null)},"Source Code"):null,w=l.cover?r.createElement(f.Z,{image:l.cover}):null,U=null!=l&&l.archived?r.createElement(D,null,r.createElement(g.Z,null)):null,C=R||S?r.createElement(D,null,R,S):null,A=null!=l&&l.links&&null!=l&&l.links.length?null==l?void 0:l.links.map((function(e,t){return r.createElement("li",{key:t},r.createElement(x.Z,{link:e,className:"text-sm underline",startEnhancer:r.createElement(u.F,{size:14})},(null==e?void 0:e.caption)||"Read more"))})):null,B=null!=l&&l.achievements&&l.achievements.length?r.createElement(p.Z,{className:"mt-3"},r.createElement(x.Z,{link:(0,b.OL)(l.id),className:"text-sm underline",startEnhancer:r.createElement(i.s,{size:14})},"Achievements"),r.createElement(y.Z,{className:"ml-2"},r.createElement("small",null,l.achievements.length))):null,$=A?r.createElement("ul",{className:"mt-3"},A):null;return r.createElement(E.ZP,null,r.createElement(d.ZP,{link:P},w),r.createElement(v.ZP,null,r.createElement(Z.Z,{link:P},l.name),r.createElement(p.Z,{className:"mb-3 justify-between"},r.createElement("div",null,a),r.createElement("div",null,z)),L,n,B,$),C,U)},z=l(2733),_=function(e){var t=e.projects.map((function(e){return r.createElement(j,{project:e,key:e.id})}));return r.createElement(z.ZP,null,t)},L=l(2427),P=l(9197),R=l(4110),S="startDateDesc",w=((n={}).startDateDesc={title:"➘ start date"},n.startDateAsc={title:"➚ start date",hidden:!0},n.starsDesc={title:"➘ stars"},n),U=function(e){var t=e.onSort,l=e.sortBy,n=Object.keys(w).filter((function(e){var t=w[e];return!(null!=t&&t.hidden)})).map((function(e){var t=w[e];return r.createElement("option",{key:e,value:e},t.title)}));return r.createElement("div",null,r.createElement(p.Z,null,r.createElement("div",{className:"text-sm text-gray-500 mr-1"},"Sort by:"),r.createElement("div",null,r.createElement("select",{onChange:function(e){var l=e.target.value;t(l)},defaultValue:l,className:"text-sm"},n))))},C=((a={}).startDateDesc={sort:function(e,t){return null!=e&&e.startDate&&t.startDate&&e.startDate!==t.startDate?e.startDate>t.startDate?-1:1:0}},a.startDateAsc={sort:function(e,t){return null!=e&&e.startDate&&t.startDate&&e.startDate!==t.startDate?e.startDate<t.startDate?-1:1:0}},a.starsDesc={sort:function(e,t){var l=(0,b.$_)(e)||0,n=(0,b.$_)(t)||0;return l===n?0:l>n?-1:1}},a),A=function(e){var t=e.projects,l=(0,r.useState)(S),n=l[0],a=l[1],s=(0,r.useState)((0,b.Ec)(t)),m=s[0],u=s[1];(0,r.useEffect)((function(){var e=(0,c.Z)(m).sort(C[n].sort);u(e)}),[n]);var i=m.length;return r.createElement(L.Z,null,r.createElement(R.ZP,{title:"Projects",description:"Projects and experiments that help people learn"}),r.createElement(p.Z,null,r.createElement(P.Z,null,"Projects"),r.createElement(y.Z,{className:"ml-3 self-start"},i)),r.createElement(p.Z,{className:"mb-6 justify-between"},r.createElement(U,{onSort:a,sortBy:n}),r.createElement(p.Z,{className:"ml-3"},r.createElement("div",{className:"text-sm text-gray-500 mr-1"},"Total stars:"),r.createElement(N.Z,{stars:(0,b.uf)(t)}))),r.createElement(_,{projects:m}))},B=l(824),$=function(){return r.createElement(A,{projects:B.q})}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-6569f0f14bbb9960194f.js.map