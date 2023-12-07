import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const Forms = () => {
  const [username, setUsername] = useState("Ali Can")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  console.log(username);

  return (
  <Container className='mt-4'>
    <Form>
      <h1 className='text-success'>FORMS</h1>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>
          {username && <span className='fw-bold'>Hello {username}</span>}
          </Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Username" 
        onChange={handleUsername}
        value={username} />        
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
