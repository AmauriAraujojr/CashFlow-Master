import { Link } from "react-router-dom";
import { LoginF } from "./LoginForm/loginf";
import { StyledLoginPage } from "./styled";
import logo from "../../assets/gettyimages-1002311754.webp";
import { FaHandHoldingDollar } from "react-icons/fa6";

export const Login = () => {
  return (
    <StyledLoginPage>
      <div className={"coluna_1"}>
        <div className="img_container">
          <h1 className="logotipo">
            CashFlow Master <FaHandHoldingDollar />
          </h1>
          <img src={logo} />

          <h2>Mestre em Caixa, Mestre em Negócios!</h2>

          <small>
            CashFlow Master é a ferramenta essencial para otimizar e controlar o
            fluxo de caixa do seu negócio. Domine suas finanças, tome decisões
            estratégicas e impulsione o sucesso financeiro com nossa plataforma
            intuitiva e poderosa. Mantenha-se no comando de suas receitas e
            despesas, transformando dados em insights valiosos. Desbloqueie o
            potencial financeiro do seu negócio com CashFlow Master.
          </small>
        </div>
      </div>

      <div className={"coluna_2"}>
        <LoginF />

        <div className="container_link">
          <h3 >Não tem conta?</h3>
          <p >Faça o seu cadastro</p>

          <Link to="/register">
              Cadastre-se
          </Link>
        </div>
      </div>
    </StyledLoginPage>
  );
};
