import { useRouter } from "next/router";
import { NavBar } from "../../layout/NavBar";

export default function Dashboard() {
  const router = useRouter();

  function handleNavigate() {
    router.push("/");
  }

  return (
    <>
      <NavBar
        listOne="Dashboard"
        listTwo="List"
        buttonDescriber="Home"
        eventClick={handleNavigate}
      />
    </>
  );
}
