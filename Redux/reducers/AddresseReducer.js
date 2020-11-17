const initState={
adresse:{
	Local:'',
	Remote:''
}
}

const AddresseReducer=(state=initState,action)=>{
    switch(action.type){
    	case 'LOCAL_IP':
    	   return{...state, adresse:{...state.adresse,...action.payload}}
    	default:
    	return state
    }
}
export default AddresseReducer;