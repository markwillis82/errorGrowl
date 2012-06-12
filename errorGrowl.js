#!/usr/bin/env node
var argv = require('optimist')
	.usage('Usage: $0 [file]')
    .argv;

var growl = require("growl");
var tail = require('tailfd').tail;


watcher = tail('/var/log/apache2/error.log',function(line,tailInfo){
	if(line.indexOf("Fatal Error") !== -1 || line.indexOf("Parse error") !== -1) {
		console.log(line+"--"+line.indexOf("Fatal Error") +"||"+ line.indexOf("Parse error"));
		growl('Apache Err:'+line/*, { sticky: true }*/);
	}
});
