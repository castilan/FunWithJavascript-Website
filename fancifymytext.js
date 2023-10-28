
const biggrBtn = document.querySelector("#biggerButton");

function helloAlert(){
    return alert("Hello World!");
}

biggrBtn.addEventListener("click", () => {
  helloAlert();
});