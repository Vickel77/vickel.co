import styled from "styled-components"

const Menu =styled(({className}) => {
  return (
    <div className={className}> 
      <b>V</b>
    </div>
  )
})`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5),
    -3px -3px 10px rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 30px;
  right: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.23s;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: purple;
  }
`

export default Menu;