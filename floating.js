let notches = $('.notch')
let tooltip = $('#tooltip')

for (i=0;i<notches.length;i++){
    notches[i].addEventListener("mouseover",changeTooltip)
}

function changeTooltip(evt){ // Changing tooltip text on icon hover
    let text = evt.target.getAttribute('data-tooltip')
    tooltip.text(text)
}
