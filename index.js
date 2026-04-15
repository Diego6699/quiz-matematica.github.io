function apagar(){
    document.getElementById("expr-resposta").innerText = '0'
}


function somarTexto(num) {
    let el = document.getElementById("expr-resposta");
    let r = el.innerText;

    // Regra 1: elemento = "0" e num = 0 → não faz nada
    if (r === "0" && num === 0) {
        return;
    }

    // Regra 2: elemento = "0" e num > 0 → substitui
    if (r === "0" && num > 0) {
        el.innerText = String(num);
        return;
    }

    // Regra 3: elemento > 0 → concatenar
    el.innerText = r + String(num);
}

function iniciarTimer(segundos) {
    let el = document.getElementById("timer");
    let tempo = segundos;

    let btn = document.getElementById('enviar')
    btn.disabled = true
    btn.innerText = 'Off'
    let intervalo = setInterval(() => {
        let min = Math.floor(tempo / 60);
        let sec = tempo % 60;

        el.innerText = 
            String(min).padStart(2, '0') + ':' + 
            String(sec).padStart(2, '0');

        if (tempo <= 0) {
            clearInterval(intervalo);
            btn.disabled = false
            btn.innerText = 'Enviar'
            return;
        }

        tempo--;
    }, 1000);
}

function enviar(){
    iniciarTimer(10)
}

function cartesiano(min,max){
  let lista = []
  for(let i = min;i <= max ;i++){
    for(let j = min;j <= max;j++){
      lista.push([i,j])
    }
  }
  return lista
}
function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
}