const storage = require('node-sessionstorage')

storage.setItem('foo', 'bar')

console.log('item set:', storage.getItem('foo'));