import { StateType, ActionsType, ADD_TRANSECTION, UPDATE_TRANSECTION, DELETE_TRANSECTION } from '../storeActionTypes'
export const expensesReducer = (state: StateType, action: ActionsType) => {
    switch (action.type) {
        case ADD_TRANSECTION:
            return {
                ...state,
                transections: [...state.transections, action.payload]
            }
        case UPDATE_TRANSECTION:
            // console.log(`This is the updation area with ${action.payload.t_id} ${action.payload.t_name} ${action.payload.t_amount}`)
            return {
                ...state,
                transections: state.transections.map((v: any) => v.t_id === action.payload.t_id ?
                    {
                        t_id: action.payload.t_id,
                        t_name: action.payload.t_name,
                        t_amount: action.payload.t_amount
                    }
                    : v
                )
            }

        case DELETE_TRANSECTION:
            return {
                ...state,
                transections: state.transections.filter((v: any) => v.t_id !== action.payload.t_id)
            }
        default:
            console.log("Default Transection")
            return state;
    }
}
