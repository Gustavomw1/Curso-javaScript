function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente');
    } else {
        var fsex = document.querySelector('input[name="radsex"]:checked');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex && fsex.value == 'mulher') {
            genero = 'mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criança f.jpg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem f.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto f.jpg');
            } else {
                // Idoso
                img.setAttribute('src', 'idosa f.jpg');
            }
            
        } else if (fsex && fsex.value == 'homem') {
            genero = 'homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-m-.jpg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m-.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m-.jpg');
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m-.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}

