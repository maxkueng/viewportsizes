var devices = [];
var sizes = [];
var map = {};

exports.list = list;
exports.get = get;

try {
	devices = require('./devices.json');
} catch (e) {
	// damn..
}

sizes = devices.map(function (device, index) {
	var fulltext = device['Device Name'].toLowerCase()
	             + ' ' + device['Platform'].toLowerCase()
	             + ' ' + device['Release Date'].toLowerCase();

var key = device['Device Name'].toLowerCase();
	map[key] = index;

	return {
		key: key,
		fulltext: fulltext,
		name: device['Device Name'],
	  	platform: device['Platform'].toLowerCase() + ' ' + device['OS Version'].toLowerCase(),
	  	size: {
			width: parseInt(device['Portrait Width'], 10),
	  		height: parseInt(device['Landscape Width'], 10)
		},
	  	release: device['Release Date']
	};
});

function list (search) {
	if (!search) {
		return sizes;
	}

	var regex = new RegExp(search, 'i');

	return sizes.filter(function (item) {
		return regex.test(item.fulltext)
	});
}

function get (key) {
	var parts = key.split('@', 2);
	var key = parts[0];
	var orientation = parts[1];

	var record = sizes[map[key]];

	if (!record) { return null; }

	var width = record.size.width;
	var height = record.size.height;

	if (orientation === 'landscape' && height > width) {
		record.size.height = width;
		record.size.width = height;

	} else if (orientation === 'portrait' && width > height) {
		record.size.height = width;
		record.size.width = height;
	}

	return record;
}
