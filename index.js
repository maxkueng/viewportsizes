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
			width: device['Portrait Width'],
	  		height: device['Landscape Width']
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
	return sizes[map[key]];
}
