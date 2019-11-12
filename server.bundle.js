!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=44)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n){e.exports=require("@babel/runtime/helpers/taggedTemplateLiteral")},function(e,n){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,n){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,n){e.exports=require("@babel/runtime/helpers/createClass")},function(e,n){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,n){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,n){e.exports=require("@babel/runtime/helpers/inherits")},function(e,n){e.exports=require("redux")},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("react-redux")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("webpack")},function(e,n){e.exports=require("react-router/Route")},function(e,n){e.exports=require("intl")},function(e,n){e.exports=require("redux-thunk")},function(e,n){e.exports=require("axios")},function(e,n){e.exports=require("@babel/runtime/regenerator")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("react-router/matchPath")},function(e,n){e.exports=require("react-router/Router")},function(e,n){e.exports=require("@babel/runtime/helpers/typeof")},function(e,n){e.exports=require("react-router/Switch")},function(e,n){e.exports=require("serialize-javascript")},function(e,n){e.exports=require("polished")},function(e,n){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,n){e.exports=require("react-helmet")},function(e,n){e.exports=require("express-http-proxy")},function(e,n){e.exports=require("helmet")},function(e,n){e.exports=require("connect-timeout")},function(e,n){e.exports=require("express-http-to-https")},function(e,n){e.exports=require("http")},function(e,n){e.exports=require("regenerator-runtime")},function(e,n){e.exports=require("regenerator-runtime/runtime")},function(e,n,t){const r=t(13),o=t(14),a=t(37),i=(t(38).BundleAnalyzerPlugin,t(39));e.exports={entry:["webpack-hot-middleware/client",r.resolve(__dirname,"./src/client")],output:{path:r.resolve(__dirname,"src/client"),filename:"bundle.js",publicPath:"/"},devtool:"cheap-inline-module-source-map",devServer:{hot:!0,inline:!0,port:3001},plugins:[new a,new o.HotModuleReplacementPlugin,new o.NamedModulesPlugin,new o.DefinePlugin({"process.env":{NODE_ENV:JSON.stringify("development"),WEBPACK:!0}})],mode:"development",module:{rules:[{enforce:"pre",test:/\.js$/,use:{loader:40,options:{formatter:i,eslintPath:41}},include:r.resolve(__dirname,"src")},{test:/\.js$/,use:{loader:"babel-loader",query:{presets:["@babel/preset-env","@babel/preset-react"],plugins:["@babel/proposal-class-properties"]}},include:r.resolve(__dirname,"src")}]},node:{__dirname:!1}}},function(e,n){e.exports=require("string-replace-webpack-plugin")},function(e,n){e.exports=require("webpack-bundle-analyzer")},function(e,n){e.exports=require("react-dev-utils/eslintFormatter")},function(e,n){e.exports=require("eslint-loader")},function(e,n){e.exports=require("eslint")},function(e,n){e.exports=require("webpack-dev-middleware")},function(e,n){e.exports=require("webpack-hot-middleware")},function(e,n,t){"use strict";t.r(n);var r=t(12),o=t.n(r),a=(t(13),t(9)),i=t(17),c=t.n(i),l=Object(a.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return n.type,e}}),s=t(18),u=t.n(s),p=function(e){return console.log(l),Object(a.createStore)(l,{},Object(a.applyMiddleware)(c.a.withExtraArgument(function(e){return u.a.create({baseURL:"".concat(process.env.HOST||"http://localhost:4000","/api"),headers:{cookie:e&&e.get("cookie")||""}})}(e))))},g=t(19),f=t.n(g),b=t(0),d=t.n(b),h=t(20),m=t(10),v=t(11),x=t(21),y=t.n(x),w=t(22),O=t.n(w).a.prototype.computeMatch,k=function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.some((function(n){var o=n.path?y()(t,n):r.length?r[r.length-1].match:O(t);return o&&(r.push({route:n,match:o}),n.routes&&e(n.routes,t,r)),o})),r},E=t(23),j=t.n(E),S=t(24),P=t.n(S),q=t(15),D=t.n(q),z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},C=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e?d.a.createElement(P.a,null,e.map((function(e,t){return"object"===j()(e.path)?e.path.map((function(r){return d.a.createElement(D.a,{key:e.key||t,path:r,exact:e.exact,strict:e.strict,render:function(t){return d.a.createElement(e.component,z({},t,n,{route:e}))}})})):[d.a.createElement(D.a,{key:e.key||t,path:e.path,exact:e.exact,strict:e.strict,render:function(t){return d.a.createElement(e.component,z({},t,n,{route:e}))}})]})).reduce((function(e,n){return e.concat(n)}),[])):null},T=t(25),_=t.n(T),R=t(3),F=t.n(R),N=t(4),I=t.n(N),M=t(5),A=t.n(M),L=t(6),B=t.n(L),H=t(7),W=t.n(H),G=t(8),K=t.n(G),$=t(1),V=t.n($),X=t(2),J=t.n(X);function U(){var e=J()(["\n    body, html {\n        margin: 0; padding: 0;\n        height: 100%;\n        overflow: hidden;\n        font-size: 34px;\n        color: white;\n        overflow: hidden;\n    }\n    body {\n        overflow-y: hidden;\n        overflow-x: hidden;\n    }\n    #root, #root > div {\n        height: 100%;\n        width: 100%;\n        background-color: black;\n        display: table;\n    }\n\n    .vertical-helper {\n        display: table-cell;\n        vertical-align: middle;\n    }\n\n    .content-scale {\n        margin: auto;\n        box-sizing: border-box;\n    }\n\n    .content {\n        width: ","px;\n        height: ","px;\n        transition: 1.2s;\n    }\n\n    $distance: 140px;\n\n    @keyframes fadeIn {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n\n\n"]);return U=function(){return e},e}var Y=Object($.createGlobalStyle)(U(),(function(e){return e.theme.width}),(function(e){return e.theme.height})),Q=t(26);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var ee={c:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(t,!0).forEach((function(n){F()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},{grey9:"#999",grey7:"#777",grey3:"#333",grey5:"#555",greyE:"#EEE",greyD:"#DDD",greyA:"#aaa",score:"#777",active:"#5e61ba",boost:"#524b9a",dark:"#2d215e",light:"#ededf7",wrong:"#dd161d",pale:"#cacae7",disabled:"#CCCCCC",info:"#f7c30c",snow:"#FBF9F9",white:"#FFFFFF",black:"black",facebook:"#4267b2",google:"#DB4437",correct:"#4bac09",incorrect:"#dd161d",play:"#7d44a5",playLight:Object(Q.lighten)(.35,"#7d44a5"),check:"#63c6bd",blackShadow1:"rgba(0, 0, 0, 0.1)",blackShadow2:"rgba(0, 0, 0, 0.2)",blackShadow3:"rgba(0, 0, 0, 0.3)",blackShadow35:"rgba(0, 0, 0, 0.35)",blackShadow4:"rgba(0, 0, 0, 0.4)",blackShadow5:"rgba(0, 0, 0, 0.5)",blackShadow7:"rgba(0, 0, 0, 0.7)",youtube:"#af1117"}),width:1420,height:720};function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(t,!0).forEach((function(n){F()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var re,oe=function(e){function n(){return I()(this,n),B()(this,W()(n).apply(this,arguments))}return K()(n,e),A()(n,[{key:"render",value:function(){var e=this.props,n=e.route;return null===e.user?null:d.a.createElement($.ThemeProvider,{theme:ee},d.a.createElement(b.Fragment,null,d.a.createElement(Y,null),C(n.routes)))}}]),n}(b.Component),ae={component:Object(m.withRouter)(Object(v.connect)((function(e){return{user:e.user?te({},e.user):null}}),{})(oe)),renderSeo:function(){}},ie=t(27),ce=t.n(ie);function le(){var e=J()(["\n    position: absolute;\n    top: 1120px;\n    left: 1340px;\n"]);return le=function(){return e},e}function se(){var e=J()(["\n    position: absolute;\n    top: ","px;\n    left: ","px;\n    img {\n        height: 130px;\n    }\n"]);return se=function(){return e},e}function ue(){var e=J()(["\n    position: absolute;\n    top: ","px;\n    left: ","px;\n    img {\n        height: 120px;\n    }\n"]);return ue=function(){return e},e}function pe(){var e=J()(["\n    position: absolute;\n    top: 305px;\n    left: 1150px;\n    z-index: 1;\n    img {\n        height: 270px;\n    }\n"]);return pe=function(){return e},e}function ge(){var e=J()(["\n    position: absolute;\n    top: -170px;\n    left: 80px;\n"]);return ge=function(){return e},e}function fe(){var e=J()(["\n    ","\n"]);return fe=function(){return e},e}function be(){var e=J()(["\n\n  background : -moz-linear-gradient(50% 100% 90deg,rgba(172, 1, 1, 1) 16.67%,rgba(157, 1, 31, 1) 18.13%,rgba(140, 0, 66, 1) 20.12%,rgba(126, 0, 93, 1) 22.14%,rgba(117, 0, 112, 1) 24.19%,rgba(111, 0, 123, 1) 26.28%,rgba(109, 0, 127, 1) 28.49%,rgba(105, 3, 125, 1) 29.46%,rgba(49, 42, 102, 1) 44.83%,rgba(13, 66, 88, 1) 56.25%,rgba(0, 75, 82, 1) 62.37%,rgba(0, 22, 24, 1) 82.62%,rgba(0, 0, 0, 1) 93.01%);\n  background : -webkit-linear-gradient(90deg, rgba(172, 1, 1, 1) 16.67%, rgba(157, 1, 31, 1) 18.13%, rgba(140, 0, 66, 1) 20.12%, rgba(126, 0, 93, 1) 22.14%, rgba(117, 0, 112, 1) 24.19%, rgba(111, 0, 123, 1) 26.28%, rgba(109, 0, 127, 1) 28.49%, rgba(105, 3, 125, 1) 29.46%, rgba(49, 42, 102, 1) 44.83%, rgba(13, 66, 88, 1) 56.25%, rgba(0, 75, 82, 1) 62.37%, rgba(0, 22, 24, 1) 82.62%, rgba(0, 0, 0, 1) 93.01%);\n  background : -webkit-gradient(linear,50% 100% ,50% 0% ,color-stop(0.1667,rgba(172, 1, 1, 1) ),color-stop(0.1813,rgba(157, 1, 31, 1) ),color-stop(0.2012,rgba(140, 0, 66, 1) ),color-stop(0.2214,rgba(126, 0, 93, 1) ),color-stop(0.2419,rgba(117, 0, 112, 1) ),color-stop(0.2628,rgba(111, 0, 123, 1) ),color-stop(0.2849,rgba(109, 0, 127, 1) ),color-stop(0.2946,rgba(105, 3, 125, 1) ),color-stop(0.4483,rgba(49, 42, 102, 1) ),color-stop(0.5625,rgba(13, 66, 88, 1) ),color-stop(0.6237,rgba(0, 75, 82, 1) ),color-stop(0.8262,rgba(0, 22, 24, 1) ),color-stop(0.9301,rgba(0, 0, 0, 1) ));\n  background : -o-linear-gradient(90deg, rgba(172, 1, 1, 1) 16.67%, rgba(157, 1, 31, 1) 18.13%, rgba(140, 0, 66, 1) 20.12%, rgba(126, 0, 93, 1) 22.14%, rgba(117, 0, 112, 1) 24.19%, rgba(111, 0, 123, 1) 26.28%, rgba(109, 0, 127, 1) 28.49%, rgba(105, 3, 125, 1) 29.46%, rgba(49, 42, 102, 1) 44.83%, rgba(13, 66, 88, 1) 56.25%, rgba(0, 75, 82, 1) 62.37%, rgba(0, 22, 24, 1) 82.62%, rgba(0, 0, 0, 1) 93.01%);\n  background : -ms-linear-gradient(90deg, rgba(172, 1, 1, 1) 16.67%, rgba(157, 1, 31, 1) 18.13%, rgba(140, 0, 66, 1) 20.12%, rgba(126, 0, 93, 1) 22.14%, rgba(117, 0, 112, 1) 24.19%, rgba(111, 0, 123, 1) 26.28%, rgba(109, 0, 127, 1) 28.49%, rgba(105, 3, 125, 1) 29.46%, rgba(49, 42, 102, 1) 44.83%, rgba(13, 66, 88, 1) 56.25%, rgba(0, 75, 82, 1) 62.37%, rgba(0, 22, 24, 1) 82.62%, rgba(0, 0, 0, 1) 93.01%);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr='#AC0101', endColorstr='#000000' ,GradientType=0)\";\n    background : linear-gradient(\n        0deg,\n        rgba(255, 255, 255, 1) 16.67%,\n        rgba(50, 1, 15, 1) 18.13%,\n        rgba(80, 0, 65, 1) 20.12%,\n        rgba(126, 0, 93, 1) 22.14%,\n        rgba(117, 0, 112, 1) 24.19%,\n        rgba(111, 0, 123, 1) 26.28%,\n        rgba(109, 0, 127, 1) 28.49%,\n        rgba(105, 3, 125, 1) 29.46%,\n        rgba(49, 42, 102, 1) 44.83%,\n        rgba(13, 66, 88, 1) 56.25%,\n        rgba(0, 75, 82, 1) 62.37%,\n        rgba(0, 22, 24, 1) 82.62%,\n        rgba(0, 0, 0, 1) 93.01%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000',endColorstr='#AC0101' , GradientType=0);\n\n    z-index: -2;\n    ","\n"]);return be=function(){return e},e}function de(){var e=J()(["\n    width: ","px;\n    height: ","px;\n    position: absolute;\n    left: -","px;\n    top: -","px;\n    img {\n        margin-left: ","px;\n    }\n"]);return de=function(){return e},e}process.env.WEBPACK?(re=window,window.on=window.addEventListener,window.off=window.removeEventListener,document):re={on:function(){},off:function(){}};var he=Object($.css)(de(),(function(e){return 5*e.theme.width}),(function(e){return 3*e.theme.height}),(function(e){return 2*e.theme.width}),(function(e){return e.theme.height}),(function(e){return e.theme.width})),me=V.a.div(be(),he),ve=V.a.div(fe(),he),xe=V.a.div(ge()),ye=V.a.div(pe()),we=V.a.div(ue(),780,2640),Oe=V.a.div(se(),740,1430),ke=V.a.div(le()),Ee=function(e){function n(){return I()(this,n),B()(this,W()(n).apply(this,arguments))}return K()(n,e),A()(n,[{key:"render",value:function(){return d.a.createElement(me,null,d.a.createElement("img",{src:"/images/stars.svg",alt:"stars"}))}}]),n}(b.Component),je=function(){return d.a.createElement(ye,null,d.a.createElement("img",{src:"/images/house.svg",alt:"house"}))},Se=function(e){function n(){return I()(this,n),B()(this,W()(n).apply(this,arguments))}return K()(n,e),A()(n,[{key:"render",value:function(){return d.a.createElement(ve,null,d.a.createElement("img",{src:"/images/landscape.svg",alt:""}),d.a.createElement(we,null,d.a.createElement("img",{src:"/images/decoration_moon.svg",alt:"moon"})),d.a.createElement(Oe,null,d.a.createElement("img",{src:"/images/decoration_snowflake.svg",alt:"snowflakes"})),d.a.createElement(ke,null,d.a.createElement("img",{src:"/images/decoration_trees.svg",alt:"trees"})))}}]),n}(b.Component),Pe=function(e){function n(){return I()(this,n),B()(this,W()(n).apply(this,arguments))}return K()(n,e),A()(n,[{key:"render",value:function(){return d.a.createElement(xe,null,d.a.createElement("img",{src:"/images/meteor.svg",alt:"meteor"}))}}]),n}(b.Component);function qe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function De(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?qe(t,!0).forEach((function(n){F()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qe(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ze=[De({},ae,{routes:[De({},{component:function(e){function n(){var e;return I()(this,n),e=B()(this,W()(n).call(this)),F()(ce()(e),"resize",(function(){var n,t,r,o=window.innerWidth,a=window.innerHeight,i=720/1420;i>a/o?(t=a,n=a/i):(n=o,t=o*i),r=t/720,e.setState({width:n,height:t,scale:r})})),e.state={scale:1,width:1420,height:720},e}return K()(n,e),A()(n,[{key:"componentDidMount",value:function(){re.addEventListener("resize",this.resize),this.resize()}},{key:"render",value:function(){var e=this.state,n=e.width,t=e.height,r=e.scale;return d.a.createElement("div",{className:"vertical-helper"},d.a.createElement("div",{className:"content-scale",style:{width:n,height:t,transform:"scale("+r+", "+r+")",transformOrigin:"top left"}},d.a.createElement("div",{className:"content"},d.a.createElement(Ee,null),d.a.createElement(je,null),d.a.createElement(Se,null),d.a.createElement(Pe,null))))}}]),n}(b.Component),renderSeo:function(){}},{path:"/",exact:!0})]})],Ce=t(28),Te=function(e,n,t,r){var o,a,i,c,l,s,u,p,g,b;return f.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(o=e.renderLang,"/images",a="",i=new $.ServerStyleSheet,a="https://".concat(e.headers.host).concat(e.path),(l=[{url:a,lang:"x-default"}]).unshift({url:a+(-1===a.indexOf("?")?"?":"&")+"lang=hu",lang:"hu"}),s=Ce.Helmet.renderStatic(),u='\n        <!DOCTYPE html>\n        <html lang="'.concat(o,'">\n            <head>\n                <meta charset="utf-8">\n                ').concat(s.title.toString(),"\n                ").concat(s.meta.toString(),'\n                <link href="').concat(a,'" rel="canonical">\n                ').concat(l.map((function(e){return'<link rel="alternate" hreflang="'.concat(e.lang,'" href="').concat(e.url,'"\n                ')})).join(""),'\n                <meta property="og:url" content="').concat(a,'">\n\n                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no, user-scalable=yes">\n                <meta name="lang" content="').concat(o,'">\n\n\n                <link rel="shortcut icon" href="').concat("/images",'/favicon.ico">\n                <link rel="apple-touch-icon" sizes="57x57" href="').concat("/images",'/apple-icon-57x57.png">\n                <link rel="apple-touch-icon" sizes="60x60" href="').concat("/images",'/apple-icon-60x60.png">\n                <link rel="apple-touch-icon" sizes="72x72" href="').concat("/images",'/apple-icon-72x72.png">\n                <link rel="apple-touch-icon" sizes="76x76" href="').concat("/images",'/apple-icon-76x76.png">\n                <link rel="apple-touch-icon" sizes="114x114" href="').concat("/images",'/apple-icon-114x114.png">\n                <link rel="apple-touch-icon" sizes="120x120" href="').concat("/images",'/apple-icon-120x120.png">\n                <link rel="apple-touch-icon" sizes="144x144" href="').concat("/images",'/apple-icon-144x144.png">\n                <link rel="apple-touch-icon" sizes="152x152" href="').concat("/images",'/apple-icon-152x152.png">\n                <link rel="apple-touch-icon" sizes="180x180" href="').concat("/images",'/apple-icon-180x180.png">\n                <link rel="icon" type="image/png" sizes="192x192" href="').concat("/images",'/android-icon-192x192.png">\n                <link rel="icon" type="image/png" sizes="32x32" href="').concat("/images",'/favicon-32x32.png">\n                <link rel="icon" type="image/png" sizes="96x96" href="').concat("/images",'/favicon-96x96.png">\n                <link rel="icon" type="image/png" sizes="16x16" href="').concat("/images",'/favicon-16x16.png">\n                <meta name="msapplication-TileColor" content="#00968b">\n                <meta name="msapplication-TileImage" content="').concat("/images",'/ms-icon-144x144.png">\n                <meta name="theme-color" content="#00968b">\n                <link href=\'').concat("/font-prod.css",'\' rel="stylesheet" />\n                ').concat('\n                    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""><\/script>\n                    <script>\n                        // var OneSignal = window.OneSignal || [];\n                        // OneSignal.push(function() {\n                        //     OneSignal.init({\n                        //         appId: "",\n                        //         autoResubscribe: true,\n                        //         welcomeNotification: {\n                        //             disable: true\n                        //         }\n                        //     });\n                        // });\n                    <\/script>','\n            </head>\n            <body>\n                <div id="root">'),p='</div>\n            <div id="modal-root"></div>\n            <div id="notification-root"></div>\n            '.concat("<script> window.INITIAL_STATE = ".concat(_()(n.getState()),"<\/script>"),'\n            <script src="/bundle.js"><\/script>\n        </body>\n    </html>'),!t.url){f.next=12;break}return f.abrupt("return",r.redirect(301,t.url));case 12:f.next=14;break;case 14:g=!1,b=!1,r.write(u,(function(){g=!0,b&&_e(c,i,r,p)})),c=i.collectStyles(d.a.createElement(v.Provider,{store:n},d.a.createElement(m.StaticRouter,{location:e.path,context:t},d.a.createElement($.StyleSheetManager,{sheet:i.instance},C(ze))))),b=!0,g&&_e(c,i,r,p);case 20:case"end":return f.stop()}}))},_e=function(e,n,t,r){var o=n.interleaveWithNodeStream(Object(h.renderToNodeStream)(e));o.pipe(t,{end:!1}),o.on("end",(function(){t.write(r),t.end()}))},Re=t(29),Fe=t.n(Re),Ne=t(16),Ie=t.n(Ne),Me=t(30),Ae=t.n(Me),Le=t(31),Be=t.n(Le),He=t(32),We=(t(34),t(35),t(33)),Ge=t.n(We);t(14);Intl.NumberFormat=Ie.a.NumberFormat,Intl.DateTimeFormat=Ie.a.DateTimeFormat;const Ke=o()(),$e=Ge.a.Server(Ke);Ke.use(Be()("8s")),global.appRoot=__dirname;Ke.use(Object(He.redirectToHTTPS)([/localhost:(\d{4})/],[/\/insecure/],301)),process.env.RENDERER&&Ke.use("/api",Fe()(process.env.API_SERVER||"localhost:8080",{limit:"10mb",proxyReqPathResolver:e=>"/api"+e.path+"?"+Object.keys(e.query).map(n=>n+"="+e.query[n]).join("&")})),Ke.use(o.a.static("src/public")),Ke.use(Ae()({noSniff:!1})),Ke.get("*",(e,n,t)=>{if("/api/"===e.url.slice(0,5))return t();{const t=p(e),r={},o=[],a=k(ze,e.path).map(({route:n})=>(o.push(n),n.loadData?n.loadData(t,e.path):null)).map(e=>{if(e)return new Promise((n,t)=>{e.then(n).catch(n)})});Promise.all(a).then(()=>{o.forEach(e=>{e.renderSeo(t)}),Te(e,t,r,n)})}}),process.env.RENDERER,$e.listen(process.env.PORT||4e3,e=>{e?console.error(e):console.info("Listening at http://localhost:"+(process.env.PORT||3001))})}]);