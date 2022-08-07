import styled from "styled-components";

export const Modal = styled.div`
width: 100%;
height: 100%;
position: fixed;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Window = styled.div`
padding: 20px 50px;
z-index: 10;
background-color: white;
position: fixed;
display: flex;
flex-direction: column;
border-radius: 10px;
font-size: 1em;
@media (max-width: 820px){
    font-size: 3em;
}
`

export const Message = styled.span`
font-family: 'Finlandica', sans-serif;
margin-bottom: 10px;
`

export const Background = styled.div`
width: 100%;
height: 100%;
background-color: black;
opacity: 0.5;
`