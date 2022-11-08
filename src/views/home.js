import { collection, getDocs } from 'firebase/firestore/lite'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '../components/modal'
import HeroesAdd from '../containers/heroes-add'
import HeroesList from '../containers/heroes-list'
import { db } from '../firebase'

const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  const [listHeroes, setListHeroes] = useState([])
  const [info, setInfo] = useState({})

  const memoizedCallback = useCallback(async () => {
    const heroesRef = collection(db, 'usuarios')
    const heroesSnapshot = await getDocs(heroesRef)

    const id = heroesSnapshot.docs.map((doc) => doc.id)
    const data = heroesSnapshot.docs.map((doc) => doc.data())
    const array = data.map((item, index) => ({ ...item, id: id[index] }))
    setListHeroes(array)
  }, [])

  useEffect(() => {
    memoizedCallback()
  }, [memoizedCallback])

  return (
    <HomeStyled>
      <HeroesAdd getData={memoizedCallback} />
      <HeroesList
        setOpenModal={setOpenModal}
        listHeroes={listHeroes}
        setInfo={setInfo}
      />
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          info={info}
          getData={memoizedCallback}
        />
      )}
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
