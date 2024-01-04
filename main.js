let commands = {
    "about" : about,
    "setup" : setup,
    "cat" : cat, //secret
    "zerator" : zerator, ///secret
    "motd" : motd,
    "neofetch" : NOT_IMPLEMENTED_YET, //secret
    "projects" : projects,
    "error" : error,
    "moons" : moons, //secret
    "clear" : clear,
    "cls" : clear,
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
    "weather" : weather, //reserved for later use
    "tinyspace" : tinyspace, //reserved for later use
}


let commandBox = $('#commandBox')
let commandDisplay = $('#commandDisplay')
let commandPrefix = '<label id="commandPrefix">visitor@eosis.space:~$ </label>'

let commandHistory = []
let historyIndex = -1


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

function displayHistory(){
    commandHistory.map((item) => {
        commandDisplay.append(item + "<br>")
    })
}

function displayDate(){
    commandDisplay.append(Date() + "<br>")
}

function print_command(command,value){
    commands[command].map((line) => {
        if (line.split(' ')[0] == "&link"){
            sleep(700).then(() => {window.open(line.split(' ')[1],"_blank")})
        } else if (line.split(' ')[0] == "&func"){
            window[line.split(' ')[1]]()
        } else {
            commandDisplay.append(line + "<br>")
        }
    })
    if (command != "clear"){commandDisplay.append("<br>")}
    commandBox.focus()
    commandBox.get(0).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

sleep(100).then(() => {print_command("motd","motd")})
console.log("%cDid you know there are 9 hidden commands ? Try to find them !","color:#dfa00b;font-size:20px")
console.log("%cHint : 3 of them are based on famous linux utility commands (d.../n......./w.....), and the other 6 are based off of eosis's personal interests (c../z....../m..../m.../g........./m....).","font-size:10px;color:grey")