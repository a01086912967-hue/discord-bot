const { Client, GatewayIntentBits } = require('discord.js');

console.log("TOKEN 있음?", process.env.TOKEN ? "YES" : "NO");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log('봇 켜짐');
  console.log(client.user.tag);
});

client.login(process.env.TOKEN)
  .then(() => console.log("로그인 성공"))
  .catch(err => console.log("로그인 실패:", err));

require('http').createServer((req, res) => {
  res.end('OK');
}).listen(process.env.PORT);
