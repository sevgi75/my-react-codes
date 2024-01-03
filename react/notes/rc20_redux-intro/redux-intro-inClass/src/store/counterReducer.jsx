const initialState = {
    count: 10,
}
//? type larin CONSTANT olarak tanimlanmasi
export const INC = 'INC'
export const DEC = 'DEC'
export const CLR = 'CLR'

//? Action creater fonksiyonlarinin tanimlanmasi
export const increment = () => {
    return {type: INC}
}
export const decrement = () => ({type: DEC})

export const clear = () => ({type: CLR})

//? Reducer
export const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case INC :
            return {count: state.count + 1}
        
        case DEC :
            return {count: state.count - 1}
            
        case CLR :
            return {count: 0}
            
        default :
            return state
        //! Reducer fonksiyonu muhakkak bir state objesi dondurmelidir.Yanlis bir type gelse bile state'in ilk halini dondurmelidir.        
    }
}