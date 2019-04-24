var os = require('os');

process.stdin.setEncoding('utf-8');

console.log("Please input 'specs' in command line if want to know Node version, system type and language.");


process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		var version = 'specs'
		switch(instruction) {
			case '/exit':
			process.stdout.write('Quitting app!\n');
			process.exit();
			break;
			case 'specs':
			console.log('Node version: ' + process.versions.node);
			console.log('System language: ' + process.env.lang);
			getOSinfo();
			break;
			default:
			process.stderr.write('Wrong instruction!\n');
			break;
		}
	}

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    
    console.log('System:', type);
    
}





});