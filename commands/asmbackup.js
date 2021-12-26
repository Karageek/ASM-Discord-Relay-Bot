const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("asm-backup")
        .setDescription("Backup All Servers"),
    async execute(interaction) {
                interaction.reply("asm!backup abermod");
           sleep(4000)
               .then(() => interaction.followUp("asm!backup crystalmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!backup extinctionmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!backup gen2mod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!backup islandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!backup lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!backup lostmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!backup ragmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!backup patreonbreed"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!backup patreonhunting"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!backup patreonislandmod"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("asm!backup pvprag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xaber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xcensorna"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xcenter"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xcrystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xextinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xgen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xgen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xrag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xscorched"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xval"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xvanisland"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("xsm!backup xvanrag"))
    }
}