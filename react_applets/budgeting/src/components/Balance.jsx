import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const totalAmounts = transactions
      .map((transaction) => transaction.amount)
      .reduce((acc, item) => acc + item, 0)
      .toFixed(2);
    setBalance(totalAmounts);
  }, [transactions, balance]);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};

export default Balance;
