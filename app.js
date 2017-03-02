'user strict';
const Bot = require('slackbots');
const { API_KEY } = require('./constants');

const settings = {
  token: API_KEY,
  name: 'confusedcius'
}

const bot = new Bot(settings);

bot.on ('start', function() {
  bot.postMessageToChannel('untheme', 'Hello!')
  bot.postMessageToUser('saintograph', 'Hello dad.');
});
