const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("asm-start-all")
        .setDescription("Start All Servers"),
    async execute(interaction) {
                interaction.reply("asm!start abermod");
           sleep(4000)
               .then(() => interaction.followUp("asm!start crystalmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!start extinctionmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!start gen2mod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!start islandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!start lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!start lostmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!start ragmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!start patreonbreed"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!start patreonhunting"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!start patreonislandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!start pvprag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xaber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xcensorna"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xcenter"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xcrystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xextinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xgen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xgen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xrag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xscorched"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xval"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xvanisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!start xvanrag"))
    }
}