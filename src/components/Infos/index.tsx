import { useUser } from "../../hooks/useUser";
import { SInfos } from "./style";

export function Infos() {
  const { user, setUser } = useUser();

  return (
    <SInfos>
      {user && (
        <>
          <span>Salary: R$ {user.salary.toLocaleString()}</span>

          <span>
            <ul>
              <li>Count: {user.percentCount}%</li>
              <li>Free: {user.percentFree}%</li>
              <li>Savings: {user.percentSavings}%</li>
            </ul>
            <button onClick={() => setUser(undefined)}>Edit</button>
          </span>
        </>
      )}
    </SInfos>
  );
}
