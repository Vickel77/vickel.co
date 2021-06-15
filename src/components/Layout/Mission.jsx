import styled from "styled-components";

const Mission = styled(({className})=>{
  return (
    <div className={className}>
      <p>
        I am energy driven and always go the extra mile to bring the best out your ideas, my slogan would be 
        <em>"if you can think it i can code it"</em>
      </p>
    </div>
  )
})`
  background:#8f059455;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(00, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width:80%;
  margin:100px auto;
  padding:50px 0;
  border-radius:10px;
  color:white;
  p{
    width:50%;
    margin:0 auto;
    text-align:center;
  }
  @media(max-width:600px){
    p{
      width:90%;
    }
  }
`

export default Mission;