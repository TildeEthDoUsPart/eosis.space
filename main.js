
let commands = {
    "about" : about,
    "cat" : cat,
    "laugh" : "mdrrr",
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
    if ($.inArray(command,commands)){
        commandDisplay.append(commandPrefix + command)
        console.log(commands[command] + " in dict")
        print_command(command)
        

    }
}

function print_command(command){
    commands[command].map((line) => {
        console.log(line)
        commandDisplay.append(line + "<br>")
    })
}