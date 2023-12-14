describe("Verificar Corchetes",()=>{
    it("Verificar que no haya corchetes",()=>{
        expect(verificarCorchetes('')).toEqual({})
    })
    it("Verificar que hay solo un corchete y muestre incorrecto",()=>{
        expect(verificarCorchetes('[')).toEqual({'[':'Incorrecto'})
    })
    
    })
    function verificarCorchetes(cadena){
        if(cadena!==''){
            if(cadena == '['){
                return {'[':'Incorrecto'}
            }   
        }
        return {} ;
    }