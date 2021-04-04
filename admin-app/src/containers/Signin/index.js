import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import { login } from '../../actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const Signin = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const userLogin = e => {
    e.preventDefault()

    const user = {
      email: 'q@q.qq',
      password: 'qqqqqq'
    }

    dispatch(login(user))
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: 50 }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label='Email'
                placeholder='Email'
                value={email}
                type='email'
                onChange={e => setEmail(e.target.value)}
              />

              <Input
                label='Password'
                placeholder='Password'
                value=''
                type='password'
                onChange={() => {}}
              />
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Signin
