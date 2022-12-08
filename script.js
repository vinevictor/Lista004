// 01 -------------------------------------------
function ContainsIncludes(palavra, final) {
    // METODO INCLUDES
    if (palavra.includes(final)) {
        return true;
    }
    else {
        return false;
    }
}
function ContainsRegExp(palavra, final) {
    // METODO RegExp
    var re = new RegExp(".*".concat(final, "$"));
    if (re.test(palavra)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(ContainsIncludes('estudo', 'udo'));
console.log(ContainsRegExp('aula', 'ula'));
// 02 ----------------------------------------------
function ReturnRep(palavra) {
    palavra = palavra.toLowerCase();
    var reRepetidas = new RegExp('', 'g');
    var reUnicas = new RegExp('', 'g');
    var letras = [];
    var regRepetidas = '';
    var regUnicas = '';
    letras = palavra.split('');
    var _loop_1 = function (i) {
        var verificaRepeticao = 0;
        letras.forEach(function (letra) {
            if (letra == palavra[i]) {
                verificaRepeticao++;
                letra = '0';
            }
        });
        if (verificaRepeticao > 1 && !regRepetidas.includes(palavra[i])) {
            regRepetidas = regRepetidas + palavra[i];
        }
        else if (verificaRepeticao < 2 && !regUnicas.includes(palavra[i])) {
            regUnicas = regUnicas + palavra[i];
        }
    };
    for (var i = 0; i < palavra.length; i++) {
        _loop_1(i);
    }
    reRepetidas = new RegExp("[".concat(regRepetidas, "]"), 'g');
    reUnicas = new RegExp("[".concat(regUnicas, "]"), 'g');
    palavra = palavra.replace(reRepetidas, ')');
    palavra = palavra.replace(reUnicas, '(');
    return palavra;
}
console.log(ReturnRep('teste'));
