import "./Card.css"
import data from "../../data"
import Buton from "../buton/Buton";

const Card = () => {
  console.log(data);
  return (
    <div>
      <h1>{data[0].language}</h1>
      <img src={data[0].img} alt="" />
      <Buton name={data[0].btnName}/>

      <h1>{data[1].language}</h1>
      <img src={data[1].img} alt="" />
      <Buton name={data[1].btnName}/>

    </div>
  )
}

export default Card