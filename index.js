const Discord = require("discord.js");
const client = new Discord.Client();
var config = require("./config.json");
//const request = require("request");
require("./server.js");
const version = "4.4";

let listeners = 0;

client.on("ready", () => {
  console.log("Ready radio bot !");
});

client.on("ready", () => {
  var playing = ["Radio Music Station | r!help"];
  var interval = setInterval(function() {
    var game = Math.floor(Math.random() * playing.length + 0);
    client.user.setActivity({
      name: playing[game],
      //type: 'STREAMING',
      url: "https://www.twitch.tv/trikanoid"
    });
  }, 6000);
  console.log("Ready!");
});
setInterval(() => {
  try {
    listeners = client.voiceConnections
      .map(
        vc =>
          vc.channel.members.filter(
            me => !(me.user.bot || me.selfDeaf || me.deaf)
          ).size
      )
      .reduce((sum, members) => sum + members);
  } catch (error) {
    listeners = 0;
  }
}, 30000);

client.on("message", message => {
  if (message.channel.type === "dm") return;
  if (message.channel.type !== "text") return;

  if (message.author.bot) return;
  const prefix = "r!";
  const args = message.content.split(" ");
  let command = args[0];
  command = command.slice(prefix.length);
  if (!message.content.startsWith(prefix)) return;
  var reason1 = args.slice(1).join(" ");

  if (command === "restart") {
    if (message.author.id === config.owner) {
      message.channel.send("✅ Rebooting!");
      setTimeout(function() {
        process.exit(1);
      }, 3 * 1000);
    } else {
      message.channel.send(
        "I'm sorry, only the bot creator can use this command!"
      );
    }
  }

  if (command === "play") {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      const embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField(
          "Error!",
          "You must be in a Voice channel to use this command!"
        );

      message.channel.send(embed);
      return;
    }
    if (!args[1]) {
      const embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField("Error!", "No radio was selected!");

      message.channel.send(embed);
      return;
    }
    var newUsersChannel = message.member.voice.channel;
    if (args[1] === "1") {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "🎶 Listen to **ARDAN RADIO FM BANDUNG** Radio on channel  | " +
            newUsersChannel.toString()
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("http").get(
          "http://listento.ardanradio.com:1059/stream/1/",
          res => {
            connection.play(res).on("error", err => {
              client.logger.error(err);
              connection.play(res);
            });
          }
        );
      });
      return;
    }
    if (args[1] === "2") {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "🎶 Listen to **KPOP** radio on channel |" +
            newUsersChannel.toString()
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("https").get("https://str2b.openstream.co/1811?aw_0_1st.collectionid=5249&stationId=5249&publisherId=1835&k=1608476110", res => {
          connection.play(res).on("error", err => {
            client.logger.error(err);
            connection.play(res);
          });
        });
      });
      return;
    }

    if (args[1] === "3") {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "🎶 Listen to **RODJA High Quality** Radio on channel |" +
            newUsersChannel.toString()
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("https").get(
          "https://radioislamindonesia.com:7000/;stream.mp3?_=1",
          res => {
            connection.play(res).on("error", err => {
              client.logger.error(err);
              connection.play(res);
            });
          }
        );
      });
      return;
    }

    if (args[1] === "5") {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "🎶 Listen to **VAPOURMAVE** Radio on channel  | " +
            newUsersChannel.toString()
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("http").get("http://radio.plaza.one/mp3", res => {
          connection.play(res).on("error", err => {
            client.logger.error(err);
            connection.play(res);
          });
        });
      });
      return;
    }
    if (args[1] === "4") {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "🎶 Listen to **RODJA Low Quality** Radio on channel  | " +
            newUsersChannel.toString()
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("https").get(
          "https://radioislamindonesia.com:7001/;stream.mp3",
          res => {
            connection.play(res).on("error", err => {
              client.logger.error(err);
              connection.play(res);
            });
          }
        );
      });
      return;
    }
    if (args[1] === "6") {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "🎶 Listen to **MNC Trijaya FM (Jakarta)** Radio on channel  | " +
            newUsersChannel.toString()
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("https").get(
          "https://live.indostreamserver.com:10961/stream/1/",
          res => {
            connection.play(res).on("error", err => {
              client.logger.error(err);
              connection.play(res);
            });
          }
        );
      });
      return;
    }
    if (args[1] === "7") {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "🎶 Listen to **Deathcore** Radio on channel  | " +
            newUsersChannel.toString()
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("http").get("http://79.111.14.76:8002/deathcore", res => {
          connection.play(res).on("error", err => {
            client.logger.error(err);
            connection.play(res);
          });
        });
      });
      return;
    }
    if (args[1] === "8") {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "🎶 Listen to **Prambors FM 102.2 Jakarta** Radio on channel  | " +
            newUsersChannel.toString()
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("http").get(
          "http://masima.rastream.com/masima-pramborsjakarta",
          res => {
            connection.play(res).on("error", err => {
              client.logger.error(err);
              connection.play(res);
            });
          }
        );
      });
      return;
    }
    if (args[1] === "9") {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "🎶 Listen to **NAGASWARA FM** Radio on channel  | " +
            newUsersChannel.toString()
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("https").get(
          "https://live.nagaswarafm.com:9900/stream",
          res => {
            connection.play(res).on("error", err => {
              client.logger.error(err);
              connection.play(res);
            });
          }
        );
      });
      return;
    }
    if (args[1] === "10") {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "🎶 Listen to **Bamf Radio - Lofi and Chill dari Bamf** Radio on channel  | " +
            newUsersChannel.toString()
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("https").get(
          "https://stream38.hearthis.at/listen.mp3?id=5289325&track=7424x2q2a423t2v2k5549403k5t214u2a4b4x284s2748474l5y2f5j5y29433q2m2k4h494&key=9599055&t=-62169987600",
          res => {
            connection.play(res).on("error", err => {
              client.logger.error(err);
              connection.play(res);
            });
          }
        );
      });
      return;
    }
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("Error!", "Radio does not exist!");

    message.channel.send(embed);
  }

  if (command === "suggestion") {
    if (!args.slice(1).join(" ")) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Empty message!",
          "You must input a message to suggestion! You cannot leave it blank."
        );

      message.channel.send(embed);
      return;
    }
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("Suggestion sent!", "We will look into it!");

    message.channel.send(embed);
    const embed1 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor("RANDOM")
      .addField("New Suggestion!", `<@${message.author.id}> has sent in a report!`)
      .addField("Suggestion:", `${args.slice(1).join(" ")}`)
      .addField("Server:", `${message.guild.name} (${message.guild.id})`)
      .setThumbnail(message.author.avatarURL());

    client.channels.cache.get(`531384723713556481`).send(embed1);
    return;
  }

  if (command === "list") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`Radio Music Station`, message.guild.iconURL({ dynamic: true }))
      .setColor("RANDOM")
      .addField(
        "Radio Station List:",
        "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n`1`: Ardan Radio FM Bandung\n`2`: K-POP\n`3`: RODJA High Quality\n`4`: RODJA Low Quality\n`5`: VAPOURMAVE\n`6`: MNC Trijaya FM (Jakarta)\n`7`: Deatcore\n`8`: Prambors FM 102.2 Jakarta\n`9`:  NAGASWARA FM\n`10`: Bamf Radio - Lofi and Chill \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n**Usage:** `r!play <number>`\n**e.g:** `r!play 8`"
      )
      .setThumbnail(client.user.avatarURL);

    message.channel.send(embed);
  }

  if (command === "help") {
    const embed = new Discord.MessageEmbed()
      .setAuthor("Radio Music Station", message.guild.iconURL({  dynamic: true}))
      .setColor("RANDOM")
      .setDescription("[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=660467822085931018&permissions=8&scope=bot) | You want more stations? `r!suggestion <message>`\n**NOTE**:\nIf the radio playing nothing, you can fix it by typing `r!leave` -> `r!play <number>`")
      .addField("Radio", "```r!play <number>\nr!link <link>\nr!list\nr!leave```")
    message.channel.send(embed);
  }

  if (command === "link") {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Error!",
          "You must be in a Voice channel to use this command!"
        );

      message.channel.send(embed);
      return;
    }
    if (!args[1]) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("Error!", "No URL inputted!");

      message.channel.send(embed);
      return;
    }
    if (message.content.match(/http/i)) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Success!",
          "Now playing your inputted radio station in " +
            message.member.voice.channel +
            "\nIf you can't hear anything after a while it could be because the link was invalid"
        );

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require("http").get(args[1], res => {
          connection.play(res);
        });
      });
      return;
    }
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("Error!", "Inputted URL did not contain http at the start!");

    message.channel.send(embed);
    return;
  }

  if (command === "leave") {
    if (message.member.voice.channel) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("Success!", "Voice channel successfully left!");

      message.channel.send(embed);
      message.member.voice.channel.leave();
      return;
    } else {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("Error!", "You are currently not in a voice channel!");

      message.channel.send(embed);
      return;
    }
  }
  });
client.login(process.env.TOKEN);
