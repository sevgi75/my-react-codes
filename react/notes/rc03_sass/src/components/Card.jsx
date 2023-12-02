import CardStyles from "../scss/card.module.scss"
import { divStyle } from "../App"

const Card = ({veri}) => {
  //const { id, name, job, comment, img} = veri
  return (
    <div style={divStyle}>
      {veri.map(({ id, name, job, comment, img}) => (
        <div className={CardStyles["cardDiv"]} key={id}>
          <h2>{name}</h2>
          <h3>{job}</h3>
          <img src={img} alt="img" width={"100px"} />
          <p>{comment}</p>
          <div>
            <button className={CardStyles["smlBtn"]}>Small</button>
            <button className={CardStyles["lrgBtn"]}>Large</button>
          </div>
        </div>
      ))}
    </div>
  ) 
  
}

export default Card
