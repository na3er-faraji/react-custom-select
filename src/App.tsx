import { useState } from "react";
import "./App.css";
import { AiFillFileUnknown } from "react-icons/ai";
import CustomSelect from "./components/CustomSelect";
import { FaBeer } from "react-icons/fa";
import options from "./data/Options";

function App() {
  const [items, setItems] = useState(options);
  const [input, setInput] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setItems([
        ...items,
        {
          value: input,
          label: input,
          icon: <AiFillFileUnknown />,
        },
      ]);
      setInput("");
    }
  };

  return (
    <>
      <h3>
        Lets go for a <FaBeer />?
      </h3>
      <input
        id="input"
        placeholder="Type a category here and press enter!"
        onKeyDown={handleKeyDown}
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      <CustomSelect options={items} />
    </>
  );
}

export default App;
