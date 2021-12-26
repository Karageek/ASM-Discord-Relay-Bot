const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("asm-private-mod-start")
        .setDescription("Start Private Modded Servers"),
    async execute(interaction) {
                interaction.reply("psm!start priv-val");
           sleep(4000)
               .then(() => interaction.followUp("psm!start priv-aber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-crystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-extinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-gen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-gen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-island"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-rag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-scorched"))
    }
}