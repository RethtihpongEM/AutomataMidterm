import { useContext, useEffect, useState } from "react";
import { UtilContext } from "../context/UtilContext";

export const MinimizedDfa = () => {
  const [states, setStates] = useState([]);
  const [amountState, setAmountState] = useState("");
  const {navBarSelect, setNavBarSelect,navLinks} = useContext(UtilContext)
  
  useEffect(() =>{
    setNavBarSelect('Minimize DFA')
  },[setNavBarSelect])
  
  const generateState = (amountState) => {
    while (states.length > 0) {
      states.pop();
    }
    for (let i = 0; i < amountState; i++) {
      setStates(states, states.push(`q${i}`));
    }
    console.log(states);
  };

  return (
    <main className="flex flex-col items-start justify-start w-full border-2 gap-y-6">
      <div>
        <p>Amount state: {amountState}</p>
        {states?.map((state,key) => {
          return <p key={key}>{state}</p>;
        })}
      </div>
      <div className="flex flex-col w-full gap-y-4 min-w-[700px] max-w-[1000px]">
        <div className="grid grid-cols-[150px_1fr_100px] gap-4">
          <label htmlFor="state">Amount of states: </label>
          <input
            className="border-2 border-[#3B82F6] px-2 py-1 w-full"
            type="number"
            id="state"
            min="1"
            onChange={(e) => {
              setAmountState(e.target.value);
              generateState(e.target.value);
            }}
            placeholder="State... (i.e 1,2,3 ...)"
          />
        </div>

        <div className="grid grid-cols-[150px_1fr_100px] gap-4">
          <label htmlFor="alphabet">Alphabets: </label>
          <input
            className="border-2 border-[#3B82F6] px-2 py-1 w-full"
            type="text"
            id="alphabet"
            placeholder="State... (i.e q0, q1, q2...)"
          />
        </div>

        <div className="grid grid-cols-[150px_1fr_100px] gap-4">
          <label htmlFor="state">Start state: </label>
          <input
            className="border-2 border-[#3B82F6] px-2 py-1 w-full"
            type="text"
            id="state"
            placeholder="State... (i.e q0, q1, q2...)"
          />
        </div>

        <div className="grid grid-cols-[150px_1fr_100px] gap-4">
          <label htmlFor="state">Final state: </label>
          <input
            className="border-2 border-[#3B82F6] px-2 py-1 w-full"
            type="text"
            id="state"
            placeholder="State... (i.e q0, q1, q2...)"
          />
        </div>

        <div className="grid grid-cols-[150px_1fr_100px] gap-4">
          <label htmlFor="state">Transitions: </label>
          <input
            className="border-2 border-[#3B82F6] px-2 py-1 w-full"
            type="text"
            id="state"
            placeholder="State... (i.e q0, q1, q2...)"
          />
        </div>
      </div>
    </main>
  );
};
