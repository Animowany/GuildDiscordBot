const { client, nid } = require('../bot');

client.on('messageCreate', async (msg) => {
    if (msg.author.bot) return;
    if (msg.channelId === nid) {
    await msg.member.setNickname("『xx』"+msg.content)
    await msg.delete();
    }

});
