// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e){var n,o,s,i,d;if(!r(e))throw new TypeError(t("1HJ9Y",e));if(e<0||e>1)throw new RangeError(t("1HJDa",e));return d=1-e,function(r){if(0===arguments.length)return void 0===o?null:o;void 0===o?(i=r,o=0):(i+=n=e*(s=r-i),o=d*(o+s*n));return o}}export{e as default};
//# sourceMappingURL=index.mjs.map
