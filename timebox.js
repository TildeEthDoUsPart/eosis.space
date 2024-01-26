let dayOptions = {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
}
dayFormatter = new Intl.DateTimeFormat([], dayOptions);

let hourOptions = {
    timeZone: 'Europe/Paris',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
}
hourFormatter = new Intl.DateTimeFormat([], hourOptions);

let statuses = {
  idle:"idle",
  offline:"offline",
  online:"online",
  dnd:"dnd"
}

let day = $('#day')
let hour = $('#hour')
let discord = $('#status')
let activity = $('#discord')
let activity1 = $('#activity1')
let activity2 = $('#activity2')
let discordicon = $('#discordicon')
let activities = $('.activities')

async function updatePresence(){
  const res = await fetch('https://api.lanyard.rest/v1/users/290482004435271680')
  await res.json().then((rpc) => {
    console.log(rpc.data.activities[1] !== undefined)
    console.log(rpc.data.activities[1])
    discord.text(statuses[rpc.data.discord_status])
    if (rpc.data.activities[1] !== undefined) {

      switch (rpc.data.activities[1].name) {
        case "Visual Studio Code":
          activity1.text(rpc.data.activities[1].details)
          activity2.text(rpc.data.activities[1].state)
          discordicon.css("fill","var(--accent)")
          break;

        case "Spotify":
          activity1.text(`Listening to ${rpc.data.activities[1].state}`)
          activity2.text(rpc.data.activities[1].details)
          discordicon.css("fill","var(--accent)")
          break;
          
        default:
          activity1.text(`Playing ${rpc.data.activities[1].name}`)
          discordicon.css("fill","var(--accent)")
          break;

      }

    } else {
    discordicon.css("fill","var(--text)")
    activity1.text(" ")
    activity2.text(" ")
  }
    
    })
}

function showActivity(){
  activities.toggleClass('hide-activity')
  activities.toggleClass('show-activity')
}




day.text(`${dayFormatter.format(new Date())} at UTC+1`)
hour.text(hourFormatter.format(new Date()))
discord.text("loading")
updatePresence()

setInterval(() => {
    day.text(`${dayFormatter.format(new Date())} at UTC+1`)
    hour.text(hourFormatter.format(new Date()))
}, 1000);


setInterval(() => {
  updatePresence()

}, 10000);
