//Pulss

let vanus = prompt("Sisestage oma vanus");
let sugu = prompt("Sisestage oma sugu (M või N) või (N või n)");
let treening = prompt("Sisestage treeningutüüp (1, 2 või 3)");

let maxPulsisagedus;
if(sugu === "M" || sugu === "m") {
    maxPulsisagedus = 220 - vanus;
}
if(sugu === "N" || sugu === "n") {
    maxPulsisagedus = 206 - vanus * 0.88;
}
let maxPuls;
let minPuls;
if(treening === 1) {
    minPuls = maxPulsisagedus * 0.5;
    maxPuls = maxPulsisagedus * 0.7;
}
else if (treening === 2) {
    minPuls = maxPulsisagedus * 0.7;
    maxPuls = maxPulsisagedus * 0.8;
}
else if (treening === 3) {
    minPuls = maxPulsisagedus * 0.8;
    maxPuls = maxPulsisagedus * 0.87;
}
console.log("Pulsisagedus peaks olema vahemikus " + minPuls + " ja " + maxPuls);