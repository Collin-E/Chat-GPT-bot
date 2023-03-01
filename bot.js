import { Client, GatewayIntentBits } from "discord.js";
import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
    allowedMentions: {
        repliedUser: false,
    },
});

const configuration = new Configuration({
    apiKey: process.env.OPENAI_TOKEN,
});

const openai = new OpenAIApi(configuration);

client.on("ready", () => {
    console.log(`> ${client.user.username} is online!`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    const channel = message.channel;
    const prompt = message.content;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message.content,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
    });
    channel.send(response.data.choices[0].text);
});

client.login(process.env.DISCORD_TOKEN);
