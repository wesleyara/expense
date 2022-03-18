import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Infos } from "../../components/Infos";
import { Stats } from "../../components/Stats";
import { useUser } from "../../hooks/useUser";
import { NavBar } from "../../layout/NavBar";
import LandingSalary from "../../components/LandingSalary";

export default function Dashboard() {
  // useStates

  const [home, setHome] = useState(false);

  // const imports

  const router = useHistory();

  const { user, setUser } = useUser();

  // handleFunctions

  function handleNavigate() {
    router.push("/");
  }

  // UseEffects

  useEffect(() => {
    if (matchMedia("(max-width: 650px)").matches) {
      setHome(true);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("localUser", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");

    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, [setUser]);

  return (
    <>
      {user ? (
        <>
          <NavBar
            listOne="Overview"
            listTwo="List"
            listThree={`${home == true ? "Home" : ""}`}
            linkOne="/dashboard"
            linkTwo="/list"
            linkThree="/"
            buttonDescriber="Home"
            eventClick={handleNavigate}
          />
          <Infos />
          <Stats />
        </>
      ) : (
        <LandingSalary />
      )}
    </>
  );
}
