const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("asm-status")
        .setDescription("Query All Servers Status"),
    async execute(interaction) {
                interaction.reply("asm!status abermod");
           sleep(4000)
               .then(() => interaction.followUp("asm!status crystalmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!status extinctionmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!status gen2mod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!status islandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!status lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!status lostmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!status ragmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!status patreonbreed"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!status patreonhunting"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!status patreonislandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!status pvprag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xaber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xcensorna"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xcenter"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xcrystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xextinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xgen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xgen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xrag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xscorched"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xval"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xvanisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!status xvanrag"))
    }
}