//Astendamine

function promptUser () {
    let alusInput = window.prompt("Sisestage astme alus");
    let astendajaInput = window.prompt("Sisestage astendaja");

    let alus = parseInt(alusInput);
    let astendaja = parseInt(astendajaInput);

    let result;
    if (Number.isInteger(alus) && Number.isInteger(astendaja)) {
        result = Math.pow(alus, astendaja);
    }
    else {
        result = "Kõik sisestatud andmed ei olnud täisarvud.";
    }
    console.log(result);
}
window.onload = function () {
    this.promptUser();
}