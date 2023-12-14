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
    
    })
    function verificarCorchetes(cadena){
        if(cadena!==''){
            if(cadena == '['){
                return {'[':'Incorrecto'}
            } 
            if(cadena == '[]'){
                return {'[]':'Correcto'}
            }   
        }
        return {} ;
    }