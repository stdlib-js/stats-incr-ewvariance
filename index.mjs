// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var n=r.isPrimitive,t=e;var i=function(r){var e,i,o,s,d;if(!n(r))throw new TypeError(t("0dYA9",r));if(r<0||r>1)throw new RangeError(t("invalid argument. Must provide a nonnegative number on the interval: [0, 1]. Value: `%f`.",r));return d=1-r,function(n){if(0===arguments.length)return void 0===i?null:i;void 0===i?(s=n,i=0):(s+=e=r*(o=n-s),i=d*(i+o*e));return i}};export{i as default};
//# sourceMappingURL=index.mjs.map
