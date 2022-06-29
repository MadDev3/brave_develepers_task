import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import styled from "styled-components";

const Border = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #9999;
    padding: 5px 10px;
    border-radius: 20px;
`

const Title = styled.div`
    font-size: 16px;
    cursor: pointer;
    background-color: white;
    margin: 5px 0;
    padding: 5px 10px;
    border-radius: 10px
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
              <Title key={index}> {operator}</Title>
          )}
          </Border>
      </main>
    </div>
  )
}

export default Home
