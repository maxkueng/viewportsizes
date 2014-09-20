var fs = require('fs');
var path = require('path');
var wget = require('wget');

var filePath = path.join(__dirname, 'devices.json');
var url = 'http://viewportsizes.com/devices.json';

if (fs.existsSync(filePath)) {
	fs.unlinkSync(filePath);
}

try {
	var dl = wget.download(url, filePath);
} catch (err) {
	handleError(err);
}

dl.on('error', handleError);

dl.on('end', function (output) {
	process.stdout.write('\n');
});

dl.on('progress', function (status) {
	if (!process.stdout.isTTY) { return; }

	var percent = Math.round(status * 100);
	var barSize = 30
	var barBars = Math.round(status * barSize);
	var bars = padRight(padRight('', barBars, '#'), barSize, ' ');

	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write('Downloading devices.json [' + bars + ']  ' + percent + '%');
});

function handleError (err) {
	throw new Error('Couldn\'t download ' + url);
}

function padRight (str, len, ch) {
	ch = ch || '';
	return str + Array(len - str.length + 1).join(ch);
}
