import { Client } from 'discord.js';
import { CONFIG } from './config';
import { createReadStream } from 'fs';

export const client = new Client();

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
    }
});
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});


client.login(CONFIG.token);