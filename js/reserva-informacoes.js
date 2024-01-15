"use strict";

document.addEventListener("DOMContentLoaded", () => {

    fetch('http://localhost:3000/reserva', {
        method: 'GET'
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (error) {
            console.log(error);
        });
});

function appendData(data) {
    let tbodyReservaInfo = document.getElementById("tbody-reserva-info");
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML =
            "<td>" + data[i].nome + "</td>"
            + "<td>" + data[i].email + "</td>"
            + "<td>" + data[i].entrada + "</td>"
            + "<td>" + data[i].saida + "</td>"
            + "<td>" + data[i].adultos + "</td>"
            + "<td>" + data[i].criancas + "</td>"
            + "<td>" + data[i].observacoes + "</td>";
        tbodyReservaInfo.appendChild(tr);
    }
}
