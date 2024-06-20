document.getElementById("reservaForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var cidade_retirada = document.getElementById("cidade_retirada").value;
    var cidade_entrega = document.getElementById("cidade_entrega").value;
    var data_retirada = document.getElementById("data_retirada").value;
    var hora_retirada = document.getElementById("hora_retirada").value;
    var data_entrega = document.getElementById("data_entrega").value;
    var hora_entrega = document.getElementById("hora_entrega").value;
    var pais = document.getElementById("pais").value;

    if (!cidade_retirada || !cidade_entrega || !data_retirada || !hora_retirada || !data_entrega || !hora_entrega || !pais) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    this.submit();
});
