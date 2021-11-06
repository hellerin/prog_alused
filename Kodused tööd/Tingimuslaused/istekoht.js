//Istekoht

let valik = prompt("Kas soovite valida istekoha ise või loosiga");

if(valik === "ise") {

    console.log("Valisite ise.");
    let koht = prompt("Kas soovid istuda akna ääres või muu koha peal?");
    if(koht === "aken"){
        console.log("Akna koht");
    }
    else {
        console.log("Muu koht")
    }
}
else {
    console.log("Istekoht loositi.");
    let toenaosus = Math.trunc(Math.ceil(Math.random()*3))
    if(toenaosus === 1) {
        console.log("Akna koht");
    }
else {
    console.log("Muu koht");
    }

}