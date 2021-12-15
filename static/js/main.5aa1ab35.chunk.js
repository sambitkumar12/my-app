(this.webpackJsonpreact_project=this.webpackJsonpreact_project||[]).push([[0],{36:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c(29),i=c.n(a),r=(c(36),c(9)),l=c(2),o=function(){return Object(n.jsx)("div",{className:"navbar",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("nav",{className:"navbar__nav",children:[Object(n.jsx)("h3",{className:"nav__brand",children:Object(n.jsxs)(r.b,{to:"/",children:[Object(n.jsx)("i",{className:"fas fa-video"})," TV SHOW SEARCH"]})}),Object(n.jsxs)("ul",{className:"nav__links",children:[Object(n.jsx)("li",{className:"links__link",children:Object(n.jsx)(r.b,{to:"/",children:"HOME"})}),Object(n.jsx)("li",{className:"links__link",children:Object(n.jsx)(r.b,{to:"/about",children:"ABOUT"})})]})]})})})},j=Object(s.createContext)(),h=c(11),b=Object(s.createContext)(),u=function(e){var t=e.type,c=e.message;return Object(n.jsxs)("div",{className:"alert alert-".concat(t),children:[Object(n.jsx)("i",{className:"fas fa-info-circle"})," ",c]})},d=function(){var e=Object(s.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],i=Object(s.useContext)(j).searchShows,r=Object(s.useContext)(b),l=r.alert,o=r.setAlert;return Object(n.jsxs)("div",{className:"searchbar",children:[l?Object(n.jsx)(u,{message:l.message,type:l.type}):null,Object(n.jsxs)("form",{className:"searchbar__form",children:[Object(n.jsx)("input",{type:"text",placeholder:"Search For Tv Show",value:c,onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("button",{className:"btn btn-block",onClick:function(e){e.preventDefault(),""===c?o("Please enter something","danger"):i(c)},children:"SEARCH"})]})]})},O=function(e){var t=e.image,c=e.name,s=e.rating,a=e.id;return Object(n.jsxs)(r.b,{to:"/singleshow/".concat(a),className:"listitem",children:[Object(n.jsx)("img",{src:t,alt:c}),Object(n.jsxs)("div",{className:"listitem__info",children:[Object(n.jsx)("h4",{className:"info__name",children:c}),Object(n.jsx)("h4",{className:"info__rating",children:s})]})]})},m=c.p+"static/media/spinner.dbb22bcf.gif",x=function(){return Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("img",{src:m,alt:"Loading..."})})},g=function(){var e=Object(s.useContext)(j),t=e.loading,c=e.shows;return Object(n.jsxs)("div",{className:"homepage",children:[Object(n.jsx)(d,{}),t?Object(n.jsx)(x,{}):Object(n.jsx)("div",{className:"homepage__list",children:c.map((function(e){return Object(n.jsx)(O,{id:e.show.id,image:e.show.image?e.show.image.medium:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",name:e.show.name,rating:e.show.rating.average?e.show.rating.average:"No rating"},e.show.id)}))})]})},p=function(){return Object(n.jsxs)("div",{className:"about",children:[Object(n.jsx)("h3",{className:"about__title",children:"ABOUT PAGE"}),Object(n.jsxs)("div",{className:"about__info",children:[Object(n.jsx)("p",{children:"Tv Show Search App (v1.0)"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Things learnt from app build:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"React (create-react-app)"}),Object(n.jsx)("li",{children:"Basic CSS & HTML"}),Object(n.jsx)("li",{children:"Axios AJAX Request"}),Object(n.jsx)("li",{children:"TVMAZE API (https://www.tvmaze.com/api)"}),Object(n.jsx)("li",{children:"React Router"}),Object(n.jsx)("li",{children:"React Context API"}),Object(n.jsx)("li",{children:"Deploying to Netlify"})]})]})]})]})},f=function(e){var t=e.match,c=Object(s.useContext)(j),a=c.getSingleShow,i=c.singleShow,r=c.loading;Object(s.useEffect)((function(){a(t.params.id)}),[]);var l;return Object(n.jsx)(n.Fragment,{children:r?Object(n.jsx)(x,{}):Object(n.jsxs)("div",{className:"singleshow",children:[Object(n.jsx)("img",{src:i.image?i.image.medium:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",alt:i.name}),Object(n.jsxs)("div",{className:"singleshow__info",children:[Object(n.jsx)("h1",{children:i.name}),i.genres&&i.genres.map((function(e){return Object(n.jsx)("span",{className:"singleshow__genre",children:e},e)})),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Status:"})," ",i.status&&i.status]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Rating:"})," ",i.rating?i.rating.average:"No rating"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Offical Site:"})," ",i.officalSite?Object(n.jsx)("a",{href:i.officalSite,target:"_blank",rel:"noreferrer",children:i.officalSite}):"No offical site"]}),Object(n.jsx)("p",{children:i.summary&&(l=i.summary,null!==l&&""!==l&&(l=l.toString()).replace(/(<([^>]+)>)/gi,""))})]})]})})},v=function(){return Object(n.jsxs)(r.a,{children:[Object(n.jsx)(o,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:g}),Object(n.jsx)(l.a,{exact:!0,path:"/about",component:p}),Object(n.jsx)(l.a,{path:"/singleshow/:id",component:f})]})})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))},S=c(13),_=c.n(S),N=c(18),y=c(19),A=c.n(y),E=c(8),C="SEARCH_SHOWS",T="SET_LOADING",R="SET_SINGLE_SHOW",k="CLEAR_SINGLE_SHOW",L="SET_ALERT",H="REMOVE_ALERT",P=function(e,t){switch(t.type){case T:return Object(E.a)(Object(E.a)({},e),{},{loading:!0});case C:return Object(E.a)(Object(E.a)({},e),{},{shows:t.payload,loading:!1});case R:return Object(E.a)(Object(E.a)({},e),{},{singleShow:t.payload,loading:!1});case k:return Object(E.a)(Object(E.a)({},e),{},{singleShow:{}});default:return e}},I=function(e){var t=Object(s.useReducer)(P,{shows:[],singleShow:{},loading:!1}),c=Object(h.a)(t,2),a=c[0],i=c[1],r=function(){var e=Object(N.a)(_.a.mark((function e(t){var c,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({type:T}),e.next=3,A.a.get("https://api.tvmaze.com/search/shows?q=".concat(t));case 3:c=e.sent,n=c.data,console.log(n),i({type:C,payload:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(N.a)(_.a.mark((function e(t){var c,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({type:T}),e.next=3,A.a.get("https://api.tvmaze.com/shows/".concat(t));case 3:c=e.sent,n=c.data,console.log(n),i({type:R,payload:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(j.Provider,{value:{shows:a.shows,singleShow:a.singleShow,loading:a.loading,searchShows:r,getSingleShow:l,clearSingleShow:function(){i({type:k})}},children:e.children})},F=function(e,t){switch(t.type){case L:return t.payload;case H:return null;default:return e}},B=function(e){var t=Object(s.useReducer)(F,null),c=Object(h.a)(t,2),a=c[0],i=c[1];return Object(n.jsx)(b.Provider,{value:{alert:a,setAlert:function(e,t){i({type:L,payload:{message:e,type:t}}),setTimeout((function(){return i({type:H})}),5e3)}},children:e.children})};i.a.render(Object(n.jsx)(I,{children:Object(n.jsx)(B,{children:Object(n.jsx)(v,{})})}),document.getElementById("root")),w()}},[[60,1,2]]]);
//# sourceMappingURL=main.5aa1ab35.chunk.js.map