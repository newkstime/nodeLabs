/**
app.js
This is a simple web site that hosts 
a fake Wake Tech Credit Union web site.
It saves customer feedback in a MongoDB.
*/

var express = require('express');
var fs      = require('fs');
var MongoClient = require('mongodb').MongoClient;
var collection;

// programmer defined function to return customer feedback log as an html to the browser.
function createHTMLReturn(docs, res) {
	var htmlText = "<html><head><title>WTCU Feedback Log</title><link rel='stylesheet' type='text/css' href='css/interface.css'</head><body><table style='border: 1px;'><tr><th>Date</th><th>Feedback</th></tr>";
	for (var i = 0; i < docs.length; i++){
		var doc = docs[i];
		htmlText += "<tr><td>" + doc.date + "</td><td>" + doc.content + "</td></tr>";
	}
	htmlText += "</table></body></html>";
	res.send(htmlText);
}

/**
 *  Define the sample application.
 */
var SampleApp = function() {

	//  Scope.
	var self = this;


	/*  ================================================================  */
	/*  Helper functions.                                                 */
	/*  ================================================================  */

	/**
	 *  Set up server IP address and port # using env variables/defaults.
	 */
	self.setupVariables = function() {
		//  Set the environment variables we need.
		//self.ipaddress = process.env.IP;
		//self.port = process.env.PORT || 5000;

		//if (typeof self.ipaddress === "undefined") {
		//    self.ipaddress = "127.0.0.1";
		//};
	};


	/**
	 *  Populate the cache.
	 */
	self.populateCache = function() {
		if (typeof self.zcache === "undefined") {
			self.zcache = { 'index.html': '' };
		}

		//  Local cache for static content.
		self.zcache['index.html'] = fs.readFileSync('./index.html');
	};


	/**
	 *  Retrieve entry (content) from cache.
	 *  @param {string} key  Key identifying content to retrieve from cache.
	 */
	self.cache_get = function(key) { return self.zcache[key]; };


	/**
	 *  terminator === the termination handler
	 *  Terminate server on receipt of the specified signal.
	 *  @param {string} sig  Signal to terminate on.
	 */
	self.terminator = function(sig){
		if (typeof sig === "string") {
			console.log('%s: Received %s - terminating sample app ...',
				Date(Date.now()), sig);
			process.exit(1);
		}
		console.log('%s: Node server stopped.', Date(Date.now()) );
	};


	/**
	 *  Setup termination handlers (for exit and a list of signals).
	 */
	self.setupTerminationHandlers = function(){
		//  Process on exit and signals.
		process.on('exit', function() { self.terminator(); });

		// Removed 'SIGPIPE' from the list - bugz 852598.
		['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
			'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
		].forEach(function(element, index, array) {
			process.on(element, function() { self.terminator(element); });
		});
	};


	/*  ================================================================  */
	/*  App server functions (main app logic here).                       */
	/*  ================================================================  */

	/**
	 *  Create the routing table entries + handlers for the application.
	 */
	self.createRoutes = function() {
		self.routes = { };

		self.routes['/feedback'] = function(req, res) {
			console.log("-- Received a customer feedback: [" + req.body.feedback + "]");

			// Save to MongoDB -- to be completed by the student
			// A sample feedback document looks like this:
			// { "date": "7/16/2016", "content": "This is a test for customer feedback" }
			// Hint: The database url is: 'mongodb://127.0.0.1:27017/local'
			//       The collection name is 'feedback'
			//       Remember to close the connection by calling 'db.close();'
			// Troubleshooting:  If you get database error, make sure the following is done:
			//       1. Your mongodb is installed and is running.
			//       2. You have created a collection named 'feedback' in the default database called 'local'.
			//          The commands to do it is:
			//              use local
			//              db.createCollection('feedback')
            MongoClient.connect('mongodb://127.0.0.1:27017/local', function (err, db) {
                if (err) throw err;
                console.log('Successfully connected');

                var collection = db.collection('feedback');
                var currentDate = new Date().toLocaleString().split(',')[0]
                var feedback = { "date" : currentDate, "content" : req.body.feedback };
                collection.insert(feedback, function (err, docs) {
                    db.close();
                });
			});
			res.send("<html><head><title>WTCU Feedback</title><script>setTimeout(function(){window.location.href='/'},3000);</script></head><body>Thanks for your feedback!</body></html>");
		};
		
		
		self.routes['/log'] = function(req, res) {
			// Retrieve all feedback documents from MongoDB
			MongoClient.connect('mongodb://127.0.0.1:27017/local', function (err, db){
				if (err) throw err;
				console.log('connected to mongodb://127.0.0.1:27017/local');
				db.collection('feedback').find().toArray(function(err, docs) {
					createHTMLReturn(docs, res);
				});

				db.close();
			});
		};
		
		

		self.routes['/'] = function(req, res) {
			res.setHeader('Content-Type', 'text/html');
			res.send(self.cache_get('index.html') );
		};
	};


	/**
	 *  Initialize the server (express) and create the routes and register
	 *  the handlers.
	 */
	self.initializeServer = function() {
		self.createRoutes();
		//self.app = express.createServer();
		self.app = express();
		self.app.set('port', process.env.PORT || 3333);
		self.app.set('ip', process.env.IP || "127.0.0.1");
		self.app.use(express.static(__dirname));
		//self.app.use(express.bodyParser());
		self.app.use(express.json());
		self.app.use(express.urlencoded());

		//  Add handlers for the app (from the routes).
		for (var r in self.routes) {
			self.app.get(r, self.routes[r]);  // maps the HTTP GET request
			self.app.post(r, self.routes[r]);  // maps the HTTP POST request
		}
	};


	/**
	 *  Initializes the sample application.
	 */
	self.initialize = function() {
		self.setupVariables();
		self.populateCache();
		self.setupTerminationHandlers();

		// Create the express server and routes.
		self.initializeServer();
	};


	/**
	 *  Start the server (starts up the sample application).
	 */
	self.start = function() {
		//  Start the app on the specific interface (and port).
		self.app.listen(self.app.get('port'), function() {
			console.log('%s: Node server started on %s:%d ...',
				Date(Date.now() ), self.app.get('ip'), self.app.get('port'));
		});
	};

};   /*  Sample Application.  */



/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();

