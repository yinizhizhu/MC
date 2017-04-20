var builder = require('botbuilder');
var restify = require("restify");

// create the connector
var connector = new builder.ChatConnector();

// create the bot
var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    function(session) {
        builder.Prompts.text(session, "Please enter your name");
    },
    function(session, result) {
        session.send('Hello, ' + result.response);
    }
]);

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s listening to %s', server.name, server.url);
});
server.post('/api/messages', connector.listen());
