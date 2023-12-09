import Card from 'react-bootstrap/Card';

const PlayerCard = ({img, name}) => {
  return (
    <Card className='ronded-2 m-auto player-card'>
      <Card.Img variant="top" src={img} className='player-logo' />
      <Card.Footer>
         <Card.Title>{name}</Card.Title>
      </Card.Footer>                  
    </Card>
  )
}

export default PlayerCard