console.log("TOKEN 있음?", process.env.TOKEN ? "YES" : "NO");
const { Client, GatewayIntentBits } = require('discord.js');

// 봇 생성
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// 봇 켜졌을 때
client.once('ready', () => {
  console.log('봇 켜짐');
  console.log(client.user.tag);
});

// 로그인 (Render에서 TOKEN 가져옴)
client.login(process.env.TOKEN);

// Render용 서버 (이거 없으면 꺼짐)
require('http').createServer((req, res) => {
  res.end('OK');
}).listen(process.env.PORT);
