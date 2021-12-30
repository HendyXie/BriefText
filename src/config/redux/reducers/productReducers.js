const initialState ={
    dataProduct:[],
    isLoadingProduct:false,
    ErorMessageProduct:''
}

const productReducers = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH PRODUCT':{
            return{
                ...state,
                isLoadingProduct:action.payload
            }
        }
        case 'SUCCESSED GET DATA PRODUCT':{
            return{
                ...state,
                dataKategory:action.payload,
                isLoadingProduct:false
            }
        }
        case 'FAILED GET DATA PRODUCT':{
            return{
                ...state,
                ErorMessageProduct:action.payload
            }
        }
        default:
            return state
    }
}
export default productReducers;