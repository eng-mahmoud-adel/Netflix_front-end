import { PAYMENT , CHOOSE_PLAN, CREATEERROR} from './../actions/payment';


const initialState =
{   error:1,
    plan:{
        plan_type:"Basic",
        price:120,
    }
}

const paymentReducer = (state=initialState, action) => {
    if(action.type === PAYMENT){
        return {
            ...state,
            error: null  
        };
    }else if (action.type === CHOOSE_PLAN){
        return {
            ...state,
            plan:action.payload,
            
        }
    }else if(action.type === CREATEERROR){
        return {
            ...state,
            error: 400
        }
    }
    return state;
}
 
export default paymentReducer;