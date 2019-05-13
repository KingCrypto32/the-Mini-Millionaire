/*CMD
  command: refferal points
  help: 
  need_reply: 
  auto_retry_time: 
  answer: Please Click 💰 Balance 💰to check you're points 
  keyboard: 💰 Balance 💰 , Back 🔙
  aliases: refferal point's
CMD*/

var balance = User.getProperty("Refferal Points"); // or your code here
Bot.sendKeyboard(String(15) + "💰 Balance 💰" );
