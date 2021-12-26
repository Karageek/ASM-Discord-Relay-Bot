const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("asm-private-mod-emergency-stop")
        .setDescription("Emergency Stop Private Modded Servers"),
    async execute(interaction) {
                interaction.reply("psm!stop priv-val");
           sleep(4000)
               .then(() => interaction.followUp("psm!stop priv-aber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!stop priv-crystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!stop priv-extinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!stop priv-gen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!stop priv-gen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!stop priv-island"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!stop priv-lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!stop priv-rag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!stop priv-scorched"))
    }
}