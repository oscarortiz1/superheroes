import { useState } from 'react'
import styled from 'styled-components'
import Card from '../components/card'

const HeroesList = ({ listHeroes, setOpenModal, setInfo }) => {
  const [select, setSelect] = useState('')

  const onHandleClick = (item) => {
    setInfo(item)
    setOpenModal(true)
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setSelect({ ...select, [name]: value })
  }

  return (
    <HeroesListStyled>
      <h1>Lista de Héroes</h1>
      <p>
        <strong>FILTRO:</strong>
      </p>
      <select name='id' onChange={(e) => onChange(e)}>
        <option value=''>Seleccione una opción</option>
        {listHeroes.map((item, index) => (
          <option key={index} value={item.id}>
            {item?.name_hero} - {item?.city}
          </option>
        ))}
      </select>
      <div className='list'>
        {listHeroes
          ?.filter((user) => user.id === select.id || select.id === '')
          .map((item, index) => (
            <div key={index} onClick={() => onHandleClick(item)}>
              <Card>
                <h2>{item?.name_hero}</h2>
                <p>
                  <strong>Clasificación: </strong>
                  {item?.hero_type}
                </p>
                <p>
                  <strong>Ciudad operaciones</strong>: {item?.city}
                </p>
                <p>
                  <strong>Condición</strong>: {item?.hero_condition}
                </p>
              </Card>
            </div>
          ))}
      </div>
      <hr />
      <h1>Lista de Vehículos</h1>
      <div className='list'>
        {listHeroes
          ?.filter((item) => item.brand_car && item.description_vehicle)
          .map((item, index) => (
            <Card key={index}>
              <h2>Marca: {item.brand_car}</h2>
              <p>
                <strong>Descripción</strong>: {item.description_vehicle}
              </p>
            </Card>
          ))}
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
  select {
    width: 90%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #000;
    margin: auto;
    display: flex;
    justify-content: center;
  }
`

export default HeroesList
