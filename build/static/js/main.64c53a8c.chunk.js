(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},145:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),i=n(28),r=n.n(i),o=(n(113),n(114),n(9)),l=n.n(o),u=n(25),j=n(82),b=n(83),g=n(107),d=n(102),p=n(7),A=n(84),h=n(187),f=n(185),m=n(193),O=n(194),x=n(103),k=n(186),v=n(188),w=n(23),N=n.n(w),C=n(190),B=(n(145),function(e){var t=Object(s.useState)(e.tags),n=Object(p.a)(t,2),c=n[0],i=n[1],r=Object(s.useState)(-1),o=Object(p.a)(r,2),j=o[0],b=o[1],g=Object(s.useState)(""),d=Object(p.a)(g,2),A=d[0],h=d[1],f=Object(s.useState)(!1),m=Object(p.a)(f,2),O=m[0],w=m[1],B=Object(s.useState)(""),P=Object(p.a)(B,2),y=P[0],S=P[1],T=function(t){function n(){return(n=Object(u.a)(l.a.mark((function t(n){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook/"+e.id,method:"PATCH",data:{tags:n}});case 2:if(!(200!==(a=t.sent).status&201!==a.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,a.data;case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return n.apply(this,arguments)})(t).then((function(e){})).catch((function(e){console.log("error",e.message)}))},Q=function(t){c[j]=A.toLowerCase(),i(c),T(c),b(-1),h(""),S(""),w(!1),e.setTagsMissing(!1)},M=function(e){b(-1),h(""),S(""),w(!1)},E=function(e){h(e.target.value),S(""),w(!1)},G=c?c.map((function(e,t){var n=e.length>30;return j===t?Object(a.jsx)(k.a,{size:"small",className:"tag-input",value:A,onChange:E,onBlur:M,onPressEnter:Q},t):Object(a.jsx)(v.a,{className:"edit-tag",closable:!0,onClose:function(){return function(e){var t=c;t.splice(e,1),i(t)}(t)},children:Object(a.jsx)("span",{onDoubleClick:function(n){b(t),h(e),n.preventDefault()},children:n?"".concat(e.slice(0,30),"..."):e})},t)})):[];return Object(a.jsxs)("div",{className:"tags",children:[G,O&&Object(a.jsx)(k.a,{type:"text",size:"small",className:"tag-input",value:y,onChange:function(e){S(e.target.value)},onBlur:function(){S(""),w(!1),b(-1),h("")},onPressEnter:function(t){var n=t.target.value.toLowerCase();if(void 0===c||null===c){var a=[n];T(a),i(a)}else if(n&&-1===c.indexOf(n)){var s=[].concat(Object(x.a)(c),[n]);T(s),i(s)}S(""),w(!1),b(-1),h(""),e.setTagsMissing(!1)}}),!O&&Object(a.jsxs)(v.a,{className:"site-tag-plus",onClick:function(){w(!0),b(-1),h("")},children:[Object(a.jsx)(C.a,{})," Add Tag"]})]})}),P=n(66),y=n.n(P),S=function(e){var t=Object(s.useState)("Loading ..."),n=Object(p.a)(t,2),c=n[0],i=n[1],r="https://orion.apiseeds.com/api/music/lyric/"+e.artist.replace(/ /g,"%20")+"/"+e.song.replace(/ /g,"%20")+"?apikey=DoQSFaMhpnnHth7pgqmXYJjkNtV1Fn1VGZAjGwpKvaCGiKdIQk1LS1OeCApW8RN9";return"Loading ..."===c&&function(){function t(){return(t=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({url:r,method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,t.data;case 7:return n=e.sent,a=n.result,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(t){var n=e.artist.toLowerCase().replace(/ /g,""),a=t.artist.name.toLowerCase().replace(/ /g,"");y()(n,a)<5||t.similarity>.9?i(t.track.text):(console.log("levenshtein:",n,a,y()(n,a)),console.log("similarity:",t.similarity),i("No lyrics found."))})).catch((function(e){i("No lyrics found."),console.log(e.message)}))}(),Object(a.jsx)("div",{style:{whiteSpace:"pre-line"},children:c})},T=n(191),Q=n(192),M=(n(173),function(e){var t=Object(s.useState)(e.tabs),n=Object(p.a)(t,2),c=n[0],i=n[1],r=Object(s.useState)(e.video),o=Object(p.a)(r,2),j=o[0],b=o[1],g=Object(s.useState)(e.pic),d=Object(p.a)(g,2),A=d[0],h=d[1],f=Object(s.useState)(!1),m=Object(p.a)(f,2),O=m[0],x=m[1],w=Object(s.useState)(!1),C=Object(p.a)(w,2),B=C[0],P=C[1],y=Object(s.useState)(!1),S=Object(p.a)(y,2),M=S[0],E=S[1],G=Object(s.useState)(""),D=Object(p.a)(G,2),I=D[0],V=D[1],_=e.isDrawerFold?165:400,X=e.isDrawerFold?230:480,F=function(t){function n(){return(n=Object(u.a)(l.a.mark((function t(n){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook/"+e.id,method:"PATCH",data:n});case 2:if(!(200!==(a=t.sent).status&201!==a.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,a.data;case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return n.apply(this,arguments)})(t).then((function(e){})).catch((function(e){console.log("error",e.message)}))},L=function(e){V(e.target.value)},R=function(){O&&x(!1),B&&P(!1),M&&E(!1),V("")},Y=function(){O?(I.length>0?(F({link:I}),e.setTabsMissing(!1)):(F({link:"null"}),e.setTabsMissing(!0)),i(I),x(!1)):B?(I.length>0?(F({videourl:I}),e.setVideoMissing(!1)):(F({videourl:"null"}),e.setVideoMissing(!0)),b(I),P(!1)):M&&(I.length>0?(F({picurl:I}),e.setPicMissing(!1)):(F({picurl:"null"}),e.setPicMissing(!0)),h(I),E(!1)),V("")},W=function(e,t){var n,a,s=!1,c=function(e){var t=document.createElement("canvas").getContext("2d");return t.font="12px sans-serif",t.measureText(e).width};for(n=e.length;c(e.slice(0,n))>t;n--)a=n,s=!0;return s?"".concat(e.slice(0,a),"..."):e};return Object(a.jsxs)("div",{className:"links",children:[Object(a.jsxs)("div",{children:["\xa0\xa0Tabs:",O?Object(a.jsx)(k.a,{size:"small",style:{width:X},className:"tag-input",value:I,onChange:L,onBlur:R,onPressEnter:Y},"link_input_".concat(e.id)):Object(a.jsx)("a",{href:c,target:"_Blank",rel:"noreferrer",children:Object(a.jsxs)(v.a,{className:"links__tag",children:[Object(a.jsx)(T.a,{}),"\xa0\xa0",W(c,_),Object(a.jsx)(Q.a,{onClick:function(e){V(c),x(!0),e.preventDefault()}})]},"tabs")})]}),Object(a.jsxs)("div",{children:["Video:",B?Object(a.jsx)(k.a,{size:"small",style:{width:X},className:"tag-input",value:I,onChange:L,onBlur:R,onPressEnter:Y},"link_input_".concat(e.id)):Object(a.jsx)("a",{href:c,target:"_Blank",rel:"noreferrer",children:Object(a.jsxs)(v.a,{className:"links__tag",children:[Object(a.jsx)(T.a,{}),"\xa0\xa0",W(j,_),Object(a.jsx)(Q.a,{onClick:function(e){V(j),P(!0),e.preventDefault()}})]},"video")})]}),Object(a.jsxs)("div",{children:["\xa0\xa0\xa0\xa0Pic:",M?Object(a.jsx)(k.a,{size:"small",style:{width:X},className:"tag-input",value:I,onChange:L,onBlur:R,onPressEnter:Y},"link_input_".concat(e.id)):Object(a.jsx)("a",{href:c,target:"_Blank",rel:"noreferrer",children:Object(a.jsxs)(v.a,{className:"links__tag",children:[Object(a.jsx)(T.a,{}),"\xa0\xa0",W(A,_),Object(a.jsx)(Q.a,{onClick:function(e){V(A),E(!0),e.preventDefault()}})]},"pic")})]})]})}),E=function(e){var t=Object(s.useState)(350),n=Object(p.a)(t,2),c=n[0],i=n[1],r=Object(s.useState)(!0),o=Object(p.a)(r,2),l=o[0],u=o[1],j=e.page.videourl?e.page.videourl.split("=")[1]:"",b={height:c-124,width:c-50,playerVars:{autoplay:0}};Object(s.useEffect)((function(){g(l)}),[l]);var g=function(e){i(e?350:600),u(e)};return Object(a.jsxs)(h.a,{title:Object(a.jsxs)("div",{children:[l?Object(a.jsx)(m.a,{onClick:function(){return g(!1)}}):Object(a.jsx)(O.a,{onClick:function(){return g(!0)}}),"\xa0\xa0",e.page.song.toUpperCase()]}),placement:"right",closable:!0,onClose:function(){u(!0),e.setDrawerVisible(!1)},visible:e.drawerVisible,width:c,children:[e.page.videourl?Object(a.jsx)(A.a,{videoId:j,opts:b}):Object(a.jsx)("img",{src:e.page.picurl,className:"Page-drawer__artwork",alt:"pic_missing"}),Object(a.jsx)(f.a,{orientation:"left",plain:!0,children:Object(a.jsx)("span",{className:"Page-drawer__diviser",children:"Tags"})}),Object(a.jsx)(B,{tags:e.page.tags,id:e.page.id,setTagsMissing:e.setTagsMissing}),Object(a.jsx)(f.a,{}),Object(a.jsx)(M,{tabs:e.page.link,video:e.page.videourl,pic:e.page.picurl,id:e.page.id,setTabsMissing:e.setTabsMissing,setVideoMissing:e.setVideoMissing,setPicMissing:e.setPicMissing,isDrawerFold:l}),Object(a.jsx)(f.a,{orientation:"left",plain:!0,children:Object(a.jsx)("span",{className:"Page-drawer__diviser",children:"Lyrics"})}),Object(a.jsx)(S,{artist:e.page.artist,song:e.page.song})]})},G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACwklEQVRoge1Yy47aMBQ9thM2hVlTiSXsqFCnoxZWsIAvGPUDRl2OxKj9oOkPVLMHNkFQIbWqKiQ+AXXYkxXCdTfjNBC/SGCmjxzJIvjca9+Tex07AXLkyJHjr4Pv+5993xd7bXIs/hAQE9ntdl8QQj4CeAmAyv4gCJT2nU4HQgiMx2Ml3263QQgx+sfAAXwnhFwNh8OFLkbPJIAQcgvglYqrVCo7/5fLJTjnEEIYeUKIlt8DA3AhhLgF8DqVAADnAPD28hLPy+WoMwgCMMYSxu/7fQDAdDpV8h9ubgAAk8lEyfevr6PrH/f3+HR3F8WQVgAFgGq1miQoTfQ9KxaPxtdqNXmZVBqDTQAAoHR2luhTBRC3y8q7IrUAVQnE7bLyrnASoLpbtr6svCv+XwGqEojbZeVd8e9nQAjhfLfidll5Obfc+HRwEvBUGTipgMdYA/JYYoJRgBDiyTNgE/HHl5ANqTPwWCWUOQOqgQFgu92iUCgAADabTcIuK++K1AJms5nRLivvCicPSulOazabCZtWq3U0XjYX2N7IQAhJ1OtgMAAANBoNcM6xWCyUfPnhJWi1Win5er0Oxhjm87lx/tQCbINITsd7nhfZpfG3BQ84ZkAHSqnxKaF60uz7m0rl5BmQAtJmQAo4WQZsg9gyIAWY/G0ZsCGzABNsJcQYO70A00AywCwlxBhzClQHJwE62Ca3lZDneak2r50xXIxMGTAtcluGZAmdPAO6uyQF6HiZAZP/Ibuucg4XI1OAnPNMAmwL2QYnAbqtXmZAx0sBJp5SquVdYBPwEwD1fR/F2HdLAAjDMBKg4tfrdSTA8zyUSiWlP6VU6R+GobzkpgCNq6fX630FcGGyAX6/eOy3nYli5x7bGWgPX0aj0RsdaTsLXT18nz+H4StxPBgZuEpA/NcBHMA3Qsg7V4ccOXLkyHEwfgGWMvrsH43YhwAAAABJRU5ErkJggg==",D=n(189),I=(n(174),function(e){var t=e.isPiano,n=e.front,s=function(e){console.log("click",e)};return Object(a.jsx)("div",{className:"piano",id:"piano",children:n?t&&Object(a.jsx)(D.a,{placement:"bottomRight",title:"Play this on keys!",children:Object(a.jsx)("img",{className:"piano__img",src:G,alt:G})}):t?Object(a.jsx)(D.a,{placement:"right",title:"Not for piano?",children:Object(a.jsx)("img",{onClick:function(){return s(!1)},className:"piano__img clickable",src:G,alt:G})}):Object(a.jsx)(D.a,{placement:"right",title:"This is for piano!",children:Object(a.jsx)("img",{onClick:function(){return s(!0)},className:"piano__img clickable grey",src:G,alt:G})})})}),V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAGMElEQVRIic2WcUwTeRbHv9PZUlkQhoIlYksVrqVQI62MtMVetASwK8ET1pPj/rgIa2qjGzdssgmbmPVIzHnrxsScqFvPhMQ9sicGTTTxThBI2hottNCeQSttIKyglFarhAqFMrN/3NEt4N0Bu8nuSyb5/b7z3vv83nu/TAb4mYz4fw52uz2bYZhfv3r1KjcYDIoEAsFgcnJyL4Bumqbf/qRglmU5ZrP50K1bt5osFkv869evQZIkuFwuZmdnwTAMZDIZ9Hp9T0FBwe9UKtXwjwbb7fb3Hzx4YD9//nxueno64uPj8fbtWzAMA4qikJGRAQ6HA7/fj8HBQWzevBlGo/GTioqKv6wGTMZuBgYG4u7evTt86dKlLQqFAl6vF5mZmaxWq32Wk5MTmJ6epsxmM5GSkoLU1FRkZmYiGAzi5s2bH1y4cIF3/fr1zjVVfPXq1b83NjZWq1Qq2Gw21NfXT6tUKuWOHTueAkB3d/e6Z8+etZ06dWpvfn4+UlJSAAAvXrxAIBDA6dOny3bv3t0BAE6nc1NnZ2e7x+P5lVwu/5dGo/mApunAshO4XC7B3r172f3797MSiYTdtGkTm5WVxVZWVjLXrl37U6xvc3PzP7Kzs9nDhw+zBoOBNRgMrFqtZhsaGqZYliUA4OTJk8G8vDx2z549rFQqZc+cOfNdbA7OwmJ8fPyo1+tFWloaioqKUF5ejpKSEszMzBCNjY2fd3R0/GHBV6vV7tfr9XMejyeaKDc3F21tbQlms/m3fX19G+7du0fRNA2xWAylUonu7m6Rx+PhLQP39fX9ns/ng8PhgMeLvodIJEJycjLMZvNXC5pEIgnv27fvi7Gxsagfl8sFRVGw2+0nGIZ5LRKJWJ/PBwCYmJiAUCicl0gk4WXgQCCQvm7dumUjAIDU1FSMjIykxWobN240bdmyBZOTk1EtLS0NAwMDeQUFBZHKysrPAcBqtSIxMRFVVVUfxca/t7BITEycnJmZSXoXOBQKQSwWR2K1bdu2BY8dOxb2eDy8pKR/h23YsAFer5fs6enhV1dXf+l0Ov8WiUTkkUjEpVarfbHx0Yo1Gs2fg8EgpqenF0EjkQhGR0dRVFT0zdIDURQ1GQ5Huwcej4c3b96Aw+GkAYBCoRijabp9KXQRWK/XXzh69Ohjm82Gp0+fYnx8HB6PBxaLBXV1dRMZGRnGpcFxcXHTkcgPjSAIAvPz8yBJks+yLKejo+Njk8nU0dnZWbtw2xfsvdjN8ePHtwqFwpMWi+Wz58+fx4vF4rDRaPyrQCD4VKfTLWo1AIRCoWQul7tIIwgCDMNMmUwm89mzZ3cmJSUhFAqVNDQ0VACoivotTbYaq62tjfh8PlIoFAIAZmdn4Xa7ce7cOemJEycG+Xw+KIrCxMQESJJkq6uruQcPHpwHYlq9WnM4HNv6+/vJ9PT0qOb3+5GTk8MA8BHE4pqW7tcMHhoa+iQcDiO21S9fvoRUKh1Rq9WTVVVVFqfTCYfDAbfbjYqKiraFaoElM16pWa3W9SaT6ZBYLI5qDMPA7/dDq9X+EQCMRuNuuVxuePLkyYcymeybXbt2XY3NsSbw2NjYuYcPH3J0Ol1UGxoaQnFx8XxCQsK3AEAQBAPg6/88y2zVrXY4HOqmpqa6vLy8qBYOhzE6OooDBw7U0zQ9t5I8qwK7XC5Bc3OzORKJYOFSsSwLm82GI0eOjJSVlTWtNNeKwTabLbW1tXWoq6uLu3Xr1kXQ8vLysEaj2U4QBLvSfCuacU9Pj+j27dsDN27cSNi5cycIgsDc3Bx6e3tRWlo6W1NTI6Vp+tVKocAKPiBWq7X08uXL/+zv7+cUFhaCJEkEAgE8evQItbW1vpKSEkVhYeH4aqD/E+xyuRKcTmfLxYsXf8Pj8SCTyTA1NQW3243169fDYDC0KBSKOrlcPrta6H8F379//8OWlpZv29vbufn5+SAIAsPDwyAIAjU1NYM6na5y+/btj9cCfCfYZrNJrVbr3StXrmxmWRZ8Ph+BQABZWVkoLS19XFxcfEipVPb+GOAycGtr69k7d+7Ud3V1ERRFITs7G0ql8jlN018LBIJL7/xD/CnAdru9DMD7AAIkSfri4uJG1jq/X7R9D/ySe+doh+SQAAAAAElFTkSuQmCC",_=(n(176),function(e){var t=e.isBass,n=e.front,s=function(e){console.log("click",e)};return Object(a.jsx)("div",{className:"bass",id:"piano",children:n?t&&Object(a.jsx)(D.a,{placement:"bottomRight",title:"Play this on bass!",children:Object(a.jsx)("img",{className:"bass__img",src:V,alt:V})}):t?Object(a.jsx)(D.a,{placement:"right",title:"Not for bass?",children:Object(a.jsx)("img",{onClick:function(){return s(!1)},className:"bass__img clickable",src:V,alt:V})}):Object(a.jsx)(D.a,{placement:"right",title:"This is for bass!",children:Object(a.jsx)("img",{onClick:function(){return s(!0)},className:"bass__img clickable grey",src:V,alt:V})})})}),X=n(195),F=(n(177),function(e){var t=Object(s.useState)(e.checked),n=Object(p.a)(t,2),c=n[0],i=n[1],r=(e.isVisitor,function(t){!function(t){function n(){return(n=Object(u.a)(l.a.mark((function t(n){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook/"+e.id,method:"PATCH",data:{checked:n}});case 2:if(!(200!==(a=t.sent).status&201!==a.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,a.data;case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return n.apply(this,arguments)})(t).then((function(e){})).catch((function(e){console.log("error",e.message)}))}(t),i(t)});return Object(a.jsx)("div",{className:"CheckAdd",id:"checkAdd",children:c?Object(a.jsx)(D.a,{placement:"top",title:"Click to mark this song as unknown.",children:Object(a.jsx)(X.a,{onClick:function(){return r(!1)},className:"CheckAdd__ico clickable"})}):Object(a.jsx)(D.a,{placement:"top",title:"Click to mark this song as known.",children:Object(a.jsx)(X.a,{onClick:function(){return r(!0)},className:"CheckAdd__ico clickable grey_check"})})})}),L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABhklEQVRoge3ZsUsCYRjH8d/jhaQmlkuLf0FBU3SGBGpDm1vQ1NAQNNQU1ChNQZAEDTU1NLW3ieFwELa1tNRYQwRJ2ImEd09Di0SJD93xGjyf8e7e532/cDcdoJT610i6oJ23M2xxhYElAMmAztEipmrXwm6q2riXLBQFtPN2xrf4FkBadLzBvUbYmolfXT8NuiAimc4WVxDe4QEg7cM7lCyQBXy9NuEi2R6iAAT3zveTkjwsDRg6GmCaBpimAaZpgGkaYJoGmKYBpmmAaRpgmgaYpgGmaYBpGmBaWAEM4NInWiCfZkE4B+CFsdFIwPM+QLhgpv1krXHXc331LT+/Z1n+JsDrAEaD2lD0g+N9cY5/udUC6Czi4SBebzz2n2FPMvEGAVtgTPz0zFjtZuBz/TXgmQknXid6NO44Tcmsl1wuGRvtrgG8DSDTey/0ACI8MNNxwoudUr3ekcz4jpeno24zsQLGDoApQBYg4hZtxy1kS1wO/uPnMiJuIVtyi7YT9Gyl1BD7BGkmaI4lwsjMAAAAAElFTkSuQmCC",R=(n(178),function(e){var t=function(t){e.setIsBookmarked(t),function(t){function n(){return(n=Object(u.a)(l.a.mark((function t(n){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook/"+e.id,method:"PATCH",data:{bookmark:n}});case 2:if(!(200!==(a=t.sent).status&201!==a.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,a.data;case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return n.apply(this,arguments)})(t).then((function(e){var t=e;console.log("Sucess",t)})).catch((function(e){console.log("error",e.message)}))}(t)},n=e.isBookmarked;return Object(a.jsx)("div",{className:"bookmark",id:"bookmark",children:n?Object(a.jsx)(D.a,{placement:"right",title:"Delete the bookmark.",children:Object(a.jsx)("img",{onClick:function(){return t(!1)},className:"bookmark__img clickable",src:L,alt:L})}):Object(a.jsx)(D.a,{placement:"right",title:"Bookmark this.",children:Object(a.jsx)("img",{onClick:function(){return t(!0)},className:"bookmark__img clickable bookmark__grey",src:L,alt:L})})})}),Y=(n.p,n(179),function(e){var t=Object(s.useState)(e.page.bookmark),n=Object(p.a)(t,2),c=n[0],i=n[1],r=Object(s.useState)(!1),o=Object(p.a)(r,2),l=o[0],u=o[1],j=Object(s.useState)("null"===e.page.link),b=Object(p.a)(j,2),g=b[0],d=b[1],A=Object(s.useState)(null===e.page.tags),h=Object(p.a)(A,2),f=h[0],m=h[1],O=Object(s.useState)("null"===e.page.videourl),x=Object(p.a)(O,2),k=x[0],v=x[1],w=Object(s.useState)("null"===e.page.picurl),N=Object(p.a)(w,2),C=N[0],B=N[1],P=Object(s.useState)(!!(g||f||k||C)),y=Object(p.a)(P,2),S=y[0],T=y[1];Object(s.useEffect)((function(){T(!!(g||f||k||C))}),[g,f,k,C]);var Q=function(){u(!0)},M=e.page.title.replace("-","/").replace(/ /g,""),G=M.length>23?"".concat(M.slice(0,23),"..."):M;return Object(a.jsxs)("div",{className:"Page__main",children:[S&&Object(a.jsxs)("div",{className:"Page__notab",onClick:Q,children:[Object(a.jsx)("div",{className:"Page__notab-text",children:function(){var e=[];if(S)return!0===g&&e.push("TABS MISSING"),!0===f&&e.push("HASHTAGS MISSING"),!0===k&&e.push("VIDEO MISSING"),!0===C&&e.push("PICTURE MISSING"),e.map((function(e,t){return Object(a.jsxs)("div",{children:[e," ",Object(a.jsx)("br",{})]},t)}))}()}),Object(a.jsx)("div",{className:"Page__notab Page__notab-background"})]}),Object(a.jsx)("div",{className:"Page__opendrawer",onClick:Q,children:Object(a.jsx)("img",{src:e.page.picurl,alt:"pic_missing",className:"Page__artwork"})}),Object(a.jsx)(R,{id:e.page.id,setIsBookmarked:i,isBookmarked:c}),Object(a.jsx)("div",{className:"Page__title",children:G}),Object(a.jsxs)("div",{className:"Page__icons",children:[Object(a.jsx)(I,{front:!0,isPiano:e.page.piano}),Object(a.jsx)(_,{front:!0,isBass:e.page.bass})]}),Object(a.jsx)("div",{className:"Page__actionicon",children:Object(a.jsx)(F,{isVisitor:!1,checked:e.page.checked,id:e.page.id})}),Object(a.jsx)(E,{page:e.page,setDrawerVisible:u,drawerVisible:l,setTabsMissing:d,setTagsMissing:m,setVideoMissing:v,setPicMissing:B})]},e.page.id)}),W=(n(180),function(e){Object(g.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={songbookPages:[],isLoading:!0},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.loadPages()}},{key:"loadPages",value:function(){var e=this;function t(){return(t=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,t.data;case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(t){var n=t;e.setState({songbookPages:n}),e.setState({isLoading:!1})})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){var e=this.state.songbookPages.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(Y,{page:e})},e.id)}));return Object(a.jsx)("div",{style:{margin:30},children:this.state.isLoading?Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"book-loader",alt:"Loading"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{style:{fontSize:18},children:"Loading ... "})]}):Object(a.jsx)("div",{className:"Book__main",children:e})})}}]),n}(s.Component)),q=(n(181),function(){return Object(a.jsxs)("div",{className:"Footer__Main",children:["Songbook by ",Object(a.jsx)("a",{href:"http://www.clementvanstaen.com",target:"_blank",rel:"noopener noreferrer",children:"Cl\xe9ment van Staen"}),", 2020"]})});var U=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(W,{})}),Object(a.jsx)(q,{})]})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.64c53a8c.chunk.js.map