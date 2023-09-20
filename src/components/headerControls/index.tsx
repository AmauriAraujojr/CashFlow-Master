import { useContext, useState } from "react";
import { StyledHeaderControls } from "./style";
import { CaixaContext } from "../../providers/CaixaContext";
import { StyledContainer } from "../../styles/grid";
import { SubmitHandler, useForm } from "react-hook-form";

export interface ISelect {
  data: string;
}
export const HeaderControls = () => {
  const { setModalCaixa, addNewCaixa, modalCaixa, dates, filterCaixas} =
    useContext(CaixaContext);

  const { register, handleSubmit } = useForm<ISelect>({});

  const [form, setForm] = useState<any>();

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
  let dataForm = meses[data.getMonth()] + " - " + data.getFullYear();

  const newCaixa = () => {
    addNewCaixa();
    setModalCaixa(!modalCaixa);
  };

  const submit: SubmitHandler<ISelect> = (formdata) => {
    filterCaixas(formdata);
    setForm(formdata);
  };

  let fDatef = "";

  if (form) {
    let fDate = new Date(form.data);
    fDatef = meses[fDate.getMonth() + 1] + " - " + fDate.getFullYear();
  } else {
    fDatef = dataForm;
  }

  return (
    <StyledHeaderControls>
      <StyledContainer>
        <div className="flexBox">
          <div className="add_caixa">
            <button onClick={() => newCaixa()}>Novo Caixa</button>

            {form ? (
              <h2>
                Fluxo de caixa em <span>{fDatef}</span>
              </h2>
            ) : (
              <h2>
                Fluxo de caixa em <span>{dataForm}</span>
              </h2>
            )}
          </div>
          

          <div className="select_container">
            <h3>Escolha um data</h3>
            <form onSubmit={handleSubmit(submit)}>
              <select {...register("data")}>
                {dates.map((date) => {
                  let dateF = new Date(date);
                  let dateFf =
                    meses[dateF.getMonth() + 1] + " - " + dateF.getFullYear();
                  return (
                    <option key={date} value={date}>
                      {dateFf}
                    </option>
                  );
                })}
              </select>

              <button>Filtrar</button>
            </form>
          </div>
        </div>
      </StyledContainer>
    </StyledHeaderControls>
  );
};
