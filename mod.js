// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var f=function(r,e,t){var n,f,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,f&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=f,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var h=function(r){return"number"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return m&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,y=w;var E=function(r){return y.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",O=P,T=_,V=w;var x=E,S=function(r){var e,t,n;if(null==r)return V.call(r);t=r[T],e=O(r,T);try{r[T]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[T]=t:delete r[T],n},k=b()?S:x,I=Number,A=I.prototype.toString;var R=k,M=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},F=b();var C=function(r){return"object"==typeof r&&(r instanceof M||(F?$(r):"[object Number]"===R(r)))},N=h,B=C;var G=d,L=function(r){return N(r)||B(r)},Z=C;G(L,"isPrimitive",h),G(L,"isObject",Z);var W=L,X=W.isPrimitive;var z=function(r){return X(r)&&r>=0},U=W.isObject;var Y=function(r){return U(r)&&r.valueOf()>=0},D=z,q=Y;var H=d,J=function(r){return D(r)||q(r)},K=Y;H(J,"isPrimitive",z),H(J,"isObject",K);var Q=J;var rr=function(r){return"string"==typeof r},er=String.prototype.valueOf;var tr=k,nr=function(r){try{return er.call(r),!0}catch(r){return!1}},ir=b();var ar=function(r){return"object"==typeof r&&(r instanceof String||(ir?nr(r):"[object String]"===tr(r)))},or=rr,ur=ar;var cr=d,sr=function(r){return or(r)||ur(r)},fr=ar;cr(sr,"isPrimitive",rr),cr(sr,"isObject",fr);var lr=sr,vr=Math.floor;var pr=function(r){return vr(r)===r},gr=pr;var dr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&gr(r.length)&&r.length>=0&&r.length<=9007199254740991},hr=Number.POSITIVE_INFINITY,mr=I.NEGATIVE_INFINITY,br=hr,wr=mr,yr=pr;var Er=function(r){return r<br&&r>wr&&yr(r)},jr=W.isPrimitive,Pr=Er;var _r=function(r){return jr(r)&&Pr(r)},Or=W.isObject,Tr=Er;var Vr=function(r){return Or(r)&&Tr(r.valueOf())},xr=_r,Sr=Vr;var kr=d,Ir=function(r){return xr(r)||Sr(r)},Ar=Vr;kr(Ir,"isPrimitive",_r),kr(Ir,"isObject",Ar);var Rr=Ir;var Mr=function(r){return r!=r},$r=W.isPrimitive,Fr=Mr;var Cr=function(r){return $r(r)&&Fr(r)},Nr=W.isObject,Br=Mr;var Gr=function(r){return Nr(r)&&Br(r.valueOf())},Lr=Cr,Zr=Gr;var Wr=d,Xr=function(r){return Lr(r)||Zr(r)},zr=Gr;Wr(Xr,"isPrimitive",Cr),Wr(Xr,"isObject",zr);var Ur=dr,Yr=Rr.isPrimitive,Dr=lr.isPrimitive,qr=Xr.isPrimitive;var Hr=function(r,e,t){var n,i,a;if(!Ur(r)&&!Dr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Yr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Dr(r)){if(!Dr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,qr(e)){for(a=i;a<n;a++)if(qr(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Jr=lr.isPrimitive;var Kr=function(r){if(!Jr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Qr=lr.isPrimitive;var re=function(r){if(!Qr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},ee=Kr,te=re,ne=lr.isPrimitive;var ie=function(r){return ne(r)&&r===te(r)&&r!==ee(r)},ae=hr,oe=mr;var ue=function(r){return r==r&&r>oe&&r<ae},ce=Rr.isPrimitive;var se=function(r){return ce(r)&&r>=0},fe=Rr.isObject;var le=function(r){return fe(r)&&r.valueOf()>=0},ve=se,pe=le;var ge=d,de=function(r){return ve(r)||pe(r)},he=le;ge(de,"isPrimitive",se),ge(de,"isObject",he);var me=de.isPrimitive,be=lr.isPrimitive;var we=function(r,e){var t,n;if(!be(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!me(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ye=Rr.isPrimitive,Ee=lr.isPrimitive;var je=we,Pe=function(r,e,t){var n,i;if(!Ee(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Ee(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ye(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var _e=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Pe(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+je("0",i):je("0",i)+r,n&&(r="-"+r)),r},Oe=ie,Te=re,Ve=Kr,xe=ue,Se=W.isPrimitive,ke=_e;var Ie=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!xe(n)){if(!Se(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ke(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ke(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Oe(r.specifier)?Te(t):Ve(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ae=lr.isPrimitive,Re=/[-\/\\^$*+?.()|[\]{}]/g;var Me=function(r){var e,t;if(!Ae(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Re,"\\$&"):(e=(e=r.substring(1,t)).replace(Re,"\\$&"),r=r[0]+e+r.substring(t))},$e=/./;var Fe=function(r){return"boolean"==typeof r},Ce=Boolean.prototype.toString;var Ne=k,Be=function(r){try{return Ce.call(r),!0}catch(r){return!1}},Ge=b();var Le=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ge?Be(r):"[object Boolean]"===Ne(r)))},Ze=Fe,We=Le;var Xe=d,ze=function(r){return Ze(r)||We(r)},Ue=Le;Xe(ze,"isPrimitive",Fe),Xe(ze,"isObject",Ue);var Ye="object"==typeof self?self:null,De="object"==typeof window?window:null,qe=ze.isPrimitive,He=function(){return new Function("return this;")()},Je=Ye,Ke=De,Qe=r(Object.freeze({__proto__:null}));var rt=function(r){if(arguments.length){if(!qe(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return He()}if(Je)return Je;if(Ke)return Ke;if(Qe)return Qe;throw new Error("unexpected error. Unable to resolve global object.")},et=rt(),tt=et.document&&et.document.childNodes,nt=Int8Array,it=$e,at=tt,ot=nt;var ut=function(){return"function"==typeof it||"object"==typeof ot||"function"==typeof at};var ct=function(){return/^\s*function\s*([^(]*)/i},st=ct;d(st,"REGEXP",ct());var ft=st,lt=k;var vt=Array.isArray?Array.isArray:function(r){return"[object Array]"===lt(r)};var pt=function(r){return null!==r&&"object"==typeof r};d(pt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!vt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pt));var gt=pt;var dt=k,ht=ft.REGEXP,mt=function(r){return gt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var bt=function(r){var e,t,n;if(("Object"===(t=dt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ht.exec(n.toString()))return e[1]}return mt(r)?"Buffer":t},wt=bt;var yt=bt;var Et=function(r){var e;return null===r?"null":"object"===(e=typeof r)?wt(r).toLowerCase():e},jt=function(r){return yt(r).toLowerCase()},Pt=ut()?jt:Et;var _t=function(r){return"function"===Pt(r)},Ot=RegExp.prototype.exec;var Tt=k,Vt=function(r){try{return Ot.call(r),!0}catch(r){return!1}},xt=b();var St=Me,kt=_t,It=lr.isPrimitive,At=function(r){return"object"==typeof r&&(r instanceof RegExp||(xt?Vt(r):"[object RegExp]"===Tt(r)))};var Rt=ie,Mt=re,$t=Kr,Ft=function(r,e,t){if(!It(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(It(e))e=St(e),e=new RegExp(e,"g");else if(!At(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!It(t)&&!kt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Ct=ue,Nt=W.isPrimitive,Bt=function(r){return Math.abs(r)},Gt=/e\+(\d)$/,Lt=/e-(\d)$/,Zt=/^(\d+)$/,Wt=/^(\d+)e/,Xt=/\.0$/,zt=/\.0*e/,Ut=/(\..*[^0])0*e/;var Yt=function(r){var e,t,n=parseFloat(r.arg);if(!Ct(n)){if(!Nt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Bt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ft(t,Ut,"$1e"),t=Ft(t,zt,"e"),t=Ft(t,Xt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ft(t,Gt,"e+0$1"),t=Ft(t,Lt,"e-0$1"),r.alternate&&(t=Ft(t,Zt,"$1."),t=Ft(t,Wt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Rt(r.specifier)?Mt(t):$t(t)},Dt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var qt=we;var Ht=lr.isPrimitive,Jt=Hr,Kt=Mr,Qt=Ie,rn=Yt,en=function(r){var e,t,n,i,a;for(e=0,n=[],a=Dt.exec(r);a;)(t=r.slice(e,Dt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Dt.lastIndex,a=Dt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},tn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+qt(" ",n):qt(" ",n)+r},nn=_e,an=String.fromCharCode;var on=Q.isPrimitive,un=function(r){var e,t,n,i,a,o,u,c,s;if(!Ht(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=en(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Ht(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Jt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Kt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Kt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Qt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Kt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Kt(a)?String(n.arg):an(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=rn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=nn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=tn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var cn=function(r){var e,t,n,i,a;if(!on(r))throw new TypeError(un("invalid argument. Must provide a nonnegative number. Value: `%s`.",r));if(r<0||r>1)throw new RangeError(un("invalid argument. Must provide a nonnegative number on the interval [0,1]. Value: `%f`.",r));return a=1-r,function(o){if(0===arguments.length)return void 0===t?null:t;void 0===t?(i=o,t=0):(i+=e=r*(n=o-i),t=a*(t+n*e));return t}};export{cn as default};
//# sourceMappingURL=mod.js.map
