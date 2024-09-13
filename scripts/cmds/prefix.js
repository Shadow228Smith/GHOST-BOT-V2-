module.exports = {
  config: {
    name: "prefix",
    version: "1.1",
    author: "Shadow",
    countDown: 5,
    role: 0,
    shortDescription: "Display bot prefix",
    longDescription: "Shows the current command prefix of the bot.",
    category: "system",
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "prefix") {
      return message.reply({
        body: `╭━━━≪✠≫━━━╮
🕊️ 𝑃𝑅𝐸𝐹𝐼𝑆 ✨🕊️
      ☛ 🎨$🎨
╰━━━≪✠≫━━━╯
═════•【🎖】•═════
🌟✨ 𝒞𝑅𝐸𝐴𝒯𝑜𝑅 ✨🌟
═════•【🎖】•═════
╭━━━≪✠≫━━━╮
☾ ♛𝐬𝐢𝐫 𝐫𝐮𝐟𝐢𝐧♛ ☽
╰━━━≪✠≫━━━╯
          ¥`,
        attachment: await global.utils.getStreamFromURL("https://i.ibb.co/VYSW0zs/image.jpg")
      });
    }
  }
};
