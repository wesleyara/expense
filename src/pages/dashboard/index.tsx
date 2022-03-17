import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Infos } from "../../components/Infos";
import { Stats } from "../../components/Stats";
import { LandingSalary } from "../../components/LandingSalary";
import { useUser } from "../../hooks/useUser";
import { NavBar } from "../../layout/NavBar";

export default function Dashboard() {
  const [home, setHome] = useState(false);

  const router = useRouter();

  function handleNavigate() {
    router.push("/");
  }

  const { user } = useUser();

  useEffect(() => {
    if (matchMedia("(max-width: 650px)").matches) {
      setHome(true);
    }
  }, []);

  return (
    <>
      {!user ? (
        <LandingSalary />
      ) : (
        <>
          <NavBar
            listOne="Overview"
            listTwo="List"
            listThree={`${home == true ? "Home" : ""}`}
            linkOne="/dashboard"
            linkTwo="/dashboard/list"
            linkThree="/"
            buttonDescriber="Home"
            eventClick={handleNavigate}
          />
          <Infos />
          <Stats />
        </>
      )}
    </>
  );
}
