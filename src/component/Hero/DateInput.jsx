import { useState } from "react";
import "./dateInput.css"; // стили отдельно

function DateInput({ label }) {
  const [value, setValue] = useState("");

  return (
    <div className="date-input-wrapper">
      <label className={`floating-placeholder ${value ? "filled" : ""}`}>
        {label}
      </label>
      <input
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="styled-date-input"
      />
    </div>
  );
}

export default DateInput;