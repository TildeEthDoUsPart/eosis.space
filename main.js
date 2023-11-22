
let commands = {
    "about" : about,
    "cat" : cat,
    "motd" : motd,
    "projects" : "github",
    "error" : error,
    "test" : test
}


let commandBox = $('#commandBox')
let commandDisplay = $('#commandDisplay')
let commandPrefix = '<label id="commandPrefix">jsp@eosis.space:~$ </label>'

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
        prepare_commandBox()
    } else {
        print_command("error",value)
        prepare_commandBox()
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
}

function prepare_commandBox(){
    commandBox.focus()
    commandBox.get(0).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

print_command("motd","motd")