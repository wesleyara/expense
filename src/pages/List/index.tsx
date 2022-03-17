import { useHistory } from "react-router-dom";
import { NavBar } from "../../layout/NavBar";

export default function List() {
  const router = useHistory();

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
