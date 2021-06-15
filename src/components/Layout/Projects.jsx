import styled from "styled-components";
import Project from "../Project";
const Projects = styled(({className}) =>{
  return(
    <div className={className}>
      <h2>RECENT PROJECTS</h2>
      <div className="projects-container">
        <Project 
          src="project-1.jpg" 
          title="JAMSELECT" 
          desc="Platfrom for music lover \n find and share the music you love" />
        <Project 
          src="project-6.jpg" 
          title="GWOM"
          desc="We Care for the girl child"/>
        <Project 
          src="project-3.jpg" 
          title="ACCOUNTING WORLD"
          desc="Accounting solutions"
          />
        <Project 
          src="project-2.jpg" 
          title="ZARS ORGANICS"
          desc="Glow from nature"
          />
        <Project 
          src="project-5.jpg"
          title="HOTR KD"
          desc="The mission house"
          />
        <Project 
          src="project-4.jpg" 
          title="DRUM KIT"
          desc="Musicians live drum setup"
          />
      </div>
    </div>
  )
})`
  width: 100vw;
  padding: 100px 0;
  margin-top: 50px;

.projects-container {
  width: 85vw;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
  @media (max-width:600px){
    .projects-container {
      width: 100vw;
      flex-flow: column wrap;
      justify-content: center;
      align-items:center;
    }
  }
`

export default Projects;