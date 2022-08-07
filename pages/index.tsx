import type { NextPage } from 'next'
import Link from "next/link";
import {operators} from "../src/constants";
import {Container, Main} from "../styles/global.styled";
import {Border, Title} from "../styles/index.styled";


const Home: NextPage = () => {

  return (
    <Container>
      <Main>
          <Border>
          {operators.map((operator: {id: number, name: string}) =>
              <Link key={operator.id} href={`/${operator.id}`}>
                  <Title>{operator.name}</Title>
              </Link>
          )}
          </Border>
      </Main>
    </Container>
  )
}

export default Home
