import { NavBar } from "../../layout/NavBar";
import { HomePage } from "../../components/HomePage";
import { useHistory } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";

export default function Home() {
  const router = useHistory();

  function handleNavigate() {
    router.push("/dashboard");
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
