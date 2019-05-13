/*CMD
  command: /myinvites
  help: 
  need_reply: 
  auto_retry_time: 
  answer: The Following are the people who started the bot using you're referral Link
  keyboard: Back 🔙
  aliases: my invites
CMD*/

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "Total users: " + refList.length + "\n----";
  for(i in refList){
    user = refList[i];
    msg+= "\n👤 `" +  user.first_name + " @" + user.username + "`";
  }
}else{
  msg = "No any affiliated users";
}
Bot.sendMessage(msg);


