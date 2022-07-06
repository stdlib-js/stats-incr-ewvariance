/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var randu = require( '@stdlib/random-base-randu' );
var increwvariance = require( './../lib' );

var accumulator;
var s2;
var v;
var i;

// Initialize an accumulator:
accumulator = increwvariance( 0.5 );

// For each simulated datum, update the exponentially weighted variance...
console.log( '\nValue\tVariance\n' );
for ( i = 0; i < 100; i++ ) {
	v = randu() * 100.0;
	s2 = accumulator( v );
	console.log( '%d\t%d', v.toFixed( 4 ), s2.toFixed( 4 ) );
}
console.log( '\nFinal variance: %d\n', accumulator() );
