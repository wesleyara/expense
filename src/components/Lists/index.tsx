import { SList } from "./style";
import { useData } from "../../hooks/useData";
import { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export function Lists() {
  const { data, setData } = useData();

  useEffect(() => {
    const dataBuy = localStorage.getItem("dataBuy");

    if (dataBuy) {
      setData(JSON.parse(dataBuy));
    }
  }, [setData]);

  const filterCount = data.filter((val) => val.type === "count");
  const filterFree = data.filter((val) => val.type === "free");
  const filterSavings = data.filter((val) => val.type === "savings");

  function handleRemovItem(type: string, itemID: string) {
    const filteredRest = data.filter((val) => val.type !== type);
    const filteredItem = data
      .filter((val) => val.type === type)
      .filter((obj) => obj.item !== itemID);

    setData(filteredRest.concat(filteredItem));
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem("dataBuy", JSON.stringify(data));
    }
  }, [data]);
  return (
    <SList>
      <h1>Purchase List</h1>

      {data.length > 0 ? (
        <>
          {" "}
          {filterCount.length > 0 && (
            <>
              <h2>Count list:</h2>
              <ul>
                {filterCount.map((value, index) => {
                  return (
                    <li key={index}>
                      {index + 1} -{" "}
                      {value.item[0].toUpperCase() + value.item.substring(1)} in
                      the amount of R$
                      {value.value
                        .toFixed(2)
                        .replace(".", ",")
                        .toLocaleString()}
                      .
                      <button
                        onClick={() => handleRemovItem("count", value.item)}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {filterFree.length > 0 && (
            <>
              <h2>Free list:</h2>
              <ul>
                {filterFree.map((value, index) => {
                  return (
                    <li key={index}>
                      {index + 1} -{" "}
                      {value.item[0].toUpperCase() + value.item.substring(1)} in
                      the amount of R$
                      {value.value
                        .toFixed(2)
                        .replace(".", ",")
                        .toLocaleString()}
                      .
                      <button
                        onClick={() => handleRemovItem("free", value.item)}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {filterSavings.length > 0 && (
            <>
              <h2>Savings list:</h2>
              <ul>
                {filterSavings.map((value, index) => {
                  return (
                    <li key={index}>
                      {index + 1} -{" "}
                      {value.item[0].toUpperCase() + value.item.substring(1)} in
                      the amount of R$
                      {value.value
                        .toFixed(2)
                        .replace(".", ",")
                        .toLocaleString()}
                      .
                      <button
                        onClick={() => handleRemovItem("savings", value.item)}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          <button onClick={() => setData([])}>Delete all purchases</button>
        </>
      ) : (
        <h3>Don&apos;t have any purchases yet.</h3>
      )}
    </SList>
  );
}
