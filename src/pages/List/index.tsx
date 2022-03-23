import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../layout/NavBar";
import { useUser } from "../../hooks/useUser";
import LandingSalary from "../../components/LandingSalary";
import { Lists } from "../../components/Lists";

export default function List() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/dashboard");
  }

  const [home, setHome] = useState(false);

  useEffect(() => {
    if (matchMedia("(max-width: 650px)").matches) {
      setHome(true);
    }
  }, []);

  const { user, setUser } = useUser();

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
            link={true}
            listOne="Overview"
            listTwo="List"
            listThree={`${home == true ? "Home" : ""}`}
            linkOne="/dashboard"
            linkTwo="/dashboard/list"
            linkThree="/"
            buttonDescriber="Home"
            eventClick={handleNavigate}
          />
          <Lists />
        </>
      ) : (
        <LandingSalary />
      )}
    </>
  );
}
