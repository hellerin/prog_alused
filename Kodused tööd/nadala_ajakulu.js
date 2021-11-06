//Nädala ajakulu

function promptUser() {
    let ainepunktidInput = window.prompt("Sisestage ainepunktide arv");
    let nadaladInput = window.prompt("Sisestage nädalate arv");

    let ainepunktid = parseInt(ainepunktidInput);
    let nadalad = parseInt(nadaladInput);

    let result;
    if (Number.isInteger(ainepunktid) && Number.isInteger(nadalad)) {
        let ajakulu = Math.trunc((ainepunktid * 26) / nadalad);
        result = "Ajakulu " + ajakulu + " tundi nädalas. ";
    }
    else {
        result = "Kõik sisestatud andmed ei olnud täisarvud.";
    }
    console.log(result);
}
window.onload = function() {
    this.promptUser();
}