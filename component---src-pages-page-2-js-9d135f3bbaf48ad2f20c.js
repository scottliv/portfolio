(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(149),i=a(172),c=a(165);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Scott Livingstone"}}}}},164:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},165:function(e,t,a){"use strict";var n=a(166),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(184),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Scott Livingstone",description:"Showcase of my web development work",author:"Scott Livingstone"}}}}},172:function(e,t,a){"use strict";var n=a(163),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(149),s=a(34),u=a.n(s),d=a(7),p=a.n(d),m=a(181),f=a.n(m),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={},a.handleScroll=a.handleScroll.bind(u()(a)),a}p()(t,e);var a=t.prototype;return a.handleScroll=function(){this.setState({scroll:window.scrollY});var e=document.querySelector("header");this.state.scroll>0?e.style.backgroundColor="black":e.style.backgroundColor="transparent"},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.render=function(){var e=this.props.siteTitle;return o.a.createElement("header",{className:f.a.header},o.a.createElement("div",{className:f.a.container},o.a.createElement("h1",{className:f.a.title},o.a.createElement("a",{href:"mailto:scottlivingstone@gmail.com"},e))))},t}(o.a.Component);h.propTypes={siteTitle:c.a.string},h.defaultProps={siteTitle:""};var g=h,y=(a(182),a(183)),v=a.n(y),w=function(){console.log("hi")},E=function(e){var t=e.children;return o.a.createElement(l.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{siteTitle:e.site.siteMetadata.title,handleScroll:w}),o.a.createElement("div",{className:v.a.layout},o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",(new Date).getFullYear())))},data:n})};E.propTypes={children:c.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-page-2-js-9d135f3bbaf48ad2f20c.js.map