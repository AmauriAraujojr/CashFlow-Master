import { StyledContainer } from "../../styles/grid";
import { StyledHeader } from "./style";
import {BsClockFill}from"react-icons/bs"
import{FcCalendar} from"react-icons/fc"
import perfil from "../../assets/laf.jpg"

export const Header = () => {
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  let data = new Date();
  let dataHour = data.getHours() +
  " : " +
  data.getMinutes() +
  " : " +
  data.getSeconds();

  let dataForm =
    data.getDate() +
    " - " +
    meses[data.getMonth()] +
    " - " +
    data.getFullYear() 
    
  return (
    <StyledHeader>
      <StyledContainer>
        <div className="flexBox">
  
  <img src={perfil} />    
      <h2>Controle de caixa La Focaccia Pizzaria</h2>

          <div className="hour_date">

          <li><FcCalendar/>{dataForm}</li>

          <li><BsClockFill/> {dataHour}</li>
          </div>




        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
