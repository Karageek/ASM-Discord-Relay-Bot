const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("asm-shutdown-all")
        .setDescription("Shutdown All Servers"),
    async execute(interaction) {
                interaction.reply("asm!shutdown abermod");
           sleep(4000)
               .then(() => interaction.followUp("asm!shutdown crystalmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!shutdown extinctionmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!shutdown gen2mod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!shutdown islandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!shutdown lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!shutdown lostmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!shutdown ragmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!shutdown patreonbreed"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!shutdown patreonhunting"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!shutdown patreonislandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!shutdown pvprag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xaber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xcensorna"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xcenter"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xcrystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xextinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xgen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xgen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xrag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xscorched"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xval"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xvanisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!shutdown xvanrag"))
    }
}