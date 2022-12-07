// 01 -------------------------------------------

function ContainsIncludes(palavra: string, final: string): boolean{
    // METODO INCLUDES
    if(palavra.includes(final)){
        return true;
    }else{
        return false;
    }
}

function ContainsRegExp(palavra: string, final: string): boolean {
    // METODO RegExp
    let re = new RegExp(`.*${final}$`);
    if(re.test(palavra)){
        return true;
    }else{
        return false;
    }
}
console.log(ContainsIncludes('estudo', 'udo'))
console.log(ContainsRegExp('estudo', 'udo'))

