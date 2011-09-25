var httpAuth = require('http-auth2');
httpAuth.createServer(function(username) {
	// Multiple username/password combinations are supported.
	if (username == 'user1') return 'password1';
	if (username == 'user2') return 'password2';
	return false;
}, function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end("<pre>If you can read this, you've authenticated successfully.</pre>");
}).listen(8000);
