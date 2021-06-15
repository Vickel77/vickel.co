import styled from "styled-components"
import Collaborate from "./Collaborate"
const Footer = styled(({className}) =>{
  return(
    <div className={className}>
      <Collaborate />
      <h3>Get in Touch</h3>
      <div className="contacts">
        <div className="contact">
          <img height="50" src="fb-icon.png" alt="facebook account" />
        </div>
        <div className="contact">
          <img height="50" src="github.png" alt="github account" />
        </div>
        <div className="contact">
          <img height="50" src="slack.png" alt="slack account" />
        </div>
        <div className="contact">
          <img height="50" src="gmail.png" alt="gmail account" />
        </div>
              
      </div>
    </div>
  )
})`
  height: 50vh;
  width: 100vw;
  background-color: var(--primary);
  border-radius:10px 10px 0 0;
  .contacts {
    width:60%;
    margin:50px auto 0;
    display:flex;
    justify-content:space-around;
    align-items:center;
    .contact:hover {
      cursor:pointer;
      transition:0.2s;
      opacity:0.5;
    }
  }
  @media (max-width:600px){
    .contacts {
      width:100%;
    }
  }
`

export default Footer;