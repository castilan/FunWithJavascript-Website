
alert("Hello, world!");

const innerText = document.getElementById("innerText");

// shows a pop up with "Hello World!" 
//assigned to the Bigger button
function makeBigger(){
    innerText.style.fontSize = '31.92px';
}

function makeFancy(){
    innerText.style.fontFamily = 'Courier New', 'monospace';
    innerText.style.backgroundColor = 'red';
}

