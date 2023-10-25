import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { transactions, addTransaction } = useContext(GlobalContext);
  return (
    <>
      <h3>Add New Transaction</h3>
      <label htmlFor="text">Text</label>
      <input
        type="text"
        id="text"
        value={text}
        placeholder="Enter text..."
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        placeholder="Enter amount..."
        value={amount}
        onChange={(e) => {
          const val = e.target.value;
          setAmount(val ? parseInt(val, 10) : "");
        }}
      />

      <button
        className="btn"
        onClick={() => {
          const currentIDs = transactions.map((transaction) => transaction.id);
          const new_id =
            currentIDs.length === 0 ? 1 : Math.max(...currentIDs) + 1;
          addTransaction({ id: new_id, text: text, amount: amount });
          setAmount("");
          setText("");
        }}
        disabled={text.length === 0 || typeof amount === "string"}
      >
        Add Transaction
      </button>
    </>
  );
};

export default AddTransaction;
