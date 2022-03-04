import React, { useState, useContext, } from "react"
import {v4 as uuidv4} from 'uuid'
import useLocalStorage from "../useHooks/useLocalStorage"
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
    const [budgets, setBudgets]= useLocalStorage('budgets', [])
       const [expenses, setExpenses]= useLocalStorage('expenses', []) 

// crud commands for updating budget and expenses 

function getBudgetExpenses(budgetId){
    return expenses.filter(expense => expense.budgetId ===budgetId)
}
function addExpense(description, amount, budgetId){
    setExpenses(prevExpenses => {
        return [...prevExpenses, {id: uuidv4(), description, amount, budgetId}]
})
}

// making new budget by copying previous budget and adding new values
function addBudget({name, max}){
    setBudgets(prevBudgets => {
        if(prevBudgets.find(budget => budget.name ===name)){
            return prevBudgets
        }
        return [...prevBudgets, {id: uuidv4(), name, max}]
    })
}
function deleteBudget({id}){
    setBudgets(prevBudgets => {
        return prevBudgets.filter(budget => budget.id !==id)
    })
}
function deleteExpenses({id}){
    setExpenses(prevExpenses => {
        return prevExpenses.filter(expense => expense.id !==id)
    })
}

return(
    <BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpenses

    }}>{children}</BudgetsContext.Provider>
)

}

export default BudgetsProvider