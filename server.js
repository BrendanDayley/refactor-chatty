

var http = require('http');

var somthingHere = require('express')

var messages = [{message: 'hello'}];










































// var postData = '';


// var onRequest = function (req, res) {
// 	var postData = '';
// 	if (req.method === 'GET') {
		

// 		res.statusCode = 200;

// 		res.setHeader('Content-type', 'application/json');

// 		// Allow any website to access this API
// 		res.setHeader('Access-Control-Allow-Origin', '*');
// 		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
// 		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

// 		// Don’t allow scripts or iframes execution from domains we don't trust
// 		res.setHeader('X-XSS-Protection', '1; mode=block');
// 		res.setHeader('X-Frame-Options', 'SAMEORIGIN');
// 		res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");

// 		res.end(JSON.stringify(messages));
		
// 	} else if (req.method === 'POST') {
		
// 		req.on('data', function (chunk) {
// 			postData += chunk.toString();
// 			console.log(postData);
// 		});
// 		res.writeHead(200, {
//         'Connection': 'close',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       });
// 		req.on('end', function () {
// 			console.log('I read your mail ');
// 			console.log(JSON.parse(postData));
// 			var msg = JSON.parse(postData);
// 			messages.push(msg);
// 			res.end(JSON.stringify(messages));
// 		});
// 	} else if(req.method === 'OPTIONS'){
// 		 res.writeHead(200, {
//         'Connection': 'close',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//       });
//     res.end("{}");
// 	}
// }
// var server = http.createServer();
// server.on('request', onRequest);
// server.listen(8181, function (){
// 	console.log('listening', server.address());
// });
