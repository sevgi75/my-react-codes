import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const Forms = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = () => {}

  return (
  <Container className='mt-4'>
    <Form>
      <h1 className='text-success'>FORMS</h1>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Hello</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Username" 
        onChange={handleUsername} />        
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />        
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  )
}

export default Forms
