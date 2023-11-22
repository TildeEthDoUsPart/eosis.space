let commands = {
    "about" : about,
    "cat" : cat, //secret
    "zerator" : zerator, //secret
    "motd" : motd,
    "neofetch" : NOT_IMPLEMENTED_YET, //secret
    "projects" : NOT_IMPLEMENTED_YET,
    "error" : error,
    "clear" : NOT_IMPLEMENTED_YET,
    "date" : NOT_IMPLEMENTED_YET, // secret
    "help" : help,
    "repo" : repo,
    "history" : NOT_IMPLEMENTED_YET,
    "whoami" : whoami, // secret
    "socials" : NOT_IMPLEMENTED_YET,
    "skills" : NOT_IMPLEMENTED_YET,
    "blog" : blog,
    "weather" : weather, //reserved for later use
    "tinyspace" : tinyspace, //reserved for later use
}


let commandBox = $('#commandBox')
let commandDisplay = $('#commandDisplay')
let commandPrefix = '<label id="commandPrefix">visitor@eosis.space:~$ </label>'

let commandHistory = []
let historyIndex = -1


commandBox.on("keydown",function(evt) {
    if (evt.keyCode == 13){
        if (commandBox.val() != ""){
            commandHistory.unshift(commandBox.val())
            submitCommand(commandBox.val(),commandHistory[commandHistory.length-1])
        }
    } else if (evt.keyCode == 38){
        evt.preventDefault()
        historyIndex += 1
        commandBox.val(commandHistory[historyIndex])
    } else if (evt.keyCode == 40){
        evt.preventDefault()
        historyIndex -= 1
        commandBox.val(commandHistory[historyIndex])
    } else {
        historyIndex = -1
    }
})


function submitCommand(command,value){
    commandBox.val("")
    if (command in commands){
        print_command(command,value)
    } else {
        print_command("error",value)
    }
}

function print_command(command,value){
    commandDisplay.append(commandPrefix + value + "<br><br>")
    commands[command].map((line) => {
        if (line.split(' ')[0] == "&link"){
            sleep(700).then(() => {window.open(line.split(' ')[1],"_blank")})
        }
        commandDisplay.append(line + "<br>")
    })
    commandDisplay.append("<br>")
    commandBox.focus()
    commandBox.get(0).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

sleep(100).then(() => {print_command("motd","motd")})
console.log("%cDid you know there are 5 hidden commands ? Try to find them !","color:#dfa00b;font-size:20px")
console.log("%cHint : 3 of them are based on famous linux utility commands (d.../n......./w.....), and the other 2 are based off of eosis's personal interests (c../z......).","font-size:10px;color:grey")