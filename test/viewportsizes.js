var test = require('tape');
var viewportsizes = require('../index');

test('get()', function (t) {
	t.plan(3);

	var info = viewportsizes.get('iphone 5');

	t.equal(info.key, 'iphone 5', 'key');
	t.equal(info.size.width, 320, 'width');
	t.equal(info.size.height, 568, 'height');

});

test('get() with explicit landscape orientation', function (t) {
	t.plan(3);

	var info = viewportsizes.get('iphone 5@landscape');

	t.equal(info.key, 'iphone 5', 'key');
	t.equal(info.size.width, 568, 'width');
	t.equal(info.size.height, 320, 'height');

});

test('get() with explicit portrait orientation', function (t) {
	t.plan(3);

	var info = viewportsizes.get('iphone 5@portrait');

	t.equal(info.key, 'iphone 5', 'key');
	t.equal(info.size.width, 320, 'width');
	t.equal(info.size.height, 568, 'height');

});

test('list()', function (t) {
	t.plan(1);

	var viewports = viewportsizes.list();

	t.ok(Array.isArray(viewports), 'is array');
});

test('list(<serach>)', function (t) {
	var viewports = viewportsizes.list('nexus');

	t.ok(Array.isArray(viewports), 'is array');

	viewports.forEach(function (vp) {
		t.ok(/nexus/i.test(vp.key), 'is good result');
	});

	t.end();
});
