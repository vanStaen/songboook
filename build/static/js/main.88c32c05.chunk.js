(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{140:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),s=a(13),i=a.n(s),o=(a(93),a(94),a(29)),l=a.n(o),g=a(34),u=a(65),j=a(66),A=a(86),b=a(83),p=a(19),h=a(154),d=a(152),m=a(67),f=a(153),O=a(151),x=a(23),v=a.n(x),P=a(50),k=a.n(P),w=function(e){var t=Object(r.useState)("Loading ..."),a=Object(p.a)(t,2),c=a[0],s=a[1],i="https://orion.apiseeds.com/api/music/lyric/"+e.artist.replace(/ /g,"%20")+"/"+e.song.replace(/ /g,"%20")+"?apikey=DoQSFaMhpnnHth7pgqmXYJjkNtV1Fn1VGZAjGwpKvaCGiKdIQk1LS1OeCApW8RN9";return"Loading ..."===c&&function(){function t(){return(t=Object(g.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({url:i,method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,t.data;case 7:return a=e.sent,n=a.result,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(t){var a=e.artist.toLowerCase().replace(/ /g,""),n=t.artist.name.toLowerCase().replace(/ /g,"");k()(a,n)<5&&t.similarity>.9?s(t.track.text):(console.log("levenshtein:",a,n,k()(a,n)),console.log("similarity:",t.similarity),s("No lyrics found."))})).catch((function(e){s("No lyrics found."),console.log(e.message)}))}(),Object(n.jsx)("div",{style:{whiteSpace:"pre-line"},children:c})},y=function(e){var t=e.page.videourl?e.page.videourl.split("=")[1]:"";return Object(n.jsxs)(f.a,{title:e.page.song,placement:"right",closable:!0,onClose:e.handlerCloseDrawer,visible:e.drawerVisible,className:"Page__drawer",width:"350",children:[e.page.videourl?Object(n.jsx)(m.a,{videoId:t,opts:{height:"226",width:"300",playerVars:{autoplay:0}}}):Object(n.jsx)("img",{src:e.page.picurl,className:"Page-drawer__artwork",alt:"pic_missing"}),Object(n.jsx)(O.a,{orientation:"left",plain:!0,children:Object(n.jsx)("span",{className:"Page-drawer__diviser",children:"Lyrics"})}),Object(n.jsx)(w,{artist:e.page.artist,song:e.page.song}),Object(n.jsx)(O.a,{orientation:"left",plain:!0,children:Object(n.jsx)("span",{className:"Page-drawer__diviser",children:"Tags"})}),Object(n.jsx)("p",{children:e.page.tags})]})},N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACwklEQVRoge1Yy47aMBQ9thM2hVlTiSXsqFCnoxZWsIAvGPUDRl2OxKj9oOkPVLMHNkFQIbWqKiQ+AXXYkxXCdTfjNBC/SGCmjxzJIvjca9+Tex07AXLkyJHjr4Pv+5993xd7bXIs/hAQE9ntdl8QQj4CeAmAyv4gCJT2nU4HQgiMx2Ml3263QQgx+sfAAXwnhFwNh8OFLkbPJIAQcgvglYqrVCo7/5fLJTjnEEIYeUKIlt8DA3AhhLgF8DqVAADnAPD28hLPy+WoMwgCMMYSxu/7fQDAdDpV8h9ubgAAk8lEyfevr6PrH/f3+HR3F8WQVgAFgGq1miQoTfQ9KxaPxtdqNXmZVBqDTQAAoHR2luhTBRC3y8q7IrUAVQnE7bLyrnASoLpbtr6svCv+XwGqEojbZeVd8e9nQAjhfLfidll5Obfc+HRwEvBUGTipgMdYA/JYYoJRgBDiyTNgE/HHl5ANqTPwWCWUOQOqgQFgu92iUCgAADabTcIuK++K1AJms5nRLivvCicPSulOazabCZtWq3U0XjYX2N7IQAhJ1OtgMAAANBoNcM6xWCyUfPnhJWi1Win5er0Oxhjm87lx/tQCbINITsd7nhfZpfG3BQ84ZkAHSqnxKaF60uz7m0rl5BmQAtJmQAo4WQZsg9gyIAWY/G0ZsCGzABNsJcQYO70A00AywCwlxBhzClQHJwE62Ca3lZDneak2r50xXIxMGTAtcluGZAmdPAO6uyQF6HiZAZP/Ibuucg4XI1OAnPNMAmwL2QYnAbqtXmZAx0sBJp5SquVdYBPwEwD1fR/F2HdLAAjDMBKg4tfrdSTA8zyUSiWlP6VU6R+GobzkpgCNq6fX630FcGGyAX6/eOy3nYli5x7bGWgPX0aj0RsdaTsLXT18nz+H4StxPBgZuEpA/NcBHMA3Qsg7V4ccOXLkyHEwfgGWMvrsH43YhwAAAABJRU5ErkJggg==",C=(a(140),function(e){var t=e.isPiano,a=e.front,r=function(e){console.log("click",e)};return Object(n.jsx)("div",{className:"piano",id:"piano",children:a?t&&Object(n.jsx)(h.a,{placement:"bottomRight",title:"Play this on keys!",children:Object(n.jsx)("img",{className:"piano__img",src:N,alt:N})}):t?Object(n.jsx)(h.a,{placement:"right",title:"Not for piano?",children:Object(n.jsx)("img",{onClick:function(){return r(!1)},className:"piano__img clickable",src:N,alt:N})}):Object(n.jsx)(h.a,{placement:"right",title:"This is for piano!",children:Object(n.jsx)("img",{onClick:function(){return r(!0)},className:"piano__img clickable grey",src:N,alt:N})})})}),Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADi0lEQVRIie3Vz2/aZRwH8PfzfB+gUMqvLV1LgXRLyQ7a9mKErovZMoKJmngaFzXZjiYeNNOj/4IHTUy9zMMOxpDowRhSypyJYgt26bYeTNhWQkvLOlug8IXS777P83gZtSm0hW7zYPY+wfN583klhIcv8DL/UUi7w2Q43M8IuUaAy0KIIUKITild45zf4IRMTcbjj1v6QnxIGftACDEopWSKouQF51GdkC/299vCs6FQhFJ63eX1MtfQkKnHZoMQAlqths1crlEqFDQh5fsT8fhPADAXCr1LFOWG0+02nPD5eoy9vaCUolGpoLi6ulNcWdEh5dXAzEz0QHg2FIooBsO3I8GgxWyztf2K6uUyltLpGm80IoJSyozG70cCAYvZbm/b365U8GBuri51/cpefBdOhsP9DFjyT072HoTu4qUSHqRSVQAYCQb7LA7Hof3tSgWZZLKmKcrpN2KxvwGANoeMkGsur5cdhQKAxenEyeHhnpPDwz1HoQBgttng8niYUdc/aZ7twoSQyy6Px3TklqcZ8PsNA36/odP+Ca/XpChKpPmeNV9Izt0mq7XTPaCK0nEXAExWKwTnnt3P75mJrjYdI1JK2QITRVlUNzdfGLpTrYIyttoCC86/epTJqC8KLhYKGoT4sQVedji+01S1uLW+/txR/uQJSrmclMDXLXAkGuWC8yvLd+9uc017rvCj+/c1ScgPgXg82wIDQPDmzVuS86ncwoKKf38Hz5RasYiNXK6hS/nx3nO6v5iz2z9Ty+W/1jIZ/VlRrmnIzs+rQojI/gdFCxyJRrkuxDsb2WyxlM8f+4oJIbCUTqtCiC/PJRLT++ctMABMxuOPpRDnVxYXK+VC4Vhw9vbtWkNVf3l9YuLzdvO2z+Nm/giFRimls77RUYvT4zm024yUErk7d+rV9fX5DUrDb8ViO13DADB78WKAGAwzvvFxq9PtPrQvhEA2na7Xt7b+3CDkzYPQjmAASIbDrzLgV9/4uMPhdrf9k+aahoepVG27Xo/19fW990o0euid7AgGgFQ4fBrAbwNnz57qP3OG7Z01qlU8TKXqUtenXpue/pQAR97FjmEAmLt06ZTC2O/2wUGvZ2zMRAhBKZ+Xy/fuNSDlR8FE4nqnu7qCAeDWhQuOXqPxZ4vTOWYwm9nW2lpJF+Ltc4nEQjd7uoaf4sxsMn1DAbumqlfPJ5PV4+x5mf93/gHiHYJhapjA6gAAAABJRU5ErkJggg==",S=(a(144),function(e){var t=e.favorite,a=e.front,r=function(e){console.log("click",e)};return Object(n.jsx)("div",{className:"favorite",id:"favorite",children:a?t&&Object(n.jsx)("img",{className:"favorite__img",src:Q,alt:Q}):t?Object(n.jsx)(h.a,{placement:"right",title:"Mehhhhh ...",children:Object(n.jsx)("img",{onClick:function(){return r(!1)},className:"piano__img clickable",src:Q,alt:Q})}):Object(n.jsx)(h.a,{placement:"right",title:"I absolutely LOVE this!",children:Object(n.jsx)("img",{onClick:function(){return r(!0)},className:"favorite__img clickable grey",src:Q,alt:Q})})})}),I=(a.p,a(145),function(e){var t=Object(r.useState)(!1),a=Object(p.a)(t,2),c=a[0],s=a[1],i=Object(r.useState)("null"===e.page.link),o=Object(p.a)(i,2),l=o[0],g=(o[1],Object(r.useState)(null===e.page.tags)),u=Object(p.a)(g,2),j=u[0],A=(u[1],Object(r.useState)("null"===e.page.videourl)),b=Object(p.a)(A,2),m=b[0],f=(b[1],Object(r.useState)("null"===e.page.picurl)),O=Object(p.a)(f,2),x=O[0],v=(O[1],Object(r.useState)(!!(l||j||m||x))),P=Object(p.a)(v,2),k=P[0],w=(P[1],e.page.title.replace("-","/").replace(/ /g,"")),N=w.length>23?"".concat(w.slice(0,23),"..."):w,Q=(e.page.artist,e.page.song.toUpperCase(),[]);k&&(!0===l&&Q.push("TABS MISSING"),!0===j&&Q.push("HASHTAGS MISSING"),!0===m&&Q.push("VIDEO MISSING"),!0===x&&Q.push("PICTURE MISSING"));var I=Q.map((function(e){return Object(n.jsxs)(n.Fragment,{children:[e," ",Object(n.jsx)("br",{})]})}));return Object(n.jsxs)("div",{className:"Page__main",children:[k&&Object(n.jsxs)("div",{className:"PAge___notab_main",children:[Object(n.jsx)("div",{className:"Page__notab Page__notab-text",children:I}),Object(n.jsx)("div",{className:"Page__notab Page__notab-background"})]}),Object(n.jsx)("a",{href:e.page.link,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:e.page.picurl,alt:"pic_missing",className:"Page__artwork"})}),Object(n.jsx)("div",{className:"Page__title",children:N}),Object(n.jsxs)("div",{className:"Page__icons",children:[Object(n.jsx)(C,{front:!0,isPiano:e.page.piano}),Object(n.jsx)(S,{front:!0,favorite:e.page.favorite})]}),Object(n.jsx)(h.a,{title:"Show more",children:Object(n.jsx)("div",{className:"Page__actionicon",children:Object(n.jsx)(d.a,{onClick:function(){s(!0)}})})}),Object(n.jsx)(y,{page:e.page,handlerCloseDrawer:function(){s(!1)},drawerVisible:c})]})}),_=(a(146),function(e){Object(A.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={songbookPages:[],isLoading:!0},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.loadPages()}},{key:"loadPages",value:function(){var e=this;function t(){return(t=Object(g.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({url:"https://songbook-cvs.herokuapp.com/songbook",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,t.data;case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(t){var a=t;e.setState({songbookPages:a}),e.setState({isLoading:!1})})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){var e=this.state.songbookPages.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(I,{page:e})},e.id)}));return Object(n.jsx)("div",{style:{margin:30},children:this.state.isLoading?Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"book-loader",alt:"Loading"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{style:{fontSize:18},children:"Loading ... "})]}):Object(n.jsx)("div",{className:"Book__main",children:e})})}}]),a}(r.Component)),L=(a(147),function(){return Object(n.jsxs)("div",{className:"Footer__Main",children:["Songbook by ",Object(n.jsx)("a",{href:"http://www.clementvanstaen.com",target:"_blank",rel:"noopener noreferrer",children:"Cl\xe9ment van Staen"}),", 2020"]})});var T=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)(_,{})}),Object(n.jsx)(L,{})]})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root"))},93:function(e,t,a){},94:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.88c32c05.chunk.js.map