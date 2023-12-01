//import "./Buton.css"
import ButonStyle from "./Buton.module.css"

//*Eger CSS teki class adi kebap-case seklinde yazilmis ise
//*module ile bu class'a erismek icin ornekte goruldugu gibi
//*koseli parantez ile erisim yapilir.Koseli parantez erisimi
//*en garanti yontemdir.

//* ORN:moduleName["class-adi"]

const Buton = ({ name }) => {
  return (
    //<div className="title">
    <div className={ButonStyle["title"]}>
      <button className={ButonStyle["btn-blue"]}>{name}</button>
    </div>
  )
}

export default Buton