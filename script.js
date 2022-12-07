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
console.log(ContainsRegExp('estudo', 'udo'));
