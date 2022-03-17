import { useRouter } from "next/router";
import { LandingSalary } from "../../components/LandingSalary";
import { useUser } from "../../hooks/useUser";
import { NavBar } from "../../layout/NavBar";

export default function Dashboard() {
  const router = useRouter();

  function handleNavigate() {
    router.push("/");
  }

  const { user } = useUser();

  return (
    <>
      {!user ? (
        <LandingSalary />
      ) : (
        <NavBar
          listOne="Overview"
          listTwo="List"
          linkOne="/dashboard"
          linkTwo="/dashboard/list"
          linkThree="/"
          buttonDescriber="Home"
          eventClick={handleNavigate}
        />
      )}
    </>
  );
}
