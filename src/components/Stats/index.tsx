import { useEffect, useState, FormEvent } from "react";
import { useUser } from "../../hooks/useUser";
import { StatsBox } from "../StatsBox";
import { SStats } from "./style";

import Modal from "react-modal";
import { SForm } from "./style";
import { useData } from "../../hooks/useData";

interface PercentsTypes {
  countDed: string;
  freeDed: string;
  savingsDed: string;
}

Modal.setAppElement("#root");

export function Stats() {
  const { user } = useUser();
  const [percents, setPercents] = useState<PercentsTypes>();

  useEffect(() => {
    if (user) {
      setPercents({
        countDed: (user.salary * (user.percentCount / 100))
          .toFixed(2)
          .replace(".", ",")
          .toLocaleString(),
        freeDed: (user.salary * (user.percentFree / 100))
          .toFixed(2)
          .replace(".", ","),
        savingsDed: (user.salary * (user.percentSavings / 100))
          .toFixed(2)
          .replace(".", ","),
      });
    }
  }, [user]);

  // Modal Section

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valueBuy, setValueBuy] = useState(0);
  const [nameBuy, setNameBuy] = useState("");
  const [selectChange, setSelectChange] = useState("");

  function handleIsModalOpen() {
    setIsModalOpen(true);
  }

  function handleIsModalClose() {
    setIsModalOpen(false);
  }

  const { data, setData } = useData();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (selectChange == "" || selectChange == "none") {
      alert("Escolha o tipo de conta a ser debitado");
      return;
    } else if (nameBuy.trim() === "" || valueBuy === 0) {
      alert("Preencha os campos que faltam");
      return;
    } else {
      setData(
        data.concat([
          {
            item: nameBuy,
            value: valueBuy,
            type: selectChange,
          },
        ]),
      );
    }

    handleIsModalClose();
  }

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("dataBuy", JSON.stringify(data));
    }
  }, [data]);

  return (
    <SStats>
      <h1>Expense Stats:</h1>
      <div className="statsContainer">
        {percents && (
          <>
            <StatsBox
              value={50}
              avaliable={`${percents.countDed}`}
              type="Count"
            />
            <StatsBox
              value={50}
              avaliable={`${percents.freeDed}`}
              type="Free"
            />
            <StatsBox
              value={50}
              avaliable={`${percents.savingsDed}`}
              type="Savings"
            />
          </>
        )}
      </div>
      <button onClick={handleIsModalOpen}>Nova Compra</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleIsModalClose}
        overlayClassName="overlay-modal"
        className="modal"
      >
        <h2>Nova Compra</h2>
        <SForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome da compra"
            onChange={(e) => setNameBuy(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor da compra"
            onChange={(e) => setValueBuy(Number(e.target.value))}
          />
          <br />
          Tipo de compra:{" "}
          <select onChange={(e) => setSelectChange(e.target.value)}>
            <option value="none">Select</option>
            <option value="count">Count</option>
            <option value="free">Free</option>
            <option value="savings">Savings</option>
          </select>
          <br />
          <button type="submit">Adicionar</button>
        </SForm>
      </Modal>
    </SStats>
  );
}
