import React, { useContext, useState } from 'react'

// Context State management 
BudgetsContext = React.useContext()


export function useBudgets() {
    return useContext(BudgetsContext)

}

export const BudgetsProvider = ({children}) => {
// state management 
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = useState([])




    return (
    <BudgetsContext.Provider value={{
    budgets,
    expenses,
    getBudgetExpenses,
    addExpense,
    addBudget,
    deleteBudget,
    deleteExpense
    }}>{children}</BudgetsContext.Provider>
    )
    
}