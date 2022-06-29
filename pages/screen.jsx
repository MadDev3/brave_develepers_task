import {useState} from "react";
import styled from "styled-components";
import styles from '../styles/Home.module.css'

const Containter = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
padding: 10px;
`

const Input = styled.input`
font-size: 20px;
margin: 5px 0
`

const Screen = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <Containter>
                    МТС
                    <Input placeholder='8 (999) 000-00-00'/>
                    <Input placeholder='0 рублей'/>
                </Containter>
            </div>
        </div>
    )
}

export default  Screen;