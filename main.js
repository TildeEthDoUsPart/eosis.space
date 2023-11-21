
let commands = {
    "about" : about,
    "cat" : cat,
    "motd" : motd,
    "projects" : "github",
}


let commandBox = $('#commandBox')
let commandDisplay = $('#commandDisplay')
let commandPrefix = '<label id="commandPrefix">jsp@eosis.space$ </label>'

let commandHistory = []


commandBox.on("keypress",function(evt) {
    if (evt.keyCode == 13){
        console.log("tg")
        submitCommand(commandBox.val())
    }
})


function submitCommand(command){
    commandBox.val("")
    console.log(command in commands)
    if (command in commands){
        print_command(command)
        prepare_commandBox()
    } else {
        commandDisplay.append(commandPrefix + command)
        error.map((line) => {commandDisplay.append(line + "<br>")})
        prepare_commandBox()
    }
}

function print_command(command){
    commandDisplay.append(commandPrefix + command)
    commands[command].map((line) => {
        console.log(line)
        commandDisplay.append(line + "<br>")
    })
}

function prepare_commandBox(){
    commandBox.focus()
    commandBox.get(0).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}