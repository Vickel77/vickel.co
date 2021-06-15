import styled from "styled-components";
import Carousel from "nuka-carousel"
const Clients = styled(({className})=>{
  return(
    <div className={className}>
      <div className="clients">
        <h2>My Clients</h2>
        <Carousel
          swiping={true}
          autoplay={true}
          autoplayInterval={3000}
          wrapAround={true}
          transitionMode="scroll3d"
          opacityScale={0}
          pauseOnHover={false}
          defaultControlsConfig={{
            prevButtonStyle: {
              opacity: '0',
            },
            nextButtonStyle: {
              opacity: '0'
            },
            pagingDotsStyle: {
              fill: "transparent"
            }
          }}
        >
          <div className="client">
            <img height="70" src="client1.png" alt="client" />
          </div>
          <div className="client">
            <img height="70" src="client2.png" alt="client" />
          </div>
          <div className="client">
            <img height="70" src="client3.png" alt="client" />
          </div>
        </Carousel>
      </div>
    </div>
  )
})`
  width:60%;
  height:60vh;
  margin:100px auto 0px;
  overflow:hidden;
  h2{padding:0; margin:0;}
  .client {
    background:rgba(255,255,255,.8);
    display:flex;
    align-items:flex-start;
    justify-content:center;
    padding:20px;
    width:50%;
    margin:0 auto;
    img{
      opacity:.5;
    }
    
  }
  @media (max-width:600px){
    width:100%;
    .client {
      width:80%;
    }
  }
  
`
export default Clients