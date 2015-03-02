var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});
server.views({
  engines: {
    html: require('handlebars')
  },
  path: './dist'
});

server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {
      reply.view('index');
    }
});

server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
        directory: {
            path: './dist/public'
        }
    }
});

server.start();
console.log("Server started");
