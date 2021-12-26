// ASM Relay Bot designed by Kara's Worlds 
// No warranties or guaranties. Use at YOUR OWN RISK!!!
// ARK ASM Relay Bot © 2021 by Kara's Worlds is licensed under Attribution-NonCommercial 4.0 International. 
// Additionally ARK ASM Relay Bot is covered under GNU GNPV3 License
// To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/
// Free to use, modify, non-commercial redistribution under CC BY-NC 4.0.
//
// These lines must be included in any use/re-use, distribution, or modifcation.
// 
//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with this program.  If not, see <https://www.gnu.org/licenses/>.

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