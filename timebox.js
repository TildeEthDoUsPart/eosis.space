let dayOptions = {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  },
  dayFormatter = new Intl.DateTimeFormat([], dayOptions);

  let hourOptions = {
    timeZone: 'Europe/Paris',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  },
  hourFormatter = new Intl.DateTimeFormat([], hourOptions);

let statuses = {
  idle:"idle",
  offline:"offline",
  online:"online",
  dnd:"dnd"
}

let day = document.querySelector('#day')
let hour = document.querySelector('#hour')
let discord = document.querySelector('#status')


day.textContent = `${dayFormatter.format(new Date())} at UTC+1`
hour.textContent = hourFormatter.format(new Date())
discord.textContent = "idle"
setInterval(() => {
    day.textContent = `${dayFormatter.format(new Date())} at UTC+1`
    hour.textContent = hourFormatter.format(new Date())
}, 1000);


setInterval(() => {
  getRPC().then((rpc) => {
    
  discord.textContent = statuses[rpc.data.discord_status]
  })

}, 10000);

async function getRPC(){
  const res = await fetch('https://api.lanyard.rest/v1/users/290482004435271680')
  const data = await res.json()
  return data
}