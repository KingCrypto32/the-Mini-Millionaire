/*CMD
  command: /setname
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Hello Please Set You're Name / Username.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("name", data.message, "text");
Bot.runCommand("/namesaved");
