import React from 'react'
import {  Icon } from '../Signup/SignupElements'
import { Container, Content, Card, Body, Button } from './paymentsEl'
import "./p.css"

function Payments() {
    return (
        <Body>
            <Icon to="/">ORIGIN</Icon>
         <Container>
             
             
         <Card>
                 <Content>
                        <h2>ORIGIN</h2>
                         <h3>Membership</h3>
                         <img 
                         className="img1"
                         src="./logo512.png"
                         />
                        <Button>
                         20k Daily
                           </Button>
              </Content>
      </Card>
      <Card>
                 <Content>
                        <h2>ORIGIN</h2>
                         <h3>Membership</h3>
                         <img 
                         className="img1"
                         src="./logo512.png"
                         />
                        <Button>
                        300k Month
                           </Button>
              </Content>
      </Card>
      <Card>
                 <Content>
                        <h2>ORIGIN</h2>
                         <h3>Membership</h3>
                         <img 
                         className="img1"
                         src="./logo512.png"
                         />
                        <Button>
                        200k Five Month
                           </Button>
              </Content>
      </Card>
             
         </Container>
        </Body>
    )
}

export default Payments
