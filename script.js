window.onload = function() {
    fetch('navBar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
    let storedCpf = localStorage.getItem('cpf');
    if (storedCpf) {
        document.getElementById('cpfResult').innerText = storedCpf;
    }
    let storedCnpj = localStorage.getItem('cnpj');
    if (storedCnpj) {
        document.getElementById('cnpjResult').innerText = storedCnpj;
    }
    let storedrg = localStorage.getItem('rg');
    if (storedrg) {
        document.getElementById('rgResult').innerText = storedrg;
    }
};

function generateRandomCPF() {
    let cpf = '';
    let sum = 0;
    let remainder;

    for (let i = 0; i < 9; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        cpf += randomNum.toString();
        sum += randomNum * (10 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10) remainder = 0;
    cpf += remainder.toString();

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf[i]) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10) remainder = 0;
    cpf += remainder.toString();

    localStorage.setItem('cpf', cpf);

    document.getElementById('cpfResult').innerText = cpf;
}

function generateRandomCNPJ() {
    let cnpj = '';
    let sum = 0;
    let remainder;

    for (let i = 0; i < 12; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        cnpj += randomNum.toString();
    }

    let weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpj[i]) * weight[i];
    }

    remainder = sum % 11;
    if (remainder < 2) remainder = 0;
    else remainder = 11 - remainder;
    cnpj += remainder.toString();

    sum = 0;
    weight.unshift(6);
    for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpj[i]) * weight[i];
    }

    remainder = sum % 11;
    if (remainder < 2) remainder = 0;
    else remainder = 11 - remainder;
    cnpj += remainder.toString();
    localStorage.setItem('cnpj', cnpj);

    document.getElementById('cnpjResult').innerText = cnpj;
}

function generateRandomRG() {
    let rg = '';
    let sum = 0;
    let remainder;

    for (let i = 0; i < 8; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        rg += randomNum.toString();
    }
    for (let i = 0; i < 8; i++) {
        sum += parseInt(rg[i]) * (9 - i);
    }

    remainder = sum % 11;
    if (remainder === 10) remainder = 'X';
    rg += remainder.toString();

    localStorage.setItem('rg', rg);
    document.getElementById('rgResult').innerText = rg;
}

