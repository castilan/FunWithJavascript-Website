
alert("Hello, world!");


// shows a pop up with "Hello World!" 
//assigned to the Bigger button
function makeBigger(){
    document.getElementById("innerText").style.fontSize = '31.92px';
}

function makeFancyOrBoring(){
    if(document.getElementById("fancy").checked){
        document.getElementById("innerText").style.fontWeight = 'bold';
        document.getElementById("boring").checked = 'false';
    }
    else if(document.getElementById("boring").checked){
        document.getElementById("innerText").style.fontWeight = 'normal';
        document.getElementById("fancy").checked = 'false';
    }
}

