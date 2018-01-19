var item = [];


function addItem() {
    var innerHTML = "";

    for (var index = 0; index < item.length; index++) {
     innerHTML += '<div class = "cadastro-notas__inside--tudo" id="items">' + 
                    '<label class="cadastro-notas__inside--label">ITEM' + index + '</label>' +
                    '<input type="text" name="item" id="notas" class="cadastro-notas__inside--input">' +
                    '<input type="button" id="btnDel" value="-" onclick="deleteItem()" class="cadastro-notas__inside--add-delete">' +
                    '</div>';
    
    
    
    }




