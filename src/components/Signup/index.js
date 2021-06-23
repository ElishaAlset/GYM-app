import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SignupElements'

function SignUpn() {
    return (
        <div>
          <Container>
              <FormWrap>
                  <Icon to="/">ORYGYM</Icon>
                  <FormContent>
                      <Form action='#'>
                       <FormH1>Sign Up by creating a new account</FormH1>
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <FormInput type="email" required/>
                      <FormLabel htmlFor="for">Password</FormLabel>
                      <FormInput type="password" required/>
                      <FormButton type='submit'>Continue</FormButton>
                      <Text>Forget password</Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>  
        </div>
    )
}

export default SignUpn
