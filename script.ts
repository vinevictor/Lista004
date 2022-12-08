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
console.log(ContainsRegExp('aula', 'ula'))

// 02 ----------------------------------------------


function ReturnRep(palavra: string): string {
    palavra = palavra.toLowerCase()
    let reRepetidas = new RegExp('','g');
    let reUnicas = new RegExp('','g');
    let letras: string[] = []
    let regRepetidas: string = '' 
    let regUnicas: string = ''
    letras = palavra.split('')
    for(let i = 0; i < palavra.length; i++){
        let verificaRepeticao: number = 0
        letras.forEach(letra =>{
            if(letra == palavra[i]){
                verificaRepeticao++
                letra = '0'
            }
        })
        if(verificaRepeticao > 1 && !regRepetidas.includes(palavra[i])){
            regRepetidas = regRepetidas + palavra[i];
         }else if( verificaRepeticao < 2 && !regUnicas.includes(palavra[i])){
             regUnicas = regUnicas + palavra[i]
         }
        }
    
        reRepetidas = new RegExp(`[${regRepetidas}]`,'g')
        reUnicas = new RegExp(`[${regUnicas}]`,'g')
        
        palavra = palavra.replace(reRepetidas, ')')
        palavra = palavra.replace(reUnicas, '(')

        return palavra
    }    


console.log(ReturnRep('teste'))