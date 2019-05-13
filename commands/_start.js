/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER
*THIS BOT IS FOR RISK TAKERS ONLY*

Hello Welcome To Dice Bot. In this bot the admin @DiceBotAdmin Will Take The risk For you're investment in the way of Gambling.After You're investment is DOUBLED, TRIPLED, and the other invesment option, it will be withdrawn from 999dice.com Manually By the Admin @DiceBotAdmin.


Every Investment Has Its Own Plan. 

2x = Will Be Doubled. 
Time Based:

50 to 100 = 36 Hours 🕰️🕰️
101 to 201 = 48 Hours 🕰️🕰️
201 and Above = 72 Hours 🕰️🕰️

3x = Will be Tripled. 
Time Based : 

100 to 200 = 48 Hours 🕰️🕰️
201 to 300 = 72 Hours 🕰️🕰️
300 and Above = 120 Hours 🕰️🕰️

4x = Will be Multiplied to 4
Time Based :

300 to 400 = 72 Hours 🕰️🕰️
400 and Above = 240 Hours 🕰️🕰️

PLEASE TYPE /setname TO SET YOU'RE NAME / USERNAME
  ANSWER
  keyboard: Info 🗂 , Referral👥, Withdraw💰,\n Invest 💹, SetAddress🛄, My Address
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("points");
Libs.ResourcesLib.userRes("points").name // is "BTC"
function doAttracted(refUser){
  // access to Bonus Res of refUser
  let refUserBonus = Libs.ResourcesLib.anotherUserRes("points", refUser.telegramid);
  refUserBonus.add(15);  // add 15 bonus for friend
}

Libs.ReferralLib.currentUser.track({
   doAtractedByUser: doAttracted
});

