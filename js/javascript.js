//adicionar input de item



function addItem(div) {
    var input = [];
    var cadastroInput = "";

    for (var i = 0; i < input.length; i++) {
        cadastroInput += '<div class="cadastro-notas__inside--tudo" id="items">' +
                '<label class="cadastro-notas__inside--label">' + 'ITEM ' + i + '</label>' +
                '<input type="text" name="item" id="notas" class="cadastro-notas__inside--input">' +
                '<input type="button" id="btnDel" value="-" onclick="deleteItem()" class="cadastro-notas__inside--add-delete">' +
            '</div>';
        }
        
    div.innerHTML = cadastroInput;
}
