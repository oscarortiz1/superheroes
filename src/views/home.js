import { useState } from 'react'
import styled from 'styled-components'
import Modal from '../components/modal'
import HeroesAdd from '../containers/heroes-add'
import HeroesList from '../containers/heroes-list'

const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <HomeStyled>
      <HeroesAdd />
      <HeroesList setOpenModal={setOpenModal} />
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: space-around;
  gap: 20px;
`

export default Home
