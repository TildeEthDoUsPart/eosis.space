let notches = $('.notch')
let tooltip = $('#tooltip')

for (i=0;i<notches.length;i++){
    console.log(notches[i]) 
    notches[i].addEventListener("mouseover",changeTooltip)
}

function changeTooltip(evt){
    let text = evt.target.getAttribute('data-tooltip')
    tooltip.text(text)
}
