# http-auth
HTTP server with basic authentication.

## Installation

Via git (or downloaded tarball):

	$ git clone git://github.com/SDA/http-auth2.git

Via [npm](http://github.com/isaacs/npm):

	$ npm install http-auth2

## Usage
	
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

Server startup params
--------------------

 - **auth** - Authentication callback that accepts a username and returns the password for that user, or false if that user account is invalid.
 - **callback** - Callback function that will be called after server starts.

Acknowledgments
--------------

Based on work by Gevorg Harutyunyan:
https://github.com/gevorg/http-auth

## License

The GPL version 3, read it at [http://www.gnu.org/licenses/gpl.txt](http://www.gnu.org/licenses/gpl.txt)
