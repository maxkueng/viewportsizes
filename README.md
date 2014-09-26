viewportsizes
=============

[![Build Status](https://secure.travis-ci.org/maxkueng/viewportsizes.png?branch=master)](http://travis-ci.org/maxkueng/viewportsizes)

Inspired by [viewport-list](https://github.com/kevva/viewport-list), this module
gives you an *offline* version of [viewportsizes.com](http://viewportsizes.com/)'s
viewport sizes list.

It module downloads a viewport list upon installation and does not request it
from the Internet every time.

### Installation

```bash
npm install viewportsizes --save
```

### Usage

**Load the module**

```javascript
var viewports = require('viewportsizes');
```

**Get a list of all viewport sizes**

```javascript
viewports.list();
```

```
[ { key: 'acer iconia tab a1-810',
    fulltext: 'acer iconia tab a1-810 android 2013-05',
    name: 'Acer Iconia Tab A1-810',
    platform: 'android 4.2.2',
    size: { width: '768', height: '1024' },
    release: '2013-05' },

    ...
]
```

**Search the list**

```javascript
viewports.list('iphone 5');
```

```
[ { key: 'iphone 5',
    fulltext: 'iphone 5 ios 2012-09',
    name: 'iPhone 5',
    platform: 'ios 6.0',
    size: { width: '320', height: '568' },
    release: '2012-09' },
  { key: 'iphone 5c',
    fulltext: 'iphone 5c ios 2013-09',
    name: 'iPhone 5c',
    platform: 'ios 7.0',
    size: { width: '320', height: '568' },
    release: '2013-09' },
  { key: 'iphone 5s',
    fulltext: 'iphone 5s ios 2013-09',
    name: 'iPhone 5s',
    platform: 'ios 7.0',
    size: { width: '320', height: '568' },
    release: '2013-09' } ]
```

**Get a record by key**

```javascript
viewports.get('iphone 5');
```

```
{ key: 'iphone 5',
  fulltext: 'iphone 5 ios 2012-09',
  name: 'iPhone 5',
  platform: 'ios 6.0',
  size: { width: '320', height: '568' },
  release: '2012-09' }
```

**Get a record by key and force oriantation**

You can add `@landscape` or `@portrait` to the key to rotate the device.

```javascript
viewports.get('iphone 5@landscape');
```

```
{ key: 'iphone 5',
  fulltext: 'iphone 5 ios 2012-09',
  name: 'iPhone 5',
  platform: 'ios 6.0',
  size: { width: '568', height: '320' },
  release: '2012-09' }
```


### MIT License

Copyright (c) 2014 Max Kueng

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
