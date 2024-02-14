<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# increwvariance

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute an [exponentially weighted variance][moving-average] incrementally.

<section class="intro">

An [exponentially weighted variance][moving-average] can be defined recursively as

<!-- <equation class="equation" label="eq:exponentially_weighted_variance" align="center" raw="S_n = \begin{cases} 0 & \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) & \textrm{if}\ n > 0 \end{cases}" alt="Recursive definition for computing an exponentially weighted variance."> -->

```math
S_n = \begin{cases} 0 & \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) & \textrm{if}\ n > 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="S_n = \begin{cases} 0 &amp; \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) &amp; \textrm{if}\ n &gt; 0 \end{cases}" data-equation="eq:exponentially_weighted_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@12be48682a7c25918504f886cbb80051c6ec8240/lib/node_modules/@stdlib/stats/incr/ewvariance/docs/img/equation_exponentially_weighted_variance.svg" alt="Recursive definition for computing an exponentially weighted variance.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the [exponentially weighted mean][@stdlib/stats/incr/ewmean].

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
increwvariance = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-ewvariance@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-incr-ewvariance/tags). For example,

```javascript
increwvariance = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-ewvariance@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var increwvariance = require( 'path/to/vendor/umd/stats-incr-ewvariance/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-ewvariance@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.increwvariance;
})();
</script>
```

#### increwvariance( alpha )

Returns an accumulator `function` which incrementally computes an [exponentially weighted variance][moving-average], where `alpha` is a smoothing factor between `0` and `1`.

```javascript
var accumulator = increwvariance( 0.5 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated variance. If not provided an input value `x`, the accumulator function returns the current variance.

```javascript
var accumulator = increwvariance( 0.5 );

var v = accumulator();
// returns null

v = accumulator( 2.0 );
// returns 0.0

v = accumulator( 1.0 );
// returns 0.25

v = accumulator( 3.0 );
// returns 0.6875

v = accumulator();
// returns 0.6875
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-ewvariance@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = increwvariance( 0.5 );

// For each simulated datum, update the exponentially weighted variance...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/ewmean`][@stdlib/stats/incr/ewmean]</span><span class="delimiter">: </span><span class="description">compute an exponentially weighted mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/ewstdev`][@stdlib/stats/incr/ewstdev]</span><span class="delimiter">: </span><span class="description">compute an exponentially weighted standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/variance`][@stdlib/stats/incr/variance]</span><span class="delimiter">: </span><span class="description">compute an unbiased sample variance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mvariance`][@stdlib/stats/incr/mvariance]</span><span class="delimiter">: </span><span class="description">compute a moving unbiased sample variance incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-ewvariance.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-ewvariance

[test-image]: https://github.com/stdlib-js/stats-incr-ewvariance/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-incr-ewvariance/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-ewvariance/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-ewvariance?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-ewvariance.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-ewvariance/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-ewvariance/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-ewvariance/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-ewvariance/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-ewvariance/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-ewvariance/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-ewvariance/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-ewvariance/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-ewvariance/main/LICENSE

[moving-average]: https://en.wikipedia.org/wiki/Moving_average

<!-- <related-links> -->

[@stdlib/stats/incr/ewmean]: https://github.com/stdlib-js/stats-incr-ewmean/tree/umd

[@stdlib/stats/incr/ewstdev]: https://github.com/stdlib-js/stats-incr-ewstdev/tree/umd

[@stdlib/stats/incr/variance]: https://github.com/stdlib-js/stats-incr-variance/tree/umd

[@stdlib/stats/incr/mvariance]: https://github.com/stdlib-js/stats-incr-mvariance/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
