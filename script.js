var MockApi = require('mock-api-server');
var api = new MockApi({"port": 7000});
// api.start(function(err) {
  // ... do stuff ... 
//  api.stop();
// })
api.respondTo('/netbanking/my/accounts').with({status: 'OK', headers: {'access-control-allow-origin': '*'}});
// api.reset();