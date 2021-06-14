import styled from "styled-components";
// import { Carousel } from "react-responsive-carousel";
import Carousel from 'nuka-carousel';
import '../../App.css';
import Menu from '../Menu';

const Header = styled(({className}) => {
  return(
    <div className={className}>
      <Menu />
      <div className="header-content">
        <div className="header-text">
          <p className="header-text-one">
            <span style={{fontSize:"2em"}}><b>HI!</b></span> <br/>
            My name is <big><b>KELECHI</b></big> <br />
            I am a full stack developer and <br/>
            I love what i <b>do</b>
          </p>
        </div>
        <div className="header-img">
          <Carousel
            swiping={true}
            autoplay={true}
            autoplayInterval={3000}
            wrapAround={true}
            transitionMode="scroll"
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
            <div className="dev-guy">
              <img src="./dev-guy.png" alt="dev guy" />
            </div>
            <div className="dev-guy">
              <img src="./dev-dude.png" alt="dev guy" />
            </div>
          </Carousel>
        </div>
        {/* <div className="dev-guy">
          <img src="./dev-dude.png" alt="dev guy" />
        </div> */}
      </div>
    </div>
  )
})
`
  width: 100vw;

.header-content {
  border: none;
  color: white;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: var(--primary);
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
}
.header-text {
  width:40%;
  height: auto;
  position: relative;

}
.header-text::after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  height: 5px;
  width: 40px;
  background-color: white;
}
.header-img {
  width:30%;
  display:flex;
  align-items:flex-end;
}
.dev-guy {
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
}
@media only screen and (max-width: 600px){
  .header-content {
    height:85vh;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
  }
  .header-text {
    transform: translateY(0);
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:0.8em;
  }
  .header-text p {
    padding:0;
    margin:0;
    line-height:1.35em;
  }
  .header-text::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform:translateX(-50%);
    height: 3px;
    width: 50px;
    display:none;
  }

  .header-text, .header-img {
    height:40vh;
    width:100vw;
  }
  .dev-img img{
    height:180px;
  }
}
`

export default Header;