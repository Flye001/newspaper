(function(){"use strict";var t={6833:function(t,e,r){var n=r(9242),i=r(3396);const o=(0,i._)("h1",{class:"text-3xl my-5"},"ASTON NEWSPAPER",-1),a={class:"flex gap-4 justify-center bg-gray-100 p-2 mt-5 md:my-5"},s=(0,i._)("p",null,"Home",-1),l=(0,i._)("p",null,"About",-1),c=(0,i._)("p",null,"Articles",-1);function u(t,e){const r=(0,i.up)("router-link"),n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i._)("div",a,[(0,i.Wm)(r,{class:"navbar-brand",to:"/"},{default:(0,i.w5)((()=>[s])),_:1}),(0,i.Wm)(r,{class:"navbar-brand",to:"/"},{default:(0,i.w5)((()=>[l])),_:1}),(0,i.Wm)(r,{class:"navbar-brand",to:"/"},{default:(0,i.w5)((()=>[c])),_:1})]),(0,i.Wm)(n)],64)}var h=r(89);const d={},p=(0,h.Z)(d,[["render",u]]);var f=p,m=r(678);const v={class:"container px-3 mx-auto"},g={class:"flex flex-wrap"};function w(t,e,r,n,o,a){const s=(0,i.up)("ArticleCard");return(0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.AllArticles,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"w-full my-2"},[(0,i.Wm)(s,{Article:t},null,8,["Article"])])))),128))])])}var A=r(7139);const y=["src"],b={class:"flex flex-col text-left mt-5 p-1"},x={class:"text-sm italic"},_={class:"text-xs italic"},I={class:"text-2xl"},k={class:"mt-3"},T={class:"text-sm mt-auto"},C=(0,i.Uk)("Category: "),D={class:"italic"};function O(t,e,r,n,o,a){return(0,i.wg)(),(0,i.iD)("div",{class:"flex flex-col md:flex-row gap-5 outline outline-1 outline-gray-300 cursor-pointer",onClick:e[0]||(e[0]=(...t)=>a.LoadArticle&&a.LoadArticle(...t))},[(0,i._)("img",{src:r.Article.ImageURL,class:"w-1/2 min-w-0 max-w-full h-min my-auto"},null,8,y),(0,i._)("div",b,[(0,i._)("h1",x,(0,A.zw)(r.Article.Author),1),(0,i._)("h1",_,(0,A.zw)(r.Article.Date),1),(0,i._)("h1",I,(0,A.zw)(r.Article.Title),1),(0,i._)("p",k,(0,A.zw)(r.Article.Description),1),(0,i._)("h1",T,[C,(0,i._)("span",D,(0,A.zw)(r.Article.Category),1)])])])}var M={props:["Article"],methods:{LoadArticle(){console.log(this.Article),this.$router.push({name:"article",params:{Title:this.Article.Title,Id:this.Article.Id}})}}};const j=(0,h.Z)(M,[["render",O]]);var L=j,H=JSON.parse('{"Z":[{"Id":4,"Title":"A Conversation About Sickle Cell","Description":"A few months ago, I was on twitter and saw that sickle cell had been trending. As a person with sickle cell, I was naturally curious to see what it was all about, and I was met with dozens of tweets by other sickle cell warriors, expressing their outrage over a video posted on youtube.","Author":"Zuben Adjei","Date":"12th March 2022","Category":"Opinion","ImageURL":"https://static01.nyt.com/images/2014/10/21/science/20consumer/20consumer-tmagArticle-v2.jpg"},{"Id":2,"Title":"Are Grades an Accurate Measure of an Individual\'s Intelligence?","Description":"Grades are assigned to every student in the country, even in the world and this is just the standard we have come to expect. But are they right, do they even effectively serve their purpose?","Author":"Nadir Ahmed-Ali","Date":"12th March 2022","Category":"Opinion","ImageURL":"https://cdn.theatlantic.com/thumbor/bJSy_5XCqutWByU0sESS508q_jY=/8x75:1016x642/960x540/media/img/mt/2015/01/6263897021_34bfa46a90_b/original.jpg"},{"Id":3,"Title":"A Permanent Cure for Sickle Cell?","Description":"Many are still unaware as to what the sickle cell disease even is. Not to worry as this article will educate you on what it is, and the progression made in terms of the treatment for it.","Author":"Shashank Iyer","Date":"9th March 2022","Category":"Idk","ImageURL":"https://media.istockphoto.com/vectors/coming-soon-lettering-coming-soon-for-promotion-advertisement-sale-vector-id1221240925?k=20&m=1221240925&s=612x612&w=0&h=HX77CIwJ34u7qUMpI_W5z4dDnEbHGv66mGXVTpIccv8="},{"Id":1,"Title":"A Recap of Russian Conflict with Ukraine","Description":"Russia\'s invasion of Ukraine is ongoing. This article will resultantly be incomplete, with a comprehensive recap of events only being possible after the fact.","Author":"Kai Frater-Robertson","Date":"6th March 2022","Category":"Idk","ImageURL":"/img/putin1.jpg"}]}'),R={components:{ArticleCard:L},data(){return{AllArticles:H.Z}}};const U=(0,h.Z)(R,[["render",w]]);var S=U;const z={class:"container mx-auto text-left p-5 md:outline md:outline-1 md:outline-gray-300 mb-5"},W={class:"text-3xl my-2 sm:my-5 text-center md:text-left"},Z=["innerHTML"];function P(t,e,r,n,o,a){return(0,i.wg)(),(0,i.iD)("div",z,[(0,i._)("h3",W,(0,A.zw)(r.Title),1),(0,i._)("div",{innerHTML:o.ArticleHTML,class:"article-body"},null,8,Z)])}var E={props:["Title","Id"],data(){return{ArticleHTML:""}},beforeMount:function(){console.log(this.Id),fetch(`/articles/${this.Id}.html`).then((t=>t.text())).then((t=>{this.ArticleHTML=t}))}};const N=(0,h.Z)(E,[["render",P]]);var G=N;const q=[{path:"/",name:"home",component:S},{path:"/article",name:"article",component:G,props:!0}],J=(0,m.p7)({history:(0,m.PO)("/"),routes:q});var X=J;(0,n.ri)(f).use(X).mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,o){if(!n){var a=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],o=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(s=!1,o<a&&(a=o));if(s){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,i,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var u=l(r)}for(e&&e(n);c<a.length;c++)o=a[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},n=self["webpackChunkschool_newspaper"]=self["webpackChunkschool_newspaper"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(6833)}));n=r.O(n)})();
//# sourceMappingURL=app.b44eede0.js.map