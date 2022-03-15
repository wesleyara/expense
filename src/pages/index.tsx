import type { NextPage } from "next";
import { NavBar } from "../layout/NavBar";
import { HomePage } from "../components/HomePage";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  function handleNavigate() {
    router.push("/dashboard");
  }

  return (
    <>
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
      <HomePage />
    </>
  );
};

export default Home;
