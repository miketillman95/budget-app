import { Card, ProgressBar, Button, Stack } from "react-bootstrap";
import {currencyFormatter} from '../../utils'

function BudgetCard({name, amount, max, gray}) {
    const classNames = []

    
    return(

        <Card>
            <Card.Body>
                <Card.Title>
                    <div>{name}</div>
                    <div>{currencyFormatter.format(amount)}/ {currencyFormatter.format(max)}</div>
                </Card.Title>
                <ProgressBar variant = {getProgressBarVariant(amount, max)}
                min={0}
                max={max}
                now={amount}
                />
                <Stack direction= 'horizontal' gap='2' className='mt-4'>
                    <Button variant='outline primary'>Add expense</Button>
                    <Button variant='outline-secondary'>View expenses</Button>

                </Stack>
            </Card.Body>
        </Card>
    )
}
function getProgressBarVariant(amount, max){
    const ratio = amount/max
    if(ratio < .5) return 'primary'
    if(ratio < .75) return 'warning'

    return 'return danger '
}
export default BudgetCard