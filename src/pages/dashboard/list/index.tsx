import { useRouter } from "next/router";
import { NavBar } from "../../../layout/NavBar";

export default function Dashboard() {
  const router = useRouter();

  function handleNavigate() {
    router.push("/");
  }

  return (
    <>
      <NavBar
        listOne="Overview"
        listTwo="List"
        linkOne="/dashboard"
        linkTwo="/dashboard/list"
        linkThree="/"
        buttonDescriber="Home"
        eventClick={handleNavigate}
      />
    </>
  );
}
