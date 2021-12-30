const initialState ={
    dataKategory:[],
    isLoadingKategory:false,
    ErorMessageKategory:''
}

const kategoryReducers = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH KATEGORY':{
            return{
                ...state,
                isLoadingKategory:action.payload
            }
        }
        case 'SUCCESSED GET DATA KATEGORY':{
            return{
                ...state,
                dataKategory:action.payload,
                isLoadingKategory:false
            }
        }
        case 'FAILED GET DATA KATEGORY':{
            return{
                ...state,
                ErorMessageKategory:action.payload
            }
        }
        default:
            return state
    }
}
export default kategoryReducers;