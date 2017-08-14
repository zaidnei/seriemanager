var divTemp = document.querySelector('#temporadas');
var formMain = document.querySelector('#form');
var qtd = 0;
$("#temporada").keyup(function(event){
    function addDiv() {
        var label = document.createElement('label');
        label.htmlFor = 'temporada' + (qtd + 1).toString();
        label.textContent = 'Numero de episodios da temporada ' + (qtd + 1).toString();
        var inputNumber = document.createElement('input');
        inputNumber.type = 'number';
        inputNumber.min = 0;
        inputNumber.className = 'form-control';
        inputNumber.id = 'temporada' + (qtd + 1).toString();
        inputNumber.name = 'temporada' + (qtd + 1).toString();
        inputNumber.placeholder = 'Digite a quantidade de episódios';
        inputNumber.required = true;
        qtd++;
        divTemp.appendChild(label);
        divTemp.appendChild(inputNumber);
        formMain.appendChild(divTemp);
    }
    function removeDiv() {
        divTemp.removeChild(divTemp.lastChild);
        divTemp.removeChild(divTemp.lastChild);
        qtd--;
    }
    if(event.keyCode === 38) 
        addDiv();
    if(event.keyCode === 40)
        removeDiv(); 
});

/*<div class="form-group">
          <label for="temporada">Temporadas:</label>
          <input type="number" min="0" class="form-control"
                 id="temporada" name="temporada"
                 placeholder="Quantidade Temporadas:"
                 required> 
        </div>*/