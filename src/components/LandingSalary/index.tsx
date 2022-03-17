import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import Loadings from "../Loading";
import { SHome } from "./style";

export function LandingSalary() {
  const [salary, setSalary] = useState(0);
  const [count, setCount] = useState(0);
  const [free, setFree] = useState(0);
  const [savings, setSavings] = useState(0);

  const [local, setLocal] = useState(false);

  const { user, setUser } = useUser();

  function handleSetData(e: FormEvent) {
    e.preventDefault();

    if (count + free + savings < 100) {
      alert(
        "A soma dos três tipos de divisões do dinheiro tem que ser igual a 100",
      );
      return;
    }

    setUser({
      salary: salary,
      percentCount: count,
      percentFree: free,
      percentSavings: savings,
    });
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem("localUser", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      setLocal(true);
    }, 1000);
  }, []);

  return (
    <SHome>
      {local == false ? (
        <Loadings />
      ) : (
        <>
          <article>
            <div>
              <span className="logo">EX</span> pense
            </div>
            <br />
            <form onSubmit={handleSetData}>
              <h2>Enter values in the fields to continue</h2>
              <p>Salary:</p>
              <span>
                <button type="button">R$</button>
                <input
                  type="number"
                  onChange={(e) => setSalary(Number(e.target.value))}
                  min="1"
                  placeholder="Enter salary value"
                />
              </span>

              <p>Count dedicated percentage:</p>
              <span>
                <button type="button">%</button>
                <input
                  type="number"
                  onChange={(e) => setCount(Number(e.target.value))}
                  min="0"
                  max="100"
                  placeholder="Enter count dedicate"
                />
              </span>

              <p>Free dedicated percentage:</p>
              <span>
                <button type="button">%</button>
                <input
                  type="number"
                  onChange={(e) => setFree(Number(e.target.value))}
                  min="0"
                  max="100"
                  placeholder="Enter free dedicate"
                />
              </span>

              <p>Savings dedicated percentage:</p>
              <span>
                <button type="button">%</button>
                <input
                  type="number"
                  onChange={(e) => setSavings(Number(e.target.value))}
                  min="0"
                  max="100"
                  placeholder="Enter savings dedicate"
                />
              </span>
              <button className="start" type="submit">
                Start
              </button>
            </form>
          </article>
          <figure>
            <span>
              <Image
                src="/assets/images/ilustration-secfive.svg"
                alt="ilustration home"
                width={100}
                height={100}
                layout="responsive"
              />
            </span>
          </figure>
        </>
      )}
    </SHome>
  );
}
