const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("asm-private-mod-shutdown")
        .setDescription("Shutdown Private Modded Servers"),
    async execute(interaction) {
                interaction.reply("psm!shutdown priv-val");
           sleep(4000)
               .then(() => interaction.followUp("psm!shutdown priv-aber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!shutdown priv-crystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!shutdown priv-extinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!shutdown priv-gen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!shutdown priv-gen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!shutdown priv-island"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!shutdown priv-lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!shutdown priv-rag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!shutdown priv-scorched"))
    }
}