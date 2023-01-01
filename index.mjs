// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n){var t,i,o,s,d;if(!r(n))throw new TypeError(e("0dYA9",n));if(n<0||n>1)throw new RangeError(e("invalid argument. Must provide a nonnegative number on the interval: [0, 1]. Value: `%f`.",n));return d=1-n,function(r){if(0===arguments.length)return void 0===i?null:i;void 0===i?(s=r,i=0):(s+=t=n*(o=r-s),i=d*(i+o*t));return i}}export{n as default};
//# sourceMappingURL=index.mjs.map
