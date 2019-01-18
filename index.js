const discord = require("discord.js");
const randomWord = require("random-words")
 
const bot = new discord.Client();

var spam;

var phrases = ["thing1","another one","keep adding more","there's no limit"];

function startspam()
{
    console.log("Spam starting!")
    var server = bot.guilds.get("512248740095066122");
    var chan = new discord.TextChannel(server,{"id":"512248740095066124"});
    spam = bot.setInterval(()=>
    {
        chan.send(randomWord()).then(msg=>{ // Sticking with randomwords.
            console.log(msg.content);
        });
 
    },450);
}

function stopspam()
{
    bot.clearTimeout(spam);
    console.log("Spam Stopped.")
}

bot.on("ready",()=>{
    console.log("Ready!");
})

bot.on("message",msg=>{
    if(msg.author.id == "468479699543130132")
    {
        if(msg.content.toLowerCase() == "!start")
        {
            startspam()
        }
        else if(msg.content.toLowerCase() == "!stop")
        {
            stopspam()
        }
    }
})

bot.on('message', message => {
    var prefix = "$";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.author.id !== "408374252291751976") return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
  
  let args = message.content.split(" ").slice(1);
  let x = args.join(" ")
    if(message.content.startsWith(prefix + 'say15')) {
        message.channel.send(''+x);
            message.delete(999)
    }
    
   
  });

bot.on('message', message => {
    if(message.content.startsWith('!daily_15')) {
        message.channel.send('#daily');
  }
});

bot.on('message', message => {
    if(message.content.startsWith('!credits_15')) {
        message.channel.send('#credits');
  }
});

// 

bot.login(process.env.BOT_KEY);