import styled from "styled-components";
const DevTools = styled(({className}) =>{
  return(
    <div className={className}>
      <h2>DevTools</h2>
      <div className="tools">
        <div className="tool">
          <img src="tool-1.png" alt="tool" height="80" />
          <p>NODE.js</p>
        </div>
        <div className="tool">
          <img src="tool-2.png" alt="tool" height="80"/>
          <p>VS CODE</p>
        </div>
         <div className="tool">
          <img src="tool-3.png" alt="tool" height="80"/>
          <p>BOOTSTRAP</p>
        </div>
        <div className="tool">
          <img src="tool-4.png" alt="tool" height="80"/>
          <p>REACT</p>
        </div>
      </div>
    </div>
  )
})`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(00, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: 80vw;
  height: 50vh;
  margin: 0 auto;
  margin-top: 50px;
  .tools {
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
    align-items:center;
    padding:10px;
  }
  .tool {
    display:flex;
    flex-flow:column nowrap;
    p {
      font-size:.7em;
    }
  }

  @media (max-width:600px){
    height:auto;
  }

`

export default DevTools;