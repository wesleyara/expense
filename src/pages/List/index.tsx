import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavBar } from "../../layout/NavBar";

export default function List() {
  const router = useHistory();

  function handleNavigate() {
    router.push("/");
  }

  const [home, setHome] = useState(false);

  useEffect(() => {
    if (matchMedia("(max-width: 650px)").matches) {
      setHome(true);
    }
  }, []);

  return (
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
    </>
  );
}
