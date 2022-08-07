import styled from "styled-components";

export const Border = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding: 5px 10px;
border-radius: 10px;
@media (max-width: 820px){
    width: 90%;
}
border: 3px solid #711C91;
`

export const Title = styled.div`
font-family: 'Finlandica', sans-serif;
font-size: 2em;
cursor: pointer;
background-color: #711C91;
color: white;
margin: 5px 0;
padding: 5px 10px;
border-radius: 10px;
@media (max-width: 820px){
    font-size: 4em;
}
&:hover{
background-color: #800080;
}
`