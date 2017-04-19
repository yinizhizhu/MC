var builder = require('botbuilder');
var restify = require("restify");

// existing code

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s listening to %s', server.name, server.url);
});
server.post('/api/messages', connector.listen());