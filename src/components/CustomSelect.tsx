import { useState } from "react";
import "./CustomSelect.css"; // Import your CSS file
import Options from "../interfaces/Options";

interface Props {
  options: Options[];
}

const CustomSelect = ({ options }: Props) => {
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Options) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div
        className={`select-header ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
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
      {isOpen && (
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
