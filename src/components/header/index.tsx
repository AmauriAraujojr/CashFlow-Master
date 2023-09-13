import { StyledContainer } from "../../styles/grid";
import { StyledHeader } from "./style";
import { BsClockFill } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { BiSolidLogOutCircle } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";

interface IHeader {
  setDefaultDiv: React.Dispatch<React.SetStateAction<boolean>>;
  defaultDiv: boolean;
}
export const Header = ({ setDefaultDiv, defaultDiv }: IHeader) => {
  const [logoutButton, setLogoutButton] = useState(false);
  const { logout, user } = useContext(UserContext);

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
  let dataHour =
    data.getHours() + " : " + data.getMinutes() + " : " + data.getSeconds();

  let dataForm =
    data.getDate() +
    " - " +
    meses[data.getMonth()] +
    " - " +
    data.getFullYear();

  const logoutUser = () => {
    setDefaultDiv(!defaultDiv);
    setLogoutButton(!logoutButton);
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <div className="flexBox">
          <h1 className="logotipo">
            CashFlow Master <FaHandHoldingDollar />
          </h1>

          <div className="hour_date">
            <li>
              <FcCalendar />
              {dataForm}
            </li>

            <li>
              <BsClockFill /> {dataHour}
            </li>
          </div>

          <h2>
            Controle de caixa <strong>{user?.nome_empresa}</strong>
          </h2>
          <div className="img_container">
            <img src={user?.avatar_empresa} onClick={() => logoutUser()} />
            {logoutButton ? (
              <button className="btn_logout" onClick={() => logout()}>
                <BiSolidLogOutCircle />
                Sair
              </button>
            ) : null}
          </div>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
