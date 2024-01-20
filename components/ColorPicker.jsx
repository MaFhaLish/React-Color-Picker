import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#95d6d6");

  function selectedColor(e) {
    setColor(e.target.value);
  }

  return (
    <div className="container">
      <h1>Color Picker</h1>
      <div style={{ backgroundColor: color }} className="color">
        Selected Color:{color}
      </div>
      <p>Select a Color :</p>
      <input type="color" value={color} onChange={selectedColor} />
    </div>
  );
}

export default ColorPicker;
