import styled from "styled-components";

export const Form = styled.div`
border: 3px solid #711C91;
display: flex;
flex-direction: column;
padding: 10px;
border-radius: 10px;
font-size: 1.5em;
@media (max-width: 820px){
    width: 90%;
    font-size: 3em;
}
@media (max-width: 375px){
    font-size: 1.8em;
}
`

export const Title = styled.div`
font-family: 'Finlandica', sans-serif;
text-align: center;
font-weight: 700;
background-color: #711C91;
color: white;
padding: 3px 0;
border-radius: 50px;
@media (max-width: 820px){
    font-size: 0.6em;
}
`

export const Button = styled.input`
background-color: #711C91;
font-family: 'Finlandica', sans-serif;
cursor: pointer;
border: none;
padding: 3px 0;
color: white;
border-radius: 50px;
font-weight: 700;
font-size: 1em;
text-transform: uppercase;
&:hover{
background-color: #800080;
}
&:active{
background-color: #BA55D3;
}
@media (max-width: 820px){
    font-size: 0.6em;
}
`

export const Label = styled.label`
font-family: 'Finlandica', sans-serif;
@media (max-width: 820px){
    font-size: 0.6em;
}
`

export const Back = styled.input`
font-family: 'Finlandica', sans-serif;
background-color: white;
border: 3px solid #711C91;
padding: 3px 0;
color: #711C91;
border-radius: 50px;
font-weight: 700;
margin-bottom: 10px;
text-transform: uppercase;
font-size: 1em;
&:hover{
background-color: #711C91;
color: white;
}
&:active{
background-color: #BA55D3;
}
@media (max-width: 820px){
    font-size: 0.6em;
}
`

export const Warning = styled.div`
margin-top: -5px;
margin-bottom: 5px;
color: #711C91;
font-weight: 600;
font-family: 'Finlandica', sans-serif;
font-size: 0.6em;
@media (max-width: 820px){
    width: 90%;
    font-size: 0.4em;
}
@media (max-width: 375px){
    font-size: 0.5em;
}
`
