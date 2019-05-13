/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 💰 balance 💰
CMD*/

let res = Libs.ResourcesLib.userRes("points")
Libs.ResourcesLib.userRes("points").name // is "BTC"
Bot.sendMessage("You're points: " + res.value());

