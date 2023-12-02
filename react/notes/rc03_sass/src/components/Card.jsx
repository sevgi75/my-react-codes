import "../scss/card.scss"

const Card = ({veri}) => {
  //const { id, name, job, comment, img} = veri
  return (
    <div>
      {veri.map(({ id, name, job, comment, img}) => (
        <div>
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  ) 
  
}

export default Card
