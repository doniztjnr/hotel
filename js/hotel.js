"use strict";

const formEl = document.querySelector('#hr-form');

formEl.addEventListener('submit', () => {

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:3000/reserva', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => console.log(data))
        .then(error => console.log(error));
});
