import { Form, Modal, Button } from "react-bootstrap";
import {useRef } from 'react'
import { useBudgets } from "../contexts/BudgetContexts";

export default function AddBudgetModal({show, handleClose}){
    const nameRef = useRef()
    const maxRef= useRef()
    const {addBudget} = useBudgets()    

    const handleSubmit =(e) => {
        e.preventDefault()
       addBudget({ 
           name: nameRef.current.value,
            max: parseFloat(maxRef.current.value)
        })
        handleClose()
    }
    return (
        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header>
                <Modal.Title>New Budget</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control ref={nameRef} type='text' required/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Max Spending</Form.Label>
                <Form.Control ref={maxRef} type='text' required/>
                </Form.Group>
                <div className="d-flex justify-content-end">
                <Button variant='primary' type='submit'> Add </Button>
                </div>
            </Modal.Body>
        </Form>
        </Modal>
    )
}