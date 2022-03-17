import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { StatsBox } from "../StatsBox";
import { SStats } from "./style";

interface PercentsTypes {
  countDed: string;
  freeDed: string;
  savingsDed: string;
}

export function Stats() {
  const { user } = useUser();
  const [percents, setPercents] = useState<PercentsTypes>();

  useEffect(() => {
    if (user) {
      setPercents({
        countDed: (user.salary * (user.percentCount / 100))
          .toFixed(2)
          .replace(".", ",")
          .toLocaleString(),
        freeDed: (user.salary * (user.percentFree / 100))
          .toFixed(2)
          .replace(".", ","),
        savingsDed: (user.salary * (user.percentSavings / 100))
          .toFixed(2)
          .replace(".", ","),
      });
    }
  }, [user]);

  return (
    <SStats>
      <h1>Expense Stats:</h1>
      <div className="statsContainer">
        {percents && (
          <>
            <StatsBox
              value={50}
              avaliable={`${percents.countDed}`}
              type="Count"
            />
            <StatsBox
              value={50}
              avaliable={`${percents.freeDed}`}
              type="Free"
            />
            <StatsBox
              value={50}
              avaliable={`${percents.savingsDed}`}
              type="Savings"
            />
          </>
        )}
      </div>
      <button>Nova Compra</button>
    </SStats>
  );
}
