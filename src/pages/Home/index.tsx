import { NavBar } from "../../layout/NavBar";
import { HomePage } from "../../components/HomePage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";

export default function Home() {
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
    <>
      {user ? (
        <NavBar
          link={false}
          listOne="Features"
          listTwo="About us"
          listThree="Pricing"
          linkOne="#features"
          linkTwo="#aboutUs"
          linkThree="#pricing"
          buttonDescriber="Enter"
          eventClick={handleNavigate}
        />
      ) : (
        <NavBar
          link={false}
          listOne="Features"
          listTwo="About us"
          listThree="Pricing"
          linkOne="#features"
          linkTwo="#aboutUs"
          linkThree="#pricing"
          buttonDescriber="Start"
          eventClick={handleNavigate}
        />
      )}
      <HomePage />
    </>
  );
}
