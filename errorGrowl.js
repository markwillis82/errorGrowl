var argv = require('optimist')
	.usage('Usage: $0 [file]')
    .argv;

var growl = require("growl");
var tail = require('tailfd').tail;


watcher = tail('/var/log/apache2/error.log',function(line,tailInfo){
	if(line.indexOf("Fatal Error") || line.indexOf("Parse error")) {
		console.log(line);
		growl('Apache Err:'+line, { sticky: true });
	}
});
