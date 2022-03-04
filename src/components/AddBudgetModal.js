import { Form, Modal, Button } from "react-bootstrap";

export default function AddBudgetModal({show, handleClose}){
    const handleSubmit =(e) => {}
    return (
        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header>
                <Modal.Title>New Budget</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' required/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Max Spending</Form.Label>
                <Form.Control  type='text' required/>
                </Form.Group>
                <div className="d-flex justify-content-end">
                <Button variant='primary' type='submit'> Add </Button>
                </div>
            </Modal.Body>
        </Form>
        </Modal>
    )
}