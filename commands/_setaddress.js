/*CMD
  command: /setaddress
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please Send You're Address
  keyboard: 
  aliases: setaddress🛄
CMD*/

User.setProperty("address", data.message, "text")
Bot.runCommand("/setwallet_reply");
