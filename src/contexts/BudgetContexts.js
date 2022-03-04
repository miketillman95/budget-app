import { useContext } from "react"
import {v4 as uuidv4} from 'uuid'
// context api
const BudgetsContext = React.createContext()

export function useBudgets() {
    return useContext(BudgetsContext)

}

// {
//     id:
//     name:
//     max
// }
// {
//     id:
//     budgetId:
//     amount:
//     description
// }

export const BudgetsProvider = ({children}) => {
    // state to keep track over everything
    const [budgets, setBudgets]= useState([])
       const [expenses, setExpenses]= useState([]) 

function getBudgetExpenses(budgetId){
    return expenses.filter(expense => addExepense.budgetId ===budgetId)
}
function addExepense(){}
// making new budget by copying previous budget and adding new values
function addBudget({name, max}){
    setBudgets(prevBudgets => {
        return [...prevBudgets, {id: uuidv4(), name, max}]
    })
}
function deleteBudget(){}
function deleteExepenses(){}

return(
    <BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExepense,
        addBudget,
        deleteBudget,
        deleteExepenses

    }}>{children}</BudgetsContext.Provider>
)

}