import styled from 'styled-components'
import Card from '../components/card'

const HeroesList = ({ setOpenModal }) => {
  return (
    <HeroesListStyled>
      <h1>Lista de Héroes</h1>
      <div className='list'>
        <div onClick={() => setOpenModal(true)}>
          <Card>
            <h2>Nombre</h2>
            <p>
              <strong>Clasificación</strong>
            </p>
            <p>
              <strong>Ciudad operaciones</strong>
            </p>
            <p>
              <strong>Condición</strong>
            </p>
          </Card>
        </div>
      </div>
      <hr />
      <h1>Lista de Héroes</h1>
      <div className='list'>
        <Card>
          <h2>Marca</h2>
          <p>
            <strong>Descripción</strong>
          </p>
        </Card>
      </div>
    </HeroesListStyled>
  )
}

const HeroesListStyled = styled.div`
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-content: center;
  }
  .card_modal:hover {
    transform: scale(1.1);
  }
`

export default HeroesList
