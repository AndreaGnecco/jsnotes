function addItem(){
    var label = document.createElement("span");
    document.getElementById("items").appendChild(label);

    label.className = "cadastro-notas__inside--label";

    var input = document.createElement("input");
    document.getElementById("items").appendChild(input);

    input.className = "cadastro-notas__inside--input";

    
}