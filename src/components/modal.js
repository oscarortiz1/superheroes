import styled from 'styled-components'
import Card from './card'

const Modal = ({ info, setOpenModal }) => {
  return (
    <ModalStyled>
      <Card>
        <div className='scroll'>
          <button className='buttonClose' onClick={() => setOpenModal(false)}>
            x
          </button>
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
          <hr />
          <h3>Tipo de poderes</h3>
          <div className='list_cards'>
            <div className='card'>
              <h4>Nombre del poder</h4>
              <p>Descripción del poder</p>
            </div>
            <div className='card'>
              <h4>Nombre del poder</h4>
              <p>Descripción del poder</p>
            </div>
            <div className='card'>
              <h4>Nombre del poder</h4>
              <p>Descripción del poder</p>
            </div>
            <div className='card'>
              <h4>Nombre del poder</h4>
              <p>Descripción del poder</p>
            </div>
            <div className='card'>
              <h4>Nombre del poder</h4>
              <p>Descripción del poder</p>
            </div>
            <div className='card'>
              <h4>Nombre del poder</h4>
              <p>Descripción del poder</p>
            </div>
            <div className='card'>
              <h4>Nombre del poder</h4>
              <p>Descripción del poder</p>
            </div>
            <div className='card'>
              <h4>Nombre del poder</h4>
              <p>Descripción del poder</p>
            </div>
          </div>
          <hr />
          <h3>Vehículo</h3>
          <p>Descripción marca</p>
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
      height: 600px;
    }
    .scroll::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
    }
    .scroll::-webkit-scrollbar-thumb {
      border-radius: 6px;
      -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
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
    overflow: hidden;
  }
`

export default Modal
