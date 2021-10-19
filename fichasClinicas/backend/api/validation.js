module.exports = app => {

    function dataValidator(dado, msg) {
        if(!dado) throw msg
        if( Array.isArray(dado) && dado.length === 0) throw msg
        if(typeof dado === 'string' && !dado.trim() === '') throw msg    
    }

   
    return { dataValidator }
}