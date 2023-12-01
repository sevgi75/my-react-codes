import Photo from "./Photo"


const Card = ({ name, tel, src }) => {
    // console.log(props);
  return (
    <div>
        <h2>Hello {name}</h2>
        <Photo img={src}/>
        <p>Telephone: {tel}</p>        
    </div>
  )
}

export default Card