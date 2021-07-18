import {createContext} from 'react'
import { ExpensesContextType } from '../storeActionTypes'

export const ExpensesContext : ExpensesContextType = createContext<undefined>(undefined);

