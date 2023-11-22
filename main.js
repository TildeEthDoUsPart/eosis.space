let commands = {
    "about" : about,
    "cat" : cat,
    "zerator" : zerator,
    "motd" : motd,
    "neofetch" : NOT_IMPLEMENTED_YET,
    "projects" : NOT_IMPLEMENTED_YET,
    "error" : error,
    "contact" : NOT_IMPLEMENTED_YET,
    "clear" : NOT_IMPLEMENTED_YET,
    "date" : NOT_IMPLEMENTED_YET,
    "donate" : NOT_IMPLEMENTED_YET,
    "help" : NOT_IMPLEMENTED_YET,
    "history" : NOT_IMPLEMENTED_YET,
    "whoami" : NOT_IMPLEMENTED_YET,
    "socials" : NOT_IMPLEMENTED_YET,
    "skills" : NOT_IMPLEMENTED_YET,
    "setup" : NOT_IMPLEMENTED_YET,
    "blog" : NOT_IMPLEMENTED_YET, //reserved for later use
    "weather" : NOT_IMPLEMENTED_YET, //reserved for later use
    "pokedex" : NOT_IMPLEMENTED_YET, //reserved for later use
    "tinyspace" : NOT_IMPLEMENTED_YET, //reserved for later use
}


let commandBox = $('#commandBox')
let commandDisplay = $('#commandDisplay')
let commandPrefix = '<label id="commandPrefix">visitor@eosis.space:~$ </label>'

let commandHistory = []


commandBox.on("keypress",function(evt) {
    if (evt.keyCode == 13){
        console.log("tg")
        commandHistory.push(commandBox.val())
        console.log(commandHistory[commandHistory.length-1] + "will eb setn to val")
        submitCommand(commandBox.val(),commandHistory[commandHistory.length-1])
    }
})


function submitCommand(command,value){
    commandBox.val("")
    console.log(command in commands)
    if (command in commands){
        print_command(command,value)
    } else {
        print_command("error",value)
    }
}

function print_command(command,value){
    console.log(value + "got value")
    commandDisplay.append(commandPrefix + value + "<br><br>")
    commands[command].map((line) => {
        console.log(line)
        commandDisplay.append(line + "<br>")
    })
    commandDisplay.append("<br>")
    commandBox.focus()
    commandBox.get(0).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}


print_command("motd","motd")