(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),o=r(a("XEEL")),s=r(a("uDP2")),l=r(a("j8BX")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,m=b&&window.IntersectionObserver,h=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function O(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var S=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+c+o+s+a+r+t+n+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(N,(0,l.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},N=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var I=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&m&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=S(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,m=e.durationFadeIn,h=e.Tag,O=e.itemProp,j=e.loading,S=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,B=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:I?1:0,transition:B?"opacity "+m+"ms":"none"},s),L="boolean"==typeof b?"lightgray":b,z={transitionDelay:m+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},B&&z,{},s,{},f),k={title:t,alt:this.state.isVisible?"":a,style:C,className:A,itemProp:O};if(p){var V=p,P=V[0];return c.default.createElement(h,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(h,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),L&&c.default.createElement(h,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},B&&z)}),P.base64&&c.default.createElement(x,{src:P.base64,spreadProps:k,imageVariants:V,generateSources:v}),P.tracedSVG&&c.default.createElement(x,{src:P.tracedSVG,spreadProps:k,imageVariants:V,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(V),c.default.createElement(N,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:j,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:a,title:t,loading:j},P,{imageVariants:V}))}}))}if(g){var Q=g,T=Q[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete M.display,c.default.createElement(h,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},L&&c.default.createElement(h,{title:t,style:(0,l.default)({backgroundColor:L,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},B&&z)}),T.base64&&c.default.createElement(x,{src:T.base64,spreadProps:k,imageVariants:Q,generateSources:v}),T.tracedSVG&&c.default.createElement(x,{src:T.tracedSVG,spreadProps:k,imageVariants:Q,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(Q),c.default.createElement(N,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:j,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:a,title:t,loading:j},T,{imageVariants:Q}))}}))}return null},t}(c.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var B=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});I.propTypes={resolutions:B,sizes:R,fixed:d.default.oneOfType([B,d.default.arrayOf(B)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var L=I;t.default=L},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=(a("0mN4"),a("wTIg")),o=a("zOvV"),s=a("Wbzz"),l=a("9eSz"),c=a.n(l),d=(a("2Spj"),a("9VmF"),a("Tze0"),a("KKXr"),a("DNiP"),a("pIFo"),a("bWfx"),a("XfO3"),a("HEwt"),a("a1Th"),a("h7Nl"),a("LK8F"),a("V+eJ"),a("8+KV"),a("0l/t"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("HAE/"),a("rE2o"),a("ioFf"),a("7O5W")),u=a("17x9"),f=a.n(u);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){p(e,t,a[t])}))}return e}function b(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=!1;try{y=!0}catch(k){}function O(e){return null===e?null:"object"===A(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function E(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?p({},e,t):{}}function v(e){var t=e.icon,a=e.mask,r=e.symbol,i=e.className,n=e.title,o=O(t),s=E("classes",[].concat(m(function(e){var t,a=e.spin,r=e.pulse,i=e.fixedWidth,n=e.inverse,o=e.border,s=e.listItem,l=e.flip,c=e.size,d=e.rotation,u=e.pull,f=(p(t={"fa-spin":a,"fa-pulse":r,"fa-fw":i,"fa-inverse":n,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(c),null!=c),p(t,"fa-rotate-".concat(d),null!=d),p(t,"fa-pull-".concat(u),null!=u),p(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(e)),m(i.split(" ")))),l=E("transform","string"==typeof e.transform?d.c.transform(e.transform):e.transform),c=E("mask",O(a)),u=Object(d.a)(o,g({},s,l,c,{symbol:r,title:n}));if(!u)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",o),null;var f=u.abstract,A={};return Object.keys(e).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(A[t]=e[t])})),j(f[0],A)}v.displayName="FontAwesomeIcon",v.propTypes={border:f.a.bool,className:f.a.string,mask:f.a.oneOfType([f.a.object,f.a.array,f.a.string]),fixedWidth:f.a.bool,inverse:f.a.bool,flip:f.a.oneOf(["horizontal","vertical","both"]),icon:f.a.oneOfType([f.a.object,f.a.array,f.a.string]),listItem:f.a.bool,pull:f.a.oneOf(["right","left"]),pulse:f.a.bool,rotation:f.a.oneOf([90,180,270]),size:f.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:f.a.bool,symbol:f.a.oneOfType([f.a.bool,f.a.string]),title:f.a.string,transform:f.a.oneOfType([f.a.string,f.a.object]),swapOpacity:f.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var j=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var i=(a.children||[]).map((function(a){return e(t,a)})),n=Object.keys(a.attributes||{}).reduce((function(e,t){var r=a.attributes[t];switch(t){case"class":e.attrs.className=r,delete a.attributes.class;break;case"style":e.attrs.style=function(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,r=t.indexOf(":"),i=h(t.slice(0,r)),n=t.slice(r+1).trim();return i.startsWith("webkit")?e[(a=i,a.charAt(0).toUpperCase()+a.slice(1))]=n:e[i]=n,e}),{})}(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[h(t)]=r}return e}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,l=b(r,["style"]);return n.attrs.style=g({},n.attrs.style,s),t.apply(void 0,[a.tag,g({},n.attrs,l)].concat(m(i)))}.bind(null,i.a.createElement),S=a("p/d+"),w=a("qKvR"),x=Object(n.a)("div",{target:"eoinz7t0"})("display:inline;margin-right:18px;font-size:20px;a{padding:8px;}a,a:visited{color:black;border:3px solid ",S.f.colours.accent,";text-decoration:none;}a:hover,a:active{color:",S.f.colours.accent,";}"),N=Object(n.a)("div",{target:"eoinz7t1"})({name:"o8u0d7",styles:"width:100%;max-width:400px;"}),I=Object(n.a)("div",{target:"eoinz7t2"})({name:"178yklu",styles:"margin-top:24px;"}),B=Object(n.a)("a",{target:"eoinz7t3"})({name:"lvyu5j",styles:"margin-right:10px;"}),R=function(){var e=o.data,t=e.site.siteMetadata.author;return Object(w.d)(S.a,null,Object(w.d)(S.e,null,Object(w.d)(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:t+" with dog on top of a mountain"})),Object(w.d)(N,null,Object(w.d)("h1",null,"Natalie"),Object(w.d)(x,null,Object(w.d)(s.Link,{to:"/about"},"About")),Object(w.d)(x,null,Object(w.d)(s.Link,{to:"/blog"},"Blog")),Object(w.d)(I,null,Object(w.d)(B,{target:"_blank",href:"https://www.linkedin.com/in/smithnm/"},Object(w.d)(v,{icon:["fab","linkedin"],style:{color:S.f.colours.accent}})),Object(w.d)(B,{href:"mailto:nataliemegans@gmail.com"},Object(w.d)(v,{icon:"envelope",style:{color:S.f.colours.accent}})),Object(w.d)(B,{target:"_blank",href:"https://twitter.com/natalie_megan"},Object(w.d)(v,{icon:["fab","twitter"],color:S.f.colours.accent})))))},L=a("Bl7J"),z=a("vrFN");a.d(t,"pageQuery",(function(){return C}));t.default=function(e){var t=e.data,a=e.location,r=t.site.siteMetadata.title;return Object(w.d)(L.a,{location:a,title:r},Object(w.d)(z.a,{title:"Natalie Smith"}),Object(w.d)(R,null))};var C="1623555389"},zOvV:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgP/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgAB/9oADAMBAAIQAxAAAAGluVthpiBzTO6dM0VO5Nf/xAAdEAACAgIDAQAAAAAAAAAAAAAAAQMRAhMSIjJB/9oACAEBAAEFAqKKN5jPZuOpjHyTgyF6+SNp/wD/xAAXEQEAAwAAAAAAAAAAAAAAAAAAEBES/9oACAEDAQE/AYpl/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwGNmn//xAAaEAACAwEBAAAAAAAAAAAAAAAAARAxMhEh/9oACAEBAAY/AptmjRXTuS0xR4f/xAAdEAEAAgEFAQAAAAAAAAAAAAABABFRECExQbHB/9oACAEBAAE/IRwenZw0Yt0b0RP1m7Lw7lz0ThdLBQyl4Yn/2gAMAwEAAgADAAAAEIARTf/EABgRAAMBAQAAAAAAAAAAAAAAAAABESFR/9oACAEDAQE/EMlhnBIJWf/EABcRAQEBAQAAAAAAAAAAAAAAAAEAURH/2gAIAQIBAT8QR247JyXt/8QAHRABAAICAwEBAAAAAAAAAAAAAQARQVEhMXGhsf/aAAgBAQABPxCbQloqpsEaCMCEilxDjdj1ifDG0nwl8mwtE8xKRbB2V/YBVgJHIcEMoBy6OWf/2Q==","width":400,"height":533,"src":"/static/35780ff23e55bf0afd0d5a3cfea022c2/1a903/nat_betty.jpg","srcSet":"/static/35780ff23e55bf0afd0d5a3cfea022c2/1a903/nat_betty.jpg 1x,\\n/static/35780ff23e55bf0afd0d5a3cfea022c2/f5db2/nat_betty.jpg 1.5x,\\n/static/35780ff23e55bf0afd0d5a3cfea022c2/b17c1/nat_betty.jpg 2x"}}},"site":{"siteMetadata":{"author":"Natalie Smith"}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-b7cbeefc6d24750e4a48.js.map