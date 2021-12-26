// ASM Relay Bot designed by Kara's Worlds 
// No warranties or guaranties. Use at YOUR OWN RISK!!!
// ARK ASM Relay Bot © 2021 by Kara's Worlds is licensed under Attribution-NonCommercial 4.0 International. 
// To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/
// Free to use, modify, non-commercial redistribution under CC BY-NC 4.0.
// These lines must be included in any use/re-use, distribution, or modifcation.

require ("dotenv").config()
const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
    intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES
    ]
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}


client.once("ready", () => {
    console.log("ASM Relay online");

    const CLIENT_ID = client.user.id;
    
    const rest = new REST({
        version: "9"
    }).setToken(process.env.TOKEN);

    (async () => {
        try {
            if (process.env.ENV === "production") {
                await rest.put(Routes.applicationCommands(CLIENT_ID), {
                    body: commands
                });
                console.log("Sucessfully registered commands globally.");
            } else {
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
                    body: commands
                });
                console.log("Sucessfully registered commands locally.");
            }    
        } catch (err) {
            if (err) console.error(err);
        }
    })();
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch(err) {
        if (err) console.error(err);

        await interaction.reply({
            content: "An error occurred while executing that command.",
            ephemeral: true
        });
    }

});

client.on("messageCreate", message => {
    if (message.content.startsWith("%")) {
        if (message.content.substring(1) === "asmtest") {
            message.channel.send("asm!info abermod");
            sleep(3000)
                .then(() => message.channel.send("asm!info crystalmod"))
                .then(() => sleep(3000))
                .then(() => message.channel.send("asm!info extinctionmod"))
                .then(() => sleep(3000))
                .then(() => message.channel.send("asm!info gen2mod"))
                .then(() => sleep(3000))
                .then(() => message.channel.send("asm!info islandmod"))
                .then(() => sleep(3000))
                .then(() => message.channel.send("asm!info lost"))
                .then(() => sleep(3000))
                .then(() => message.channel.send("asm!info lostmod"))
                .then(() => sleep(3000))
                .then(() => message.channel.send("asm!info ragmod"))
                .then(() => sleep(3000))
                .then(() => message.channel.send("asm!info patreonbreed"))
                .then(() => sleep(3000))
                .then(() => message.channel.send("asm!info patreonhunting"))
                .then(() => sleep(3000))
                .then(() => message.channel.send("asm!info patreonislandmod"))
                .then(() => sleep(3000))
                .then(() => message.channel.send("asm!info pvprag"))
        }
    }
})
client.on("messageCreate", message => {
    if (message.content.startsWith("%")) {
        if (message.content.substring(1) === "asm") {
            message.channel.send("asm!info abermod");
        }
    }
})

client.login(process.env.TOKEN)