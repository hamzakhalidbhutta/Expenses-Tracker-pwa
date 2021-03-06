import { TRANSECTION_ACTION } from "../types";

export const TransectionsReducer = (state: any, action: any) => {
  let totalBalance: number = 0;
  switch (action.type) {
    case TRANSECTION_ACTION.ADD:
      return [action.payload, ...state];
    case TRANSECTION_ACTION.DELETE:
      return state.filter((v: any, i: any) => i !== action.payload.transID);
    case TRANSECTION_ACTION.UPDATE:
      return [...state];
    case TRANSECTION_ACTION.TOTAL_INCOME:
      totalBalance = 0;
      return totalBalance;
    default:
      return state;
  }
};
