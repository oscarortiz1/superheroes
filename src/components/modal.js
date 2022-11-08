import { doc, setDoc } from 'firebase/firestore/lite'
import { useState } from 'react'
import styled from 'styled-components'
import Input from '../components/input'
import { db } from '../firebase'
import Card from './card'

const Modal = ({ info, setOpenModal, getData }) => {
  const [name, setName] = useState(info?.name_hero)
  const [city, setCity] = useState(info?.city)

  const onHandleEdit = async () => {
    await setDoc(doc(db, 'usuarios', info.id), {
      ...info,
      name_hero: name,
      city
    })
    getData()
    setOpenModal(false)
  }

  return (
    <ModalStyled>
      <Card>
        <div className='scroll'>
          <button className='buttonClose' onClick={() => setOpenModal(false)}>
            x
          </button>
          <div className='edit'>
            <p>
              <strong>Nombre: </strong>
            </p>
            <Input
              placeholder='Ingresa un nombre'
              maxLength={30}
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            ></Input>
            <button className='buttonEdit' onClick={() => onHandleEdit()}>
              Editar
            </button>
          </div>
          <p>
            <strong>Clasificación</strong>: {info?.hero_type}
          </p>
          <div className='edit'>
            <p>
              <strong>Ciudad: </strong>
            </p>
            <Input
              placeholder='Ingresa una ciudad'
              maxLength={30}
              value={city || ''}
              onChange={(e) => setCity(e.target.value)}
            ></Input>
            <button className='buttonEdit' onClick={() => onHandleEdit()}>
              Editar
            </button>
          </div>
          <p>
            <strong>Condición</strong>: {info?.hero_condition}
          </p>
          <hr />
          <h3>Tipo de poderes</h3>
          <div className='list_cards'>
            {info?.powers?.map((item, index) => (
              <div className='card' key={index}>
                <p>
                  <strong>Poder</strong>: {item.power}
                </p>
                <p>
                  <strong>Descripción: </strong>: {item.description}
                </p>
              </div>
            ))}
          </div>
          <hr />
          <h3>Vehículo: {info?.brand_car ? info?.brand_car : 'No tiene'}</h3>
          <p>
            <strong>Descripción marca:</strong>
            {info?.description_vehicle
              ? info?.description_vehicle
              : ' No tiene'}
          </p>
        </div>
      </Card>
    </ModalStyled>
  )
}

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .card_modal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    border-radius: 0px;
    transform: translate(-50%, -50%);
    cursor: context-menu;
    border-radius: 10px;
    .scroll {
      overflow-y: scroll;
      height: 500px;
      padding: 10px;
    }
    .scroll::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
    }
    .scroll::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
  }
  .edit {
    display: flex;
    align-items: center;
    width: 90%;
    p {
      margin-right: 10px;
    }
    .buttonEdit {
      border: none;
      border-radius: 5px;
      margin-left: 10px;
      background-color: #2ecc71;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      height: 30px;
      &:hover {
        background-color: #27ae60;
      }
    }
  }
  .buttonClose {
    float: right;
    background-color: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    cursor: pointer;
  }
  .list_cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-content: center;
    grid-gap: 20px;
  }
  .card {
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
    max-width: 200px;
    word-wrap: break-word;
  }
`

export default Modal
