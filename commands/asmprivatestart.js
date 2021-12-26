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
        .setName("asm-private-mod-start")
        .setDescription("Start Private Modded Servers"),
    async execute(interaction) {
                interaction.reply("psm!start priv-val");
           sleep(4000)
               .then(() => interaction.followUp("psm!start priv-aber"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-crystal"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-extinction"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-gen"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-gen2"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-island"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-lost"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-rag"))
               .then(() => sleep(4000))
               .then(() => interaction.followUp("psm!start priv-scorched"))
    }
}