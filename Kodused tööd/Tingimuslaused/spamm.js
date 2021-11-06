//Spämm

let suurus = prompt("Sisestage kirja suurus (MB)");
let teema = prompt("Sisestage kirja teema");
let fail = prompt("Kas kirjaga on kaasas fail? (jah, ei)");

if (teema !== "") {
    if (suurus > 1) {
        if (fail === "jah") {
        console.log("See on spämm!")
        }
    else {
        console.log("See ei ole spämm.")
    }
}
else {
    console.log("See ei ole spämm.")
}
}
else {
    console.log("See on spämm!")
}