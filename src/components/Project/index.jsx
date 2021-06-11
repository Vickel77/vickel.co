import styled from "styled-components";

const Project = styled(({className, src, title, desc}) => {
  return(
    <div className={className}>
      <img src={src} height="300px" alt="project" />
      <div className="project-overlay">
        <div className="project-title">
          <a href="#"> {title} </a>
        </div>
        <div className="desc">
          <h6>
            {desc}
          </h6>
        </div>
      </div>
    </div>
  )
})`
  height: 300px;
  min-width: 350px;
  width: 350px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2),
    -4px -4px 15px rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 2em;
  position: relative;
  transition: 0.35s;
  &:hover {
    cursor:pointer;
  }

.project-overlay {
  height: 300px;
  min-width: 350px;
  background: -webkit-linear-gradient(rgba(0,0,0,.8), rgb(25, 0, 26));
  position: absolute;
  bottom: 50%;
  left: 0;
  opacity: 0;
  display: flex;
  flex-flow:column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.35s;
  color: white;
}
&:hover .project-overlay {
  bottom: 0;
  opacity: 1;
}
&:hover img {
  transform:scale(1.2);
  transition: 0.35s;
}
.project-title a {
  border: 1px solid white;
  border-radius: 5px;
  padding:5px 10px;
  color: white;
}
.project-title a:hover {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 0px;
  border: 1px solid transparent;
  border-bottom: 1px solid white;
}
@media (max-width:600px){
  height: 300px;
  min-width: 300px;
  width: 300px;
}
`

export default Project;