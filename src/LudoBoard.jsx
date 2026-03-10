import { useState } from "react";

export default function Ludoboard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  const [arr, setArr] = useState("no moves");

  let updateblue = () => {
    // setMoves((currMove) => {
    //   return { ...currMove, blue: currMove.blue + 1 };
    // });

    setArr([...arr, " blue moves"]);
    console.log(arr);
  };

  let updateYellow = () => {
    setMoves((currMove) => {
      return { ...currMove, yellow: currMove.yellow + 1 };
    });
  };

  let updateGreen = () => {
    setMoves((currMove) => {
      return { ...currMove, green: currMove.green + 1 };
    });
  };

  let updateRed = () => {
    setMoves((currMove) => {
      return { ...currMove, red: currMove.red + 1 };
    });
  };
  return (
    <>
      <p>blue moves: {moves.blue}</p>
      <p>{arr}</p>
      <button onClick={updateblue} style={{ backgroundColor: "blue" }}>
        +1
      </button>
      <p>yellow moves:{moves.yellow}</p>
      <button
        onClick={updateYellow}
        style={{ backgroundColor: "yellow", color: "black" }}
      >
        +1
      </button>
      <p>green moves:{moves.green}</p>
      <button onClick={updateGreen} style={{ backgroundColor: "green" }}>
        +1
      </button>
      <p>red moves:{moves.red}</p>
      <button onClick={updateRed} style={{ backgroundColor: "red" }}>
        +1
      </button>
    </>
  );
}
