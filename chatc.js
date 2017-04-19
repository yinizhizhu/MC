var builder = require("botbuilder");

// create the connector
var connector = new builder.ChatConnector();

// create the bot
var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    function(session) {
        builder.Prompts.text(session, "What is your name?");
    },
    function(session, result) {
        session.send('Hello, ' + result.response);
    }
]);