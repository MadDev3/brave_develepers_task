import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import styled from "styled-components";
import Link from "next/link";

const Border = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding: 5px 10px;
border-radius: 10px;
border: 3px solid #711C91;
`

const Title = styled.div`
font-family: 'Finlandica', sans-serif;
font-size: 24px;
cursor: pointer;
background-color: #711C91;
color: white;
margin: 5px 0;
padding: 5px 10px;
border-radius: 10px;
&:hover{
background-color: #800080;
}
`

const Home: NextPage = () => {
    const [operators, setOperators] = useState([
        'МТС', 'Билайн', 'Мегафон'
    ])

  return (
    <div className={styles.container}>

      <main className={styles.main}>
          <Border>
          {operators.map((operator: string, index: number) =>
              <Link key={index} href={'/screen'}><Title>{operator}</Title></Link>
          )}
          </Border>
      </main>
    </div>
  )
}

export default Home
