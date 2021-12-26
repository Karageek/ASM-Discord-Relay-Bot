const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("asm-private-mod-info")
        .setDescription("Info Private Modded Servers"),
    async execute(interaction) {
                interaction.reply("psm!info priv-val");
           sleep(4000)
               .then(() => interaction.followUp("psm!info priv-aber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!info priv-crystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!info priv-extinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!info priv-gen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!info priv-gen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!info priv-island"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!info priv-lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!info priv-rag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!info priv-scorched"))
    }
}