const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("asm-emergency-stop")
        .setDescription("Emergency Stop ALL Servers"),
    async execute(interaction) {
                interaction.reply("asm!stop abermod");
           sleep(4000)
               .then(() => interaction.followUp("asm!stop crystalmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!stop extinctionmod"))
            //   .then(() => sleep(4000))
            //   .then(() => interaction.followUp("asm!stop gen2mod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!stop islandmod"))
            //   .then(() => sleep(4000))
            //   .then(() => interaction.followUp("asm!stop lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!stop lostmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!stop ragmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!stop patreonbreed"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!stop patreonhunting"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!stop patreonislandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!stop pvprag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xaber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xcensorna"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xcenter"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xcrystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xextinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xgen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xgen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xrag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xscorched"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xval"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xvanisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!stop xvanrag"))
    }
}