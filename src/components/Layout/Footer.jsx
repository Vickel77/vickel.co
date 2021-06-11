import styled from "styled-components"
import Clients from "./Clients"
const Footer = styled(({className}) =>{
  return(
    <div className={className}>
      <Clients />
      <h3>Get in Touch</h3>
    </div>
  )
})`
  height: 50vh;
  width: 100vw;
  margin-top: -50px;
  background-color: var(--primary);
  border-radius:10px 10px 0 0;
`

export default Footer;