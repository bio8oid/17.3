process.stdin.setEncoding('utf-8');

console.log("Please input 'specs' in command line if want to know Node version.");
console.log("Please input 'follow' if you want to see 'process.env' result.");

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
			default:
			process.stderr.write('Wrong instruction!\n');
			break;
		}
	}
});