export const initialState = {
    loading: false,
    catImage: "",
    error: "",
}

export const reducer = (initialState, action) => {
    switch (action.type) {
        case "START":
            return {...initialState, loading: true}            
        case "SUCCESS":
            return {
                ...initialState, 
                action.payload, 
                loading: false, 
                error: "",
            }            
            
    
        default:
            break;
    }
}