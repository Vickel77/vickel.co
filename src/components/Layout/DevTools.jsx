import styled from "styled-components";
const DevTools = styled(({className}) =>{
  return(
    <div className={className}>
      <h2>DevTools</h2>
      <div className="tools">
        <div className="frontend">
          <div className="frontend-tools">
            <div className="tool">
              <img src="REACT.png" alt="tool" height="80" />
            </div>
            <div className="tool">
              <img src="next.png" alt="tool" height="80"/>
            </div>
            <div className="tool">
              <img src="bootstrap.png" alt="tool" height="80"/>
            </div>
            <div className="tool">
              <img src="html.png" alt="tool" height="80"/>
            </div>
            <div className="tool">
              <img src="css.png" alt="tool" height="80"/>
            </div>
          </div>
        </div>
        <div className="backend">
          <div className="backend-tools">
            <div className="tool">
              <img src="node.png" alt="tool" height="80" />
            </div>
            <div className="tool">
              <img src="express.jpeg" alt="tool" height="80"/>
            </div>
            <div className="tool">
              <img src="mongo.png" alt="tool" height="80"/>
            </div>
            <div className="tool">
              <img src="heroku.png" alt="tool" height="80"/>
            </div>
            <div className="tool">
              <img src="vercel.png" alt="tool" height="80"/>
            </div>
            <div className="tool">
              <img src="vs-code.png" alt="tool" height="80"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
})`
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(00, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: 80vw;
  margin: 0 auto;
  margin-top: 50px;
  padding:20px 0;
  .tools {
    padding:10px;
  }
  .frontend-tools, .backend-tools {
    width:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
    align-items:center;
  }
  .backend {
    margin-top:30px;
  }
  .tool {   
    p {
      margin:0;
      font-size:.7em;
    }
  }

  @media (max-width:600px){
    height:auto;
  }

`

export default DevTools;