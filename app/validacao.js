function valorValido(chute) {
    const num = +chute;

    if (chuteInvalido(num)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numeroAltoDemaisBaixoDemais(num)) {
        elementoChute.innerHTML += `
        <div>Número inválido.</div>
        `;
        return;
    }

    if (num === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3>O número secreto era <strong>${numeroSecreto}</strong></h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (num > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-from-arc"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-from-arc"></i></div>
        `
    }
}

function chuteInvalido(num) {
    return Number.isNaN(num);
}

function numeroAltoDemaisBaixoDemais(num) {
    return num > maiorValor || num < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})