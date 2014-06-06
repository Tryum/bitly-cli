#! /usr/bin/env node

/*
 * bitly-cli
 * http://www.itskrish.co
 *
 * Copyright (c) 2014 Krish Dholakiya
 * Licensed under the MIT license.
 */

'use strict';

var Bitly = require('bitly');
var bitly;

if(process.env.BITLY_USER && process.env.BITLY_APIKEY) {
	bitly = new Bitly(process.env.BITLY_USER &&	process.env.BITLY_APIKEY);
} else {
	bitly = new Bitly('classifystudios', 'R_62110e188d86cdedfa72c1cdc03bff54'); // My own personal account, recommended that you use your own.
}

var url;

process.argv.forEach(function(e,i) {
  if(process.argv[i] == '-u') {
   url = process.argv[i+1];
  } else if (process.argv[i] == '-p') {
   path = process.argv[i+1];
  }
});

bitly.shorten(url, function(err, res) {
	if(err) {
		return console.log('Well, looks like something went wrong. Try again?');
	} 

	console.log('You can access your short url at ' + res.data.url);
});

