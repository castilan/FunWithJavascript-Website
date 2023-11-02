
alert("Hello, world!");


// shows a pop up with "Hello World!" 
//assigned to the Bigger button
function makeBigger(){
    document.getElementById("innerText").style.fontSize = '31.92px';
}

function makeFancyOrBoring(){
    const text = document.getElementById("innerText");
    if(document.getElementById("fancy").checked){
        text.style.fontWeight = 'bold';
        text.style.color = 'blue';

        document.getElementById("boring").checked = false;
    }
    else if(document.getElementById("boring").checked){
        text.style.fontWeight = 'normal';
        document.getElementById("fancy").checked = false;
    }
}

