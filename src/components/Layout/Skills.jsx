import styled from "styled-components";
import Projects from "./Projects";
import DevTools from "./DevTools";

const Skill = styled(({className, percentage, stack, backEnd}) => {
  return (
    <div className={className}>
      <div className="percent">
        <svg className={backEnd}>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
        <div className="number">
          <h2>{percentage} <span>%</span> </h2>
        </div>
      </div>
      <h4 className="stat-text">{stack} END DEVELOPMENT</h4>
    </div>
  )
})`
.percent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: inset 0 0 15px 5px rgba(0, 0, 0, 0.32);
}

svg {
  position: relative;
  text-align: center;
  width: 150px;
  height: 150px;
}
svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--primaryAccent);
  stroke-width: 10;
  stroke-linecap: round;
  transform: translate(5px, 5px);
}
svg circle:nth-child(2) {
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
}

svg circle:nth-child(2) {
  stroke-dashoffset: calc(440 - (440 * 90) / 100);
  stroke: var(--primaryLight);
}
svg.back-end circle:nth-child(2) {
  stroke-dashoffset: calc(440 - (440 * 50) / 100);
  stroke: var(--primaryLight);
}

.percent .number {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  word-spacing: -5px;
}
.percent .number h2 {
  font-size: 2em;
  font-weight:lighter;
  color: var(--primaryLight);
}
.percent .number h2:hover {
  font-size:1em;
}
.percent .number h2 span {
  font-size: 0.5em;
  margin: 0;
  padding: 0;
}
.stat-text {
  font-weight:lighter;
}
`

const SkillsBar = styled(({className}) => {
  return(
    <div className={className}>
      HTML <div className="load-bar"><div className="html-bar"></div></div> 
      CSS <div className="load-bar"><div className="css-bar"></div></div>
      JAVASCRIPT <div className="load-bar"><div className="bs-bar"></div></div>
      REACT <div className="load-bar"><div className="react-bar"></div></div>
      NODE  <div className="load-bar"><div className="node-bar"></div></div>
    </div>
  )
})`
  width: 35%;

.load-bar {
  background: rgba(187, 0, 255, 0.1);
  width: 100%;
  height: 10px;
  border-radius: 0 5px 5px 0;
  margin: 2% 0;
  overflow: hidden;
  text-align: right;
  overflow: hidden;
  position: relative;
}
.html-bar,
.css-bar,
.bs-bar,
.vue-bar,
.react-bar,
.node-bar {
  height: 10px;
  background: -webkit-linear-gradient(
    left,
    var(--primaryLight),
    var(--primaryAccent)
  );
  border-radius: 0 5px 5px 0;
  transform: scale(1);
  transform-origin: 0% 0%;
  animation: load-bar 1s ease-in-out;
}
.html-bar {
  width: 90%;
}
.css-bar {
  width: 90%;
}
.bs-bar {
  width: 75%;
}
.vue-bar {
  width: 50%;
}
.react-bar {
  width: 65%;
}
.node-bar {
  width: 25%;
}
@keyframes load-bar {
  from {
    transform: scale(0, 1);
  }
  to {
    transform: scale(1);
  }
}
@media only screen and (max-width: 600px){
  margin-top:30px;
  width:90%;
  .load-bar {
    margin:.7em 0;
  }
}
`

const Skills = styled(({className}) => {
  return(
    <section className={className}>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="box">
        <div className="square" style={{"--i":"0"}}></div>
        <div className="square" style={{"--i":"2"}}></div>
        <div className="square" style={{"--i":"3"}}></div>
        <div className="square" style={{"--i":"4"}}></div>
        <div className="square" style={{"--i":"5"}}></div>
        <h2>SKILLS</h2>
        <div className="container">
          <div className="skills">
            <Skill percentage="90" stack="FRONT" />
            <Skill percentage="50" stack="BACK" backEnd="back-end" />
            <SkillsBar />
          </div>
        </div>
        <Projects />
        <DevTools />
      </div>
    </section>
  )
})`
  color: var(--primaryLight);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  padding: 100px 0 200px;
  position:relative;

  .shape {
    position: fixed;
    z-index: -1;
    filter: blur(150px);
  }
  .shape:nth-child(1) {
    top: 0px;
    width: 500px;
    height: 400px;
    background: var(--primaryAccent);
  }
  .shape:nth-child(2) {
    bottom: 50%;
    left: 00px;
    width: 400px;
    height: 500px;
    background: rgb(255, 211, 101);
    opacity: 0.7;
  }
  .shape:nth-child(3) {
    bottom: 20%;
    right: 00px;
    width: 400px;
    height: 600px;
    background: #7fe000;
    opacity: 0.3;
  }

  .box {
    position: relative;
  }
  .box h2 {
    padding-bottom:50px;
  }
  .box .square {
    position: absolute;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(00, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    animation: animate 10s linear infinite;
    animation-delay: calc(-1s * var(--i));
    z-index:0;
  }
  @keyframes animate {
    from,
    to {
      transform: translateY(-40px);
    }
    50% {
      transform: translateY(40px);
    }
  }
  .box .square:nth-child(1) {
    top: -10px;
    right: -60px;
    width: 100px;
    height: 100px;
  }
  .box .square:nth-child(2) {
    top: 150px;
    left: -100px;
    width: 120px;
    height: 120px;
  }
  .box .square:nth-child(3) {
    bottom: 50px;
    right: -60px;
    width: 80px;
    height: 80px;
  }
  .box .square:nth-child(4) {
    bottom: -80px;
    left: 100px;
    width: 50px;
    height: 50px;
  }
  .box .square:nth-child(5) {
    top: -80px;
    left: 100px;
    width: 60px;
    height: 60px;
  }

  .container {
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(00, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 80vw;
    margin: 0 auto;
  }
  .container h3 {
    padding:30px 0;
  }
  .container::before {
    content: "";
    position: absolute;
    bottom: -100px;
    left: 25%;
    width: 50%;
    height: 2.5px;
    background-color: var(--primaryLight);
  }
  .skills {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
  }

  @media only screen and (max-width: 600px){
    .skills {
      flex-flow: column wrap;
      justify-content:center;
      align-items:center;
      padding: 20px 10px;
    }
  }
`

export default Skills;