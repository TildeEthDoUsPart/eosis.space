let commands = {
    "about" : about,
    "setup" : setup,
    "cat" : cat, //secret
    "zerator" : zerator, ///secret
    "motd" : motd,
    "neofetch" : neofetch, //secret
    "projects" : projects,
    "error" : error,
    "moons" : moons, //secret
    "clear" : clear,
    "cls" : clear,
    "reload" : reload,
    "r" : reload,
    "date" : date, //secret
    "help" : help,
    "manul" : manul, //secret
    "repo" : repo,
    "meow" : meow, //secret
    "history" : ehistory,
    "whoami" : whoami, //secret
    "socials" : socials,
    "skills" : skills,
    "blog" : blog,
    "girlkisser" : girlkisser, // secret
    "neofetch": neofetch // secret
}


let commandBox = $('#commandBox')
let commandDisplay = $('#commandDisplay')
let commandPrefix = '<label id="commandPrefix">visitor@eosis.space:~$ </label>'

let commandHistory = []
let historyIndex = -1

console.log(navigator)

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

commandBox.on("keydown",function(evt) {
    if (evt.keyCode == 13){
        if (commandBox.val() != ""){
            historyIndex = -1   
            commandHistory.unshift(commandBox.val())
            submitCommand(commandBox.val(),commandHistory[0])   
        }
    } else if (evt.keyCode == 38){
        historyIndex = clamp(historyIndex+1,-1,commandHistory.length)
        evt.preventDefault()
        commandBox.val(commandHistory[historyIndex])
    } else if (evt.keyCode == 40){
        historyIndex = clamp(historyIndex-1,-1,commandHistory.length)
        evt.preventDefault()
        commandBox.val(commandHistory[historyIndex])
    } else {
        historyIndex = -1
    }
})


function submitCommand(command,value){
    commandBox.val("")
    if (command in commands){
        commandDisplay.append(commandPrefix + "<span id='command'>" + value + "</span><br><br>")
        print_command(command,value)
    } else {
        commandDisplay.append(commandPrefix + "<span id='error'>" + value + "</span><br><br>")
        print_command("error",value)
    }
}

function clearConsole(){
    commandHistory = []
    commandDisplay.html("")
}

function reloadPage(){
    window.location.reload()
}

function displayHistory(){
    commandHistory.map((item) => {
        commandDisplay.append(item + "<br>")
    })
}




function updateUptime(){
    console.log(start)
    console.log(Date.now())
    console.log(Date.now() - start)
    uptime = Date.now() - start
    msToTime(uptime)
}

function msToTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const remainderHours = hours % 24;
    const remainderMinutes = minutes % 60;

    const dayText = days > 0 ? `${days} day${days > 1 ? 's' : ''}` : '';
    const hourText = remainderHours > 0 ? `${remainderHours} hour${remainderHours > 1 ? 's' : ''}` : '';
    const minutesText = remainderMinutes > 0 ? `${remainderMinutes} minute${remainderMinutes > 1 ? 's' : ''}` : '';

    const result = [dayText, hourText, minutesText].filter(Boolean).join(', ');

    neofetch[5] = `<pre>     <span id="nfred">it::::tt333EEF</span> <span id="nfgreen">@EEEEEEttttt33F</span>    Uptime: ${result.length > 0 ? result : 'less than a minute'}</pre>`
}

function displayDate(){
    commandDisplay.append(Date() + "<br>")
}

function print_command(command,value){
    if (command === "neofetch"){
        console.log("ceratio")
        updateUptime()
    }
    commands[command].map((line) => {
    let preMode = false
    if (line.substring(0,5) == "<pre>"){
        preMode = true
    }
        if (line.split(' ')[0] == "&link"){
            sleep(700).then(() => {window.open(line.split(' ')[1],"_blank")})
        } else if (line.split(' ')[0] == "&func"){
            window[line.split(' ')[1]]()
        } else {
            console.log(preMode)
            if (preMode){commandDisplay.append(line)} else {commandDisplay.append(line + "<br>")}
        }
    })
    if (command != "clear"){commandDisplay.append("<br>")}
    commandBox.focus()
    commandBox.get(0).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    preMode = false
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

sleep(100).then(() => {print_command("motd","motd")})
console.log("%cDid you know there are 9 hidden commands ? Try to find them !","color:#dfa00b;font-size:20px")
console.log("%cHint : 3 of them are based on famous linux utility commands (d.../n......./w.....), and the other 6 are based off of eosis's personal interests (c../z....../m..../m.../g........./m....).","font-size:10px;color:grey")