//Õunte valimine

let pöialpoisid = prompt("Mitu pöialpoissi soovib õunu? (0-7)");

console.log("Mitu pöialpoissi tahtis õunu " +pöialpoisid);

let õunad_kokku = 14;
for (let i = 1; i <= pöialpoisid; i++) {
    let õunad = Math.floor(Math.random() * 2) +1;
    õunad_kokku = õunad_kokku - õunad;
    console.log(i + ". pöialpoiss sai " + õunad);
}
console.log("Lumivalgekesele jäi alles " + õunad_kokku + " õuna");