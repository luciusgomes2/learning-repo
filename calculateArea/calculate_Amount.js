let itemUm;
let itemDois;
let itemTres;

function calculateAmountCarrinho(){

    itemUm = parseFloat(document.getElementById("item_um").value);
    itemDois = parseFloat(document.getElementById("item_dois").value);
    itemTres = parseFloat(document.getElementById("item_tres").value);

    let valorTotal = itemUm + itemDois + itemTres;

    document.getElementById('resultado').innerText = `The total amount is: $${valorTotal}`;
}