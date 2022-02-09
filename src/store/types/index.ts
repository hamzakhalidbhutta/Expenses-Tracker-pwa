export enum TRANSECTION_TYPE {
  PAYED = "PAY",
  RECEIVED = "RECEIVED",
}
export interface TRANSECTION {
  title: string;
  amount: number;
  type?: TRANSECTION_TYPE;
}
export enum TRANSECTION_ACTION {
  ADD = "ADD",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
  TOTAL_INCOME = "TOTAL_INCOME",
}
