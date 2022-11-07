import styled from 'styled-components'
import HeroesAdd from '../containers/heroes-add'

const Home = () => {
  return (
    <HomeStyled>
      <HeroesAdd />
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 3rem auto;
`

export default Home
