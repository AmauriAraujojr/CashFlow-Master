import { Link } from "react-router-dom";
import { LoginF } from "./LoginForm/loginf";

export const Login = () => {
  return (
    <>
      
      <LoginF/>
      
      <div className="registerRedirect__Container">
        <div>
          <p className="textDefaultBold">Não tem conta?</p>
          <p className="textDefault">Faça o seu cadastro</p>
        </div>
        <Link to="/register">
          <button type="button" className="fullWidth">
            Cadastre-se
          </button>
        </Link>
      </div>
    </>
  );
};
