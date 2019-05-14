(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,A,t){"use strict";t.r(A);var a=t(0),n=t.n(a),c=t(149),i=t(172),o=t(233),r=t(4),s=t.n(r),l=t(234),d=t(239),p=function(){return n.a.createElement("div",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/scott-livingstone/",target:"_blank"},n.a.createElement(l.a,{icon:d.b})),n.a.createElement("a",{href:"https://github.com/scottliv"},n.a.createElement(l.a,{icon:d.a})))},f=t(240),g=t.n(f),b=t(358),u=t.n(b),h=function(e){var A=e.bannerTitle,t=e.tagLine;return n.a.createElement(c.b,{query:"970159585",render:function(e){var a=e.desktop.childImageSharp.fluid;return n.a.createElement(g.a,{Tag:"section",className:u.a.banner,fluid:a,backgroundColor:"#040e18"},n.a.createElement("div",null,n.a.createElement("h1",{className:u.a.title},A),n.a.createElement("p",null,t),n.a.createElement(p,null)))},data:o})};h.propTypes={bannerTitle:s.a.string,tagLine:s.a.string},h.defaultProps={bannerTitle:"",tagLine:""};var m=h,E=t(359),w=t.n(E),B=function(e){var A=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:w.a.container},A))};B.propTypes={children:s.a.node.isRequired};var x=B,Q=t(360),S=t.n(Q),k=function(){return n.a.createElement("div",{className:S.a.content},n.a.createElement("h2",null,"About"),n.a.createElement("p",null,"I'm a web developer who loves building and fixing things. I enjoy making useful things for people to enjoy and I love finding solutions to problems with code."))},N=(t(361),t(75),t(363)),R=t(364),v=t.n(R);var j=function(e){return console.log(e),n.a.createElement(c.b,{query:"799458165",render:function(A){var t,a=A.images;return(t=a.edges.find(function(A){return A.node.relativePath===e.src}))&&n.a.createElement(v.a,{fluid:t.node.childImageSharp.fluid})},data:N})},C=function(e){var A=e.project;return n.a.createElement("article",{style:{position:"relative"}},n.a.createElement("a",{href:A.link,target:"_blank"},n.a.createElement(j,{src:A.image}),n.a.createElement("p",null,"hi")))},Y=[{title:"Shark Club",link:"https://www.sharkclub.com",desc:"A web app that lets users search for all kinds of recipes from around the world. Fetches data using the Edaman API. Built with React, Redux, and Bootstrap",image:"sharkclub.png"},{title:"Pearl Of Burgundy",link:"https://www.pearlofburgundy.com/",desc:"A brochure site aimed to promote tourism in Dumaguete City Philippines. Built with React, Sass and Bootstrap.",image:"pob.png"},{title:"Inclusion BC",link:"https://inclusionbc.org/",desc:"An e-commerce app that lets users filter through items in real-time using multiple filters (e.g. type, color, size, price). Built with React, Redux, and Sass",image:"inclusion.png"},{title:"Sue Hollis",link:"https://www.suehollis.com/",desc:"A web app that lets customers customize their burgers by adding the ingredients they want. Built with React",image:"suehollis.png"}],y=function(e){return n.a.createElement("section",{className:"projects"},Y.map(function(e,A){return n.a.createElement(C,{key:A,project:e})}))},M=t(165);A.default=function(){return n.a.createElement(i.a,null,n.a.createElement(M.a,{title:"Home",keywords:["gatsby","application","react"]}),n.a.createElement(m,{bannerTitle:"Web Developer",tagLine:"Based in Vancouver, BC"}),n.a.createElement(x,null,n.a.createElement(k,null),n.a.createElement(y,null),n.a.createElement(j,null)))}},149:function(e,A,t){"use strict";t.d(A,"b",function(){return l});var a=t(0),n=t.n(a),c=t(4),i=t.n(c),o=t(33),r=t.n(o);t.d(A,"a",function(){return r.a});t(156);var s=n.a.createContext({}),l=function(e){return n.a.createElement(s.Consumer,null,function(A){return e.data||A[e.query]&&A[e.query].data?(e.render||e.children)(e.data?e.data.data:A[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,A,t){var a;e.exports=(a=t(164))&&a.default||a},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Scott Livingstone"}}}}},164:function(e,A,t){"use strict";t.r(A);t(35);var a=t(0),n=t.n(a),c=t(4),i=t.n(c),o=t(55),r=t(2),s=function(e){var A=e.location,t=r.default.getResourcesForPathnameSync(A.pathname);return t?n.a.createElement(o.a,Object.assign({location:A,pageResources:t},t.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},A.default=s},165:function(e,A,t){"use strict";var a=t(166),n=t(0),c=t.n(n),i=t(4),o=t.n(i),r=t(184),s=t.n(r);function l(e){var A=e.description,t=e.lang,n=e.meta,i=e.keywords,o=e.title,r=a.data.site,l=A||r.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},A.a=l},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Scott Livingstone",description:"Showcase of my web development work",author:"Scott Livingstone"}}}}},172:function(e,A,t){"use strict";var a=t(163),n=t(0),c=t.n(n),i=t(4),o=t.n(i),r=t(149),s=t(34),l=t.n(s),d=t(7),p=t.n(d),f=t(181),g=t.n(f),b=function(e){function A(A){var t;return(t=e.call(this,A)||this).state={},t.handleScroll=t.handleScroll.bind(l()(t)),t}p()(A,e);var t=A.prototype;return t.handleScroll=function(){this.setState({scroll:window.scrollY});var e=document.querySelector("header");this.state.scroll>0?e.style.backgroundColor="black":e.style.backgroundColor="transparent"},t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.props.siteTitle;return c.a.createElement("header",{className:g.a.header},c.a.createElement("div",{className:g.a.container},c.a.createElement("h1",{className:g.a.title},c.a.createElement("a",{href:"mailto:scottlivingstone@gmail.com"},e))))},A}(c.a.Component);b.propTypes={siteTitle:o.a.string},b.defaultProps={siteTitle:""};var u=b,h=(t(182),t(183)),m=t.n(h),E=function(){console.log("hi")},w=function(e){var A=e.children;return c.a.createElement(r.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{siteTitle:e.site.siteMetadata.title,handleScroll:E}),c.a.createElement("div",{className:m.a.layout},c.a.createElement("main",null,A),c.a.createElement("footer",null,"© ",(new Date).getFullYear())))},data:a})};w.propTypes={children:o.a.node.isRequired};A.a=w},233:function(e){e.exports={data:{desktop:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAFa7NgbEQ//xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIRAxAS/9oACAEBAAEFAoSR2PIiy71//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAECAxQf/aAAgBAQAGPwLRE//EABkQAQEBAQEBAAAAAAAAAAAAAAEAETEhgf/aAAgBAQABPyEHMXg1X7IerYbsvuXG/9oADAMBAAIAAwAAABBDz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAAICAgMAAAAAAAAAAAAAAAERACFBcVFhof/aAAgBAQABPxAD5BESAOQswxLNKC+K7UL3L3CI4n//2Q==",aspectRatio:1.5,src:"/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/c4f3a/banner-background.jpg",srcSet:"/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/ac6ef/banner-background.jpg 1040w,\n/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/c4f3a/banner-background.jpg 1200w",srcWebp:"/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/f9d14/banner-background.webp",srcSetWebp:"/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/17cca/banner-background.webp 1040w,\n/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/f9d14/banner-background.webp 1200w",sizes:"(max-width: 1200px) 100vw, 1200px"}}}}}},363:function(e){e.exports={data:{images:{edges:[{node:{extension:"png",relativePath:"gatsby-icon.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/portfolio/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png",srcSet:"/portfolio/static/4a9773549091c227cd2eb82ccd9c5e3a/69781/gatsby-icon.png 250w,\n/portfolio/static/4a9773549091c227cd2eb82ccd9c5e3a/3fa08/gatsby-icon.png 500w,\n/portfolio/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}},{node:{extension:"jpg",relativePath:"banner-background.jpg",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAFa7NgbEQ//xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIRAxAS/9oACAEBAAEFAoSR2PIiy71//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAECAxQf/aAAgBAQAGPwLRE//EABkQAQEBAQEBAAAAAAAAAAAAAAEAETEhgf/aAAgBAQABPyEHMXg1X7IerYbsvuXG/9oADAMBAAIAAwAAABBDz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAAICAgMAAAAAAAAAAAAAAAERACFBcVFhof/aAAgBAQABPxAD5BESAOQswxLNKC+K7UL3L3CI4n//2Q==",aspectRatio:1.5,src:"/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/2f7e7/banner-background.jpg",srcSet:"/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/4d406/banner-background.jpg 250w,\n/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/32ee9/banner-background.jpg 500w,\n/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/2f7e7/banner-background.jpg 1000w,\n/portfolio/static/e6e56b501178e90efe252d8e1c5bd867/81ef8/banner-background.jpg 1200w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}},{node:{extension:"png",relativePath:"gatsby-astronaut.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/portfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png",srcSet:"/portfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/69781/gatsby-astronaut.png 250w,\n/portfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/3fa08/gatsby-astronaut.png 500w,\n/portfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{extension:"png",relativePath:"inclusion.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACyklEQVQoz1WSWUjTARzH/2899GRUjKSo6EXJsFoReaYUKSqWFZRdFqLbSudROpvLqTNH55qp5drchKwka6N5Z+nazKOD8sgoO8GppA8VZIef/uVTP/jy+cH3dz38BJl7DJVnnNKnn8numUD2cAyFZwy5SJlrVKQXhVgjd3tFz0u66GV2jZPVPUFm5ygZzR9QijriEuu6JhD4G5OfmPr0lpnpaf6PX/D7pwiRv37M5jMzs+Q79HyAnCZm8lth9Mu/DkFVkopKl0xOYRLp+YcoNKRz0aJCrZejOS3nQlU2Rks25ptq2tzn6ezV0eq6iNvdgOV6KZZaLZ6+Rj6Oe5n8Oo2wKsSHwND5SCMlbIz1JWLHUrbsXsGaCAnh8b7kFK+l0haBwRSM0RyM9VYQeRlBOAxFdLbbUOkPcM52nBvNVrxT3xACNkpYHbIQf6kPq0MlbNi8RFwgwW/DAqSbFxGftJg0tR+ny6WcrViFviwQbVYU5Yfj6CvTUHqiGO0ZHfYOOwPv3iMs859DZEwABxTR7DwYRkxCENHbgtkUJSVhXxhKVSypmSs5lDYf9SlfdKXrseiP0XQ2H+3eOArSjuI0lXAwK5HE1HiE5f5zkaXEoi9MIV+1l1xNChqdkvTcfRToszmpU5GRd5iEpPXsUcyjMHcrr9vrqRavysvKxFyUw5OaIsKjAghY54twrVyJxnSB/dW1yM01uFqqeNxhxdN6leedlfR3VPHiway6G8/hctp47qjlQWUxFceSuZy2ixp1Mq5GK73tVoSR+0YMd66xv64N5e1mnt27wsv2Cl60lWN21mF02rl0147BcQdjQyOmro9UdntRlt1gk6KEUHkJMZpqrpqNtJhk4sChXkaHe/g87GFC1NuhHkYGHzHY343c2c8exysS7UPsqB9gZ/0QcbYBYmoHia57xTb7CAm3h9nuGKHO/YQ34vv8AW4EJFJow6ShAAAAAElFTkSuQmCC",aspectRatio:1.9596662030598053,src:"/portfolio/static/a9831ce71c228fca2ad23454a93a60b1/e9c7b/inclusion.png",srcSet:"/portfolio/static/a9831ce71c228fca2ad23454a93a60b1/69781/inclusion.png 250w,\n/portfolio/static/a9831ce71c228fca2ad23454a93a60b1/3fa08/inclusion.png 500w,\n/portfolio/static/a9831ce71c228fca2ad23454a93a60b1/e9c7b/inclusion.png 1000w,\n/portfolio/static/a9831ce71c228fca2ad23454a93a60b1/a4fe2/inclusion.png 1500w,\n/portfolio/static/a9831ce71c228fca2ad23454a93a60b1/dc9f7/inclusion.png 2000w,\n/portfolio/static/a9831ce71c228fca2ad23454a93a60b1/ab865/inclusion.png 2818w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}},{node:{extension:"png",relativePath:"suehollis.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACwElEQVQoz4WR2UtUYRjGz//SRd1VRNBFSJFFG0VlGbYvhO1DK0FRkBnpZNo6ZmqOo46mM85Z55zZF3XGFitxzMpsX6CbQDA1/fXNCN124Md7znee73mfl1ea/PmN0Vs2fltNTAFTU38EU/+YmJxgUjA+MS7q5D8msvXXL8YGMoxlMox/+Mi0uC/x4xtjxYWM2c/z32d6piHT07nLfP/BaM0DRmvrRCArJ5H0pIJaX8VANEnmzVsGBl+TGXpL/+AQqeddqD0tpF4mMXs76R96wfDwBwYHX5FKBOjvSzPy+SvvPn1l5NMXht+9R2pq99CiGfjMKB7ZpM2r4W5XaGh2cbB0BUfL13HHWUaV8zqNHU5crjYqSk5RcXwDD+3n8LW3oqgmPlmnUzaQIrE0oXA3ZjBBINxFMNKFYUXQzTCyriEbCrrlJx57mtM1udsoObuH6pPb8ApD45ETf1ZvhDADUaQOrxjZH8anmHQKVCOIrFkoehDNHyUQjAsSGKKBLnTOlkdcOr2Tkp3LkSsuILscGIYlPCJoRhhJ1kNoVhyPEsCjhogk0qQePyeW7KUr9ZSenickxFk6/Ux891Fqv4qj6jxN5SdwXzlG8+2LeMXYqj8mkoqEihHBqwZp9eg5U58exgjEiERnxlci3fgEcjTFjTt3KdqxksLNebiqywgpHiovH+FQ8UbqG5vFFDGk7CI6BF7FIps2i080UMWSNC1EqrySAXslvSXl2PZtpqAon7xlczlm20t3Mo3Ntov1mxZz734NmhlHUq0EWWQROYsm3o2AOBM/FWEYd9Sjldqxb9/I4X3rWLRkPkuE4f4DWwiH4uzeX8DKtQt50CCWE+xGqnO6uV/fjKO2MVdrGtzUOluFwE31QzdlwrD4zAk27FrD6oJVzJk3m/kLZ7Fp61quXLtKXv4Cli5fwM27DlytMn8BX4ekUcpryR8AAAAASUVORK5CYII=",aspectRatio:1.7917241379310345,src:"/portfolio/static/ad1ba9b430f366821bf479cb3cce81bd/e9c7b/suehollis.png",srcSet:"/portfolio/static/ad1ba9b430f366821bf479cb3cce81bd/69781/suehollis.png 250w,\n/portfolio/static/ad1ba9b430f366821bf479cb3cce81bd/3fa08/suehollis.png 500w,\n/portfolio/static/ad1ba9b430f366821bf479cb3cce81bd/e9c7b/suehollis.png 1000w,\n/portfolio/static/ad1ba9b430f366821bf479cb3cce81bd/a4fe2/suehollis.png 1500w,\n/portfolio/static/ad1ba9b430f366821bf479cb3cce81bd/dc9f7/suehollis.png 2000w,\n/portfolio/static/ad1ba9b430f366821bf479cb3cce81bd/16dbd/suehollis.png 2598w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}},{node:{extension:"png",relativePath:"pob.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACoUlEQVQoz4WPWU9TARBGbzQmxgd9IESjhChRg6KNsrRYKVq6SKHc0gXa0oVCCkrdcYlL1Ki4xIiAccEFwQUt2JaqKGpBKCTqT5EndkgUOF551cQvmXwzk8mZGWFqaorRkRF+DA8zPj7OzMwM09PTTEs+85+YmJhgbGyM0dFRJicn+cMSkPTz1y++f/3GhAT8l+bn55mdnV3IF1yqF/pzc3/NCpcunKfx+lWirzuIvnlL15t3vP8cI9b3hS8DAwzE4wwNDTE4NEh8MC71+unt6+NTLEZ3z0fCXVHCkQidHR3cunYVYdmSxWxesZSLZ89wuf42dQ33aHrUSsuLIC9DEV5LS7pjvfT09xMMd/EqFKa9M8TD1qc0NLdw6WYTZ67cYO/e/SQtEhBSkpPYkZxIbSDA9YY7ND5so/5WIw/uN9PZGSQS6uDDpx5CUh4KhWh/1krb4wcEI1Ga6m9SV1fHlfomDnrdFGxKQjDn5mCVy6h2OikyWtnn8eIpFnEVmThwsJaLp45TU2bDbrVwssqH31VJoNLH+aOHCJR7JJCTI34fFQYd1RajBLR4yNcWYthjIDtbhd9Rile1B9X6LZQ63DhdXpLWrEWv0+H3etDJ1diMJZQXlrJZJmfXLjWZmQpMZgcajQTUGuwod+Zj1+uwOQ9Tve8cFnkOokaPWwKaDSJ20cSJwGH8VYcoNlfgsznxl5SRnradojw1pt25pG1VkLphK0KWQkveehnNaZnczdDyXGnkjl5Drc+KUfRSkCdSqLdjddRgcR9jo+Y0Ko0Lh9XJ5Ro36qx0qmxG6Volq1auQ1iemIJsm5J8dQGizkBrSxte6c1c2SZcdjtiYT7b0zVk5xZTUCoBs8pI26bBYTbx5MYpRFUGKrmClFQFCQmr+Q1svv8APsNmTwAAAABJRU5ErkJggg==",aspectRatio:2.0184397163120567,src:"/portfolio/static/50918b7a5d05263d4dc747fc0bf67502/e9c7b/pob.png",srcSet:"/portfolio/static/50918b7a5d05263d4dc747fc0bf67502/69781/pob.png 250w,\n/portfolio/static/50918b7a5d05263d4dc747fc0bf67502/3fa08/pob.png 500w,\n/portfolio/static/50918b7a5d05263d4dc747fc0bf67502/e9c7b/pob.png 1000w,\n/portfolio/static/50918b7a5d05263d4dc747fc0bf67502/a4fe2/pob.png 1500w,\n/portfolio/static/50918b7a5d05263d4dc747fc0bf67502/dc9f7/pob.png 2000w,\n/portfolio/static/50918b7a5d05263d4dc747fc0bf67502/d78ef/pob.png 2846w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}},{node:{extension:"png",relativePath:"sharkclub.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACg0lEQVQozxWSS4/bdBTFs+AxJHHs2E5sJ078fsRJnNhjN69J5q1ppzCtVCFEgUFCsKuEoIsWCQmWsEL9DJVYsGfLV/vxn8XZ3XvPueecxiCIkPsm6+Oc/TxhMTY5LUbscp/CNzjblFwdthzKjIv9mtNVyX6RMtA6TJOIq9M93tAg8V1mkUtj7EfEcch5PWNbzHmyXzF3dKrQYu4a1BOH25trbi82XK4X7KqSwyxkIKv89J3Ef//o/Pve4Ks7j2kQ0lCsiL5pM1ZbzD2D7dwitiQctUkR6NysQq53BdsqZ1MvKZIxmdkhNSW2sxaPd00+fzrmrPAoo4DGh3JES9IJjA5PTnLSYQ/5gyMmQ411OmI6tllGHq7SYeL4RF6MrzWxm5/gdSWhtI2paBzPZ9TlksbHRypDc0jsDMnF4hdPbV5+esS3twa/fq/z+l7l/jOHVy9tvrmTuT75iO1C4ud7jS8vO4S9No4pk3kWdSYUJo4IYelyvpqTCQ+eHdr88WbE82uLtz8o/PlG4/XXHd69FfhlyO+vPF5cdPntR5m7sxaG0iSLhEUimGqW0KgWC9aZzSwYcKjmHHtd1kmI29PEOxq3B533f8n8/a7Hi6uQ7fIRtdgpYo9chOkaCr6wJxK+ZrZCIwt9NusNq7qiSAOqwCSzuqS2xtQ3KV2dfKxxUk1IHAPN8DGSS1GrEeePEiFiim/IxLbB6qE2Tk8wDPoMhCKl00Ftt1ClppAfsVlkLGydqSB4mHuokzuyUcZr7KBmt6o5WUZMHUHumVTCvoZnqvTVLpIk02y2BZoM+xqbPObmbMNumYrDKfsyJRdFL2OLnuGhR5dMpiVLTxN1MTidWQID/gcc2yvqi1+v+gAAAABJRU5ErkJggg==",aspectRatio:1.9888423988842399,src:"/portfolio/static/bd8f6233e5f9847a34e98a6506c9d984/e9c7b/sharkclub.png",srcSet:"/portfolio/static/bd8f6233e5f9847a34e98a6506c9d984/69781/sharkclub.png 250w,\n/portfolio/static/bd8f6233e5f9847a34e98a6506c9d984/3fa08/sharkclub.png 500w,\n/portfolio/static/bd8f6233e5f9847a34e98a6506c9d984/e9c7b/sharkclub.png 1000w,\n/portfolio/static/bd8f6233e5f9847a34e98a6506c9d984/a4fe2/sharkclub.png 1500w,\n/portfolio/static/bd8f6233e5f9847a34e98a6506c9d984/dc9f7/sharkclub.png 2000w,\n/portfolio/static/bd8f6233e5f9847a34e98a6506c9d984/5a5e7/sharkclub.png 2852w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-0df319b2c6d43e6ca84a.js.map