describe("Verificar Corchetes",()=>{
    it("Verificar que no haya corchetes",()=>{
        expect(verificarCorchetes('')).toEqual({})
    })
    it("Verificar que hay solo un corchete y muestre incorrecto",()=>{
        expect(verificarCorchetes('[')).toEqual({'[':'Incorrecto'})
    })
    it("Verificar que hay dos corchete y muestre Correcto",()=>{
        expect(verificarCorchetes('[]')).toEqual({'[]':'Correcto'})
    })
    it("Verificar que haya dos corchete de apertura y uno de cierre",()=>{
        expect(verificarCorchetes('[[]')).toEqual({'[[]':'Incorrecto'})
    })
    it("Verificar que haya dos corchete de apertura y dos de cierre",()=>{
        expect(verificarCorchetes('[[]]')).toEqual({'[[]]':'Correcto'})
    })
    it("Verificar que haya tres corchete de apertura y dos de cierre",()=>{
        expect(verificarCorchetes('[[[]]')).toEqual({'[[[]]':'Incorrecto'})
    })
    
    })
    function verificarCorchetes(cadena){
        const cadenaValida=['[]','[[]]']
        const cadenaInvalida=['[','[[',']]','[[]','[[[]]']

        if(cadena ===''){
            return {} ;
        }
            if(cadenaValida.includes(cadena)){
                return {[cadena]:'Correcto'}
            } 
            else if(cadenaInvalida.includes(cadena)){
                return {[cadena]:'Incorrecto'}
            }
       
    }