import styled from 'styled-components';

export const Button = styled.div`
position:absolute;
padding: 8px 20px;
margin-top: 200px;
background: #061723;
color: #fff;
border-radius: 20px;
text-decoration: none;
font-weight: 500;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`
export const Body = styled.div`
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 1500px;
background: linear-gradient(#e91e63, #2196f3);
`
export const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
max-width: 1200px;
flex-wrap: wrap;
z-index: 1;

`
export const Content = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
max-width: 1200px;
flex-wrap: wrap;
z-index: 1;
`
export const Card = styled.form`
position: relative;
width: 280px;
height: 400px;
margin: 30px;
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
border-radius: 15px;
background: rgba(255, 255, 255, 0.1);
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
border-top: 1px solid rgba(255, 255, 255, 0.5);
border-left: 1px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(5px);
@media screen (min-width: 400px) {
    padding: 32px 32px;
}
`

