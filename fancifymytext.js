


//assigned to the Bigger button
function makeBigger(){
    document.getElementById("innerText").style.fontSize = '31.92px';
}

//on change for buttons fancy and boring
//only one radio button can be selected at a time
// the parameter typeChanged indicates which button has been most recently changed
function makeFancyOrBoring(typeChanged){
    const text = document.getElementById("innerText");


    if(document.getElementById("fancy").checked && typeChanged=='fancy'){
        text.style.fontWeight = 'bold';
        text.style.color = 'blue';
        text.style.textDecoration = 'underline';
        document.getElementById("boring").checked = false;
    }
    else if(document.getElementById("boring").checked && typeChanged=='boring'){
        text.style.fontWeight = 'normal';
        text.style.color = 'black';
        text.style.textDecoration = 'none';

        document.getElementById("fancy").checked = false;
    }
}

function makeMoo(){

    //makes the value upper case
    var textValue = document.getElementById("innerText").value;
    document.getElementById("innerText").value = textValue.toUpperCase();

    // adds the suffix "-Moo"
    var splitText = textValue.split("."); // ["Hello world"]
    textValue = splitText.join("-Moo");       //["Hello world-Moo"]
    document.getElementById("innerText").value = textValue;
}

