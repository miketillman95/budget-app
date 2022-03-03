import Userfront from "@userfront/react";
import {Button, Stack} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import BudgetCard from './BudgetCard'


function Dashboard() {

    if(!Userfront.tokens.accessToken){
        return <div classname='warning'> 
                <h1>
                Must log in to see your Budget data
                </h1>
            </div>
    }else {
  return (
    <Container className='my-4'>
            <Stack direction='horizontal' gap='2' className='mb-4'>
                <h1 className='me-auto'>Budgets</h1>
                <Button variant='primary'>Add budget</Button>
                <Button variant = 'primary'></Button>
                <Button variant = 'outline-primary'>Add expense</Button>
            </Stack>
                <BudgetCard>

                </BudgetCard>

              
        </Container>
  
  )}
}

  

  export default Dashboard


        /* <button onClick={Userfront.logout}>Logout</button> */
