import { useEffect, useState, FormEvent } from "react";
import { useUser } from "../../hooks/useUser";
import { StatsBox } from "../StatsBox";
import { SStats } from "./style";

import Modal from "react-modal";
import { SForm } from "./style";
import { useData } from "../../hooks/useData";
import { DataTypes } from "../../@types";

interface PercentsTypes {
  countDed: number;
  freeDed: number;
  savingsDed: number;
}

Modal.setAppElement("#root");

export function Stats() {
  const { user } = useUser();
  const [percents, setPercents] = useState<PercentsTypes>();

  useEffect(() => {
    if (user) {
      setPercents({
        countDed: user.salary * (user.percentCount / 100),
        freeDed: user.salary * (user.percentFree / 100),
        savingsDed: user.salary * (user.percentSavings / 100),
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

  useEffect(() => {
    const dataBuy = localStorage.getItem("dataBuy");

    if (dataBuy) {
      setData(JSON.parse(dataBuy));
    }
  }, [setData]);

  const filterCount = data.filter((val) => val.type === "count");
  const filterFree = data.filter((val) => val.type === "free");
  const filterSavings = data.filter((val) => val.type === "savings");

  function calcReduce(array: DataTypes[]) {
    const some = array.reduce((acc, item) => {
      return acc + item.value;
    }, 0);

    return some;
  }

  return (
    <SStats>
      <h1>Expense Stats:</h1>
      <div className="statsContainer">
        {percents && (
          <>
            <StatsBox
              value={Number(
                ((calcReduce(filterCount) * 100) / percents.countDed).toFixed(
                  1,
                ),
              )}
              avaliable={`${(percents.countDed - calcReduce(filterCount))
                .toFixed(2)
                .replace(".", ",")
                .toLocaleString()}`}
              type="Count"
            />
            <StatsBox
              value={Number(
                ((calcReduce(filterFree) * 100) / percents.freeDed).toFixed(1),
              )}
              avaliable={`${(percents.freeDed - calcReduce(filterFree))
                .toFixed(2)
                .replace(".", ",")
                .toLocaleString()}`}
              type="Free"
            />
            <StatsBox
              value={Number(
                (
                  (calcReduce(filterSavings) * 100) /
                  percents.savingsDed
                ).toFixed(1),
              )}
              avaliable={`${(percents.savingsDed - calcReduce(filterSavings))
                .toFixed(2)
                .replace(".", ",")
                .toLocaleString()}`}
              type="Savings"
            />
          </>
        )}
      </div>
      <button onClick={handleIsModalOpen}>New Purchase</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleIsModalClose}
        overlayClassName="overlay-modal"
        className="modal"
      >
        <span onClick={handleIsModalClose}>X</span>
        <h2>Add a new purchase</h2>
        <SForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Purchase name"
            onChange={(e) => setNameBuy(e.target.value)}
          />
          <input
            type="number"
            placeholder="Purchase value"
            onChange={(e) => setValueBuy(Number(e.target.value))}
          />
          <br />
          Purchase type:{" "}
          <select onChange={(e) => setSelectChange(e.target.value)}>
            <option value="none">Select</option>
            <option value="count">Count</option>
            <option value="free">Free</option>
            <option value="savings">Savings</option>
          </select>
          <br />
          <button type="submit">Add</button>
        </SForm>
      </Modal>
    </SStats>
  );
}
