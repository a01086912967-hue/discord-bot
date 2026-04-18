const { 
  Client, 
  GatewayIntentBits, 
  EmbedBuilder, 
  ActionRowBuilder, 
  StringSelectMenuBuilder 
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', async () => {
  console.log('봇 켜짐');

  // const channel = await client.channels.fetch('1495010125700927668');

  const embed = new EmbedBuilder()
    .setTitle('문의하기')
    .setDescription(`## 자동 문의 처리 도우미
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
**📩 메크로 답변 문의**
→ 아래 선택하기 이용

**👤 관리자 답변 문의**
→ 문의 티켓 채널 이용 (순차 처리)
＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
수동 문의는 처리 지연될 수 있습니다 ⚠️`)
    .setColor(0x00ff00);

  const menu = new StringSelectMenuBuilder()
    .setCustomId('문의선택')
    .setPlaceholder('선택하기')
    .addOptions([
      { label: '그룹가입 문의', value: 'group' },
      { label: '구매 방법', value: 'buy' },
      { label: '지급 방법', value: 'pay' },
      { label: '기타', value: 'etc' },
    ]);

  const row = new ActionRowBuilder().addComponents(menu);

  await channel.send({
    embeds: [embed],
    components: [row],
  });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isStringSelectMenu()) return;

  let reply = '';

  if (interaction.values[0] === 'group') {
    reply = `소뚜 로벅스 그룹 가입 링크
https://www.roblox.com/share/g/716618686`;
  }

  else if (interaction.values[0] === 'buy') {
    reply = `구매는 <#1494982675050659840>채널에서 티켓을 생성한 후 이용해 주세요.`;
  }

  else if (interaction.values[0] === 'pay') {
    reply = `# <:ROBUX:1458342496856834153>로벅스 지급방식<:ROBUX:1458342496856834153>

## 게임패스
- 수수료 30%
- 5~7일 지급

## 인게임 선물
- 수수료 없음
- 즉시 지급

## 그룹펀드
- 수수료 없음
- 즉시 지급
- 14일 가입 필요

## 계정 지급
- 보증 없음
- 지급 후 비번 변경필수`;
  }

  else if (interaction.values[0] === 'etc') {
    reply = `기타 문의는 <#1457035868819951911>채널 이용해주세요.`;
  }

  await interaction.reply({
    content: reply,
    ephemeral: true
  });
});

client.login(process.env.TOKEN);
