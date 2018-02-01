//adicionar input de item 
secao = document.getElementById("novo-item");

function addInput() {

    var novoItem = '';

    for (contador = 1; contador <= secao.childElementCount + 1; contador++) {
        novoItem += '<form class="item">' +
                    '<label class="item-label">' + 'ITEM ' + contador + '</label>' +
                    '<input class="item-input" type="text">' +
                    '<input class="item-button" type="button" value="-" onclick="">' +
                '</form> '
    }

    
    secao.innerHTML = novoItem;
}
