// tady je místo pro náš program

function makeBoldOnMouseOver() {
    //console.log("in mouse over");
    //document.querySelector("#myDiv").style.fontWeight = "900";
    document.querySelector("#myDivv").classList.toggle("div-bold");
}

function makeBold() {
    //console.log("in mouse enter");
    document.querySelector("#myDiv").classList.add("div-bold");
}

function makeThin() {
    //console.log("in mouse out");
    document.querySelector("#myDiv").classList.remove("div-bold");
}

function toggleRed() {
    console.log("in toggle red");
    document.querySelector("#myDiv").classList.toggle("text-red");
    //document.querySelector("#myDiv").style.color = "red";
}

function increaseSize() {
    let fontSizeNew = parseFloat(document.querySelector("#myDiv").style.fontSize) + 1;
    document.querySelector("#myDiv").style.fontSize = fontSizeNew + "px";
}

function play(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

function pause(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

function stop(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    //audioElement.stop();
    audioElement.pause();
    audioElement.currentTime = 0;
}

function soundOff(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0;
}

function soundHalf(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}

function soundFull(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}