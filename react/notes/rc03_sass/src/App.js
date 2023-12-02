import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

import "./scss/app.scss"
import data from "./data"
export const divStyle = {display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", flexDirection:"column"}

function App() {
  return (
    <>
      <Header />
      <div>
        <Card  veri={data} />
      </div>
      <Footer />
    </>
  )
}

export default App
