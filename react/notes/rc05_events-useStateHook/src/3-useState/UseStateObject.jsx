import { useState } from "react"

const UseStateObject = () => {
    const [ad, setAd] = useState("Ahmet")
    const [meslek, setMeslek] = useState("Developer")
    const [yas, setYas] = useState(22)
  return (
    <div>
        <h1>Personel Formu</h1>
        <h2>Adi:{ad}</h2>
        <h3>Meslegi:{meslek}</h3>
        <h3>Yasi:{yas}</h3>

        <button onClick={() => setAd("Mehmet")}>isim degistir</button>
        <button onClick={() => setMeslek("tester")}>Meslek degistir</button>
        <button onClick={() => setYas(yas + 1)}>Yas degistir</button>
    </div>
  )
}

export default UseStateObject