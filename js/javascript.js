//adicionar input de item
var items = '';
function addInput(items) {
    var novoItem = '';
    
    for (contador = 1; contador < items.length; contador++) {
        novoItem += '<form class="item">' +
                    '<label class="item-label">ITEM ' + contador + '</label>' +
                    '<input class="item-input" type="text">' +
                    '<input class="item-button" type="button" value="-" onclick="">' +
                '</form> '
    }

    items.innerHTML = novoItem;

}
