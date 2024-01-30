import { useEffect, useState } from "react";
import "./CustomSelect.css"; // Import your CSS file
import Options from "../interfaces/Options";

interface Props {
  options: Options[];
}

const CustomSelect = ({ options }: Props) => {
  useEffect(() => {
    const closeDropDown = (event: MouseEvent) => {
      if ((event.target as HTMLElement).className !== "select-header open")
        setVisible(false);
    };

    document.body.addEventListener("click", closeDropDown);

    return () => document.body.removeEventListener("click", closeDropDown);
  }, []);
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [isVisible, setVisible] = useState(false);

  const handleOptionClick = (option: Options) => {
    setSelectedOption(option);
    setVisible(false);
  };

  return (
    <div className="custom-select">
      <div
        className={`select-header ${isVisible ? "open" : ""}`}
        onClick={() => setVisible(!isVisible)}
      >
        {selectedOption ? (
          <>
            {selectedOption.label}
            <i>{selectedOption.icon}</i>
          </>
        ) : (
          "Select an option"
        )}
      </div>
      {isVisible && (
        <div className="options-container">
          {options.map((option) => (
            <div
              key={option.value}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
              <i>{option.icon}</i>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
