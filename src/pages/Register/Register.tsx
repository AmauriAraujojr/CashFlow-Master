import { Link } from "react-router-dom";
import { RegisterF } from "./RegisterForm/formR";

export const Register= () => {
  return (
    <>
    <RegisterF/>
      <div className="registerRedirect__Container">
        <div>
          <p className="textDefaultBold">Já é cadastrado ?</p>
          <p className="textDefault">Faça o login</p>
        </div>
        <Link to="/">
          <button type="button" className="fullWidth">
            Voltar para o login
          </button>
        </Link>
      </div>
    </>
  );
};