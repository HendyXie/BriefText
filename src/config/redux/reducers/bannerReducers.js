const initialState ={
    dataBanner:[],
    isLoadingBanner:false,
    errorMessageBanner:''
}

const bannerReducers = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH BANNER':{
            return{
                ...state,
                isLoadingBanner:action.payload
            }
        }
        case 'SUCCESSED GET DATA BANNER':{
            return{
                ...state,
                dataBanner:action.payload,
                isLoadingBanner:false
            }
        }
        case 'FAILED GET DATA BANNER':{
            return{
                ...state,
                errorMessageBanner:action.payload
            }
        }
        default:
            return state
    }
}
export default bannerReducers;