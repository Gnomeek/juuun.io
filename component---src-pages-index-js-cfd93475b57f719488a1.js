(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"JO+O":function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return l}));var r=a("q1tI"),n=a.n(r),c=a("Wbzz"),o=a("Bl7J"),i=a("zEMM"),s=(a("JO+O"),a("vrFN"));t.default=function(e){var t=e.location,a=e.data.allMarkdownRemark.edges;return i.map((function(e,t){var r=e.category;i[t].posts=a.filter((function(e){return e.node.frontmatter.category===r.toLowerCase()})).map((function(e){return e.node}))})),n.a.createElement(o.a,{location:t},n.a.createElement(s.a,{title:"首页"}),n.a.createElement("div",{className:"layout-home container"},i.map((function(e){var t=e.category,a=e.brief,r=e.posts;return n.a.createElement("div",{className:"home-section",id:t,key:t},n.a.createElement("h1",{className:"section-title"},t),n.a.createElement("p",{className:"section-description"},a),n.a.createElement("ul",{className:"section-items"},r.map((function(e){return n.a.createElement("li",{className:"section-item",key:e.id},n.a.createElement(c.a,{to:e.fields.slug,className:"item-card"},n.a.createElement("div",{className:"card-cover"},n.a.createElement("img",{src:Object(c.b)("heroes/"+e.frontmatter.cover),alt:e.frontmatter.workTitle})),n.a.createElement("p",{className:"card-title"},e.frontmatter.workTitle)))}))))}))))};var l="322650802"},zEMM:function(e){e.exports=JSON.parse('[{"category":"Projects","brief":"我自己做的一些项目。"},{"category":"Tools","brief":"我做的一些小工具。"},{"category":"Creative","brief":"一些脑洞大开的小创意。"},{"category":"Writing","brief":"我写的文章和电子书。"},{"category":"Painting","brief":"我画的画。"}]')}}]);
//# sourceMappingURL=component---src-pages-index-js-cfd93475b57f719488a1.js.map