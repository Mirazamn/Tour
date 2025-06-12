import { useState } from "react";

function DateInput({ placeholder }) {
  const [type, setType] = useState("text");

  return (
    <input
      type={type}
      placeholder={placeholder}
      onFocus={() => setType("date")}
      onBlur={(e) => {
        if (!e.target.value) setType("text");
      }}
      style={{
        padding: "20px 30px",
        border: "0.8px solid #AFB0B9",
        borderRadius: "6px",
        width: "220px",
        fontSize: "15px",
        fontWeight: 400,
        color: "#4A4C53",
        outline: "none",
      }}
    />
  );
}

export default DateInput;