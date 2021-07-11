let names = document.querySelector('.name');
let surnames = document.querySelector('.surname');

document.querySelector('.btn').addEventListener('click', (element) => {
    element.preventDefault();
    let nametext = document.createElement('p');
    document.querySelector('.head').appendChild(nametext);
    let surnametext = document.createElement('p');
    document.querySelector('.head2').appendChild(surnametext);
    nametext.textContent = names.value;
    surnametext.textContent = surnames.value;
})