(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{21:function(e,t,n){},23:function(e,t,n){var r=n(24);e.exports=h,e.exports.parse=i,e.exports.compile=function(e,t){return c(i(e,t))},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(e,t){for(var n,r=[],i=0,a=0,c="",s=t&&t.delimiter||"/";null!=(n=o.exec(e));){var p=n[0],f=n[1],h=n.index;if(c+=e.slice(a,h),a=h+p.length,f)c+=f[1];else{var d=e[a],m=n[2],y=n[3],v=n[4],b=n[5],g=n[6],x=n[7];c&&(r.push(c),c="");var w=null!=m&&null!=d&&d!==m,R="+"===g||"*"===g,E="?"===g||"*"===g,j=n[2]||s,O=v||b;r.push({name:y||i++,prefix:m||"",delimiter:j,optional:E,repeat:R,partial:w,asterisk:!!x,pattern:O?l(O):x?".*":"[^"+u(j)+"]+?"})}}return a<e.length&&(c+=e.substr(a)),c&&r.push(c),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"===typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,o){for(var i="",c=n||{},u=(o||{}).pretty?a:encodeURIComponent,l=0;l<e.length;l++){var s=e[l];if("string"!==typeof s){var p,f=c[s.name];if(null==f){if(s.optional){s.partial&&(i+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(r(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!t[l].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(p)+"`");i+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?encodeURI(f).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):u(f),!t[l].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+p+'"');i+=s.prefix+p}}else i+=s}return i}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function s(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function f(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<e.length;c++){var l=e[c];if("string"===typeof l)a+=u(l);else{var f=u(l.prefix),h="(?:"+l.pattern+")";t.push(l),l.repeat&&(h+="(?:"+f+h+")*"),a+=h=l.optional?l.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var d=u(n.delimiter||"/"),m=a.slice(-d.length)===d;return o||(a=(m?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&m?"":"(?="+d+"|$)",s(new RegExp("^"+a,p(n)),t)}function h(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return s(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],t,n).source);return s(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):function(e,t,n){return f(i(e,n),t,n)}(e,t,n)}},24:function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},38:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),c=n(3),u=n.n(c),l=n(2),s=n.n(l),p=n(23),f=n.n(p),h={},d=0,m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];"string"===typeof t&&(t={path:t});var r=t,o=r.path,i=r.exact,a=void 0!==i&&i,c=r.strict,u=void 0!==c&&c,l=r.sensitive;if(null==o)return n;var s=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=h[n]||(h[n]={});if(r[e])return r[e];var o=[],i={re:f()(e,o,t),keys:o};return d<1e4&&(r[e]=i,d++),i}(o,{end:a,strict:u,sensitive:void 0!==l&&l}),p=s.re,m=s.keys,y=p.exec(e);if(!y)return null;var v=y[0],b=y.slice(1),g=e===v;return a&&!g?null:{path:o,url:"/"===o&&""===v?"/":v,isExact:g,params:m.reduce(function(e,t,n){return e[t.name]=b[n],e},{})}},y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var b=function(e){return 0===o.a.Children.count(e)},g=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=v(this,e.call.apply(e,[this].concat(i))),r.state={match:r.computeMatch(r.props,r.context.router)},v(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{router:y({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}},t.prototype.computeMatch=function(e,t){var n=e.computedMatch,r=e.location,o=e.path,i=e.strict,a=e.exact,c=e.sensitive;if(n)return n;u()(t,"You should not use <Route> or withRouter() outside a <Router>");var l=t.route,s=(r||l.location).pathname;return m(s,{path:o,strict:i,exact:a,sensitive:c},l.match)},t.prototype.componentWillMount=function(){a()(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),a()(!(this.props.component&&this.props.children&&!b(this.props.children)),"You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),a()(!(this.props.render&&this.props.children&&!b(this.props.children)),"You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")},t.prototype.componentWillReceiveProps=function(e,t){a()(!(e.location&&!this.props.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),a()(!(!e.location&&this.props.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),this.setState({match:this.computeMatch(e,t.router)})},t.prototype.render=function(){var e=this.state.match,t=this.props,n=t.children,r=t.component,i=t.render,a=this.context.router,c=a.history,u=a.route,l=a.staticContext,s={match:e,location:this.props.location||u.location,history:c,staticContext:l};return r?e?o.a.createElement(r,s):null:i?e?i(s):null:"function"===typeof n?n(s):n&&!b(n)?o.a.Children.only(n):null},t}(o.a.Component);g.propTypes={computedMatch:s.a.object,path:s.a.string,exact:s.a.bool,strict:s.a.bool,sensitive:s.a.bool,component:s.a.func,render:s.a.func,children:s.a.oneOfType([s.a.func,s.a.node]),location:s.a.object},g.contextTypes={router:s.a.shape({history:s.a.object.isRequired,route:s.a.object.isRequired,staticContext:s.a.object})},g.childContextTypes={router:s.a.object.isRequired};var x=g,w=n(6),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var j=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},O=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=E(this,e.call.apply(e,[this].concat(i))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!j(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,i=n.to;o?t.replace(i):t.push(i)}},E(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var i=this.context.router.history,a="string"===typeof t?Object(w.b)(t,null,null,i.location):t,c=i.createHref(a);return o.a.createElement("a",R({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(o.a.Component);O.propTypes={onClick:s.a.func,target:s.a.string,replace:s.a.bool,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired,innerRef:s.a.oneOfType([s.a.string,s.a.func])},O.defaultProps={replace:!1},O.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired,createHref:s.a.func.isRequired}).isRequired}).isRequired};var C=O,k=function(){var e=function(e){return e[0].toUpperCase().concat(e.slice(1))};return{concatComponentPath:function(t,n){return"".concat(t).concat(e(n),"/").concat(e(n))},capitalize:e}}(),T=(n(21),["slack","medium","github","twitter","facebook"]),_=Object(r.lazy)(function(){return Promise.all([n.e(4),n.e(2)]).then(n.bind(null,37))});t.default=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{path:"/slack",render:function(e){return o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null,"loading component")},o.a.createElement(_,null))}}),o.a.createElement("div",{className:"menu"},o.a.createElement("ul",{className:"menu__list"},T.map(function(e){return o.a.createElement("li",{key:e,className:"menu__link"},o.a.createElement(C,{to:"/".concat(e),className:"menu__link--".concat(e)},k.capitalize(e)))})),o.a.createElement("p",null,"Pick a brand to see its navbar created with CSS flexbox!")))}}}]);
//# sourceMappingURL=1.2ea37f98.chunk.js.map