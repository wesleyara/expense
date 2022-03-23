import { FormEvent, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { SHome } from "./style";
import ilustration from "../../assets/images/ilustration-secfive.svg";

import { NewError } from "../NewError";

export default function LandingSalary() {
  const [salary, setSalary] = useState(0);
  const [count, setCount] = useState(0);
  const [free, setFree] = useState(0);
  const [savings, setSavings] = useState(0);

  const [newError, setNewError] = useState(false);

  const { setUser } = useUser();

  function handleSetData(e: FormEvent) {
    e.preventDefault();

    if (count + free + savings < 100) {
      setNewError(true);

      setTimeout(() => {
        setNewError(false);
      }, 4000);
      return;
    }

    setUser({
      salary: salary,
      percentCount: count,
      percentFree: free,
      percentSavings: savings,
    });
  }

  return (
    <>
      <SHome>
        <article>
          <div>
            <span className="logo">EX</span> pense
          </div>
          <br />
          <form onSubmit={handleSetData}>
            <h2>Enter values in the fields to continue</h2>

            <label htmlFor="salary">Salary:</label>
            <div>
              <span>R$</span>
              <input
                type="number"
                id="salary"
                onChange={(e) => setSalary(Number(e.target.value))}
                min="1"
                placeholder="Enter salary value"
              />
            </div>

            <label htmlFor="count">Count dedicated percentage:</label>
            <div>
              <span>%</span>
              <input
                type="number"
                id="count"
                onChange={(e) => setCount(Number(e.target.value))}
                min="0"
                max="100"
                placeholder="Enter count dedicate"
              />
            </div>

            <label htmlFor="free">Free dedicated percentage:</label>
            <div>
              <span>%</span>
              <input
                type="number"
                id="free"
                onChange={(e) => setFree(Number(e.target.value))}
                min="0"
                max="100"
                placeholder="Enter free dedicate"
              />
            </div>

            <label htmlFor="savings">Savings dedicated percentage:</label>
            <div>
              <span>%</span>
              <input
                type="number"
                id="savings"
                onChange={(e) => setSavings(Number(e.target.value))}
                min="0"
                max="100"
                placeholder="Enter savings dedicate"
              />
            </div>
            <button className="start" type="submit">
              Start
            </button>
          </form>
        </article>
        <figure>
          <img src={ilustration} alt="ilustration home" />
        </figure>
      </SHome>

      {newError && <NewError />}
    </>
  );
}
