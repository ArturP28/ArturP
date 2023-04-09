function horario() {

    const relogio = new Date()

    let horas = relogio.getHours()
    let minutos = relogio.getMinutes()
    let segundos = relogio.getSeconds()

    document.querySelector('#relogio').innerHTML = horas + ":" + minutos + ":" + segundos


}

setInterval (horario, 1000)

// data 

function dias () {

    const date = new Date()

    let dia = date.getDate()

    let mes = date.getMonth() + 1

    document.querySelector('#data').innerHTML = `${(dia.toString().padStart(2, '0'))} / ${(mes.toString().padStart(2, '0'))}`



}

setInterval (dias, 1000)

// cabeçario 

function conferir() {

    let nome = document.querySelector('#name')
    let idade = document.querySelector('#idade')
    let cidade = document.querySelector('#cidade')

    idade = Number(idade.value)
    nome = String(nome.value)
    cidade = String(cidade.value)


    let res = document.querySelector('#result')
    let res2 = document.querySelector('#result2')
    let res3 = document.querySelector('#result3')

    if (idade >= 18) {
        res.textContent = `Olá ${nome}. Sua cidade é ${cidade}. Você é maior de idade e está apto(a) para realizar o exame.`
        res2.textContent = 'O resultado de cada pergunta aparecerá ao final da página'
        res3.textContent = 'Boa Prova'
    } else {
        res.textContent = 'Você é menor de Idade'
    }



}

// marcação dos checkbox 

const checkboxes = document.querySelectorAll('.check');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      checkboxes.forEach((cb) => {
        if (cb !== event.target) {
          cb.disabled = true;
        }
      });
    } else {
      checkboxes.forEach((cb) => {
        cb.disabled = false;
      });
    }
  });
});

// cor do botao


let botoes = document.querySelectorAll('#btn')

botoes.forEach(function(botao) {
  botao.addEventListener('click', clicou)
})

function clicou(evento) {
  let botaoClicado = evento.target
  botaoClicado.style.background = 'Green'
  botaoClicado.textContent = 'Enviado'
  botaoClicado.style.color = 'White'
}



// função do botao 

function result01() {
    let resultado01 = document.querySelector('#result01')

    if (check1A.checked) {
        resultado01.textContent = 'Resposta Correta - 02 Pontos'
    } else {
        resultado01.textContent = 'Resposta Errada - 0 Pontos'
    }
} 

function result02() {
    let resultado02 = document.querySelector('#result02')
    

    if (check2C.checked) {
        resultado02.textContent = 'Resposta Correta - 02 Pontos'
    } else {
        resultado02.textContent = 'Resposta Errada - 0 Pontos'
    }
} 

function result03() {
    let resultado03 = document.querySelector('#result03')
    

    if (check3A.checked) {
        resultado03.textContent = 'Resposta Correta - 02 Pontos'
    } else {
        resultado03.textContent = 'Resposta Errada - 0 Pontos'
    }
} 

function result04() {
    let resultado04 = document.querySelector('#result04')
    

    if (check4D.checked) {
        resultado04.textContent = 'Resposta Correta - 02 Pontos'
    } else {
        resultado04.textContent = 'Resposta Errada - 0 Pontos'
    }
} 

function result05() {
    let resultado05 = document.querySelector('#result05')
    

    if (check5C.checked) {
        resultado05.textContent = 'Resposta Correta - 02 Pontos'
    } else {
        resultado05.textContent = 'Resposta Errada - 0 Pontos'
    }
} 
