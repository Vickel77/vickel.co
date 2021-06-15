import styled from "styled-components"
const Collaborate =styled(({className}) =>{
  return(
    <div className={className}>
      <div className="first">
        <h3>WANNA START A PROJECT?</h3>
      </div>
      <div className="second">
        <a href="#">
          LET'S COLLABORATE
        </a>
      </div>
    </div>
  )
})`
  transform:translateY(-50%);
  background: -webkit-linear-gradient( left,  rgb(255, 222, 34), rgb(255, 145, 42));
  border-radius: 5px;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(00, 0, 0, 0.4);
  width: 70vw;
  height: 150px;
  margin: 0 auto;
  display:flex;
  flex-flow:row wrap;
  color: white;
  justify-content:center;
  align-items:center;
  & div:first-child {
      display:flex;
      justify-content:center;
      min-width:40%;
      border-right:2px solid var(--primaryLight);
  }
  & div:nth-child(2) {
    display:flex;
    justify-content:center;
    min-width:40%;
    animation: scale 2s ease-in-out infinite;
  }
  @keyframes scale {
    from, to {transform:scale(.89)}
    50%{transform:scale(1)}
  }
  & div:nth-child(2) a {
    background: var(--primaryLight);
    color:white;
    padding:10px;
    border-radius:5px;
    border:1px solid var(--primaryLight);
    border-bottom:2px solid var(--primary);
    box-shadow:0 3px 10px rgba(0,0,0,.2);
    transition:.2s 
  }

  & div:nth-child(2) a:hover {
    background:transparent;
    cursor:pointer;
  }

  @media (max-width:600px){
    width:80vw;
    padding:20px 10px;
  }
  & div:first-child {
    border:none;
  }

`

export default Collaborate;