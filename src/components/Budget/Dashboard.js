import Userfront from "@userfront/react";
import {Button, Stack} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import AddBudgetModal from "../AddBudgetModal";
import BudgetCard from './BudgetCard'
import {useState} from 'react'
import ViewExpensesModal from "../ViewExpensesModal copy";
import BudgetsProvider, {UNCATEGORIZED_BUDGET_ID, useBudgets } from "../../contexts/BudgetContexts";
import AddExpenseModal from "../AddExpenseModal";
import UncategorizedBudgetCard from "../UncategorizedBudgetCard";


function Dashboard() {
  const [showaddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [viewExpenseModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpnseModalBudgetId] = useState()

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpnseModalBudgetId(budgetId)
  }

  const {budgets, getBudgetExpenses} = useBudgets()

    if(!Userfront.tokens.accessToken){
        return <div classname='warning'> 
                <h1>
                Must log in to see your Budget data
                </h1>
            </div>
    }else {
  return (
  <>
    <Container className='my-4'>
            <Stack direction='horizontal' gap='2' className='mb-4'>
                <h1 className='me-auto'>Budget</h1>
                <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add budget</Button>

                <Button variant = 'outline-primary'onClick={openAddExpenseModal}>Add expense</Button>
            </Stack>
            <div
             style={{
               display: 'grid',
             }}
             >
               {/* mapping through the budget and display the added budgets */}
               {budgets.map(budget => {
                 const amount = getBudgetExpenses(budget.id).reduce(
                   (total, expense) => total + expense.amount, 0
                 )

              return (
                <BudgetCard 
                key = {budget.id}
                name= {budget.name}
                amount={amount} 
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.Id)}
                onViewExpenseClick={() => setViewExpensesModalBudgetId(budget.Id)}

                
                />
              )
              })}
               <UncategorizedBudgetCard
            onAddExpenseClick={openAddExpenseModal}
            onViewExpensesClick={() =>
              setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
            }
          />
              

                <div>
                  <button onClick={Userfront.logout}>Logout</button> 
              </div>  
             

              </div> 
        </Container>
        <AddBudgetModal show={showaddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/> 
      
        <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() =>setShowAddExpenseModal(false) }
        
        />

      <ViewExpensesModal
        budgetId={viewExpenseModalBudgetId}
        // defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId() }
        
        />
   </>
        
  
  )}
}

  

  export default Dashboard


