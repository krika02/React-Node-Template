const Hapi = require('hapi');
const Inert = require('inert');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000,
});

server.register(Inert, (err) => {
	server.route({
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply.file('./public/index.html');
		}
	});
	server.route({
		method: 'GET',
		path: '/bundle.js',
		handler: function (request, reply) {
			reply.file('./public/bundle.js');
		}
	});
});

// Start the server
server.start((err) => {

	if (err) {
		throw err;
	}

	console.log('Server running at:', server.info.uri);
});
