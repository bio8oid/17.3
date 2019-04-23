var os = require('os');

process.stdin.setEncoding('utf-8');

console.log("Please input 'specs' in command line if want to know Node version.");
console.log("Please input 'follow' if you want to see 'process.env' result.");
console.log("Please input '/getOSinfo' if you want to see OS info.");

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
			console.log(process.versions);
			break;
			case 'follow':
			console.log(process.env);
			break;
			case '/getOSinfo':
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
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', "Kaźmierz");
    console.log('Home dir:', "C:");
}





});