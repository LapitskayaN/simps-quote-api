(this["webpackJsonpsimps-quote-api"]=this["webpackJsonpsimps-quote-api"]||[]).push([[0],{23:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){},27:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var c=a(2),n=a.n(c),i=a(13),s=a.n(i),r=(a(23),a(14)),o=a(15),u=a(3),h=a(18),j=a(17),b=(a(24),a(25),a(0));var p=function(){return Object(b.jsx)("nav",{className:"Navbar",children:Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/The_Simpsons",children:"Simpons Quotes"})})};a(27);var d=function(t){return Object(b.jsxs)("figure",{className:"QuoteCard",children:[Object(b.jsx)("img",{src:t.image,alt:t.character}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("blockquote",{children:t.quote}),Object(b.jsx)("cite",{children:t.character})]})]})},l=a(16),m=a.n(l),O=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).state={quote:"",image:"",character:""},t.getQuote=t.getQuote.bind(Object(u.a)(t)),t}return Object(o.a)(a,[{key:"getQuote",value:function(){var t=this;m.a.get("https://simpsons-quotes-api.herokuapp.com/quotes").then((function(e){t.setState({quote:e.data[0].quote,image:e.data[0].image,character:e.data[0].character})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{}),Object(b.jsx)(d,{quote:this.state.quote,image:this.state.image,character:this.state.character}),Object(b.jsx)("button",{type:"button",onClick:this.getQuote,children:"Get quote"})]})}}]),a}(n.a.Component);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.44e39d33.chunk.js.map