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
@media (max-width: 820px){
    width: 90%;
}
border: 3px solid #711C91;
`

const Title = styled.div`
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

const Home: NextPage = () => {
    const [operators, setOperators] = useState([
        {id: 1, name: 'МТС'},
        {id: 2, name: 'Мегафон'},
        {id: 3, name: 'Билайн'},
    ])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <Border>
          {operators.map((operator: {id: number, name: string}) =>
              <Link key={operator.id} href={`/${operator.id}`}>
                  <Title>{operator.name}</Title>
              </Link>
          )}
          </Border>
      </main>
    </div>
  )
}

export default Home
