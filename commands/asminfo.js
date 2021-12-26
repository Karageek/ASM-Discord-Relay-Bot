const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("asm-info")
        .setDescription("Query All Servers Version, Map, Players Status"),
    async execute(interaction) {
                interaction.reply("asm!info abermod");
           sleep(4000)
               .then(() => interaction.followUp("asm!info crystalmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!info extinctionmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!info gen2mod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!info islandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!info lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!info lostmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!info ragmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!info patreonbreed"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!info patreonhunting"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!info patreonislandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!info pvprag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xaber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xcensorna"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xcenter"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xcrystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xextinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xgen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xgen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xrag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xscorched"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xval"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xvanisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!info xvanrag"))
    }
}