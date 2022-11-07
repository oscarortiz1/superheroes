import styled from 'styled-components'

const Card = ({ children }) => {
  return <CardStyled className='card_modal'>{children}</CardStyled>
}

const CardStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: -21px 10px 100px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
`

export default Card
