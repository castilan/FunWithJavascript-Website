
alert("Hello, world!");

const text = document.getElementById("innerText");

// shows a pop up with "Hello World!" 
//assigned to the Bigger button
function makeBigger(){
    text.style.fontSize = '31.92px';
}

function makeFancy(){
    text.style.fontFamily = 'Courier New', 'monospace';
    text.style.backgroundColor = 'red';
}

