(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{31:function(e,a,l){e.exports=l.p+"static/media/slack_white.a6803885.png"},32:function(e,a,l){e.exports=l.p+"static/media/slack_rgb.5c07c2ac.png"},33:function(e,a,l){},37:function(e,a,l){"use strict";l.r(a);var t=l(25),n=l(26),c=l(35),s=l(27),i=l(36),o=l(0),r=l.n(o),m=l(28),_=l.n(m),u=l(31),k=l.n(u),d=l(32),E=l.n(d),b=(l(33),function(e){function a(){var e,l;Object(t.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(l=Object(c.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={rgbClassName:["nav__slack",".up"],whiteClassName:["nav__slack","fixed"],mobileOpen:!1},l.componentDidMount=function(){window.addEventListener("scroll",_.a.throttle(l.handleScroll,20)),window.addEventListener("resize",_.a.throttle(l.handleResize,50))},l.componentWillUnmount=function(){l.handleScroll(),window.removeEventListener("scroll",_.a.throttle(l.handleScroll,20)),window.removeEventListener("resize",_.a.throttle(l.handleResize,50))},l.handleResize=function(){window.innerWidth>770&&(l.setState({mobileOpen:!1}),document.querySelector("body").classList.remove("stop-scroll"))},l.setMobile=function(){document.querySelector("body").classList.add("stop-scroll"),l.setState({mobileOpen:!0})},l.handleScroll=function(){var e=["nav__slack"],a=["nav__slack","fixed"];window.scrollY>30?(a=a.concat("down"),e=e.concat("up")):(a=a.concat("up"),e=e.concat("down")),l.setState({whiteClassName:a,rgbClassName:e})},l}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(o.Fragment,null,r.a.createElement("div",{className:"nav__wrapper"},r.a.createElement("nav",{className:this.state.whiteClassName.join(" "),ref:function(a){return e.whiteNav=a}},r.a.createElement("img",{src:E.a,alt:"slack white logo",className:"slack__icon slack__icon--white"}),r.a.createElement("h1",null,"Developers"),r.a.createElement("ul",{className:"slack__list"},r.a.createElement("li",null,r.a.createElement("a",{className:"slack__link"},"Documentation")),r.a.createElement("li",null,r.a.createElement("a",{className:"slack__link"},"App Directory")),r.a.createElement("li",null,r.a.createElement("a",{className:"slack__link slack__btn"},"Get Started")),r.a.createElement("li",null,r.a.createElement("a",{className:"slack__link menu__mobile menu--white",onClick:this.setMobile},"Menu")))),r.a.createElement("nav",{className:this.state.rgbClassName.join(" "),ref:function(a){return e.rgbNav=a}},r.a.createElement("img",{src:k.a,alt:"slack rgb logo",className:"slack__icon slack__icon--rgb"}),r.a.createElement("h1",null,"Developers"),r.a.createElement("ul",{className:"slack__list"},r.a.createElement("li",null,r.a.createElement("a",{className:"slack__link"},"Documentation")),r.a.createElement("li",null,r.a.createElement("a",{className:"slack__link"},"App Directory")),r.a.createElement("li",null,r.a.createElement("a",{className:"slack__link slack__btn"},"Get Started")),r.a.createElement("li",null,r.a.createElement("a",{className:"slack__link menu__mobile menu--rgb",onClick:this.setMobile},"Menu")))),r.a.createElement("nav",{className:["slack__mobile",this.state.mobileOpen?"mobile-open":""].join(" ")},r.a.createElement("img",{src:k.a,alt:"slack white logo",className:"slack__icon slack__mobile--logo"}),r.a.createElement("a",{className:"slack__mobile--close",onClick:function(){e.setState(function(e){return{mobileOpen:!1}}),document.querySelector("body").classList.remove("stop-scroll")}},"X"),r.a.createElement("ul",{className:"slack__list--mobile"},r.a.createElement("li",null,r.a.createElement("a",{className:"slack__mobile--link"},"Documentation")),r.a.createElement("li",null,r.a.createElement("a",{className:"slack__mobile--link"},"App Directory")),r.a.createElement("li",null,r.a.createElement("a",{className:"slack__mobile--link"},"Get Started"))))))}}]),a}(o.Component));a.default=b}}]);
//# sourceMappingURL=2.82d001bc.chunk.js.map