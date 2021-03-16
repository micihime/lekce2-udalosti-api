// tady je místo pro náš program

function makeBoldOnMouseOver() {
    console.log("in mouse over");
    //document.querySelector("#myDiv").style.fontWeight = "900";
    document.querySelector("#myDivv").classList.toggle("div-bold");
}

function makeBold() {
    console.log("in mouse enter");
    document.querySelector("#myDiv").classList.add("div-bold");
}

function makeThin() {
    console.log("in mouse out");
    document.querySelector("#myDiv").classList.remove("div-bold");
}