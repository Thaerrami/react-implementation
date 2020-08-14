import  initialstate  from './state'

 function reducer ( state=initialstate,action) {
    switch(action.type)
    {
        case 'NIGHT':
            return {
                value:'night' ,
                mode:'night'
            }
        case 'LIGHT':
            return{
                value:'light' ,
                mode :'light'
            }
        default:return state
    }
}

export default reducer;