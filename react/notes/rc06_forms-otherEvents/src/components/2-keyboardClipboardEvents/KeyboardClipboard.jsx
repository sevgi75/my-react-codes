import { useState } from "react";

const KeyboardClipboard = () => {
  const [icerik, serIcerik] = useState("")

  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
      alert("Buraya rakam girilemez")
      e.preventDefault() //? default davranisi kapatarak girilen rakamin inputa basilmasi engellenmis oldu
    }
    
  }
  return (
    <div className="container mt-4">
      <h2>Keyboard Events</h2>

      <input 
      type="text" 
      className="form-control"
      onChange={(e) => serIcerik(e.target.value.toLocaleUpperCase())}
      // HEP BUYUK HARF
      value={icerik}
      onKeyDown={handleKeyDown} 
      />

      <div className="mt-3">
        {/*  hep kucuk harf */}
        <p>{icerik.toLocaleLowerCase()}</p>
      </div>
    </div>
  )
}

export default KeyboardClipboard