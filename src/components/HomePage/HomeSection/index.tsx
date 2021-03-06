import { useNavigate } from "react-router-dom";
import ilustrationSecone from "../../../assets/images/ilustration-home.svg";
import { useUser } from "../../../hooks/useUser";
import { useEffect } from "react";

import { SHome } from "./style";

export function SectionOne() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/dashboard");
  }

  const { user, setUser } = useUser();

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");

    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, [setUser]);

  return (
    <SHome data-aos="fade-right">
      {user ? (
        <>
          <main>
            <div>
              <h1>Track your Expenses to Save Money</h1>
              <span>Helps you to organize your income and expenses</span>
            </div>
            <div className="btBox">
              <button onClick={handleNavigate}>Enter now</button>
              <span>- Web, iOs and Android</span>
            </div>
          </main>
          <aside>
            <img src={ilustrationSecone} alt="ilustration home" />
          </aside>
        </>
      ) : (
        <>
          <main>
            <div>
              <h1>Track your Expenses to Save Money</h1>
              <span>Helps you to organize your income and expenses</span>
            </div>
            <div className="btBox">
              <button onClick={handleNavigate}>Start now</button>
              <span>- Web, iOs and Android</span>
            </div>
          </main>
          <aside>
            <img src={ilustrationSecone} alt="ilustration home" />
          </aside>
        </>
      )}
    </SHome>
  );
}
