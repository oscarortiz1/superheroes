import { useState } from 'react'
import styled from 'styled-components'
import Input from '../components/input'
import Select from '../components/select'

const HeroesAdd = () => {
  const [form, setForm] = useState({})
  const [listPower, setListPower] = useState([])
  const [indexEdit, setIndexEdit] = useState()
  const [formPower, setFormPower] = useState({})

  const onHandleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const onHandleChangePower = (e) => {
    const { name, value } = e.target
    setFormPower({ ...formPower, [name]: value })
  }

  const onHandleChangeEdit = (e) => {
    const { name, value } = e.target
    setListPower(
      listPower.map((item, index) => {
        if (index === indexEdit) {
          return { ...item, [name]: value }
        }
        return item
      })
    )
  }

  const addPowers = () => {
    setListPower([...listPower, formPower])
    setFormPower({ power: '', description: '' })
  }

  const deletePowers = (index) => {
    const newList = listPower.filter((_, i) => i !== index)
    setListPower(newList)
    setIndexEdit()
  }

  const onSubmit = () => {
    setForm({ ...form, powers: listPower })
    setListPower([])
    setForm({})
  }

  return (
    <HeroesAddStyled>
      <h1>Agrega un Héroe</h1>
      <p>
        <strong>Nombre:</strong>
      </p>
      <Input
        placeholder='Ingresa un nombre'
        maxLength={30}
        name='name_hero'
        value={form.name_hero || ''}
        onChange={(e) => onHandleChange(e)}
      ></Input>
      <p>
        <strong>Clasificación:</strong>
      </p>
      <Select
        name='hero_type'
        value={form.hero_type || ''}
        onChange={(e) => onHandleChange(e)}
      >
        <option value=''>Selecciona un tipo</option>
        <option value='heroes'>Héroe</option>
        <option value='villain'>Villano</option>
      </Select>
      <p>
        <strong>Ciudad de operaciones:</strong>
      </p>
      <Input
        placeholder='Ingresa una ciudad'
        maxLength={20}
        name='city'
        value={form.city || ''}
        onChange={(e) => onHandleChange(e)}
      ></Input>
      <p>
        <strong>Condición:</strong>
      </p>
      <Select
        name='hero_condition'
        value={form.hero_condition}
        onChange={(e) => onHandleChange(e)}
      >
        <option value=''>Selecciona un tipo</option>
        <option value='free'>Libertad</option>
        <option value='arrested'>Detenido</option>
        <option value='unknown'>Desconocido</option>
      </Select>
      <hr />
      <div className='section'>
        <div>
          <h3>Tipo de poderes</h3>
          <Input
            placeholder='Nombre del super poder'
            className='powerInput'
            maxLength={20}
            name='power'
            value={formPower.power || ''}
            onChange={(e) => onHandleChangePower(e)}
          ></Input>
          <textarea
            placeholder='Descripción del super poder'
            className='powerInput'
            name='description'
            maxLength={80}
            value={formPower.description || ''}
            onChange={(e) => onHandleChangePower(e)}
          ></textarea>
          <button className='buttonAdd' onClick={() => addPowers()}>
            Agregar Poder
          </button>
        </div>
        <div className='cardList'>
          {listPower.map((item, index) => (
            <div key={index}>
              {indexEdit === index ? (
                <div className='card'>
                  <button
                    className='buttonDelete'
                    onClick={() => deletePowers(index)}
                  >
                    X
                  </button>
                  <Input
                    placeholder='Nombre del super poder'
                    className='powerInput'
                    maxLength={20}
                    name='power'
                    value={item.power || ''}
                    onChange={(e) => onHandleChangeEdit(e)}
                  ></Input>
                  <textarea
                    placeholder='Descripción del super poder'
                    className='powerInput'
                    name='description'
                    maxLength={80}
                    value={item.description || ''}
                    onChange={(e) => onHandleChangeEdit(e)}
                  ></textarea>
                  <button className='edit' onClick={() => setIndexEdit()}>
                    Editar Poder
                  </button>
                </div>
              ) : (
                <div className='card'>
                  <button
                    className='buttonDelete'
                    onClick={() => deletePowers(index)}
                  >
                    X
                  </button>
                  <h4>{item.power}</h4>
                  <p>{item.description}</p>
                  <button
                    className='buttonEdit'
                    onClick={() => setIndexEdit(index)}
                  >
                    Editar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <h3>Vehículo</h3>
      <p>Si tiene un vehículo completa la siguiente información.*</p>
      <Input
        placeholder='Marca del vehículo'
        maxLength={30}
        name='brand_car'
        value={form.brand_car || ''}
        onChange={(e) => onHandleChange(e)}
      ></Input>
      <textarea
        placeholder='Descripción del vehículo'
        className='powerInput'
        name='description_vehicle'
        maxLength={80}
        value={form.description_vehicle || ''}
        onChange={(e) => onHandleChange(e)}
      ></textarea>
      <button className='buttonAdd' onClick={() => onSubmit()}>
        Agregar Héroe
      </button>
    </HeroesAddStyled>
  )
}

const HeroesAddStyled = styled.div`
  width: 400px;
  box-shadow: -21px 10px 100px 3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 1rem auto;
  border: 1px solid black;
  h1,
  h3 {
    text-align: center;
    margin: 1rem auto;
  }
  p {
    margin: 10px 0;
  }
  hr {
    margin: 20px 0;
  }
  .section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .powerInput {
    margin: 0.5rem auto;
  }
  .cardList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .card {
      border: 1px solid black;
      padding: 10px;
      border-radius: 5px;
      max-width: 200px;
      overflow: hidden;
      white-space: pre-line;
      .buttonDelete {
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
      .buttonEdit {
        float: right;
        background-color: green;
        color: white;
        border: none;
        border-radius: 5px;
        height: 20px;
        font-size: 12px;
        cursor: pointer;
      }
      h4 {
        margin: 0;
      }
    }
  }
  textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    box-sizing: border-box;
    padding: 5px;
    font-family: 'Poppins', sans-serif;
    resize: none;
  }
  .edit {
    display: block;
    margin: 1rem auto;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: green;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: green;
    }
  }
  .buttonAdd {
    display: block;
    margin: 1rem auto;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #2ecc71;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #27ae60;
    }
  }
`

export default HeroesAdd
