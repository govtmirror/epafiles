// Initialize with options
var $$FSR = {
   'timestamp': 'February 20, 2012 @ 3:38 PM',
   'version': '11.3.0',
   'enabled': true,
   'sessionreplay': true,
   'auto' : true,
   'encode' : true,
   'files': 'http://www.epa.gov/epafiles/js/third-party/foresee/',
   'id': 'VkERNMYgs5wllZ0khFwkEA==',
   'definition': 'foresee-surveydef.js',
   'embedded': false,
   'replay_id': 'epa.gov',
   'renderer':'W3C',	// or "ASRECORDED"
   'layout':'CENTERFIXED',	// or "LEFTFIXED" or "LEFTSTRETCH" or "CENTERSTRETCH"
   'sites': [
      {
         path: /\w+-?\w+\.(com|org|edu|gov|net|co\.uk)/
      },
      {
         path: '.',
         domain: 'default'
      }
   ],
   storageOption: 'cookie'
};
// -------------------------------- DO NOT MODIFY ANYTHING BELOW THIS LINE ---------------------------------------------
(function(config){var o=void 0,q=!0,r=null,v=!1;
(function(H){function I(a,b){if(""===a&&b)return b;var e=a.split(" "),d=e.shift(),g;if("#"==d.charAt(0)){var f=c.T(d.substring(1));g=f?[f]:[]}else{g="."!==d.charAt(0)?d.split(".")[0]:"*";var k=d.split("."),h=r;-1!=c.d("[",g)&&(h=g,g=g.substr(0,c.d("[",g)));for(var f=function(a){var b=arguments.callee,d;if(!(d=!b.ya))if(d=b.ka,0==a.className.length)d=v;else{for(var e=a.className.split(" "),g=d.length,f=0;f<d.length;f++)c.ta(d[f],e)&&g--;d=0==g}if(d&&(!b.xa||N(a,b.attributes)))return a},i=[],j=0;j<
b.length;j++)for(var J=b[j].getElementsByTagName(g),l=0;l<J.length;l++)i.push(J[l]);k&&k.shift();g=[];f.ka=k;if(h!=r)var B=c.d("[",h),B=h.substring(B+1,h.lastIndexOf("]")).split("][");f.attributes=h!=r?B:r;f.ya=-1!=c.d(".",d)&&0<k.length;f.xa=h!=r;for(d=0;d<i.length;d++)f(i[d])&&g.push(i[d])}return I(e.join(" "),g)}function N(a,b){function e(a){var b="";c.g(["!","*","~","$","^"],function(d,e){if(-1!=c.d(e,a))return b=e,v});return b}for(var d=q,g=0;g<b.length;g++){var f=b[g].split("="),k=f.shift(),
f=2<f.length?f.join("="):f[0],h=e(k)+"=",i=function(a,b){var c=a.match(b);return c&&0<c.length},k="="!=h?k.substring(0,k.length-1):k,k=a.getAttribute(k);switch(h){case "=":d&=k===f;break;case "!=":d&=k!==f;break;case "*=":d&=i(k,f);break;case "~=":d&=i(k,RegExp("\\b"+f+"\\b","g"));break;case "^=":d&=i(k,RegExp("^"+f));break;case "$=":d&=i(k,RegExp(f+"$"));break;default:d=v}}return d}function c(a){i=c.r(i,a)}var i={},C={},s=s=this,n=s.document;c.C=!s.opera&&!!n.attachEvent;c.ca=864E5;var y=Object.prototype.hasOwnProperty,
D=Object.prototype.toString,z=[],A=v,K=v,x;c.B=function(a){return r!==a&&o!==a};c.j=function(a){return"[object Function]"===D.call(a)};c.v=function(a){return"[object Array]"===D.call(a)};c.h=function(a){return"string"===typeof a};c.ua=function(a){return"number"===typeof a};c.s=function(a){if(!a||"[object Object]"!==D.call(a)||a.nodeType||a.setInterval||a.constructor&&!y.call(a,"constructor")&&!y.call(a.constructor.prototype,"isPrototypeOf"))return v;for(var b in a);return b===o||y.call(a,b)||!y.call(a,
b)&&y.call(Object.prototype,b)};c.r=function(){var a=arguments[0]||{},b=1,e=arguments.length,d,g,f;"object"!==typeof a&&!c.j(a)&&(a={});e===b&&(a=this,--b);for(;b<e;b++)if((d=arguments[b])!=r)for(g in d)f=d[g],a!==f&&f!==o&&(a[g]=f);return a};c.O=function(a){var b;if(c.s(a)){b={};for(var e in a)b[e]=c.O(a[e])}else if(c.v(a)){b=[];e=0;for(var d=a.length;e<d;e++)b[e]=c.O(a[e])}else b=a;return b};c.K=function(){for(var a={},b=0,e=arguments.length;b<e;b++){var d=arguments[b];if(c.s(d))for(var g in d){var f=
d[g],k=a[g];a[g]=k&&c.s(f)&&c.s(k)?c.K(k,f):c.O(f)}}return a};c.za=function(){};c.now=function(){return+new Date};c.d=function(a,b){if(c.v(b)||c.s(b)){for(var e in b)if(b[e]===a)return e;return-1}return(""+b).indexOf(a)};c.ta=function(a,b){return-1!=c.d(a,b)};c.g=function(a,b){var e,d=0,g=a.length;if(g===o||c.j(a))for(e in a){if(b.call(a[e],e,a[e])===v)break}else for(e=a[0];d<g&&b.call(e,d,e)!==v;e=a[++d]);return a};c.T=function(a){return n.getElementById(a)};c.trim=function(a){return a.toString().replace(/\s+/g,
" ").replace(/^\s+|\s+$/g,"")};c.pa=function(a){return a.toString().replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")};c.Ma=function(a,b,c){for(var d=a.split("."),b=b[d.shift()],g=c,f;b!=r&&0<d.length;)b=b[d.shift()];if(b){d=a.split(".");for(f;d.length&&(f=d.shift());)g=g[f]?g[f]:g[f]={};d=a.split(".");g=c;for(f;d.length&&(f=d.shift());)0<d.length?g=g[f]:g[f]=b}};c.Y=function(){return n.location.href};c.Na=function(){return n.referrer};c.ma=function(){return n.location.protocol};c.A=function(a){return encodeURIComponent(a)};
c.la=function(a){return decodeURIComponent(a)};c.z=this;c.l=function(a,b){var e=s.document.readyState,b=b||1;if(c.j(a)&&(a=function(a,b,c){return function(){setTimeout(function(a,b){return function(){b.call(a)}}(a,b),c)}}(c.z,a,b),e&&("complete"==e||"loaded"==e))){A=q;for(z.push(a);e=z.shift();)e&&e.call(c.z);return}if(!A&&c.j(a))z.push(a);else if(A&&c.j(a))a.call(c.z);else if(!c.j(a))for(A=q;e=z.shift();)e&&e.call(c.z)};c.Q=r;c.l(function(){c.Q=n.getElementsByTagName("head")[0]||n.documentElement});
c.va=function(a,b){var b=b||c.za,e=n.createElement("script");e.type="text/javascript";c.C?e.onreadystatechange=function(){("loaded"==this.readyState||"complete"==this.readyState)&&b("ok")}:e.onload=function(){b("ok")};e.onerror=function(){b("error")};e.src=0==c.d("//",a)?c.ma()+a:a;c.Q.appendChild(e)};c.Ra=function(a){var b=c.now(),e;do e=c.now();while(e-b<a)};n.addEventListener?x=function(){n.removeEventListener("DOMContentLoaded",x,v);c.l(r)}:c.C&&(x=function(){"complete"===n.readyState&&(n.detachEvent("onreadystatechange",
x),c.l(r))});K||(K=q,n.addEventListener?(n.addEventListener("DOMContentLoaded",x,v),H.addEventListener("load",c.l,v)):c.C&&(n.attachEvent("onreadystatechange",x),H.attachEvent("onload",c.l)));c.startTime=c.now();s.FSR=c;s.FSR.opts=i;s.FSR.prop=C;c.a={};c.a.ba={};var j=c.a.ba;c.a.ea={};var p=c.a.ea,E=1,F=9,G=Array.prototype.slice;j.da=function(a,b){b=b||n;if(a.nodeType&&a.nodeType===F&&(a=n.body,a===r))return[n];if(a.nodeType&&a.nodeType===E)return[a];if(a.m&&c.h(a.m))return G.call(a,0);b&&(b=j.b.ha(b));
if(c.v(a))return a;if(c.h(a)){for(var e=[],d=0;d<b.length;d++)e=e.concat(I(a,[b[d]]));return e}return r};c.a.ga={};var h=c.a.ga,w;w||(w={});(function(){function a(a){return a instanceof Date?isFinite(this.valueOf())?this.getUTCFullYear()+"-"+b(this.getUTCMonth()+1)+"-"+b(this.getUTCDate())+"T"+b(this.getUTCHours())+":"+b(this.getUTCMinutes())+":"+b(this.getUTCSeconds())+"Z":r:a.valueOf()}function b(a){return 10>a?"0"+a:a}function c(a){f.lastIndex=0;return f.test(a)?'"'+a.replace(f,function(a){var b=
i[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function d(b,g){var f,i,l,n,p=k,t,m=g[b];m&&"object"===typeof m&&(m instanceof Date||m instanceof Date||m instanceof Boolean||m instanceof String||m instanceof Number)&&(m=a(m));"function"===typeof j&&(m=j.call(g,b,m));switch(typeof m){case "string":return c(m);case "number":return isFinite(m)?""+m:"null";case "boolean":case "null":return""+m;case "object":if(!m)return"null";k+=h;t=[];if("[object Array]"===
Object.prototype.toString.apply(m)){n=m.length;for(f=0;f<n;f+=1)t[f]=d(f,m)||"null";l=0===t.length?"[]":k?"[\n"+k+t.join(",\n"+k)+"\n"+p+"]":"["+t.join(",")+"]";k=p;return l}if(j&&"object"===typeof j){n=j.length;for(f=0;f<n;f+=1)"string"===typeof j[f]&&(i=j[f],(l=d(i,m))&&t.push(c(i)+(k?": ":":")+l))}else for(i in m)Object.prototype.hasOwnProperty.call(m,i)&&(l=d(i,m))&&t.push(c(i)+(k?": ":":")+l);l=0===t.length?"{}":k?"{\n"+k+t.join(",\n"+k)+"\n"+p+"}":"{"+t.join(",")+"}";k=p;return l}}var g=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
f=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,k,h,i={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},j;"function"!==typeof w.stringify&&(w.stringify=function(a,b,c){var e;h=k="";if("number"===typeof c)for(e=0;e<c;e+=1)h+=" ";else"string"===typeof c&&(h=c);if((j=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON.stringify");return d("",{"":a})});
"function"!==typeof w.parse&&(w.parse=function(a,b){function c(a,d){var e,g,f=a[d];if(f&&"object"===typeof f)for(e in f)Object.prototype.hasOwnProperty.call(f,e)&&(g=c(f,e),g!==o?f[e]=g:delete f[e]);return b.call(a,d,f)}var d,a=""+a;g.lastIndex=0;g.test(a)&&(a=a.replace(g,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,
"")))return d=(new Function("return "+a))(),"function"===typeof b?c({"":d},""):d;throw new SyntaxError("JSON.parse");})})();c.a.JSON=w;j.b=function(a,b){return new j.b.prototype.X(a,b)};var L=Array.prototype.push,G=Array.prototype.slice,E=1,F=9;j.b.K=function(a,b){var e=a.length,d=0;if(c.ua(b.length))for(var g=b.length;d<g;d++)a[e++]=b[d];else for(;b[d]!==o;)a[e++]=b[d++];a.length=e;return a};j.b.Ta=function(a,b){var e=b||[];a!=r&&(a.length==r||c.h(a)||c.j(a)||!c.j(a)&&a.setInterval?L.call(e,a):j.b.K(e,
a));return e};j.b.ja=function(a){var b={};b[a]=o;return b};j.b.ia=function(a){a=c.trim(a).toLowerCase();return 0==c.d("<option",a)?"SELECT":0==c.d("<li",a)?"UL":0==c.d("<tr",a)?"TBODY":0==c.d("<td",a)?"TR":"DIV"};j.b.ha=function(a){a.setInterval||a.nodeType&&(a.nodeType===E||a.nodeType===F)?a=[a]:c.h(a)?a=j.b(a).N():a.m&&c.h(a.m)&&(a=a.N());return a};j.b.Qa=function(a,b,c){for(var d=[],g,c=!!c,f=0,h=a.length;f<h;f++)g=!!b(a[f],f),c!==g&&d.push(a[f]);return d};j.b.prototype.X=function(a,b){this.length=
0;this.m="_4cCommonDom.Query";if(!a)return this;if(a.setInterval||a.nodeType)this[0]=a,this.length=1;else{var e=[];if(a.m&&c.h(a.m))e=a.N();else if(c.v(a))e=a;else if(c.h(a)&&0==c.d("<",c.trim(a))&&-1!=c.d(">",c.trim(a))){var d=j.b.ia(a),d=n.createElement(d);d.innerHTML=a;c.C?e.push(d.firstChild):e.push(d.removeChild(d.firstChild))}else{if(-1!=c.d(",",a)){e=a.split(",");for(d=0;d<e.length;d++)e[d]=c.trim(e[d])}else e=[a];for(var d=[],g=0;g<e.length;g++)d=d.concat(j.da(e[g],b));e=d}L.apply(this,e)}return this};
j.b.prototype.g=function(a){return c.g(this,a)};j.b.prototype.N=function(){return G.call(this,0)};j.b.prototype.constructor=j.b;j.b.prototype.X.prototype=j.b.prototype;s.FSR._query=function(a,b){return j.b(a,b)};p.D={};p.D.P=function(){this.M=[]};p.D.P.prototype.qa=function(){for(var a=0;a<this.M.length;a++){var b=this.M[a];b.Ka.apply(this,arguments);b.Ua&&(this.M.splice(a,1),a--)}};p.ra=function(){for(var a=s.navigator.userAgent.replace(/[\s\\\/\.\(\);:]/gim,""),b="",e=c.now()+"",d=0;d<a.length-
1;d+=a.length/7)b+=Number(a.charCodeAt(Math.round(d))%16).toString(16);7<b.length&&(b=b.substr(b.length-7));return b+"-"+a.length+e.substr(e.length-6)+"-xxxx-xxxx-xxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})};c.a.R={};var l=c.a.R;l.u=[];l.Ja=function(a,b,e){if(a.SR&&a.SR.updatedAt)for(var d=0;d<l.u.length;d++){var g=l.u[d];if(g.$.SR&&g.$.SR.updatedAt==a.SR.updatedAt){if(1500>c.now()-g.Fa)return g.Da;l.u.splice(d,1);break}}b=c.a.JSON.stringify(a,
b,e);l.u[l.u.length]={$:a,Da:b,Fa:c.now()};return b};var M={};h.e=function(a,b){function e(a){this.t=a()}var d=M[a];if(d!=r)return d;e.prototype.set=function(a,b){if(c.s(a))for(var d in a)this.t.set(d,a[d]);else this.t.set(a,b)};e.prototype.get=function(a){return this.t.get(a)};e.prototype.oa=function(a){this.t.k(a)};e.prototype.clear=function(){this.t.J()};e.prototype.k=function(){this.t.J()};return d=M[a]=new e(b)};s.FSR._storage=function(a,b,e){a=c.$a.R(a);if(e===o&&c.h(b))return a.get(b);e!==
o?a.set(b,e):b!==o&&a.set(b);return a.Oa()};l.c=function(a,b){a||(a=p.ra());this.I=a.replace(/[- ]/g,"");this.w=b||{};this.data={};this.fa=new p.D.P;this.Ca=4E3};l.c.prototype.set=function(a,b){this.F();this.i[a]=b;this.G()};l.c.prototype.get=function(a){this.F();return a?this.i[a]:this.i};l.c.prototype.k=function(a){this.F();delete this.i[a];this.G()};l.c.prototype.J=function(){this.i={};var a=this.w.duration;this.w.duration=-1;this.G();a?this.w.duration=a:delete this.w.duration};l.c.prototype.F=
function(){try{var a=l.c.Aa(this.I);this.i=c.a.JSON.parse(a)}catch(b){this.i={}}this.i||(this.i={})};l.c.prototype.G=function(){var a=c.a.JSON.stringify(this.i);this.I.length+c.A(a).length>this.Ca&&this.fa.qa(this);l.c.write(this.I,a,this.w)};l.c.Aa=function(a){return(a=s.document.cookie.match("(?:^|;)\\s*"+c.pa(a)+"=([^;]*)"))?c.la(a[1]):r};l.c.write=function(a,b,e){var d=!e||!c.B(e.encode)||e.encode?c.A(b):b,a=c.A(a);c.g(e,function(a,b){if(b!=r){var e;a:switch(a){case "duration":e="="+(new Date(c.now()+
b*c.ca)).toGMTString();break a;case "secure":e="";break a;default:e="="+b}d+=";"+("duration"===a?"expires":a)+e}});s.document.cookie=a+"="+d;return a.length+d.length+2};l.c.J=function(a,b){l.c.write(a,"",c.r(b,{duration:-1}))};l.c.Sa=function(){};l.c.isSupported=function(){return q};h.o={};h.o.Ya={host:"survey.foreseeresults.com",path:"/survey",url:"/display"};h.o.La={host:"controller.4seeresults.com",path:"/fsrSurvey",url:"/OTCImg",Ea:3};h.o.event={host:"events.foreseeresults.com",path:"/rec",url:"/process"};
h.o.domain={host:"survey.foreseeresults.com",path:"/survey",url:"/FSRImg",Ea:3};h.o.Xa={host:"replaycontroller.4seeresults.com",path:"/images",enabled:v};j.b.prototype.S=function(){var a="name";return c.h(a)?this[0]?this[0].getAttribute(a):"":this.g(function(){a=c.h(a)?j.b.ja(a):a;for(var b in a)this.setAttribute(b,a[b])})};j.p={};j.p.U={};j.p.exec=function(a,b){var e=!/\W/.test(a)?j.p.U[a]=j.p.U[a]||j.p.exec(c.T(a).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+
a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return b?e(b):e};p.q={};p.q.Wa=function(a,b){return a+Math.random()*(b-a)};p.q.Za=function(a,b,e){var d="";a&&c.g(a,function(a,f){d+=(0!=d.length?"&":"")+(b?b+"["+a+"]":a)+"="+(e?f:c.A(f))});return d};p.q.hash=function(a){a=a.split("_");return 3*a[0]+1357+""+(9*a[1]+58)};p.q.Va=function(a){a=
a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=RegExp("[\\?&+]"+a+"=([^&#]*)").exec(c.Y());return a==r?v:a[1]};p.q.na=function(a){return a.js_files||a.files};h.a={};h.a.sa=function(){return"fsr.s"+(i.site.cookie?"."+i.site.cookie:"")};h.a.H=function(a){var b=h.a.sa(),b=h.e(b,h.a.f(b));return a?c.B(o)?b.set(a,o):b.get(a):b};h.a.Pa=function(a,b){var e=a.name;c.g([a.site,a.section,b,h.a.H("q"),h.a.H("l")],function(a,b){e+=b?"-"+b:""});return e};h.a.wa=function(a){c.va(p.q.na(i.site)+(i.definition||
"foresee-surveydef.js"),function(b){"ok"===b&&(c.r(C,c.properties),i.aa=i.surveydefs=c.surveydefs,a())})};h.a.log=function(a,b){if(C.events.enabled){var e=h.a.H(),d=e.get("sd");c.B(d)||(d=e.get("cd"));var d=i.aa[d],g=new Date;(new c.a.Ga.Ha(h.o.event,"logit")).send({cid:i.id,rid:e.get("rid")||"",cat:d.name,sec:d.section||"",type:e.get("q")||"",site:i.site.name||"",lang:e.get("l")||c.$S.locale||"",msg:a,param:b,tms:g.getTime(),tmz:6E4*g.getTimezoneOffset()})}};h.a.f=function(a,b){var e;switch(i.storageOption){case "window":e=
function(){var a=arguments.callee;return new l.Ia(a.Z,a.V||{})};break;default:e=function(){var a=arguments.callee;return new l.c(a.Z,c.r({path:"/",domain:a.L.site.domain,secure:a.L.site.secure,encode:a.L.encode},a.V||{}))}}e.Z=a;e.L=i;e.V=b;return e};var u=j.b;c.l(function(){for(var a=i.sites,b=0,e=a.length;b<e;b++){var d;c.v(a[b].path)||(a[b].path=[a[b].path]);for(var g=0,f=a[b].path.length;g<f;g++)if(d=c.Y().match(a[b].path[g])){i.siteid=b;i.site=i.sites[b];i.site.domain?"default"==i.site.domain&&
(i.site.domain=r):i.site.domain=d[0];i.site.secure||(i.site.secure=r);i.site.name||(i.site.name=d[0]);c.g("files,js_files,image_files,html_files,css_files,swf_files".split(","),function(a,b){i.site[b]||i[b]&&(i.site[b]=i[b])});break}if(d)break}});c.n=function(a){c.r(this,{options:c.r({},a)});i.controller=this};c.n.prototype.load=function(){var a=this;h.a.wa(function(){a.Ba()})};c.n.prototype.Ba=function(){for(var a=h.e("fsr.sp",h.a.f("fsr.sp")),b={rows:[]},e=i.aa,d=0;d<e.length;d++)if(!(e[d].site&&
e[d].site!=i.site.name)){var g=e[d].criteria;if(c.B(g.sp)){var f=o;b.rows.push(this.W(e[d].name,e[d].section||f,o,a,g.sp,g.lf))}for(var g=g.locales||[],k=0,l=g.length;k<l;k++)f=o,b.rows.push(this.W(e[d].name,e[d].section||f,g[k].locale,a,g[k].sp,g[k].lf))}u("#controls")[0].innerHTML=j.p.exec("fsr_admin_template",b);1==h.e("fsr.ipo",h.a.f("fsr.ipo")).get("value")&&(u("input[type=checkbox][name=ipo]")[0].checked=q);1==h.e("fsr.pool",h.a.f("fsr.pool")).get("value")&&(u("input[type=checkbox][name=pool]")[0].checked=
q)};c.n.prototype.W=function(a,b,c,d,g,f){var h=a;b&&(h+="-"+b,a+="-"+b);c&&(h+=" ("+c+")",a+="-"+c);return{names:h+":",input:{name:a,value:d.get(a)||"",size:3,maxlength:3},percentage:"("+g+")",loyaltyFactor:f}};c.n.prototype.set=function(){var a=h.e("fsr.sp",h.a.f("fsr.sp",{duration:1}));u("input[type=text]").g(function(){var b=u(this);""!=b[0].value?a.set(b.S(),b[0].value):a.oa(b.S())});var b=u("input[type=checkbox][name=ipo]")[0],c=u("input[type=checkbox][name=pool]")[0];b.checked?h.e("fsr.ipo",
h.a.f("fsr.ipo")).set("value",b.checked?1:0):h.e("fsr.ipo",h.a.f("fsr.ipo")).k();c.checked?h.e("fsr.pool",h.a.f("fsr.pool")).set("value",c.checked?1:0):h.e("fsr.pool",h.a.f("fsr.pool")).k()};c.n.prototype.clear=function(){h.e("fsr.sp",h.a.f("fsr.sp")).k();h.e("fsr.ipo",h.a.f("fsr.ipo")).k();h.e("fsr.pool",h.a.f("fsr.pool")).k();u("input").g(function(){"text"==this.type?this.value="":"checkbox"==this.type&&(this.checked=v)})};c.l(function(){var a=new c.n;i.controller.set=a.set;i.controller.clear=a.clear;
a.load()})})(window,{});})({});
FSR($$FSR);